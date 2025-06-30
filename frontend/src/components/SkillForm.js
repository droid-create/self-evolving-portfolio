import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Loader2 } from 'lucide-react'; // Spinner from lucide-react (already in Vercel's ecosystem)

const SkillForm = ({ onSkillAdded }) => {
    const [formData, setFormData] = useState({ name: '', proficiency: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name.trim() || !formData.proficiency.trim()) {
            toast.error('Please provide both skill name and proficiency.');
            return;
        }

        try {
            setLoading(true);
            await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/skills`, formData);
            toast.success('Skill added successfully!');
            onSkillAdded();
            setFormData({ name: '', proficiency: '' });
        } catch (error) {
            console.error('Error adding skill:', error);
            toast.error('Error adding skill. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white bg-opacity-10 backdrop-blur p-6 rounded-2xl shadow-lg mb-6 space-y-4">
            <h2 className="text-2xl font-semibold text-purple-200 mb-4">➕ Add New Skill</h2>

            <input
                type="text"
                name="name"
                placeholder="Enter skill name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-600 bg-white bg-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                required
            />

            <input
                type="text"
                name="proficiency"
                placeholder="Enter proficiency level"
                value={formData.proficiency}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-600 bg-white bg-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                required
            />

            <button
                type="submit"
                disabled={loading}
                className={`w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white py-3 rounded-xl transform transition hover:scale-105 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                {loading ? (
                    <span className="flex items-center justify-center space-x-2">
                        <Loader2 className="animate-spin w-5 h-5" />
                        <span>Adding...</span>
                    </span>
                ) : (
                    'Add Skill 🚀'
                )}
            </button>
        </form>
    );
};

export default SkillForm;
