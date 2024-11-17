// import React from "react";
// import { cn } from "@/lib/utils";

// interface SelectableCardProps {
//   title: string;
//   description?: string;
//   selected?: boolean;
//   onClick?: () => void;
// }

// export const SelectableCard: React.FC<SelectableCardProps> = ({
//   title,
//   description,
//   selected = false,
//   onClick,
// }) => {
//   return (
//     <div
//       className={cn(
//         "border py-1 px-2 cursor-pointer transition-shadow rounded-sm", // Added rounded-lg for smooth corners
//         selected
//           ? "border-blue-500 bg-[#6366F1] text-white shadow-lg"
//           : "border-gray-300 bg-[#E1E9F3] hover:shadow-md"
//       )}
//       onClick={onClick}
//     >
//       <h3 className="font-inter font-normal text-sm leading-4">{title}</h3>
//       {description && <p className="font-inter font-normal text-xs leading-4">{description}</p>}
//     </div>
//   );
// };

import React from "react";
import { cn } from "@/lib/utils";

interface SelectableCardProps {
  title: string;
  description?: string;
  selected?: boolean;
  onClick?: () => void;
}

export const SelectableCard: React.FC<SelectableCardProps> = ({
  title,
  description,
  selected = false,
  onClick,
}) => {
  return (
    <div
      className={cn(
        "border py-1 px-2 cursor-pointer transition-shadow rounded-lg flex items-center", // Added flex and items-center to keep content in a row
        selected
          ? "border-blue-500 bg-[#6366F1] text-white shadow-lg"
          : "border-gray-300 bg-[#E1E9F3] hover:shadow-md"
      )}
      onClick={onClick}
    >
      <h3 className="font-inter font-normal text-sm leading-4 mr-2 whitespace-nowrap" style={{ color: selected ? "white" : "var(--text-secondary)"}}>{title}</h3>
      {description && (
        <p className="font-inter font-normal text-xs leading-4 whitespace-nowrap" style={{ color: selected ? "white" : "var(--text-secondary)"}}>{description}</p>
      )}
    </div>
  );
};
