// secret : d0e8e7a7c0eccef
// key:
import {IFlights, IIata, IQxpExpress, IQxpExpressSlice} from '../../common/http/flights.service';
import * as angular from 'angular';
export class FlightSearch implements ng.IController {
    static $inject = [
        'flights'
    ];
    departureDateOpen: boolean;
    departureDate: Date;
    returnDateOpen: boolean;
    returnDate: Date;
    dateOptions: ng.ui.bootstrap.IDatepickerConfig;
    returnDateOptions: ng.ui.bootstrap.IDatepickerConfig;
    flightSearch: ng.IFormController;
    travelType: string;
    numberInfants: number = 0;
    numberChildren: number = 0;
    numberAdults: number = 1;
    destinationAirportName: string;
    originAirportName: string;

    constructor(public flights: IFlights) {
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
        this.flightSearch.$setSubmitted();
        angular.forEach(this.flightSearch.$error.required, (field) => {
            field.$setDirty();
        });
        if (this.flightSearch.$valid) {
            let payload: IQxpExpress;
            payload = {
                request: {
                    passengers: {
                        adultCount: this.numberAdults,
                        childCount: this.numberChildren,
                        infantInSeatCount: this.numberInfants
                    },
                    slice: []
                },
                solutions: 10
            };
            payload.request.slice.push(
                {
                    origin: this.flights.originAirport.iata,
                    destination: this.flights.destinationAirport.iata,
                    date: this.departureDate.toISOString().split('T')[0]
                } as IQxpExpressSlice);

            if (this.travelType === 'roundtrip') {
                payload.request.slice.push(
                    {
                        origin: this.flights.destinationAirport.iata,
                        destination: this.flights.originAirport.iata,
                        date: this.returnDate.toISOString().split('T')[0]
                    } as IQxpExpressSlice);
            }

            return this.flights.searchFlights(payload).then((response) => {
                return response;
            });
        }
    }

    selectDestination(item) {
        this.flights.destinationAirport = item;
    }

    selectOrigin(item) {
        this.flights.originAirport = item;
    }

    isValidPassengers() {
        return this.numberAdults > 0 || this.numberChildren > 0 || this.numberInfants > 0;
    }
}
