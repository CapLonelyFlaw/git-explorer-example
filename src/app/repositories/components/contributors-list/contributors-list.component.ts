/**
 * Import the Component styles
 */
import './contributors-list.components.scss';
import { User } from '../../models/user.model';

class ContributorsListController {
  contributors: Array<User>;
}

export class ContributorsList implements angular.IComponentOptions {
  static selector = 'contributorsList';
  static bindings = {
    contributors: '<'
  };
  static template = `
  <div class="contributors-list row" ng-repeat="contributor in $ctrl.contributors">
    <div class="col-3">
      <img ng-src="{{contributor.avatarUrl}}">
    </div>
    <div class="col-9">
      <a ng-href="{{contributor.htmlUrl}}" target="_blank">{{ contributor.name }}</a>
    </div>
  </div>
  `;
  static controller = ContributorsListController;
}
