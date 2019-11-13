import jquery from 'jquery';

export class BaseElement{

    constructor(){
        this.element = null; //jquery object
    }

    appendToElement(el){
        this.createElement();
        el.append(this.element);
    }

    createElement(){
        let ele = this.getElementString();
        this.element = $(ele);
    }

    setStyleString(style) {
        this.styleString = style;
        console.log('foo');
    }
}
