import useAuth from "@/hook/useAuth";
import React, { createContext, useContext } from "react";

export const AuthContext = createContext<null>(null);
export const useAuthContext = () => useContext(AuthContext);

interface AuthContextProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
  const data = useAuth();
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;