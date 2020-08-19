(this["webpackJsonptreebank-wordcloud"]=this["webpackJsonptreebank-wordcloud"]||[]).push([[0],{31:function(e,a,t){"use strict";(function(e){var n=t(13),l=t(14),r=t(5),c=t(15),o=t(16),s=t(0),i=t.n(s),m=t(7),d=t(32),u=t.n(d),h=t(33),b=t.n(h),p=t(34),E=t.n(p),v=t(35),f=t.n(v),N=function(a){Object(o.a)(s,a);var t=Object(c.a)(s);function s(e){var a;return Object(n.a)(this,s),(a=t.call(this,e)).state={url:""},a.handleChange=a.handleChange.bind(Object(r.a)(a)),a}return Object(l.a)(s,[{key:"handleChange",value:function(e){var a=e.target.value;this.setState({url:a})}},{key:"render",value:function(){var a=this.state.url,t=e.from(a).toString("base64");return i.a.createElement(i.a.Fragment,null,i.a.createElement("header",null,i.a.createElement("div",{className:"row pt-4"},i.a.createElement("div",{className:"col"},i.a.createElement("h3",null,"Word Cloud from Treebank"),i.a.createElement("h6",null,"Enter the URL for a treebank XML document:")))),i.a.createElement("div",{className:"row pt-2"},i.a.createElement("div",{className:"col col-lg-10 offset-lg-1"},i.a.createElement("div",{className:"input-group input-group-lg pb-2"},i.a.createElement("div",{className:"input-group-prepend"},i.a.createElement("span",{className:"input-group-text",id:"url-input-group"},"URL:")),i.a.createElement("input",{className:"form-control",type:"text",value:a,onChange:this.handleChange,placeholder:"Enter URL ...","aria-label":"URL","aria-describedby":"url-input-group"})),i.a.createElement(m.b,{className:"btn btn-block btn-primary",to:"/".concat(t)},"Create word cloud"))),i.a.createElement("hr",null),i.a.createElement("div",{className:"row pt-2"},i.a.createElement("div",{className:"col"},i.a.createElement("h4",null,"Examples"))),i.a.createElement("div",{className:"row pt-2"},i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("dt",{className:"pb-1"},"Herodotus,"," ",i.a.createElement("em",null,"The Histories")),i.a.createElement("dd",null,i.a.createElement("a",{href:"/aHR0cHM6Ly9wZXJzZWlkcy1wdWJsaWNhdGlvbnMuZ2l0aHViLmlvL2dvcm1hbi10cmVlcy94bWwvaGR0LTEtMS0xOS1idTMueG1s"},"1.1-1.19")),i.a.createElement("dd",null,i.a.createElement("a",{href:"/aHR0cHM6Ly9wZXJzZWlkcy1wdWJsaWNhdGlvbnMuZ2l0aHViLmlvL2dvcm1hbi10cmVlcy94bWwvaGR0LTEtMjAtMzktYnUyLnhtbA=="},"1.20-1.39")),i.a.createElement("dd",null,i.a.createElement("a",{href:"/aHR0cHM6Ly9wZXJzZWlkcy1wdWJsaWNhdGlvbnMuZ2l0aHViLmlvL2dvcm1hbi10cmVlcy94bWwvaGR0LTEtNDAtNTktYnUyLnhtbA=="},"1.40-1.59")),i.a.createElement("dt",{className:"pt-1 pb-1"},"Sophocles,"," ",i.a.createElement("em",null,"Antigone")),i.a.createElement("dd",null,i.a.createElement("a",{href:"/aHR0cHM6Ly9wZXJzZWlkcy1wdWJsaWNhdGlvbnMuZ2l0aHViLmlvL2RhcGhuZS10cmVlcy94bWwvdGxnMDAxMS90bGcwMDIvdGxnMDAxMS50bGcwMDIuZGFwaG5lX3RiLWdyYzEueG1s"},"1-1353")),i.a.createElement("dt",{className:"pt-1 pb-1"},"Lucian,"," ",i.a.createElement("em",null,"A True Story")),i.a.createElement("dd",null,i.a.createElement("a",{href:"/aHR0cHM6Ly9wZXJzZWlkcy1wdWJsaWNhdGlvbnMuZ2l0aHViLmlvL2hhcnJpbmd0b24tdHJlZXMveG1sL0NJVEVfVFJFRUJBTktfWE1ML3BlcnNldXMvZ3JjdGIvNTI3OS9ncmN0Yi41Mjc5LjEudGIueG1s"},"1-4")),i.a.createElement("dd",null,i.a.createElement("a",{href:"/aHR0cHM6Ly9wZXJzZWlkcy1wdWJsaWNhdGlvbnMuZ2l0aHViLmlvL2hhcnJpbmd0b24tdHJlZXMveG1sL0NJVEVfVFJFRUJBTktfWE1ML3BlcnNldXMvZ3JjdGIvNTI4MC9ncmN0Yi41MjgwLjEudGIueG1s"},"5-47"))),i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("dt",{className:"pb-1"},"C. Iulius Caesar,"," ",i.a.createElement("em",null,"Gallic War")),i.a.createElement("dd",null,i.a.createElement("a",{href:"/aHR0cHM6Ly9wZXJzZWlkcy1wdWJsaWNhdGlvbnMuZ2l0aHViLmlvL2hhcnJpbmd0b24tdHJlZXMveG1sL0NJVEVfVFJFRUJBTktfWE1ML3BlcnNldXMvbGF0dGIvNzIyOS9sYXR0Yi43MjI5LjEudGIueG1s"},"1.1-1.10")),i.a.createElement("dd",null,i.a.createElement("a",{href:"/aHR0cHM6Ly9wZXJzZWlkcy1wdWJsaWNhdGlvbnMuZ2l0aHViLmlvL2hhcnJpbmd0b24tdHJlZXMveG1sL0NJVEVfVFJFRUJBTktfWE1ML3BlcnNldXMvbGF0dGIvNDM2Mi9sYXR0Yi40MzYyLjEudGIueG1s"},"4.24-4.36")),i.a.createElement("dd",null,i.a.createElement("a",{href:"/aHR0cHM6Ly9wZXJzZWlkcy1wdWJsaWNhdGlvbnMuZ2l0aHViLmlvL2hhcnJpbmd0b24tdHJlZXMveG1sL0NJVEVfVFJFRUJBTktfWE1ML3BlcnNldXMvbGF0dGIvNDM1MC9sYXR0Yi40MzUwLjEudGIueG1s"},"5.24-5.48")),i.a.createElement("dd",null,i.a.createElement("a",{href:"/aHR0cHM6Ly9wZXJzZWlkcy1wdWJsaWNhdGlvbnMuZ2l0aHViLmlvL2hhcnJpbmd0b24tdHJlZXMveG1sL0NJVEVfVFJFRUJBTktfWE1ML3BlcnNldXMvbWlzY3RiLzMyNi9taXNjdGIuMzI2LjEudGIueG1s"},"6.13-6.20")),i.a.createElement("dt",{className:"pt-1 pb-1"},"M. Tullius Cicero,"," ",i.a.createElement("em",null,"First Catilinarian")),i.a.createElement("dd",null,i.a.createElement("a",{href:"/aHR0cHM6Ly9wZXJzZWlkcy1wdWJsaWNhdGlvbnMuZ2l0aHViLmlvL2hhcnJpbmd0b24tdHJlZXMveG1sL0NJVEVfVFJFRUJBTktfWE1ML3BlcnNldXMvbGF0dGIvNjM2MS9sYXR0Yi42MzYxLjEudGIueG1s"},"1.1-1.10")))),i.a.createElement("hr",null),i.a.createElement("div",{className:"row pt-2"},i.a.createElement("div",{className:"col"},i.a.createElement("h4",null,"Creating a word cloud from a treebank"))),i.a.createElement("div",{className:"row pt-2"},i.a.createElement("div",{className:"col-md-3"},i.a.createElement("img",{src:u.a,className:"img-fluid border",alt:"treebank template page"}),i.a.createElement("p",{className:"text-left pt-2"},"1. Visit a treebank template page and click on a treebank.")),i.a.createElement("div",{className:"col-md-3"},i.a.createElement("img",{src:b.a,className:"img-fluid border",alt:"treebank template page"}),i.a.createElement("p",{className:"text-left pt-2"},'2. Scroll to the bottom of the page, right click on the "View XML" link, and copy the link location.')),i.a.createElement("div",{className:"col-md-3"},i.a.createElement("img",{src:E.a,className:"img-fluid border",alt:"treebank template page"}),i.a.createElement("p",{className:"text-left pt-2"},'3. Paste the link in the "URL" text input.')),i.a.createElement("div",{className:"col-md-3"},i.a.createElement("img",{src:f.a,className:"img-fluid border",alt:"treebank template page"}),i.a.createElement("p",{className:"text-left pt-2"},'4. Click the "Create word cloud" button.'))))}}]),s}(s.Component);a.a=N}).call(this,t(27).Buffer)},32:function(e,a,t){e.exports=t.p+"static/media/click-treebank.fcd98c95.png"},33:function(e,a,t){e.exports=t.p+"static/media/copy-link.98123df3.png"},34:function(e,a,t){e.exports=t.p+"static/media/paste-link.1d6c25d5.png"},35:function(e,a,t){e.exports=t.p+"static/media/create-wordcloud.7aa3c197.png"},37:function(e,a,t){"use strict";(function(e){var n=t(13),l=t(14),r=t(5),c=t(15),o=t(16),s=t(0),i=t.n(s),m=t(38),d=t.n(m),u=t(7),h=t(39),b=t(40),p=function(e,a){return 0!==Object.keys(e.words).length&&(""===e.name?a.push({name:"-",words:e.words}):a.push(e)),a},E=function(e){var a=[],t=e.match(/(subdoc=["'].*?["'])|(lemma=["'].*?["'])/g);if(0===t.length)throw new Error("Could not parse XML");var n="Initial",l={name:n,words:{}};return t.forEach((function(e){/^subdoc/.test(e)&&(n=e.match(/subdoc=["'](.*?)["']/)[1])!==l.name&&(p(l,a),l={name:n,words:{}}),/^lemma/.test(e)&&function(e,a){var t=e.words;Object(h.a)(a)||(a in t?t[a]+=1:t[a]=1)}(l,e.match(/lemma=["'](.*?)\d*["']/)[1])})),p(l,a),a},v=function(a){Object(o.a)(s,a);var t=Object(c.a)(s);function s(e){var a;return Object(n.a)(this,s),(a=t.call(this,e)).state={error:null,isLoaded:!1,subDocs:[],showDropdown:!1},a.url=a.url.bind(Object(r.a)(a)),a.index=a.index.bind(Object(r.a)(a)),a.toggleDropdown=a.toggleDropdown.bind(Object(r.a)(a)),a.renderWordCloud=a.renderWordCloud.bind(Object(r.a)(a)),a.renderNavigation=a.renderNavigation.bind(Object(r.a)(a)),a}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this;d()(this.url()).then((function(e){return e.text()})).then((function(e){return E(e.normalize("NFC"))})).then((function(a){e.setState({isLoaded:!0,subDocs:a})})).catch((function(a){e.setState({isLoaded:!0,error:a})}))}},{key:"url",value:function(){var a=this.props.match.params.url;return e.from(a,"base64").toString()}},{key:"index",value:function(){var e=this.props.match.params.index,a=void 0===e?"0":e;return parseInt(a,10)}},{key:"toggleDropdown",value:function(){this.setState((function(e){return{showDropdown:!e.showDropdown}}))}},{key:"renderNavigation",value:function(){var e=this.props.match.params.url,a=this.state,t=a.subDocs,n=a.showDropdown,l=this.index(),r=t[l].name,c=t.map((function(e,a){}));return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-4 col-md-2 offset-md-2"},l>0&&i.a.createElement(u.b,{to:"/".concat(e,"/").concat(l-1),className:"btn btn-block btn-secondary"},"\xab")),i.a.createElement("div",{className:"col-4"},i.a.createElement("div",{className:"dropdown"},i.a.createElement("button",{type:"button",className:"btn btn-block btn-secondary dropdown-toggle","data-toggle":"dropdown",onClick:this.toggleDropdown},r,i.a.createElement("i",{className:"fa fa-caret-down"})),i.a.createElement("div",{className:"dropdown-menu ".concat(n?"show":""),style:{maxHeight:"400px",overflow:"scroll",width:"100%"}},c))),i.a.createElement("div",{className:"col-4 col-md-2"},l<t.length-1&&i.a.createElement(u.b,{to:"/".concat(e,"/").concat(l+1),className:"btn btn-block btn-secondary"},"\xbb")))}},{key:"renderWordCloud",value:function(){var e=this.state,a=e.error,t=e.isLoaded,n=e.subDocs,l=this.index();return a?i.a.createElement("div",null,"Error:"," ",a.message):t?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col"},this.renderNavigation())),i.a.createElement("div",{className:"row pt-3"},i.a.createElement("div",{className:"col"},i.a.createElement("div",{style:{minHeight:"500px"}},i.a.createElement(b.a,{words:n[l].words}))))):i.a.createElement("div",null,"Loading...")}},{key:"render",value:function(){var e=this.url();return i.a.createElement(i.a.Fragment,null,i.a.createElement("header",null,i.a.createElement("div",{className:"row pt-4"},i.a.createElement("div",{className:"col"},i.a.createElement("h3",null,"Wordcloud from Treebank"),i.a.createElement("h6",null,i.a.createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer"},e))))),i.a.createElement("div",{className:"row pt-2"},i.a.createElement("div",{className:"col"},this.renderWordCloud())))}}]),s}(s.Component);a.a=v}).call(this,t(27).Buffer)},39:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n={"\u03b1\u1f50\u03c4\u1f78\u03c2":!0,"\u03b1\u1f50\u03c4\u03cc\u03c2":!0,"\u03b3\u03b5":!0,"\u03b3\u1f70\u03c1":!0,"\u03b3\u03ac\u03c1":!0,"\u03b4'":!0,"\u03b4\u03b1\u1f76":!0,"\u03b4\u03b1\u1f76\u03c2":!0,"\u03b4\u03b1\u03af":!0,"\u03b4\u03b1\u03af\u03c2":!0,"\u03b4\u03b9\u1f70":!0,"\u03b4\u03b9\u03ac":!0,"\u03b4\u1f72":!0,"\u03b4\u03ad":!0,"\u03b4\u1f74":!0,"\u03b4\u03ae":!0,"\u03b5\u1f30":!0,"\u03b5\u1f30\u03bc\u1f76":!0,"\u03b5\u1f30\u03bc\u03af":!0,"\u03b5\u1f30\u03c2":!0,"\u03b5\u1f34\u03bc\u03b9":!0,"\u03ba\u03b1\u03c4\u1f70":!0,"\u03ba\u03b1\u03c4\u03ac":!0,"\u03ba\u03b1\u1f76":!0,"\u03ba\u03b1\u03af":!0,"\u03bc\u03b5\u03c4\u1f70":!0,"\u03bc\u03b5\u03c4\u03ac":!0,"\u03bc\u1f72\u03bd":!0,"\u03bc\u03ad\u03bd":!0,"\u03bc\u1f74":!0,"\u03bc\u03ae":!0,"\u03bf\u1f31":!0,"\u03bf\u1f50":!0,"\u03bf\u1f50\u03b4\u03b5\u1f76\u03c2":!0,"\u03bf\u1f50\u03b4\u03b5\u03af\u03c2":!0,"\u03bf\u1f50\u03b4\u1f72":!0,"\u03bf\u1f50\u03b4\u03ad":!0,"\u03bf\u1f50\u03ba":!0,"\u03bf\u1f54\u03c4\u03b5":!0,"\u03bf\u1f55\u03c4\u03c9\u03c2":!0,"\u03bf\u1f56\u03bd":!0,"\u03bf\u1f57\u03c4\u03bf\u03c2":!0,"\u03c0\u03b1\u03c1\u1f70":!0,"\u03c0\u03b1\u03c1\u03ac":!0,"\u03c0\u03b5\u03c1\u1f76":!0,"\u03c0\u03b5\u03c1\u03af":!0,"\u03c0\u03c1\u1f78\u03c2":!0,"\u03c0\u03c1\u03cc\u03c2":!0,"\u03c3\u1f78\u03c2":!0,"\u03c3\u03cc\u03c2":!0,"\u03c3\u1f7a":!0,"\u03c3\u03cd":!0,"\u03c3\u03cd\u03bd":!0,"\u03c4\u03b5":!0,"\u03c4\u03b9":!0,"\u03c4\u03b9\u03c2":!0,"\u03c4\u03bf\u03b9\u03bf\u1fe6\u03c4\u03bf\u03c2":!0,"\u03c4\u03bf\u1f76":!0,"\u03c4\u03bf\u03af":!0,"\u03c4\u03bf\u1f7a\u03c2":!0,"\u03c4\u03bf\u03cd\u03c2":!0,"\u03c4\u03bf\u1fe6":!0,"\u03c4\u1f70":!0,"\u03c4\u03ac":!0,"\u03c4\u1f74\u03bd":!0,"\u03c4\u03ae\u03bd":!0,"\u03c4\u1f76":!0,"\u03c4\u1f76\u03c2":!0,"\u03c4\u03af":!0,"\u03c4\u03af\u03c2":!0,"\u03c4\u1f78":!0,"\u03c4\u1f78\u03bd":!0,"\u03c4\u03cc":!0,"\u03c4\u03cc\u03bd":!0,"\u03c4\u1fc6\u03c2":!0,"\u03c4\u1fc7":!0,"\u03c4\u1ff6\u03bd":!0,"\u03c4\u1ff7":!0,"\u1f00\u03bb\u03bb'":!0,"\u1f00\u03bb\u03bb\u1f70":!0,"\u1f00\u03bb\u03bb\u03ac":!0,"\u1f00\u03c0\u1f78":!0,"\u1f00\u03c0\u03cc":!0,"\u1f02\u03bd":!0,"\u1f04\u03bb\u03bb\u03bf\u03c2":!0,"\u1f04\u03bd":!0,"\u1f04\u03c1\u03b1":!0,"\u1f10\u03b3\u1f7c":!0,"\u1f10\u03b3\u03ce":!0,"\u1f10\u03ba":!0,"\u1f10\u03be":!0,"\u1f10\u03bc\u1f78\u03c2":!0,"\u1f10\u03bc\u03cc\u03c2":!0,"\u1f10\u03bd":!0,"\u1f10\u03c0\u1f76":!0,"\u1f10\u03c0\u03af":!0,"\u1f10\u1f70\u03bd":!0,"\u1f10\u03ac\u03bd":!0,"\u1f11\u03b1\u03c5\u03c4\u03bf\u1fe6":!0,"\u1f14\u03c4\u03b9":!0,"\u1f21":!0,"\u1f22":!0,"\u1f24":!0,"\u1f41":!0,"\u1f43\u03b4\u03b5":!0,"\u1f43\u03c2":!0,"\u1f45\u03b4\u03b5":!0,"\u1f45\u03c2":!0,"\u1f45\u03c3\u03c4\u03b9\u03c2":!0,"\u1f45\u03c4\u03b9":!0,"\u1f51\u03bc\u1f78\u03c2":!0,"\u1f51\u03bc\u03cc\u03c2":!0,"\u1f51\u03c0\u1f72\u03c1":!0,"\u1f51\u03c0\u03ad\u03c1":!0,"\u1f51\u03c0\u1f78":!0,"\u1f51\u03c0\u03cc":!0,"\u1f61\u03c2":!0,"\u1f65\u03c3\u03c4\u03b5":!0,"\u1f66":!0,"\u03be\u03cd\u03bd":!0,"\u03be\u1f7a\u03bd":!0,"\u03c3\u1f7a\u03bd":!0,"\u03c4\u03bf\u1fd6\u03c2":!0,"\u03c4\u1fb6\u03c2":!0,ab:!0,ac:!0,ad:!0,adhic:!0,aliqui:!0,aliquis:!0,an:!0,ante:!0,apud:!0,at:!0,atque:!0,aut:!0,autem:!0,cum:!0,cur:!0,de:!0,deinde:!0,dum:!0,ego:!0,enim:!0,ergo:!0,es:!0,est:!0,et:!0,etiam:!0,etsi:!0,ex:!0,fio:!0,haud:!0,hic:!0,iam:!0,idem:!0,igitur:!0,ille:!0,in:!0,infra:!0,inter:!0,interim:!0,ipse:!0,is:!0,ita:!0,magis:!0,modo:!0,mox:!0,nam:!0,ne:!0,nec:!0,necque:!0,neque:!0,nisi:!0,non:!0,nos:!0,o:!0,ob:!0,per:!0,possum:!0,post:!0,pro:!0,quae:!0,quam:!0,quare:!0,qui:!0,quia:!0,quicumque:!0,quidem:!0,quilibet:!0,quis:!0,quisnam:!0,quisquam:!0,quisque:!0,quisquis:!0,quo:!0,quoniam:!0,sed:!0,si:!0,sic:!0,sive:!0,sub:!0,sui:!0,sum:!0,super:!0,suus:!0,tam:!0,tamen:!0,trans:!0,tu:!0,tum:!0,ubi:!0,uel:!0,uero:!0,unus:!0,ut:!0,punc:!0,"-que":!0,jam:!0,";":!0,",":!0,".":!0,"\xb7":!0,":":!0,"\u0313":!0},l=function(e){return!!n[e]}},40:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(47),c={colors:["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b"],enableTooltip:!0,deterministic:!0,fontFamily:"tinos",fontSizes:[20,80],fontStyle:"normal",fontWeight:"bold",padding:1,rotations:2,rotationAngles:[-90,0],scale:"linear",spiral:"rectangular",transitionDuration:0},o=function(e){var a=[];return Object.keys(e).forEach((function(t){var n=e[t];a.push({text:t,value:n})})),a};a.a=function(e){var a=e.words;return l.a.createElement(r.a,{words:o(a),options:c})}},50:function(e,a,t){e.exports=t(73)},57:function(e,a,t){},72:function(e,a){},73:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(30),c=t.n(r),o=(t(55),t(56),t(57),t(20)),s=t(7),i=t(1),m=t(31).a,d=t(37).a,u=function(){return l.a.createElement(s.a,{basename:"/treebank-wordcloud"},l.a.createElement(o.PerseidsHeader,null,"Treebank Word Cloud",l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.c,{className:"nav-link",exact:!0,to:"/"},"Home")))),l.a.createElement("main",{role:"main"},l.a.createElement("div",{className:"container text-center"},l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:m}),l.a.createElement(i.a,{path:"/:url/:index?",component:d})))),l.a.createElement(o.PerseidsFooter,{github:"https://github.com/perseids-project/treebank-wordcloud",report:"https://github.com/perseids-project/treebank-wordcloud/issues"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.24b2ae18.chunk.js.map