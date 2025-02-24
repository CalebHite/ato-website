"use client";

import React from 'react';
import { Montserrat, Oswald } from 'next/font/google';
import emailjs from 'emailjs-com';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });
const oswald = Oswald({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700'] });

const Footer = () => {
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
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // This enables smooth scrolling
        });
    };

    return (
        <footer className="site-footer w-full text-white py-16 pb-20" style={{ backgroundColor: '#163551'}}>
            <div className="footer-content max-w-6xl mx-auto px-4">
                <div className="footer-section flex flex-col md:flex-row justify-between items-start">
                    <div className="contact-section mb-4 md:mb-0">
                        <h4 className={`text-4xl font-semibold mb-4 text-gray-200 ${oswald.className}`} style={{color: '#F79825'}}>Contact Us</h4>
                        <form className="email-form space-y-4" onSubmit={sendEmail}>
                            <input 
                                type="email" 
                                name="user_email"
                                placeholder="Your email" 
                                required 
                                className={`w-full p-2 bg-gray-100 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${montserrat.className}`}
                            />
                            <textarea 
                                name="message"
                                placeholder="Your message" 
                                required 
                                className={`w-full p-2 bg-gray-100 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${montserrat.className}`}
                            ></textarea>
                            <button 
                                type="submit" 
                                className={`interest-form-button mt-6 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white text-lg py-3 px-12 ${montserrat.className}`}
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
                <p className={`mt-4 text-md text-gray-300 ${montserrat.className}`}>1537 Tennessee Street, Lawrence, Kansas 66046</p>
                
                <div 
                    className="flex justify-center mt-12"
                >
                    <img 
                        src="images/gold-cross.png" 
                        alt="Gold Cross" 
                        onClick={scrollToTop}
                        className="cursor-pointer"
                    ></img>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
