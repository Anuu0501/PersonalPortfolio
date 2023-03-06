/**
 * @description       : 
 * @author            : Anushka Dixit
 * @group             : 
 * @last modified on  : 21-02-2023
 * @last modified by  : Anushka Dixit 
 * Modifications Log
 * Ver   Date         Author          Modification
 * 1.0   21-02-2023   Anushka Dixit   Initial Version
**/
import { LightningElement, api } from 'lwc';
import contactMeImage from '@salesforce/resourceUrl/code';
export default class PortfolioContactCmpPage extends LightningElement {
    @api themeClass;
    codeImageUrl = contactMeImage;
}