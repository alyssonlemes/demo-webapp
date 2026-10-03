import { RegisterForm } from "@/components/auth-forms";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="flex flex-1 items-center justify-center px-4 py-12">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <Link href="/" className="text-sm text-muted-foreground">
            Demo
          </Link>
          <CardTitle>Criar conta</CardTitle>
          <CardDescription>O cadastro já devolve o token e entra no painel.</CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
      </Card>
    </div>
  );
}
