/**
 * @description       : 
 * @author            : Anushka Dixit
 * @group             : 
 * @last modified on  : 23-02-2023
 * @last modified by  : Anushka Dixit
 * Modifications Log
 * Ver   Date         Author          Modification
 * 1.0   23-02-2023   Anushka Dixit   Initial Version
**/
import { LightningElement, track ,api} from 'lwc';
import vsics from "@salesforce/resourceUrl/vsics"; 
import vit from "@salesforce/resourceUrl/vit"; 
export default class MyEducationPage extends LightningElement {
    @track vit=vit;
    @track vsics=vsics;
    @api themeClass;
}