import { User } from '../../objects/user';

export interface RootState {
    user: User | undefined;
    counter: number;
    isLogged: boolean;
}

export const initialState: RootState = {
    user: undefined,
    counter: 0,
    isLogged: false
};
