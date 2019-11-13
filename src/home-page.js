import {BaseElement} from '../src/ui/base-element.js';
import {usersObj} from './data/user.js';
import {debtsObj} from './data/debts.js'
import {Card} from '../src/ui/card.js'
import {UserCard} from '../src/ui/user-card.js';
import {DebtCard} from '../src/ui/debt-card.js';


export let filteredObj;
export let debtFilteredObj;

export class HomePage extends BaseElement{

    constructor(selectedValue){
        super();
        this.data = usersObj;
        this.filteredObj = filteredObj;
        this.debtData = debtsObj;
        this.debtFilteredObj = debtFilteredObj;
        this.selectedValue = selectedValue;
    }
    
    createElement() {
        super.createElement();

        let selectedValue = '';
        let selectedId = '';
        

        let card = new Card('User in debt');
        let userBlock = this.element.find('.users-block');
        card.appendToElement(userBlock);

        let cardDebt = new Card('Debts');
        let debtBlock = this.element.find('.debt-block');
        cardDebt.appendToElement(debtBlock);

        let userCard = new UserCard(this.data);
        let userCardList = this.element.find('.users-block #card-list');
        let userCardData = this.element.find('.users-block .card__body');
        userCard.appendToElement(userCardList);

        let debtCard = new DebtCard(this.debtData);
        let debtCardList = this.element.find('.debt-block #card-list');
        let debtCardData = this.element.find('.debt-block .card__body');
        debtCard.appendToElement(debtCardList);


        let searchUsers = this.element.find('#search_input');
        searchUsers.change((event) => {
            this.selectedValue = searchUsers.val();

            //find selected item
            this.id = $('#data_list').find('option[value="' +this.selectedValue + '"]').attr('id');
            this.filteredObj = this.data.filter(x => x._id == this.id);
            console.log(this.filteredObj);

            //display selected item
            let userCardFiltered = new UserCard(this.filteredObj);
            $(userCardList).remove();
            $('.users-block .card__divider').remove();
            $(userCardList).replaceWith(userCardFiltered.appendToElement(userCardData));
        });

        let searchCategory = this.element.find('#search_input_debt');
        searchCategory.change((event) => {
            this.selectedValue = searchCategory.val();

            //find selected item
            this.id = $('#data_list_debt').find('option[value="' +this.selectedValue + '"]').attr('id');

            this.debtFilteredObj = this.debtData.filter(x => x._id == this.id);

            //display selected item
            let debtCardFiltered = new DebtCard(this.debtFilteredObj);
            $(debtCardList).remove();
            $('.debt-block .card__divider').remove();
            $(debtCardList).replaceWith(debtCardFiltered.appendToElement(debtCardData));
        });
        
    }
    setStyleString(){
        
    }
    getElementString(){
        let setOption = '';
        let list = '';
        let setDebtOption = '';
       
        for(let user of this.data){
            setOption += `
                <option value="${user.firstName} ${user.lastName}" id="${user._id}">${user.firstName} ${user.lastName}</option>
            `
        };
        for(let category of this.debtData){
            setDebtOption += `
                <option value="${category.description}" id="${category._id}">${category.description}</option>
            `
        }
        
        return `
                <div class="row">
                    <div class="col-6"> 
                        <div class="users-block">
                            <div class="search">
                                <datalist id="data_list">
                                    <select name="data">
                                        ${setOption}
                                    </select>
                                </datalist>
                                <input type="text" name="name" id="search_input" value="" list="data_list" placeholder="Search by username">
                            </div>
                        </div>
                    </div>
                    <div class="col-6 debt-block">
                        <div class="search">
                            <datalist id="data_list_debt">
                                <select name="data">
                                    ${setDebtOption}
                                </select>
                            </datalist>
                            <input type="text" name="name" id="search_input_debt" value="" list="data_list_debt" placeholder="Search by debt description">
                        </div>
                    </div>
                </div>
         `;
    }
    
}
