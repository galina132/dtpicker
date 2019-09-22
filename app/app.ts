// app.ts
import * as angular from 'angular';
import * as moment from 'moment';
import 'angular-aria';
import 'angular-animate';
import 'angular-messages';
import 'angular-material';
import {module, element, bootstrap, ILogService} from 'angular';
import '@uirouter/angularjs';
import {AppComponent} from '../app/app.component';
import {HomeComponent} from '../app/home/home.component';
import {McDatesComponent} from '../app/mcdates/McDates.component';
import {UserComponent} from '../app/user/user.component';

export default angular.module('app', ['ngMaterial', 'ngMessages', 'ui.router'
])
    .config(['$stateProvider', '$urlRouterProvider', ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
        $stateProvider.state({
            name: 'app',
            url: '/app',
            component: AppComponent.NAME
        }).state(
            {
                name: 'app.home',
                url: '/home',
                component: HomeComponent.NAME
            }).state(
            {
                name: 'app.user',
                url: '/user?id',
                component: UserComponent.NAME,
            });

        $urlRouterProvider.otherwise('/app');
    }])
    .config(($mdDateLocaleProvider) => {
        $mdDateLocaleProvider.formatDate = (date) => {
            return (date !== null && typeof date !== 'undefined') ? moment(date).format('YYYY-MM-DD') : '';
        };
        $mdDateLocaleProvider.parseDate = (dateString) => {
            let m = moment(dateString, 'L', true);
            return m.isValid() ? m.toDate() : new Date(NaN);
        };

    })
    .run(() => {
        console.log(`Starting the 'app' module`);
    }).component(AppComponent.NAME, new AppComponent())
    .component(HomeComponent.NAME, new HomeComponent())
    .component(UserComponent.NAME, new UserComponent())
    .component(McDatesComponent.NAME, new McDatesComponent());
element(document).ready(() => {
    bootstrap(document, ['app']);
});
