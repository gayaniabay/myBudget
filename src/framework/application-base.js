import jquery from 'jquery';
import {UserCard} from '../classes/user-card.js';
import {DebtCard} from '../classes/debt-card.js';
import {usersObj} from '../data/user.js';
import {TitleBar} from '../ui/title-bar.js';
import {Image} from '../ui/image.js';
import {Card} from '../ui/user-card.js';

export class ApplicationBase{
    constructor(title){
        this.title = title;
        this.titleBar = new TitleBar(this.title);
        this.defaultRoute = null;
        this.routeMap = {};
    }

    activateRoute(route){
        let content = this.titleBar.element.find('.page-content');
        content.empty();

        this.routeMap[route].appendToElement(content);
    }

    addRoute(id, pageObject, defaultRoute = false){
        this.titleBar.addLink(id, '');
        this.routeMap[id] = pageObject;

        if(defaultRoute){
            this.defaultRoute = id;
        }
    }
    show(element){

        this.titleBar.appendToElement(element);
        
        this.titleBar.element.find('.mdl-navigation__link').click((event) => {
            let route = event.target.innerHTML;
            this.activateRoute(route);
        });
        
        if(this.defaultRoute){
            this.activateRoute(this.defaultRoute);
        }
    }
}