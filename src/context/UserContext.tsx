/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";

import type { ReactNode } from "react";

interface User {
  id: string;
  name: string;
  token: string;
}

interface UserContextType {
  user: User | null;
  login: (token: string, user: Omit<User, "token">) => void;
  logout: () => void;
}

/**
 * Context creation
 */
const UserContext = createContext<UserContextType | undefined>(undefined);

/**
 * Provider component that wraps your app
 */
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    try {
      return JSON.parse(localStorage.getItem("user") || "null");
    } catch {
      return null;
    }
  });

  // Persist user to localStorage when it changes
  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [user]);

  /** Store token and basic profile info */
  const login = (token: string, u: Omit<User, "token">) => {
    setUser({ ...u, token });
  };

  /** Clear everything */
  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

/**
 * Hook for consuming user context
 */
export const useUser = (): UserContextType => {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser must be used inside a UserProvider");
  return ctx;
};
