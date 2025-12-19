import React, { useEffect, useState } from 'react';
import axiosClient, { getImageUrl } from '../../api/axiosClient';

const HappyClientsSection = () => {
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const res = await axiosClient.get('/clients');
                setClients(res.data.data);
            } catch (error) {
                console.error('Error fetching clients:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchClients();
    }, []);

    if (loading) return null;

    return (
        <section className="section-padding bg-accent overflow-hidden">
            <div className="text-center mb-16 space-y-4">
                <h4 className="text-primary font-bold uppercase tracking-widest text-sm">Happy Clients</h4>
                <h2 className="text-4xl font-bold text-gray-800">What Our Clients Say</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
                {clients.map((client) => (
                    <div key={client.id} className="bg-white p-8 rounded-xl shadow-lg max-w-sm flex flex-col items-center text-center">
                        <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-primary">
                            <img src={getImageUrl(client.imageUrl)} alt={client.name} className="w-full h-full object-cover" />
                        </div>
                        <p className="text-gray-600 italic mb-6">"{client.description}"</p>
                        <h4 className="font-bold text-gray-800">{client.name}</h4>
                        <span className="text-primary text-sm font-semibold uppercase">{client.designation}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HappyClientsSection;
