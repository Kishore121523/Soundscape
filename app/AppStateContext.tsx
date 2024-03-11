// app/AppStateContext.tsx
'use client'
import { createContext, useContext, ReactNode, useState, useEffect } from 'react';

type AppStateContextProps = {
  loaded: boolean;
  setLoaded: React.Dispatch<React.SetStateAction<boolean>>;
};

const AppStateContext = createContext<AppStateContextProps | undefined>(undefined);

type AppStateProviderProps = {
  children: ReactNode;
};

export const AppStateProvider: React.FC<AppStateProviderProps> = ({ children }) => {
  const [loaded, setLoaded] = useState<boolean>(false);

  return (
    <AppStateContext.Provider value={{ loaded, setLoaded }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
};
