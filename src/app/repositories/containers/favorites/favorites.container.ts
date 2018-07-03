import ngRedux from 'ng-redux';
import * as ReposActions from '../../actions/repos.actions';
import { Repository } from '../../models/repository.model';
import { IReposState } from '../../reducers/repos.reducer';

class FavoritesController {
  favorites: { [key: number]: Repository; };
  actions: any;

  private $unsubscribe: () => void;

  constructor(private $ngRedux: ngRedux.INgRedux) {
      'ngInject';

      this.$unsubscribe = $ngRedux.connect(state => ({
        data: state.repos
      }), ReposActions)((state: {data: IReposState}, actions: any) => {
        this.actions = actions;
        this.favorites = state.data.favorites;
      });
  }

  $onDestroy() {
    this.$unsubscribe();
  }

  toggleFavorite(repo: Repository) {
    this.actions.toggleFavorite(repo);
  }
}

export class FavoritesContainer implements angular.IComponentOptions {
  static selector = 'favorites';
  static controller = FavoritesController;
  static template = `
  <div class="row">
    <div class="col-md-12">
      <repositories-list repos="$ctrl.favorites" on-toggle-favorite="$ctrl.toggleFavorite($event.repo)"></repositories-list>
    </div>
  </div>
  `;
}
