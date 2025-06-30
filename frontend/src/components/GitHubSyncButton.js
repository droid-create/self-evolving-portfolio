import React from 'react';
import axios from 'axios';

const GitHubSyncButton = () => {
    const handleSync = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/projects/sync/github');
            alert('GitHub sync completed successfully!');
        } catch (error) {
            alert('GitHub sync failed.');
            console.error(error);
        }
    };

    return (
        <button
            onClick={handleSync}
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-xl hover:scale-105 transform transition"
        >
            🔄 Sync GitHub Projects
        </button>
    );
};

export default GitHubSyncButton;
