"use server";
import { createSession } from "@/app/_lib/session";
import { AuthSchema } from "@lib/definitions";
import bcrypt from "bcryptjs";

//@ts-expect-error state type any
export async function login(state, formData) {
  const data = Object.fromEntries(formData);
  const parsed = AuthSchema.safeParse({
    username: "admin", // Hardcoded for this example, replace with actual username input
    email: data.email,
    password: data.password,
  });

  if (!parsed.success) {
    return { error: parsed.error.flatten().fieldErrors };
  }
  //Create User Singup
  //const { username, email, password } = parsed.data;
  const passwordHash = await bcrypt.hash("Admin123@", 10);

  const isMatch =
    parsed.data.email === process.env.ADMIN_EMAIL &&
    parsed.data.password === process.env.ADMIN_PASSWORD;
  // (await bcrypt.compare(parsed.data.password, process.env.EMAIL_PASS || ""));

  if (!isMatch) {
    return { error: { email: null, password: "Invalid email or password" } };
  }

  const user = {
    id: "12345", // Mock user ID, replace with actual user retrieval logic
    email: parsed.data.email,
    username: parsed.data.username,
    password: passwordHash,
  };

  await createSession(user.id);
  return { success: true, message: "Login successful!" };
}
