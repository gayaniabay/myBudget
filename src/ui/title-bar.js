import {BaseElement} from './base-element.js';

export class TitleBar extends BaseElement {
    
    constructor(title) {
        super();
        this.title = title;
        this.links = [];
    }
    
    addLink(title, href) {
        this.links.push({
            title,
            href
        });
    }   
    
    getElementString() {
        let links = '';
        for (let link of this.links)
            links += `<a
                        >${link.title}</a>\n`;
        return `
                <header>
                    <div>
                    <!-- Title -->
                    <span></span>
                    <!-- Add spacer, to align navigation to the right -->
                    <div class="mdl-layout-spacer"></div>
                    <!-- Navigation. We hide it in small screens. -->
                    <nav>
                       
                    </nav>
                    </div>
                </header>
                <main class="mdl-layout__content">
                    <div class="page-content">test<!-- Your content goes here --></div>
                </main>
        `;
    }
}