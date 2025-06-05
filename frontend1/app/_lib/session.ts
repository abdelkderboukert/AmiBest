import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies as getCookies } from "next/headers";
import { redirect } from "next/navigation";

const key = process.env.SESSION_SECRET;

const sessionCookie = {
  name: "session",
  options: {
    httpOnly: true,
    secure: true,
    sameSite: "lax" as const,
    path: "/",
  },
  duration: 60 * 60 * 2 * 1000, // 2 hours
};

type JWTPayload = {
  userId: string;
  expire: Date;
};

export async function encrypt(payload: JWTPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(new TextEncoder().encode(key));
}

export async function decrypt(session: any) {
  try {
    const { payload } = await jwtVerify(
      session,
      new TextEncoder().encode(key),
      {
        algorithms: ["HS256"],
      }
    );
    return payload as JWTPayload;
  } catch (error) {
    console.error("JWT verification failed:", error);
    return null;
  }
}

export async function createSession(userId: string) {
  const expire = new Date(Date.now() + sessionCookie.duration);
  const session = await encrypt({ userId, expire });

  const cookieStore = await getCookies();
  cookieStore.set(sessionCookie.name, session, {
    ...sessionCookie.options,
    expires: expire,
  });

  redirect("/admin");
}

export async function verifySession() {
  const cookieStore = await getCookies();
  const sessionValue = cookieStore.get(sessionCookie.name)?.value;

  if (!sessionValue) redirect("/login");

  const session = await decrypt(sessionValue);
  if (!session || !session.userId) redirect("/login");

  return { userId: session.userId, expire: session.expire };
}

export async function deleteSession() {
  const cookieStore = await getCookies();
  cookieStore.delete(sessionCookie.name);
  redirect("/login");
}

export async function isAuthenticated() {
  const cookieStore = await getCookies();
  const sessionValue = cookieStore.get(sessionCookie.name)?.value;

  if (!sessionValue) return false;

  const session = await decrypt(sessionValue);

  if (!session || typeof session !== "object" || !("userId" in session)) {
    return false;
  }

  return true;
}
