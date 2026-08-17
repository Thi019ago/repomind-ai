# RepoMind AI

Plataforma fullstack com inteligência artificial para análise de repositórios de código.

## Visão Geral

O projeto é um monorepo com duas aplicações:

- **`apps/api`** — Back-end em [NestJS](https://nestjs.com/) v11 (Node.js)
- **`apps/web`** — Front-end em [Next.js](https://nextjs.org/) v16 com React 19 e Tailwind CSS v4

---

## Pré-requisitos

Antes de tudo, certifique-se de ter as seguintes ferramentas instaladas:

| Ferramenta | Versão recomendada | Link |
|---|---|---|
| Node.js | **22.x** (LTS) | https://nodejs.org |
| pnpm | **11.21.0** | https://pnpm.io |

### Instalando o pnpm

Caso não tenha o pnpm instalado:

```bash
npm install -g pnpm@11.21.0
```

Ou via Corepack (já incluso no Node.js 22):

```bash
corepack enable
corepack prepare pnpm@11.21.0 --activate
```

---

## Instalação

Na raiz do projeto, instale todas as dependências de todos os apps de uma vez:

```bash
pnpm install
```

Isso instala as dependências de `apps/api` e `apps/web` automaticamente, pois o projeto usa pnpm workspaces.

---

## Rodando em desenvolvimento

### Opção 1 — Rodar cada app separadamente (recomendado)

**API (back-end)** — roda na porta `3000`:

```bash
cd apps/api
pnpm start:dev
```

**Web (front-end)** — roda na porta `3001` (ou a próxima disponível):

```bash
cd apps/web
pnpm dev
```

### Opção 2 — Rodar da raiz do monorepo

```bash
# Apenas a API
pnpm --filter api start:dev

# Apenas o front-end
pnpm --filter web dev
```

---

## URLs padrão

| App | URL |
|---|---|
| API | http://localhost:3000 |
| Web | http://localhost:3001 |

> A API usa a porta definida na variável de ambiente `PORT`. Se não configurada, usa `3000` por padrão.

---

## Variáveis de Ambiente

Crie um arquivo `.env` dentro de `apps/api` quando necessário:

```env
PORT=3000
```

---

## Build para produção

**API:**

```bash
cd apps/api
pnpm build
pnpm start:prod
```

**Web:**

```bash
cd apps/web
pnpm build
pnpm start
```

---

## Testes

### API

```bash
cd apps/api

# Testes unitários
pnpm test

# Testes com cobertura
pnpm test:cov

# Testes e2e
pnpm test:e2e
```

---

## Lint e formatação

```bash
# Na raiz ou dentro de cada app
pnpm lint
pnpm format
```

---

## Estrutura do projeto

```
repomind-ai/
├── apps/
│   ├── api/          # Back-end NestJS
│   │   ├── src/
│   │   │   ├── app.module.ts
│   │   │   ├── app.controller.ts
│   │   │   ├── app.service.ts
│   │   │   └── main.ts
│   │   └── test/
│   └── web/          # Front-end Next.js
│       └── src/
│           └── app/
│               ├── layout.tsx
│               ├── page.tsx
│               └── globals.css
├── package.json      # Raiz do monorepo
├── pnpm-workspace.yaml
└── pnpm-lock.yaml
```

---

## Stack Tecnológica

| Camada | Tecnologia | Versão |
|---|---|---|
| Gerenciador de pacotes | pnpm | 11.21.0 |
| Linguagem | TypeScript | ^5.7 |
| Back-end framework | NestJS | ^11.0 |
| Front-end framework | Next.js | 16.3.0 |
| UI library | React | 19.2.8 |
| Estilização | Tailwind CSS | ^4 |
| Runtime | Node.js | 22.x |
