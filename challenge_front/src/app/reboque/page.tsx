// src/app/reboque/page.tsx
'use client';

import React from "react";
import { useRouter } from "next/navigation"; 
import Header2 from "../../components/Header2";
import Footer from "../../components/Footer";

const Reboque: React.FC = () => {
    const router = useRouter(); 

    const handleVoltar = () => {
        router.push('/menu'); 
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-800 text-gray-200">
            <Header2 />
            <main className="flex flex-col items-center bg-gray-300 py-8 px-4 flex-grow">
                <div className="text-center mb-8">
                    <h1 className="text-3xl mb-4 mt-3 text-indigo-950">Chamar Reboque</h1>
                </div>
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
                    {["A", "B", "C", "D", "E"].map((item) => (
                        <article key={item} className="bg-white text-black p-4 rounded-lg shadow-md">
                            <div className="flex flex-col">
                                <p className="text-xl font-bold">Guincho {item}</p>
                                <p>Distância: 2 km</p>
                                <p>11-90000-0000</p>
                                <p className="text-green-500">Previsão de chegada: 15 minutos</p>
                            </div>
                        </article>
                    ))}
                </section>
                <div className="flex justify-center mt-6">
                    <button
                        className="w-64 bg-indigo-950 text-white py-5 rounded-md hover:bg-blue-800"
                        onClick={handleVoltar}
                    >
                        Voltar
                    </button>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Reboque;
