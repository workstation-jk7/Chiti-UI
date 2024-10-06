import { Badge } from "@/components/ui/badge";

interface ChitPlanCardProps {
  id: number;
  amount: number;
  numCustomers: number;
  periodMonths: number;
  paymentFrequency: string;
  startDate: string;
  commissionPercentage: number;
  status: string | null;
}

const ChitPlanCard: React.FC<ChitPlanCardProps> = ({
  id,
  amount,
  numCustomers,
  periodMonths,
  paymentFrequency,
  startDate,
  commissionPercentage,
  status,
}) => {
  return (
    <div className="max-w-md mb-4 p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-xl font-semibold mb-2">Chit Plan #{id}</h2>
      <div className="text-gray-600 mb-4">
        <p><span className="font-medium">Amount:</span> ₹{amount}</p>
        <p><span className="font-medium">Number of Customers:</span> {numCustomers}</p>
        <p><span className="font-medium">Period (Months):</span> {periodMonths}</p>
        <p><span className="font-medium">Start Date:</span> {new Date(startDate).toLocaleDateString()}</p>
        <p><span className="font-medium">Commission:</span> {commissionPercentage}%</p>
      </div>

      <div className="flex items-center justify-between">
        <Badge variant="secondary" className="uppercase">{paymentFrequency}</Badge>
        {status ? (
          <Badge variant="default" className="uppercase">{status}</Badge>
        ) : (
          <Badge variant="secondary" className="uppercase">Pending</Badge>
        )}
      </div>
    </div>
  );
};

export default ChitPlanCard;
