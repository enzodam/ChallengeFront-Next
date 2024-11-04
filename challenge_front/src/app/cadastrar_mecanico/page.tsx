// src/app/cadastrar-mecanico/page.tsx
'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation"; 
import Header2 from "../../components/Header2";
import Footer from "../../components/Footer";

const CadastrarMecanico: React.FC = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        nameOficina: "",
        local: "",
        telefone: "",
        cnpj: "",
        hora: "",
        servicos: ""
    });
    const [errorMessages, setErrorMessages] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const { nameOficina, local, telefone, cnpj, hora, servicos } = formData;

        if (!nameOficina || !local || !telefone || !cnpj || !hora || !servicos) {
            setErrorMessages('Por favor, preencha todos os campos.');
            return;
        }

        alert('Cadastro realizado com sucesso!');
        console.log('Cadastro realizado: ', formData);

        router.push('/menu');
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-300">
            <Header2 />
            <main className="bg-gray-300 py-5 px-6 flex-grow">
                <div className="text-center mb-6">
                    <h1 className="text-3xl mb-4 mt-3 text-indigo-950">Cadastrar Mecânico</h1>
                </div>
                <form id="form" onSubmit={handleSubmit} className="flex flex-col mx-auto max-w-md space-y-4">
                    <label htmlFor="nameOficina" className="text-lg">Nome Da Oficina:</label>
                    <input
                        type="text"
                        id="nameOficina"
                        name="nameOficina"
                        value={formData.nameOficina}
                        onChange={handleChange}
                        required
                        maxLength={50}
                        className="p-2 border border-gray-300 rounded-md"
                    />

                    <label htmlFor="local" className="text-lg">Local:</label>
                    <input
                        type="text"
                        id="local"
                        name="local"
                        value={formData.local}
                        onChange={handleChange}
                        required
                        maxLength={50}
                        className="p-2 border border-gray-300 rounded-md"
                    />

                    <label htmlFor="telefone" className="text-lg">Telefone:</label>
                    <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        required
                        className="p-2 border border-gray-300 rounded-md"
                    />

                    <label htmlFor="cnpj" className="text-lg">CNPJ:</label>
                    <input
                        type="text"
                        id="cnpj"
                        name="cnpj"
                        value={formData.cnpj}
                        onChange={handleChange}
                        required
                        maxLength={50}
                        className="p-2 border border-gray-300 rounded-md"
                    />

                    <label htmlFor="hora" className="text-lg">Horário de Funcionamento:</label>
                    <input
                        type="text"
                        id="hora"
                        name="hora"
                        value={formData.hora}
                        onChange={handleChange}
                        required
                        maxLength={50}
                        className="p-2 border border-gray-300 rounded-md"
                    />

                    <label htmlFor="servicos" className="text-lg">Serviços Oferecidos:</label>
                    <input
                        type="text"
                        id="servicos"
                        name="servicos"
                        value={formData.servicos}
                        onChange={handleChange}
                        required
                        maxLength={500}
                        className="p-2 border border-gray-300 rounded-md"
                    />

                    {errorMessages && (
                        <div className="text-red-500 text-center">{errorMessages}</div>
                    )}

                    <div className="flex justify-center mt-6">
                        <button
                            type="submit"
                            id="cadastrar"
                            className="w-64 bg-indigo-950 text-white py-5 rounded-md hover:bg-indigo-800"
                        >
                            Cadastrar
                        </button>
                    </div>
                </form>
                <div className="flex justify-center mt-6">
                    <button
                        className="w-64 bg-indigo-950 text-white py-5 rounded-md hover:bg-blue-800"
                        onClick={() => router.push('/menu')}
                    >
                        Voltar
                    </button>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CadastrarMecanico;
