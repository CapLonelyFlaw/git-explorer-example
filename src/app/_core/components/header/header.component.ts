import './header.component.scss';

class AppHeaderController {

}

export class AppHeader implements angular.IComponentOptions {
    static selector = 'appHeader';

    static template = `
        <div class="row">
            <div class="col-9 logo">
                <a ui-sref="repositories">JS repositories</a>
            </div>
            <div class="col-3">
                <a ui-sref="favorites" class="btn btn-default btn-block">Favorites</a>
            </div>
        </div>
    `;
    static controller = AppHeaderController;
}
