import React, { useState } from 'react';
import ChitPlanCard from '../ChitPlanCard/ChitPlanCard';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['Plans', 'Timeline', 'Customer'];

  const data = [
    {
        "id": 2,
        "amount": 10000.0,
        "numCustomers": 10,
        "periodMonths": 12,
        "paymentFrequency": "MONTHLY",
        "startDate": "2024-08-01",
        "commissionPercentage": 5.0,
        "status": "Inactive"
    },
    {
        "id": 1,
        "amount": 20000.0,
        "numCustomers": 10,
        "periodMonths": 12,
        "paymentFrequency": "MONTHLY",
        "startDate": "2024-08-01",
        "commissionPercentage": 5.0,
        "status": "Inactive"
    },
    {
        "id": 3,
        "amount": 20000.0,
        "numCustomers": 0,
        "periodMonths": 12,
        "paymentFrequency": "MONTHLY",
        "startDate": "2024-08-01",
        "commissionPercentage": 5.0,
        "status": "Inactive"
  }];



  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex border-b bg-white fixed w-full">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`py-2 text-center focus:outline-none rounded-none bg-white border-b-2 border-t-0 border-l-0 border-r-0
              ${
                activeTab === index
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'border-transparent hover:text-gray-800'
              }
              `}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="pt-10">
        {activeTab === 0 && <div className="p-4">
          {
        data.map(d => {
          const {
            id,
            amount,
            numCustomers,
            periodMonths,
            paymentFrequency,
            startDate,
            commissionPercentage,
            status,
          } = d;
          return <ChitPlanCard id={id} amount={amount} numCustomers={numCustomers} periodMonths={periodMonths} paymentFrequency={paymentFrequency}
                               startDate={startDate} commissionPercentage={commissionPercentage} status={status}>
                  </ChitPlanCard>
        })
      }
    </div>}
        {activeTab === 1 && 
          // <div className="p-4">
          //   <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          //     {cards.map((card) => (
          //       <SelectableCard
          //         key={card.id}
          //         title={card.title}
          //         description={card.description}
          //         selected={selectedCard === card.id}
          //         onClick={() => setSelectedCard(card.id)}
          //       />
          //     ))}
          //   </div>
          // </div>

// <div className="overflow-x-auto">
// <div className="flex gap-4 flex-nowrap">
//   {cards.map((card) => (
//     <SelectableCard
//       key={card.id}
//       title={card.title}
//       selected={selectedCard === card.id}
//       onClick={() => setSelectedCard(card.id)}
//     />
//   ))}
// </div>
// </div>

<div className='p-4'>Content for Tab 2</div>

        }
        {activeTab === 2 && <div className="p-4">Content for Tab 3</div>}
      </div>
    </div>
  );
};

export default TabComponent;

