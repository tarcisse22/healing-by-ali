import { SignJWT, jwtVerify } from "jose";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "alidramadan@gmail.com";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "123QAZwsx@#";

function getSecret() {
  const secret = process.env.JWT_SECRET || "healing-by-ali-jwt-secret-key-2024-secure";
  return new TextEncoder().encode(secret);
}

export function verifyCredentials(email: string, password: string): boolean {
  return email === ADMIN_EMAIL && password === ADMIN_PASSWORD;
}

export async function createToken(): Promise<string> {
  return new SignJWT({ sub: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(getSecret());
}

export async function verifyToken(token: string): Promise<boolean> {
  try {
    await jwtVerify(token, getSecret());
    return true;
  } catch {
    return false;
  }
}

export async function getTokenFromHeader(
  authorization: string | null
): Promise<boolean> {
  if (!authorization || !authorization.startsWith("Bearer ")) return false;
  const token = authorization.split(" ")[1];
  return verifyToken(token);
}
