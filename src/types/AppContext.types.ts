import { ReactNode } from 'react';

export interface User {
    id: string;
    name:string;
}

export interface AppContextType {
    users: User[];
    addUser: (name: string) => void;
}

export interface AppProviderProps {
    children: ReactNode;
}
