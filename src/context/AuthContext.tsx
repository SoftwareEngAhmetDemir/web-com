/**
 * AuthContext now acts as a thin bridge over the Zustand authStore.
 * All components that already call useAuth() continue to work unchanged.
 */
import React, { createContext, useContext } from "react";
import { useAuthStore } from "../store/authStore";
import type { UserProfile } from "../services/api";

// Keep the public shape compatible with existing consumers
export type User = UserProfile;

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (data: User) => void; // kept for local override (e.g. optimistic update)
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { user, isLoading, setUser, logout } = useAuthStore();

  // login here is only a local setter — real API login lives in authStore.login()
  const login = (data: User) => setUser(data);
  const handleLogout = () => logout();

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout: handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
