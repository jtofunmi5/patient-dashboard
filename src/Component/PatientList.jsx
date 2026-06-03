import React from 'react';
import searchIcon from '../assets/search.svg'; 
import moreHorizIcon from '../assets/moreHoriz.svg';

const PatientList = ({ activePatientName, onPatientSelect }) => {
  const mockPatients = [
    { name: 'Emily Williams', gender: 'Female', age: 24, initials: 'EW', color: '#E2F0D9' },
    { name: 'Ryan Martinez', gender: 'Male', age: 36, initials: 'RM', color: '#FCE4D6' },
    { name: 'Brandon Johns', gender: 'Male', age: 42, initials: 'BJ', color: '#FFF2CC' },
    { name: 'Jessica Taylor', gender: 'Female', age: 28, initials: 'JT', color: '#D9E1F2' },
    { name: 'Samantha Collins', gender: 'Female', age: 33, initials: 'SC', color: '#E1D5E7' },
    { name: 'Ashley Flores', gender: 'Female', age: 29, initials: 'AF', color: '#F8CECC' },
      { name: 'Emily Williams', gender: 'Female', age: 24, initials: 'EW', color: '#E2F0D9' },
    { name: 'Ryan Martinez', gender: 'Male', age: 36, initials: 'RM', color: '#FCE4D6' },
    { name: 'Brandon Johns', gender: 'Male', age: 42, initials: 'BJ', color: '#FFF2CC' },
    { name: 'Jessica Taylor', gender: 'Female', age: 28, initials: 'JT', color: '#D9E1F2' },
    { name: 'Samantha Collins', gender: 'Female', age: 33, initials: 'SC', color: '#E1D5E7' },
    { name: 'Ashley Flores', gender: 'Female', age: 29, initials: 'AF', color: '#F8CECC' }
  ];

  return (
    <aside className="bg-white rounded-2xl p-5 shadow-sm max-h-[850px] flex flex-col h-full">
     
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-extrabold text-[#07263E]">Patients</h2>
        <img src={searchIcon} alt="Search" className="w-5 h-5 cursor-pointer opacity-80 hover:opacity-100 transition-opacity" />
      </div>
      
      
      <div className="flex flex-col gap-1 overflow-y-auto pr-1 custom-scrollbar flex-1">
        {mockPatients.map((patient, index) => {
          const isActive = patient.name === activePatientName;

          return (
            <div 
              key={index} 
              className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all ${
                isActive ? 'bg-[#D8FCF7]' : 'hover:bg-[#F6F7F8]'
              }`}
            >

              <div className="flex items-center gap-3">
                
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-sm font-bold text-[#07263E]"
                  style={{ backgroundColor: patient.color }}
                >
                  {patient.initials}
                </div>

                <div className="flex flex-col text-left">
                  <span className="text-sm font-bold text-[#07263E] block truncate max-w-[160px]">
                    {patient.name}
                  </span>
                  <span className="text-xs text-[#707070] font-medium">
                    {patient.gender}, {patient.age}
                  </span>
                </div>
              </div>

              <img 
                src={moreHorizIcon} 
                alt="Options" 
                className={`w-6 h-6 transition-opacity ${isActive ? 'opacity-100' : 'opacity-40'}`} 
              />
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default PatientList;