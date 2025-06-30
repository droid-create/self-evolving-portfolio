import React, { useState } from 'react';
import { createProject } from '../api/projectApi';

const ProjectForm = ({ onProjectAdded }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [repoLink, setRepoLink] = useState('');
    const [deployedLink, setDeployedLink] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newProject = { title, description, repoLink, deployedLink, techStack: [] };
            await createProject(newProject);
            onProjectAdded(); // Trigger refresh
            setTitle('');
            setDescription('');
            setRepoLink('');
            setDeployedLink('');
        } catch (error) {
            console.error('Error creating project:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add New Project</h3>
            <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
            <input placeholder="Repo Link" value={repoLink} onChange={(e) => setRepoLink(e.target.value)} />
            <input placeholder="Deployed Link" value={deployedLink} onChange={(e) => setDeployedLink(e.target.value)} />
            <button 
    type="submit"
    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition mt-4"
>
    Add Project
</button>

        </form>
    );
};

export default ProjectForm;
