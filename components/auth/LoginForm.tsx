"use client";

import {useState} from "react"; 

// import { useAuth } from "@/hooks/useAuth";



export default function LoginForm() { 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");
    return (
        <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <form
        className="bg-gray-900 w-full max-w-sm p-8 rounded-2xl shadow-xl space-y-6 border border-gray-800"
      >
        <h1 className="text-2xl font-bold text-center text-white">
            Shuttle Tracker
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
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-gray-600 hover:bg-gray-700 text-white font-semibold transition-all"
        >
          Login
        </button>

        <p className="text-center text-gray-400 text-sm">
          Don't have an account?{" "}
          <a href="#" className="text-gray-500 hover:underline">Register</a>
        </p>
      </form>
    </div>
    );
}



{/* 
 export default function LoginForm() {
    // const {login , loading , error} = useAuth();
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");

    return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-black p-6">
      <form 
        // onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-sm space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">Login</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-md"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-md"
          required
        />

         {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          type="submit"
        //   disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>


    </div>

    );


}  */}