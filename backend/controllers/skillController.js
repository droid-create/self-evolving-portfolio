const Skill = require('../models/skills');

// Get all skills
const getAllSkills = async (req, res) => {
    try {
        const skills = await Skill.find();
        res.json(skills);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new skill
const createSkill = async (req, res) => {
    const { name, proficiency } = req.body;

    try {
        const newSkill = new Skill({ name, proficiency });
        const savedSkill = await newSkill.save();
        res.status(201).json(savedSkill);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a skill
const updateSkill = async (req, res) => {
    try {
        const updatedSkill = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedSkill);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a skill
const deleteSkill = async (req, res) => {
    try {
        const skillId = req.params.id;
        await Skill.findByIdAndDelete(skillId);
        res.json({ message: 'Skill deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete skill', error: error.message });
    }
};

module.exports = { getAllSkills, createSkill, updateSkill, deleteSkill };
