"use client";

import { useState, useActionState } from "react";
import * as motion from "motion/react-client";
import { login } from "./actions";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, action, pending] = useActionState(login, undefined);
  //   const [error, setError] = useState("");

  return (
    <form
      action={action}
      className="h-screen flex flex-col justify-center items-center"
    >
      <h1 className="text-5xl font-bold select-none">Admin Login</h1>
      <motion.input
        name="email"
        type="email"
        value={email}
        whileHover={{ scale: 1.1 }}
        className="border border-black w-64 h-12 p-3 rounded-md my-4 shadow-lg"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      {state?.error?.email && (
        <p className="text-red-600">{state.error.email}</p>
      )}
      <motion.input
        name="password"
        type="password"
        value={password}
        whileHover={{ scale: 1.1 }}
        className="border border-black w-64 h-12 p-3 rounded-md mb-4 shadow-lg"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      {state?.error?.password && (
        <p className="text-red-600">{state.error.password}</p>
      )}
      <motion.button
        disabled={pending}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="border border-black w-64 h-12 p-3 rounded-md mb-4 text-white font-bold bg-black shadow-lg"
        type="submit"
      >
        {pending ? "ing..." : "Login"}
      </motion.button>
    </form>
  );
}
