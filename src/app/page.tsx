import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="flex items-center justify-between border-b px-6 py-4">
        <span className="text-sm font-medium tracking-tight">Demo</span>
        <div className="flex gap-2">
          <Link href="/login" className={buttonVariants({ variant: "ghost" })}>
            Entrar
          </Link>
          <Link href="/register" className={buttonVariants()}>
            Criar conta
          </Link>
        </div>
      </header>
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center gap-10 px-6 py-16">
        <div className="max-w-2xl">
          <p className="text-sm text-muted-foreground">Hackathon</p>
          <h1 className="mt-2 text-4xl font-medium tracking-tight">Front pronto para ir crescendo.</h1>
          <p className="mt-4 text-base text-muted-foreground">
            Next.js, Tailwind e shadcn/ui, já ligados na API de usuários. Login, painel e CRUD estão
            no ar. O restante das telas entra em rotas novas, reusando os componentes de{" "}
            <code className="text-foreground">src/components/ui</code>.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Autenticação</CardTitle>
              <CardDescription>JWT guardado no navegador e sessão em /api/auth/me.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">admin@demo.com / admin123</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Usuários</CardTitle>
              <CardDescription>Lista, busca, edição e remoção com as regras da API.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">Admin altera papel. Usuário comum só a própria conta.</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Componentes</CardTitle>
              <CardDescription>Biblioteca copiada no projeto, pronta para personalizar.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              npx shadcn@latest add nome-do-componente
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
