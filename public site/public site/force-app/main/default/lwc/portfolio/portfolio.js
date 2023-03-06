/**
 * @description       : 
 * @author            : Anushka Dixit
 * @group             : 
 * @last modified on  : 24-02-2023
 * @last modified by  : Anushka Dixit
 * Modifications Log
 * Ver   Date         Author          Modification
 * 1.0   21-02-2023   Anushka Dixit   Initial Version
**/
import { LightningElement, track } from 'lwc';
import linkedin from "@salesforce/resourceUrl/linkedin"; 
import trailhead from "@salesforce/resourceUrl/trailhead"; 
import insta from "@salesforce/resourceUrl/instagram"; 
export default class portfolio extends LightningElement {
  @track defaultThemeLight = true;
   @track showHomePage = true;
   @track showSkillsPage = false;
   @track handleEducationClick1 = false;    
   @track linkedin=linkedin;
   @track trailhead=trailhead;
   @track instagram=insta;
get themeClass(){
     let darkTheme = 'dark slds-p-left_xx-large slds-grid slds-align_absolute-center';
     let lightTheme = 'light slds-p-left_xx-large slds-grid slds-align_absolute-center';
     if(this.defaultThemeLight){
         return lightTheme;
     }else{
         return darkTheme;
     }
     
 }

 changeTheme(){
     console.log('clicked');
     if(this.defaultThemeLight){
         this.defaultThemeLight = false;
     }else{
         this.defaultThemeLight = true;
     }
 }

 handleHomeClick(){
       console.log('handleHomeClick');
     this.showSkillsPage = false;
     this.handleEducationClick1 = false;
     this.showHomePage = true;
      console.log('this.showHomePage'+this.showHomePage);
     console.log('this.showSkillsPage'+this.showSkillsPage);
 }

 handleSkillsClick(){
     console.log('handleSkillsClick');
     this.showHomePage = false;
     this.handleEducationClick1 = false;
     this.showSkillsPage = true;
     console.log('this.showHomePage'+this.showHomePage);
     console.log('this.showSkillsPage'+this.showSkillsPage);
 }

 handleEducationClick(){
       this.showHomePage = false;
     this.showSkillsPage = false;
     this.handleEducationClick1 = true;
 }

//  CHATBOT

//  @track initESW = function(gslbBaseURL) {
//     embedded_svc.settings.displayHelpButton = true; //Or false
//     embedded_svc.settings.language = ''; //For example, enter 'en' or 'en-US'

//     //embedded_svc.settings.defaultMinimizedText = '...'; //(Defaults to Chat with an Expert)
//     //embedded_svc.settings.disabledMinimizedText = '...'; //(Defaults to Agent Offline)

//     //embedded_svc.settings.loadingText = ''; //(Defaults to Loading)
//     //embedded_svc.settings.storageDomain = 'yourdomain.com'; //(Sets the domain for your deployment so that visitors can navigate subdomains during a chat session)

//     // Settings for Chat
//     //embedded_svc.settings.directToButtonRouting = function(prechatFormData) {
//       // Dynamically changes the button ID based on what the visitor enters in the pre-chat form.
//       // Returns a valid button ID.
//     //};
//     //embedded_svc.settings.prepopulatedPrechatFields = {}; //Sets the auto-population of pre-chat form fields
//     //embedded_svc.settings.fallbackRouting = []; //An array of button IDs, user IDs, or userId_buttonId
//     //embedded_svc.settings.offlineSupportMinimizedText = '...'; //(Defaults to Contact Us)

//     embedded_svc.settings.enabledFeatures = ['LiveAgent'];
//     embedded_svc.settings.entryFeature = 'LiveAgent';

//     embedded_svc.init(
//       'https://anushka999-dev-ed.develop.my.salesforce.com',
//       'https://anushka999-dev-ed.develop.my.salesforce-sites.com/anushkaportfolio',
//       gslbBaseURL,
//       '00D2w00000QvCDN',
//       'Q_A',
//       {
//         baseLiveAgentContentURL: 'https://c.la2-c2-hnd.salesforceliveagent.com/content',
//         deploymentId: '5722w000000V1Ws',
//         buttonId: '5732w000000V57d',
//         baseLiveAgentURL: 'https://d.la2-c2-hnd.salesforceliveagent.com/chat',
//         eswLiveAgentDevName: 'Q_A',
//         isOfflineSupportEnabled: true
//       }
//     );
//   };

//   if (!window.embedded_svc) {
//     var s = document.createElement('script');
//     s.setAttribute('src', 'https://anushka999-dev-ed.develop.my.salesforce.com/embeddedservice/5.0/esw.min.js');
//     s.onload = function() {
//       initESW(null);
//     };
//     document.body.appendChild(s);
//   } else {
//     initESW('https://service.force.com');
//   }
   
}