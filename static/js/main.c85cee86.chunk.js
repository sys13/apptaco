(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{155:function(e,t,a){e.exports=a(470)},160:function(e,t,a){},176:function(e,t,a){},470:function(e,t,a){"use strict";a.r(t);var n=a(148),r=a.n(n),o=(a(160),a(162),a(0)),c=a.n(o),l=a(472),s=a(473),i=a(475),m=a(3),p=a(4),u=a(6),d=a(5),h=a(7),g=a(14),f=(a(176),function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:""},c.a.createElement(g.Helmet,null,c.a.createElement("meta",{charSet:"utf-8"}),c.a.createElement("title",null,"AppTaco")),this.props.children)}}]),t}(o.Component)),b=a(471),E=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark"},c.a.createElement(b.a,{className:"navbar-brand",to:"/"},c.a.createElement("img",{src:"/apptaco/icon-white.svg",alt:"logo",className:"heading-logo"}),"AppTaco"),c.a.createElement(b.a,{className:"nav-link",to:"/"},"Home"),c.a.createElement(b.a,{className:"nav-link",to:"/share"},"Share"),c.a.createElement(b.a,{className:"nav-link",to:"/config"},"Config"),c.a.createElement(b.a,{className:"nav-link",to:"/"},"Help"))}}]),t}(o.Component),v=a(20),y=a(149),N=a.n(y),O=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"alert alert-info d-flex align-items-center",role:"alert"},c.a.createElement("strong",null,"Loading..."),c.a.createElement("div",{"aria-hidden":"true",className:"spinner-border ml-auto",role:"status"}))}}]),t}(o.Component),j=function(e){var t=e.id,a=e.name,n=e.description,r=e.image;return c.a.createElement(b.a,{to:"/taco/".concat(t)},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("img",{src:r.data,className:"card-img-top",alt:"..."}),c.a.createElement("h5",{className:"card-title"},a),c.a.createElement("p",{className:"card-text text-dark"},n))))},C=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={error:null,isLoaded:!1,items:[]},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat("https://warm-chamber-63964.herokuapp.com","/api/v1/tacos")).then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,items:t})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"search",value:function(e,t){return t.filter(function(t){var a=t.name,n=t.description,r=t.tags;return a.toLowerCase().includes(e)||n.includes(e)||r.includes(e)})}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.items;if(t)return c.a.createElement("div",{className:"alert alert-danger",role:"alert"},c.a.createElement("h4",{className:"alert-heading"},"We dropped your tacos!"),c.a.createElement("p",null,"Error Message: ",t.message));if(!a)return c.a.createElement(O,null);var r=this.props.searchQuery,o=""===r?n:this.search(r.toLowerCase(),n);return c.a.createElement("div",{className:"card-columns"},o&&o.length&&o.map(function(e){var t=e.id,a=e.name,n=e.description,r=e.image;return c.a.createElement(j,{key:t,id:t,name:a,image:r,description:n})}))}}]),t}(o.Component),k=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={search:""},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(v.a)({},n,r))},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=N.a.parse(this.props.location.search).search;e&&this.setState({search:e})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(g.Helmet,null,c.a.createElement("title",null,"AppTaco")),c.a.createElement("div",{className:"jumbotron"},c.a.createElement("h1",{className:"display-5"},"AppDynamics Configs, in Seconds"),c.a.createElement("p",{className:"lead"},"It is really cool"),c.a.createElement("hr",{className:"my-4"}),c.a.createElement("p",{className:"lead"},"Like sooo cool")),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"landing-searchbar input-group mb-3"},c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search",name:"search","aria-label":"Search","aria-describedby":"button-addon2",onChange:this.handleInputChange,value:this.state.search}),c.a.createElement("div",{className:"input-group-append"},c.a.createElement("button",{className:"btn btn-primary",type:"button",id:"button-addon2"},"Search"))),c.a.createElement(C,{searchQuery:this.state.search})))}}]),t}(o.Component),w=a(474),x=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement("span",null,this.props.children,c.a.createElement("a",{href:this.props.to},c.a.createElement("img",{style:{height:"12px",marginLeft:"2px"},alt:"(vist ".concat(this.props.to,")"),src:"/apptaco/external.svg"})))}}]),t}(o.Component),S=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e={author:"light",appdynamics:"info",vendor:"success"}[this.props.type];return c.a.createElement("span",{className:"badge badge-pill badge-".concat(e)},this.props.type," supported")}}]),t}(o.Component),T=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.taco||{},t=e.id,a=e.name,n=e.support,r=e.description,o=e.version,l=e.tags,s=e.authors,i=e.ingredients,m=e.product_link;return c.a.createElement("div",{className:"container"},c.a.createElement(g.Helmet,null,c.a.createElement("title",null,"AppTaco - Taco")),c.a.createElement("div",{className:"my-3"},c.a.createElement("h1",{className:"taco-details-title d-inline"},"Taco"),c.a.createElement(b.a,{to:"/taco/".concat(t,"/deploy/all")},c.a.createElement("button",{className:"btn btn-primary float-right"},"Deploy Taco"))),c.a.createElement("ul",{className:"taco-details-info list-group"},c.a.createElement("li",{className:"list-group-item"},c.a.createElement("b",null,"Name:")," ",c.a.createElement(x,{to:m},a)," ",c.a.createElement(S,{type:n})),o?c.a.createElement("li",{className:"list-group-item"},c.a.createElement("b",null,"Version:")," ",o):null,l?c.a.createElement("li",{className:"list-group-item"},c.a.createElement("b",null,"Tags:")," ",l.map(function(e,t){return c.a.createElement("span",{key:t},c.a.createElement(b.a,{className:"badge badge-warning",key:t,to:"/?search=".concat(e)},e),"\xa0")})):null,s?c.a.createElement("li",{className:"list-group-item"},c.a.createElement("b",null,"Authors: "),s):null,r?c.a.createElement("li",{className:"list-group-item"},c.a.createElement("b",null,"Description: "),r):null),c.a.createElement("div",{className:"taco-details-description mt-4"},c.a.createElement("h4",{className:"mb-3"},"Ingredients"),c.a.createElement("ul",{className:"taco-details-ingredients list-group"},i&&i.length?i.map(function(e){var a=e.type,n=e.doc;return c.a.createElement("li",{key:a,className:"list-group-item"},c.a.createElement("b",null,a)," - ",n,c.a.createElement(b.a,{to:"/taco/".concat(t,"/deploy/").concat(a)},c.a.createElement("button",{className:"btn btn-secondary float-right"},"Deploy Ingredient")))}):null)))}}]),t}(o.Component),I=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={error:null,isLoaded:!1,items:[]},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;t&&fetch("".concat("https://warm-chamber-63964.herokuapp.com","/api/v1/tacos/").concat(t)).then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,item:t})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"render",value:function(){return c.a.createElement(T,{taco:this.state.item,loaded:this.state.loaded})}}]),t}(o.Component),L=Object(w.a)(I),D=a(22),A=a.n(D),H=a(42),P=a(152),M=a.n(P),J=a(153),F=function(e){function t(e){var a;Object(m.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleSettingsChange=function(e){e.preventDefault();var t=e.target,n=t.name,r=t.value;a.setState({settings:Object(H.a)({},a.state.settings,Object(v.a)({},n,r))})},a.handleCloseColor=function(){console.log("close"),a.setState({visibleColorPicker:""})},a.deploy=function(){var e=a.props,t=e.taco,n=e.deployScope,r=e.config;console.log("PROPS",a.props),a.setState({deploying:!0,deployMsg:"Deployment in progress"}),fetch("".concat("https://warm-chamber-63964.herokuapp.com","/api/v1/tacos/").concat(t.id,"/deploy"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({post:{deployScope:n,config:r,id:t.id,settings:a.state.settings}})}).then(function(e){e.json().then(function(e){var t=e.msg;a.setState({deploying:!1,deployMsg:t})})}).catch(function(e){a.setState({deploying:!1,deployMsg:e.msg?e.msg:"No error message provided"})})};var n={};return e.taco.settings&&Object.keys(e.taco.settings).forEach(function(t){n[t]=e.taco.settings[t].default}),a.state={deploying:!1,visibleColorPicker:"",deployMsg:"",settings:n},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"handleClickColor",value:function(e){var t=this.state.visibleColorPicker===e?"":e;this.setState({visibleColorPicker:t})}},{key:"handleColorChange",value:function(e,t){console.log(e,t),this.setState({settings:Object(H.a)({},this.state.settings,Object(v.a)({},e,t.hex))})}},{key:"render",value:function(){var e=this,t=this.props,a=t.taco,n=t.controllerHost,r={swatch:{padding:"5px",background:"#fff",borderRadius:"1px",boxShadow:"0 0 0 1px rgba(0,0,0,.1)",cursor:"pointer"},popover:{position:"absolute",zIndex:"2"},cover:{position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}};return c.a.createElement("div",{className:"my-3"},c.a.createElement("h1",{className:"taco-details-title"},"Deploy Taco: ",a.name),c.a.createElement("div",{className:"mb-3"},n?"Using controller host: '".concat(n,"'"):"No controller config set up yet",c.a.createElement("span",null,"\xa0",c.a.createElement(b.a,{to:"/config"},"(configure)")),Object.keys(a.settings).map(function(t){var n=a.settings[t];return c.a.createElement("div",{className:"form-group",key:t},c.a.createElement("label",{htmlFor:"deployment-setting-".concat(t)},M.a.title(t)),"color"===n.type?c.a.createElement("div",null,c.a.createElement("div",{style:r.swatch,onClick:function(){return e.handleClickColor(t)}},c.a.createElement("div",{style:{height:"20px",borderRadius:"2px",background:"".concat(e.state.settings[t])}})),e.state.visibleColorPicker===t?c.a.createElement("div",{style:r.popover},c.a.createElement("div",{style:r.cover,onClick:e.handleCloseColor}),c.a.createElement(J.SketchPicker,{color:e.state.color,name:t,onChange:function(a){return e.handleColorChange(t,a)}})):null):c.a.createElement("input",{onChange:e.handleSettingsChange,name:t,type:"text",className:"form-control",id:"deployment-setting-".concat(t),value:e.state.settings[t]}),c.a.createElement("small",{className:"form-text text-muted"},n.description))})),c.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.deploy,disabled:!1},this.state.deploying?c.a.createElement("div",null,c.a.createElement("div",{className:"spinner-border spinner-border-sm mr-1",role:"status"},c.a.createElement("span",{className:"sr-only"},"Loading...")),c.a.createElement("span",{className:""},"Deploying Dashboard")):c.a.createElement("div",null,"Deploy Dashboard")),c.a.createElement("div",null,this.state.deployMsg))}}]),t}(o.Component),W=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={error:null,isLoaded:!1,item:{}},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.id;t&&fetch("".concat("https://warm-chamber-63964.herokuapp.com","/api/v1/tacos/").concat(t)).then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,item:t})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"render",value:function(){var e=this.props,t=e.controllerHost,a=e.deployScope,n=this.state,r=n.error,o=n.isLoaded,l=n.item;return r?c.a.createElement("div",{className:"alert alert-danger",role:"alert"},c.a.createElement("h4",{className:"alert-heading"},"We dropped your tacos!"),c.a.createElement("p",null,"Error Message: ",r.message)):o?c.a.createElement("div",{className:"container"},c.a.createElement(g.Helmet,null,c.a.createElement("title",null,"AppTaco - Deploy")),c.a.createElement(F,{taco:l,deployScope:a,controllerHost:t,config:this.props.config})):c.a.createElement(O,null)}}]),t}(o.Component),U=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.match.params,t=e.id,a=e.deployScope,n=A.a.get("controllerConfig")&&JSON.parse(A.a.get("controllerConfig"))||{},r=(n||{}).host;if(t)return c.a.createElement(W,{id:t,deployScope:a,controllerHost:r,config:n})}}]),t}(o.Component),R=Object(w.a)(U),B=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement(g.Helmet,null,c.a.createElement("title",null,"AppTaco - Share")),c.a.createElement("div",{className:"mt-3"},c.a.createElement("h1",null,"Share"),c.a.createElement("div",{className:"card bg-light my-4"},c.a.createElement("div",{className:"card-body"},c.a.createElement("p",{className:"card-text"},"Everyone loves more tacos! We would really appreciate your help in creating a library of more tacos."))),c.a.createElement("h3",{className:"mb-3"},"3 Steps to Taco Fame"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"1. Use"," ",c.a.createElement("a",{href:"https://singularity.jira.com/wiki/spaces/CS/pages/107413539/Config+Exporter"},"Config Exporter")," ","to export your config JSONs"),c.a.createElement("li",{className:"list-group-item"},"2. Export dashboards JSONs"),c.a.createElement("li",{className:"list-group-item"},"3. Zip it up and send us an email at"," ",c.a.createElement("a",{href:"mailto:apptaco@appdynamics.com"},"apptaco@appdynamics.com")))))}}]),t}(o.Component),Q=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement(g.Helmet,null,c.a.createElement("title",null,"About AppTaco")),c.a.createElement("h1",null,"About"),c.a.createElement("div",null,c.a.createElement("p",null,"AppDynamics Configs, in Seconds"),c.a.createElement("p",null,"Learn more about it at the"," ",c.a.createElement("a",{href:"https://github.com/sys13/apptaco"},"GitHub repository"),".")))}}]),t}(o.Component),z=a(92),G=a.n(z),V=a(154),Z=[{path:"/",component:k,exact:!0},{path:"/taco/:id",component:L,exact:!0},{path:"/share",component:B,exact:!0},{path:"/taco/:id/deploy/:deployScope",component:R,exact:!0},{path:"/config",component:function(e){function t(){var e;Object(m.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).onSubmit=function(){},e.handleInputChange=function(t){var a,n=t.target,r="checkbox"===n.type?n.checked:n.value,o=n.name,c=A.a.get("controllerConfig")&&JSON.parse(A.a.get("controllerConfig")),l=Object(H.a)({},c,Object(v.a)({},o,r));A.a.set("controllerConfig",JSON.stringify(l)),e.setState((a={},Object(v.a)(a,o,r),Object(v.a)(a,"connectionTested",!1),a))},e.onTestConnection=function(){var t=Object(V.a)(G.a.mark(function t(a){var n,r,o,c,l,s,i;return G.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),e.setState({connectionTestLoading:!0}),n=A.a.get("controllerConfig")&&JSON.parse(A.a.get("controllerConfig"))||{},r=n.host,o=n.username,c=n.password,l=n.account,s=n.port,i=n.https,fetch("".concat("https://warm-chamber-63964.herokuapp.com","/api/v1/testConnection"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({post:{host:r,username:o,password:c,account:l,port:s,https:i}})}).then(function(t){t.json().then(function(t){var a=t.succeeded,n=t.error;console.log(a),e.setState({succeeded:a,connectionTestLoading:!1,connectionError:n,connectionTested:!0})})}).catch(function(t){e.setState({succeeded:!1,connectionTestLoading:!1,connectionError:{errorMsg:t.message?t.message:"Something went wrong...",type:"danger"},connectionTested:!0})});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}();var a=A.a.get("controllerConfig"),n=a&&JSON.parse(a)||{},r=n.host,o=n.username,c=n.password,l=n.account,s=n.port,i=n.https;return e.state={host:r,username:o,password:c,account:l,port:s,https:i,connectionTestLoading:!1,connectionTested:!1},e}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"container mt-4"},c.a.createElement("h1",null,"Configuration"),c.a.createElement("div",{className:"my-3"},c.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.onTestConnection},"Save & Test Connection")),c.a.createElement("div",null,this.state.connectionTestLoading?c.a.createElement("div",{className:"alert alert-info d-flex align-items-center",role:"alert"},c.a.createElement("strong",null,"Testing connection..."),c.a.createElement("div",{"aria-hidden":"true",className:"spinner-border ml-auto",role:"status"})):null,this.state.connectionTested&&this.state.succeeded?c.a.createElement("div",{className:"alert alert-success"},"Connection succeeded!"):null,this.state.connectionTested&&!this.state.succeeded?c.a.createElement("div",{className:"alert alert-danger",role:"alert"},c.a.createElement("h4",{className:"alert-heading"},"Connection failed!"),c.a.createElement("p",null,this.state.connectionError?this.state.connectionError.errorMsg:"No error message provided.")):null),c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"hostInput"},"Controller Host"),c.a.createElement("input",{type:"text",className:"form-control",name:"host",id:"hostInput",placeholder:"Controller hostname ex: mycompany.saas.appdynamics.com",onChange:this.handleInputChange,value:this.state.host}),c.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Please don't add 'http://' or 'https://'. Example: mycompany.saas.appdynamics.com")),c.a.createElement("div",{className:"form-check mb-3"},c.a.createElement("input",{className:"form-check-input",type:"checkbox",onChange:this.handleInputChange,checked:this.state.https,value:this.state.https,name:"https",id:"httpsInput"}),c.a.createElement("label",{className:"form-check-label",htmlFor:"httpsInput"},"HTTPS")),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"accountInput"},"Account"),c.a.createElement("input",{type:"text",className:"form-control",name:"account",id:"accountInput",placeholder:"Account",onChange:this.handleInputChange,value:this.state.account}),c.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Default account name is customer1")),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"usernameInput"},"Username"),c.a.createElement("input",{type:"text",className:"form-control",name:"username",id:"usernameInput",placeholder:"Username",onChange:this.handleInputChange,value:this.state.username})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"passwordInput"},"Password"),c.a.createElement("input",{type:"password",className:"form-control",name:"password",id:"passwordInput",placeholder:"Password",onChange:this.handleInputChange,value:this.state.password}),c.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Note: Password is stored in plain-text on your computer")),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"portInput"},"Port (optional)"),c.a.createElement("input",{type:"text",className:"form-control",name:"port",id:"portInput",placeholder:"Port",onChange:this.handleInputChange,value:this.state.port}),c.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Default is port 80. Only need to set this for on-prem controllers")))))}}]),t}(o.Component),exact:!0},{path:"/about",component:Q,exact:!0}],$=function(e){return c.a.createElement(l.a,{path:e.path,exact:e.exact,render:function(t){return c.a.createElement(e.component,Object.assign({},t,{routes:e.routes}))}})},_=function(){return c.a.createElement(s.a,null,c.a.createElement(f,null,c.a.createElement(E,null),c.a.createElement(i.a,null,Z.map(function(e,t){return c.a.createElement($,Object.assign({key:t},e))}))))},q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(_(),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/apptaco",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/apptaco","/service-worker.js");q?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):K(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):K(e)})}}()}},[[155,2,1]]]);
//# sourceMappingURL=main.c85cee86.chunk.js.map