import { API_REQUEST, API_BASE_URL } from '../../_core/middlewares/api.middleware';
import { Repository } from '../models/repository.model';

export const FETCH_REPOS = 'FETCH_TASKS';
export const FETCH_REPOS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const FETCH_REPOS_ERROR = 'FETCH_TASKS_ERROR';
export const TOGGLE_REPO_FAVORITES = 'TOGGLE_REPO_FAVORITES';
export const FETCH_REPOS_TYPES = [
    FETCH_REPOS,
    FETCH_REPOS_SUCCESS,
    FETCH_REPOS_ERROR
];

export const FETCH_CONTRIBUTORS = 'FETCH_CONTRIBUTORS';
export const FETCH_CONTRIBUTORS_SUCCESS = 'FETCH_CONTRIBUTORS_SUCCESS';
export const FETCH_CONTRIBUTORS_ERROR = 'FETCH_CONTRIBUTORS_ERROR';
export const FETCH_CONTRIBUTORS_TYPES = [
    FETCH_CONTRIBUTORS,
    FETCH_CONTRIBUTORS_SUCCESS,
    FETCH_CONTRIBUTORS_ERROR
];

export function fetchRepos(term: string, page: number = 1) {
    return {
        [API_REQUEST]: {
            types: FETCH_REPOS_TYPES,
            config: {
                method: 'get',
                url: `${API_BASE_URL}/search/repositories`,
                params: { q: term, page }
            } as angular.IRequestConfig
        }
    };
}

export function fetchContributors(repoId: number) {
    return {
        [API_REQUEST]: {
            types: FETCH_CONTRIBUTORS_TYPES,
            config: {
                method: 'get',
                url: `${API_BASE_URL}/repositories/${repoId}/contributors`,
            } as angular.IRequestConfig,
            meta: { id: repoId }
        }
    };
}

export function toggleFavorite(repo: Repository) {
    return {
        type: TOGGLE_REPO_FAVORITES,
        meta: { repo }
    };
}
