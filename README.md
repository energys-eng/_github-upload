# Energys Landing Page

Landing page institucional de conversão para a Energys, construída com Next.js, TypeScript e Tailwind CSS.

## Rodar localmente

```bash
pnpm install
pnpm dev
```

Depois acesse:

```txt
http://localhost:3000
```

## Build de produção

```bash
pnpm build
```

## Variáveis de ambiente

Copie `.env.example` para `.env.local` se quiser configurar integrações locais.

```txt
WEBHOOK_URL=
```

Sem `WEBHOOK_URL`, o projeto não envia leads para serviços externos.
