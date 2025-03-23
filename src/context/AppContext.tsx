import { createContext, useState, useContext } from 'react';
import type { User, AppContextType, AppProviderProps } from '../types/AppContext.types';


const AppContext = createContext<AppContextType>({
    users: [],
    addUser: () => {},
});

export const AppProvider = ({ children }: AppProviderProps): React.ReactElement => {
    const [users, setUsers] = useState<User[]>([
        { id: 'u1', name: 'John'},
        { id: 'u2', name: 'Bob'},
    ]);

    const addUser = (name: string) => {
        const newUser: User = {
            id: Date.now().toString(),
                name,
        }
        setUsers((prev) => [...prev, newUser]);
    };

    return (
        <AppContext.Provider value={{ users, addUser }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = (): AppContextType => {
    return useContext(AppContext);
};