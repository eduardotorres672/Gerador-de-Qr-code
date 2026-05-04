# 🔲 Sabado Gerador de Qr Virtual

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Tailwind](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Firebase](https://img.shields.io/badge/Firebase-Auth%20%7C%20Firestore%20%7C%20Storage-FFCA28?style=for-the-badge&logo=firebase)

Uma solução **Full-Stack** premium e minimalista para geração e gerenciamento de QR Codes personalizados. Projetado com foco em **minimalismo funcional**, experiência do usuário fluida e acessibilidade avançada.

---

## 🚀 O que ele faz?

O **Sabado Gerador de Qr Virtual** transforma a simples criação de códigos QR em uma experiência de design. Ele permite que usuários criem códigos visualmente atraentes com gradientes, logotipos personalizados e formas únicas, enquanto oferece um robusto sistema de gerenciamento na nuvem para profissionais e entusiastas.

### ✨ Funcionalidades Principais

#### 🎨 Customização de Elite
*   **Estilização Granular**: Controle total sobre formatos de pontos, cantos e molduras.
*   **Gradientes Dinâmicos**: Aplicação de cores lineares para um visual moderno e premium.
*   **Logos Personalizados**: Upload direto para o Cloud Storage para centralizar marcas nos QR Codes.

#### ☁️ Ecossistema Cloud (Firebase)
*   **Admin Dashboard**: Área restrita para gerenciamento de criações.
*   **Histórico Persistente**: Salve seus designs favoritos no Cloud Firestore.
*   **Recuperação Instantânea**: Carregue estilos salvos do histórico com um clique.

#### 🎙️ Experiência Inteligente
*   **Controle por Voz**: Comandos em linguagem natural (PT-BR) para ajustar cores e exportar arquivos.
*   **Modo Monocromático**: Interface adaptável para usuários com fotofobia ou condições visuais.
*   **Interactive Highlighting**: Sistema de destaque para navegação assistida e acessibilidade.

#### 📤 Exportação Profissional
*   Exportação em alta definição nos formatos **PNG**, **JPEG** e **SVG** (vetorial).

---

## 🛠️ Tecnologias & Bibliotecas

### Core Stack
- **React 19**: Biblioteca UI para componentes reativos.
- **Vite**: Build tool ultra-rápida para desenvolvimento moderno.
- **Tailwind CSS 4**: Estilização baseada em utilitários de última geração.
- **TypeScript**: Tipagem estática para maior segurança e robustez.

### Principais Bibliotecas
- **qr-code-styling**: O motor por trás da geração de QRs artísticos.
- **Motion (Framer Motion)**: Animações de interface fluidas e efeitos 3D.
- **Lucide React**: Conjunto de ícones minimalistas e consistentes.
- **Firebase SDK**: Gerenciamento de Autenticação, Banco de Dados e Storage.

---

## 📂 Organização do Projeto

A estrutura segue padrões de escalabilidade e separação de preocupações:

```text
├── src/
│   ├── components/
│   │   ├── layout/        # Estrutura base, Header e Acessibilidade
│   │   └── qrcode/        # Gerador, Painéis e Histórico
│   ├── lib/
│   │   └── firebase.ts    # Configuração e Serviços da Nuvem
│   ├── App.tsx            # Componente raiz e Estado Global
│   ├── index.css          # Temas Premium e Variáveis Tailwind 4
│   └── main.tsx           # Entry point
├── firebase-blueprint.json # Definição da arquitetura de dados
├── firestore.rules        # Segurança e permissões de banco
└── metadata.json          # Metadados da aplicação
```

---

## ⚙️ Como Usar o Repositório

### Pré-requisitos
- Node.js (versão estável mais recente)
- NPM ou Yarn

### Instalação

1. Clone o repositório:
```bash
git clone [url-do-repositorio]
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
Crie um arquivo `.env` baseado no `.env.example` com suas chaves de API.

### Desenvolvimento

Para iniciar o servidor de desenvolvimento:
```bash
npm run dev
```
A aplicação estará disponível em `http://localhost:3000`.

### Build

Para gerar a versão de produção:
```bash
npm run build
```

---

## 👤 Autor

**Eduardo**  
📫 Contato: [eduardocosi1810@gmail.com](mailto:eduardocosi1810@gmail.com)

---

## 📄 Licença

Este projeto está sob a licença [MIT](https://opensource.org/licenses/MIT).

---
