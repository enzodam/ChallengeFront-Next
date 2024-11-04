SOS Mecânico

Projeto desenvolvido para facilitar a assistência mecânica para motoristas. O sistema oferece funcionalidades como Atendimento Online com Chatbot, Lista de Mecânicos na Área, Chamada de Guincho e Cadastro de Mecânicos, integrando Google Maps e IA.

Índice

1.Descrição do Projeto

2.Funcionalidades

3.Instalação

4.Tecnologias Utilizadas

5.Contribuidores

6.Link do Vídeo Demonstrativo

1. Descrição do Projeto

O SOS Mecânico é uma plataforma que visa conectar motoristas a serviços de assistência mecânica de maneira rápida e eficiente. Com uma interface fácil de usar e várias funcionalidades, a plataforma oferece desde chamadas de guincho até um chatbot inteligente para auxílio rápido.

2. Funcionalidades:

Atendimento Online com Chatbot.
Listagem de mecânicos disponíveis na área do usuário.
Chamada de Reboque.
Cadastro de novos mecânicos.

3. Instalação
Siga os passos abaixo para rodar o projeto localmente:

3.1. Pré-requisitos

Node.js e npm instalados.

Java para rodar o backend.

Vercel CLI para o deploy, caso queira publicar o projeto.

Banco de dados configurado para o backend.

3.2. Passos

Clone o repositório:

git clone https://github.com/enzodam/ChallengeFront-Next
Acesse o diretório do projeto:


Crie um arquivo .env.local na raiz do projeto e adicione a variável NEXT_PUBLIC_API_URL com o endpoint do backend:

NEXT_PUBLIC_API_URL=https://seu-backend-url.com/api
Instale as dependências:
npm install

Inicie o servidor local:
npm run dev

Para rodar o backend em Java, siga as instruções fornecidas na disciplina de Domain-Driven Design Using Java. Certifique-se de que o backend esteja funcionando e acessível através do URL definido em NEXT_PUBLIC_API_URL.

4. Tecnologias Utilizadas

Next.js: para a construção da interface de usuário e roteamento de páginas.
React: biblioteca de componentes de interface.
TypeScript: para tipagem e melhor organização do código.
Tailwind CSS: para estilização e responsividade.
Google Maps API: para localização de mecânicos e guinchos.
Chatbot com IA: para suporte no atendimento online.
Vercel: para deploy do frontend.

5. Contribuidores
Enzo Dias Alfaia Mendes - RM: 558438
Vinicius Prates Altafini - RM: 559183
Enzo Prado Soddano - RM: 557937

6. Link do Vídeo Demonstrativo
Veja o vídeo de demonstração do projeto no YouTube: [SOS Mecânico - Demonstração](https://www.youtube.com/watch?v=8_scNzU_TsI&t=6s)
