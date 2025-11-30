import React from 'react';

// Define the navigation links data
const footerNav = [
    {
        title: "Product",
        links: [
            { name: "About", href: "#about" },
            { name: "Features", href: "#features" },
            { name: "How It Works", href: "#howitworks" },
        ]
    },
    {
        title: "Support",
        links: [
            { name: "Contact", href: "#contact" },
            { name: "Help Center", href: "#help-center" },
        ]
    },
    {
        title: "Legal",
        links: [
            { name: "Terms of Service", href: "#terms" },
            { name: "Privacy Policy", href: "#privacy" },
            { name: "Cookies", href: "#cookies" },
        ]
    },
];

// Reusable Link Column Component
const FooterColumn = ({ title, links }) => (
    <div>
        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
            {title}
        </h3>
        <ul className="space-y-3">
            {links.map((link) => (
                <li key={link.name}>
                    <a 
                        href={link.href}
                        className="text-base text-gray-600 hover:text-indigo-600 transition duration-150 ease-in-out"
                    >
                        {link.name}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);


export default function Footer() {
    // Replace 'Your Name/Studio' with your actual name or company
    const ownershipText = "Designed and Developed by Julius Mwangi"; 

    return(
        <footer className="bg-white border-t border-gray-200" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

                {/* Top Section: Logo, Brand Statement, and Navigation Grid */}
                <div className="xl:grid xl:grid-cols-4 xl:gap-8">
                    
                    {/* Column 1: Logo and Brand Statement */}
                    <div className="space-y-6 xl:col-span-1">
                        {/* Logo Placeholder */}
                        <div className="text-2xl font-bold text-indigo-600">
                            StudyHub
                        </div>

                        {/* Short Brand Statement */}
                        <p className="text-gray-500 max-w-sm">
                            StudyHub helps students learn together, stay organized, and succeed.
                        </p>
                    </div>

                    {/* Column 2-4: Navigation Links Grid */}
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-3 md:grid-cols-3">
                        {footerNav.map((col) => (
                            <FooterColumn key={col.title} title={col.title} links={col.links} />
                        ))}
                    </div>
                </div>

                {/* Horizontal Divider */}
                <div className="mt-12 border-t border-gray-200 pt-8">
                    {/* Copyright and Ownership Line */}
                    <div className="flex flex-col sm:flex-row justify-center xl:justify-start items-center space-y-2 sm:space-y-0 sm:space-x-4">
                        
                        {/* Copyright */}
                        <p className="text-base text-gray-400">
                            © 2025 StudyHub. All rights reserved.
                        </p>

                        {/* Separator on desktop */}
                        <span className="hidden sm:block text-gray-400">|</span> 
                        
                        {/* Ownership */}
                        <p className="text-base text-gray-400">
                            {ownershipText}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}