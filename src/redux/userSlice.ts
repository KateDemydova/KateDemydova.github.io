import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface User {
    id: string;
    name: string;
}

interface UsersState {
    users: User[];
}

const initialState: UsersState = {
    users: [
        { id: 'u1', name: 'John'},
        { id: 'u2', name: 'Bob'},
    ],
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser(state, action: PayloadAction<string>) {
            state.users.push({id: Date.now().toString(), name: action.payload});
    },
    removeUser(state, action: PayloadAction<string>) {
            state.users = state.users.filter(user => user.id !== action.payload);
    },
},
});

export const { addUser, removeUser } = userSlice.actions;
export default  userSlice.reducer;