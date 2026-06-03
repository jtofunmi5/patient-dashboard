import React from 'react';

const DiagnosticList = ({ diagnostics }) => {
  const displayDiagnostics = diagnostics || [
    { name: 'Hypertension', description: 'Chronic high blood pressure requiring regular monitoring', status: 'Under Observation' },
    { name: 'Type 2 Diabetes', description: 'Managed through dietary restrictions and insulin therapy', status: 'Stable' },
    { name: 'Asthma', description: 'Occasional acute flares triggered by pollen or dust allergens', status: 'Cured' }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col text-left h-full max-h-[300px]">
      <h3 className="text-xl font-extrabold text-[#07263E] mb-5">Diagnostic List</h3>
      
      <div className="flex flex-col flex-1 overflow-y-auto pr-1 custom-scrollbar">
        
        <div className="grid grid-cols-3 bg-[#F6F7F8] rounded-full px-4 py-3 text-sm font-bold text-[#07263E] mb-2 sticky top-0">
          <div>Problem / Diagnosis</div>
          <div>Description</div>
          <div>Status</div>
        </div>

        <div className="flex flex-col gap-1">
          {displayDiagnostics.map((item, index) => (
            <div 
              key={index} 
              className="grid grid-cols-3 px-4 py-4 text-sm border-b border-[#F6F7F8] last:border-0 items-center hover:bg-[#F6F7F8]/50 transition-colors"
            >
              <div className="font-semibold text-[#07263E]">{item.name}</div>
              <div className="text-[#707070] pr-4 line-clamp-2">{item.description}</div>
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                  item.status === 'Under Observation' ? 'bg-[#FFF2CC] text-[#07263E]' :
                  item.status === 'Stable' ? 'bg-[#E2F0D9] text-[#07263E]' : 
                  'bg-[#F8CECC] text-[#07263E]'
                }`}>
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default DiagnosticList;