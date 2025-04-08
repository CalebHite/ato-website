import { Montserrat, Oswald } from 'next/font/google';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from 'next/link';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });
const oswald = Oswald({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700'] });

export default function Leadership() {
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
                <h1 className={`text-6xl mt-4 ${oswald.className}`} style={{ color: '#F79825' }}>LEADERSHIP</h1>
            </div>
            <hr className="w-3/4 mx-auto my-8" />
            <div className="flex flex-grow">
                <div className="flex flex-col items-center justify-left px-8 pb-10 w-3/4 text-left">
                    <div className="mb-8 w-full max-w-3xl">
                        <h1 className={`text-4xl mb-4 ${oswald.className}`} style={{ color: '#F79825' }}>Our History</h1>
                        <p className={`text-md text-gray-800 ${montserrat.className}`}>
                            Gamma Mu was founded in 1901 with slow but sustainable growth in the early years. In the 1940's we built our chapter house at 1537 Tennessee Street, which is the same house we live in today. By the 1980's we had grown into one of the largest and strongest brotherhoods on campus. Even after over 100 years, we still maintain the original values we were founded with. Values of fellowship, scholarship, and strong character.
                        </p>
                    </div>
                    <div className="mb-8 w-full max-w-3xl">
                        <h1 className={`text-4xl mb-4 ${oswald.className}`} style={{ color: '#F79825' }}>Our Brotherhood</h1>
                        <p className={`text-md text-gray-800 ${montserrat.className}`}>
                            Our brotherhood includes majors from every department at KU and members of numerous campus organizations. We welcome brothers from all backgrounds and walks of life. To help foster brotherhood, we organize events like football games, paintball, social events, and other activities. We also have out of state formal and semi-formal trips which help to build our brotherhood.</p>
                    </div>
                    <div className="mb-8 w-full max-w-3xl">
                        <h1 className={`text-4xl mb-4 ${oswald.className}`} style={{ color: '#F79825' }}>Our Alumni</h1>
                        <p className={`text-md text-gray-800 ${montserrat.className}`}>
                            Alumni relations is a critical part of our chapter. We have alumni from all kinds of industries, including business, finance, energy, engineering, and more. These alumni serve as role models for our brothers, showing what a member of ATO can go on to accomplish. The generous donations of these alumni help to fund projects in our house, and help grow our fraternity.                        </p>
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
            <Footer />
        </div>
    );
}
