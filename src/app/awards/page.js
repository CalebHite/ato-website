"use client";

import { Montserrat, Oswald } from 'next/font/google';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from 'next/link';
import { useClientSideOnly } from '../../hooks/useClientSideOnly';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });
const oswald = Oswald({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700'] });

export default function Awards() {
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
                <h1 className={`text-6xl mt-4 ${oswald.className}`} style={{ color: '#F79825' }}>AWARDS & HONORS</h1>
            </div>
            <hr className="w-3/4 mx-auto my-8" />
            <div className="flex flex-grow">
                <div className="flex flex-col items-center justify-left px-8 pb-10 w-3/4 text-left">
                    <div className="mb-8 w-full max-w-3xl">
                        <h1 className={`text-4xl mb-4 ${oswald.className}`} style={{ color: '#F79825' }}>Our Honors & Awards</h1>
                        <p className={`text-md text-gray-800 ${montserrat.className}`}>
                            At the national level, our chapter has been honored with prestigious awards from the ATO Fraternity, such as the True Merit Award for overall chapter excellence, the Academic Excellence Award for outstanding scholarship, and the Community Service Award for impactful philanthropy. These accolades reflect our commitment to upholding ATO's values while setting a high standard for Greek life at KU.
                        </p>
                        <br />
                        <p className={`text-md text-gray-800 ${montserrat.className}`}>
                            On campus, our brothers are frequently recognized for individual and collective achievements. Members have received Order of Omega distinction, KU's Men of Merit honors, and Dean's List accolades, showcasing their dedication to leadership and academics. Additionally, the chapter has been celebrated in Interfraternity Council (IFC) awards, winning titles like Chapter of the Year and Highest Brotherhood GPA. These honors are a testament to the hard work of our brothers, past and present, who strive to make Gamma Mu a distinguished and respected organization at the University of Kansas.
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
                    <img src="/images/True-Merit.png" className="w-128 h-80 object-cover rounded-lg shadow-lg" alt="True Merit Award" />
                    <img src="/images/signing.png" className="w-128 h-80 object-cover rounded-lg shadow-lg" alt="Academic Excellence Award" />
                </div>
            </div>

            <p className={`text-xl text-gray-900 text-center w-full mb-10 ${oswald.className}`}>
                You can find more information about ATO Kansas at the <a href="https://kuifc.org/alpha-tau-omega" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Interfraternity Council</a> or by clicking the tabs on the right.
            </p>
            <Footer />
        </div>
    );
}
