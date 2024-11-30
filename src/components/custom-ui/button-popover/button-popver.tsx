import React from "react";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const NewActionPopover = ({ onGroupClick, onCustomerClick }) => {
  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="h-8 bg-blue-500 text-white hover:bg-blue-700" variant="ghost" size="sm">
            New
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40">
          <div className="flex flex-col space-y-2">
            {/* Group Option */}
            <DropdownMenuItem onClick={onGroupClick}>
              Group
            </DropdownMenuItem>
            {/* Customer Option */}
            <DropdownMenuItem onClick={onCustomerClick}>
              Customer
            </DropdownMenuItem>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NewActionPopover;
