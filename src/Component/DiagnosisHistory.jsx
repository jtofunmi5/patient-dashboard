import React from 'react';
import BloodPressureChart from './BloodPressureChart';

const DiagnosisHistory = ({ history }) => {
  const latest = history[0];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h2 className="text-xl font-extrabold mb-6">Diagnosis History</h2>
      
      <div className="bg-[#F4F0FE] p-4 rounded-xl mb-6">
        <BloodPressureChart history={history} />
      </div>

      <div className="flex gap-8">
        <div>
           <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#E66FD2]"></div><span className="font-bold">Systolic</span></div>
           <h3 className="text-2xl font-bold">{latest?.blood_pressure.systolic.value}</h3>
           <p className="text-xs">{latest?.blood_pressure.systolic.levels}</p>
        </div>
        <div>
           <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#8C6FE6]"></div><span className="font-bold">Diastolic</span></div>
           <h3 className="text-2xl font-bold">{latest?.blood_pressure.diastolic.value}</h3>
           <p className="text-xs">{latest?.blood_pressure.diastolic.levels}</p>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisHistory;