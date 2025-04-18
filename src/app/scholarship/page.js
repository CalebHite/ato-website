"use client";

import { Montserrat, Oswald } from 'next/font/google';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from 'next/link';
import { useClientSideOnly } from '../../hooks/useClientSideOnly';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });
const oswald = Oswald({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700'] });

export default function Scholarship() {
    const isMounted = useClientSideOnly();

    if (!isMounted) {
        return null;
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
                <div className="flex flex-col md:flex-row items-center justify-center md:ml-40">
                    <h1 className={`mt-10 text-6xl md:text-8xl text-white ${oswald.className} mb-8 md:mb-16 z-10`} style={{ textShadow: '2px 2px 0 rgba(0, 0, 0, 0.7)' }}>About</h1>
                    <img
                        src="images/yellow-ATO.png"
                        className="relative z-30 mx-auto w-1/2 md:w-1/3 h-auto md:ml-8"
                        alt="ATO"
                    />
                </div>
            </div>
            <div className="items-center m-auto text-center">
                <h1 className={`text-4xl md:text-6xl mt-4 ${oswald.className}`} style={{ color: '#F79825' }}>SCHOLARSHIP</h1>
            </div>
            <hr className="w-3/4 mx-auto my-8" />
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col items-center px-8 pb-10 w-full md:w-3/4 text-center md:text-left">
                    <div className="mb-8 w-full max-w-3xl">
                        <h1 className={`text-3xl md:text-4xl mb-4 ${oswald.className}`} style={{ color: '#F79825' }}>Academic Excellence</h1>
                        <p className={`text-md text-gray-800 ${montserrat.className}`}>
                            At the Gamma Mu chapter of Alpha Tau Omega, we take pride in our commitment to academic excellence. Our brothers consistently achieve high academic standards, with many earning Dean's List recognition and maintaining impressive GPAs. We provide a supportive environment that encourages academic success through study groups, tutoring resources, and a strong emphasis on time management.
                        </p>
                    </div>
                    <div className="mb-8 w-full max-w-3xl">
                        <h1 className={`text-3xl md:text-4xl mb-4 ${oswald.className}`} style={{ color: '#F79825' }}>Scholarship Support</h1>
                        <p className={`text-md text-gray-800 ${montserrat.className}`}>
                            Our chapter offers various scholarship opportunities and academic support programs to help brothers achieve their educational goals. From study sessions to mentorship programs, we ensure that every brother has the resources they need to excel in their academic pursuits while maintaining a balanced fraternity experience.
                        </p>
                    </div>
                </div>
                <div className="hidden md:flex flex-col items-center justify-center px-8 w-1/4 text-center">
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
                <div className="flex flex-col md:flex-row justify-center gap-4 mt-4 w-[90%] md:w-[70%]">
                    <div className="w-full md:w-1/2">
                        <img src="/images/Internships.jpg" className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg" alt="Internship Activities" />
                    </div>
                    <div className="w-full md:w-1/2">
                        <img src="/images/Grad1.jpg" className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg" alt="Graduation Activities" />
                    </div>
                </div>
            </div>
            <p className={`text-xl text-gray-900 text-center w-full mb-10 ${oswald.className}`}>
                You can find more information about ATO Kansas at the <a href="https://kuifc.org/alpha-tau-omega" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Interfraternity Council</a> or by clicking the tabs above.
            </p>
            <Footer />
        </div>
    );
}
