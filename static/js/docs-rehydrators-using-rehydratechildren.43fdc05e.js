(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"./docs/rehydrators/using-rehydratechildren.mdx":function(e,n,a){"use strict";a.r(n);var t=a("./node_modules/react/index.js"),o=a.n(t),r=a("./node_modules/@mdx-js/tag/dist/index.js");function m(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}n.default=function(e){var n=e.components;m(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:n},o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"using-rehydratechildren"}},"Using rehydrateChildren"),o.a.createElement(r.MDXTag,{name:"blockquote",components:n},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"blockquote"},"A working version of this can be seen in the ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/demo/ShowMore"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"ShowMore")," demo"))),o.a.createElement(r.MDXTag,{name:"p",components:n},"Let's take ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/rehydrators/simple"}},"our ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"ShowMore")," component"),", and enhance it."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Instead of hiding or showing a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"content")," string, we want to hide or show some ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"children"),", which can be arbitrary React elements. To accomplish this, we can use the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"rehydrateChildren")," function, which is always passed as the second argument to a rehydrator."),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"rehydrateChildren")," accepts a DOM node as its only argument, and - importantly - will return its ",o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"children")," as React elements. Passing in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<div><p>Hello, world!</p></div>"),", for example, will only return ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<p>Hello, world!</p>"),"."),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"rehydrateChildren")," returns a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Promise")," - this is important to accomodate code splitting. You should always ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"await")," it, or use ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".then()"),"."),o.a.createElement(r.MDXTag,{name:"p",components:n},"The rehydrator should look like this:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},'import ShowMore from "./ShowMore";\n\nexport default async (domNode, rehydrateChildren) => {\n  const children = await rehydrateChildren(domNode.querySelector(".ShowMore-children"));\n\n  return <ShowMore>{children}</ShowMore>;\n}\n')))}}}]);