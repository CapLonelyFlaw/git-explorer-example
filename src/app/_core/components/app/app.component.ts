/**
 * Import the Component styles
 */
import './app.component.scss';

export class App implements angular.IComponentOptions {
    static selector = 'app';
    static template = `
        <app-header></app-header>
        <div class="app container" ui-view></div>`;
}
