import {BaseElement} from '../src/ui/base-element.js';
import {usersObj} from './data/user.js';
import {Image} from '../src/ui/image.js';
import {Card} from '../src/ui/card.js'
import {UserCard} from '../src/ui/user-card.js';
import {Search} from '../src/ui/search.js';


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

        let selectedValue = '';
        let search = new Search(selectedValue);

        let card = new Card();
        let userBlock = this.element.find('.users-block');
        search.appendToElement(userBlock);
        card.appendToElement(userBlock);

        let userCard = new UserCard();
        let cardBody = this.element.find('.card__body');
        userCard.appendToElement(cardBody);

        // let searchUsers = this.element.find('#search_input');
        // searchUsers.change((event) => {
        //     this.selectedValue = searchUsers.val();
        //         return selectedValue;
        //     //console.log(this.selectedValue);
        // });
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