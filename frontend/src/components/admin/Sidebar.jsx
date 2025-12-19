import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FolderKanban, Users, Mail, Bell } from 'lucide-react';

const Sidebar = () => {
    const links = [
        { to: '/admin', icon: <LayoutDashboard size={20} />, label: 'Dashboard', end: true },
        { to: '/admin/projects', icon: <FolderKanban size={20} />, label: 'Projects' },
        { to: '/admin/clients', icon: <Users size={20} />, label: 'Clients' },
        { to: '/admin/contacts', icon: <Mail size={20} />, label: 'Contacts' },
        { to: '/admin/subscribers', icon: <Bell size={20} />, label: 'Subscribers' },
    ];

    return (
        <aside className="w-64 bg-secondary text-white flex flex-col">
            <div className="p-8 border-b border-gray-800">
                <h2 className="text-xl font-bold">Admin Panel</h2>
            </div>
            <nav className="flex-1 p-4 space-y-2">
                {links.map((link) => (
                    <NavLink
                        key={link.to}
                        to={link.to}
                        end={link.end}
                        className={({ isActive }) =>
                            `flex items-center space-x-3 p-3 rounded-lg transition-colors ${isActive ? 'bg-primary' : 'hover:bg-gray-800'
                            }`
                        }
                    >
                        {link.icon}
                        <span>{link.label}</span>
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
