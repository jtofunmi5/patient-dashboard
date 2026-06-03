import React from 'react';

const LabResults = ({ results }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm w-full">
      <h3 className="text-xl font-extrabold text-[#07263E] mb-6">Lab Results</h3>
      
      <div className="space-y-4 max-height:300px overflow-y-auto pr-2">
        {results && results.length > 0 ? (
          results.map((result, index) => (
            <div 
              key={index} 
              className="flex justify-between items-center p-3 hover:bg-[#F6F7F8] rounded-md cursor-pointer transition-colors"
            >
              <span className="text-[#07263E] text-sm">{result}</span>
              <button className="text-[#07263E] hover:text-gray-600">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 16.6667V3.33333M10 16.6667L15 11.6667M10 16.6667L5 11.6667" stroke="#07263E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500">No lab results available.</p>
        )}
      </div>
    </div>
  );
};

export default LabResults;