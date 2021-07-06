public with sharing class RecipeController {
    @AuraEnabled(cacheable=true)
    public static List<Recipe_Line_Item__c> getLineItems(Id recipeId){
        return [SELECT Id, Formatted_Name__c, Note__c FROM Recipe_Line_Item__c WHERE Recipe__c = :recipeId];
    }
}
