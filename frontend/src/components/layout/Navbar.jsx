import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center py-6 px-6 lg:px-24 bg-white shadow-sm sticky top-0 z-50">
            <div className="text-2xl font-bold text-gray-800">
                <Link to="/">RealEstate<span className="text-primary">Admin</span></Link>
            </div>
            <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
                <Link to="/#home" className="hover:text-primary transition-colors" onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}>Home</Link>
                <Link to="/#projects" className="hover:text-primary transition-colors" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>Projects</Link>
                <Link to="/#clients" className="hover:text-primary transition-colors" onClick={() => document.getElementById('clients')?.scrollIntoView({ behavior: 'smooth' })}>Clients</Link>
                <Link to="/#contact" className="hover:text-primary transition-colors" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contact</Link>
            </div>
            <div>
                <Link to="/admin/login" className="btn-primary">Admin Login</Link>
            </div>
        </nav>
    );
};

export default Navbar;
