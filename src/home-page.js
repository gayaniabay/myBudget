import {BaseElement} from '../src/ui/base-element.js';
import {usersObj} from './data/user.js';
import {Image} from '../src/ui/image.js';
import {UserCard} from '../src/ui/user-card.js';


export class HomePage extends BaseElement{

    constructor(fileName){
        super();
        this.fileName = fileName;
    }
    
    createElement() {
        super.createElement();
        
        let i = new Image('https://www.w3schools.com/w3images/avatar2.png');
        let imageBlock = this.element.find('.img-block');
        i.appendToElement(imageBlock);

        let userCard = new UserCard();
        let userBlock = this.element.find('.users-block');
        userCard.appendToElement(userBlock)
    }

    getElementString(){
        return `
                <div class="row">
                    <div class="col-6"> 
                        
                        <div class="users-block">
                        </div>
                    </div>
                    <div class="col-6 img-block">
                        
                    </div>
                </div>
         `;
    }
}