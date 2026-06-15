# SaaS Core Platform

<p align="center">
  Plataforma SaaS multi-tenant construída com Node.js, NestJS, Next.js, DDD, Clean Architecture e IA para acelerar a criação de produtos digitais.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/node.js-22+-green" />
  <img src="https://img.shields.io/badge/typescript-5.x-blue" />
  <img src="https://img.shields.io/badge/nestjs-backend-red" />
  <img src="https://img.shields.io/badge/next.js-frontend-black" />
  <img src="https://img.shields.io/badge/license-MIT-yellow" />
</p>

---

## Descrição

O SaaS Core Platform é uma fundação reutilizável para criação de produtos SaaS.

Ao invés de recriar autenticação, billing, notificações, analytics, growth, conteúdo e integrações toda vez que surge uma nova ideia, a plataforma centraliza esses recursos em módulos reutilizáveis.

O objetivo é reduzir drasticamente o tempo necessário para lançar novos produtos digitais.

---

## Principais Características

- Multi-Tenant
- Domain-Driven Design (DDD)
- Clean Architecture
- Arquitetura Hexagonal
- Event-Driven Architecture
- Integração com IA
- Billing e Assinaturas
- Analytics
- Growth Engine
- Content Engine
- Finance Engine
- Observabilidade
- Automações

---

## Arquitetura

A plataforma é organizada em domínios independentes.

```text
apps/
├── api
├── web
├── admin
└── worker

packages/
├── modules
├── shared
├── config
└── database
```

### Aplicações

| Aplicação | Responsabilidade |
|------------|------------|
| api | Backend principal |
| web | Frontend dos produtos |
| admin | Painel administrativo |
| worker | Processamento assíncrono |

### Módulos

- Identity
- Tenancy
- Billing
- Notifications
- Analytics
- AI
- Growth
- Content
- Finance

---

## Tecnologias

### Backend

- Node.js
- TypeScript
- NestJS
- Prisma
- PostgreSQL
- Redis
- BullMQ

### Frontend

- Next.js
- React
- TailwindCSS

### Infraestrutura

- Docker
- GitHub Actions
- Sentry
- Pino

### Inteligência Artificial

- OpenAI

---

## Instalação

### Pré-requisitos

- Node.js 22+
- pnpm
- Docker

### Instalar dependências

```bash
pnpm install
```

### Configurar ambiente

```bash
cp .env.example .env
```

### Subir serviços locais

```bash
docker compose up -d
```

### Executar projeto

```bash
pnpm dev
```

---

## Scripts

### Desenvolvimento

```bash
pnpm dev
```

### Build

```bash
pnpm build
```

### Testes

```bash
pnpm test
```

### Lint

```bash
pnpm lint
```

### Formatação

```bash
pnpm format
```

---

## Estrutura de Desenvolvimento

O projeto segue:

- Conventional Commits
- GitHub Flow
- DDD
- Clean Architecture
- SOLID
- Testes Automatizados

Exemplos de branches:

```text
feat/*
fix/*
chore/*
docs/*
test/*
```

---

## Documentação

Documentação detalhada disponível em:

```text
docs/
├── architecture/
├── decisions/
├── roadmap/
├── runbooks/
└── milestones/
```

---

## Roadmap

Principais áreas da plataforma:

- Foundation
- Identity & Authentication
- Billing
- Notifications
- AI
- Analytics
- Growth
- Content
- Finance
- Deployment

---

## Licença

MIT

---

## Autor

Rafael Martinez

Construindo uma plataforma SaaS reutilizável para acelerar a criação de produtos digitais.
