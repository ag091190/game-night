import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import { registerUser } from "../api/authApi";

const footer: React.ReactNode = (
    <p className="mt-4 text-center text-sm text-indigo-700">
        Already have an account?{" "}
        <Link
            to="/login"
            className="font-semibold underline cursor-pointer hover:text-indigo-900"
        >
            Log in
        </Link>
    </p>
);

export default function RegisterForm() {
    const navigate = useNavigate();

    // form state
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // ui state
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);

        // basic validation
        if (!name.trim() || !email.trim() || !password || !confirmPassword) {
            setError("Please fill in all fields.");
            return;
        }

        if (password.length < 6) {
            setError("Password should be at least 6 characters.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            setLoading(true);

            await registerUser({
                name: name.trim(),
                email: email.trim(),
                password,
            });

            // ✅ on success: send them to login
            navigate("/login", { replace: true });
        } catch (err) {
            console.error(err);
            setError("Registration failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthLayout title="Register Account" footer={footer}>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-rose-900 mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-rose-900 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        className="w-full px-3 py-2 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-rose-900 mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        className="w-full px-3 py-2 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-rose-900 mb-1">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        className="w-full px-3 py-2 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="••••••••"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>

                {error && (
                    <p className="text-sm text-red-600">
                        {error}
                    </p>
                )}

                <button
                    className="w-full py-2 bg-rose-700 hover:bg-rose-800 text-white font-semibold rounded-lg transition"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? "Registering" : "Register"}
                </button>
            </form>
        </AuthLayout>
    );
}
