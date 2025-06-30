import React, { useState } from 'react';
import { createSkill } from '../api/skillApi';

const SkillForm = ({ onSkillAdded }) => {
    const [name, setName] = useState('');
    const [proficiency, setProficiency] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newSkill = { name, proficiency };
            await createSkill(newSkill);
            onSkillAdded(); // Trigger refresh
            setName('');
            setProficiency('');
        } catch (error) {
            console.error('Error creating skill:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add New Skill</h3>
            <input placeholder="Skill Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input placeholder="Proficiency" value={proficiency} onChange={(e) => setProficiency(e.target.value)} required />
            <button 
    type="submit"
    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition mt-4"
>
    Add Skill
</button>

        </form>
    );
};

export default SkillForm;
