"use server";
import { deleteSession } from "@/app/_lib/session";

export async function logout() {
  await deleteSession();
  return { success: true, message: "Logout successful!" };
}
