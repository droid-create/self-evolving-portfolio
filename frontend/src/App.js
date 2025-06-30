import React, { useState } from 'react';
import ProjectList from './components/ProjectList';
import SkillList from './components/SkillList';
import ProjectForm from './components/ProjectForm';
import SkillForm from './components/SkillForm';
import GitHubSyncButton from './components/GitHubSyncButton';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [refreshProjects, setRefreshProjects] = useState(false);
    const [refreshSkills, setRefreshSkills] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-8">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-extrabold mb-4 text-blue-400">🚀 Self-Evolving Portfolio</h1>
                <p className="text-lg text-gray-300">Showcasing Projects and Skills that grow with me</p>
            </header>

            <div className="flex justify-center mb-8">
                <GitHubSyncButton />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-2xl shadow-lg">
                    <h2 className="text-2xl font-semibold text-blue-300 mb-4">Add New Project</h2>
                    <ProjectForm onProjectAdded={() => setRefreshProjects(!refreshProjects)} />
                </div>

                <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-2xl shadow-lg">
                    <h2 className="text-2xl font-semibold text-green-300 mb-4">Add New Skill</h2>
                    <SkillForm onSkillAdded={() => setRefreshSkills(!refreshSkills)} />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-2xl shadow-lg">
                    <h2 className="text-2xl font-semibold text-blue-300 mb-4">Projects</h2>
                    <ProjectList key={refreshProjects} />
                </div>

                <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-2xl shadow-lg">
                    <h2 className="text-2xl font-semibold text-green-300 mb-4">Skills</h2>
                    <SkillList key={refreshSkills} />
                </div>
            </div>

            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick pauseOnFocusLoss draggable pauseOnHover />
        </div>
    );
}

export default App;
