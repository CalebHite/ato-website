'use client';

import { useState, useEffect } from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

const Navbar = ({ theme }) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: 'Home', sectionId: '' },
    { id: 1, label: 'About', sectionId: 'about' },
    { id: 2, label: 'Join ATO', sectionId: 'recruitment' },
    { id: 3, label: 'Parents & Alumni', sectionId: 'parents-alumni' },
  ];

  const handleTabClick = (id, sectionId) => {
    setActiveTab(id);
    window.location.href = `/${sectionId}`;
  };

  // Update active tab based on current URL
  useEffect(() => {
    const currentPath = window.location.pathname.replace('/', '');
    const currentTab = tabs.find(tab => tab.sectionId === currentPath);
    
    // If no current tab is found, default to About
    if (currentTab) {
      setActiveTab(currentTab.id);
    } else {
      const aboutTab = tabs.find(tab => tab.label === 'About');
      if (aboutTab) {
        setActiveTab(aboutTab.id);
      }
    }
  }, [window.location.pathname]);

  const textColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-800';
  const borderColor = theme === 'dark' ? 'border-gray-300' : 'border-gray-800';

  return (
    <nav className="w-full backdrop-blur-sm shadow-md z-50 fixed top-0 border-b border-transparent bg-transparent">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <img
          src="images/gold-cross.png"
          alt="Gold Cross Left"
          className="w-18 h-18"
        />
        <div className="max-w-[40rem] flex justify-center">
          <div className="relative flex space-x-2 overflow-hidden rounded-full p-1.5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id, tab.sectionId)}
                className={`cursor-pointer hover:text-orange-300 ${textColor} font-bold border border-2 ${borderColor} relative z-10 flex w-full items-center justify-center px-3 py-2 text-lg whitespace-nowrap font-medium transition-colors duration-300 rounded-full ${montserrat.className}
                  ${activeTab === tab.id ? borderColor : 'border-transparent'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <img
          src="images/Jayhawk.png"
          alt="KU Jayhawk"
          className="w-24 h-24"
        />
      </div>
    </nav>
  );
};

export default Navbar;
