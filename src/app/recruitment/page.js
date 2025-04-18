"use client";

import Navbar from "../components/navbar";
import { Montserrat, Oswald } from 'next/font/google';
import Footer from "../components/footer";
import { useClientSideOnly } from '../../hooks/useClientSideOnly';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });
const oswald = Oswald({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700'] });

export default function Recruitment() {
    const isMounted = useClientSideOnly();

    if (!isMounted) {
        return null;
    }

    return (
        <div>
            <Navbar theme="dark" />
            <div className="relative h-screen flex items-center justify-center">
                <img
                    src="images/asfalt-light.png"
                    className="absolute w-full h-full object-cover bg-black"
                    alt="Background"
                />
                <img
                    src="images/Join-ATO-white-yellow-logo@2x.webp"
                    className="relative z-30 mx-auto w-full max-w-md px-4"
                    alt="Logo"
                />
            </div>

            <div className="w-full h-auto py-8 bg-gray-200 flex flex-col md:flex-row items-center justify-center gap-y-4 md:gap-x-10 p-4">
                <div className="flex flex-row gap-x-4 md:gap-x-10">
                    <img className="w-12 h-12 md:w-16 md:h-16" src="images/gold-cross.png" alt="Gold Cross"></img>
                    <img className="w-12 h-12 md:w-16 md:h-16" src="images/gold-cross.png" alt="Gold Cross"></img>
                    <img className="md:hidden w-12 h-12 md:w-16 md:h-16" src="images/gold-cross.png" alt="Gold Cross"></img>
                </div>

                <h4 className={`text-2xl md:text-4xl text-center font-bold ${oswald.className}`} style={{ color: '#F79825' }}>Meet Our Recruitment Team</h4>

                <div className="flex flex-row gap-x-4 md:gap-x-10">
                    <img className="w-12 h-12 md:w-16 md:h-16" src="images/gold-cross.png" alt="Gold Cross"></img>
                    <img className="w-12 h-12 md:w-16 md:h-16" src="images/gold-cross.png" alt="Gold Cross"></img>
                    <img className="md:hidden w-12 h-12 md:w-16 md:h-16" src="images/gold-cross.png" alt="Gold Cross"></img>
                </div>
            </div>
            <div className="flex flex-col md:flex-row text-gray-300 text-center" style={{ backgroundColor: '#163551' }}>
                <div className="w-full md:w-1/2 flex flex-col py-10 items-center justify-center">
                    <div className="flex flex-col mb-8 items-center">
                        <img src="images/fohlm.png" className="w-32 h-32 md:w-48 md:h-48"></img>
                        <h1 className={`text-2xl md:text-3xl my-1 ${oswald.className}`} style={{ color: '#F79825' }}>Ryan Fohlmeister</h1>
                        <p className={`text-sm md:text-md ${montserrat.className}`}>Recruitment Chairman</p>
                        <p className={`text-sm md:text-md ${montserrat.className}`}>913-703-9298</p>
                        <a href="mailto:ryanfohlmeister@gmail.com" className={`text-sm md:text-md ${montserrat.className}`} style={{ color: '#6495ED' }}>ryanfohlmeister@gmail.com</a>
                    </div>
                    <div className="flex flex-col sm:hidden lg:flex lg:flex-row gap-y-8 lg:gap-x-10 px-4">
                        <div className="flex flex-col items-center w-full lg:w-1/3">
                            <img src="images/duckworth.png" className="w-28 h-28 lg:w-36 lg:h-36 object-cover"></img>
                            <h1 className={`text-xl my-1 ${oswald.className}`} style={{ color: '#F79825' }}>Henry Duckworth</h1>
                            <p className={`text-xs lg:text-sm ${montserrat.className}`}>913-638-8020</p>
                        </div>
                        <div className="flex flex-col items-center w-full lg:w-1/3">
                            <img src="images/rowe.png" className="w-28 h-28 lg:w-36 lg:h-36 object-cover"></img>
                            <h1 className={`text-xl my-1 ${oswald.className}`} style={{ color: '#F79825' }}>Tyler Rowe</h1>
                            <p className={`text-xs lg:text-sm ${montserrat.className}`}>402-560-4477</p>
                        </div>
                        <div className="flex flex-col items-center w-full lg:w-1/3">
                            <img src="images/lips.png" className="w-28 h-28 lg:w-36 lg:h-36 object-cover"></img>
                            <h1 className={`text-xl my-1 ${oswald.className}`} style={{ color: '#F79825' }}>Ryan Hannigan</h1>
                            <p className={`text-xs lg:text-sm ${montserrat.className}`}>402-990-3967</p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-px md:w-px md:h-auto bg-gray-200 my-4 md:my-0"></div>
                <div className="w-full md:w-1/2 p-4 md:p-8">
                    <h2 className={`text-2xl md:text-3xl ${oswald.className}`} style={{ color: '#F79825' }}>
                        Living at Alpha Tau Omega
                    </h2>
                    <p className={`text-sm md:text-md my-4 ${montserrat.className}`}>
                        Living in the house provides a unique opportunity to bond with students from all over the country and create lifelong friendships. The shared experiences and camaraderie foster a strong sense of community. Additionally, living in the house allows for easier participation in events and activities, enhancing your overall fraternity experience.
                    </p>
                    <hr />
                    <h3 className={`text-xl md:text-2xl mt-4 ${oswald.className}`} style={{ color: '#F79825' }}>
                        House Information
                    </h3>
                    <ul className={`mt-4 flex flex-col gap-y-2 p-2 md:p-4 rounded-lg text-sm md:text-md ${montserrat.className}`}>
                        <li>Current Population of 71 members</li>
                        <br />
                        <li>Financial Dues for New Members is $800/Semester</li>
                        <li>Financial Dues for Active Members is $550/Semester</li>
                        <li>Financial Dues for In-house Members is $4,500/Semester</li>
                        <br />
                        <li>Live with roommates for your first year, then move into your own room</li>
                    </ul>
                    <hr />
                    <p className={`text-sm md:text-md my-4 ${montserrat.className}`}>
                        Living in the house is often cheaper than living in the dorms, as all costs are included. This allows for a more budget-friendly option while enjoying a vibrant community and numerous benefits.
                    </p>
                </div>
            </div>
            <div className="recruitment-process-container w-full bg-gray-200 flex flex-col items-center justify-center p-8 py-20 shadow-lg">
                <h4 className={`recruitment-title text-3xl text-center text-gray-800 font-semibold ${oswald.className}`}>
                    Recruitment Process
                </h4>
                <div className={`recruitment-steps list-disc list-inside text-lg text-gray-800 mt-6 space-y-2 ${montserrat.className}`}>
                    <p>Fill out the Rush Interest Form below and reach out to a Rush Chair.</p>
                    <p>Attend rush events and house tours to get to know ATO brothers and other future ATOs.</p>
                    <p>If offered, sign your official ATO bid card!</p>
                </div>
                <a href="https://forms.gle/XGVvBArzXMg8FJcx7" target="_blank" rel="noopener noreferrer">
                    <button className={`interest-form-button mt-6 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white text-lg py-3 px-8 ${montserrat.className}`}>
                        Interest Form
                    </button>
                </a>
            </div>
            <Footer />
        </div>
    )
}
