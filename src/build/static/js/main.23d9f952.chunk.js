(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e,t,n){e.exports=n(317)},133:function(e,t,n){},222:function(e,t,n){},311:function(e,t,n){},317:function(e,t,n){"use strict";n.r(t);n(128);var a=n(0),r=n.n(a),c=n(27),l=n.n(c),i=(n(133),n(108)),o=n(109),s=n(123),u=n(110),m=n(124),d=n(26),f=n(7),p=n(11),E=n.n(p),h=n(21),v=n(15),b=function(){var e=Object(a.useState)(!0),t=Object(v.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)([]),i=Object(v.a)(l,2),o=i[0],s=i[1],u=Object(a.useState)(""),m=Object(v.a)(u,2),d=m[0],f=m[1];Object(a.useEffect)(function(){function e(){return(e=Object(h.a)(E.a.mark(function e(){var t,n;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/toDoList");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,s(n);case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[]);var p=function(){var e=Object(h.a)(E.a.mark(function e(){var t,n;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/toDoList/add",{method:"post",body:JSON.stringify({name:d,crossed:!1}),headers:{"Content-Type":"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,s(n),f("");case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)(function(){d.length>0?c(!1):c(!0)},[d]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"to-do-list"},r.a.createElement("h2",null," To Do List"),r.a.createElement("h4",null,"Number of Tasks: ",o.length),r.a.createElement("div",{className:"toDo-add-section"},r.a.createElement("label",null,r.a.createElement("input",{value:d,onChange:function(e){return f(e.target.value)}})),r.a.createElement("button",{className:"to-do-button",disabled:n,onClick:function(){return p()}},"Add Task")),r.a.createElement(function(){return r.a.createElement("div",null,o.map(function(e,t){return r.a.createElement("div",{key:t},!e.crossed&&r.a.createElement("div",{className:"uncrossed"}," ",e.name),e.crossed&&r.a.createElement("div",{className:"crossed"},e.name))}))},null),r.a.createElement("p",null,"(Feel free to add suggestions)")))},g=function(){return r.a.createElement("div",{className:"fade-in"},r.a.createElement("h1",null,"Welcome to Everything But Bagel!"),r.a.createElement("p",null,"I created this mock blog in order to get practice with tool like React. This site is hosted on Amazon Web Services and any persisted data (to do list, comments and upvotes) is stored using a Mongo database. The calls are made using the Node framework Express. The pokemon card page uses GraphQL All of the content in the articles are manged using the CMS Contentful. Once I recieve the content from Contentful I save it using Redux."),r.a.createElement("div",{className:"ToDoList-container"},r.a.createElement(b,null)))},k=function(){return r.a.createElement("div",{className:"fade-in"},r.a.createElement("h1",null,"About me"),r.a.createElement("p",null,"Hello! I graduated College with a degree in Computer Science along with minors in Bussiness and Mathmatics in 2017."),r.a.createElement("p",null,"I spent one year working as a full stack developer at Unisys where I created software that allowed users to apply for loans from the USDA. Next I worked for two years as a front end devloper at Martiz Motivation. At Maritz I worked on webbased applications that companies the ability to create rewareds programs."),r.a.createElement("a",{href:"https://www.linkedin.com/in/evanprather",rel:"noopener noreferrer",target:"_blank"},"LinkedIn"),r.a.createElement("p",null,"Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id consequat quam. Vivamus accumsan dui in facilisis aliquet.,"),r.a.createElement("p",null,"Etiam nec lectus urna. Sed sodales ultrices dapibus. Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id consequat quam. Vivamus accumsan dui in facilisis aliquet.,"))},w=function(e){var t=e.articles;return r.a.createElement(r.a.Fragment,null,t.map(function(e,t){return r.a.createElement("div",{className:"article-container",key:t},r.a.createElement(d.b,{className:"article-list",to:"/article/".concat(e.fields.slug)},r.a.createElement("div",{className:"article-item"},r.a.createElement("img",{className:"list-picture",src:e.fields.featuredImage.fields.file.url,alt:e.fields.title}),r.a.createElement("h3",null,e.fields.title),r.a.createElement("p",null,e.fields.body.substring(0,150),"..."))))}))},y="ADD_ARTICLES";function N(e){return{type:y,data:e}}var O=n(28),j=Object(O.b)(function(e){return{contentfulArticles:e.articles}},function(e){return{setContentful:function(t){return e(N(t))}}})(function(e){return e.contentfulArticles.length<1||!e.contentfulArticles?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"fade-in"},"Articles"),e.contentfulArticles&&r.a.createElement(w,{articles:e.contentfulArticles}))}),A=function(e){var t=e.comments;return t.reverse(),r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Comments:"),t.map(function(e,t){return r.a.createElement("div",{className:"comment",key:t},r.a.createElement("h4",null,e.username),r.a.createElement("p",null,e.text))}))},x=function(e){var t=e.articleName,n=e.upvotes,a=e.setArticleInfo,c=function(){var e=Object(h.a)(E.a.mark(function e(){var n,r;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/upvote"),{method:"post"});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,a(r);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{id:"upvotes-section"},r.a.createElement("button",{className:"standard-button",onClick:function(){return c()}},"Add Upvote"),r.a.createElement("p",null,"Total Upvotes: ",n))},C=function(e){var t=e.articleName,n=e.setArticleInfo,c=Object(a.useState)(""),l=Object(v.a)(c,2),i=l[0],o=l[1],s=Object(a.useState)(""),u=Object(v.a)(s,2),m=u[0],d=u[1],f=Object(a.useState)(!0),p=Object(v.a)(f,2),b=p[0],g=p[1],k=function(){var e=Object(h.a)(E.a.mark(function e(){var a,r;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/add-comment"),{method:"post",body:JSON.stringify({username:i,text:m}),headers:{"Content-Type":"application/json"}});case 2:return a=e.sent,e.next=5,a.json();case 5:r=e.sent,n(r),o(""),d(""),g(!0);case 10:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)(function(){i.length>0&&m.length>0?g(!1):g(!0)},[m,i]),r.a.createElement("div",{id:"add-comment-form"},r.a.createElement("h3",null,"Add a Comment"),r.a.createElement("label",null,"Name *",r.a.createElement("input",{type:"text",id:"username",value:i,onChange:function(e){return o(e.target.value)}})),r.a.createElement("label",null,"Comment *",r.a.createElement("textarea",{rows:"4",id:"comment",maxLength:"200",cols:"50",value:m,onChange:function(e){return d(e.target.value)}})),r.a.createElement("button",{className:"standard-button",disabled:b,onClick:function(){return k()}},"Add Comment"))},S=function(){return r.a.createElement("h1",null,"404: Page Not Found")},I=Object(O.b)(function(e){return{contentfulArticles:e.articles}},function(e){return{}})(function(e){var t=e.match,c=e.contentfulArticles,l=n(141),i=Object(a.useState)(),o=Object(v.a)(i,2),s=o[0],u=o[1],m=Object(a.useState)(),d=Object(v.a)(m,2),f=d[0],p=d[1],b=Object(a.useState)(!0),g=Object(v.a)(b,2),k=g[0],y=g[1],N=t.params.name,O=Object(a.useState)({upvotes:0,comments:[]}),j=Object(v.a)(O,2),I=j[0],D=j[1];if(Object(a.useEffect)(function(){c.length>1&&u(c)},[c]),Object(a.useEffect)(function(){var e=function(){var e=Object(h.a)(E.a.mark(function e(){var t,n;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(N));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,D(n);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();if(s){var t=s.find(function(e){return e.fields.slug===N});p(t.fields)}e(),window.scrollTo(0,0)},[N]),Object(a.useEffect)(function(){if(s){var e=s.find(function(e){return e.fields.slug===N});e&&(p(e.fields),y(!1)),y(!1)}},[s]),!f&&k)return r.a.createElement(r.a.Fragment,null);if(!f&&!k)return r.a.createElement(S,null);var T=c.filter(function(e){return e.fields.slug!==N});return r.a.createElement("div",{className:"fade-in"},r.a.createElement("h1",null,f.title),r.a.createElement("img",{className:"img-main",src:f.featuredImage.fields.file.url,alt:f.title}),r.a.createElement(l,{source:f.body}),r.a.createElement(x,{articleName:N,upvotes:I.upvotes,setArticleInfo:D}),r.a.createElement(C,{articleName:N,setArticleInfo:D}),r.a.createElement(A,{comments:I.comments}),r.a.createElement("h2",null,"Other Articles:"),r.a.createElement(w,{articles:T}))}),D=n(320),T=(n(221),function(){var e=Object(a.useState)(!1),t=Object(v.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(!1),i=Object(v.a)(l,2),o=i[0],s=i[1];Object(a.useEffect)(function(){var e=window.matchMedia("(max-width: 700px)");return e.addListener(u),u(e),function(){e.removeListener(u)}},[]);var u=function(e){e.matches?s(!0):s(!1)};return r.a.createElement("header",{className:"Header"},r.a.createElement(D.a,{in:!o||n,timeout:350,classNames:"NavAnimation",unmountOnExit:!0},r.a.createElement("nav",{className:"Nav"},r.a.createElement(d.b,{onClick:function(){return c(!1)},to:"/"},"Home"),r.a.createElement(d.b,{onClick:function(){return c(!1)},to:"/about"},"About"),r.a.createElement(d.b,{onClick:function(){return c(!1)},to:"/articles-list"},"Articles"),r.a.createElement(d.b,{onClick:function(){return c(!1)},to:"/pokemon"},"Pokemon"),r.a.createElement("a",{href:"https://www.linkedin.com/in/evanprather",rel:"noopener noreferrer",target:"_blank"},"LinkedIn"),r.a.createElement("a",{href:"https://github.com/EPrathe",rel:"noopener noreferrer",target:"_blank"},"GitHub"))),r.a.createElement("button",{onClick:function(){c(!n)},className:"Burger"},r.a.createElement("i",{className:"fa fa-bars"})))}),_=(n(222),n(120)),F=function(){var e=Object(h.a)(E.a.mark(function e(){var t;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a({space:"4l76bla6vbnr",accessToken:"iIk069YpSKyGEGpv-dY5HnnWpXZo1AbP00lp7wcg3y0"});case 2:return t=e.sent,e.abrupt("return",t.getEntries().then(function(e){return e.items}).catch(function(e){return console.error(e)}));case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),L=n(116),M=(n(311),n(50)),q=n.n(M),B=n(70),P=n(117);function W(){var e=Object(L.a)(["\n{\n    pokemons(first: 151) {\n      id,\n      number,\n      name,\n      image,\n      types,\n      weight {\n        maximum\n      }\n      resistant,\n      weaknesses,\n      height {\n        maximum\n      }\n      attacks {\n        special{\n          name,\n          damage,\n          type\n        }\n      }\n    }\n  }\n"]);return W=function(){return e},e}var G=n.n(P)()(W());var H=function(){var e=Object(B.a)(G),t=e.data,n=e.loading,a=e.error;return n?r.a.createElement("div",{className:"loading"},r.a.createElement("i",{className:"fa fa-spinner fa-spin"},"Loading")):a?r.a.createElement("p",null,"error"):(t.pokemons.map(function(e){return"Grass"===e.types[0]?(e.color="#78C850",e):"Fire"===e.types[0]?(e.color="#F08030",e):"Water"===e.types[0]?(e.color="#6890F0",e):"Electric"===e.types[0]?(e.color="#F8D030",e):"Bug"===e.types[0]?(e.color="#A8B820",e):"Normal"===e.types[0]?(e.color="#A8A878",e):"Poison"===e.types[0]?(e.color="#A040A0",e):"Ground"===e.types[0]?(e.color="#E0C068",e):"Fairy"===e.types[0]?(e.color="#EE99AC",e):"Dragon"===e.types[0]?(e.color="#7038F8",e):"Fighting"===e.types[0]?(e.color="#C03028",e):"Psychic"===e.types[0]?(e.color="#F85888",e):"Rock"===e.types[0]?(e.color="#B8A038",e):"Ghost"===e.types[0]?(e.color="#705898",e):e}),r.a.createElement("div",{className:"main"},r.a.createElement("h1",null,"Pok\xe9mon"),r.a.createElement("p",null,"Every website is better with Pok\xe9mon!"),r.a.createElement("p",null,"This page was created with the help of",r.a.createElement("a",{href:"https://github.com/lucasbento/graphql-pokemon",rel:"noopener noreferrer",target:"_blank"}," this graphql api")),r.a.createElement("div",{className:"container"},t&&t.pokemons&&t.pokemons.map(function(e,t){return r.a.createElement(q.a,{key:t},r.a.createElement(M.FrontSide,{className:"card",style:{border:"5px solid "+e.color}},r.a.createElement("div",null,r.a.createElement("div",{className:"pokemon-number"},e.number),r.a.createElement("div",{className:"pokemon-type"},e.types[0])),r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:e.image,alt:""})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",null,e.name),r.a.createElement("p",null,"Height: ",e.height.maximum),r.a.createElement("div",null,r.a.createElement("p",null,"Weight: ",e.weight.maximum)))),r.a.createElement(M.BackSide,{className:"card",style:{border:"5px solid "+e.color}},r.a.createElement("div",{className:"special-attacks-container"},r.a.createElement("div",null,r.a.createElement("h3",null,"Special Attacks:"),e.attacks.special.map(function(e,t){return r.a.createElement("div",{key:t}," ",e.name,"- ",e.damage," damage ")}))),r.a.createElement("div",{className:"strong-container"},r.a.createElement("h3",null,"Strong Against:"),e.resistant.map(function(e,t){return r.a.createElement("div",{key:t}," ",e)})),r.a.createElement("div",{className:"weak-container"},r.a.createElement("h3",null,"Weak Against:"),e.weaknesses.map(function(e,t){return r.a.createElement("div",{key:t}," ",e)}))))}))))},R=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={copy:null},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;F().then(function(e){return e}).then(function(t){e.setState({copy:t}),e.props.setContentful(t)})}},{key:"render",value:function(){return this.state.copy?r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(T,null),r.a.createElement("div",{id:"page-body"},r.a.createElement(f.c,null,r.a.createElement(f.a,{path:"/",component:g,exact:!0}),r.a.createElement(f.a,{path:"/about",component:k}),r.a.createElement(f.a,{path:"/articles-list",component:j}),r.a.createElement(f.a,{path:"/article/:name",component:I}),r.a.createElement(f.a,{path:"/pokemon",component:H}),r.a.createElement(f.a,{component:S}))))):null}}]),t}(a.Component),U=Object(O.b)(function(e){return{content:e.articles[0]}},function(e){return{setContentful:function(t){return e(N(t))}}})(R);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=n(47),J=n(125),V={articles:[],loading:!1,hasErrors:!1};var z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object.assign({},e,Object(J.a)({},e,{articles:t.data}));default:return e}},Y=Object(X.b)(z,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),K=n(29),Q=n(121),Z=n(122),$=n(14),ee=new Q.a,te=new Z.a({uri:"https://graphql-pokemon.now.sh/"}),ne=new K.a({cache:ee,link:te});l.a.render(r.a.createElement($.a,{client:ne},r.a.createElement(O.a,{store:Y},r.a.createElement(U,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},73:function(e,t){}},[[127,1,2]]]);
//# sourceMappingURL=main.23d9f952.chunk.js.map