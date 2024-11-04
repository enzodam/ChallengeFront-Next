'use client';

import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Header2 from '../../components/Header2';
import Footer from '../../components/Footer';

function useForm() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    fullname: '',
    idade: '',
    telefone: '',
    email: '',
    carro: '',
    placa: '',
    login: '',
    password: '',
    confirmPassword: '',
  });
  const [errorMessages, setErrorMessages] = useState('');
  const router = useRouter(); // Adiciona o router aqui para redirecionamento

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const isEmpty = Object.values(data).some((field) => !field);
    if (isEmpty) {
      setErrorMessages('Por favor, preencha todos os campos.');
      setLoading(false);
      return;
    }

    // Limpa a mensagem de erro e exibe o alerta de sucesso
    setErrorMessages('');
    alert('Cadastro realizado com sucesso!');
    setLoading(false);
    router.push('/login');  // Redireciona para a página de login após o alerta
  }, [data, router]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  }, []);

  return {
    data,
    loading,
    errorMessages,
    handleChange,
    handleSubmit,
  };
}

const Cadastro: React.FC = () => {
  const { data, loading, errorMessages, handleChange, handleSubmit } = useForm();
  const router = useRouter(); // Adiciona o router aqui também para o botão "Voltar"

  return (
    <div>
      <Header2 />
      <main className="flex items-center justify-center min-h-screen bg-gray-200">
        <form onSubmit={handleSubmit} className="bg-gray-300 p-8 rounded-lg shadow-md w-full max-w-md space-y-4">
          {/* Campos do formulário */}
          <label>Nome Completo:</label>
          <input type="text" name="fullname" value={data.fullname} onChange={handleChange} className="w-full p-2 border rounded-md" />
          <label>Idade:</label>
          <input type="number" name="idade" value={data.idade} onChange={handleChange} className="w-full p-2 border rounded-md" />
          <label>Telefone:</label>
          <input type="tel" name="telefone" value={data.telefone} onChange={handleChange} className="w-full p-2 border rounded-md" />
          <label>E-mail:</label>
          <input type="email" name="email" value={data.email} onChange={handleChange} className="w-full p-2 border rounded-md" />
          <label>Carro:</label>
          <input type="text" name="carro" value={data.carro} onChange={handleChange} className="w-full p-2 border rounded-md" />
          <label>Placa:</label>
          <input type="text" name="placa" value={data.placa} onChange={handleChange} className="w-full p-2 border rounded-md" />
          <label>Login:</label>
          <input type="text" name="login" value={data.login} onChange={handleChange} className="w-full p-2 border rounded-md" />
          <label>Senha:</label>
          <input type="password" name="password" value={data.password} onChange={handleChange} className="w-full p-2 border rounded-md" />
          <label>Repetir Senha:</label>
          <input type="password" name="confirmPassword" value={data.confirmPassword} onChange={handleChange} className="w-full p-2 border rounded-md" />

          {errorMessages && <p className="text-red-500">{errorMessages}</p>}

          <button type="submit" className="bg-indigo-950 text-white w-full py-2 rounded-md" disabled={loading}>
            {loading ? 'Carregando...' : 'Cadastrar'}
          </button>
          <button
            type="button"
            onClick={() => router.push('/')}
            className="bg-indigo-950 text-white w-full py-2 rounded-md mt-2"
          >
            Voltar
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Cadastro;
