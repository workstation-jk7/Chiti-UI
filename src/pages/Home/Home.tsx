import { ProgressIndicator } from '@/components/custom-ui/progress-indicator/progress-indicator';
import { SelectableCard } from '@/components/custom-ui/select-options/select-options';
import { ChitPlanTypesData } from '@/shared/config';
import React, { useState } from 'react';

const HomePage: React.FC = () => {

  const progressData = [
    { day: 4, dayString: "Tue", value: 15, total: 20 },
    { day: 5, dayString: "Wed", value: 10, total: 20 },
    { day: 8, dayString: "Sat", value: 12, total: 20 },
    { day: 2, dayString: "Wed", value: 2, total: 20 },
    { day: 18, dayString: "Tue", value: 5, total: 20 },
    { day: 21, dayString: "Fri", value: 12, total: 20 },
    { day: 22, dayString: "Sat", value: 4, total: 20 },
    { day: 23, dayString: "Sun", value: 10, total: 20 },
    { day: 26, dayString: "Wed", value: 14, total: 20 },
    { day: 27, dayString: "Thu", value: 7, total: 20 }
  ];

  const [selectedCard, setSelectedCard] = useState<number | null>(ChitPlanTypesData[0].id);

  return (
    <div>
      {/* <div className="overflow-x-auto w-full">
        <div className="flex gap-4 flex-nowrap">
          {ChitPlanTypesData.map((planType) => (
            <SelectableCard
              key={planType.id}
              title={planType.title}
              selected={selectedCard === planType.id}
              onClick={() => setSelectedCard(planType.id)}
            />
          ))}
        </div>
      </div> */}
      <div className="bg-white p-4 overflow-x-auto w-full scrollbar-none">
        <div className="flex gap-4 flex-nowrap">
          {ChitPlanTypesData.map((planType) => (
            <SelectableCard
              key={planType.id}
              title={planType.title}
              selected={selectedCard === planType.id}
              onClick={() => setSelectedCard(planType.id)}
            />
          ))}
        </div>
      </div>
      <div className='p-2 flex flex-wrap gap-4'>
        {progressData.map((item, index) => (
          <div key={index} className="flex items-center justify-center sm:w-[calc(50%-16px)] md:w-[calc(33.33%-16px)] mb-[30px]">
            <ProgressIndicator
              day={item.day} // Numerical day
              dayText={item.dayString} // Day as a string
              value={item.value} // Progress value
              total={item.total} // Total value
            />
          </div>
        ))}
        {/* <div className='mb-[30px]'>
          <ProgressIndicator day="Tue" value={15} total={20}></ProgressIndicator>
        </div>
        <div className='mb-[30px]'>
          <ProgressIndicator day="Mon" value={10} total={20}></ProgressIndicator>
        </div>
        <div className='mb-[30px]'>
          <ProgressIndicator day="Wed" value={15} total={50}></ProgressIndicator>
        </div>
        <div className='mb-[30px]'>
          <ProgressIndicator day="Wed" value={15} total={50}></ProgressIndicator>
        </div>           */}
      </div>

    </div>
  );
};

export default HomePage;

 {/* Todo <TabComponent></TabComponent> */} 
