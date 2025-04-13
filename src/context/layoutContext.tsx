/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, ReactNode } from 'react';

interface LayoutContextType {
    isSideBarActive: boolean,
    setIsSideBarActive: (value: boolean | ((pre: boolean) => boolean)) => void;
}

interface LayoutProviderProps {
    children: ReactNode;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const LayoutProvider = ({ children }: LayoutProviderProps) => {
    const [isSideBarActive, setIsSideBarActive] = useState(true);
    return (
        <LayoutContext.Provider value={{ isSideBarActive, setIsSideBarActive }}>
            {children}
        </LayoutContext.Provider>
    );
};

export const useLayout = (): LayoutContextType => {
    const context = useContext(LayoutContext)!;
    return context;
};
