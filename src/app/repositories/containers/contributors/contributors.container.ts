import ngRedux from 'ng-redux';

import * as ReposActions from '../../actions/repos.actions';
import { IContributorsState } from '../../reducers/contributors.reduces';
import { User } from '../../models/user.model';

class ContributorsController {
  contributors: Array<User>;
  actions: any;

  private $unsubscribe: () => void;

  constructor(private $ngRedux: ngRedux.INgRedux, private $stateParams: angular.ui.IStateParamsService) {
    'ngInject';

    this.$unsubscribe = $ngRedux.connect(state => ({
      data: state.contributors
    }), ReposActions)((state: {data: IContributorsState}, actions: any) => {
      this.actions = actions;
      this.contributors = state.data.items;
    });
  }

  $onInit() {
    this.actions.fetchContributors(this.$stateParams.repoId);
  }

  $onDestroy() {
    this.$unsubscribe();
  }
}

export class ContributorsContainer implements angular.IComponentOptions {
  static selector = 'contributors';
  static controller = ContributorsController;
  static template = `
  <div class="row">
    <div class="col-md-12">
      <contributors-list contributors="$ctrl.contributors"></contributors-list>
    </div>
  </div>
  `;
}
