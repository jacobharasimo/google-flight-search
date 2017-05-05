import * as angular from 'angular';
import './flight-search.scss';
import {FlightSearchComponent} from './flight-search.component';
import 'angular-ui-bootstrap';
import 'angular-messages';
import 'angular-promise-buttons';

export const FlightSearchModule = angular.module('flightSearch',
    [
        'angularPromiseButtons',
        'ui.bootstrap',
        'ngMessages'
    ])
    .component('flightSearch', FlightSearchComponent)
    .config((angularPromiseButtonsProvider) => {
        angularPromiseButtonsProvider.extendConfig({
            spinnerTpl: `<span class="rotating glyphicon glyphicon-refresh"
                      aria-hidden="true"></span>`,
            disableBtn: true,
            btnLoadingClass: 'is-loading',
            addClassToCurrentBtnOnly: false,
            disableCurrentBtnOnly: false,
            minDuration: false,
            CLICK_EVENT: 'click',
            CLICK_ATTR: 'ngClick',
            SUBMIT_EVENT: 'submit',
            SUBMIT_ATTR: 'ngSubmit',
            BTN_SELECTOR: 'button'
        });
    })
    .name;
