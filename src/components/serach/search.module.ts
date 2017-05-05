import * as angular from 'angular';
import './search.scss';
import {Search} from './search.controller';

export const SearchModule = angular.module('search',
    [
    ])
    .controller('search', Search)
    .name;
