'use client';

import { useState, useEffect } from 'react';
import { Montserrat } from 'next/font/google';
import { useClientSideOnly } from '../../hooks/useClientSideOnly';
import Link from 'next/link';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

const Navbar = ({ theme }) => {
  const [activeTab, setActiveTab] = useState(0);
  const isMounted = useClientSideOnly();

  const tabs = [
    { id: 0, label: 'Home', sectionId: '' },
    { id: 1, label: 'About', sectionId: 'about' },
    { id: 2, label: 'Join ATO', sectionId: 'recruitment' },
    { id: 3, label: 'Parents & Alumni', sectionId: 'parents-alumni' },
  ];

  const handleTabClick = (id, sectionId) => {
    setActiveTab(id);
    if (isMounted) {
      window.location.href = `/${sectionId}`;
    }
  };

  // Update active tab based on current URL
  useEffect(() => {
    if (isMounted) {
      const currentPath = window.location.pathname.replace('/', '');
      const currentTab = tabs.find(tab => tab.sectionId === currentPath);
      
      // If no current tab is found, default to Home
      if (currentTab) {
        setActiveTab(currentTab.id);
      } else {
        const homeTab = tabs.find(tab => tab.label === 'Home');
        if (homeTab) {
          setActiveTab(homeTab.id);
        }
      }
    }
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }

  const textColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-800';
  const borderColor = theme === 'dark' ? 'border-gray-300' : 'border-gray-800';

  return (
    <nav className="w-full backdrop-blur-md shadow-md z-50 fixed top-0 border-b border-transparent bg-black/30">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-24">
        <Link href="/">
          <img
            src="images/gold-cross.png"
            alt="Gold Cross Left"
            className="w-12 h-12 md:w-16 md:h-16 cursor-pointer hover:opacity-80 transition-opacity"
          />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex max-w-[40rem] justify-center">
          <div className="relative flex space-x-2 overflow-hidden rounded-full p-1.5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id, tab.sectionId)}
                className={`cursor-pointer hover:text-orange-300 ${textColor} font-bold border border-2 ${borderColor} relative z-10 flex w-full items-center justify-center px-3 py-2 text-base whitespace-nowrap font-medium transition-colors duration-300 rounded-full ${montserrat.className}
                  ${activeTab === tab.id ? borderColor : 'border-transparent'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 p-2"
          onClick={() => {
            const event = new CustomEvent('toggleMobileNav');
            window.dispatchEvent(event);
          }}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>

        {/* Jayhawk - Hidden on mobile */}
        <img
          src="images/Jayhawk.png"
          alt="KU Jayhawk"
          className="hidden md:block w-12 h-12 md:w-16 md:h-16"
        />
      </div>
    </nav>
  );
};

export default Navbar;
