import { Repository } from '../../models/repository.model';

/**
 * Import the Component styles
 */
import './repositories-list.component.scss';

class RepositoriesListController {
  // TODO: change types
  repos: Array<Repository>;
  onToggleFavorite: ($event: { $event: { repo: Repository }}) => void;

  toggleFavorite(repo: Repository) {
    this.onToggleFavorite({
      $event: { repo }
    });
  }
}

export class RepositoriesList implements angular.IComponentOptions {
  static selector = 'repositoriesList';
  static controller = RepositoriesListController;
  static bindings = {
    repos: '<',
    onToggleFavorite: '&'
  };
  static template = `
  <div class="repositories-list row" ng-repeat="repo in $ctrl.repos">
    <div class="col-3">
      <img ng-src="{{repo.owner.avatarUrl}}">
    </div>
    <div class="col-9">
      <div><a ng-href="{{repo.htmlUrl}}" target="_blank">{{ repo.name }}</a> by <span>{{ repo.owner.name }}</span></div>
      <div>{{ repo.description }}</div>
      <div class="row col-12 buttons">
        <a ui-sref="contributors({ repoId: repo.id })" class="btn btn-default btn-block col-12 col-sm-6">
          Contributors
        </a>
        <button class="btn btn-default col-12 col-sm-6" ng-click="$ctrl.toggleFavorite(repo)">
          {{repo.isFavorite ? 'Favorite' : 'Not Favorite'}}
        </button>
      </div>
    </div>
  </div>
  `;
}
