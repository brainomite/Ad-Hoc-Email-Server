(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{OFGZ:function(l,n,e){"use strict";e.r(n);var u=e("8Y7J");class t{}var o=e("pMnS"),s=e("SVse"),a=e("iInd"),i=e("TtEo"),r=e("02hT");class b{constructor(l,n){this.http=l,this.baseUri=n||""}ngOnInit(){this.http.get(this.baseUri+"/assets/blog/"+this.blogEntry.name+".short.html",{responseType:"text"}).subscribe(l=>{this.htmlShort=l})}getHashedBlogEntry(l){return btoa(JSON.stringify(l))}}var c=e("IheW"),h=u.qb({encapsulation:0,styles:[["section[_ngcontent-%COMP%]{cursor:pointer}section[_ngcontent-%COMP%]:focus{outline:0}mat-divider[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px}"]],data:{}});function d(l){return u.Ob(0,[u.Gb(0,s.d,[u.s]),(l()(),u.sb(1,0,null,null,7,"section",[],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u.Eb(l,2).onClick()&&t),t}),null,null)),u.rb(2,16384,null,0,a.m,[a.l,a.a,[8,null],u.C,u.k],{routerLink:[0,"routerLink"]},null),(l()(),u.sb(3,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),u.Mb(4,null,["",""])),(l()(),u.sb(5,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),u.Mb(6,null,["",""])),u.Ib(7,1),(l()(),u.sb(8,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null)),(l()(),u.sb(9,0,null,null,1,"mat-divider",[["class","mat-divider"],["role","separator"]],[[1,"aria-orientation",0],[2,"mat-divider-vertical",null],[2,"mat-divider-horizontal",null],[2,"mat-divider-inset",null]],null,null,i.b,i.a)),u.rb(10,49152,null,0,r.a,[],null,null)],(function(l,n){l(n,2,0,u.wb(1,"/blog/post/",n.component.blogEntry.name,""))}),(function(l,n){var e=n.component;l(n,4,0,e.blogEntry.title);var t=u.Nb(n,6,0,l(n,7,0,u.Eb(n,0),e.blogEntry.date));l(n,6,0,t),l(n,8,0,e.htmlShort),l(n,9,0,u.Eb(n,10).vertical?"vertical":"horizontal",u.Eb(n,10).vertical,!u.Eb(n,10).vertical,u.Eb(n,10).inset)}))}var p=e("Bh3D"),m=e("aIkE"),g=e("w3zN"),M=e("adRe"),v=e("DHxB");let y=(()=>{class l{constructor(){this.blogEntries=[{date:new Date("Jan 17, 2019").toString(),title:"How to run AHEM server on docker",imageUrl:"/assets/images/happy-bluish.png",name:"run-ahem-on-docker"},{date:new Date("Nov 13, 2018").toString(),title:"How to setup you own disposable email server",imageUrl:"/assets/images/happy-bluish.png",name:"how-to-set-up-your-own-disposable-email-server"}]}getBlogPostByName(l){return this.blogEntries.filter(n=>n.name===l)}}return l.ngInjectableDef=u.Sb({factory:function(){return new l},token:l,providedIn:"root"}),l})();class f{constructor(l,n){this.blogService=n,this.h1="Ad Hoc Email Blog",this.h2="",l.setTitle("AHEM - Ad Hoc EMail Blog"),l.updateMetaTag({name:"description",content:"AHEM - an Ad-Hoc Disposable Temporary Email Address blog"})}ngOnInit(){this.blogEntries=this.blogService.blogEntries,console.log(this.blogEntries)}}var w=u.qb({encapsulation:0,styles:[[""]],data:{}});function E(l){return u.Ob(0,[(l()(),u.sb(0,0,null,null,1,"app-blog-entry",[],null,null,null,d,h)),u.rb(1,114688,null,0,b,[c.c,[2,s.a]],{blogEntry:[0,"blogEntry"]},null)],(function(l,n){l(n,1,0,n.context.$implicit)}),null)}function A(l){return u.Ob(0,[(l()(),u.sb(0,0,null,null,1,"app-banner",[],null,null,null,p.b,p.a)),u.rb(1,114688,null,0,m.a,[],{showMailboxSelector:[0,"showMailboxSelector"],h2:[1,"h2"],h1:[2,"h1"]},null),(l()(),u.sb(2,0,null,null,7,"div",[["class","adsense-container"]],null,null,null,null,null)),(l()(),u.sb(3,0,null,null,1,"ng-adsense",[["class","ng-adsense-adaptive"]],null,null,null,g.b,g.a)),u.rb(4,4440064,null,0,M.b,[M.a],{adSlot:[0,"adSlot"]},null),(l()(),u.sb(5,0,null,null,2,"div",[["class","ahem-centered ahem-blog"]],null,null,null,null,null)),(l()(),u.ib(16777216,null,null,1,null,E)),u.rb(7,278528,null,0,s.k,[u.N,u.K,u.q],{ngForOf:[0,"ngForOf"]},null),(l()(),u.sb(8,0,null,null,1,"ng-adsense",[["class","ng-adsense-adaptive"]],null,null,null,g.b,g.a)),u.rb(9,4440064,null,0,M.b,[M.a],{adSlot:[0,"adSlot"]},null)],(function(l,n){var e=n.component;l(n,1,0,!1,e.h2,e.h1),l(n,4,0,8833273458),l(n,7,0,e.blogEntries),l(n,9,0,8833273458)}),null)}var C=u.ob("app-blog",f,(function(l){return u.Ob(0,[(l()(),u.sb(0,0,null,null,1,"app-blog",[],null,null,null,A,w)),u.rb(1,114688,null,0,f,[v.a,y],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]);class k{constructor(l,n,e,u,t){this.http=l,this.route=e,this.seoService=u,this.blogService=t,this.h2="AHEM - Ad Hoc Email",this.baseUri=n||""}ngOnInit(){this.route.children[0].url.subscribe(l=>{this.blogEntry=this.blogService.getBlogPostByName(l[0].path)[0],this.seoService.setTitle(this.blogEntry.title),this.seoService.updateMetaTag({name:"description",content:"AHEM - an Ad-Hoc Disposable Temporary Email Address blog post: "+this.blogEntry.title})})}}var H=u.qb({encapsulation:0,styles:[[""]],data:{}});function j(l){return u.Ob(0,[(l()(),u.sb(0,0,null,null,1,"app-banner",[],null,null,null,p.b,p.a)),u.rb(1,114688,null,0,m.a,[],{showMailboxSelector:[0,"showMailboxSelector"],h2:[1,"h2"],h1:[2,"h1"]},null),(l()(),u.sb(2,0,null,null,7,"div",[["class","adsense-container"]],null,null,null,null,null)),(l()(),u.sb(3,0,null,null,1,"ng-adsense",[["class","ng-adsense-adaptive"]],null,null,null,g.b,g.a)),u.rb(4,4440064,null,0,M.b,[M.a],{adSlot:[0,"adSlot"]},null),(l()(),u.sb(5,0,null,null,2,"div",[["class","ahem-centered ahem-blog"]],null,null,null,null,null)),(l()(),u.sb(6,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),u.rb(7,212992,null,0,a.p,[a.b,u.N,u.j,[8,null],u.h],null,null),(l()(),u.sb(8,0,null,null,1,"ng-adsense",[["class","ng-adsense-adaptive"]],null,null,null,g.b,g.a)),u.rb(9,4440064,null,0,M.b,[M.a],{adSlot:[0,"adSlot"]},null)],(function(l,n){var e=n.component;l(n,1,0,!1,e.h2,e.blogEntry.title),l(n,4,0,8833273458),l(n,7,0),l(n,9,0,8833273458)}),null)}var S=u.ob("app-blog-post-page",k,(function(l){return u.Ob(0,[(l()(),u.sb(0,0,null,null,1,"app-blog-post-page",[],null,null,null,j,H)),u.rb(1,114688,null,0,k,[c.c,[2,s.a],a.a,v.a,y],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]);class T{constructor(l,n){this.el=l,this.doc=n}escapeHTML(l){return(l||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}init(){this.destroy(),this.codeEl=this.doc.createElement("pre"),this.lang&&(this.codeEl.className=this.lang),this.codeEl.innerHTML=this.code||""+this.el.nativeElement.innerHTML.trim(),this.parentEl=this.el.nativeElement.parentNode,this.parentEl.insertBefore(this.codeEl,this.el.nativeElement.nextSibling),hljs.configure(Object.assign({},this.options)),hljs.highlightBlock(this.codeEl)}destroy(){this.codeEl&&(this.parentEl.removeChild(this.codeEl),this.codeEl=null)}ngOnInit(){this.init()}ngAfterViewInit(){this.ngModel?this.ngModel.valueChanges.subscribe(l=>{this.code=this.escapeHTML(l),this.init()}):this.initMutation()}ngOnDestroy(){this.destroy(),this.destroyMutation()}initMutation(){"undefined"!=typeof MutationObserver&&(this.observer=new MutationObserver(this.init.bind(this)),this.observer.observe(this.el.nativeElement,{characterData:!0,childList:!0,subtree:!0}))}destroyMutation(){this.observer&&this.observer.disconnect()}}class x{}class O{constructor(){}ngOnInit(){}}var I=u.qb({encapsulation:0,styles:[[""]],data:{}});function D(l){return u.Ob(0,[(l()(),u.sb(0,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,[" Oren Geva"])),(l()(),u.sb(2,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,[" Nov 17, 2018 "])),(l()(),u.sb(4,0,null,null,19,"section",[],null,null,null,null,null)),(l()(),u.sb(5,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,[" AHEM\u200a\u2014\u200aAd Hoc Email Server Disposable email services are online services that provide temporary email addresses for registering or signing up on websites that require email verification. "])),(l()(),u.sb(7,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,[" The purpose of these services is that you can avoid exposing your own email address to potential SPAM, especially if you just need the service for a short period of time. "])),(l()(),u.sb(9,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,[" Disposable email services are also useful in software development and testing, as many software products require email verification themselves. Using real email addresses in the context of software development or testing is cumbersome and annoying. Many teams around the world use temporary disposable email services for testing their own software products. "])),(l()(),u.sb(11,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,[" AHEM - Ad Hoc Email is one of these services. You can send an email to an @ahem.dontyoulike.me address and check the AHEM mailbox to retrieve and read the email. Many similar services such as Mailinator, ThrowAwayMail, Temp-Mail and Yopmail are available online to name a few. "])),(l()(),u.sb(13,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,[" Each has their own interpretation of the theme, but one of the things that makes AHEM unique is that AHEM\u2019s code is freely available on GitHub as open source, allowing a user to download and set up their own temporary mail server. But why would someone want to set up their own disposable mail server? In the context of software testing, while most of the time an online disposable email service is sufficient, on some occasions you might want to host a temporary email server on site: "])),(l()(),u.sb(15,0,null,null,8,"ul",[],null,null,null,null,null)),(l()(),u.sb(16,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["Some organizations block access to disposable emails, or even just unknown websites"])),(l()(),u.sb(18,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["Some QA labs do not offer external Internet access"])),(l()(),u.sb(20,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["Some products require multiple or controllable email domains tested"])),(l()(),u.sb(22,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["AHEM caters to all these needs and more."])),(l()(),u.sb(24,0,null,null,93,"section",[],null,null,null,null,null)),(l()(),u.sb(25,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,[" To install AHEM, you\u2019ll need a Linux or Windows machine with administrative rights and Node.js version 8.9+ as well as MongoDB installed. "])),(l()(),u.sb(27,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,[" Setting up Node.js, npm and MongoDB is out of the scope of this guide, but in case you\u2019re lost, detailed information on how to set them up can be found on the "])),(l()(),u.sb(29,0,null,null,1,"a",[["href","https://nodejs.org/en/download/"]],null,null,null,null,null)),(l()(),u.Mb(-1,null,["Node.js download"])),(l()(),u.Mb(-1,null,[" and "])),(l()(),u.sb(32,0,null,null,1,"a",[["href","https://www.mongodb.com/download-center"]],null,null,null,null,null)),(l()(),u.Mb(-1,null,["MongoDB download"])),(l()(),u.Mb(-1,null,[" pages. "])),(l()(),u.sb(35,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["Installing AHEM"])),(l()(),u.sb(37,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,[" The following section details the steps required to install and run AHEM disposable mail server. AHEM can run on any system supporting Node.js. These steps were performed and tested on an Ubuntu Linux server and may need slight modifications to be compatible with other systems. "])),(l()(),u.sb(39,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["Install Angular CLI"])),(l()(),u.Mb(-1,null,[" AHEM uses Angular for its front end delivery, so you will need to globally install angular-cli: "])),(l()(),u.sb(42,0,null,null,3,"textarea",[["highlight-js",""],["style","display:none;"]],null,null,null,null,null)),u.rb(43,4407296,null,1,T,[u.k,s.c],{options:[0,"options"],lang:[1,"lang"]},null),u.Kb(335544320,1,{ngModel:0}),(l()(),u.Mb(-1,null,["npm install -g @angular/cli\n    "])),(l()(),u.sb(46,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["Install Concurrently"])),(l()(),u.Mb(-1,null,[" Concurrently is a JavaScript library that allows running multiple scripts concurrently. In this configuration, AHEM uses Concurrently to run both the backend node API and email server, and serve the front end directly via angular-cli: "])),(l()(),u.sb(49,0,null,null,3,"textarea",[["highlight-js",""],["style","display:none;"]],null,null,null,null,null)),u.rb(50,4407296,null,1,T,[u.k,s.c],{options:[0,"options"],lang:[1,"lang"]},null),u.Kb(335544320,2,{ngModel:0}),(l()(),u.Mb(-1,null,["npm install -g concurrently\n    "])),(l()(),u.sb(53,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["Clone the AHEM GitHub Repository"])),(l()(),u.sb(55,0,null,null,3,"textarea",[["highlight-js",""],["style","display:none;"]],null,null,null,null,null)),u.rb(56,4407296,null,1,T,[u.k,s.c],{options:[0,"options"],lang:[1,"lang"]},null),u.Kb(335544320,3,{ngModel:0}),(l()(),u.Mb(-1,null,["git clone https://github.com/o4oren/ahem-server.git"])),(l()(),u.sb(59,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["Install Dependencies within the Created Folder"])),(l()(),u.sb(61,0,null,null,3,"textarea",[["highlight-js",""],["style","display:none;"]],null,null,null,null,null)),u.rb(62,4407296,null,1,T,[u.k,s.c],{options:[0,"options"],lang:[1,"lang"]},null),u.Kb(335544320,4,{ngModel:0}),(l()(),u.Mb(-1,null,["        cd ahem-server\n        npm install\n    "])),(l()(),u.sb(65,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["Update Configuration"])),(l()(),u.Mb(-1,null,[" AHEM's configuration is based on environment variables. You set your system to include the variables described below or alternatively include a file name .env in the root of the project. A sample configuration file named .env.sample is located in the root of the project, you can copy or rename it. Edit it to suit your preferences. "])),(l()(),u.sb(68,0,null,null,4,"pre",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["      "])),(l()(),u.sb(70,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["\n        vim .env\n      "])),(l()(),u.Mb(-1,null,["\n    "])),(l()(),u.Mb(-1,null,[" The .env file should look like this: "])),(l()(),u.sb(74,0,null,null,3,"textarea",[["highlight-js",""],["style","display:none;"]],null,null,null,null,null)),u.rb(75,4407296,null,1,T,[u.k,s.c],{options:[0,"options"],lang:[1,"lang"]},null),u.Kb(335544320,5,{ngModel:0}),(l()(),u.Mb(-1,null,["      serverBaseUri=http://localhost:3000\n      mongoConnectUrl=mongodb://localhost:27017/\n      dbName=ahem\n      appListenPort=3000\n      smtpPort=2525\n      emailDeleteInterval=3600\n      emailDeleteAge=86400\n      allowAutocomplete=true\n      allowedDomains=my.domain.com\n      jwtSecret=AH3M 709 S3cR3T\n      jwtExpiresIn=3600\n      maxAllowedApiCalls=1000\n    "])),(l()(),u.sb(78,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,[" Here is an explanation of the parameters within the properties file: "])),(l()(),u.sb(80,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.sb(81,0,null,null,20,"ul",[],null,null,null,null,null)),(l()(),u.sb(82,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["serverBaseUri - the base address for your API server. "])),(l()(),u.sb(84,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["mongoConnectUrl - the mongodb connect url."])),(l()(),u.sb(86,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["Example: \u201cmongodb://localhost:27017/ahem\u201d."])),(l()(),u.sb(88,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["appListenPort - the port the node app binds to."])),(l()(),u.sb(90,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["smtpPort - the SMTP server\u2019s port. Note that by default it is set to 2525\u200a\u2014\u200athis is done for testing purposes, as on many systems only a system account can listen on port 25. To receive standard SMTP email, change this to 25."])),(l()(),u.sb(92,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["emailDeleteInterval - The time in seconds between age checks for purging old emails."])),(l()(),u.sb(94,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["emailDeleteAge - The max age in seconds above which emails will be deleted."])),(l()(),u.sb(96,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["allowedDomains - An array of allowed email domains. These domains will be allowed by the server as RCPT TO: entries. This also makes the server not act as an open relay. Format: [\u201cmy.domain.com\u201d, \u201cmy.second-domain.com\u201d]."])),(l()(),u.sb(98,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["customText - A html string that will replace the default text in the landing page."])),(l()(),u.sb(100,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["allowAutocomplete - If set to false, will prevent auto completing users in the UI."])),(l()(),u.sb(102,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["Build the project"])),(l()(),u.sb(104,0,null,null,3,"textarea",[["highlight-js",""],["style","display:none;"]],null,null,null,null,null)),u.rb(105,4407296,null,1,T,[u.k,s.c],{options:[0,"options"],lang:[1,"lang"]},null),u.Kb(335544320,6,{ngModel:0}),(l()(),u.Mb(-1,null,["      npm run build:ssr\n    "])),(l()(),u.Mb(-1,null,[" This may take a while\u2026 "])),(l()(),u.sb(109,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["Run AHEM"])),(l()(),u.sb(111,0,null,null,6,"p",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,[" At this point, make sure your MongoDB server is up and running and that your properties.json file was configured correctly. The easiest way to run AHEM, is run the project with the command: "])),(l()(),u.sb(113,0,null,null,3,"textarea",[["highlight-js",""],["style","display:none;"]],null,null,null,null,null)),u.rb(114,4407296,null,1,T,[u.k,s.c],{options:[0,"options"],lang:[1,"lang"]},null),u.Kb(335544320,7,{ngModel:0}),(l()(),u.Mb(-1,null,["node ahem.js"])),(l()(),u.Mb(-1,null,[" This command will start (by default) the backend server on port 3000 and the front end will run on port 4200. You can then access the AHEM web interface at http://localhost:4200. "]))],(function(l,n){l(n,43,0,u.cb,"bash"),l(n,50,0,u.cb,"bash"),l(n,56,0,u.cb,"bash"),l(n,62,0,u.cb,"bash"),l(n,75,0,u.cb,"properties"),l(n,105,0,u.cb,"bash"),l(n,114,0,u.cb,"bash")}),null)}var B=u.ob("app-how-to-set-up-your-own-disposable-mail-server",O,(function(l){return u.Ob(0,[(l()(),u.sb(0,0,null,null,1,"app-how-to-set-up-your-own-disposable-mail-server",[],null,null,null,D,I)),u.rb(1,114688,null,0,O,[],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]);class N{constructor(){}ngOnInit(){}}var P=u.qb({encapsulation:0,styles:[[""]],data:{}});function U(l){return u.Ob(0,[(l()(),u.sb(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,[" Jan 17, 2019\n"])),(l()(),u.sb(2,0,null,null,46,"section",[],null,null,null,null,null)),(l()(),u.sb(3,0,null,null,6,"p",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,[" AHEM - Ad Hoc Email is a temporary disposable email service. Its "])),(l()(),u.sb(5,0,null,null,1,"a",[["href","https://ahem.dontyoulike.me"]],null,null,null,null,null)),(l()(),u.Mb(-1,null,["public website"])),(l()(),u.Mb(-1,null,[" provides a disposable email service for the domain @ahem.dontyoulike.me."])),(l()(),u.sb(8,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,[" You can send an email to any @ahem.dontyoulike.me address and check the AHEM mailbox to retrieve and read the email. "])),(l()(),u.sb(10,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,[" But AHEM is also installable as an "])),(l()(),u.sb(12,0,null,null,1,"a",[["href","https://ahem.dontyoulike.me/blog/post/how-to-set-up-your-own-disposable-email-server"]],null,null,null,null,null)),(l()(),u.Mb(-1,null,["on premise server"])),(l()(),u.Mb(-1,null,[", serving your own domains."])),(l()(),u.sb(15,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,[" Setting up AHEM as your own temporary email service is now ever easier with Docker."])),(l()(),u.sb(17,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.sb(18,0,null,null,8,"p",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,[" The AHEM server image is available in the "])),(l()(),u.sb(20,0,null,null,1,"a",[["href","https://hub.docker.com/r/o4oren/ahem"]],null,null,null,null,null)),(l()(),u.Mb(-1,null,["docker hub website"])),(l()(),u.Mb(-1,null,[". To pull the AHEM docker image run the following command: "])),(l()(),u.sb(23,0,null,null,3,"textarea",[["highlight-js",""],["style","display:none;"]],null,null,null,null,null)),u.rb(24,4407296,null,1,T,[u.k,s.c],{options:[0,"options"],lang:[1,"lang"]},null),u.Kb(335544320,1,{ngModel:0}),(l()(),u.Mb(-1,null,["      docker pull o4oren/ahem\n    "])),(l()(),u.sb(27,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,[" To run AHEM, you also need a Mongo DB server. If you do not have access to a mongo db server, or don't want to install and manage one, you can easily run one in a docker container. Follow the instructions on the "])),(l()(),u.sb(29,0,null,null,1,"a",[["href","https://hub.docker.com/_/mongo"]],null,null,null,null,null)),(l()(),u.Mb(-1,null,["mongodb docker hub page"])),(l()(),u.Mb(-1,null,[". "])),(l()(),u.sb(32,0,null,null,10,"p",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,[" Create a configuration file named properties.json. Edit it to suit your preferences. "])),(l()(),u.sb(34,0,null,null,3,"textarea",[["highlight-js",""],["style","display:none;"]],null,null,null,null,null)),u.rb(35,4407296,null,1,T,[u.k,s.c],{options:[0,"options"],lang:[1,"lang"]},null),u.Kb(335544320,2,{ngModel:0}),(l()(),u.Mb(-1,null,["          vim properties.json\n      "])),(l()(),u.Mb(-1,null,[" The properties.json file should look something like this: "])),(l()(),u.sb(39,0,null,null,3,"textarea",[["highlight-js",""],["style","display:none;"]],null,null,null,null,null)),u.rb(40,4407296,null,1,T,[u.k,s.c],{options:[0,"options"],lang:[1,"lang"]},null),u.Kb(335544320,3,{ngModel:0}),(l()(),u.Mb(-1,null,['      {\n      "serverBaseUri": "http://[YOUR SERVER URL]:3000",\n      "mongoConnectUrl": "mongodb://[YOUR MONGO DB ADDRESS]:27017/",\n      "dbName": "ahem",\n      "appListenPort": 3000,\n      "smtpPort" : 25,\n      "emailDeleteInterval" : 3600,\n      "emailDeleteAge" : 86400,\n      "allowAutocomplete" : true,\n      "allowedDomains" : ["my.domain.com", "my.second.domain.com"],\n      "jwtSecret": "AH3M 709 S3cR3T",\n      "jwtExpiresIn": 3600,\n      "maxAllowedApiCalls": 1000\n      }\n     '])),(l()(),u.sb(43,0,null,null,5,"p",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,[" To run the docker image while mounting the properties file you created earlier, use the following command: "])),(l()(),u.sb(45,0,null,null,3,"textarea",[["highlight-js",""],["style","display:none;"]],null,null,null,null,null)),u.rb(46,4407296,null,1,T,[u.k,s.c],{options:[0,"options"],lang:[1,"lang"]},null),u.Kb(335544320,4,{ngModel:0}),(l()(),u.Mb(-1,null,["          docker run -d -p 3000:3000 -v [FULL PATH TO properties.json]/properties.json:/app/properties.json o4oren/ahem\n      "]))],(function(l,n){l(n,24,0,u.cb,"bash"),l(n,35,0,u.cb,"bash"),l(n,40,0,u.cb,"json"),l(n,46,0,u.cb,"bash")}),null)}var L=u.ob("app-run-ahem-on-docker",N,(function(l){return u.Ob(0,[(l()(),u.sb(0,0,null,null,1,"app-run-ahem-on-docker",[],null,null,null,U,P)),u.rb(1,114688,null,0,N,[],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),q=e("POq0"),K=e("Xd0L"),R=e("QQfA"),F=e("IP0z"),Y=e("/Co4"),G=e("s7LF"),J=e("cUpR"),z=e("/HVE"),V=e("Fwaw"),_=e("HsOI"),Q=e("oapL"),Z=e("ZwOa"),W=e("zMNK"),X=e("hOhj"),$=e("Gi4r"),ll=e("8P0U"),nl=e("x80Z");class el{}e.d(n,"BlogModuleNgFactory",(function(){return ul}));var ul=u.pb(t,[],(function(l){return u.Bb([u.Cb(512,u.j,u.ab,[[8,[o.a,C,S,B,L]],[3,u.j],u.v]),u.Cb(4608,s.n,s.m,[u.s,[2,s.B]]),u.Cb(4608,q.c,q.c,[]),u.Cb(4608,K.b,K.b,[]),u.Cb(4608,R.a,R.a,[R.g,R.c,u.j,R.f,R.d,u.p,u.x,s.c,F.b,[2,s.h]]),u.Cb(5120,R.h,R.i,[R.a]),u.Cb(5120,Y.b,Y.c,[R.a]),u.Cb(4608,G.n,G.n,[]),u.Cb(4608,G.c,G.c,[]),u.Cb(4608,y,y,[]),u.Cb(1073742336,s.b,s.b,[]),u.Cb(1073742336,M.c,M.c,[]),u.Cb(1073742336,a.o,a.o,[[2,a.t],[2,a.l]]),u.Cb(1073742336,F.a,F.a,[]),u.Cb(1073742336,K.j,K.j,[[2,K.c],[2,J.f]]),u.Cb(1073742336,z.b,z.b,[]),u.Cb(1073742336,K.u,K.u,[]),u.Cb(1073742336,V.c,V.c,[]),u.Cb(1073742336,q.d,q.d,[]),u.Cb(1073742336,_.d,_.d,[]),u.Cb(1073742336,Q.c,Q.c,[]),u.Cb(1073742336,Z.b,Z.b,[]),u.Cb(1073742336,K.s,K.s,[]),u.Cb(1073742336,K.p,K.p,[]),u.Cb(1073742336,W.b,W.b,[]),u.Cb(1073742336,X.c,X.c,[]),u.Cb(1073742336,R.e,R.e,[]),u.Cb(1073742336,Y.e,Y.e,[]),u.Cb(1073742336,$.c,$.c,[]),u.Cb(1073742336,ll.c,ll.c,[]),u.Cb(1073742336,G.m,G.m,[]),u.Cb(1073742336,G.g,G.g,[]),u.Cb(1073742336,G.l,G.l,[]),u.Cb(1073742336,nl.a,nl.a,[]),u.Cb(1073742336,r.b,r.b,[]),u.Cb(1073742336,x,x,[]),u.Cb(1073742336,el,el,[]),u.Cb(1073742336,t,t,[]),u.Cb(1024,a.j,(function(){return[[{path:"",component:f},{path:"post",component:k,children:[{path:"how-to-set-up-your-own-disposable-email-server",component:O},{path:"run-ahem-on-docker",component:N}]}]]}),[])])}))}}]);