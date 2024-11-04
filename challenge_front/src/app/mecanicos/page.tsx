// pages/mecanicos.tsx
'use client';

import React from "react";
import Link from "next/link";
import Header2 from "../../components/Header2";
import Footer from "../../components/Footer";
import Cartao from "../../components/Cartao";
import Mapa from "../../../public/assets/logo maps.png";

const Mecanicos: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-300">
            <Header2 />
            <main className="flex flex-col items-center bg-gray-300 py-4 px-6 flex-grow">
                <div className="text-center mb-6">
                    <h1 className="text-3xl mb-4 mt-3 text-indigo-950">Listar Mecânicos Na Área</h1>
                </div>
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
                    <Cartao 
                        nome="Auto Conserto"
                        preco="R$423"
                        distancia="Distância 1.5Km"
                        endereco="Rua Computer Thinking, 123"
                        telefone="11-1234-5678"
                        status="Aberto"
                        statusCor="text-green-500"
                        imagemSrc="/assets/logo maps.png" 
                    />
                    <Cartao 
                        nome="Peças+"
                        preco="R$387"
                        distancia="Distância 5.3Km"
                        endereco="Avenida Front-End"
                        telefone="11-1234-5678"
                        status="Fechado"
                        statusCor="text-red-500"
                        imagemSrc="/assets/logo maps.png"
                    />
                    <Cartao 
                        nome="Mecânico 24h"
                        preco="R$456"
                        distancia="Distância 10Km"
                        endereco="Rua dos Javas"
                        telefone="11-1234-5678"
                        status="Aberto"
                        statusCor="text-green-500"
                        imagemSrc="/assets/logo maps.png"
                    />
                    <Cartao 
                        nome="Oficina do João"
                        preco="R$399"
                        distancia="Distância 22Km"
                        endereco="Rua das Startups"
                        telefone="11-1234-5678"
                        status="Aberto"
                        statusCor="text-green-500"
                        imagemSrc="/assets/logo maps.png"
                    />
                    <Cartao 
                        nome="Auto Peças e Serviços"
                        preco="R$499"
                        distancia="Distância 38Km"
                        endereco="Avenida da Inovação"
                        telefone="11-1234-5678"
                        status="Fechado"
                        statusCor="text-red-500"
                        imagemSrc="/assets/logo maps.png"
                    />
                    <Cartao 
                        nome="Mecânica Express"
                        preco="R$350"
                        distancia="Distância 60Km"
                        endereco="Rua do Desenvolvimento"
                        telefone="11-1234-5678"
                        status="Fechado"
                        statusCor="text-red-500"
                        imagemSrc="/assets/logo maps.png"
                    />
                    <Cartao 
                        nome="Gaius Mecânica"
                        preco="R$700.00"
                        distancia="Distância 95Km"
                        endereco="Rua Chatbot & IA"
                        telefone="11-1234-5678"
                        status="Fechado"
                        statusCor="text-red-500"
                        imagemSrc="/assets/logo maps.png"
                    />
                    <Cartao 
                        nome="Mecânica do Hércules"
                        preco="R$500"
                        distancia="Distância 123Km"
                        endereco="Rua Business Model, 231"
                        telefone="11-1234-5678"
                        status="Fechado"
                        statusCor="text-red-500"
                        imagemSrc="/assets/logo maps.png"
                    />
                </section>
                <div className="flex justify-center mt-6 mb-6">
                    <Link href="/menu">
                        <button
                            className="w-64 bg-indigo-950 text-white py-5 rounded-md hover:bg-blue-800"
                        >
                            Voltar
                        </button>
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Mecanicos;
