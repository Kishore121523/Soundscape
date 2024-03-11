// app/AppStateContext.tsx
'use client'
import { createContext, useContext, ReactNode, useState, useEffect } from 'react';

type AppStateContextProps = {
  loaded: boolean;
  setLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  // Add any other global state properties and methods here
};

const AppStateContext = createContext<AppStateContextProps | undefined>(undefined);

type AppStateProviderProps = {
  children: ReactNode;
};

export const AppStateProvider: React.FC<AppStateProviderProps> = ({ children }) => {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    // Notify all subscribers when the state changes
    // This will trigger a re-render in all components that use useAppState
    const notifySubscribers = () => {
      // You can add more logic here if needed
      console.log('State updated:', loaded);
    };

    notifySubscribers();
  }, [loaded]);

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
