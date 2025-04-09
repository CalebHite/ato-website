import Navbar from "../components/navbar";
import { Montserrat, Oswald } from 'next/font/google';
import Footer from "../components/footer";


const montserrat = Montserrat({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });
const oswald = Oswald({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700'] });

export default function Recruitment() {
    return (
        <div>
            <Navbar theme="dark" />
            <div className="relative h-screen flex items-center justify-center">
                <img
                    src="/images/filler.jpg"
                    className="absolute w-full h-full"
                    alt="Background"
                />
                <div
                    className="absolute w-full h-full z-20"
                    style={{
                        backgroundImage: 'url(/images/asfalt-light.png)',
                        backgroundSize: '15%',
                        backgroundRepeat: 'repeat'
                    }}
                    alt="Overlay"
                />
                <img
                    src="images/Join-ATO-white-yellow-logo@2x.webp"
                    className="relative z-30 mx-auto"
                    alt="Logo"
                />
            </div>

            <div className="w-full h-40 bg-gray-200 flex flex-row items-center justify-center gap-x-10 p-4">
                <img className="w-16 h-16" src="images/gold-cross.png" alt="Gold Cross"></img>
                <img className="w-16 h-16" src="images/gold-cross.png" alt="Gold Cross"></img>
                <img className="w-16 h-16" src="images/gold-cross.png" alt="Gold Cross"></img>

                <h4 className={`text-4xl text-center text-bold ${oswald.className}`} style={{ color: '#F79825' }}>Meet Our Recruitment Team</h4>

                <img className="w-16 h-16" src="images/gold-cross.png" alt="Gold Cross"></img>
                <img className="w-16 h-16" src="images/gold-cross.png" alt="Gold Cross"></img>
                <img className="w-16 h-16" src="images/gold-cross.png" alt="Gold Cross"></img>
            </div>
            <div className="flex flex-row text-gray-300 text-center" style={{ backgroundColor: '#163551' }}>
                <div className="w-1/2 flex flex-col py-10 items-center">
                    <div className="flex flex-col mb-8 items-center">
                        <img src="images/fohlm.png" className="w-48 h-48"></img>
                        <h1 className={`text-3xl my-1 ${oswald.className}`} style={{ color: '#F79825' }}>Ryan Fohlmeister</h1>
                        <p className={`text-md ${montserrat.className}`}>Recruitment Chairman</p>
                        <p className={`text-md ${montserrat.className}`}>913-703-9298</p>
                        <p className={`text-md ${montserrat.className}`}>ryanfohlmeister@gmail.com</p>
                    </div>
                    <div className="flex flex-row gap-x-10">
                        <div className="flex flex-col w-1/8 items-center">
                            <img src="images/duckworth.png" className="w-36 h-36"></img>
                            <h1 className={`text-2xl my-1 ${oswald.className}`} style={{ color: '#F79825' }}>Henry Duckworth</h1>
                            <p className={`text-sm ${montserrat.className}`}>913-638-8020</p>
                            <p className={`text-sm ${montserrat.className}`}>henrybraden@icloud.com</p>
                        </div>
                        <div className="flex flex-col w-1/8 items-center">
                            <img src="images/rowe.png" className="w-36 h-36"></img>
                            <h1 className={`text-2xl my-1 ${oswald.className}`} style={{ color: '#F79825' }}>Tyler Rowe</h1>
                            <p className={`text-sm ${montserrat.className}`}>402-560-4477</p>
                            <p className={`text-sm ${montserrat.className}`}>tylersrowe05@gmail.com</p>
                        </div>
                        <div className="flex flex-col w-1/8 items-center">
                            <img src="images/lips.png" className="w-36 h-36"></img>
                            <h1 className={`text-2xl my-1 ${oswald.className}`} style={{ color: '#F79825' }}>Ryan Hannigan</h1>
                            <p className={`text-sm ${montserrat.className}`}>402-990-3967</p>
                            <p className={`text-sm ${montserrat.className}`}>ryanhannigan445@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="w-1 bg-gray-200"></div>
                <div className="w-1/2 p-8">
                    <h2 className={`text-3xl ${oswald.className}`} style={{ color: '#F79825' }}>
                        Living at Alpha Tau Omega
                    </h2>
                    <p className={`text-md my-4 ${montserrat.className}`}>
                        Living in the house provides a unique opportunity to bond with students from all over the country and create lifelong friendships. The shared experiences and camaraderie foster a strong sense of community. Additionally, living in the house allows for easier participation in events and activities, enhancing your overall fraternity experience.
                    </p>
                    <hr />
                    <h3 className={`text-2xl mt-4 ${oswald.className}`} style={{ color: '#F79825' }}>
                        House Information
                    </h3>
                    <ul className={`mt-4 flex flex-col gap-y-2 p-4 rounded-lg ${montserrat.className}`}>
                        <li>Current Population of 71 members</li>
                        <br />
                        <li>Financial Dues for New Members is $800/Semester</li>
                        <li>Financial Dues for Active Members is $550/Semester</li>
                        <li>Financial Dues for In-house Members is $4,500/Semester</li>
                        <br />
                        <li>Live with roommates for your first year, then move into your own room</li>
                    </ul>
                    <hr />
                    <p className={`text-md mt-4 ${montserrat.className}`}>
                        Living in the house is often cheaper than living in the dorms, as all costs are included. This allows for a more budget-friendly option while enjoying a vibrant community and numerous benefits.
                    </p>
                </div>
            </div>
            <div className="recruitment-process-container w-full bg-gray-200 flex flex-col items-center justify-center p-8 py-20 shadow-lg">
                <h4 className={`recruitment-title text-3xl text-center text-gray-800 font-semibold ${oswald.className}`}>
                    Recruitment Process
                </h4>
                <ul className={`recruitment-steps list-disc list-inside text-lg text-gray-800 mt-6 space-y-2 ${montserrat.className}`}>
                    <li>Fill out the Rush Interest Form</li>
                    <li>Reach out to a Rush Chair</li>
                    <li>Attend rush events and house tours</li>
                    <li>Get to know ATO brothers and other future ATOs</li>
                    <li>Once offered, sign your official ATO bid card</li>
                </ul>
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
