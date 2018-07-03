import { ContributorsContainer } from './containers/contributors/contributors.container';
import { RepositoriesContainer } from './containers/repositories/repositories.container';
import { FavoritesContainer } from './containers/favorites/favorites.container';


export const routing = ($stateProvider: angular.ui.IStateProvider) => {
  'ngInject';
  $stateProvider

    .state('contributors', {
      parent: 'app',
      url: '/contributors/:repoId',
      component: ContributorsContainer.selector
    })

    .state('repositories', {
      parent: 'app',
      url: '/repositories',
      component: RepositoriesContainer.selector
    })

    .state('favorites', {
      parent: 'app',
      url: '/favorites',
      component: FavoritesContainer.selector
    });
};
