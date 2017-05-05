import * as angular from 'angular';
import {ErrorPageModule} from './error-page';
import {Flights} from './http/flights.service';
export const CommonModule = angular
    .module('app.common', [
        ErrorPageModule
    ])
    .service('flights', Flights)
    .name;

export {IFlights} from './http/flights.service';
