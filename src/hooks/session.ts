import { useState, useEffect } from "react";

import jsonwebtoken, { JwtPayload } from "jsonwebtoken";

export interface User {
    sub: string;
    nick: string;
}

export interface JWTDecode extends JwtPayload {
    sub: string;
    name: string;
}

import nookies from "nookies";

export const useSession = () => {
    const [user, setUser] = useState<User>();

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

    return {user, setUser};
};
