"use client";

import Navbar from "../components/navbar";
import { Montserrat, Oswald } from 'next/font/google';
import Footer from "../components/footer";
import { useEffect, useState } from 'react';
import Link from 'next/link';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });
const oswald = Oswald({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700'] });

export default function About() {
    // Add state to track if component is mounted
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // Mark component as mounted
        setIsMounted(true);
        
        // Add resize listener only after component is mounted
        const handleResize = () => {
            console.log(window.innerWidth);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Return a loading state or null until component is mounted
    if (!isMounted) {
        return null; // Or a loading indicator
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar theme="dark" />
            <div className="w-full relative">
                <div className="w-full z-10" style={{ backgroundColor: '#121212', height: '6.5rem' }}></div>
            </div>
            <div className="relative flex items-center justify-center" style={{ height: '40vh' }}>
                <div
                    className="absolute w-full h-full object-cover"
                    alt="Background"
                    style={{ backgroundImage: 'url(/images/house.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: '0 -16px 8px 8px white inset' }}
                />
                <div className="flex items-center ml-20">
                    <h1 className={`mt-10 text-8xl text-white ${oswald.className} mb-16 z-10`} style={{ textShadow: '2px 2px 0 rgba(0, 0, 0, 0.7)' }}>About</h1>
                    <img
                        src="images/yellow-ATO.png"
                        className="relative z-30 ml-5 mx-auto w-1/2 h-auto"
                        alt="ATO"
                    />
                </div>
            </div>
            <div className="items-center m-auto text-center">
                <h1 className={`text-6xl mt-4 ${oswald.className}`} style={{ color: '#F79825' }}>GENERAL</h1>
            </div>
            <hr className="w-3/4 mx-auto my-8" />
            <div className="flex flex-grow">
                <div className="flex flex-col items-center justify-left px-8 pb-10 w-3/4 text-left">
                    <div className="mb-8 w-full max-w-3xl">
                        <h1 className={`text-4xl mb-4 ${oswald.className}`} style={{ color: '#F79825' }}>Our History</h1>
                        <p className={`text-md text-gray-800 ${montserrat.className}`}>
                            The Gamma Mu chapter of Alpha Tau Omega was founded in 1901, establishing a strong tradition of brotherhood and leadership at the University of Kansas. The chapter's first house was built at 1537 Tennessee Street in the 1940s and continues to serve as our home. Over the years, Gamma Mu has grown into one of the largest and most influential brotherhoods on campus, committed to fellowship, scholarship, and community service. Our members actively participate in campus organizations and leadership roles, enhancing their college experience. Alumni often return to share their stories, highlighting the lasting impact of their time in ATO and the friendships formed here.
                        </p>
                    </div>
                    <div className="mb-8 w-full max-w-3xl">
                        <h1 className={`text-4xl mb-4 ${oswald.className}`} style={{ color: '#F79825' }}>Our Brotherhood</h1>
                        <p className={`text-md text-gray-800 ${montserrat.className}`}>
                            Our brotherhood includes members from diverse fields such as engineering, business, science, and arts. We promote this diversity by organizing events that broaden our members' experiences, including social gatherings and out-of-state trips. These activities create lasting memories and strengthen our bonds. Additionally, ATO alumni frequently visit to share their insights, emphasizing the enduring legacy of our fraternity and the lifelong friendships formed within our community.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center px-8 w-1/4 text-center">
                    <h2 className={`text-2xl mb-4 text-right ${oswald.className}`} style={{ color: '#F79825' }}>Campus Involvement</h2>
                    <div className="flex flex-col space-y-4">
                        <Link href="/about" className="p-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors">General</Link>
                        <Link href="/leadership" className="p-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors">Leadership</Link>
                        <Link href="/philanthropy" className="p-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors">Philanthropy & Community Service</Link>
                        <Link href="/awards" className="p-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors">Honors & Awards</Link>
                        <Link href="/scholarship" className="p-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors">Scholarship</Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center mb-10">
                <div className="flex flex-wrap justify-center gap-4 mt-4">
                    <img src="/images/athletic1.jpg" className="w-128 h-80 object-cover rounded-lg shadow-lg" alt="Athletic Activities" />
                    <img src="/images/Paintball.jpg" className="w-128 h-80 object-cover rounded-lg shadow-lg" alt="Paintball Activities" />
                    <img src="/images/RCR1.jpeg" className="w-128 h-80 object-cover rounded-lg shadow-lg" alt="RCR Activities" />
                </div>
            </div>
            <p className={`text-xl text-gray-900 text-center w-full mb-10 ${oswald.className}`}>
                You can find more information about ATO Kansas at the <a href="https://kuifc.org/alpha-tau-omega" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Interfraternity Council</a> or by clicking the tabs on the right.
            </p>
            <Footer />
        </div>
    );
}