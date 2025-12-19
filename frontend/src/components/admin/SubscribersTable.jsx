import React, { useEffect, useState } from 'react';
import axiosClient from '../../api/axiosClient';
import { toast } from 'react-hot-toast';
import { Loader2 } from 'lucide-react';

const SubscribersTable = () => {
    const [subscribers, setSubscribers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSubscribers = async () => {
            try {
                const res = await axiosClient.get('/subscribers');
                setSubscribers(res.data.data);
            } catch (error) {
                toast.error('Failed to fetch subscribers');
            } finally {
                setLoading(false);
            }
        };
        fetchSubscribers();
    }, []);

    if (loading) return <div className="flex justify-center py-10"><Loader2 className="animate-spin text-primary" /></div>;

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold">Newsletter Subscribers</h2>
            <div className="overflow-x-auto max-w-2xl">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-50 border-b">
                        <tr>
                            <th className="p-4 font-semibold">Email</th>
                            <th className="p-4 font-semibold">Subscribed On</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subscribers.map((sub) => (
                            <tr key={sub.id} className="border-b hover:bg-gray-50">
                                <td className="p-4 font-medium">{sub.email}</td>
                                <td className="p-4 text-gray-500 text-sm">
                                    {new Date(sub.createdAt).toLocaleDateString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SubscribersTable;
