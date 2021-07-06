import { LightningElement, api, wire } from 'lwc';
import { getFieldDisplayValue, getFieldValue, getRecord } from 'lightning/uiRecordApi';
import RECIPE_NAME from '@salesforce/schema/Recipe__c.Name';
import LINE_INGREDIENT from '@salesforce/schema/Recipe_Line_Item__c.Formatted_Name__c';
import LINE_NOTE from '@salesforce/schema/Recipe_Line_Item__c.Note__c';
import getLineItems from '@salesforce/apex/RecipeController.getLineItems';

const COLUMNS = [
    { label: 'Ingredient', fieldName: LINE_INGREDIENT.fieldApiName, type: 'text'},
    { label: 'Note', fieldName: LINE_NOTE.fieldApiName, type: 'text'}
];

export default class RecipeDisplay extends LightningElement {
    @api recordId;
    @wire(getRecord, {recordId: '$recordId', fields : [RECIPE_NAME]}) recipe;
    get recipe_name() {
        return getFieldValue(this.recipe.data, RECIPE_NAME);
    };

    columns = COLUMNS;

    @wire(getLineItems, {recipeId: '$recordId'}) lineItems;
}