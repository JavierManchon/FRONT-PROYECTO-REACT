import { createContext, useState, useContext } from 'react';
import { registerReq, loginReq, verifyTokenReq } from '../api/auth';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth has been used without AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const signup = async (user) => {
    try {
      const res = await registerReq(user);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  const signin = async (user) => {
    try {
      const res = await loginReq(user);
      console.log('Token:', res.data.token);
      setIsAuthenticated(true);
      setUser(res.data);
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();
  
      if (!cookies.token) {
        setIsAuthenticated(false);
        setIsLoading(false); // Agrega esta línea
        return setUser(null);
      }
  
      try {
        const res = await verifyTokenReq(cookies.token);
        if (!res.data) {
          setIsAuthenticated(false);
        } else {
          setIsAuthenticated(true);
          setUser(res.data);
        }
      } catch (error) {
        console.log(error);
        setIsAuthenticated(false);
        setUser(null);
      } finally {
        setIsLoading(false); // Agrega esta línea
      }
    }
  
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signup,
        signin,
        isLoading,
        user,
        isAuthenticated,
        errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};