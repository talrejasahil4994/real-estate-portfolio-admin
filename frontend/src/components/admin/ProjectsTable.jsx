import React, { useEffect, useState } from 'react';
import axiosClient, { getImageUrl } from '../../api/axiosClient';
import { toast } from 'react-hot-toast';
import { Plus, Loader2, Edit, Trash2 } from 'lucide-react';

const ProjectsTable = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);
    const [editingProject, setEditingProject] = useState(null);

    const fetchProjects = async () => {
        try {
            const res = await axiosClient.get('/projects');
            setProjects(res.data.data);
        } catch (error) {
            toast.error('Failed to fetch projects');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleEdit = (project) => {
        setEditingProject(project);
        setShowForm(true);
        setImagePreview(getImageUrl(project.imageUrl));
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this project?')) return;

        try {
            await axiosClient.delete(`/projects/${id}`);
            toast.success('Project deleted successfully');
            fetchProjects();
        } catch (error) {
            toast.error('Failed to delete project');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        const formData = new FormData(e.target);

        try {
            if (editingProject) {
                await axiosClient.put(`/projects/${editingProject.id}`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
                toast.success('Project updated successfully');
            } else {
                await axiosClient.post('/projects', formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
                toast.success('Project added successfully');
            }
            setShowForm(false);
            setEditingProject(null);
            setImagePreview(null);
            fetchProjects();
        } catch (error) {
            toast.error(editingProject ? 'Failed to update project' : 'Failed to add project');
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) return <div className="flex justify-center py-10"><Loader2 className="animate-spin text-primary" /></div>;

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Projects</h2>
                <button
                    onClick={() => {
                        setShowForm(!showForm);
                        setEditingProject(null);
                        setImagePreview(null);
                    }}
                    className="btn-primary flex items-center space-x-2"
                >
                    {showForm ? null : <Plus size={20} />}
                    <span>{showForm ? 'Cancel' : 'Add Project'}</span>
                </button>
            </div>

            {showForm && (
                <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-lg border border-gray-200 space-y-4 max-w-2xl">
                    <div>
                        <label className="block text-sm font-medium mb-1">Project Name</label>
                        <input name="name" defaultValue={editingProject?.name} required className="w-full p-2 border rounded" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Description</label>
                        <textarea name="description" defaultValue={editingProject?.description} required className="w-full p-2 border rounded h-24"></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Property Image</label>
                        <input type="file" name="image" accept="image/*" required={!editingProject} onChange={handleImageChange} className="w-full" />
                        {imagePreview && <img src={imagePreview} alt="Preview" className="mt-4 w-32 h-24 object-cover rounded border" />}
                    </div>
                    <button type="submit" disabled={submitting} className="btn-primary w-full flex justify-center items-center">
                        {submitting ? <Loader2 className="animate-spin mr-2" /> : null}
                        {editingProject ? 'Update Project' : 'Add Project'}
                    </button>
                </form>
            )}

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-50 border-b">
                        <tr>
                            <th className="p-4 font-semibold">Image</th>
                            <th className="p-4 font-semibold">Name</th>
                            <th className="p-4 font-semibold">Description</th>
                            <th className="p-4 font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project) => (
                            <tr key={project.id} className="border-b hover:bg-gray-50">
                                <td className="p-4">
                                    <img src={getImageUrl(project.imageUrl)} className="w-20 h-16 object-cover rounded" alt="" />
                                </td>
                                <td className="p-4 font-medium">{project.name}</td>
                                <td className="p-4 text-gray-600 truncate max-w-xs">{project.description}</td>
                                <td className="p-4 space-x-2">
                                    <button onClick={() => handleEdit(project)} className="text-blue-500 hover:text-blue-700">
                                        <Edit size={18} />
                                    </button>
                                    <button onClick={() => handleDelete(project.id)} className="text-red-500 hover:text-red-700">
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

export default ProjectsTable;
