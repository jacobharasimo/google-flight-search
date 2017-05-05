import {IFlights} from '../../common/http/flights.service';
export class FlightResults implements ng.IController {
    static $inject = [
        'flights'
    ];

    constructor(public flights: IFlights) {
        console.log('flights :', flights);
    }
}
