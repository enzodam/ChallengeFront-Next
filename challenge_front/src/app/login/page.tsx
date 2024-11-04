// pages/login.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import logo from '../../../public/assets/Logo.png';
import usuario from '../../../public/assets/usuario.png';
import senha from '../../../public/assets/senha.png';
import mecanico from '../../../public/assets/mecanico2.jpg';

const Login: React.FC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessages, setErrorMessages] = useState('');

  const router = useRouter();

  const checkInputs = () => {
    return !(login && password);
  };

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();

    if (checkInputs()) {
      setErrorMessages('Por favor, preencha todos os campos.');
    } else {
      setErrorMessages('');
      router.push('/menu'); // Redireciona para a página do menu após login
    }
  };

  const handleBack = () => {
    router.push('/'); // Redireciona para a página inicial (home)
  };

  return (
    <div className="flex flex-col min-h-screen justify-between bg-cover bg-no-repeat" style={{ backgroundImage: `url(${mecanico.src})` }}>
      <div className="flex justify-center items-center grow">
        <form className="bg-black bg-opacity-50 p-8 rounded-lg flex flex-col items-center space-y-4" onSubmit={handleLogin}>
          <img src={logo.src} alt="SOS Mecânico" className="w-24 mb-4" />
          <div className="flex items-center bg-white rounded-md p-2 w-full">
            <img src={usuario.src} alt="Ícone de Usuário" className="w-6 h-6" />
            <input
              type="text"
              placeholder="Login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              className="ml-2 p-2 w-full outline-none"
            />
          </div>
          <div className="flex items-center bg-white rounded-md p-2 w-full">
            <img src={senha.src} alt="Ícone de Senha" className="w-6 h-6" />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="ml-2 p-2 w-full outline-none"
            />
          </div>
          <button type="submit" className="bg-white text-black w-full py-2 rounded-md">
            Entrar
          </button>
          <Link href="/forgot-password" className="text-white text-sm">Esqueceu sua senha?</Link>
          <Link href="/cadastro" className="text-white text-sm">
            Ainda não é cadastrado? <span className="underline">Cadastrar-se</span>
          </Link>
          {errorMessages && <p className="text-red-500">{errorMessages}</p>}
          <button
            type="button"
            onClick={handleBack}
            className="bg-white text-black w-full py-2 rounded-md"
          >
            Voltar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
