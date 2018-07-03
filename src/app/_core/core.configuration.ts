import ngRedux from 'ng-redux';
import { combineReducers } from 'redux';
import { repos } from '../repositories/reducers/repos.reducer';
import { contributors } from '../repositories/reducers/contributors.reduces';

export const configuration = ($locationProvider: angular.ILocationProvider, $ngReduxProvider: ngRedux.INgReduxProvider) => {
  'ngInject';
  $locationProvider.hashPrefix('');

  const middlewares = ['apiMiddleware'];
  let reducer = combineReducers({repos, contributors});
  $ngReduxProvider.createStoreWith(reducer, middlewares);
};
