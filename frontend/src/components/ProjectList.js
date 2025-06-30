import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);

    const fetchProjects = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/projects`);
            setProjects(response.data);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this project?')) {
            try {
                await axios.delete(`${process.env.REACT_APP_API_URL}/api/projects/${id}`);
                alert('Project deleted successfully!');
                fetchProjects(); // Refresh the list after deletion
            } catch (error) {
                alert('Failed to delete project.');
                console.error('Delete error:', error);
            }
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    return (
        <div>
            {projects.length === 0 ? (
                <p className="text-gray-300">No projects found.</p>
            ) : (
                projects.map((project) => (
                    <div
                        key={project._id}
                        className="bg-white bg-opacity-20 backdrop-blur p-4 mb-4 rounded-xl shadow-md transition hover:scale-[1.02] cursor-pointer"
                    >
                        <h3 className="text-xl font-bold text-blue-200 mb-2">{project.title}</h3>
                        <p className="text-gray-200 mb-2">{project.description}</p>
                        <a
                            href={project.repoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline"
                        >
                            View Repository
                        </a>
                        <button
                            onClick={() => handleDelete(project._id)}
                            className="ml-4 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                        >
                            Delete
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default ProjectList;
