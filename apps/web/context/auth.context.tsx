"use client";
import { createContext, useContext, useState,useEffect } from "react";

const AuthContext = createContext({
  session: "",
  loading: false,
  SessionAction: (info: any) => {},
  useLoading: (load: boolean) => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState("");
  const [loading, setLoading] = useState(false);

  const SessionAction = (info: any) => {
    window.cookieStore.set("auth", JSON.stringify(info));
    setSession(info);
  };
  const useLoading = (load: boolean) => {
    setLoading(load);
  };

  useEffect(()=>{
    window.cookieStore.get('auth').then((data)=>{
        setSession(JSON.stringify(data?.value))
    })
  },[])

  const value = {
    session,
    loading,
    SessionAction,
    useLoading,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Context is required");
  }
  return context;
};
