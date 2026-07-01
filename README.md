# Gerador de QR Code

Aplicação full-stack para geração e gerenciamento de QR Codes personalizados, com foco em customização visual, acessibilidade e persistência de dados na nuvem.

---

## Funcionalidades

- Geração de QR Codes com gradientes, formatos de pontos e cantos customizáveis
- Upload de logo diretamente no QR Code via Firebase Cloud Storage
- Login e autenticação de usuários com Firebase Auth
- Histórico de designs salvo no Firestore, carregável com um clique
- Dashboard administrativo com acesso restrito via Firestore Rules
- Controle por voz em PT-BR para ajustar cores e exportar arquivos
- Modo monocromático para usuários com fotofobia ou condições visuais
- Exportação em PNG, JPEG e SVG

---

## Stack

- React 19
- TypeScript
- Tailwind CSS 4
- Vite
- Framer Motion
- Firebase (Auth, Firestore, Cloud Storage, Rules)
- qr-code-styling
- Lucide React

---

## Estrutura

```
├── src/
│   ├── components/
│   │   ├── layout/        # Estrutura base, Header e Acessibilidade
│   │   └── qrcode/        # Gerador, Painéis e Histórico
│   ├── lib/
│   │   └── firebase.ts    # Configuração e serviços Firebase
│   ├── App.tsx            # Componente raiz e estado global
│   ├── index.css          # Temas e variáveis Tailwind 4
│   └── main.tsx           # Entry point
├── firebase-blueprint.json # Arquitetura de dados
├── firestore.rules         # Regras de segurança e permissões
└── .env.example            # Variáveis de ambiente necessárias
```

---

## Como rodar localmente

**Pré-requisitos:** Node.js (versão estável) e npm ou yarn.

```bash
# 1. Clone o repositório
git clone https://github.com/eduardotorres672/Gerador-de-Qr-code.git

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env.example .env
# Preencha o .env com suas chaves do Firebase

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

```bash
# Build de produção
npm run build
```

---

## Autor

Eduardo Cosi
- GitHub: [eduardotorres672](https://github.com/eduardotorres672)
- LinkedIn: [eduardocosi](https://linkedin.com/in/eduardocosi)
- Email: eduardocosi1810@gmail.com

---

## Licença

MIT
