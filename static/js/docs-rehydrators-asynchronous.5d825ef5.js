(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"./docs/rehydrators/asynchronous.mdx":function(e,n,a){"use strict";a.r(n);var t=a("./node_modules/react/index.js"),o=a.n(t),r=a("./node_modules/@mdx-js/tag/dist/index.js");function m(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}n.default=function(e){var n=e.components;m(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:n},o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"asynchronous-rehydrators"}},"Asynchronous rehydrators"),o.a.createElement(r.MDXTag,{name:"blockquote",components:n},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"blockquote"},"You may find the ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/demo/AsynchronousRehydrator"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"AsynchronousRehydrator")," demo")," useful to see how this works.")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Rehydrators are expected to use ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Promise"),"s. The main reason for this is to make use of the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"import()")," function, which is available in many module bundlers like ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"webpack"),". It can help to keep your initial bundle size small, and only load component code as you need it."),o.a.createElement(r.MDXTag,{name:"p",components:n},"There are two places where this may be appropriate: during rehydration, or during configuration."),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"during-rehydration"}},"During rehydration"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Your rehydrator can use ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"import()"),", instead of declaring its ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"import"),"s at the top of the file. Using the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"HelloUser")," example, it could be modified to this:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},'export default async (domNode, rehydrateChildren, { userName }) => {\n  const HelloUser = (await import("./HelloUser")).default;\n\n  return <HelloUser userName={userName} />;\n};\n')),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"webpack")," would be able to split ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"HelloUser.js")," into a separate file, and only load it if a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"HelloUser")," rehydratable is found on the page."),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"during-configuration"}},"During configuration"),o.a.createElement(r.MDXTag,{name:"p",components:n},"It's not always possible to use ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"import()")," inside the rehydrator. If you publish your components to NPM, for example, you might not want to include calls to ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"import()"),", because it's not a function that's widely understood by browsers yet. It's an implementation-specific hook for module bundlers."),o.a.createElement(r.MDXTag,{name:"p",components:n},"You can also save a few extra kilobytes on page load by moving your ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"import()")," call further up the call stack, because then your rehydrators can be split off, too."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Regardless of your reasoning, it's entirely possible to use ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"import()")," when you call ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"rehydrate()"),". It would look something like this:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},'import rehydrate from "react-from-markup";\n\nrehydrate(\n  document.getElementById("root"),\n  {\n    HelloUser: async (...args) => (await import("./components/HelloUser/rehydrator")).default(...args),\n    ShowMore: async (...args) => (await import("./components/ShowMore/rehydrator")).default(...args)\n  },\n  {\n    extra: {\n      userName: Cookies.get("user_name")\n    }\n  }\n);\n')))}}}]);