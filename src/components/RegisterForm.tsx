import { Link } from "react-router-dom"
import AuthLayout from "../layouts/AuthLayout";

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
}

const footer: React.ReactNode = (
    <p className="mt-4 text-center text-sm text-indigo-700">
        Already have an account? {" "}
        <Link to="/login" className="font-semibold underline cursor-pointer hover:text-indigo-900">
            Log in
        </Link>
    </p>
)

export default function RegisterForm() {
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
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-rose-900 mb-1">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        className="w-full px-3 py-2 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="••••••••"
                    />
                </div>

                <button className="w-full py-2 bg-rose-700 hover:bg-rose-800 text-white font-semibold rounded-lg transition">
                    Register
                </button>
            </form>
        </AuthLayout>
    );
}