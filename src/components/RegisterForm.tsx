interface RegisterFormProps {
    onSwitchToLogin: () => void
}

export default function RegisterForm({ onSwitchToLogin }: RegisterFormProps) {
    return (
        <div className="bg-white/90 backdrop-blur p-8 rounded-xl shadow-xl w-full max-w-sm">
            <h1 className="text-2xl font-bold mb-6 text-center text-rose-900">
                Register Account
            </h1>

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

            <p className="mt-4 text-center text-sm text-indigo-700 cursor-pointer hover:text-indigo-800" onClick={onSwitchToLogin}>
                Already have an account?{" "}
            </p>
        </div>
    );
}