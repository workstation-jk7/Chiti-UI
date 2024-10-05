import React, { useState } from 'react';
import Header from '../Header/Header';
import BottomNav from '../BottomNav/BottomNav';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import { Menu, X } from "lucide-react";  // Import the icons

const DashboardPage: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle between open and closed
  };
  
  return (
    <main className="flex-1 p-4">
      <header className="lg:hidden">
        <Header></Header>
        
        <HamburgerMenu isOpen={menuOpen} onClose={toggleMenu} />
      </header>
      <section>
      <button onClick={toggleMenu} className="p-2">
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />} {/* Icon toggles */}
        </button>
        <h1 className="text-2xl font-bold">Welcome to the App</h1>
        <p>Here is your content.</p>
      </section>
      <BottomNav></BottomNav>
    </main>
  );
};

export default DashboardPage;

