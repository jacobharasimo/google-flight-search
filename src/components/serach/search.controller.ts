import {IFlights} from '../../common/http/flights.service';
export class Search implements ng.IController {
    static $inject = [
        'flights'
    ];

    constructor(public flights: IFlights) {

    }

    resultsFound() {
        return this.flights.flightList.length > 0;
    }
}
