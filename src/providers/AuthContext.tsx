import { useState, createContext, useEffect } from "react";

import jsonwebtoken, { JwtPayload } from "jsonwebtoken";

export interface User {
  sub?: string;
  nick: string;
}

export interface AuthContextType {
  user: User | null;
}

export const AuthContext = createContext<AuthContextType | null>({
  user: null,
});

export interface JWTDecode extends JwtPayload {
  sub: string;
  name: string;
}

import nookies from "nookies";

export const AuthProvider = (props: any) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const { diamond_token: token } = nookies.get(null, "diamond_token");

    if (token) {
      const decoded = jsonwebtoken.decode(token) as JWTDecode;

      setUser({
        sub: decoded.sub,
        nick: decoded.name,
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      <pre>{JSON.stringify(props.user, null, 2)}</pre>
      {props.children}
    </AuthContext.Provider>
  );
};
