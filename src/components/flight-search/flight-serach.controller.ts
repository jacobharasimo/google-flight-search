// secret : d0e8e7a7c0eccef
// key:
import {IFlights, IIata, IQxpExpress, IQxpExpressSlice} from '../../common/http/flights.service';
export class FlightSearch implements ng.IController {
    static $inject = [
        'flights',
        '$q'
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
    numberAdults: number = 0;
    destinationAirportName: string;
    destinationAirport: IIata;
    originAirportName: string;
    originAirport: IIata;

    constructor(public flights: IFlights,
                public $q) {
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
            let payload: IQxpExpress;
            payload = {
                request: {
                    passengers: {
                        adultCount: this.numberAdults,
                        childCount: this.numberChildren,
                        infantInSeatCount: this.numberInfants
                    },
                    slice: []
                }
            };
            payload.request.slice.push(
                {
                    origin: this.originAirport.iata,
                    destination: this.destinationAirport.iata,
                    date: this.departureDate.toISOString().split('T')[0]
                } as IQxpExpressSlice);

            if (this.travelType === 'roundtrip') {
                payload.request.slice.push(
                    {
                        origin: this.destinationAirport.iata,
                        destination: this.originAirport.iata,
                        date: this.returnDate.toISOString().split('T')[0]
                    } as IQxpExpressSlice);
            }

            return this.flights.searchFlights(payload)
                .then((response) => {
                    console.log('response', response);
                    return response;
                });
        }
    }

    selectDestination(item) {
        this.destinationAirport = item;
    }

    selectOrigin(item) {
        this.originAirport = item;
    }

    isValidPassangers() {
        return this.numberAdults > 0 || this.numberChildren > 0 || this.numberInfants > 0;
    }
}
