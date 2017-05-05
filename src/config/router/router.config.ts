import {Search} from '../../components/serach/search.controller';
export class RouterConfig {
    public static $inject = [
        '$stateProvider',
        '$urlRouterProvider'
    ];

    constructor($stateProvider: ng.ui.IStateProvider,
                $urlRouterProvider: ng.ui.IUrlRouterProvider) {
        // pass through / to main state
        $urlRouterProvider.when('', '/');
        // unrecognized routes go to error state
        $urlRouterProvider.otherwise('/404');
        $stateProvider
            .state('app', {
                url: '/',
                views: {
                    'content@': {
                        template: require('../../components/serach/search.html'),
                        controller: Search,
                        controllerAs: '$ctrl'
                    }
                }
            })
        ;
    }
}
