import React from 'react';
import { Home, ShieldCheck, Zap } from 'lucide-react';

const WhyChooseUs = () => {
    const features = [
        {
            icon: <Home size={40} className="text-primary" />,
            title: "Potential ROI",
            description: "Investing in real estate can provide significant long-term returns and stability."
        },
        {
            icon: <ShieldCheck size={40} className="text-primary" />,
            title: "Design",
            description: "Modern and aesthetically pleasing designs tailored to your specific needs."
        },
        {
            icon: <Zap size={40} className="text-primary" />,
            title: "Marketing",
            description: "Strategic marketing to ensure your property gets the visibility it deserves."
        }
    ];

    return (
        <section className="section-padding bg-accent">
            <div className="text-center mb-16 space-y-4">
                <h4 className="text-primary font-bold uppercase tracking-widest text-sm">Why Choose Us</h4>
                <h2 className="text-4xl font-bold text-gray-800">We Provide The Best Quality Services</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="bg-white p-10 rounded-xl shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300">
                        <div className="bg-orange-50 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;
