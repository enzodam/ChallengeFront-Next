// pages/integrantes.tsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';
import enzod from '../../../public/assets/enzo dias.jpeg';
import enzop from '../../../public/assets/enzo.jpeg';
import vini from '../../../public/assets/vini.jpg';
import Logo from '../../../public/assets/Logo.png';

const Integrantes: React.FC = () => {
  const router = useRouter();

  const handleVoltar = () => {
    router.push('/'); 
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-300">
      <main className="flex flex-col items-center flex-grow">
        <header className="w-full bg-indigo-950 text-gray-200 py-4 text-center">
          <h1 className="text-3xl">TURMA - 1TDSR</h1>
          <p className="text-lg mt-2">
            Repositório: 
            <Link href="https://github.com/enzodam/ChallengeFront-Next" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">
                https://github.com/enzodam/ChallengeFront-Next
            </Link>
          </p>
          <p className="text-lg mt-2">
            Vídeo:
            <Link href="https://www.youtube.com/watch?v=8_scNzU_TsI" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">
              https://www.youtube.com/watch?v=8_scNzU_TsI
            </Link>
          </p>
        </header>
        
        <section className="w-full max-w-4xl mx-auto mt-4">
          {/* Card de Vinicius */}
          <div className="bg-indigo-950 text-gray-200 rounded-xl mb-4 p-4 flex flex-col sm:flex-row items-center">
            <Image className="w-1/5 sm:w-24 rounded-full mr-4 sm:mr-4 mb-4 sm:mb-0" src={vini} alt="Vinicius Prates Altafini" />
            <div className="flex-1 text-center sm:text-left">
              <p className="text-lg">RM: 559183</p>
              <p className="text-lg">Aluno: Vinicius Prates Altafini</p>
              <p className="text-lg">
                <Link href="https://github.com/vinicius945" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">
                  https://github.com/vinicius945
                </Link>
              </p>
            </div>
            <Image className="w-1/5 sm:w-24 ml-4" src={Logo} alt="Logo" />
          </div>

          {/* Card de Enzo Prado */}
          <div className="bg-indigo-950 text-gray-200 rounded-xl mb-4 p-4 flex flex-col sm:flex-row items-center">
            <Image className="w-1/5 sm:w-24 rounded-full mr-4 sm:mr-4 mb-4 sm:mb-0" src={enzop} alt="Enzo Prado Soddano" />
            <div className="flex-1 text-center sm:text-left">
              <p className="text-lg">RM: 557937</p>
              <p className="text-lg">Aluno: Enzo Prado Soddano</p>
              <p className="text-lg">
                <Link href="https://github.com/DerBrasilianer" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">
                  https://github.com/DerBrasilianer
                </Link>
              </p>
            </div>
            <Image className="w-1/5 sm:w-24 ml-4" src={Logo} alt="Logo" />
          </div>

          {/* Card de Enzo Dias */}
          <div className="bg-indigo-950 text-gray-200 rounded-xl mb-4 p-4 flex flex-col sm:flex-row items-center">
            <Image className="w-1/5 sm:w-24 rounded-full mr-4 sm:mr-4 mb-4 sm:mb-0" src={enzod} alt="Enzo Dias Alfaia Mendes" />
            <div className="flex-1 text-center sm:text-left">
              <p className="text-lg">RM: 558438</p>
              <p className="text-lg">Aluno: Enzo Dias Alfaia Mendes</p>
              <p className="text-lg">
                <Link href="https://github.com/enzodam" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">
                  https://github.com/enzodam
                </Link>
              </p>
            </div>
            <Image className="w-1/5 sm:w-24 ml-4" src={Logo} alt="Logo" />
          </div>
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

export default Integrantes;
