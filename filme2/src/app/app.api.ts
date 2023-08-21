// O arquivo app.api.ts exporta uma constante chamada API, que é uma string contendo a URL base da API da aplicação.

export const API = 'http://localhost:3000';

// Essa URL base é usada para criar URLs completas ao fazer solicitações HTTP para a API. Ter uma URL base centralizada facilita a manutenção,
// pois, se a URL da API mudar, você só precisará atualizá-la aqui, em vez de procurar e atualizar manualmente em vários lugares do código.