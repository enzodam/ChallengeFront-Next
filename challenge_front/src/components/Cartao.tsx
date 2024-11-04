// src/components/Cartao.tsx
import React from 'react';

interface CartaoProps {
    nome: string;
    preco: string;
    distancia: string;
    endereco: string;
    telefone: string;
    status: string;
    statusCor: string;
    imagemSrc: string; // Agora é uma string
}

const Cartao: React.FC<CartaoProps> = ({
    nome,
    preco,
    distancia,
    endereco,
    telefone,
    status,
    statusCor,
    imagemSrc,
}) => {
    return (
        <article className="bg-white text-black p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
                <div className="info">
                    <p><strong>{nome}</strong></p>
                    <p>{preco}</p>
                    <p>{distancia}</p>
                    <p>{endereco}</p>
                    <p>{telefone}</p>
                    <p>
                        <span className={`font-bold ${statusCor}`}>
                            {status}
                        </span> - Fecha às 00:00
                    </p>
                </div>
                <img src={imagemSrc} alt="maps" className="w-1/3 h-auto" />
            </div>
        </article>
    );
};

export default Cartao;
