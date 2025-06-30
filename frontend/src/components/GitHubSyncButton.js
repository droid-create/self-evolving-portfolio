import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL
});

const GitHubSyncButton = () => {
    const [loading, setLoading] = useState(false);

    const handleSync = async () => {
        if (loading) return; // Prevent multiple clicks
        setLoading(true);

        try {
            await api.get('/api/projects/sync/github');
            toast.success('GitHub sync completed successfully!');
        } catch (error) {
            toast.error('GitHub sync failed. Check the console for details.');
            console.error('GitHub Sync Error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            onClick={handleSync}
            disabled={loading}
            className={`bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-xl hover:scale-105 transform transition ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
            {loading ? '🔄 Syncing...' : '🔄 Sync GitHub Projects'}
        </button>
    );
};

export default GitHubSyncButton;
