/**
 * @description       : 
 * @author            : Anushka Dixit
 * @group             : 
 * @last modified on  : 27-02-2023
 * @last modified by  : Anushka Dixit
 * Modifications Log
 * Ver   Date         Author          Modification
 * 1.0   20-02-2023   Anushka Dixit   Initial Version
**/
import { LightningElement, track, api } from 'lwc';
import codeImage from '@salesforce/resourceUrl/code';
import FontAwesome from '@salesforce/resourceUrl/FontAwesome';
import BANNER_DATA from '@salesforce/resourceUrl/resume';
import { loadStyle } from 'lightning/platformResourceLoader';
import New_Contact__object from '@salesforce/schema/New_Contact__c';
import NAME_FIELD from '@salesforce/schema/New_Contact__c.Name';
import Email from '@salesforce/schema/New_Contact__c.Email__c';
import Description_FIELD from '@salesforce/schema/New_Contact__c.Description__c';
import Rating_FIELD from '@salesforce/schema/New_Contact__c.Rating__c';
export default class MyPortfolioHome extends LightningElement {
  
    @api themeClass;
    codeImageUrl= codeImage;
     
     renderedCallback() {
             Promise.all([
                 loadStyle(this, FontAwesome + '/Font-Awesome-4.7.0/css/font-awesome.css')
             ]).catch(error => {
                  // eslint-disable-next-line no-console
                  console.log(error);
                  
             });
    }
    resumeBtn = BANNER_DATA;
    get myName(){
        return 'Anushka Dixit';
    }
    get myProfessionField(){
        return 'Salesforce';
    }
    get myProfession(){
        return 'Developer';
    }
    get myBio(){
        let bio = 'I specialize in developing and deploying responsive web applications';
        return bio;
    }
     
    objectName = New_Contact__object ;
    fieldList = [NAME_FIELD, Email, Description_FIELD, Rating_FIELD];
    
    successHandler(event){
        console.log(event.detail.id);
        const toastEvent = new ShowToastEvent({
            title:"Account created",
            message:"Record ID: " + event.detail.id,
            variant:"success"
        });
        this.dispatchEvent(toastEvent);
    }
      
     
   
}