"use client";

import { api, TOKEN_KEY } from "@/lib/api";
import { ApiSuccess, AuthSession, User } from "@/lib/types";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

type AuthContextValue = {
  user: User | null;
  ready: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  refreshUser: (user: User) => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

async function persistSession(session: AuthSession) {
  localStorage.setItem(TOKEN_KEY, session.token);
  return session.user;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);

    if (!token) {
      setReady(true);
      return;
    }

    api<ApiSuccess<User>>("/api/auth/me")
      .then((response) => setUser(response.data))
      .catch(() => localStorage.removeItem(TOKEN_KEY))
      .finally(() => setReady(true));
  }, []);

  async function login(email: string, password: string) {
    const response = await api<ApiSuccess<AuthSession>>("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    setUser(await persistSession(response.data));
    router.push("/painel");
  }

  async function register(name: string, email: string, password: string) {
    const response = await api<ApiSuccess<AuthSession>>("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
    });
    setUser(await persistSession(response.data));
    router.push("/painel");
  }

  function logout() {
    localStorage.removeItem(TOKEN_KEY);
    setUser(null);
    router.push("/login");
  }

  return (
    <AuthContext.Provider value={{ user, ready, login, register, logout, refreshUser: setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth precisa estar dentro de AuthProvider");
  }

  return context;
}
