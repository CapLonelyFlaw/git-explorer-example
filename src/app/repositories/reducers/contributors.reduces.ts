import { FETCH_CONTRIBUTORS_SUCCESS, FETCH_CONTRIBUTORS_ERROR } from '../actions/repos.actions';
import { AnyAction } from 'redux';
import { User } from '../models/user.model';

const INITIAL_STATE = {
    isLoaded: false,
    items: new Array<User>()
};

export interface IContributorsState {
    isLoaded: boolean;
    items: Array<User>;
    error?: string;
}

export function contributors(state: IContributorsState = INITIAL_STATE, action: AnyAction) {
    switch (action.type) {

        case FETCH_CONTRIBUTORS_SUCCESS: {
            return {
                isLoaded: true,
                items: (action.payload || []).map((c: any) => new User(c))
            };
        }

        case FETCH_CONTRIBUTORS_ERROR: {
            return {
                isLoaded: true,
                items: new Array(),
                error: action.error,
            };
        }

        default:
            return state;
    }
}
