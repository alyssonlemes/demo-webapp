import { ApiFailure } from "@/lib/types";

export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3333";
export const TOKEN_KEY = "demo.token";

export class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

export async function api<T>(path: string, init: RequestInit = {}): Promise<T> {
  const headers = new Headers(init.headers);

  if (init.body && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  if (typeof window !== "undefined") {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
  }

  let response: Response;

  try {
    response = await fetch(`${API_URL}${path}`, { ...init, headers });
  } catch {
    throw new ApiError("Não foi possível conectar na API", 0);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  const payload = (await response.json()) as T & Partial<ApiFailure>;

  if (!response.ok) {
    throw new ApiError(payload.message || "Erro na API", response.status);
  }

  return payload;
}
