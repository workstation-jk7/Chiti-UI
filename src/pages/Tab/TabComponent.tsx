// import React, { useState } from 'react';

// const TabComponent = () => {
//   const [activeTab, setActiveTab] = useState(0);

//   const tabs = ['Plans', 'Timeline', 'Customers'];

//   return (
//     <div className="w-full">
//       {/* Tab Navigation */}
//       <div className="flex space-x-4 border-b border-gray-300">
//         {tabs.map((tab, index) => (
//           <button
//             key={index}
//             style={{borderRadius:'0px'}}
//             className={`py-2 px-4 focus:outline-none border-b-2 ${
//               activeTab === index
//                 ? 'border-indigo-500 text-indigo-600'
//                 : 'border-transparent text-gray-500 hover:text-gray-800'
//             }`}
//             onClick={() => setActiveTab(index)}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Tab Content */}
//       <div className="mt-4">
//         {activeTab === 0 && <div className="p-4">Content for Tab 1</div>}
//         {activeTab === 1 && <div className="p-4">Content for Tab 2</div>}
//         {activeTab === 2 && <div className="p-4">Content for Tab 3</div>}
//       </div>
//     </div>
//   );
// };

// export default TabComponent;

import React, { useState } from 'react';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['Plans', 'Timeline', 'Customer'];

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex border-b bg-white">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`py-2 text-center focus:outline-none rounded-none bg-white border-b-2 border-t-0 border-l-0 border-r-0
              ${
                activeTab === index
                  ? 'border-b-2 border-indigo-500 text-indigo-600'
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
      <div className="mt-4">
        {activeTab === 0 && <div className="p-4">Content for Tab 1</div>}
        {activeTab === 1 && <div className="p-4">Content for Tab 2</div>}
        {activeTab === 2 && <div className="p-4">Content for Tab 3</div>}
      </div>
    </div>
  );
};

export default TabComponent;

