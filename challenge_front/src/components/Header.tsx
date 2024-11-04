import React from 'react';

function Header() {
    return (
        <header className="bg-indigo-950 p-4 text-white flex justify-between items-center">
            <div className="flex items-center">
                <img src="/assets/Logo.png" alt="SOS Mecânico" className="w-30 h-20" />
                <h1 className="ml-4 text-2xl">SOS Mecânico</h1>
            </div>
        </header>
    );
}

export default Header;
