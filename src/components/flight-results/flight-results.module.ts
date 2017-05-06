import * as angular from 'angular';
import 'angular-ui-bootstrap';
import {FlightResultsComponent} from './flight-results.component';
import './flight-results.scss';
import 'angular-sanitize';
export const FlightResultsModule = angular.module('flightResults',
    [
        'ui.bootstrap',
        'ngSanitize'
    ])
    .component('flightResults', FlightResultsComponent)
    .name;
