// Existing
import API from './api';

// GET all projects
export const fetchProjects = async () => {
    const response = await API.get('/projects');
    return response.data;
};

// 🔹 NEW: Create project
export const createProject = async (projectData) => {
    const response = await API.post('/projects', projectData);
    return response.data;
};
// 🔄 Trigger GitHub sync
export const syncGitHubProjects = async () => {
    const response = await API.get('/projects/sync/github');
    return response.data;
};
// Delete Project
export const deleteProject = async (id) => {
    const response = await API.delete(`/projects/${id}`);
    return response.data;
};
