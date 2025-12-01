import React from "react"

interface AuthLayoutProps {
    title: String
    children: React.ReactNode
    footer?: React.ReactNode
}

export default function AuthLayout({ title, children, footer }: AuthLayoutProps) {
    return (
        <div className="min-h-screen bg-linear-to-br from-rose-900 to-rose-800 flex items-start justify-center pt-20 px-4">
            <div className="bg-white/90 backdrop-blur p-8 rounded-xl shadow-xl w-full max-w-sm">
                <h1 className="text-2xl font-bold mb-6 text-center text-rose-900">
                    {title}
                </h1>

                {children}

                <p className="text-center text-sm p-4 text-indigo-700 cursor-pointer hover:text-indigo-900">
                    {footer}
                </p>
            </div>
        </div >
    );
}