/**
 * @description       : 
 * @author            : Anushka Dixit
 * @group             : 
 * @last modified on  : 20-02-2023
 * @last modified by  : Anushka Dixit 
 * Modifications Log
 * Ver   Date         Author          Modification
 * 1.0   20-02-2023   Anushka Dixit   Initial Version
**/
import { LightningElement, api } from 'lwc';
import coderSkillImage from '@salesforce/resourceUrl/skillCoder';
export default class MyPortfolioSkillsPage extends LightningElement {
    @api themeClass;
    codeImageUrl = coderSkillImage;
}