import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const SkillList = () => {
    const [skills, setSkills] = useState([]);

    const fetchSkills = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/skills`);
            setSkills(response.data);
        } catch (error) {
            console.error('Error fetching skills:', error);
            toast.error('Failed to fetch skills.');
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/api/skills/${id}`);
            toast.success('Skill deleted successfully!');
            fetchSkills();
        } catch (error) {
            console.error('Error deleting skill:', error);
            toast.error('Failed to delete skill.');
        }
    };

    useEffect(() => {
        fetchSkills();
    }, []);

    return (
        <div className="grid gap-6">
            {skills.map((skill) => (
                <div key={skill._id} className="bg-white bg-opacity-20 backdrop-blur p-4 rounded-xl shadow-md flex justify-between items-center">
                    <div>
                        <h3 className="text-xl font-bold text-purple-200">{skill.name}</h3>
                        <p className="text-gray-200">{skill.proficiency}</p>
                    </div>
                    <button
                        onClick={() => handleDelete(skill._id)}
                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default SkillList;
