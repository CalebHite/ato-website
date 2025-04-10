import { Montserrat, Oswald } from 'next/font/google';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from 'next/link';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });
const oswald = Oswald({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700'] });

export default function Philanthropy() {
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
                <h1 className={`text-6xl mt-4 ${oswald.className}`} style={{ color: '#F79825' }}>PHILANTHROPY & COMMUNITY SERVICE</h1>
            </div>
            <hr className="w-3/4 mx-auto my-8" />
            <div className="flex flex-grow">
                <div className="flex flex-col items-center justify-left px-8 pb-10 w-3/4 text-left">
                    <div className="mb-8 w-full max-w-3xl">
                        <h1 className={`text-4xl mb-4 ${oswald.className}`} style={{ color: '#F79825' }}>Philanthropy</h1>
                        <p className={`text-md text-gray-800 ${montserrat.className}`}>
                            The Gamma Mu chapter of Alpha Tau Omega at KU takes pride in making a meaningful impact through philanthropy and community service. Whether it’s coordinating donation drives, participating in campus-wide philanthropy competitions, or raising thousands of dollars through <a href="https://rockchalkrevue.com" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Rock Chalk Revue</a>, ATO ensures that our community remains a force for good.
                        </p>
                    </div>
                    <div className="mb-8 w-full max-w-3xl">
                        <h1 className={`text-4xl mb-4 ${oswald.className}`} style={{ color: '#F79825' }}>Community Service</h1>
                        <p className={`text-md text-gray-800 ${montserrat.className}`}>
                            In addition to philanthropy, ATO members are dedicated to making a positive impact in our community. From volunteering at local organizations such as Natural Ties, to participating in Lawrence service events, our brothers are committed to giving back to the community that supports them.
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
                    <img src="/images/Service1.jpg" className="w-128 h-80 object-cover rounded-lg shadow-lg" alt="Athletic Activities" />
                    <img src="/images/RCR8.jpg" className="w-128 h-80 object-cover rounded-lg shadow-lg" alt="Paintball Activities" />
                    <img src="/images/Service2.jpg" className="w-128 h-80 object-cover rounded-lg shadow-lg" alt="Paintball Activities" />
                </div>
            </div>

            <p className={`text-xl text-gray-900 text-center w-full mb-10 ${oswald.className}`}>
                You can find more information about ATO Kansas at the <a href="https://kuifc.org/alpha-tau-omega" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Interfraternity Council</a> or by clicking the tabs on the right.
            </p>
            <Footer />
        </div>
    );
}
