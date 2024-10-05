import { auth } from '../../auth/firebase';
import { Menu, LogOut } from "lucide-react"; 
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { routePath } from "@/route/RouteConfig";
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";


const HamburgerMenu = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem('user') as never);
  console.log(userData?.photoURL)
  return (
    <div className="flex items-center">
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetTrigger asChild>
          <Menu className="h-6 w-6" />
        </SheetTrigger>
        <SheetContent side="left" className="p-4 w-64 bg-white text-black flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex flex-col items-center space-y-3">
              <Avatar>
                <AvatarImage width='75' height='75' src={userData?.photoURL}/>
              </Avatar>
              <div>
                <h2 className="text-lg font-semibold text-black">{userData?.displayName}</h2>
                <p className="text-sm text-gray-600">{userData?.email}</p>
              </div>
            </div>
          </div>

          {/* Middle Section: Navigation Menu */}
          <nav className="space-y-4 flex-grow">
            <a href="#home" className="block">Home</a>
            <a href="#about" className="block">About</a>
            <a href="#services" className="block">Services</a>
            <a href="#contact" className="block">Contact</a>
          </nav>

          {/* Bottom Section: Logout Button */}
          <div className="pt-4">
            <Button variant="ghost" className="w-full text-left flex items-center" onClick={async () => {
                await auth.signOut();
                setTimeout(() => {
                    localStorage.clear();
                    navigate(routePath.Login);
                },500)
            }}>
              <LogOut className="mr-2 h-5 w-5" />
              Logout
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default HamburgerMenu;
