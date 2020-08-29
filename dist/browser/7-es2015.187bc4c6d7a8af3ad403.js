(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{FuNe:function(l,n,e){"use strict";e.r(n);var u=e("8Y7J");class a{}var t=e("pMnS"),i=e("Bh3D"),r=e("aIkE"),s=e("Gi4r"),o=e("cUpR"),b=e("p/lx"),c=e("DHxB");class d{constructor(l){this.h1="AHEM - Ad-Hoc Temporary Email Server API Documentation",this.h2="",this.apiCalls=[{httpMethod:"POST",uriPath:b.a.properties.serverBaseUri+"/auth/authenticate",headers:[],parameters:"{}",description:"Returns an access token associated with the requesting IP address."},{httpMethod:"POST",uriPath:b.a.properties.serverBaseUri+"/api/mailbox/autocomplete",headers:[],parameters:'{ "prefix":[string] }',description:"Returns a list of mailboxes starting with the prefix"},{httpMethod:"GET",uriPath:b.a.properties.serverBaseUri+"/api/properties",headers:[],parameters:"",description:"Returns various server properties and settings"},{httpMethod:"GET",uriPath:b.a.properties.serverBaseUri+"/api/mailbox/{mailbox}",headers:[],parameters:"",description:"returns a list of the email objects in the mailbox"},{httpMethod:"DELETE",uriPath:b.a.properties.serverBaseUri+"/api/mailbox/{mailbox}",headers:[],parameters:"",description:"Deletes a whole mailbox"},{httpMethod:"GET",uriPath:b.a.properties.serverBaseUri+"/api/mailbox/{mailbox}/{emailId}",headers:[],parameters:"",description:"Returns the contents of a specific email"},{httpMethod:"DELETE",uriPath:b.a.properties.serverBaseUri+"/api/mailbox/{mailbox}/{emailId}",headers:[],parameters:"",description:"Delete an emails"},{httpMethod:"PATCH",uriPath:b.a.properties.serverBaseUri+"/api/mailbox/{acount}/{emailId}",headers:[],parameters:'{"isRead" : [boolean]}',description:"Updates the emailInfo object (representation of the email meta data in the user's mailbox. Currently, only the isRead field is supported."},{httpMethod:"GET",uriPath:b.a.properties.serverBaseUri+"/api/mailbox/{mailbox}/{emailId}/attachments/{filename}",headers:[],parameters:"",description:"Downloads a specific attachment on an email"}],l.setTitle("AHEM - API Documentation"),l.updateMetaTag({name:"description",content:"AHEM - Ad-Hoc Email - API Documentation. "})}ngOnInit(){}}var m=u.qb({encapsulation:0,styles:[[".api-call[_ngcontent-%COMP%]{margin:20px}@media screen and (min-width:720px){.mat-column-uriPath[_ngcontent-%COMP%]{min-width:400px}}.iframe-container[_ngcontent-%COMP%]{position:relative;overflow:hidden;padding-top:56.25%}iframe[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1;border:0;position:absolute;top:0;left:0;width:100%;height:100%}"]],data:{}});function h(l){return u.Ob(0,[(l()(),u.sb(0,0,null,null,1,"app-banner",[],null,null,null,i.b,i.a)),u.rb(1,114688,null,0,r.a,[s.d,o.b],{showMailboxSelector:[0,"showMailboxSelector"],h1:[1,"h1"],h2:[2,"h2"]},null),(l()(),u.sb(2,0,null,null,1,"div",[["class","ahem-centered ahem-doc-api iframe-container"]],null,null,null,null,null)),(l()(),u.sb(3,0,null,null,0,"iframe",[["src","/api-docs"]],null,null,null,null,null))],(function(l,n){var e=n.component;l(n,1,0,!1,e.h1,e.h2)}),null)}function p(l){return u.Ob(0,[(l()(),u.sb(0,0,null,null,1,"app-api-documentation",[],null,null,null,h,m)),u.rb(1,114688,null,0,d,[c.a],null,null)],(function(l,n){l(n,1,0)}),null)}var v=u.ob("app-api-documentation",d,p,{},{},[]),M=e("lawv"),f=e("lzlj"),E=e("igqZ"),w=e("omvX"),g=e("TtEo"),y=e("02hT"),A=e("SVse");class C{constructor(l){this.h1="AHEM - Ad Hoc Disposable Temporary Email FAQ",this.h2="Frequently Asked Questions",this.properties=b.a.properties,l.setTitle("AHEM - Ad-Hoc Email FAQ"),l.updateMetaTag({name:"description",content:"AHEM - Ad Hoc Email Service - Frequently Asked Questions."})}ngOnInit(){}min(l,n){return Math.min(l,n)}}var H=u.qb({encapsulation:0,styles:[["[_nghost-%COMP%]{font-weight:100}mat-card[_ngcontent-%COMP%]{max-width:400px}"]],data:{}});function x(l){return u.Ob(0,[(l()(),u.sb(0,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u.Mb(1,null,["",""]))],null,(function(l,n){l(n,1,0,n.context.$implicit)}))}function I(l){return u.Ob(0,[u.Gb(0,M.a,[[2,M.c]]),(l()(),u.sb(1,0,null,null,1,"app-banner",[],null,null,null,i.b,i.a)),u.rb(2,114688,null,0,r.a,[s.d,o.b],{showMailboxSelector:[0,"showMailboxSelector"],h1:[1,"h1"],h2:[2,"h2"]},null),(l()(),u.sb(3,0,null,null,124,"div",[["class","ahem-centered ahem-doc-api"]],null,null,null,null,null)),(l()(),u.sb(4,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["What is AHEM?"])),(l()(),u.sb(6,0,null,null,0,"p",[],null,null,null,null,null)),(l()(),u.sb(7,0,null,null,120,"div",[["class","ahem-definition-of"]],null,null,null,null,null)),(l()(),u.sb(8,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["According to "])),(l()(),u.sb(10,0,null,null,1,"a",[["href","https://www.merriam-webster.com/dictionary/ahem"],["target","_blank"]],null,null,null,null,null)),(l()(),u.Mb(-1,null,["Merriam-Webster"])),(l()(),u.Mb(-1,null,[", the definition of AHEM is:"])),(l()(),u.sb(13,0,null,null,10,"mat-card",[["class","mat-card"]],[[2,"_mat-animation-noopable",null]],null,null,f.d,f.a)),u.rb(14,49152,null,0,E.a,[[2,w.a]],null,null),(l()(),u.sb(15,0,null,0,2,"mat-card-title",[["class","mat-card-title"]],null,null,null,null,null)),u.rb(16,16384,null,0,E.f,[],null,null),(l()(),u.Mb(-1,null,["ahem"])),(l()(),u.sb(18,0,null,0,5,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),u.rb(19,16384,null,0,E.b,[],null,null),(l()(),u.sb(20,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["interjection \\ a throat-clearing sound; often read as \u0259-\u02c8hem ; \\"])),(l()(),u.sb(22,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["\u2014used especially to attract attention or to express disapproval or embarrassment"])),(l()(),u.sb(24,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.sb(25,0,null,null,2,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),u.rb(26,16384,null,0,E.b,[],null,null),(l()(),u.Mb(-1,null,[" As defined above, AHEM comes and goes like a throat clearing sound. It wants your attention, but in a disapproving way. "])),(l()(),u.sb(28,0,null,null,1,"mat-divider",[["class","mat-divider"],["role","separator"]],[[1,"aria-orientation",0],[2,"mat-divider-vertical",null],[2,"mat-divider-horizontal",null],[2,"mat-divider-inset",null]],null,null,g.b,g.a)),u.rb(29,49152,null,0,y.a,[],null,null),(l()(),u.sb(30,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["Come on! Seriously, what is AHEM Ad Hoc Disposable Temporary Email?!"])),(l()(),u.sb(32,0,null,null,30,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),u.rb(33,16384,null,0,E.b,[],null,null),(l()(),u.Mb(-1,null,[" AHEM is a free ad-hoc disposable temporary Email service. "])),(l()(),u.sb(35,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.sb(36,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["Ad-hoc"])),(l()(),u.Mb(-1,null,[" - a mailbox is created for your temporary email address as soon as you need it, just by sending it an email."])),(l()(),u.sb(39,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.sb(40,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["Disposable"])),(l()(),u.Mb(-1,null,[" - you can throw a disposable mailbox right away. No unsubscibing from a service, cancelling your account or anything of the sort. No strings attached."])),(l()(),u.sb(43,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.sb(44,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["Temporary"])),(l()(),u.Mb(-1,null,[" - Your mailbox is temporary. The emails received will be deleted by the system after a certain time elapses."])),(l()(),u.sb(47,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.sb(48,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["Free"])),(l()(),u.Mb(-1,null,[" - you know what that means!"])),(l()(),u.sb(51,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.sb(52,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,[" Others call it tempmail, 10minutemail, throwaway email, fake-mail or trash-mail."])),(l()(),u.sb(54,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.sb(55,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,[" Disposable email services are online services that provide temporary email addresses for registering or signing up on websites that require email verification."])),(l()(),u.sb(57,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,[" One purpose of these services is to avoid exposing your own email address to potential SPAM, especially if you just need the service for a short period of time."])),(l()(),u.sb(59,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,[" Disposable email services are also useful in software development and testing, as many software products require email verification themselves. Using real email addresses in the context of software development or testing is cumbersome and annoying. Many teams around the world use temporary disposable email services for testing their own software products."])),(l()(),u.sb(61,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,[" AHEM - Ad Hoc Email is one of these services. You can send an email to an @ahem.email address and check the AHEM mailbox to retrieve and read the email. "])),(l()(),u.sb(63,0,null,null,1,"mat-divider",[["class","mat-divider"],["role","separator"]],[[1,"aria-orientation",0],[2,"mat-divider-vertical",null],[2,"mat-divider-horizontal",null],[2,"mat-divider-inset",null]],null,null,g.b,g.a)),u.rb(64,49152,null,0,y.a,[],null,null),(l()(),u.sb(65,0,null,null,1,"mat-divider",[["class","mat-divider"],["role","separator"]],[[1,"aria-orientation",0],[2,"mat-divider-vertical",null],[2,"mat-divider-horizontal",null],[2,"mat-divider-inset",null]],null,null,g.b,g.a)),u.rb(66,49152,null,0,y.a,[],null,null),(l()(),u.sb(67,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),u.Mb(68,null,["Can I only use @"," addresses with the service?"])),(l()(),u.sb(69,0,null,null,8,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),u.rb(70,16384,null,0,E.b,[],null,null),(l()(),u.Mb(-1,null,[" The AHEM server currently serves the domains: "])),(l()(),u.sb(72,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.sb(73,0,null,null,2,"ul",[],null,null,null,null,null)),(l()(),u.ib(16777216,null,null,1,null,x)),u.rb(75,278528,null,0,A.k,[u.N,u.K,u.q],{ngForOf:[0,"ngForOf"]},null),(l()(),u.sb(76,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,[" Sending an email to any of the above domains will be accepted by the AHEM mail service. "])),(l()(),u.sb(78,0,null,null,1,"mat-divider",[["class","mat-divider"],["role","separator"]],[[1,"aria-orientation",0],[2,"mat-divider-vertical",null],[2,"mat-divider-horizontal",null],[2,"mat-divider-inset",null]],null,null,g.b,g.a)),u.rb(79,49152,null,0,y.a,[],null,null),(l()(),u.sb(80,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["How long does an email remain on the AHEM mail server?"])),(l()(),u.sb(82,0,null,null,4,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),u.rb(83,16384,null,0,E.b,[],null,null),(l()(),u.Mb(84,null,[" An email remains on the AHEM server at least ",", and up to ",". "])),u.Ib(85,2),u.Ib(86,2),(l()(),u.sb(87,0,null,null,1,"mat-divider",[["class","mat-divider"],["role","separator"]],[[1,"aria-orientation",0],[2,"mat-divider-vertical",null],[2,"mat-divider-horizontal",null],[2,"mat-divider-inset",null]],null,null,g.b,g.a)),u.rb(88,49152,null,0,y.a,[],null,null),(l()(),u.sb(89,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["Can I delete my emails immediately?"])),(l()(),u.sb(91,0,null,null,2,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),u.rb(92,16384,null,0,E.b,[],null,null),(l()(),u.Mb(-1,null,[" Yes. "])),(l()(),u.sb(94,0,null,null,1,"mat-divider",[["class","mat-divider"],["role","separator"]],[[1,"aria-orientation",0],[2,"mat-divider-vertical",null],[2,"mat-divider-horizontal",null],[2,"mat-divider-inset",null]],null,null,g.b,g.a)),u.rb(95,49152,null,0,y.a,[],null,null),(l()(),u.sb(96,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["What personal information do you save and how do you use it?"])),(l()(),u.sb(98,0,null,null,9,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),u.rb(99,16384,null,0,E.b,[],null,null),(l()(),u.Mb(-1,null,[" We do not keep any direct personal information. However, the emails are publicly available, so be mindful of how you use the service. "])),(l()(),u.sb(101,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,[" We do track accessing IP addresses in order to ensure the service's availability. "])),(l()(),u.sb(103,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,[" We recommend that you read the "])),(l()(),u.sb(105,0,null,null,1,"a",[["href","/privacy"]],null,null,null,null,null)),(l()(),u.Mb(-1,null,["privacy policy"])),(l()(),u.Mb(-1,null,[". "])),(l()(),u.sb(108,0,null,null,1,"mat-divider",[["class","mat-divider"],["role","separator"]],[[1,"aria-orientation",0],[2,"mat-divider-vertical",null],[2,"mat-divider-horizontal",null],[2,"mat-divider-inset",null]],null,null,g.b,g.a)),u.rb(109,49152,null,0,y.a,[],null,null),(l()(),u.sb(110,0,null,null,4,"h2",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["Why does "])),(l()(),u.sb(112,0,null,null,1,"a",[["href","https://www.ahem.email"]],null,null,null,null,null)),(l()(),u.Mb(-1,null,["AHEM"])),(l()(),u.Mb(-1,null,[" use ads? Isn't it an open source project?"])),(l()(),u.sb(115,0,null,null,12,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),u.rb(116,16384,null,0,E.b,[],null,null),(l()(),u.sb(117,0,null,null,1,"a",[["href","https://www.ahem.email"]],null,null,null,null,null)),(l()(),u.Mb(-1,null,["AHEM"])),(l()(),u.Mb(-1,null,[" is an open source project, and you can easily get the code on "])),(l()(),u.sb(120,0,null,null,1,"a",[["href","https://github.com/o4oren/Ad-Hoc-Email-Server"]],null,null,null,null,null)),(l()(),u.Mb(-1,null,["Github"])),(l()(),u.Mb(-1,null,[". However, making the service available for free in the cloud has its costs. "])),(l()(),u.sb(123,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,[" Having advertisements on "])),(l()(),u.sb(125,0,null,null,1,"a",[["href","https://www.ahem.email"]],null,null,null,null,null)),(l()(),u.Mb(-1,null,["AHEM"])),(l()(),u.Mb(-1,null,[" helps me keep the service free and available. "]))],(function(l,n){var e=n.component;l(n,2,0,!1,e.h1,e.h2),l(n,75,0,e.properties.allowedDomains)}),(function(l,n){var e=n.component;l(n,13,0,"NoopAnimations"===u.Eb(n,14)._animationMode),l(n,28,0,u.Eb(n,29).vertical?"vertical":"horizontal",u.Eb(n,29).vertical,!u.Eb(n,29).vertical,u.Eb(n,29).inset),l(n,63,0,u.Eb(n,64).vertical?"vertical":"horizontal",u.Eb(n,64).vertical,!u.Eb(n,64).vertical,u.Eb(n,64).inset),l(n,65,0,u.Eb(n,66).vertical?"vertical":"horizontal",u.Eb(n,66).vertical,!u.Eb(n,66).vertical,u.Eb(n,66).inset),l(n,68,0,e.properties.allowedDomains[0]),l(n,78,0,u.Eb(n,79).vertical?"vertical":"horizontal",u.Eb(n,79).vertical,!u.Eb(n,79).vertical,u.Eb(n,79).inset);var a=u.Nb(n,84,0,l(n,85,0,u.Eb(n,0),e.min(e.properties.emailDeleteInterval,e.properties.emailDeleteAge),"seconds")),t=u.Nb(n,84,1,l(n,86,0,u.Eb(n,0),e.properties.emailDeleteAge+e.properties.emailDeleteInterval,"seconds"));l(n,84,0,a,t),l(n,87,0,u.Eb(n,88).vertical?"vertical":"horizontal",u.Eb(n,88).vertical,!u.Eb(n,88).vertical,u.Eb(n,88).inset),l(n,94,0,u.Eb(n,95).vertical?"vertical":"horizontal",u.Eb(n,95).vertical,!u.Eb(n,95).vertical,u.Eb(n,95).inset),l(n,108,0,u.Eb(n,109).vertical?"vertical":"horizontal",u.Eb(n,109).vertical,!u.Eb(n,109).vertical,u.Eb(n,109).inset)}))}function P(l){return u.Ob(0,[(l()(),u.sb(0,0,null,null,1,"app-faq",[],null,null,null,I,H)),u.rb(1,114688,null,0,C,[c.a],null,null)],(function(l,n){l(n,1,0)}),null)}var O=u.ob("app-faq",C,P,{},{},[]);class T{constructor(l){this.h1="About AHEM",this.h2="Ad Hoc Temporary Email Service",l.setTitle("About AHEM - Ad-Hoc Email"),l.updateMetaTag({name:"description",content:"About AHEM - Ad Hoc Email Service - Frequently Asked Questions."})}ngOnInit(){}}var k=u.qb({encapsulation:0,styles:[[".ng-adsense[_ngcontent-%COMP%]{margin:10px;height:140px}"]],data:{}});function D(l){return u.Ob(0,[(l()(),u.sb(0,0,null,null,1,"app-banner",[],null,null,null,i.b,i.a)),u.rb(1,114688,null,0,r.a,[s.d,o.b],{showMailboxSelector:[0,"showMailboxSelector"],h1:[1,"h1"],h2:[2,"h2"]},null),(l()(),u.sb(2,0,null,null,36,"div",[["class","ahem-centered"]],null,null,null,null,null)),(l()(),u.sb(3,0,null,null,35,"article",[],null,null,null,null,null)),(l()(),u.sb(4,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["About AHEM"])),(l()(),u.Mb(-1,null,[" AHEM is a next generation free temporary email address service."])),(l()(),u.sb(7,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,[" AHEM focuses on a modern UI, high fidelity, mobile friendliness, an easy to use "])),(l()(),u.sb(9,0,null,null,1,"a",[["href","/help/api"]],null,null,null,null,null)),(l()(),u.Mb(-1,null,["API"])),(l()(),u.Mb(-1,null,[" and "])),(l()(),u.sb(12,0,null,null,1,"a",[["heref","https://github.com/o4oren/Ad-Hoc-Email-Server>"]],null,null,null,null,null)),(l()(),u.Mb(-1,null,["freely available code"])),(l()(),u.Mb(-1,null,["."])),(l()(),u.sb(15,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,[" AHEM was born of out of necessity, and was built as a weekend project by Oren Geva."])),(l()(),u.sb(17,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,[" It is not a business, and has no profit goals. If ads are included in the service it is to help maintaining this service free."])),(l()(),u.sb(19,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.sb(20,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,[" AHEM was built as a MEAN stack, using "])),(l()(),u.sb(22,0,null,null,1,"a",[["href","https://angular.io"]],null,null,null,null,null)),(l()(),u.Mb(-1,null,["Angular"])),(l()(),u.Mb(-1,null,[", "])),(l()(),u.sb(25,0,null,null,1,"a",[["href","https://nodejs.org/en/"]],null,null,null,null,null)),(l()(),u.Mb(-1,null,["NodeJS"])),(l()(),u.Mb(-1,null,[", "])),(l()(),u.sb(28,0,null,null,1,"a",[["href","https://www.mongodb.com/"]],null,null,null,null,null)),(l()(),u.Mb(-1,null,["MongoDB"])),(l()(),u.Mb(-1,null,[" and "])),(l()(),u.sb(31,0,null,null,1,"a",[["href","https://expressjs.com/"]],null,null,null,null,null)),(l()(),u.Mb(-1,null,["ExpressJS"])),(l()(),u.Mb(-1,null,[" on top of some awesome open source packages. Check out the github repo for a complete list and licenses."])),(l()(),u.sb(34,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,[" I would, however, like to mention one of those projects - "])),(l()(),u.sb(36,0,null,null,1,"a",[["href","https://nodemailer.com/about/"]],null,null,null,null,null)),(l()(),u.Mb(-1,null,["Nodemailer"])),(l()(),u.Mb(-1,null,[" by Andris Reinman. THis project serves as the core of the mail server part of AHEM, and therefore is very central to this service. "]))],(function(l,n){var e=n.component;l(n,1,0,!1,e.h1,e.h2)}),null)}function S(l){return u.Ob(0,[(l()(),u.sb(0,0,null,null,1,"app-about",[],null,null,null,D,k)),u.rb(1,114688,null,0,T,[c.a],null,null)],(function(l,n){l(n,1,0)}),null)}var j=u.ob("app-about",T,S,{},{},[]),z=e("POq0"),q=e("Xd0L"),B=e("QQfA"),U=e("IP0z"),F=e("/Co4"),N=e("s7LF"),_=e("iInd"),Q=e("/HVE"),R=e("Fwaw"),G=e("HsOI"),W=e("oapL"),L=e("ZwOa"),J=e("zMNK"),Y=e("hOhj"),Z=e("8P0U"),K=e("x80Z"),V=e("zQui"),X=e("8rEH"),$=e("Q+lL"),ll=e("adRe");class nl{}e.d(n,"HelpModuleNgFactory",(function(){return el}));var el=u.pb(a,[],(function(l){return u.Bb([u.Cb(512,u.j,u.ab,[[8,[t.a,v,O,j]],[3,u.j],u.v]),u.Cb(4608,A.n,A.m,[u.s,[2,A.B]]),u.Cb(4608,z.c,z.c,[]),u.Cb(4608,q.b,q.b,[]),u.Cb(4608,B.a,B.a,[B.g,B.c,u.j,B.f,B.d,u.p,u.x,A.c,U.b,[2,A.h]]),u.Cb(5120,B.h,B.i,[B.a]),u.Cb(5120,F.b,F.c,[B.a]),u.Cb(4608,N.n,N.n,[]),u.Cb(4608,N.c,N.c,[]),u.Cb(1073742336,A.b,A.b,[]),u.Cb(1073742336,_.o,_.o,[[2,_.t],[2,_.l]]),u.Cb(1073742336,U.a,U.a,[]),u.Cb(1073742336,q.j,q.j,[[2,q.c],[2,o.f]]),u.Cb(1073742336,Q.b,Q.b,[]),u.Cb(1073742336,q.u,q.u,[]),u.Cb(1073742336,R.c,R.c,[]),u.Cb(1073742336,z.d,z.d,[]),u.Cb(1073742336,G.d,G.d,[]),u.Cb(1073742336,W.c,W.c,[]),u.Cb(1073742336,L.b,L.b,[]),u.Cb(1073742336,q.s,q.s,[]),u.Cb(1073742336,q.p,q.p,[]),u.Cb(1073742336,J.b,J.b,[]),u.Cb(1073742336,Y.c,Y.c,[]),u.Cb(1073742336,B.e,B.e,[]),u.Cb(1073742336,F.e,F.e,[]),u.Cb(1073742336,s.c,s.c,[]),u.Cb(1073742336,Z.c,Z.c,[]),u.Cb(1073742336,N.m,N.m,[]),u.Cb(1073742336,N.g,N.g,[]),u.Cb(1073742336,N.l,N.l,[]),u.Cb(1073742336,K.a,K.a,[]),u.Cb(1073742336,V.o,V.o,[]),u.Cb(1073742336,X.a,X.a,[]),u.Cb(1073742336,E.d,E.d,[]),u.Cb(1073742336,y.b,y.b,[]),u.Cb(1073742336,M.b,M.b,[]),u.Cb(1073742336,q.l,q.l,[]),u.Cb(1073742336,$.c,$.c,[]),u.Cb(1073742336,ll.c,ll.c,[]),u.Cb(1073742336,nl,nl,[]),u.Cb(1073742336,a,a,[]),u.Cb(1024,_.j,(function(){return[[{path:"api",component:d},{path:"faq",component:C},{path:"about",component:T}]]}),[])])}))}}]);