import { RootState} from "./store";
import { User } from './userSlice'

export const  selectUsers = (state: RootState): User[] => state.users.users;