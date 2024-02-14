import React from 'react';

const Dashboard = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-2xl font-bold mb-2">Section 1</h2>
                <p className="text-gray-700 text-base">Content for section 1...</p>
            </div>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-2xl font-bold mb-2">Section 2</h2>
                <p className="text-gray-700 text-base">Content for section 2...</p>
            </div>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-2xl font-bold mb-2">Section 3</h2>
                <p className="text-gray-700 text-base">Content for section 3...</p>
            </div>
        </div>
    );
};

export default Dashboard;