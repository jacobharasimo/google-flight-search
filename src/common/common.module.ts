import * as angular from 'angular';
import {ErrorPageModule} from './error-page';
import {Flights} from './http/flights.service';
import {MinutesToDuration} from './filter/minutes-hours.filter';
export const CommonModule = angular
    .module('app.common', [
        ErrorPageModule
    ])
    .service('flights', Flights)
    .filter('minutesToDuration', MinutesToDuration)
    .name;

export {IFlights} from './http/flights.service';
