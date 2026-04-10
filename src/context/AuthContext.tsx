import React, { createContext, useContext, useState } from "react";

export interface User {
  accountName: string;
  email: string;
  dragonCoins: number;
  lastLogin: string;
  registerDate: string;
  accountOwner: string;
  accountStatus: string;
}

interface AuthContextType {
  user: User | null;
  login: (data: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

const DEMO_USER: User = {
  accountName: "DragonSlayer99",
  email: "dragon***@gmail.com",
  dragonCoins: 12_450,
  lastLogin: "2026-04-09 18:32",
  registerDate: "2024-11-03",
  accountOwner: "Ahmet Demir",
  accountStatus: "Active",
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(DEMO_USER);

  const login = (data: User) => setUser(data);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}