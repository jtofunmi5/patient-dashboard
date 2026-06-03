import React from 'react';
import female from '../assets/Layer.png';
import birthIcon from '../assets/BirthIcon.svg';
import femaleIcon from '../assets/FemaleIcon.svg';
import phoneIcon from '../assets/PhoneIcon.svg';
import insuranceIcon from '../assets/InsuranceIcon.svg';
import downloadIcon from '../assets/download_icon.svg';

const ProfileSidebar = ({ patient }) => {
  // Safe layout placeholder check
  if (!patient) {
    return (
      <aside className="bg-white rounded-2xl p-6 shadow-sm text-center text-[#07263E] font-bold">
        Loading Profile...
      </aside>
    );
  }

  const infoItems = [
    { label: 'Date Of Birth', value: patient.date_of_birth, icon: birthIcon },
    { label: 'Gender', value: patient.gender, icon: femaleIcon },
    { label: 'Phone Number', value: patient.phone_number, icon: phoneIcon },
    { label: 'Emergency Contact', value: patient.emergency_contact, icon: phoneIcon },
    { label: 'Insurance Provider', value: patient.insurance_type, icon: insuranceIcon },
  ];

  return (
    <aside className="flex flex-col gap-8 w-full">
      
      {/* Upper Panel: Patient Profile Info */}
      <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col items-center text-center">
        <img 
          src={female} 
          alt={patient.name} 
          className="w-28 h-28 rounded-full object-cover mb-4 border-2 border-[#01F0D0]"
        />
        <h2 className="text-2xl font-extrabold text-[#07263E] mb-6">{patient.name}</h2>

        <div className="w-full flex flex-col gap-6 text-left">
          {infoItems.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#F6F7F8] flex items-center justify-center shrink-0">
                <img 
                  src={item.icon} 
                  alt={item.label} 
                  className="w-5 h-5" 
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs text-[#707070] font-medium">{item.label}</span>
                <span className="text-sm font-bold text-[#07263E] truncate">{item.value || 'N/A'}</span>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-8 w-full bg-[#01F0D0] hover:bg-[#01d4b8] text-[#07263E] font-bold py-3 px-4 rounded-full transition-all tracking-wide text-sm shadow-sm">
          Show All Information
        </button>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col text-left max-h-[350px]">
        <h3 className="text-xl font-extrabold text-[#07263E] mb-4">Lab Results</h3>
        
        <div className="flex flex-col gap-2 overflow-y-auto pr-1 flex-1 custom-scrollbar">
          {patient.lab_results && patient.lab_results.map((result, index) => (
            <div 
              key={index} 
              className="flex items-center justify-between p-3 rounded-lg hover:bg-[#F6F7F8] transition-colors group cursor-pointer"
            >
              <span className="text-sm font-medium text-[#07263E] group-hover:font-semibold transition-all">
                {result}
              </span>
              <img 
                src={downloadIcon} 
                alt="Download" 
                className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" 
              />
            </div>
          ))}
        </div>
      </div>

    </aside>
  );
};

export default ProfileSidebar;


