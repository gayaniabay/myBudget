import {BaseElement} from './base-element.js';

export class Card extends BaseElement{

    constructor(cardHeader){
        super();
        this.cardHeader = cardHeader;
    }

    getElementString(){
        return `
                <div class="card">
                    <div class="card__header">
                        <h3>${this.cardHeader}</h3>
                    </div>
                    <div class="card__body">
                        <div id="card-list">
                        </div>
                    </div>
                </div>
         `;
    }
}