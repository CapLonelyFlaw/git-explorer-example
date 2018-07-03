// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';

/**
 * Import Module Components
 */
import { ContributorsList } from './components/contributors-list/contributors-list.component';
import { RepositoriesList } from './components/repositories-list/repositories-list.component';

/**
 * Import Module Containers
 */
import { FavoritesContainer } from './containers/favorites/favorites.container';
import { RepositoriesContainer } from './containers/repositories/repositories.container';
import { ContributorsContainer } from './containers/contributors/contributors.container';

/**
 * Import Module Services
 */

/**
 * Import Module Routing
 */
import { routing } from './repositories.routes';

export const moduleName =
  angular.module('application.repositories', [
      'ui.router'
  ])

  /**
   * Register Module Components
   */
  .component(ContributorsList.selector, ContributorsList)
  .component(RepositoriesList.selector, RepositoriesList)

  /**
   * Register Module Containers
   */
  .component(RepositoriesContainer.selector, RepositoriesContainer)
  .component(ContributorsContainer.selector, ContributorsContainer)
  .component(FavoritesContainer.selector, FavoritesContainer)

  /**
   * Register Module Configuration
   */
  .config(routing)
  .name;
