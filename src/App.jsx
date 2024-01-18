import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Games from './pages/Games/Games';
import Profile from './pages/Profile/Profile';
import { AuthProvider } from "./context/AuthContext";
import GamesForm from "./pages/GamesForm/GamesForm";
import AuthRoute from "./components/AuthRoute";
import NotFound from "./components/NotFound";

function App() {
  
  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/games"
          element={
            <AuthRoute component={<Games />} />
          }
        />
        <Route
          path="/add-games"
          element={
            <AuthRoute component={<GamesForm />} />
          }
        />
        <Route
          path="/games/:id"
          element={
            <AuthRoute component={<GamesForm />} />
          }
        />
        <Route
          path="/Profile"
          element={
            <AuthRoute component={<Profile />} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App
