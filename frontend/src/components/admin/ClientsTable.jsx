import React, { useEffect, useState } from 'react';
import axiosClient, { getImageUrl } from '../../api/axiosClient';
import { toast } from 'react-hot-toast';
import { Plus, Loader2, Edit, Trash2 } from 'lucide-react';

const ClientsTable = () => {
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);
    const [editingClient, setEditingClient] = useState(null);

    const fetchClients = async () => {
        try {
            const res = await axiosClient.get('/clients');
            setClients(res.data.data);
        } catch (error) {
            toast.error('Failed to fetch clients');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchClients();
    }, []);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleEdit = (client) => {
        setEditingClient(client);
        setShowForm(true);
        setImagePreview(getImageUrl(client.imageUrl));
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this client?')) return;

        try {
            await axiosClient.delete(`/clients/${id}`);
            toast.success('Client deleted successfully');
            fetchClients();
        } catch (error) {
            toast.error('Failed to delete client');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        const formData = new FormData(e.target);

        try {
            if (editingClient) {
                await axiosClient.put(`/clients/${editingClient.id}`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
                toast.success('Client updated successfully');
            } else {
                await axiosClient.post('/clients', formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
                toast.success('Client added successfully');
            }
            setShowForm(false);
            setEditingClient(null);
            setImagePreview(null);
            fetchClients();
        } catch (error) {
            toast.error(editingClient ? 'Failed to update client' : 'Failed to add client');
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) return <div className="flex justify-center py-10"><Loader2 className="animate-spin text-primary" /></div>;

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Happy Clients</h2>
                <button
                    onClick={() => {
                        setShowForm(!showForm);
                        setEditingClient(null);
                        setImagePreview(null);
                    }}
                    className="btn-primary flex items-center space-x-2"
                >
                    {showForm ? null : <Plus size={20} />}
                    <span>{showForm ? 'Cancel' : 'Add Client'}</span>
                </button>
            </div>

            {showForm && (
                <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-lg border border-gray-200 space-y-4 max-w-2xl">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Name</label>
                            <input name="name" defaultValue={editingClient?.name} required className="w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Designation</label>
                            <input name="designation" defaultValue={editingClient?.designation} required className="w-full p-2 border rounded" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Testimonial Description</label>
                        <textarea name="description" defaultValue={editingClient?.description} required className="w-full p-2 border rounded h-24"></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Client Avatar</label>
                        <input type="file" name="image" accept="image/*" required={!editingClient} onChange={handleImageChange} className="w-full" />
                        {imagePreview && <img src={imagePreview} alt="Preview" className="mt-4 w-20 h-20 object-cover rounded-full border border-primary" />}
                    </div>
                    <button type="submit" disabled={submitting} className="btn-primary w-full flex justify-center items-center">
                        {submitting ? <Loader2 className="animate-spin mr-2" /> : null}
                        {editingClient ? 'Update Client' : 'Save Client'}
                    </button>
                </form>
            )}

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-50 border-b">
                        <tr>
                            <th className="p-4 font-semibold">Avatar</th>
                            <th className="p-4 font-semibold">Name</th>
                            <th className="p-4 font-semibold">Designation</th>
                            <th className="p-4 font-semibold">Feedback</th>
                            <th className="p-4 font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map((client) => (
                            <tr key={client.id} className="border-b hover:bg-gray-50">
                                <td className="p-4">
                                    <img src={getImageUrl(client.imageUrl)} className="w-12 h-12 object-cover rounded-full" alt="" />
                                </td>
                                <td className="p-4 font-medium">{client.name}</td>
                                <td className="p-4">{client.designation}</td>
                                <td className="p-4 text-gray-600 truncate max-w-xs">{client.description}</td>
                                <td className="p-4 space-x-2">
                                    <button onClick={() => handleEdit(client)} className="text-blue-500 hover:text-blue-700">
                                        <Edit size={18} />
                                    </button>
                                    <button onClick={() => handleDelete(client.id)} className="text-red-500 hover:text-red-700">
                                        <Trash2 size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ClientsTable;
