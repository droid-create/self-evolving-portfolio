const express = require('express');
const router = express.Router();
const { syncGitHubProjects } = require('../controllers/projectController');

// GitHub sync route
router.get('/sync/github', syncGitHubProjects);

// Route to get all projects
router.get('/', getAllProjects);

// Route to create a project
router.post('/', createProject);

// Route to update a project
router.put('/:id', updateProject);

// Route to delete a project
router.delete('/:id', deleteProject);

module.exports = router;