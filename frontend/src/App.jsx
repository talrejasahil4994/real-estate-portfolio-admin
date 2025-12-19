import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminLayout from './components/admin/AdminLayout';
import DashboardHome from './components/admin/DashboardHome';
import ProjectsTable from './components/admin/ProjectsTable';
import ClientsTable from './components/admin/ClientsTable';
import ContactsTable from './components/admin/ContactsTable';
import SubscribersTable from './components/admin/SubscribersTable';

function App() {
    return (
        <Router>
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/admin/login" element={<AdminLoginPage />} />

                {/* Protected Admin Routes */}
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<DashboardHome />} />
                    <Route path="projects" element={<ProjectsTable />} />
                    <Route path="clients" element={<ClientsTable />} />
                    <Route path="contacts" element={<ContactsTable />} />
                    <Route path="subscribers" element={<SubscribersTable />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
