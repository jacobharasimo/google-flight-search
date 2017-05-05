import * as angular from 'angular';
import 'angular-ui-bootstrap';
import {FlightResultsComponent} from './flight-results.component';
import './flight-results.scss';

export const FlightResultsModule = angular.module('flightResults',
    [
        'ui.bootstrap'
    ])
    .component('flightResults', FlightResultsComponent)
    .name;
