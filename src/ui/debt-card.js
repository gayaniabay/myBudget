import jquery from 'jquery';
import {BaseElement} from './base-element.js';

export class DebtCard extends BaseElement{

    constructor(data){
        super();
        this.data = data;
    }
    getElementString(){
        let debtCard = '';
        // ${d.escalate}
        for(let d of this.data){
            debtCard += `
                <div class="card__divider">
                        <div class="card__top">
                            <h4 class="col-3 no-padding">${d.category}</h4>
                            <div class="card__info text-right col-6">
                                <h4><lable>${d.payment}</lable> <span>${d.balance}</span></h4>
                            </div>
                            <span class="col-3 text-right no-padding escalate">
                                <button type="button" class="button">Escalate</button>
                                
                            </span>
                        </div>
                        <div class="card__info">
                            <lable>Bank</lable>
                            <span>${d.bank}</span>
                        </div>
                        <div class="card__info">
                            <lable>Description</lable>
                            <span>${d.description}</span>
                        </div>
                </div>  
            `
        }
        return `
            ${debtCard}
        `;
    }
}