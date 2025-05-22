"use client";

import { Montserrat, Oswald } from 'next/font/google';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from 'next/link';
import { useClientSideOnly } from '../../hooks/useClientSideOnly';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });
const oswald = Oswald({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700'] });

export default function Philanthropy() {
    const isMounted = useClientSideOnly();
    const currentPage = 'philanthropy';

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
                <h1 className={`text-4xl md:text-6xl mt-4 ${oswald.className}`} style={{ color: '#F79825' }}>PHILANTHROPY & COMMUNITY SERVICE</h1>
            </div>
            <hr className="w-3/4 mx-auto my-8" />
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col items-center px-8 pb-10 w-full md:w-3/4 text-center md:text-left">
                    <div className="mb-8 w-full max-w-3xl">
                        <h1 className={`text-3xl md:text-4xl mb-4 ${oswald.className}`} style={{ color: '#F79825' }}>Philanthropy</h1>
                        <p className={`text-md text-gray-800 ${montserrat.className}`}>
                            One of Gamma Mu’s founding principles is campus involvement, represented by our commitment to Philanthropy. We pride ourselves on our effort and willingness to help others in any way possible and have raised <b>thousands of dollars</b> through Rock Chalk Revue, campus-wide philanthropy events, and fundraising to <b>support organizations</b> like <a href='https://www.bbbskc.org' style={{color: "cornflowerblue", textDecoration: "underline"}}>Big Brothers Big Sisters</a>, the <a href='https://ballardcenter.org' style={{color: "cornflowerblue", textDecoration: "underline"}}>Ballard Center</a>, and the <a href='https://lawrencehumane.org' style={{color: "cornflowerblue", textDecoration: "underline"}}>Lawrence Humane Society</a>. Through our philanthropic efforts we have improved the lives of our fellow Jayhawks, the Lawrence community, and one another.
                        </p>
                    </div>
                    <div className="mb-8 w-full max-w-3xl">
                        <h1 className={`text-3xl md:text-4xl mb-4 ${oswald.className}`} style={{ color: '#F79825' }}>Community Service</h1>
                        <p className={`text-md text-gray-800 ${montserrat.className}`}>
                            In addition to philanthropy, ATO members are dedicated to making a positive impact in our community through volunteering. Members of ATO are required to report <b>15 hours</b> of community service every semester, which encourages us to be consistently involved in many volunteer organizations on campus. Our largest contributions go toward, but are not limited to, <a href='https://www.instagram.com/kunaturalties/?hl=en' style={{color: "cornflowerblue", textDecoration: "underline"}}>Natural Ties</a> and <a href='https://thebigevent.ku.edu' style={{color: "cornflowerblue", textDecoration: "underline"}}>The Big Event</a>.
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
                        <img src="/images/RCR8.jpg" className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg" alt="RCR Activities" />
                        <p className={`text-lg text-gray-800 ${montserrat.className}`}>Rock Chalk Revue Performance</p>
                    </div>
                    <div className="w-full md:w-1/3 flex flex-col items-center">
                        <img src="/images/Service2.jpg" className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg" alt="Service Activities" />
                        <p className={`text-lg text-gray-800 ${montserrat.className}`}>Natural Ties Community Service</p>
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
