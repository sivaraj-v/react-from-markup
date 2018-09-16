(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"./docs/rehydrators/dynamic-rehydratable-name.mdx":function(e,a,n){"use strict";n.r(a);var t=n("./node_modules/react/index.js"),r=n.n(t),o=n("./node_modules/@mdx-js/tag/dist/index.js");function m(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}a.default=function(e){var a=e.components;m(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",components:a},r.a.createElement(o.MDXTag,{name:"h1",components:a,props:{id:"determining-data-rehydratable-name-from-the-markup"}},"Determining data-rehydratable-name from the markup"),r.a.createElement(o.MDXTag,{name:"p",components:a},"In the previous examples, you'll notice that the ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"data-rehydratable-name")," needs to exist in three places: inside your component definition, in the markup that you integrate into your templates, and as a key in the list of rehydrators you pass to ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"react-from-markup"),"."),r.a.createElement(o.MDXTag,{name:"p",components:a},"You could decouple your components from your implementation by having a ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"rehydratableName")," prop, and reading the ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"data-rehydratable-name")," prop in your rehydrator."),r.a.createElement(o.MDXTag,{name:"pre",components:a},r.a.createElement(o.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-javascript"}},'import ShowMore from "./ShowMore";\n\n// Modify <ShowMore /> so that its data-rehydratable-name prop looks like\n//   data-rehydratable-name={this.props.rehydratableName}\n// It might be useful to have a `defaultProps` value set, as well.\n\nexport default async (domNode) => {\n  const props = {\n    rehydratableName: domNode.getAttribute("data-rehydratable-name")\n  };\n  const children = await rehydrateChildren(domNode.querySelector(".ShowMore-children"));\n\n  return <ShowMore {...props}>{children}</ShowMore>\n};\n')),r.a.createElement(o.MDXTag,{name:"p",components:a},"By determining the rehydratable name in this way, only your templates and your call to ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"rehydrate")," need to match. This could enable you to namespace your rehydratable names (for example, ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"mainSite-ShowMore"),"), without hard-coding the namespace into your components themselves."))}}}]);