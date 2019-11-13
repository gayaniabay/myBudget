import {ApplicationBase} from './framework/application-base.js';
import {HomePage} from './home-page.js';

import jquery from 'jquery';
import {UserCard} from './classes/user-card.js';
import {DebtCard} from './classes/debt-card.js';
import {usersObj} from './data/user.js';
import {Image} from './ui/image.js';
import {Card} from './ui/user-card.js';
import {TitleBar} from './ui/title-bar.js';

//import {CardDataService} from './services/card-data-service.js'

export class App extends ApplicationBase{

    constructor(){
        super('Debt mgt');
        this.addRoute('home', new HomePage(), true);
    }
}
export let application = new App();
application.show($('app-root'));
 