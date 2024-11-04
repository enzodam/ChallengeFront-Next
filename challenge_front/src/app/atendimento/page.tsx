// pages/atendimento.tsx
'use client';

import React from "react";
import Link from "next/link";
import Header2 from "../../components/Header2";
import Footer from "../../components/Footer";

const Atendimento: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-300">
            <Header2 />
            <main className="flex flex-col items-center bg-gray-300 flex-grow py-4 px-6">
                <h1 className="text-3xl mb-4 mt-3 text-indigo-950">Atendimento On-line</h1>
                <div className="w-full max-w-md">
                    <p className="text-xl mb-4">Chat Bot</p>
                    <input 
                        type="text" 
                        name="fullname" 
                        required 
                        autoFocus 
                        maxLength={90}
                        className="w-full p-3 mb-4 border border-gray-300 rounded-md text-lg"
                    />
                    <div className="flex justify-center mt-6">
                        <Link href="/menu">
                            <button
                                className="w-64 bg-indigo-950 text-white py-5 rounded-md hover:bg-blue-800"
                            >
                                Voltar
                            </button>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Atendimento;
