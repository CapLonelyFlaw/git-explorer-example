import { FETCH_REPOS_SUCCESS, FETCH_REPOS_ERROR, TOGGLE_REPO_FAVORITES } from '../actions/repos.actions';
import { AnyAction } from 'redux';
import { Repository } from '../models/repository.model';

const FAVORITES_KEY = '_favorites';

function loadFavorites(): { [key: number]: Repository; } {
    try {
        const serializedState = localStorage.getItem(FAVORITES_KEY);
        if (!serializedState) { return {}; }
        const data = JSON.parse(serializedState);
        Object.keys(data).forEach((key: any) => {
            data[key] = new Repository(data[key]);
        });
        console.log(data);
        return data;
    } catch (error) {
        return {};
    }
}

function saveFavorites(favorites: { [key: number]: Repository; }) {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

export interface IReposState {
    // TODO: loading indicator
    isLoaded: boolean;
    repos: Array<Repository>;
    favorites: { [key: number]: Repository; };
    error?: string;
}

const INITIAL_STATE = {
    isLoaded: false,
    repos: new Array<Repository>(),
    favorites: loadFavorites()
} as IReposState;

export function repos(state: IReposState = INITIAL_STATE, action: AnyAction) {
    switch (action.type) {

        case FETCH_REPOS_SUCCESS: {
            const repos: any[] = (action.payload.items || []).map((r: any) => new Repository(r));
            repos.forEach(r => {
                r.isFavorite = state.favorites[r.id] !== undefined;
            });
            return {
                isLoaded: true,
                repos,
                favorites: state.favorites
            };
        }

        case FETCH_REPOS_ERROR: {
            return {
                isLoaded: true,
                error: action.error,
                repos: new Array(),
                favorites: state.favorites
            };
        }

        case TOGGLE_REPO_FAVORITES: {
            const repo = action.meta.repo;
            repo.isFavorite = !repo.isFavorite;
            if (repo.isFavorite) {
                state.favorites[repo.id] = repo;
            } else {
                delete state.favorites[repo.id];
            }
            saveFavorites(state.favorites);
            return {
                isLoaded: true,
                repos: state.repos,
                favorites: state.favorites
            };
        }

        default:
            return state;
    }
}
