import jquery from 'jquery';
import {BaseElement} from './base-element.js';
import {usersObj} from '../data/user.js';

export class Search extends BaseElement{

    constructor(selectedValue){
        super();
        this.data = usersObj;
        this.selectedValue = selectedValue;
    }
    createElement(){
        super.createElement();
        let searchUsers = this.element.find('#search_input');
        console.log(searchUsers);
        //let searchUsers = this.element.find('#search_input');
        searchUsers.change((event) => {
            this.selectedValue = searchUsers.val();
            console.log(this.selectedValue);
        });
    }
    getElementString(){
        let setOption = '';
        let list = '';

        let filterArr = this.data.filter(x => x._id == '5cd3a86eba15588d136efeb5');
        console.log(filterArr);
        for(let user of this.data){
            setOption += `
                <option id="${user._id}">${user.firstName} ${user.lastName}</option>
            `
            list += `<li>${user.firstName} ${user.lastName}</li>`
        }
        //console.log(filterArr);
        return `
                <input type="text" name="name" id="search_input">
                <h6 id="test">${this.selectedValue}</h6>
                <datalist id="huge_list">
                    ${setOption}
                </datalist>
                <ul>
                    ${list}
                </ul>
         `;
    }
}