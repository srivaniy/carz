import { LightningElement, api, track } from 'lwc';

/** Static Resources. */
import PRODUCTIMAGES_URL from '@salesforce/resourceUrl/ProductImages';

export default class Placeholder extends LightningElement {
    @api message;

    /** Url for bike logo. */
    @track logoUrl = PRODUCTIMAGES_URL + '/logo.svg';
}
