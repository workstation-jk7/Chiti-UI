// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { routePath } from "@/route/RouteConfig";
// import { Home, Bell, Plus, Wallet, Hammer } from "lucide-react";

// const BottomNav = () => {
//   const navigate = useNavigate();
//   const [active, setActive] = useState("home");

//   const navItems = [
//     { id: "home", label: "Home", path: routePath.Dashboard, icon: <Home /> },
//     { id: "wallets", label: "Payments", path:'', icon: <Wallet /> },
//     { id: "auctions", label: "Auctions", path:'', icon: <Hammer /> },
//     { id: "notifications", label: "Notifications", path: routePath.Notification, icon: <Bell /> },
//   ];

//   return (
//     <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 z-10">
//       {/* The bottom navigation area */}
//       <div className="flex justify-around py-2 relative">
//         {navItems.map((item) => (
//           <NavItem
//             key={item.id}
//             icon={item.icon}
//             label={item.label}
//             isActive={active === item.id}
//             onClick={() => {
//               setActive(item.id);
//               navigate(item.path);
//             }}
//           />
//         ))}

//         {/* Floating Plus Button */}
//         <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-20">
//           <button className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
//             <Plus size={32} />
//           </button>
//         </div>
//       </div>

//       {/* Curved Highlight (Speed Breaker) */}
//       <div className="absolute bottom-0 w-full h-12 bg-white z-[-1] flex justify-center">
//         <div className="relative">
//           <div className="bg-white w-24 h-12 rounded-t-full shadow-lg"></div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// const NavItem = ({ icon, label, isActive, onClick }) => {
//   return (
//     <div
//       onClick={onClick}
//       className={`flex flex-col items-center ${
//         isActive ? "text-blue-500" : "text-gray-500"
//       } hover:text-blue-500 cursor-pointer`}
//     >
//       {icon}
//       <span className="text-xs">{label}</span>
//       {isActive && <div className="w-2 h-2 bg-blue-500 rounded-full mt-1" />}
//     </div>
//   );
// };

// export default BottomNav;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { routePath } from "@/route/RouteConfig";
import { Home, Bell, Plus, Wallet, Hammer } from "lucide-react";

import './BottomNav.css';

const BottomNav = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", label: "Home", path: routePath.Dashboard, icon: <Home />, canHighlight: true },
    { id: "wallets", label: "Payments", path: routePath.Payments, icon: <Wallet />, canHighlight: true },
    { id: "plus", label: "", path: '', canHighlight: false,
      icon: (
        <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
          <Plus size={32} />
        </div>
      )
    },

    { id: "auctions", label: "Auctions", path: routePath.Auctions, icon: <Hammer />, canHighlight: true },
    { id: "alerts", label: "Alerts", path: routePath.Notification, icon: <Bell />, canHighlight: true },
  ];

  return (
    <nav className="fixed bottom-0 w-full bg-white z-10 rounded-3xl">
      {/* The bottom navigation area */}
      <div className="flex justify-around py-2">
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            isActive={active === item.id}
            canHighlight={item.canHighlight}
            onClick={() => {
              setActive(item.id);
              navigate(item.path);
            }}
          />
        ))}
      </div>

      {/* Curved Highlight (Speed Breaker) */}
      <div className="absolute bottom-0 w-full h-12 bg-white z-[-1] flex justify-center">
        <div className="relative">
          <div className="bg-white w-24 h-12 rounded-t-full shadow-lg"></div>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ icon, label, isActive, onClick, canHighlight }) => {
  return (
    <div className="relative">
      <div
        onClick={onClick}
        className={`flex flex-col items-center ${!canHighlight && 'floating-icon'} ${
          isActive ? "text-blue-500" : "text-gray-500"
        } hover:text-blue-500 cursor-pointer`}
      >
        {icon}
        {
          !canHighlight &&
          <div className="floating-icon-highlight"></div>
        }
        <span className="text-xs">{label}</span>
        {isActive && canHighlight && <div className="w-2 h-2 bg-blue-500 rounded-full mt-1" />}
      </div>
    </div>
  );
};

export default BottomNav;


