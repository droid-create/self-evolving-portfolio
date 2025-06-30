const express = require('express');
const router = express.Router();
const { getAllProjects, createProject, updateProject, deleteProject } = require('../controllers/projectController');

// Route to get all projects
router.get('/', getAllProjects);

// Route to create a project
router.post('/', createProject);

// Route to update a project
router.put('/:id', updateProject);

// Route to delete a project
router.delete('/:id', deleteProject);

module.exports = router;
