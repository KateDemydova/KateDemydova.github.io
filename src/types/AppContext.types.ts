import { ReactNode } from 'react';


export type Action =
   | { type: 'ADD_USER'; payload: User }
   | { type: 'REMOVE_USER'; payload: string };

export interface User {
    id: string;
    name:string;
}

export interface AppContextType {
    users: User[];
    addUser: (name: string) => void;
    removeUser: (id: string) => void;
}

export interface AppProviderProps {
    children: ReactNode;
}
