"use client";
import { useRouter } from "next/navigation";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import request from "../request";
import {
  getAccessTokenFromStorage,
  getJWTFromStorage,
  setAccessTokenToStorage,
  setJWTToStorage,
} from "../utils/localStorage";
import { UserType } from "../types/auth";

interface AuthContextType {
  setAccessToken: Dispatch<SetStateAction<string>>;
  user: UserType | null;
  setUser: Dispatch<SetStateAction<UserType | null>>;
}

const defaultValues = {
  user: null,
  setUser: () => {},
  setAccessToken: () => {},
};

type PropChildren = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContextType>(defaultValues);

const AuthProvider: React.FC<PropChildren> = ({ children }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [accessToken, setAccessToken] = useState("");
  const router = useRouter();

  const fetchInfo = useCallback(async () => {
    try {
      const res = await request.get<UserType>("user/me");
      const data = res.data;
      setUser(data);
    } catch (e) {
      setUser(null);
      setAccessToken("");
      router.push("/");
    }
  }, [router]);

  useEffect(() => {
    if (!accessToken) return;
    fetchInfo();
  }, [accessToken, fetchInfo]);

  const handleSaveAccessToken = useCallback(async () => {
    await setAccessTokenToStorage(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!accessToken) return;
    handleSaveAccessToken();
  }, [accessToken, handleSaveAccessToken]);

  const value = {
    user,
    setUser,
    setAccessToken,
  };

  useEffect(() => {
    getAccessTokenFromStorage().then((t) => {
      if (!t) return router.push("/");
      setAccessToken(t);
    });
  }, [router]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = () => {
  return React.useContext(AuthContext);
};
