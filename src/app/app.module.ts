// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';

/**
 * Import Application Modules
 */
import { moduleName as coreModule } from './_core/core.module';
import { moduleName as repositoriesModule } from './repositories/repositories.module';

export const moduleName =
  angular.module('application', [
    coreModule,
    repositoriesModule
  ])
  .name;
