import Navbar from "../components/navbar";
import { Crimson_Text, Montserrat, Oswald } from 'next/font/google';
import Footer from "../components/footer";
import Link from 'next/link';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });
const oswald = Oswald({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700'] });

export default function About() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar theme="light" />
            <div className="flex flex-grow">
                <div className="flex flex-col items-start justify-start mt-40 px-8 pb-20 w-1/4">
                    <h2 className={`text-2xl mb-4 ${oswald.className}`} style={{ color: '#F79825' }}>Navigation</h2>
                    <div className="flex flex-col space-y-2">
                        <Link href="/leadership" className="p-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors">Leadership</Link>
                        <Link href="/philanthropy" className="p-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors">Philanthropy & Community Service</Link>
                        <Link href="/awards" className="p-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors">Honors & Awards</Link>
                        <Link href="/scholarship" className="p-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors">Scholarship</Link>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center mt-40 px-8 pb-20 w-3/4">
                    <div className="mb-8 w-full max-w-3xl text-center">
                        <h1 className={`text-4xl text-center mb-4 ${oswald.className}`}>Our History</h1>
                        <p className={`text-md text-gray-800 ${montserrat.className}`}>
                            Gamma Mu was founded in 1901 with slow but sustainable growth in the early years. In the 1940's we built our chapter house at 1537 Tennessee Street, which is the same house we live in today. By the 1980's we had grown into one of the largest and strongest brotherhoods on campus. Even after over 100 years, we still maintain the original values we were founded with. Values of fellowship, scholarship, and strong character.
                        </p>
                    </div>
                    <div className="mb-8 w-full max-w-3xl text-center">
                        <h1 className={`text-4xl text-center mb-4 ${oswald.className}`}>Our Brotherhood</h1>
                        <p className={`text-md text-gray-800 ${montserrat.className}`}>
                        Our brotherhood includes majors from every department at KU and members of numerous campus organizations. We welcome brothers from all backgrounds and walks of life. To help foster brotherhood, we organize events like football games, paintball, social events, and other activities. We also have out of state formal and semi-formal trips which help to build our brotherhood.</p>
                        </div>
                    <div className="mb-8 w-full max-w-3xl text-center">
                        <h1 className={`text-4xl text-center mb-4 ${oswald.className}`}>Our Alumni</h1>
                        <p className={`text-md text-gray-800 ${montserrat.className}`}>
                        Alumni relations is a critical part of our chapter. We have alumni from all kinds of industries, including business, finance, energy, engineering, and more. These alumni serve as role models for our brothers, showing what a member of ATO can go on to accomplish. The generous donations of these alumni help to fund projects in our house, and help grow our fraternity.                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}