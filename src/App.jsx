import { Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import ProtectedRoute from "./components/ProtectedRoute"
function App() {
  return (
    <Routes>
      <Route path="/" element = {<Landing />} > </Route>
      <Route path="/login" element = {<Login />} > </Route>
      <Route path="/register" element = {<Register />} > </Route>
      <Route path="/dashboard" element = {
        <ProtectedRoute>
        <Dashboard />
        </ProtectedRoute>
        } />
    </Routes>
  )
}

export default App