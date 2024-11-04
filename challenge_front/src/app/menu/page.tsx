// pages/menu.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Header2 from '../../components/Header2';
import Footer from '../../components/Footer';

const Menu: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-300">
      <Header2 />
      <main className="flex-grow p-4 flex flex-col items-center justify-start">
        <div className="w-full flex flex-col items-center">
          <div className="w-1/2 bg-white p-4 mb-4 border border-gray-300 rounded-md text-center">
            <Link href="/atendimento" className="text-gray-900 hover:bg-gray-800 hover:text-white block py-2 px-4 rounded-md">
              Atendimento On-line
            </Link>
          </div>
          <div className="w-1/2 bg-white p-4 mb-4 border border-gray-300 rounded-md text-center">
            <Link href="/mecanicos" className="text-gray-900 hover:bg-gray-800 hover:text-white block py-2 px-4 rounded-md">
              Listar Mecânicos Na Área
            </Link>
          </div>
          <div className="w-1/2 bg-white p-4 mb-4 border border-gray-300 rounded-md text-center">
            <Link href="/cadastrar_mecanico" className="text-gray-900 hover:bg-gray-800 hover:text-white block py-2 px-4 rounded-md">
              Cadastrar Mecânico
            </Link>
          </div>
          <div className="w-1/2 bg-white p-4 mb-4 border border-gray-300 rounded-md text-center">
            <Link href="/reboque" className="text-gray-900 hover:bg-gray-800 hover:text-white block py-2 px-4 rounded-md">
              Chamar Reboque
            </Link>
          </div>
          <Link href="/login" className="w-1/2 bg-indigo-950 text-white py-2 rounded-md hover:bg-blue-800 mb-4 block text-center">
            Voltar
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
