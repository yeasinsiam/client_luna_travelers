import React from "react";

export default function CancellationPolicyTab() {
  return (
    <div className="p-5 mt-5 bg-white border border-gray-200 rounded-lg shadow-lg md:grid-cols-2 md:mt-6">
      <h4 className="text-lg font-bold leading-normal text-red-500">
        Cancellation Policy:
      </h4>

      <div className="whitespace-pre text-slate-500 ">
        {`
• Once the trip is paid in full, it is non-refundak 
• If cancellation occurs: 
    • Before December 31, 2024: A $300  
    • Once paid, the commitment deposit of 
    • Any processing fees, ticketed air are  
• Purchase Travel, Accident and Cancellation insurance policies.
       `}
      </div>
    </div>
  );
}
