"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '@/lib/api';

type User = {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'leader' | 'member';
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (token: string, user: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      const storedToken = localStorage.getItem('blis_token');
      const storedUser = localStorage.getItem('blis_user');
      
      if (storedToken && storedUser) {
        setUser(JSON.parse(storedUser));
        // Verify with backend
        try {
          const res = await api.get('/auth/profile');
          setUser(res.data.data.user);
          localStorage.setItem('blis_user', JSON.stringify(res.data.data.user));
        } catch (e) {
          // If token invalid, the api interceptor will log them out
        }
      }
      setLoading(false);
    };

    initAuth();
  }, []);

  const login = (token: string, userData: User) => {
    localStorage.setItem('blis_token', token);
    localStorage.setItem('blis_user', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('blis_token');
    localStorage.removeItem('blis_user');
    setUser(null);
    window.location.href = '/login';
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
