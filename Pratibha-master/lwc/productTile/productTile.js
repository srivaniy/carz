import { LightningElement, api, track } from 'lwc';
import IMAGE_RESOURCE from '@salesforce/resourceUrl/ProductImages';
/**
 * A presentation component to display a Product__c sObject. The provided
 * Product__c data must contain all fields used by this component.
 */
export default class ProductTile extends LightningElement {
    /** Whether the tile is draggable. */
    @api draggable;
    
    //@track productURL =IMAGE_RESOURCE+'/'+this.product.Picture_URL__c;
    /** constructor(){
        super();
        this.productURL = IMAGE_RESOURCE+'/'+this.product.Picture_URL__c;
    }**/
    _product;
    /** Product__c to display. */
    @api
    get product() {
        return this._product;
    }
    set product(value) {
        this._product = value;
        this.pictureUrl = IMAGE_RESOURCE+'/'+value.Picture_URL__c;
        this.name = value.Name;
        this.msrp = value.MSRP__c;
    }

    /** Product__c field values to display. */
    @track pictureUrl;
    @track name;
    @track msrp;

    handleClick() {
        const selectedEvent = new CustomEvent('selected', {
            detail: this.product.Id
        });
        this.dispatchEvent(selectedEvent);
    }

    handleDragStart(event) {
        event.dataTransfer.setData('product', JSON.stringify(this.product));
    }
}
