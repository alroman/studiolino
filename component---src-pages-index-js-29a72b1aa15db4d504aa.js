(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(t,e,a){"use strict";a.r(e);var n=a(161),r=a.n(n),i=a(0),c=a.n(i),o=(a(146),a(164)),s=a(152),l=(a(162),a(163),a(150));function d(){var t=r()(["\n  display: flex;\n  justify-content: center;\n  align-items:center;\n  flex-direction: column;\n  height: 100%;\n\n  div {\n    font-size: 3rem;\n    line-height: 1;\n\n    &.small {\n      margin-left: 20px;\n      font-size: 2.2rem;\n    }\n  }\n\n"]);return d=function(){return t},t}var u=o.a.div(d());e.default=function(){return c.a.createElement(s.a,null,c.a.createElement(l.a,{title:"Studiolino"}),c.a.createElement(u,null,c.a.createElement("div",null,"ス"),c.a.createElement("div",null,"タ"),c.a.createElement("div",null,"デ"),c.a.createElement("div",{className:"small"},"ィ"),c.a.createElement("div",null,"オ"),c.a.createElement("div",null,"リ"),c.a.createElement("div",null,"ノ")))}},146:function(t,e,a){"use strict";a.d(e,"b",function(){return d});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(33),s=a.n(o);a.d(e,"a",function(){return s.a});a(147);var l=r.a.createContext({}),d=function(t){return r.a.createElement(l.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},147:function(t,e,a){var n;t.exports=(n=a(149))&&n.default||n},148:function(t){t.exports={data:{site:{siteMetadata:{title:"Studiolino"}}}}},149:function(t,e,a){"use strict";a.r(e);a(34);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(55),s=a(2),l=function(t){var e=t.location,a=s.default.getResourcesForPathnameSync(e.pathname);return a?r.a.createElement(o.a,Object.assign({location:e,pageResources:a},a.json)):null};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},e.default=l},150:function(t,e,a){"use strict";var n=a(151),r=a(0),i=a.n(r),c=a(4),o=a.n(c),s=a(154),l=a.n(s);function d(t){var e=t.description,a=t.lang,r=t.meta,c=t.title,o=n.data.site,s=e||o.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(r)})}d.defaultProps={lang:"en",meta:[],description:""},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},e.a=d},151:function(t){t.exports={data:{site:{siteMetadata:{title:"Studiolino",description:"Studiolino.",author:"@alroman"}}}}},152:function(t,e,a){"use strict";var n=a(148),r=a(0),i=a.n(r),c=a(4),o=a.n(c),s=a(146),l=function(t){var e=t.siteTitle;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.a,{to:"/",style:{color:"white",textDecoration:"none"}},e))))};l.propTypes={siteTitle:o.a.string},l.defaultProps={siteTitle:""};a(153);var d=function(t){var e=t.children;return i.a.createElement(s.b,{query:"755544856",render:function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,e)))},data:n})};d.propTypes={children:o.a.node.isRequired};e.a=d},162:function(t){t.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png",srcSet:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/e22c9/gatsby-astronaut.png 75w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/d3809/gatsby-astronaut.png 150w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png 300w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/b5207/gatsby-astronaut.png 450w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/59139/gatsby-astronaut.png 600w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/af144/gatsby-astronaut.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-29a72b1aa15db4d504aa.js.map