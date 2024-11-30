import { ProgressIndicator } from '@/components/custom-ui/progress-indicator/progress-indicator';
import { SelectableCard } from '@/components/custom-ui/select-options/select-options';
import { routePath } from '@/route/RouteConfig';
import { ChitPlanTypesData } from '@/shared/config';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';

import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { CalendarIcon } from "@radix-ui/react-icons"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const HomePage: React.FC = () => {

  const navigate = useNavigate();
  const [date, setDate] = React.useState<Date>()

  const progressData = [
    { day: 4, dayString: "Tue", value: 15, total: 20 },
    { day: 5, dayString: "Wed", value: 10, total: 20 },
    { day: 8, dayString: "Sat", value: 12, total: 20 },
    { day: 2, dayString: "Wed", value: 2, total: 20 },
    { day: 18, dayString: "Tue", value: 5, total: 20 },
    { day: 21, dayString: "Fri", value: 12, total: 20 },
    { day: 22, dayString: "Sat", value: 4, total: 20 },
    { day: 23, dayString: "Sun", value: 10, total: 20 },
    { day: 26, dayString: "Wed", value: 14, total: 20 },
    { day: 27, dayString: "Thu", value: 7, total: 20 }
  ];

  const [selectedCard, setSelectedCard] = useState<number | null>(ChitPlanTypesData[0].id);

  return (
    <div>
      <Header>
        <div className="date-picker">
          <Popover>
              <PopoverTrigger asChild>
                  <Button
                  variant={"outline"}
                  className={cn(
                      "w-[180px] justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                  )}
                  >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  />
              </PopoverContent>
          </Popover>
        </div>
      </Header>
      <div className="bg-white p-4 overflow-x-auto w-full scrollbar-none">
        <div className="flex gap-4 flex-nowrap">
          {ChitPlanTypesData.map((planType) => (
            <SelectableCard
              key={planType.id}
              title={planType.title}
              selected={selectedCard === planType.id}
              onClick={() => setSelectedCard(planType.id)}
            />
          ))}
        </div>
      </div>
      <div className='p-2 flex flex-wrap gap-[1.5rem] items-center justify-center'>
        {progressData.map((item, index) => (
          <div key={index} className="flex sm:w-[calc(50%-8px)] md:w-[calc(33.33%-8px)] mb-[30px]" onClick={() => {
            navigate(routePath.PlanPage);
          }}>
            <ProgressIndicator
              day={item.day} // Numerical day
              dayText={item.dayString} // Day as a string
              value={item.value} // Progress value
              total={item.total} // Total value
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

 {/* Todo <TabComponent></TabComponent> */} 
