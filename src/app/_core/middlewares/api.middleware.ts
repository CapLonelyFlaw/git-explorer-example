import { Store, Dispatch, AnyAction } from 'redux';

export const API_BASE_URL = 'https://api.github.com';
export const API_REQUEST = 'API_REQUEST';

apiMiddleware.$inject = ['$http'];
export function apiMiddleware($http: angular.IHttpService) {
  return (store: Store) => (next: Dispatch) => (action: AnyAction) => {
    if (!action[API_REQUEST]) { return next(action); }

    const { meta } = action;
    const { config, types } = action[API_REQUEST];
    const [ requestType, successType, errorType] = types;

    next({type: requestType});

    $http(config)
      .then(response => {
        next({
          type: successType,
          payload: response.data,
          meta
        });
      })
      .catch(response => {
        next({
          type: errorType,
          error: response,
          meta
        });
      });
  };
}
