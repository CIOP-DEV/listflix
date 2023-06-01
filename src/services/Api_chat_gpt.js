//import axios from 'axios';
const axios = require('axios');


async function fazerRequisicao() {
  try {
    const response = await axios.get('http://localhost:8000/filmes');
    console.log('Dados da resposta:', response.data);
    // Processar os dados da resposta
  } catch (error) {
    if (error.response) {
      // O servidor retornou um código de status diferente de 2xx
      console.error('Erro de resposta do servidor:', error.response.data);
      console.error('Status do erro:', error.response.status);
    } else if (error.request) {
      // A requisição foi feita, mas não houve resposta do servidor
      console.error('Não houve resposta do servidor:', error.request);
    } else {
      // Ocorreu um erro durante a requisição
      console.error('Erro ao fazer a requisição:', error.message);
    }
  }
}

fazerRequisicao();