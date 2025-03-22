# Aplicativo Split

O PaySplit é uma solução inovadora criada para facilitar a divisão de contas em restaurantes e bares. Compatível com vários dispositivos, a aplicação simplifica a gestão e o compartilhamento de pagamentos, garantindo uma experiência eficiente e livre de erros para clientes e estabelecimentos.

Classificado na categoria de Finanças, o PaySplit automatiza processos, elimina erros comuns no fechamento das contas e assegura a divisão justa das despesas, além de proporcionar praticidade nos pagamentos.

Slogan: "Pagamentos Simplificados, Contas Divididas, Experiência Perfeita."

## Autores

- [João Henrique](https://github.com/joao4xz)
- [Marcelle Andrade](https://github.com/Marcelleap)
- [Pedro Balsamão](https://github.com/pedrobalsa)
- [Vinicius Corrêa de Assis](https://github.com/viniciuscoassis)

## Informações referênciais 

- Disciplina: Trabalho Acadêmico II
- Curso: Ciência da Computação - Campus Poços de Caldas - PPC - Noite - 2024/2
- Instituição: Pontifícia Universidade Católica de Minas Gerais - PUC Minas
- Professor: Luiz Alberto Ferreira Gomes
- Código da Disciplina: 5327.1.01
- Formato: Graduação Presencial Síncrona - 2024/2


### Sumário Documentação 

- [Aplicativo Split](#aplicativo-split)
  - [Autores](#autores)
  - [Informações referênciais](#informações-referênciais)
    - [Sumário Documentação](#sumário-documentação)
      - [1. Produto](#1-produto)
        - [1.1 Visão Geral do Produto](#11-visão-geral-do-produto)
        - [1.2 Canva](#12-canva)
      - [2. Fluxos](#2-fluxos)
        - [2.1 Fluxos Definidos](#21-fluxos-definidos)
      - [3. Tecnologias](#3-tecnologias)
        - [3.1 Tecnologias Frontend](#31-tecnologias-frontend)
        - [3.2 Tecnologias Backend](#32-tecnologias-backend)
      - [4. Arquitetura](#4-arquitetura)
        - [4.1 Arquitetura Definida](#41-arquitetura-definida)
      - [5. Design](#5-design)
        - [5.1 Logo](#51-logo)
        - [5.2 Componentes UI](#52-componentes-ui)
      - [6. Levantamento](#6-levantamento)
        - [6.1 Requisitos](#61-requisitos)
        - [6.2 Descritivo Funcional](#62-descritivo-funcional)
      - [7. Fotos](#7-fotos)
        - [7.1 Diretotio de fotos](#71-diretotio-de-fotos)
      - [8. Objetivos:](#objetivos)
      - [9. Funcionalidades](#funcionalidades)
      - [10. Tecnologias Utilizadas](#tecnologias-utilizadas)
        - [10.1 Frontend](#frontend)
        - [10.2 Backend](#backend)
        - [10.3 Outros](#outros)
      - [11. Instalação](#instalação)
        - [11.1 Pré-requisitos](#pré-requisitos)
        - [11.2 Passos](#passos)


## Objetivos:

- Simplificar o processo de dividir uma conta entre várias pessoas.
- Proporcionar uma interface fluida e amigável para usuários em diferentes plataformas.
- Garantir uma experiência de uso em tempo real, com comunicação rápida e confiável.

## Funcionalidades

- **Criar Sessão**: O anfitrião pode criar uma sessão, capturar a imagem da comanda, adicionar itens, e convidar amigos.
- **Entrar em Sessão**: Os convidados podem participar de uma sessão inserindo o código fornecido pelo anfitrião.
- **Divisão Fracionada**: Cada participante pode selecionar os itens que consumiu e a conta será dividida proporcionalmente.
- **Extras**: Gorjetas e couvert artístico podem ser adicionados à divisão.
- **Comunicação em Tempo Real**: O sistema utiliza WebSocket para garantir a sincronização de dados em tempo real entre os usuários.
- **Compartilhamento**: O anfitrião pode compartilhar o código da sessão através de apps de mensagem (ex.: WhatsApp).
- **Edição da Comanda**: O anfitrião pode editar itens capturados antes de finalizar a sessão.

## Tecnologias Utilizadas

### Frontend

- **[Vue.js](https://vuejs.org/)** - Framework JavaScript para construção de interfaces de usuário.
- **[TypeScript](https://www.typescriptlang.org/)** - Superset de JavaScript que adiciona tipagem estática.
- **[Vite](https://vitejs.dev/)** - Ferramenta de build rápida para projetos Vue.js.
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário.
- **[Vue Router](https://router.vuejs.org/)** - Biblioteca de navegação para Vue.js.
- **[Prettier](https://prettier.io/)** - Ferramenta de formatação de código.
- **[ESLint](https://eslint.org/)** - Linter para JavaScript e TypeScript.

### Backend

- **[Node.js](https://nodejs.org/)** - Plataforma para construção de APIs e servidores.
- **[NestJS](https://nestjs.com/)** - Framework Node.js focado em escalabilidade e facilidade de manutenção.
- **[MongoDB](https://www.mongodb.com/)** - Banco de dados NoSQL.
- **[AWS](https://aws.amazon.com/)** - Plataforma de nuvem para hospedagem e processamento de imagens (S3, Lambda, Rekognition, EC2).

### Outros

- **[Docker](https://www.docker.com/)** - Ferramenta de containerização.
- **[Socket.IO](https://socket.io/)** - Biblioteca para WebSocket e comunicação em tempo real.
- **[GitHub Actions](https://github.com/features/actions)** - Ferramenta de CI/CD para automação de builds e deploys.

## Instalação

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- **[Node.js](https://nodejs.org/)** (versão 14 ou superior)
- **[Docker](https://www.docker.com/)** (opcional, para executar a aplicação em containers)
- **[MongoDB](https://www.mongodb.com/)** (local ou via serviço como MongoDB Atlas)

### Passos

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/play-split.git
cd play-split


