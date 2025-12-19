import React, { useEffect, useState } from 'react';
import axiosClient from '../../api/axiosClient';
import { toast } from 'react-hot-toast';
import { Loader2 } from 'lucide-react';

const ContactsTable = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const res = await axiosClient.get('/contacts');
                setContacts(res.data.data);
            } catch (error) {
                toast.error('Failed to fetch contact submissions');
            } finally {
                setLoading(false);
            }
        };
        fetchContacts();
    }, []);

    if (loading) return <div className="flex justify-center py-10"><Loader2 className="animate-spin text-primary" /></div>;

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold">Contact Inquiries</h2>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-50 border-b">
                        <tr>
                            <th className="p-4 font-semibold">Name</th>
                            <th className="p-4 font-semibold">Email</th>
                            <th className="p-4 font-semibold">Mobile</th>
                            <th className="p-4 font-semibold">City</th>
                            <th className="p-4 font-semibold">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact) => (
                            <tr key={contact.id} className="border-b hover:bg-gray-50">
                                <td className="p-4 font-medium">{contact.fullName}</td>
                                <td className="p-4">{contact.email}</td>
                                <td className="p-4">{contact.mobile}</td>
                                <td className="p-4">{contact.city}</td>
                                <td className="p-4 text-gray-500 text-sm">
                                    {new Date(contact.createdAt).toLocaleDateString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ContactsTable;
