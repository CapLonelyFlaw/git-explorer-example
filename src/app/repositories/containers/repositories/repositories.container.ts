import ngRedux from 'ng-redux';
import * as ReposActions from '../../actions/repos.actions';
import { Repository } from '../../models/repository.model';
import { IReposState } from '../../reducers/repos.reducer';

/**
 * Import the Component styles
 */
import './repositories.container.scss';

class RepositoriesController {
  repos: Array<Repository> = [];
  actions: any;
  sort: 'asc' | 'desc' | 'none' = 'none';

  private $unsubscribe: () => void;

  constructor(private $ngRedux: ngRedux.INgRedux) {
      'ngInject';

      this.$unsubscribe = $ngRedux.connect(state => ({
        data: state.repos
      }), ReposActions)((state: {data: IReposState}, actions: any) => {
        this.actions = actions;
        this.repos = state.data.repos;
      });
  }

  $onInit() {
    this.actions.fetchRepos('javascript');
  }

  $onDestroy() {
    this.$unsubscribe();
  }

  toggleFavorite(repo: Repository) {
    this.actions.toggleFavorite(repo);
  }

  // TODO: if needed to sort repos in state for favorites view or other we can move this to reducer
  sortAsc() {
    this.sort = 'asc';
    this.repos.sort((a, b) => a.id - b.id);
  }

  sortDesc() {
    this.sort = 'desc';
    this.repos.sort((a, b) => b.id - a.id);
  }

  isAscSort() {
    return this.sort === 'asc';
  }

  isDescSort() {
    return this.sort === 'desc';
  }
}

export class RepositoriesContainer implements angular.IComponentOptions {
  static selector = 'repositories';
  static controller = RepositoriesController;
  static template = `
  <div class="row">
    <div class="col-md-12" ng-if="$ctrl.repos.length">
      <button class="btn btn-default" ng-class="{'btn-primary': $ctrl.isAscSort()}" ng-click="$ctrl.sortAsc()">Asc</button>
      <button class="btn btn-default" ng-class="{'btn-primary': $ctrl.isDescSort()}" ng-click="$ctrl.sortDesc()">Desc</button>

      <repositories-list repos="$ctrl.repos" on-toggle-favorite="$ctrl.toggleFavorite($event.repo)"></repositories-list>
    </div>
  </div>
  `;
}
