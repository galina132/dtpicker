import {Range} from '.././enums/enums';
import * as moment from 'moment';
class McDatesController implements ng.IController {
    range = Range;
    public datefrom: string;
    public dateto: any;
    public mcchange: () => any;

    onlyWeekendsPredicate(date: Date): boolean {
        var day = date.getDay();
        return day === 0 || day === 6;
    }

    constructor() {
    }

    checkDateFrom(): void {
        this.datefrom = moment(this.datefrom).format('YYYY-MM-DD');
        this.mcchange();
    }

    checkDateTo(): void {
        this.dateto = moment(this.dateto).format('YYYY-MM-DD');
        this.mcchange();
    }
    setDates(d?:number):void {
        if(typeof d !== 'undefined' ) {
            this.dateto = (d >= 0)? moment().add(d, 'days').format('YYYY-MM-DD') :  moment(Date()).format('YYYY-MM-DD');
            this.datefrom = (d >= 0)? moment(Date()).format('YYYY-MM-DD') :  moment().subtract(-d, 'days').format('YYYY-MM-DD');
        } else {
            this.datefrom = null;
            this.dateto = null;
        }
        this.mcchange();
    }

}

export class McDatesComponent implements ng.IComponentOptions {
    public bindings: any;
    static NAME: string = 'mcdates';
    controller: any;
    templateUrl: any;

    constructor() {
        this.bindings = {
            datefrom: '=',
            dateto: '=',
            mcchange: '&'
        };

        this.controller = McDatesController;
        this.templateUrl = require('./mcdates.html');
    }
}
