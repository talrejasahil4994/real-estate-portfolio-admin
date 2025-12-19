import React from 'react';
import { toast } from 'react-hot-toast';
import axiosClient from '../../api/axiosClient';

const HeroSection = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            await axiosClient.post('/contacts', data);
            toast.success('Consultation requested successfully!');
            e.target.reset();
        } catch (error) {
            toast.error('Something went wrong. Please try again.');
        }
    };

    return (
        <section className="relative h-[80vh] flex items-center px-6 lg:px-24">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                    alt="Luxury Home"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="relative z-10 w-full flex flex-col lg:flex-row justify-between items-center gap-12">
                <div className="text-white max-w-2xl space-y-6">
                    <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                        Consultation, <br /> <span className="text-primary">Design,</span> & Carry Out
                    </h1>
                    <p className="text-xl text-gray-200">
                        We provide the best real estate services for your dream home. From planning to execution, we are with you.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
                    <h3 className="text-2xl font-bold mb-6 text-gray-800">Get a Free Consultation</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input type="text" name="fullName" placeholder="Full Name" required className="w-full p-3 border border-gray-300 rounded focus:border-primary outline-none" />
                        <input type="email" name="email" placeholder="Email Address" required className="w-full p-3 border border-gray-300 rounded focus:border-primary outline-none" />
                        <input type="text" name="mobile" placeholder="Mobile Number" required className="w-full p-3 border border-gray-300 rounded focus:border-primary outline-none" />
                        <input type="text" name="city" placeholder="City" required className="w-full p-3 border border-gray-300 rounded focus:border-primary outline-none" />
                        <button type="submit" className="w-full btn-primary py-4 text-lg font-bold">Get In Touch</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
