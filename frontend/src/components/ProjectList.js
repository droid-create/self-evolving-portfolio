import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);

    const fetchProjects = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/projects`);
            setProjects(response.data);
        } catch (error) {
            console.error('Error fetching projects:', error);
            toast.error('Failed to fetch projects.');
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/api/projects/${id}`);
            toast.success('Project deleted successfully!');
            fetchProjects();
        } catch (error) {
            console.error('Error deleting project:', error);
            toast.error('Failed to delete project.');
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    return (
        <div className="grid gap-6">
            {projects.map((project) => (
                <div key={project._id} className="bg-white bg-opacity-20 backdrop-blur p-4 rounded-xl shadow-md">
                    <h3 className="text-xl font-bold text-blue-200 mb-2">{project.title}</h3>
                    <p className="text-gray-200 mb-2">{project.description}</p>
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline mr-4">
                        View Repository
                    </a>
                    {project.deployedLink && (
                        <a href={project.deployedLink} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline mr-4">
                            Live Demo
                        </a>
                    )}
                    <button
                        onClick={() => handleDelete(project._id)}
                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProjectList;
