"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react"; 
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { PlanTypeConfig } from "@/shared/config";

// Zod validation schema
const formSchema = z.object({
  groupName: z.string().max(10, "Group name cannot exceed 10 characters"),
  planType: z.string().nonempty("Plan type is required"),
  numCustomers: z.number().min(1, "At least 1 customer is required"),
  periodMonths: z.number().min(1, "Period must be at least 1 month"),
  paymentCycle: z.string().nonempty("Payment cycle is required"),
  commissionPercentage: z.number().min(0, "Commission cannot be negative").max(100, "Commission cannot exceed 100%"),
  startDate: z.date(),
});

type FormData = z.infer<typeof formSchema>;

const CreatePlanForm = ({ isOpen, onClose, onSubmit }: { isOpen: boolean; onClose: () => void; onSubmit: (data: FormData) => void }) => {
  const { control, handleSubmit, register, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  // State for controlling the selected start date
  const [date, setDate] = useState<Date | undefined>(undefined);

  const handleCancel = () => {
    reset(); // Reset form state on cancel
    onClose(); // Close the modal
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Group</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Group Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Group name (max 10 characters)</label>
            <Input
              {...register("groupName")}
              maxLength={10}
              placeholder="Enter group name"
              aria-invalid={errors.groupName ? "true" : "false"}
            />
            {errors.groupName && <p className="text-red-500 text-sm">{errors.groupName.message}</p>}
          </div>

          <div className="flex gap-4">
          
            {/* Plan Type */}
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">Plan type</label>
              <Controller
                control={control}
                name="planType"
                render={({ field }) => (
                  <Select
                    onValueChange={(value) => field.onChange(value)} // Update form state
                    value={field.value} // Bind the current value to the Select component
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a plan type" />
                    </SelectTrigger>
                    <SelectContent>
                      {
                        PlanTypeConfig?.map(config => {
                          return <SelectItem value={config.value}>{config.label}</SelectItem>
                        })
                      }
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.planType && <p className="text-red-500 text-sm">{errors.planType.message}</p>}
            </div>

            {/* Number of Customers */}
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">No. of customers</label>
              <Controller
                control={control}
                name="numCustomers"
                render={({ field }) => (
                  <Input
                    type="number"
                    placeholder="Enter number of customers"
                    value={field.value || ""}
                    onChange={(e) => {
                      const value = e.target.value;
                      field.onChange(value === "" ? undefined : parseInt(value, 10));
                    }}
                  />
                )}
              />
              {errors.numCustomers && <p className="text-red-500 text-sm">{errors.numCustomers.message}</p>}
            </div>
          </div>

          <div className="flex gap-4">

            {/* Period in Months */}
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">No. of months</label>
              <Controller
                control={control}
                name="periodMonths"
                render={({ field }) => (
                  <Input
                    type="number"
                    placeholder="Enter period in months"
                    value={field.value || ""}
                    onChange={(e) => {
                      const value = e.target.value;
                      field.onChange(value === "" ? undefined : parseInt(value, 10));
                    }}
                  />
                )}
              />
              {errors.periodMonths && (
                <p className="text-red-500 text-sm">{errors.periodMonths.message}</p>
              )}
            </div>

            {/* Payment Cycle */}
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">Payment cycle</label>
              <Controller
                control={control}
                name="paymentCycle"
                render={({ field }) => (
                  <Select 
                    onValueChange={(value) => field.onChange(value)} // Update form state
                    value={field.value} // Bind the current value to the Select component
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a payment cycle" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="quarterly">Quarterly</SelectItem>
                      <SelectItem value="annually">Annually</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.paymentCycle && <p className="text-red-500 text-sm">{errors.paymentCycle.message}</p>}
            </div>

          </div>

          {/* Start Date (Popover with Calendar) */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Start date</label>
            <Controller
              control={control}
              name="startDate"
              render={({ field }) => (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={(selectedDate) => {
                        setDate(selectedDate);
                        field.onChange(selectedDate); // Update form state with selected date
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              )}
            />
            {errors.startDate && <p className="text-red-500 text-sm">{errors.startDate.message}</p>}
          </div>
        
          {/* Commission Percentage */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Commission percentage</label>
            <Controller
              control={control}
              name="commissionPercentage"
              render={({ field }) => (
                <Input
                  type="number"
                  placeholder="Enter commission percentage"
                  value={field.value || ""}
                  onChange={(e) => {
                    const value = e.target.value;
                    field.onChange(value === "" ? undefined : parseInt(value, 10));
                  }}
                />
              )}
            />
           {errors.commissionPercentage && <p className="text-red-500 text-sm">{errors.commissionPercentage.message}</p>}
          </div>

          {/* Action Buttons */}
          <div className="flex w-full justify-between gap-4">
            <Button variant="ghost" className="h-8" type="button" onClick={handleCancel}>Cancel</Button>
            <Button type="submit" className="h-8 bg-blue-500 text-white px-4 rounded bg-blue-500 text-white hover:bg-blue-700">Create Plan</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePlanForm;


