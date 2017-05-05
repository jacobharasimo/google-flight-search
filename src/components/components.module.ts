import * as angular from 'angular';
import {FlightSearchModule} from './flight-search';
import {FlightResultsModule} from './flight-results';
import {SearchModule} from './serach';

export const ComponentsModule = angular
    .module('app.components', [
        FlightSearchModule,
        FlightResultsModule,
        SearchModule
    ])
    .name;
