import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const AdminLayout = () => {
    const token = localStorage.getItem('adminToken');

    if (!token) {
        return <Navigate to="/admin/login" replace />;
    }

    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />
            <main className="flex-1 p-8 overflow-y-auto max-h-screen">
                <header className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
                    <button
                        onClick={() => { localStorage.removeItem('adminToken'); window.location.href = '/admin/login'; }}
                        className="text-red-500 font-semibold hover:text-red-700"
                    >
                        Logout
                    </button>
                </header>
                <div className="bg-white rounded-xl shadow-sm p-6 min-h-[80vh]">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
