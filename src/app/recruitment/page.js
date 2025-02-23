import Navbar from "../components/navbar";
import { Crimson_Text, Montserrat, Oswald } from 'next/font/google';
import Footer from "../components/footer";


const crimsonText = Crimson_Text({ subsets: ['latin'], weight: ['400', '600', '700'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });
const oswald = Oswald({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700'] });

export default function Recruitment() {
    return (
        <div>
            <Navbar />
            <div className="relative h-screen flex items-center justify-center">
                <img 
                    src="/images/filler.jpg" 
                    className="absolute w-full h-full" 
                    alt="Background"
                />
                <img 
                    src="images/Join-ATO-white-yellow-logo@2x.webp" 
                    className="relative z-10 mx-auto" 
                    alt="Logo"
                />
            </div>

            <div className="w-full h-40 bg-gray-200 flex flex-row items-center justify-center gap-x-10 p-4">
                <img className="w-16 h-16" src="images/gold-cross.png" alt="Gold Cross"></img>
                <img className="w-16 h-16" src="images/gold-cross.png" alt="Gold Cross"></img>
                <img className="w-16 h-16" src="images/gold-cross.png" alt="Gold Cross"></img>

                <h4 className={`text-4xl text-center text-bold ${oswald.className}`} style={{color: '#F79825'}}>Meet Our Recruitment Team</h4>
                
                <img className="w-16 h-16" src="images/gold-cross.png" alt="Gold Cross"></img>
                <img className="w-16 h-16" src="images/gold-cross.png" alt="Gold Cross"></img>
                <img className="w-16 h-16" src="images/gold-cross.png" alt="Gold Cross"></img>
            </div>
            <div className="flex flex-col py-20" style={{ backgroundColor: '#163551', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="flex flex-col w-1/5 text-center mb-8">
                <img src="images/fohlm.png" className=""></img>
                <h1 className={`text-4xl my-1 ${oswald.className}`} style={{color: '#F79825'}}>Ryan Fohlmeister</h1>
                <p className={`text-md text-gray-300 ${montserrat.className}`}>Recruitment Chairman</p>
                <p className={`text-sm text-gray-300 ${montserrat.className}`}>913-703-9298</p>
                <p className={`text-sm text-gray-300 ${montserrat.className}`}>ryanfohlmeister@gmail.com</p>
                </div>
                <div className="flex flex-row gap-x-10">
                <div className="flex flex-col w-1/8 text-center">
                    <img src="images/duckworth.png" className=""></img>
                    <h1 className={`text-4xl my-1 ${oswald.className}`} style={{color: '#F79825'}}>Henry Duckworth</h1>
                    <p className={`text-md text-gray-300 ${montserrat.className}`}>Rush Chair</p>
                    <p className={`text-sm text-gray-300 ${montserrat.className}`}>913-638-8020</p>
                    <p className={`text-sm text-gray-300 ${montserrat.className}`}>henrybraden@icloud.com</p>
                </div>
                <div className="flex flex-col w-1/8 text-center">
                    <img src="images/rowe.png" className=""></img>
                    <h1 className={`text-4xl my-1 ${oswald.className}`} style={{color: '#F79825'}}>Tyler Rowe</h1>
                    <p className={`text-md text-gray-300 ${montserrat.className}`}>Rush Chair</p>
                    <p className={`text-sm text-gray-300 ${montserrat.className}`}>402-560-4477</p>
                    <p className={`text-sm text-gray-300 ${montserrat.className}`}>tylersrowe05@gmail.com</p>
                </div>
                <div className="flex flex-col w-1/8 text-center">
                    <img src="images/lips.png" className=""></img>
                    <h1 className={`text-4xl my-1 ${oswald.className}`} style={{color: '#F79825'}}>Ryan Hannigan</h1>
                    <p className={`text-md text-gray-300 ${montserrat.className}`}>Rush Chair</p>
                    <p className={`text-sm text-gray-300 ${montserrat.className}`}>402-990-3967</p>
                    <p className={`text-sm text-gray-300 ${montserrat.className}`}>ryanhannigan445@gmail.com</p>
                </div>
                </div>
            </div>
            <div className="recruitment-process-container w-full bg-white flex flex-col items-center justify-center p-8 py-20 shadow-lg">
                <h4 className={`recruitment-title text-3xl text-center text-gray-900 font-semibold ${oswald.className}`}>
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
