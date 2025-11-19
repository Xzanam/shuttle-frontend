"use client";

import { useState } from "react";
import { loginRequest } from "@/services/authService";
import { useRouter } from "next/navigation";

export function useAuth() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function login(email: string, password: string) {
    try {
      setLoading(true);
      setError(null);

      const data = await loginRequest(email, password);

      // Store token (localStorage for simplicity)
      localStorage.setItem("token", data.token);

      router.push("/map");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return {
    login,
    loading,
    error,
  };
}
