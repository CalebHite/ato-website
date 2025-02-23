"use client";

import React from 'react';
import { Montserrat } from 'next/font/google';
import emailjs from 'emailjs-com';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

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

    return (
        <footer className="site-footer w-full bg-gray-800 text-white py-16 pb-20">
            <div className="footer-content max-w-6xl mx-auto px-4">
                <div className="footer-section flex flex-col md:flex-row justify-between items-start">
                    <div className="contact-section mb-4 md:mb-0">
                        <h4 className={`text-4xl font-semibold mb-4 ${montserrat.className}`}>Contact Us</h4>
                        <form className="email-form space-y-4" onSubmit={sendEmail}>
                            <input 
                                type="email" 
                                name="user_email"
                                placeholder="Your email" 
                                required 
                                className={`w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${montserrat.className}`}
                            />
                            <textarea 
                                name="message"
                                placeholder="Your message" 
                                required 
                                className={`w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${montserrat.className}`}
                            ></textarea>
                            <button 
                                type="submit" 
                                className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md ${montserrat.className}`}
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
                <p className={`mt-4 text-lg ${montserrat.className}`}>1537 Tennessee Street, Lawrence, Kansas 66046</p>
            </div>
        </footer>
    );
};

export default Footer;
