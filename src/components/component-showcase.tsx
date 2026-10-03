"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

export function ComponentShowcase() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-xl font-medium tracking-tight">Componentes</h1>
        <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
          A interface usa shadcn/ui. Os arquivos ficam em <code>src/components/ui</code> e você pode
          alterar cada um. Para trazer outro componente:
        </p>
        <pre className="mt-3 w-fit rounded-lg bg-muted px-3 py-2 text-sm">
          npx shadcn@latest add accordion
        </pre>
      </div>

      <Tabs defaultValue="acoes">
        <TabsList>
          <TabsTrigger value="acoes">Ações</TabsTrigger>
          <TabsTrigger value="formulario">Formulário</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
        </TabsList>
        <TabsContent value="acoes" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Botões e selos</CardTitle>
              <CardDescription>Variantes prontas para ações de tela.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-2">
                <Button>Primário</Button>
                <Button variant="secondary">Secundário</Button>
                <Button variant="outline">Contorno</Button>
                <Button variant="ghost">Fantasma</Button>
                <Button variant="destructive">Destrutivo</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge>Padrão</Badge>
                <Badge variant="secondary">Secundário</Badge>
                <Badge variant="outline">Contorno</Badge>
                <Badge variant="destructive">Alerta</Badge>
              </div>
              <Dialog>
                <DialogTrigger render={<Button variant="outline" />}>Abrir diálogo</DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Diálogo de exemplo</DialogTitle>
                    <DialogDescription>
                      Use este padrão para confirmar uma ação ou abrir um formulário curto.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="formulario" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Campos</CardTitle>
              <CardDescription>Input, área de texto e rótulo.</CardDescription>
            </CardHeader>
            <CardContent className="flex max-w-md flex-col gap-3">
              <div className="flex flex-col gap-2">
                <Label htmlFor="demo-input">Nome</Label>
                <Input id="demo-input" placeholder="Como vai aparecer na tela" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="demo-area">Descrição</Label>
                <Textarea id="demo-area" placeholder="Texto mais longo" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="feedback" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Cartão</CardTitle>
              <CardDescription>
                Cards, tabela, abas, avatar, menu e toast já estão instalados. O toast aparece nas
                ações de usuários.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Instalados: button, input, textarea, label, card, badge, dialog, dropdown-menu,
              select, table, tabs, avatar, separator, skeleton e sonner.
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
