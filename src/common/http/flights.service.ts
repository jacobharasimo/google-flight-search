export interface IFlights {
    flightList: any[];
    destinationAirport: IIata;
    originAirport: IIata;
    searchFlights(payload: IQxpExpress): ng.IPromise<any>;
    getAirportCode(val): any;
}
export interface IIata {
    name?: string;
    city?: string;
    iata?: string;
}
export interface IQxpExpressSlice {
    origin: string;
    destination: string;
    date: string;
}
export interface IQxpExpress {
    request: {
        passengers: {
            adultCount?: number,
            childCount?: number,
            infantInSeatCount?: number
        },
        slice?: IQxpExpressSlice[]
    };
    solutions: number;
}
export class Flights implements IFlights {
    static $inject = [
        '$http'
    ];
    flightList = [];
    destinationAirport: IIata = {};
    originAirport: IIata = {};
    readonly googleKey = 'AIzaSyD_SX_fQV1MQYDJbgoJA4LNN3dKMj_u9Tw';

    constructor(public $http: ng.IHttpService) {
    }

    getAirportCode(val) {
        let payload = {
            limit: 10,
            term: val
        };

        return this.$http({
            method: 'POST',
            url: 'https://www.air-port-codes.com/api/v1/autocomplete?term=' + val,
            data: payload,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'APC-Auth': '113b2ae60f',
                'APC-Auth-Secret': 'd0e8e7a7c0eccef'
            }
        })
            .then((response) => {
                const results = (response.data as any).airports;
                return results;
            });
    }

    searchFlights(payload: IQxpExpress) {
        return this.$http({
            method: 'POST',
            url: 'https://www.googleapis.com/qpxExpress/v1/trips/search?key=' + this.googleKey,
            data: payload
        }).then((response: any) => {
            this.flightList = response.data.trips.tripOption;
            return response.data.trips.tripOption;
        });
    }
}
