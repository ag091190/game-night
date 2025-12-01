import { Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import LoginForm from "./components/LoginForm"
import RegisterForm from "./components/RegisterForm"

function App() {

  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default App