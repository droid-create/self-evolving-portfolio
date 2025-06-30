// Existing
import API from './api';

// GET all skills
export const fetchSkills = async () => {
    const response = await API.get('/skills');
    return response.data;
};

// 🔹 NEW: Create skill
export const createSkill = async (skillData) => {
    const response = await API.post('/skills', skillData);
    return response.data;
};
// Delete Skill
export const deleteSkill = async (id) => {
    const response = await API.delete(`/skills/${id}`);
    return response.data;
};
