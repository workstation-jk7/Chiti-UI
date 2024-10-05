import React from 'react';
import Header from '../Header/Header';
import BottomNav from '../BottomNav/BottomNav';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header/>
      <main className="flex-grow overflow-auto mt-[60px]">
        {children}
      </main>
      <BottomNav />
    </div>
  );
};

export default DashboardLayout;
