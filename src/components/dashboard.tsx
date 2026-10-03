"use client";

import { useAuth } from "@/components/auth-provider";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { API_URL } from "@/lib/api";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Dashboard() {
  const { user } = useAuth();
  const [apiStatus, setApiStatus] = useState<"checking" | "online" | "offline">("checking");

  useEffect(() => {
    fetch(`${API_URL}/health`)
      .then((response) => setApiStatus(response.ok ? "online" : "offline"))
      .catch(() => setApiStatus("offline"));
  }, []);

  if (!user) {
    return <Skeleton className="h-28 w-full" />;
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-xl font-medium tracking-tight">Olá, {user.name.split(" ")[0]}</h1>
        <p className="text-sm text-muted-foreground">
          Este painel já fala com a API. As próximas telas do hackathon entram como rotas novas.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Sessão</CardTitle>
            <CardDescription>{user.email}</CardDescription>
          </CardHeader>
          <CardContent>
            <Badge variant={user.role === "ADMIN" ? "default" : "secondary"}>
              {user.role === "ADMIN" ? "Admin" : "Usuário"}
            </Badge>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>API</CardTitle>
            <CardDescription>{API_URL}</CardDescription>
          </CardHeader>
          <CardContent>
            <Badge variant={apiStatus === "online" ? "secondary" : "destructive"}>
              {apiStatus === "checking" ? "Verificando" : apiStatus === "online" ? "No ar" : "Fora do ar"}
            </Badge>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Próximo passo</CardTitle>
            <CardDescription>Usuários já têm listagem, edição e remoção.</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/usuarios" className="text-sm underline underline-offset-4">
              Abrir usuários
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
