"use client";

import { Montserrat, Oswald } from 'next/font/google';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from 'next/link';
import { useClientSideOnly } from '../../hooks/useClientSideOnly';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });
const oswald = Oswald({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700'] });

export default function Leadership() {
    const isMounted = useClientSideOnly();
    const currentPage = 'leadership';

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
                        src="/images/yellow-ATO.PNG"
                        className="relative z-30 mx-auto w-1/2 md:w-1/3 h-auto md:ml-8"
                        alt="ATO"
                    />
                </div>
            </div>
            <div className="items-center m-auto text-center">
                <h1 className={`text-4xl md:text-6xl mt-4 ${oswald.className}`} style={{ color: '#F79825' }}>LEADERSHIP</h1>
            </div>
            <hr className="w-3/4 mx-auto my-8" />
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col items-center px-8 pb-10 w-full md:w-3/4 text-center md:text-left">
                    <div className="mb-8 w-full max-w-3xl">
                        <h1 className={`text-3xl md:text-4xl mb-4 ${oswald.className}`} style={{ color: '#F79825' }}>Executive Council</h1>
                        <p className={`text-md text-gray-800 ${montserrat.className}`}>
                            The Executive Council is the governing body of the chapter. There are 9 unique roles given to Executive Council members including President, Treasurer, and Recruitment. Every member of the Executive Council is <b>elected by the brotherhood</b> where they learn the value of leadership and responsibility. They are responsible for the overall direction, implementation of the policies, and decisions of the chapter. More than anything, <b>Executive members learn the skills necessary to succeed</b> in their respective industries and value the knowledge gained from their experience at ATO.
                        </p>
                    </div>
                    <div className="mb-8 w-full max-w-3xl">
                        <h1 className={`text-3xl md:text-4xl mb-4 ${oswald.className}`} style={{ color: '#F79825' }}>Chair Positions</h1>
                        <p className={`text-md text-gray-800 ${montserrat.className}`}>
                            Beyond the Executive Council, dedicated brothers serve in specialized Chair roles to enhance the member experience at ATO. Some examples of Chair positions are Philanthropy Chair, Scholarship Chair, and Social Chair. Holding a Chair Position is another <b>great way to learn the value of leadership and responsibility</b>. Chairs are also elected by the brotherhood and play vital roles in the chapter.
                        </p>
                    </div>
                </div>
                <div className="hidden md:flex flex-col items-center justify-center px-8 w-1/4 text-center">
                    <h2 className={`text-2xl mb-4 text-right ${oswald.className}`} style={{ color: '#F79825' }}>Campus Involvement</h2>
                    <div className="flex flex-col space-y-4">
                        <Link href="/about" className={`p-2 rounded transition-colors ${currentPage === 'about' ? 'bg-[#F79825] text-white' : 'bg-gray-200 hover:bg-gray-300'}`}>General</Link>
                        <Link href="/leadership" className={`p-2 rounded transition-colors ${currentPage === 'leadership' ? 'bg-[#F79825] text-white' : 'bg-gray-200 hover:bg-gray-300'}`}>Leadership</Link>
                        <Link href="/philanthropy" className={`p-2 rounded transition-colors ${currentPage === 'philanthropy' ? 'bg-[#F79825] text-white' : 'bg-gray-200 hover:bg-gray-300'}`}>Philanthropy & Community Service</Link>
                        <Link href="/awards" className={`p-2 rounded transition-colors ${currentPage === 'awards' ? 'bg-[#F79825] text-white' : 'bg-gray-200 hover:bg-gray-300'}`}>Honors & Awards</Link>
                        <Link href="/scholarship" className={`p-2 rounded transition-colors ${currentPage === 'scholarship' ? 'bg-[#F79825] text-white' : 'bg-gray-200 hover:bg-gray-300'}`}>Scholarship</Link>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center mb-10">
                <div className="flex flex-col md:flex-row justify-center gap-4 mt-4 w-[90%]">
                    <div className="w-full md:w-1/3 flex flex-col items-center">
                        <img src="/images/exec.png" className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg" alt="Executive Council" />
                        <p className={`text-lg text-gray-800 ${montserrat.className}`}>Current Executive Council</p>
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
