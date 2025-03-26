import { createContext, useReducer, useContext } from 'react';
import type { User, Action, AppContextType, AppProviderProps } from '../types/AppContext.types';


const AppContext = createContext<AppContextType>({
    users: [],
    addUser: () => {},
    removeUser: () => {},
});

const reducer = (state: User[], action: Action): User[] => {
    switch (action.type) {
        case 'ADD_USER':
            return [...state, action.payload];
        case 'REMOVE_USER':
            return state.filter(user => user.id !== action.payload);
        default: return state;
    }
}

export const AppProvider = ({ children }: AppProviderProps): React.ReactElement => {
    const initialState: User[] = [
        { id: 'u1', name: 'John'},
        { id: 'u2', name: 'Bob'},
    ];

    const [users, dispatch] = useReducer(reducer, initialState);

    const addUser = (name: string) => {
        const newUser: User = {
            id: Date.now().toString(), name,
        }
        dispatch({ type: 'ADD_USER', payload: newUser });
    };

    const removeUser = (id: string) => {
        dispatch({ type: 'REMOVE_USER', payload: id });
    }

    return (
        <AppContext.Provider value={{ users, addUser, removeUser }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = (): AppContextType => {
    return useContext(AppContext);
};