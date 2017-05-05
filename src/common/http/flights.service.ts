// google api: AIzaSyD9Dk_obrRm51Mke2h1L37Dy5b_Q-YryOg
// POST: https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyD9Dk_obrRm51Mke2h1L37Dy5b_Q-YryOg
export interface IFlights {
    search(...parms): any;
}
export class Flights implements IFlights {
    static $inject = [
        '$http'
    ];

    constructor(public $http: ng.IHttpService) {
    }

    search(...parms) {

        this.$http({
            method: 'POST',
            url: 'https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyD9Dk_obrRm51Mke2h1L37Dy5b_Q-YryOg'
        }).then(() => {
            //
        });
        return parms;
    }
}
