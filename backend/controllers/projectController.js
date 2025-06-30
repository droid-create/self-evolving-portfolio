const axios = require('axios');
const Project = require('../models/projects');

// GitHub Sync Function
const syncGitHubProjects = async (req, res) => {
    try {
        const githubUsername = 'droid-create'; // Your GitHub username
        const githubApiUrl = `https://api.github.com/users/${githubUsername}/repos`;

        console.log(`🔄 Starting GitHub sync for user: ${githubUsername}`);

        const response = await axios.get(githubApiUrl);
        const repos = response.data;

        let newProjects = 0;

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
                newProjects++;
                console.log(`✅ Added project: ${repo.name}`);
            } else {
                console.log(`⚡ Skipped existing project: ${repo.name}`);
            }
        }

        console.log(`🔔 GitHub sync completed. New projects added: ${newProjects}`);

        res.json({
            message: `GitHub sync completed successfully ✅`,
            newProjectsAdded: newProjects,
            totalReposFetched: repos.length
        });
    } catch (error) {
        console.error('❌ GitHub Sync Error:', error.message);
        res.status(500).json({ message: 'GitHub sync failed', error: error.message });
    }
};

module.exports = { syncGitHubProjects };
