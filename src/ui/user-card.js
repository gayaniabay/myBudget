import {BaseElement} from './base-element.js';

export class UserCard extends BaseElement{

    constructor(data){
        super();
        this.data = data;
    }
    getElementString(){
        let userCard = '';
        for(let user of this.data){
            userCard += `
                <div class="card__divider">
                        <div class="card__top">
                            <img src="${user.picture}" class="col-1 card__image"/>
                            <h4 class="col-7">${user.firstName} ${user.lastName}<span class="info-text padding-lr-5">${user.age}years</span></h4>
                            <span class="col-2 text-right no-padding">${user.category}</span>
                        </div>
                        <div class="flex-end">
                            <span class="padding-10">${user.phone}</span>
                            <span>${user.address}</span>
                        </div>
                </div>  
            `
        }
        return `
            ${userCard}
        `;
    }
}