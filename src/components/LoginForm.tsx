interface LoginFormProps {
    onSwitchToLogin: () => void
}


export default function LoginForm({ onSwitchToLogin }: LoginFormProps) {
    return (
        <div className="bg-white/90 backdrop-blur p-8 rounded-xl shadow-xl w-full max-w-sm">
            <h1 className="text-2xl font-bold mb-6 text-center text-rose-900">
                Game Night Login
            </h1>

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
            <p className="text-center text-sm p-4 text-indigo-700 cursor-pointer hover:text-indigo-900" onClick={onSwitchToLogin}>
                Register for an account
            </p>
        </div>
    );
}