// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';
import 'ng-redux';

/**
 * Import Module Components
 */
import { App } from './components/app/app.component';
import { Root } from './components/root/root.component';

/**
 * Import Module Configuration
 */
import { configuration } from './core.configuration';
import { routing } from './core.routes';
import { AppHeader } from './components/header/header.component';
import { apiMiddleware } from './middlewares/api.middleware';

export const moduleName =
  angular.module('application.core', [
      'ui.router',
      'ngRedux'
  ])

  .factory('apiMiddleware', apiMiddleware)
  /**
   * Register Module Components
   */
  .component(AppHeader.selector, AppHeader)
  .component(App.selector, App)
  .component(Root.selector, Root)

  /**
   * Register Module Configuration
   */
  .config(configuration)
  .config(routing)
  .name;
