import React from 'react';
import NewsletterSection from '../landing/NewsletterSection';

const Footer = () => {
    return (
        <footer className="bg-secondary text-white">
            <div className="section-padding grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold">RealEstate<span className="text-primary">Admin</span></h3>
                    <p className="text-gray-400">Building dreams into reality with premium properties and unmatched service.</p>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-primary">About Us</a></li>
                        <li><a href="#" className="hover:text-primary">Services</a></li>
                        <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li>123 Real Estate Ave, Suite 100</li>
                        <li>Email: contact@realestate.com</li>
                        <li>Phone: +1 234 567 890</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
                    <NewsletterSection />
                </div>
            </div>
            <div className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} Real Estate Portfolio Admin. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
