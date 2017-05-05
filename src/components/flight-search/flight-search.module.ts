import * as angular from 'angular';
import './flight-search.scss';
import {FlightSearchComponent} from './flight-search.component';
import 'angular-ui-bootstrap';
import 'angular-messages';

export const FlightSearchModule = angular.module('flightSearch',
    [
        'ui.bootstrap',
        'ngMessages'
    ])
    .component('flightSearch', FlightSearchComponent)
    .name;
