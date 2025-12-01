import { Link } from "react-router-dom"
import AuthLayout from "../layouts/AuthLayout"

const footer = (
    <p className="text-center text-sm p-4 text-indigo-700">
        <Link to="/register" className="font-semibold underline cursor-pointer hover:text-indigo-900">
            Register for an account
        </Link>
    </p>
);

export default function LoginForm() {
    return (
        <AuthLayout title="Game Night Login" footer={footer}>
            <div className="mb-4">
                <label className="block text-sm font-medium text-rose-900 mb-1">
                    Email
                </label>
                <input
                    type="email"
                    className="w-full px-3 py-2 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="you@example.com"
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
                />
                <p className="text-right text-xs p-1 text-indigo-700 cursor-pointer hover:text-indigo-900">
                    Forgot password?
                </p>
            </div>

            <button className="w-full py-2 bg-rose-700 hover:bg-rose-800 text-white font-semibold rounded-lg transition">
                Log In
            </button>
        </AuthLayout>
    );
}