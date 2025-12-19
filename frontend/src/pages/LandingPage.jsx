import React from 'react';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/landing/HeroSection';
import WhyChooseUs from '../components/landing/WhyChooseUs';
import OurProjectsSection from '../components/landing/OurProjectsSection';
import HappyClientsSection from '../components/landing/HappyClientsSection';
import Footer from '../components/layout/Footer';

const LandingPage = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main>
                <div id="home">
                    <HeroSection />
                </div>
                <WhyChooseUs />
                <div id="projects">
                    <OurProjectsSection />
                </div>
                <div id="clients">
                    <HappyClientsSection />
                </div>
            </main>
            <div id="contact">
                <Footer />
            </div>
        </div>
    );
};

export default LandingPage;
