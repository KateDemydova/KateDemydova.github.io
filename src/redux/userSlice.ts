import { createAsyncThunk} from "@reduxjs/toolkit";
import {createSlice, PayloadAction} from '@reduxjs/toolkit';


export interface User {
    id: string;
    name: string;
}

interface UsersState {
    users: User[];
    loading: 'loading' | 'succeeded' | 'failed';
}

const initialState: UsersState = {
    users: [],
    loading: 'loading',
};

export const fetchUsers = createAsyncThunk<User[], void>(
    'users/fetchUsers',
    async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return [
            { id: 'u3', name: 'Alice' },
            { id: 'u4', name: 'Charlie' },
        ];
    }
);

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
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = 'loading';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = 'succeeded';
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state) => {
                state.loading = 'failed';
            });
        },
    });


export const { addUser, removeUser } = userSlice.actions;
export default  userSlice.reducer;