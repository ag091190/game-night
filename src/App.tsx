import './App.css'
import { useState } from "react"
import LoginForm from "./components/LoginForm"
import RegisterForm from "./components/RegisterForm"

function App() {
  const [page, setPage] = useState("login");

  return (
    <div className="min-h-screen bg-linear-to-br from-rose-900 to-rose-800 flex items-start justify-center pt-20 px-4">
      {page === "login" && (
        <LoginForm onSwitchToLogin={() => setPage("register")} />
      )}
      {page === "register" && (
        <RegisterForm onSwitchToLogin={() => setPage("login")} />
      )}
    </div>
  )
}

export default App