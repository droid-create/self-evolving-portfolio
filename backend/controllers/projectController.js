const Project = require('../models/projects');
const axios = require('axios');

// 🔹 Get All Projects
const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 🔹 Create New Project
const createProject = async (req, res) => {
    const { title, description, repoLink, deployedLink, techStack } = req.body;

    try {
        const newProject = new Project({ title, description, repoLink, deployedLink, techStack });
        const savedProject = await newProject.save();
        res.status(201).json(savedProject);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 🔹 Update Existing Project
const updateProject = async (req, res) => {
    try {
        const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedProject);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 🔹 Delete Project
const deleteProject = async (req, res) => {
    try {
        await Project.findByIdAndDelete(req.params.id);
        res.json({ message: 'Project deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 🔹 Core GitHub Sync (Pure Function, No req/res)
const githubSyncCore = async () => {
    try {
        const githubUsername = 'droid-create'; // Replace with your GitHub username
        console.log(`🔄 Starting GitHub sync for user: ${githubUsername}`);

        const githubApiUrl = `https://api.github.com/users/${githubUsername}/repos`;
        const response = await axios.get(githubApiUrl);
        const repos = response.data;

        let newProjectsCount = 0;

        for (const repo of repos) {
            const existingProject = await Project.findOne({ repoLink: repo.html_url });

            if (!existingProject) {
                const newProject = new Project({
                    title: repo.name,
                    description: repo.description || 'No description provided.',
                    repoLink: repo.html_url,
                    deployedLink: repo.homepage || '',
                    techStack: [],
                });

                await newProject.save();
                newProjectsCount++;
            } else {
                console.log(`⚡ Skipped existing project: ${repo.name}`);
            }
        }

        console.log(`🔔 GitHub sync completed. New projects added: ${newProjectsCount}`);
    } catch (error) {
        console.error('❌ GitHub Sync Error:', error.message);
    }
};

// 🔹 Route-Based GitHub Sync (For Postman API)
const syncGitHubProjects = async (req, res) => {
    try {
        await githubSyncCore();
        res.json({ message: 'GitHub sync completed successfully ✅' });
    } catch (error) {
        res.status(500).json({ message: 'GitHub sync failed', error: error.message });
    }
};

// 🔹 Export All Functions
module.exports = { 
    getAllProjects, 
    createProject, 
    updateProject, 
    deleteProject, 
    syncGitHubProjects, // For API route
    githubSyncCore      // For server and cron
};
