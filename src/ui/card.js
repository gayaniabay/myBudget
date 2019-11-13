import {BaseElement} from './base-element.js';

export class Card extends BaseElement{

    constructor(){
        super();
    }

    getElementString(){
        return `
                <div class="card">
                    <div class="card__header">
                        <h3>Users in debt</h3>
                    </div>
                    <div class="card__body">
                        
                    </div>
                </div>
         `;
    }
}