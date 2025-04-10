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
                <h1 className={`text-6xl mt-4 ${oswald.className}`} style={{ color: '#F79825' }}>SCHOLARSHIP</h1>
            </div>
            <hr className="w-3/4 mx-auto my-8" />
            <div className="flex flex-grow">
                <div className="flex flex-col items-center justify-left px-8 pb-10 w-3/4 text-left">

                    <div className="mb-8 w-full max-w-3xl">
                        <h1 className={`text-4xl mb-4 ${oswald.className}`} style={{ color: '#F79825' }}>Chapter Scholarship</h1>
                        <p className={`text-md text-gray-800 ${montserrat.className}`}>
                            With a cumulative chapter GPA of 3.325 from business and engineering to the arts and sciences, our brothers consistently demonstrate excellence across all disciplines. This success is driven by a strong support system, including mandatory study hours, peer tutoring, and faculty mentorship. Every member has the tools to thrive in the classroom, and we hold ourselves accountable for our brothers' academic success.
                        </p>
                    </div>
                    <div className="mb-8 w-full max-w-3xl">
                        <h1 className={`text-4xl mb-4 ${oswald.className}`} style={{ color: '#F79825' }}>Individual Scholarship</h1>
                        <p className={`text-md text-gray-800 ${montserrat.className}`}>
                            Each individual in ATO is strongly encouraged to pursue their own academic goals. We foster a culture of academic excellence and offer a variety of resources to help our brothers succeed. Almost all of our brothers have received scholarships and internships throughout their time at ATO, while every member has graduated with a minimum 3.0 GPA.
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
                    <img src="/images/Internships.jpg" className="w-128 h-80 object-cover rounded-lg shadow-lg" alt="Athletic Activities" />
                    <img src="/images/Grad1.jpg" className="w-128 h-80 object-cover rounded-lg shadow-lg" alt="Paintball Activities" />
                </div>
            </div>
            <p className={`text-xl text-gray-900 text-center w-full mb-10 ${oswald.className}`}>
                You can find more information about ATO Kansas at the <a href="https://kuifc.org/alpha-tau-omega" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Interfraternity Council</a> or by clicking the tabs on the right.
            </p>
            <Footer />
        </div>
    );
}
