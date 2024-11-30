import React from 'react';
import Header from '../Header/Header';
import BottomNav from '../BottomNav/BottomNav';

const DashboardLayout: React.FC<{ showHeader?: boolean,children: React.ReactNode }> = ({ showHeader = true, children }) => {
  return (
    <div className="flex flex-col h-screen">
      { showHeader && <Header/> }
      <main className="flex-grow overflow-auto mt-[60px]">
        {children}
      </main>
      <BottomNav />
    </div>
  );
};

export default DashboardLayout;
