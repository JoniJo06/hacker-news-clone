(this["webpackJsonphacker-news"]=this["webpackJsonphacker-news"]||[]).push([[0],{106:function(e,t,n){},108:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(62),s=n.n(i),r=(n(79),n(9)),o=n(129),l=n(128),j=n(65),d=n.n(j),h=(n(80),n(1)),u=function(e){var t=e.name,n=e.name2,c=e.flexDirection,a=e.iconShown,i=e.iconScale;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"company-logo",style:{flexDirection:"".concat(c)},children:[Object(h.jsx)(d.a,{className:"company-logo-icon",style:{display:"".concat(a),transform:"scale(".concat(i,")")}}),Object(h.jsxs)("h1",{children:[t,Object(h.jsx)("sup",{className:"company-name-2",children:n})]})]})})},b=n(69),O=n.n(b),m=n(130),x=n(126),f=n(70),p=n.n(f),g=(n(38),function(e){for(var t=e.title,n=e.author,c=e.date,a=e.url,i=c.split(""),s=[],r=0;r<10;r++)s.push(i[r]);var l=s.join("");return Object(h.jsxs)(o.a,{className:"NewsCard",children:[Object(h.jsxs)("div",{className:"newsInfo",children:[Object(h.jsx)("h3",{children:t}),Object(h.jsxs)("p",{children:[l," | ",n]})]}),Object(h.jsxs)("a",{href:a,children:[Object(h.jsx)(p.a,{}),Object(h.jsx)("span",{children:"Zum Artikel"})]})]})}),w=function(e){var t=e.searchValue,n=e.hitsPerPage,a="DEFAULT"===n?20:n,i=Object(c.useState)(),s=Object(r.a)(i,2),l=s[0],j=s[1],d=Object(c.useState)(0),u=Object(r.a)(d,2),b=u[0],f=u[1];return Object(c.useEffect)((function(){j(),O.a.get("https://hn.algolia.com/api/v1/search?query=".concat(t,"&page=").concat(b,"&hitsPerPage=").concat(a)).then((function(e){return j(e)})).catch((function(e){return console.error(e)}))}),[b||t]),Object(h.jsxs)(o.a,{className:"NewsContainer",children:[l?l.data.hits.map((function(e){return Object(h.jsx)(g,{date:e.created_at,title:e.title,author:e.author,url:e.url},e.objectID)})):Object(h.jsx)(m.a,{className:"loadingSpinner"}),l?Object(h.jsx)(x.a,{color:"warning",className:"newsPagination",onChange:function(e){f(e.target.outerText-1)},count:1e3/a,page:b+1,shape:"rounded",hidePrevButton:!0,hideNextButton:!0}):null]})},v=function(e){var t=e.windowSize,n=Object(c.useState)(""),a=Object(r.a)(n,2),i=a[0],s=a[1],j=Object(c.useState)(""),d=Object(r.a)(j,2),b=d[0],O=d[1],m=Object(c.useState)(20),x=Object(r.a)(m,2),f=x[0],p=x[1];return Object(c.useEffect)((function(){}),[i]),Object(h.jsxs)(o.a,{className:"SearchBar",children:[Object(h.jsx)(u,{className:"company-logo",name:"HackerNews",name2:"clone",flexDirection:"column",iconScale:"2.5"}),Object(h.jsx)("div",{className:"searchForm",children:Object(h.jsx)("form",{onSubmit:function(e){e.preventDefault(),O(i),p(e.target.childNodes[0].childNodes[3].childNodes[0].value),s(e.target.childNodes[0].childNodes[1].childNodes[0].value),e.target.childNodes[0].childNodes[1].childNodes[0].value=""},children:Object(h.jsxs)(l.a,{container:!0,spacing:1,children:[Object(h.jsx)(l.a,{item:!0,md:1,xs:0}),Object(h.jsx)(l.a,{item:!0,md:5,xs:12,children:Object(h.jsx)("input",{className:"searchInput searchField",onChange:function(e){s(e.target.value)},type:"search",name:"",id:"",required:!0})}),Object(h.jsx)(l.a,{item:!0,md:2.5,xs:6,children:Object(h.jsx)("button",{className:"searchSubmit searchField",type:"submit",children:"Suchen"})}),Object(h.jsx)(l.a,{item:!0,md:2.5,xs:6,children:Object(h.jsxs)("select",{defaultValue:"DEFAULT",className:"searchHitsPerPage searchField",children:[Object(h.jsx)("option",{value:"DEFAULT",className:"hitsPerPageDisabled",disabled:!0,children:"pro Seite"}),Object(h.jsx)("option",{value:"10",children:"10"}),Object(h.jsx)("option",{value:"20",children:"20"}),Object(h.jsx)("option",{value:"50",children:"50"}),Object(h.jsx)("option",{value:"100",children:"100"})]})}),Object(h.jsx)(l.a,{item:!0,md:1,xs:0})]})})}),Object(h.jsx)(w,{hitsPerPage:f,searchValue:b,windowSize:t})]})},N=n(125),S=(n(106),function(e){var t=e.windowSize;return Object(h.jsx)(o.a,{maxWidth:"100%",className:"Header",children:Object(h.jsxs)(y,{children:[Object(h.jsx)(u,{iconShown:t.width<550?"none":"block",name:"HackerNews",name2:"clone",flexDirection:"row",iconScale:"1.5"}),Object(h.jsx)("a",{className:"original-link",href:"https://news.ycombinator.com/news",rel:"noreferrer",target:"_blank",children:t.width<550?"Original":"zur originalen Webseite"})]})})}),y=Object(N.a)("div")({display:"flex",justifyContent:"space-between",alignItems:"center",padding:"5px 0"});var P=function(){var e=F();return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(S,{windowSize:e}),Object(h.jsx)(v,{windowSize:e})]})},F=function(){var e=Object(c.useState)({width:void 0,height:void 0}),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){var e=function(){a({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,131)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(P,{})}),document.getElementById("root")),D()},38:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){}},[[108,1,2]]]);
//# sourceMappingURL=main.295a40a5.chunk.js.map