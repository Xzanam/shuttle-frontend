"use client";

import { useState } from "react";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <form
        className="bg-gray-900 w-full max-w-sm p-8 rounded-2xl shadow-xl space-y-6 border border-gray-800"
      >
        <h1 className="text-3xl font-bold text-center text-white">
          Register
        </h1>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-blue-500"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-blue-500"
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-gray-600 hover:bg-gray-700 text-white font-semibold transition-all"
        >
          Create Account
        </button>

        <p className="text-center text-gray-400 text-sm">
          Already have an account?{" "}
          <a href="#" className="text-gray-500 hover:underline">Login</a>
        </p>
      </form>
    </div>
  );
}
