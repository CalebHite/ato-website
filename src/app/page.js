"use client";

import Image from "next/image";
import Navbar from "./components/navbar";
import { Crimson_Text, Montserrat, Oswald } from 'next/font/google';
import Footer from "./components/footer";
import { useClientSideOnly } from '../hooks/useClientSideOnly';

const crimsonText = Crimson_Text({ subsets: ['latin'], weight: ['400', '600', '700'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });
const oswald = Oswald({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700'] });

export default function Home() {
  const isMounted = useClientSideOnly();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="w-full flex flex-col items-center overflow-hidden">
      <Navbar theme="dark" />
      <div className="w-full relative">
        <div className="absolute top-0 left-0 w-full z-10" style={{ backgroundColor: '#121212', height: '6.5rem'}}></div>
        <div className="relative w-full h-[65vh] sm:h-[80vh] md:h-auto md:aspect-video">
          <iframe
            className="w-full h-full absolute inset-0"
            src="https://www.youtube.com/embed/7x-8knpgpn4?si=h3sudtAmSBNbFr54&autoplay=1&controls=0&rel=0&mute=1&start=10&loop=1&playlist=7x-8knpgpn4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{ filter: "brightness(0.35)" }}
          ></iframe>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-auto md:h-40 flex flex-col md:flex-row items-center justify-center py-4 space-y-4 md:space-y-0" style={{ background: "#F4F5FA" }}>
          <img src="/images/jayhawks1.jpg" alt="Jayhawks" className="w-48 md:w-80 h-auto object-contain md:mr-4" />
          <img src="/images/jayhawks2.jpg" alt="Jayhawks" className="w-48 md:w-80 h-auto object-contain md:ml-4" />
        </div>

        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center px-4">
          <img
            src="/images/ATO-dark-blue-yellow@2x.webp"
            alt="ATO Logo"
            className="w-48 md:w-80 h-auto object-contain brightness-200 -mt-20 md:-mt-40"
          />
          <h2 className={`text-gray-200 text-lg md:text-xl mt-4 text-center ${montserrat.className}`}>
            At The University of Kansas
          </h2>
        </div>
      </div>

      <div className="w-full py-12 md:py-20 pb-20 md:pb-40 bg-white flex flex-col items-center text-center px-4 md:px-0">
        <h1 className={`text-black text-3xl md:text-4xl ${crimsonText.className}`}>A Letter From Our President</h1>
        <img src="/images/gold-cross.png" alt="Gold Cross" className="mt-6 md:mt-8 w-12 md:w-16 h-12 md:h-16" />
        <p className={`mt-6 md:mt-8 text-black text-sm md:text-base w-full md:w-1/2 ${montserrat.className}`}>
          As President of ATO at the University of Kansas, I am honored to welcome you to our brotherhood. At ATO, we foster lifelong bonds, academic excellence, and personal growth that extends far beyond college.
          <br />
          <br />
          Brotherhood is at our core. More than friends, we are a family who support one another through challenges and triumphs. Whether through chapter events, social activities, or serving our community, the connections built here will last a lifetime.
          <br />
          <br />
          We also emphasize scholarship. Through mentorship, study groups, and academic incentives, we help our members achieve excellence. Many of our brothers go on to become leaders in their fields, supported by the discipline and network they build here.
          <br />
          <br />
          ATO shapes young men into future leaders. Through service and leadership, we give back to our campus and community while developing key life skills. Our members are able to grow and learn in a structured, supportive environment.
          <br />
          <br />
          If you're considering joining, you'll find a lifelong family and opportunities for growth. We look forward to welcoming you!
        </p>
        <h2 className={`mt-6 md:mt-8 text-black text-xl md:text-2xl ${crimsonText.className}`}>L&R</h2>
        <br />
        <img src="/images/signature.png" alt="Robert Boersma" className="mt-6 md:mt-8 w-48 md:w-80 h-auto" />
      </div>
      <Footer />
    </div>
  );
}