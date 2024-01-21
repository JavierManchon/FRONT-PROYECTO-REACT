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
import { GamesProvider } from "./context/GamesContext";
import MyMissions from "./pages/MyMissions/MyMissions";
import Nav from "./components/Nav/Nav";
import './styles/app.css';
import Footer from "./components/Footer/Footer";

function App() {
  
  return (
    <AuthProvider>
      <GamesProvider>
        <BrowserRouter>
        <div className="app-container">
          <Nav />
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
                path="/add-game"
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
                path="/games/:gameId/my-missions"
                element={
                  <AuthRoute component={<MyMissions />} />
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
            <Footer />
          </div>
        </BrowserRouter>
      </GamesProvider>
    </AuthProvider>
  )
}

export default App
