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
        <div className="min-h-screen">
            <Navbar theme="light" />
            <div className="flex flex-col items-center justify-center mt-48 px-8 pb-20">
                <div className="mb-16 w-full max-w-4xl">
                    <h1 className={`text-5xl text-center mb-8 ${oswald.className}`} style={{color: '#F79825'}}>Parents & Alumni</h1>
                    
                    {/* Parents Section */}
                    <div className="mb-16">
                        <h2 className={`text-3xl mb-6 ${oswald.className}`}>Parents Club</h2>
                        <p className={`text-lg mb-8 ${montserrat.className}`}>
                            The ATO Parents Club is dedicated to supporting our chapter and fostering a strong community among parents of current members. Through various events and initiatives, parents play a vital role in enhancing the fraternity experience.
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                                <h3 className={`text-2xl mb-4 ${oswald.className}`} style={{color: '#F79825'}}>Mom's Club</h3>
                                <ul className={`list-disc list-inside space-y-2 ${montserrat.className}`}>
                                    <li>Holiday House Decorating (November)</li>
                                    <li>Finals Week Care Packages</li>
                                    <li>Spring Mom's Day Weekend</li>
                                    <li>House Improvement Projects</li>
                                </ul>
                            </div>
                            
                            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                                <h3 className={`text-2xl mb-4 ${oswald.className}`} style={{color: '#F79825'}}>Dad's Club</h3>
                                <ul className={`list-disc list-inside space-y-2 ${montserrat.className}`}>
                                    <li>Annual House Projects</li>
                                    <li>Fall Dad's Day Weekend</li>
                                    <li>Tailgating Events</li>
                                    <li>Mentorship Opportunities</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Events Section */}
                    <div className="mb-16">
                        <h2 className={`text-3xl mb-6 ${oswald.className}`}>Annual Events</h2>
                        <div className="space-y-6">
                            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                                <h3 className={`text-2xl mb-4 ${oswald.className}`} style={{color: '#F79825'}}>Parents Weekend</h3>
                                <p className={`${montserrat.className}`}>
                                    Join us each fall for our annual Parents Weekend, featuring:
                                </p>
                                <ul className={`list-disc list-inside mt-2 ${montserrat.className}`}>
                                    <li>KU Football Game</li>
                                    <li>Parents Club Meetings</li>
                                    <li>House BBQ & Social</li>
                                    <li>Campus Activities</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Alumni Section */}
                    <div className="mb-16">
                        <h2 className={`text-3xl mb-6 ${oswald.className}`}>Notable Alumni</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                                <h3 className={`text-2xl mb-4 ${oswald.className}`} style={{color: '#F79825'}}>Brother Tsuru</h3>
                                <p className={`${montserrat.className}`}>
                                    Honorary Alumni and dedicated mentor to our chapter, Brother Tsuru has made lasting contributions to our fraternity's growth and development.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                                <h3 className={`text-2xl mb-4 ${oswald.className}`} style={{color: '#F79825'}}>Guy Fieri</h3>
                                <p className={`${montserrat.className}`}>
                                    Famous chef, restaurateur, and television personality Guy Fieri is a proud ATO alumni, exemplifying our values of leadership and excellence.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Archives Section */}
                    <div>
                        <h2 className={`text-3xl mb-6 ${oswald.className}`}>Alumni Records & Archives</h2>
                        <p className={`text-lg mb-4 ${montserrat.className}`}>
                            Our chapter maintains extensive records and archives documenting our rich history at the University of Kansas. Alumni can access newsletters, photo galleries, and historical documents by contacting our alumni relations chair.
                        </p>
                        <button className={`mt-4 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white text-lg py-3 px-8 ${montserrat.className}`}>
                            Contact Alumni Relations
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
