import React, { useState } from 'react';
import Header from '../Header/Header';
import NewActionPopover from '@/components/custom-ui/button-popover/button-popver';
import CreatePlanForm from '../CreatePlan/CreatePlan';

const PlanPage: React.FC = () => {

  const [showNewPlanForm, setShowNewPlanForm] = useState(false);
  
  const handleNewFormClose = () => {
    setShowNewPlanForm(false);
  };
  const handleNewPlanSubmit = (data) => {
    console.log('Data: ', data);
  };

  const handleGroupClick = () => {
    setShowNewPlanForm(true);
  };
  const handleCustomerClick = () => {};

    return (
      <div>
        <Header>
           <NewActionPopover onGroupClick={handleGroupClick} onCustomerClick={handleCustomerClick}></NewActionPopover>
        </Header>
        <div className="overflow-x-auto w-full">
           <CreatePlanForm isOpen={showNewPlanForm} onSubmit={handleNewPlanSubmit} onClose={handleNewFormClose}></CreatePlanForm>
        </div>
      </div>
  );
};

export default PlanPage;