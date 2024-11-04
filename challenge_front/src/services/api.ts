// services/api.ts

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// Função para buscar dados (GET)
export async function getDados(endpoint: string) {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Erro ao buscar dados: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    throw error;
  }
}

// Função para enviar dados (POST)
export async function enviarDados(endpoint: string, dados: any) {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dados),
    });

    if (!response.ok) {
      throw new Error(`Erro ao enviar dados: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Erro ao enviar dados:", error);
    throw error;
  }
}

// Função para atualizar dados (PUT)
export async function atualizarDados(endpoint: string, dados: any) {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dados),
    });

    if (!response.ok) {
      throw new Error(`Erro ao atualizar dados: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Erro ao atualizar dados:", error);
    throw error;
  }
}

// Função para deletar dados (DELETE)
export async function deletarDados(endpoint: string) {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Erro ao deletar dados: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Erro ao deletar dados:", error);
    throw error;
  }
}
