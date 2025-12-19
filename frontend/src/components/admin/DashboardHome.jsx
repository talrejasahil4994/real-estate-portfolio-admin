import React from 'react';
import { Link } from 'react-router-dom';
import { FolderKanban, Users, Mail, Bell } from 'lucide-react';

const DashboardHome = () => {
    const stats = [
        { label: 'Projects', to: '/admin/projects', color: 'bg-blue-500', icon: <FolderKanban /> },
        { label: 'Clients', to: '/admin/clients', color: 'bg-green-500', icon: <Users /> },
        { label: 'Contacts', to: '/admin/contacts', color: 'bg-orange-500', icon: <Mail /> },
        { label: 'Subscribers', to: '/admin/subscribers', color: 'bg-indigo-500', icon: <Bell /> },
    ];

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-6">Welcome back, Admin!</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <Link key={stat.label} to={stat.to} className={`${stat.color} text-white p-6 rounded-xl hover:opacity-90 transition-opacity`}>
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-sm opacity-80 uppercase tracking-wider">{stat.label}</p>
                                <p className="text-2xl font-bold">Manage</p>
                            </div>
                            <div className="p-3 bg-white/20 rounded-full">
                                {stat.icon}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default DashboardHome;
