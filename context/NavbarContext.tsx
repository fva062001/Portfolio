import React, { createContext, useState } from 'react';

// Define the context type
interface NavbarContextType {
  isNavbarOpen: boolean;
  toggleNavbar: () => void;
}

// Create the context
const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

type NavbarProviderProps = {
  children: React.ReactNode;
};

// Create the provider component
const NavbarProvider = ({ children }: NavbarProviderProps) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const contextValue: NavbarContextType = {
    isNavbarOpen,
    toggleNavbar,
  };

  return (
    <NavbarContext.Provider value={contextValue}>
      {children}
    </NavbarContext.Provider>
  );
};

export { NavbarContext, NavbarProvider };
