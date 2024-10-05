import * as React from "react"
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
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

import './Header.css';

const Header: React.FC = () => {
  const [date, setDate] = React.useState<Date>()
  const [menuOpen, setMenuOpen] = React.useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="header-container">
        <div className="header-logo-menu">
            <HamburgerMenu isOpen={menuOpen} onClose={toggleMenu} />
            <img width='70' className="ml-3" src='/images/chiti-horizontal-logo.svg'/>
        </div>
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
    </div>
  )
}

export default Header; 