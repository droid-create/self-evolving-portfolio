import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Loader2 } from 'lucide-react';

const ProjectForm = ({ onProjectAdded }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        repoLink: '',
        deployedLink: '',
        techStack: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.title.trim() || !formData.repoLink.trim()) {
            toast.error('Project title and repository link are required.');
            return;
        }

        try {
            setLoading(true);
            await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/projects`, {
                ...formData,
                techStack: formData.techStack.split(',').map(tech => tech.trim())
            });

            toast.success('Project added successfully!');
            onProjectAdded();

            setFormData({
                title: '',
                description: '',
                repoLink: '',
                deployedLink: '',
                techStack: ''
            });
        } catch (error) {
            console.error('Error adding project:', error);
            toast.error('Error adding project. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white bg-opacity-10 backdrop-blur p-6 rounded-2xl shadow-lg mb-6 space-y-4">
            <h2 className="text-2xl font-semibold text-blue-200 mb-4">🚀 Add New Project</h2>

            <input
                type="text"
                name="title"
                placeholder="Enter project title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-600 bg-white bg-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
            />

            <textarea
                name="description"
                placeholder="Enter project description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-600 bg-white bg-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            <input
                type="url"
                name="repoLink"
                placeholder="Enter GitHub repository link"
                value={formData.repoLink}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-600 bg-white bg-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
            />

            <input
                type="url"
                name="deployedLink"
                placeholder="Enter deployed project link (optional)"
                value={formData.deployedLink}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-600 bg-white bg-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            <input
                type="text"
                name="techStack"
                placeholder="Enter technologies (comma-separated)"
                value={formData.techStack}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-600 bg-white bg-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            <button
                type="submit"
                disabled={loading}
                className={`w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 rounded-xl transform transition hover:scale-105 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                {loading ? (
                    <span className="flex items-center justify-center space-x-2">
                        <Loader2 className="animate-spin w-5 h-5" />
                        <span>Adding...</span>
                    </span>
                ) : (
                    'Add Project 🚀'
                )}
            </button>
        </form>
    );
};

export default ProjectForm;
