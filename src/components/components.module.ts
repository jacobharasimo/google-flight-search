import * as angular from 'angular';
import {FlightSearchModule} from './flight-search';
export const ComponentsModule = angular
    .module('app.components', [
        FlightSearchModule
    ])
    .name;
