"use client";

import Navbar from "../components/navbar";
import { Crimson_Text, Montserrat, Oswald } from 'next/font/google';
import Footer from "../components/footer";
import Link from 'next/link';
import { useClientSideOnly } from '../../hooks/useClientSideOnly';

const crimsonText = Crimson_Text({ subsets: ['latin'], weight: ['400', '600', '700'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });
const oswald = Oswald({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700'] });

export default function ParentsAlumni() {
    const isMounted = useClientSideOnly();

    if (!isMounted) {
        return null;
    }

    return (
        <div className="min-h-screen bg-gray-200">
            <Navbar theme="dark" />
            <div className="w-full relative">
                <div className="w-full z-10" style={{ backgroundColor: '#121212', height: '6.5rem' }}></div>
            </div>

            {/* Hero Section */}
            <div className="relative">
                <div className="absolute inset-0 bg-[#163551] opacity-90"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
                    <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center text-white ${oswald.className}`}>
                        Parents & Alumni
                    </h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
                {/* Parents Club Section */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8 sm:mb-12 md:mb-16">
                    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                        <img
                            src="/images/Family.jpg"
                            alt="ATO Family Gathering"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                            <h2 className={`text-3xl sm:text-4xl md:text-5xl text-white ${oswald.className}`}>Parents Club</h2>
                        </div>
                    </div>

                    <div className="p-4 sm:p-6 md:p-8">
                        <p className={`text-lg sm:text-xl text-gray-700 mb-8 sm:mb-10 md:mb-12 ${montserrat.className}`}>
                            The ATO Parents Club is dedicated to supporting our chapter and fostering a strong community among parents of current members. Through various events and initiatives, parents play a vital role in enhancing the fraternity experience.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
                            {/* Moms Club */}
                            <div className="space-y-4 sm:space-y-6">
                                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                    <img
                                        src="/images/moms1.png"
                                        alt="ATO Moms Club"
                                        className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl shadow-lg"
                                    />
                                    <img
                                        src="/images/moms2.png"
                                        alt="ATO Moms Club"
                                        className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl shadow-lg"
                                    />
                                </div>
                                <div>
                                    <h3 className={`text-2xl sm:text-3xl mb-3 sm:mb-4 ${oswald.className}`} style={{ color: '#F79825' }}>Mom's Club</h3>
                                    <p className={`text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 ${montserrat.className}`}>
                                        The Mom's Club plays a crucial role in creating a warm and welcoming environment for our members.
                                    </p>
                                    <ul className={`space-y-2 sm:space-y-3 ${montserrat.className}`}>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-[#F79825] rounded-full mr-3"></span>
                                            Holiday House Decorating (November)
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-[#F79825] rounded-full mr-3"></span>
                                            Finals Week Care Packages
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-[#F79825] rounded-full mr-3"></span>
                                            Spring Mom's Day Weekend
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-[#F79825] rounded-full mr-3"></span>
                                            House Improvement Projects
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-[#F79825] rounded-full mr-3"></span>
                                            Welcome Events for New Members
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-[#F79825] rounded-full mr-3"></span>
                                            Support for Chapter Events
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Dads Club */}
                            <div className="space-y-4 sm:space-y-6">
                                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                    <img
                                        src="/images/dad2.png"
                                        alt="ATO Dads Club"
                                        className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl shadow-lg"
                                    />
                                    <img
                                        src="/images/dad3.png"
                                        alt="ATO Dads Club"
                                        className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl shadow-lg"
                                    />
                                </div>
                                <div>
                                    <h3 className={`text-2xl sm:text-3xl mb-3 sm:mb-4 ${oswald.className}`} style={{ color: '#F79825' }}>Dad's Club</h3>
                                    <p className={`text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 ${montserrat.className}`}>
                                        The Dad's Club focuses on mentorship and practical support for our chapter.
                                    </p>
                                    <ul className={`space-y-2 sm:space-y-3 ${montserrat.className}`}>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-[#F79825] rounded-full mr-3"></span>
                                            Annual House Projects
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-[#F79825] rounded-full mr-3"></span>
                                            Fall Dad's Day Weekend
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-[#F79825] rounded-full mr-3"></span>
                                            Tailgating Events
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-[#F79825] rounded-full mr-3"></span>
                                            Mentorship Opportunities
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-[#F79825] rounded-full mr-3"></span>
                                            Career Development Workshops
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-[#F79825] rounded-full mr-3"></span>
                                            House Maintenance Support
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Events Section */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden mt-8 sm:mt-12 md:mt-16">
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="p-4 sm:p-6 md:p-8">
                            <h2 className={`text-3xl sm:text-4xl mb-6 sm:mb-8 ${oswald.className}`}>Annual Events</h2>
                            <div>
                                <div>
                                    <h3 className={`text-2xl sm:text-3xl mb-4 sm:mb-6 ${oswald.className}`} style={{ color: '#F79825' }}>Parents Weekend</h3>
                                    <p className={`text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 ${montserrat.className}`}>
                                        Join us each fall for our annual Parents Weekend, featuring:
                                    </p>
                                    <ul className={`space-y-2 sm:space-y-3 ${montserrat.className}`}>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-[#F79825] rounded-full mr-3"></span>
                                            KU Football Game
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-[#F79825] rounded-full mr-3"></span>
                                            Parents Club Meetings
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-[#F79825] rounded-full mr-3"></span>
                                            House BBQ & Social
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-[#F79825] rounded-full mr-3"></span>
                                            Campus Activities
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-[#F79825] rounded-full mr-3"></span>
                                            Chapter House Tours
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-[#F79825] rounded-full mr-3"></span>
                                            Meet & Greet with Chapter Leadership
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-1 gap-3 sm:gap-4 p-4 sm:p-6 md:p-8">
                            <div className="relative h-[150px] sm:h-[180px] md:h-[200px]">
                                <img
                                    src="/images/brunch.png"
                                    alt="Parents Weekend Brunch"
                                    className="w-full h-full object-cover rounded-xl shadow-lg"
                                />
                            </div>
                            <div className="relative h-[150px] sm:h-[180px] md:h-[200px]">
                                <img
                                    src="/images/pickleball1.png"
                                    alt="Parents Weekend Activities"
                                    className="w-full h-full object-cover rounded-xl shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
