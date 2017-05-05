import {IFlights} from '../../common/http/flights.service';
export class FlightSearch implements ng.IController {
    static $inject = [
        '$log',
        'flights'
    ];
    departureDateOpen: boolean;
    departureDate: string;
    returnDateOpen: boolean;
    returnDate: string;
    dateOptions: ng.ui.bootstrap.IDatepickerConfig;
    returnDateOptions: ng.ui.bootstrap.IDatepickerConfig;

    flightSearch: any; // ng.IFormController;
    travelType: string;
    numberInfants: number;
    numberChildren: number;
    numberAdults: number;
    returnAirport: string;
    departureAirport: string;

    constructor(public $log: ng.ILogService, public flights: IFlights) {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth();
        const day = today.getDate();
        const maxDate = new Date(year + 1, month, day);
        this.dateOptions = {
            // dateDisabled: disabled,
            formatYear: 'yy',
            maxDate,
            minDate: today,
            startingDay: 1
        };

        this.returnDateOptions = {
            // dateDisabled: disabled,
            formatYear: 'yy',
            minDate: today,
            maxDate,
            startingDay: 1
        };

    }

    $onInit() {
        this.travelType = 'oneway';
        this.departureDate = undefined;
        this.returnDate = undefined;
        this.departureDateOpen = false;
        this.returnDateOpen = false;
    }

    canEnterDeparture() {
        return !this.departureDate;
    }

    openDepartureDate() {
        this.departureDateOpen = true;
    }

    openReturnDate() {
        this.returnDateOptions.minDate = new Date(this.departureDate);
        this.returnDateOpen = true;
    }

    serachFlights() {
        if (this.flightSearch.$valid) {
            this.$log.info('form valid');
        }
    }

    isValidPassangers() {
        return this.numberAdults > 0 || this.numberChildren > 0 || this.numberInfants > 0;
    }
}
