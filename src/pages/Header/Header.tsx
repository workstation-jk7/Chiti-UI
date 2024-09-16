import * as React from "react"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
 
import './Header.css';

const Header: React.FC = () => {
  const userData = JSON.parse(sessionStorage.getItem('user') as any);
  const [date, setDate] = React.useState<Date>()
 
  return (
    <div className="header-container">
        <img src='/images/chiti-horizontal-logo.svg'/>
        <div className="header-item">
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                    variant={"outline"}
                    className={cn(
                        "w-[240px] justify-start text-left font-normal",
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
            <Avatar>
                <AvatarImage src={userData?.photoURL}/>
                <AvatarFallback>{userData?.displayName}</AvatarFallback>
            </Avatar>
        </div>
    </div>
    
  )
}

export default Header; 