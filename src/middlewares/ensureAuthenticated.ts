import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function EnsureAuthenticated(
  request: Request, response: Response, next: NextFunction
) {
  // Receber token
  const authToken = request.headers.authorization;

  // Validar se o token está preenchido
  if (!authToken) {
    return response.status(401).json({ message: "Invalid token" }).end();
  }

   const [, token] = authToken.split(" ")
  // Validar o token
  try {
    const { sub } = verify(token, "cc2e99baa56ea3157aa8766e91428cd9") as IPayload;

    request.user_id = sub;
    console.log(request.user_id)
  } catch (error) {
    return response.status(401).end();
  }

  // Recuperar informações do usuário 
 return next();
}
