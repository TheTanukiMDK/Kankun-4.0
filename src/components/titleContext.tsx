"use client"
import { createContext, useContext, useState } from 'react';

type TitleContextType = {
    title: string;
    setTitle: (title: string) => void;
};

const TitleContext = createContext<TitleContextType>({
    title: '',
    setTitle: () => {},
});

export const useTitle = () => useContext(TitleContext);

export const TitleProvider = ({ children }: { children: React.ReactNode }) => {
    const [title, setTitle] = useState('');
    return (
        <TitleContext.Provider value={{ title, setTitle }}>
            {children}
        </TitleContext.Provider>
    );
};