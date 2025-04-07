import { Montserrat } from 'next/font/google';
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const montserrat = Montserrat({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

export default function Scholarship() {
    return (
        <div className="w-full flex flex-col items-center">
            <Navbar theme="dark" />
            <div className="flex-grow flex items-center justify-center">
                <h1 className="text-4xl">Scholarship</h1>
            </div>
            <Footer />
        </div>
    );
}
