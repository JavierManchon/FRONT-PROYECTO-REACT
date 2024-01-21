import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Nav() {
  const { isAuthenticated, logout, user } = useAuth();
  console.log(isAuthenticated, user)

  return (
    <nav className="navbar-container">
        <Link to={isAuthenticated ? "/games" : "/"} >
        <img src='https://res.cloudinary.com/dbckjkikz/image/upload/v1705852213/myyckvpvj7qikbvx3jnn.png' alt="Home Button" className="home-button" />
      </Link>
      <ul className="nav-options">
        {isAuthenticated ? (
          <>
            <li className="nav-option">
              <Link to="/add-game">Add Game!</Link>
            </li>
            <li >
              <Link to="/login" className="nav-option" onClick={() => logout()}>
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" className="nav-option">Login</Link>
            </li>
            <li>
              <Link to="/register" className="nav-option">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Nav