import React from 'react';
import testLogo from '../assets/TestLogo.svg'; 
import home from '../assets/home.svg';
import group from '../assets/group.svg';
import calendar_today from '../assets/calendar_today.svg';
import chats from '../assets/chat_bubble.svg';
import credit_card from '../assets/credit_card.svg';
import seniorDoctor from '../assets/seniorDoctor.png';
import settings from '../assets/settings.svg';
import more from '../assets/more.svg';





function Navbar() {
  return (
    <header className="flex items-center justify-between bg-white px-8 py-4 rounded-full shadow-sm max-width:1600px mx-auto w-full">
      <div className="flex items-center">
        <img src={testLogo} alt="Healthcare Logo" className="h-12 w-auto object-contain" />
      </div>

     
      <nav className="hidden md:flex items-center gap-6">
        <a href="#" className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-[#07263E] opacity-70 hover:opacity-100 transition-opacity">
          <img src={home} alt="homealt" className="w-4 h-4" /> Overview
        </a>
        <a href="#" className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-[#01F0D0] text-[#07263E] rounded-full transition-all">
          <img src={group} alt="groupalt" className="w-4 h-4" /> Patients
        </a>
        <a href="#" className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-[#07263E] opacity-70 hover:opacity-100 transition-opacity">
          <img src={calendar_today} alt="calendaralt" className="w-4 h-4" /> Schedule
        </a>
        <a href="#" className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-[#07263E] opacity-70 hover:opacity-100 transition-opacity">
          <img src={chats} alt="chatsalt" className="w-4 h-4" /> Message
        </a>
        <a href="#" className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-[#07263E] opacity-70 hover:opacity-100 transition-opacity">
          <img src={credit_card} alt="creditalt" className="w-4 h-4" /> Transactions
        </a>
      </nav>

    
      <div className="flex items-center gap-3 border-l border-[#F6F7F8] pl-6">
        <img src={seniorDoctor} alt="Dr. Jose Simmons" className="w-11 h-11 rounded-full object-cover" />
        <div className="flex flex-col text-left .hidden {
    display: none;
} sm:flex">
          <span className="text-sm font-bold text-[#07263E]">Dr. Jose Simmons</span>
          <span className="text-xs text-[#707070]">General Practitioner</span>
        </div>
        <div className="flex items-center gap-3 ml-3 border-l border-[#F6F7F8] pl-3">
          <img src={settings} alt="Settings" className="w-5 h-5 cursor-pointer opacity-80 hover:opacity-100" />
          <img src={more} alt="More Options" className="w-5 h-5 cursor-pointer opacity-80 hover:opacity-100" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;