'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

export default function MobileNav({ isOpen, onClose }) {
    const [isAboutOpen, setIsAboutOpen] = useState(false);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.body.style.overflow = isOpen ? 'hidden' : '';
        }
        return () => {
            if (typeof document !== 'undefined') {
                document.body.style.overflow = '';
            }
        };
    }, [isOpen]);

    const aboutPages = [
        { name: 'General', path: '/about' },
        { name: 'Leadership', path: '/leadership' },
        { name: 'Philanthropy & Community Service', path: '/philanthropy' },
        { name: 'Honors & Awards', path: '/awards' },
        { name: 'Scholarship', path: '/scholarship' }
    ];

    return (
        <div
            className={`fixed inset-0 bg-black bg-opacity-75 transition-opacity z-[100] ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            onClick={onClose}
        >
            <div
                className={`fixed right-0 top-0 h-full w-64 bg-white shadow-xl transform transition-transform z-[101] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-end p-2">
                    <img
                        src="images/Jayhawk.png"
                        alt="KU Jayhawk"
                        className="w-16 h-16"
                    />
                </div>
                <div className="flex flex-col px-4">
                    <Link
                        href="/"
                        onClick={onClose}
                        className="py-4 px-4 text-gray-800 text-left hover:bg-gray-100 rounded-lg mb-2 text-lg font-medium"
                    >
                        Home
                    </Link>

                    <button
                        onClick={() => setIsAboutOpen(!isAboutOpen)}
                        className="py-4 px-4 text-gray-800 text-left hover:bg-gray-100 rounded-lg mb-2 text-lg font-medium flex justify-between items-center"
                    >
                        About
                        <span className="text-xl">{isAboutOpen ? '−' : '+'}</span>
                    </button>

                    {isAboutOpen && (
                        <div className="pl-4 border-l-2 border-gray-200">
                            {aboutPages.map((page) => (
                                <Link
                                    key={page.path}
                                    href={page.path}
                                    onClick={onClose}
                                    className="block py-3 px-4 text-gray-800 text-left hover:bg-gray-100 rounded-lg mb-2 text-base"
                                >
                                    {page.name}
                                </Link>
                            ))}
                        </div>
                    )}

                    <Link
                        href="/recruitment"
                        onClick={onClose}
                        className="py-4 px-4 text-gray-800 text-left hover:bg-gray-100 rounded-lg mb-2 text-lg font-medium"
                    >
                        Join ATO
                    </Link>

                    <Link
                        href="/parents-alumni"
                        onClick={onClose}
                        className="py-4 px-4 text-gray-800 text-left hover:bg-gray-100 rounded-lg mb-2 text-lg font-medium"
                    >
                        Parents Club
                    </Link>
                </div>
            </div>
        </div>
    );
} 