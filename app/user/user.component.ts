class UserController implements ng.IController {
    users: any;
}

export class UserComponent implements ng.IComponentOptions {
    static NAME: string = 'userView';
    controller: any;
    templateUrl: any;

    constructor() {
        this.controller = UserController;
        this.templateUrl = require('./user.html');
    }
}
