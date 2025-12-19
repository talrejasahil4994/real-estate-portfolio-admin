import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import axiosClient from '../../api/axiosClient';

const NewsletterSection = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = async (e) => {
        e.preventDefault();
        if (!email) return;

        try {
            await axiosClient.post('/subscribers', { email });
            toast.success('Subscribed successfully!');
            setEmail('');
        } catch (error) {
            toast.error(error.response?.data?.message || 'Subscription failed.');
        }
    };

    return (
        <form onSubmit={handleSubscribe} className="flex flex-col space-y-4">
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="p-3 bg-gray-800 border border-gray-700 rounded text-white focus:border-primary outline-none"
                required
            />
            <button type="submit" className="btn-primary">Subscribe</button>
        </form>
    );
};

export default NewsletterSection;
