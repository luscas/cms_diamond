import type { NextApiRequest, NextApiResponse } from "next";

import { gql } from "@apollo/client";
import { z } from "zod";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

import client from "~/graphql/client/client_admin";
const NEXT_PRIVATE_JWT_TOKEN = process.env.NEXT_PRIVATE_JWT_TOKEN || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const schema = z.object({
      nick: z.string().min(2).max(20),
      password: z.string().min(6),
    });

    const User = schema.parse(req.body);

    const { data: find_user_with_nick } = await client.query({
      query: gql`
        query GET_USER {
          users(where: {nick: {_eq: "${User.nick}"}}) {
            id
            nick
            password
          }
        }
      `,
    });

    if (find_user_with_nick.users.length === 0) {
      throw "Usuário não encontrado.";
    }

    const { password: hashed_password } = find_user_with_nick.users[0];

    let is_password_correct = await bcrypt.compareSync(
      User.password,
      String(hashed_password).trim()
    );

    if (!is_password_correct) {
      throw "Senha incorreta.";
    }

    const token = jsonwebtoken.sign(
      JSON.stringify({
        sub: `${find_user_with_nick.users[0].id}`,
        name: find_user_with_nick.users[0].nick,
        iat: Date.now() / 1000,
        "https://hasura.io/jwt/claims": {
          "x-hasura-allowed-roles": ["user"],
          "x-hasura-default-role": "user",
          "x-hasura-user-id": `${find_user_with_nick.users[0].id}`,
        },
      }),
      NEXT_PRIVATE_JWT_TOKEN,
      {
        header: {
          alg: "HS256",
          typ: "JWT",
        },
      }
    );

    res.removeHeader("diamond_token=; Path=/");
    res.setHeader("Set-Cookie", `diamond_token=${token}; Path=/`);

    res.status(200).json({
      accessToken: token,
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
}
