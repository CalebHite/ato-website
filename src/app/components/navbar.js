'use client';

import { useState, useEffect } from 'react';
import { Crimson_Text, Montserrat, Oswald } from 'next/font/google';

const crimsonText = Crimson_Text({ subsets: ['latin'], weight: ['400', '600', '700'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });
const oswald = Oswald({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700'] });

const Navbar = ({ theme }) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: 'Home', sectionId: '' },
    { id: 1, label: 'About', sectionId: 'about' },
    { id: 2, label: 'Recruitment', sectionId: 'recruitment' },
  ];

  const handleTabClick = (id, sectionId) => {
    setActiveTab(id);
    window.location.href = `/${sectionId}`;
  };

  // Update active tab based on current URL
  useEffect(() => {
    const currentPath = window.location.pathname.replace('/', '');
    const currentTab = tabs.find(tab => tab.sectionId === currentPath);
    if (currentTab) {
      setActiveTab(currentTab.id);
    }
  }, [window.location.pathname]);

  const textColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-800';
  const borderColor = theme === 'dark' ? 'border-gray-300' : 'border-gray-800';

  return (
    <nav className="w-full backdrop-blur-sm shadow-md z-50 fixed top-0 border-b border-transparent p-6 bg-transparent">
      <div className="max-w-96 mx-auto px-4">
        <div className="relative flex space-x-2 overflow-hidden rounded-full p-1.5">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id, tab.sectionId)}
              className={`cursor-pointer hover:text-orange-300 ${textColor} font-bold border border-2 ${borderColor} relative z-10 flex w-full items-center justify-center px-3 py-2 text-md font-medium transition-colors duration-300 rounded-full ${montserrat.className}
                ${activeTab === tab.id ? borderColor : 'border-transparent'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
