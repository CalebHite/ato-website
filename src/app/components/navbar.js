'use client';

import { useState, useEffect } from 'react';

const Navbar = () => {
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

  return (
    <nav className="w-full backdrop-blur-sm shadow-lg z-50 fixed top-0 border-b border-none p-6"  style={{ background: "#F4F5FA" }}>
      <div className="max-w-96 mx-auto px-4">
        <div className="relative flex space-x-2 overflow-hidden rounded-full p-1.5">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id, tab.sectionId)}
              className={`cursor-pointer hover:text-orange-300 border relative z-10 flex w-full items-center justify-center px-3 py-2 text-md font-medium transition-colors duration-300 rounded-full
                ${activeTab === tab.id ? 'border-gray-400' : 'border-transparent'}`}
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
