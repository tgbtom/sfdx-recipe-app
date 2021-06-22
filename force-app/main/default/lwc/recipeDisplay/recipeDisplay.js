import { LightningElement, api, wire } from 'lwc';
import { getFieldDisplayValue, getFieldValue, getRecord } from 'lightning/uiRecordApi';
import RECIPE_NAME from '@salesforce/schema/Recipe__c.Name';

export default class RecipeDisplay extends LightningElement {
    @api recordId;
    @wire(getRecord, {recordId: '$recordId', fields : [RECIPE_NAME]}) recipe;
    get recipe_name() {
        return getFieldValue(this.recipe.data, RECIPE_NAME);
    }
}