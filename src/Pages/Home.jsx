import React, { useState, useEffect } from 'react';
import Navbar from '../Component/Navbar';
import PatientList from '../Component/PatientList'; 
import DiagnosisHistory from '../Component/DiagnosisHistory';
import ProfileSidebar from '../Component/ProfileSidebar';
import DiagnosticList from '../Component/DiagnosticList';

function Home() {
  const [patientData, setPatientData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activePatientName, setActivePatientName] = useState('Jessica Taylor');

  useEffect(() => {
    const mockData = [
      {
        name: 'Jessica Taylor',
        gender: 'Female',
        age: 28,
        profile_picture: 'https://fedskillstest.coalitiontechnologies.workers.dev/assets/jessica_taylor.png',
        date_of_birth: '1996-08-23',
        phone_number: '(415) 555-1234',
        emergency_contact: '(415) 555-5678',
        insurance_type: 'Sunrise Health Insurance',
        diagnostic_list: [
          { name: 'Hypertension', description: 'Chronic high blood pressure', status: 'Under Observation' },
          { name: 'Type 2 Diabetes', description: 'Managed through dietary restrictions', status: 'Stable' }
        ],
        diagnosis_history: [
          {
            month: 'March', year: 2024,
            blood_pressure: { systolic: { value: 160, levels: 'Higher than average' }, diastolic: { value: 78, levels: 'Lower than average' } },
            respiratory_rate: { value: 20, levels: 'Normal' },
            temperature: { value: 98.6, levels: 'Normal' },
            heart_rate: { value: 78, levels: 'Lower than average' }
          }
        ],
        lab_results: ['Blood Tests', 'CT Scan', 'Radiology Report', 'Echocardiogram', 'Glucose Test']
      }
    ];

    setPatientData(mockData);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-12 h-12 border-4 border-[#01F0D0] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const activePatient = patientData.find(p => p.name === 'Jessica Taylor');

  if (!activePatient && !loading) return <div>No patient data found. Check API logs.</div>;

  return (
    <div className="bg-[#F6F7F8] min-h-screen p-4 md:p-8 flex flex-col gap-8 font-sans">
      <Navbar />

      <main className="grid grid-cols-1 lg:grid-cols-[360px_1fr_360px] gap-8 max-w-[1600px] mx-auto w-full items-start">
        
        <PatientList 
          activePatientName={activePatientName} 
          onPatientSelect={(name) => setActivePatientName(name)} 
        />

        <div className="flex flex-col gap-8 w-full min-w-0">
          <DiagnosisHistory history={activePatient?.diagnosis_history || []} />
          <DiagnosticList diagnostics={activePatient?.diagnostic_list || []} />
        </div>

        <ProfileSidebar patient={activePatient} />
        
      </main>
    </div>
  );
}

export default Home;