import { useState, createContext, ReactElement, useEffect } from "react";

export interface User {
  uid: string;
  username: string;
  email: string;
}

export interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const AuthContext = createContext<AuthContextType | null>({
  user: null,
  setUser: () => {},
});

interface AuthProviderProps {
  children: ReactElement;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
