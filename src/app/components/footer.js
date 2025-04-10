"use client";

import React from 'react';
import { Montserrat, Oswald } from 'next/font/google';
import emailjs from 'emailjs-com';
import { useClientSideOnly } from '../../hooks/useClientSideOnly';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });
const oswald = Oswald({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700'] });

const Footer = () => {
    const isMounted = useClientSideOnly();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
                alert('Email sent successfully!');
            }, (error) => {
                console.log(error.text);
                alert('Failed to send email. Please try again later.');
            });
    };

    const scrollToTop = () => {
        if (isMounted) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    };

    if (!isMounted) {
        return null;
    }

    return (
        <footer className="site-footer w-full text-white py-16 pb-20" style={{ backgroundColor: '#163551' }}>
            <div className="footer-content max-w-6xl mx-auto px-4">
                <div className="footer-section flex flex-col md:flex-row justify-between items-start">
                    <div className="contact-section mb-4 md:mb-0 w-full md:w-1/2">
                        <h4 className={`text-4xl font-semibold mb-4 text-gray-200 ${oswald.className}`} style={{ color: '#F79825' }}>Contact Us</h4>
                        <form className="email-form space-y-4" onSubmit={sendEmail}>
                            <input
                                type="email"
                                name="user_email"
                                placeholder="Your email"
                                required
                                className={`w-full p-2 bg-gray-100 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${montserrat.className}`}
                            />
                            <textarea
                                name="message"
                                placeholder="Your message"
                                required
                                rows="6"
                                className={`w-full p-2 bg-gray-100 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${montserrat.className}`}
                                style={{ minHeight: "150px", resize: "vertical" }}
                            ></textarea>
                            <button
                                type="submit"
                                className={`interest-form-button mt-6 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white text-lg py-3 px-12 ${montserrat.className}`}
                            >
                                Send
                            </button>
                        </form>

                        <div className="flex items-center mt-12">
                            <img
                                src="images/gold-cross.png"
                                alt="Gold Cross"
                                onClick={scrollToTop}
                                className="cursor-pointer mr-4"
                            />
                            <div>
                                <h4 className={`text-4xl font-semibold text-gray-200 ${oswald.className}`} style={{ color: '#F79825' }}>Alpha Tau Omega</h4>
                                <p className={`text-md text-gray-300 ${montserrat.className}`}>America's Leadership Development Fraternity</p>
                            </div>
                        </div>
                    </div>
                    <div className="map-section mt-8 md:mt-0 md:ml-8 w-full md:w-1/2">
                        <h4 className={`text-4xl font-semibold mb-4 text-gray-200 ${oswald.className}`} style={{ color: '#F79825' }}>Our Location</h4>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.6180349971196!2d-95.24241662410766!3d38.95555364327066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87bf6f4ce4b9a027%3A0xc28b3b3b73824076!2sAlpha%20Tau%20Omega%20Fraternity!5e0!3m2!1sen!2sus!4v1743394462867!5m2!1sen!2sus" width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-md shadow-lg"></iframe>
                        <p className={`mt-4 text-md text-gray-300 ${montserrat.className}`}>1537 Tennessee Street, Lawrence, Kansas 66046</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
