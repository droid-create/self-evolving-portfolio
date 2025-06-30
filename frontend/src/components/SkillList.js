import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { deleteSkill } from '../api/skillApi';

const SkillList = () => {
    const [skills, setSkills] = useState([]);

    const fetchSkills = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/skills');
            setSkills(response.data);
        } catch (error) {
            console.error('Error fetching skills', error);
        }
    };

    useEffect(() => {
        fetchSkills();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this skill?')) {
            try {
                await deleteSkill(id);
                setSkills(skills.filter((skill) => skill._id !== id));
                alert('Skill deleted successfully');
            } catch (error) {
                console.error('Failed to delete skill', error);
            }
        }
    };

    return (
        <div>
            {skills.map((skill) => (
                <div key={skill._id} className="bg-white bg-opacity-20 backdrop-blur p-4 mb-4 rounded-xl shadow-md">
                    <h3 className="text-xl font-bold text-green-200 mb-2">{skill.name}</h3>
                    <p className="text-gray-200 mb-2">{skill.description}</p>
                    <button
                        onClick={() => handleDelete(skill._id)}
                        className="ml-4 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default SkillList;
