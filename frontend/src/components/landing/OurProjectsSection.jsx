import React, { useEffect, useState } from 'react';
import axiosClient, { getImageUrl } from '../../api/axiosClient';

const OurProjectsSection = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await axiosClient.get('/projects');
                setProjects(res.data.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    if (loading) return <div className="text-center py-20">Loading projects...</div>;

    return (
        <section id="projects" className="section-padding">
            <div className="text-center mb-16 space-y-4">
                <h4 className="text-primary font-bold uppercase tracking-widest text-sm">Our Projects</h4>
                <h2 className="text-4xl font-bold text-gray-800">Explore Our Masterpieces</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div key={project.id} className="group overflow-hidden rounded-xl shadow-lg bg-white">
                        <div className="relative overflow-hidden h-64">
                            <img
                                src={getImageUrl(project.imageUrl)}
                                alt={project.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">{project.name}</h3>
                            <p className="text-gray-600 mb-6 line-clamp-3">{project.description}</p>
                            <button className="btn-primary">Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurProjectsSection;
