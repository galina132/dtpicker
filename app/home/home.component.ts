import {Range} from '.././enums/enums';

class HomeController implements ng.IController {
    range: any = {
        From: 'С',
        To: 'По',
        Today: 'Сегодня',
        Yesterday: 'Вчера',
        TwoWeeksAgo: '2 недели назад',
        Month: 'Месяц',
        All: 'Все'
    };
    date: string;
    myDate = new Date();
    date1: string;
    date2: string;
    isOpen = false;

    changeDates():void {
        setTimeout(() => alert(this.date1 + '  :  ' + this.date2), 1500);
    }

    constructor() {
    }
}

export class HomeComponent implements ng.IComponentOptions {
    static NAME: string = 'homeView';
    controller: any;
    templateUrl: any;

    constructor() {
        this.controller = HomeController;
        this.templateUrl = require('./home.html');
    }
}
