(function(t){function e(e){for(var n,r,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,s=1;s<o.length;s++){var c=o[s];0!==i[c]&&(n=!1)}n&&(a.splice(e--,1),t=r(r.s=o[0]))}return t}var n={},i={app:0},a=[];function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var p=c;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0554":function(t,e,o){var n=o("96a4");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("499e").default;i("17611838",n,!0,{sourceMap:!1,shadowMode:!1})},"21bb":function(t,e,o){"use strict";var n=o("7920"),i=o.n(n);i.a},"3fb4":function(t,e,o){var n=o("24fb");e=n(!1),e.push([t.i,".home .navbar{position:fixed;top:0;width:100%;padding:20px 0;font-size:30px;font-weight:700;background:#fff;box-shadow:0 2px 6px 0 rgba(0,0,0,.06);z-index:999}.home .banner{height:100vh;background:url(https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&ixid=eyJhcHBfaWQiOjEyMDd9&ixlib=rb-1.2.1&q=80&w=1500) no-repeat 50%;background-size:cover;background-attachment:fixed;-webkit-clip-path:polygon(100% 0,100% 75%,50% 100%,0 75%,0 0);clip-path:polygon(100% 0,100% 75%,50% 100%,0 75%,0 0);z-index:-1}.home .content .title{margin:50px 0;font-size:30px;font-weight:700}.home .content .section{width:100%;display:flex;margin:50px 0}.home .content .section .pic{height:80vh;width:50%;background:url(https://media.cakeresume.com/image/upload/s--i9mAyk35--/c_fit,f_auto,fl_png8,h_600/v1545703612/trkm8p3i4tseumppapyv.png) no-repeat top;background-size:cover;background-attachment:fixed;-webkit-clip-path:polygon(50% 13%,90% 50%,50% 87%,0 100%,0 0);clip-path:polygon(50% 13%,90% 50%,50% 87%,0 100%,0 0)}.home .content .section .repos{width:50%}.home .content .section .repos ul{box-sizing:border-box;height:100%;width:100%;padding:30px}.home .content .section .repos ul li{position:relative;height:20%;width:80%;margin:2.5% auto;padding:10px;line-height:33px;box-sizing:border-box;border-radius:5px;border:1px solid #0f4c81;text-align:left;transition:all .5s}.home .content .section .repos ul li:hover{background:#0f4c81}.home .content .section .repos ul li:hover .name,.home .content .section .repos ul li:hover .url{opacity:0;transition:all .5s}.home .content .section .repos ul li:hover .description{opacity:1}.home .content .section .repos ul li .name{font-size:24px;font-weight:700}.home .content .section .repos ul li .description{position:absolute;top:50%;transform:translateY(-50%);font-size:24px;color:#fff;opacity:0}.home .content .section .repos ul li a{color:unset;text-decoration:none}.home .content .section.second .pic{-webkit-clip-path:polygon(100% 0,50% 13%,10% 50%,50% 87%,100% 100%);clip-path:polygon(100% 0,50% 13%,10% 50%,50% 87%,100% 100%)}",""]),t.exports=e},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},a=[],r={},s=r,c=(o("5c0b"),o("2877")),l=Object(c["a"])(s,i,a,!1,null,null,null),p=l.exports,u=o("8c4f"),d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("div",{staticClass:"navbar"},[t._v(" 應徵者: 饒家鴻 ")]),o("div",{staticClass:"banner"}),o("div",{staticClass:"content"},[o("div",{staticClass:"title"},[t._v("Github Repo")]),o("div",{staticClass:"section first"},[o("div",{staticClass:"pic"}),o("div",{staticClass:"repos"},[o("ul",t._l(t.repos.slice(0,4),(function(e,n){return o("li",{key:n},[o("a",{attrs:{href:e.html_url,target:"_blank"}},[o("div",{staticClass:"name"},[t._v(t._s(e.name))]),o("div",{staticClass:"description"},[t._v(t._s(e.description))]),o("div",{staticClass:"url"},[t._v(t._s(e.html_url))])])])})),0)])]),o("div",{staticClass:"section second"},[o("div",{staticClass:"repos"},[o("ul",t._l(t.repos.slice(4,8),(function(e,n){return o("li",{key:n},[o("a",{attrs:{href:e.html_url,target:"_blank"}},[o("div",{staticClass:"name"},[t._v(t._s(e.name))]),o("div",{staticClass:"url"},[t._v(t._s(e.html_url))]),o("div",{staticClass:"description"},[t._v(t._s(e.description))])])])})),0)]),o("div",{staticClass:"pic"})])])])},f=[],h={name:"Home",data:function(){return{repos:[]}},methods:{getData:function(){var t=this,e="https://api.github.com/users/physicx594/repos";this.axios.get(e).then((function(e){t.repos=e.data})).catch((function(t){console.log(t,"讀取錯誤，請檢查")}))}},created:function(){this.getData()}},b=h,m=(o("21bb"),Object(c["a"])(b,d,f,!1,null,null,null)),v=m.exports;n["a"].use(u["a"]);var g=[{path:"/",name:"Home",component:v}],y=new u["a"]({routes:g}),x=y,_=o("bc3a"),k=o.n(_),w=o("a7fe"),C=o.n(w);n["a"].config.productionTip=!1,n["a"].use(C.a,k.a),new n["a"]({router:x,render:function(t){return t(p)}}).$mount("#app")},"5c0b":function(t,e,o){"use strict";var n=o("0554"),i=o.n(n);i.a},7920:function(t,e,o){var n=o("3fb4");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("499e").default;i("aecf61bc",n,!0,{sourceMap:!1,shadowMode:!1})},"96a4":function(t,e,o){var n=o("24fb");e=n(!1),e.push([t.i,'a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#0f4c81}',""]),t.exports=e}});
//# sourceMappingURL=app.da85f32c.js.map