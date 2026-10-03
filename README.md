# Demo Webapp

Front em Next.js, Tailwind CSS e [shadcn/ui](https://ui.shadcn.com). A biblioteca fica em `src/components/ui` para você alterar e ir acrescentando telas.

## Subir

A API precisa estar no ar em `http://localhost:3333`.

```bash
cd demo-webapp
npm install
npm run dev
```

Abre em `http://localhost:3000`.

| E-mail | Senha |
| --- | --- |
| admin@demo.com | admin123 |
| user@demo.com | user123 |

## Onde implementar

| Caminho | Uso |
| --- | --- |
| `src/app` | Rotas. O grupo `(panel)` já exige login. |
| `src/components` | Telas e blocos da aplicação. |
| `src/components/ui` | Componentes do shadcn. |
| `src/lib/api.ts` | Cliente HTTP da API. |

Novo componente visual:

```bash
npx shadcn@latest add accordion
```

Nova área autenticada: crie `src/app/(panel)/nome/page.tsx` e um link em `src/components/app-shell.tsx`.
