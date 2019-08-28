import { createElement } from 'lwc';
import Placeholder from 'c/placeholder';

describe('c-placeholder', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('sets img url to be ProductImages resource', () => {
        const element = createElement('c-placeholder', {
            is: Placeholder
        });
        document.body.appendChild(element);
        const img = element.shadowRoot.querySelector('img');
        // By default @salesforce/lwc-jest resolves the
        // @salesforce/resourceUrl/ProductImages import to "ProductImages"
        expect(img.src).toMatch(/\/ProductImages\//);
    });
});
