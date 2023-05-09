import { createContext, useEffect } from 'react';

//@ts-ignore
export const AuthContext = createContext<>();

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    console.log('verifico auth');
  }, []);

  return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>;
};
