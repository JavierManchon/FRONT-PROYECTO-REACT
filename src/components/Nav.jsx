import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Nav() {
  const { isAuthenticated, logout, user } = useAuth();
  console.log(isAuthenticated, user)

  return (
    <nav>
      <h1>
        <Link to={isAuthenticated ? "/games" : "/"}>GameTracker</Link>
      </h1>
      <ul>
        {isAuthenticated ? (
          <>
            <li>
              Welcome {user.username}
            </li>
            <li>
              <Link to="/login" onClick={() => logout()}>
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Nav