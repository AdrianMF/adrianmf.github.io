webpackJsonp([3],{"3SdT":function(t,e,r){"use strict";function o(t,e,r){return(new p).shimCssText(t,e,e+"-h",e+"-s",r)}function n(t){return t.replace(H,"")}function c(t){return t.match(O)||[]}function s(t,e){var r=i(t),o=0;return r.escapedString.replace(b,function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var c=t[2],s="",i=t[4],p="";i&&i.startsWith("{"+T)&&(s=r.blocks[o++],i=i.substring(T.length+1),p="{");var l=e(new k(c,s));return""+t[1]+l.selector+t[3]+p+l.content+i})}function i(t){for(var e=t.split(W),r=[],o=[],n=0,c=[],s=0;s<e.length;s++){var i=e[s];i===j&&n--,n>0?c.push(i):(c.length>0&&(o.push(c.join("")),r.push(T),c=[]),r.push(i)),i===P&&n++}return c.length>0&&(o.push(c.join("")),r.push(T)),new M(r.join(""),o)}Object.defineProperty(e,"__esModule",{value:!0}),r.d(e,"ShadowCss",function(){return p}),r.d(e,"scopeCss",function(){return o});var p=function(){function t(){this.strictStyling=!0}return t.prototype.shimCssText=function(t,e,r,o,i){void 0===r&&(r=""),void 0===o&&(o=""),void 0===i&&(i=!1);var p=c(t);t=n(t);var l=[];if(i){var u=function(t){var e="/*!@___"+l.length+"___*/";return l.push({placeholder:e,comment:"/*!@"+t.selector+"*/"}),t.selector=e+t.selector,t};t=s(t,function(t){return"@"!==t.selector[0]?u(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=s(t.content,u),t):t})}var a=this._scopeCssText(t,e,r,o,i);return t=[a].concat(p).join("\n"),i&&l.forEach(function(e){t=t.replace(e.placeholder,e.comment)}),t},t.prototype._scopeCssText=function(t,e,r,o,n){return t=this._insertPolyfillHostInCssText(t),t=this._convertColonHost(t),t=this._convertColonHostContext(t),t=this._convertColonSlotted(t,o),t=this._convertShadowDOMSelectors(t),e&&(t=this._scopeSelectors(t,e,r,o,n)),t=t.replace(/-shadowcsshost-no-combinator/g,"."+r),t=t.replace(/>\s*\*\s+([^{, ]+)/gm," $1 "),t.trim()},t.prototype._convertColonHost=function(t){return this._convertColonRule(t,_,this._colonHostPartReplacer)},t.prototype._convertColonSlotted=function(t,e){return t.replace(g,function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];if(t[2]){var o=t[2].trim();return"."+e+" > "+o+t[3]}return v+t[3]})},t.prototype._convertColonHostContext=function(t){return this._convertColonRule(t,d,this._colonHostContextPartReplacer)},t.prototype._convertColonRule=function(t,e,r){return t.replace(e,function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(t[2]){for(var o=t[2].split(","),n=[],c=0;c<o.length;c++){var s=o[c].trim();if(!s)break;n.push(r(v,s,t[3]))}return n.join(",")}return v+t[3]})},t.prototype._colonHostContextPartReplacer=function(t,e,r){return e.indexOf(u)>-1?this._colonHostPartReplacer(t,e,r):t+e+r+", "+e+" "+t+r},t.prototype._colonHostPartReplacer=function(t,e,r){return t+e.replace(u,"")+r},t.prototype._convertShadowDOMSelectors=function(t){return m.reduce(function(t,e){return t.replace(e," ")},t)},t.prototype._scopeSelectors=function(t,e,r,o,n){var c=this;return s(t,function(t){var s=t.selector,i=t.content;return"@"!==t.selector[0]?s=c._scopeSelector(t.selector,e,r,o,c.strictStyling):(t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document"))&&(i=c._scopeSelectors(t.content,e,r,o,n)),s=s.replace(/\s{2,}/g," ").trim(),new k(s,i)})},t.prototype._scopeSelector=function(t,e,r,o,n){var c=this;return t.split(",").map(function(t){return o&&t.indexOf("."+o)>-1?t.trim():c._selectorNeedsScoping(t,e)?n?c._applyStrictSelectorScope(t,e,r).trim():c._applySelectorScope(t,e,r).trim():t.trim()}).join(", ")},t.prototype._selectorNeedsScoping=function(t,e){return!this._makeScopeMatcher(e).test(t)},t.prototype._makeScopeMatcher=function(t){var e=/\[/g,r=/\]/g;return t=t.replace(e,"\\[").replace(r,"\\]"),new RegExp("^("+t+")"+y,"m")},t.prototype._applySelectorScope=function(t,e,r){return this._applySimpleSelectorScope(t,e,r)},t.prototype._applySimpleSelectorScope=function(t,e,r){if(x.lastIndex=0,x.test(t)){var o=this.strictStyling?"."+r:e;return t.replace(S,function(t,e){return e.replace(/([^:]*)(:*)(.*)/,function(t,e,r,n){return e+o+r+n})}).replace(x,o+" ")}return e+" "+t},t.prototype._applyStrictSelectorScope=function(t,e,r){var o=this;e=e.replace(/\[is=([^\]]*)\]/g,function(){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e];return t[0]});var n="."+e,c=function(t){var c=t.trim();if(!c)return"";if(t.indexOf(v)>-1)c=o._applySimpleSelectorScope(t,e,r);else{var s=t.replace(x,"");if(s.length>0){var i=s.match(/([^:]*)(:*)(.*)/);i&&(c=i[1]+n+i[2]+i[3])}}return c},s=new l(t);t=s.content();for(var i,p="",u=0,a=/( |>|\+|~(?!=))\s*/g,h=t.indexOf(v)>-1,f=!h;null!==(i=a.exec(t));){var _=i[1],d=t.slice(u,i.index).trim();f=f||d.indexOf(v)>-1;p+=(f?c(d):d)+" "+_+" ",u=a.lastIndex}var g=t.substring(u);return f=f||g.indexOf(v)>-1,p+=f?c(g):g,s.restore(p)},t.prototype._insertPolyfillHostInCssText=function(t){return t=t.replace(R,h).replace(C,u).replace(w,a)},t}(),l=function(){function t(t){var e=this;this.placeholders=[],this.index=0,t=t.replace(/(\[[^\]]*\])/g,function(t,r){var o="__ph-"+e.index+"__";return e.placeholders.push(r),e.index++,o}),this._content=t.replace(/(:nth-[-\w]+)(\([^)]+\))/g,function(t,r,o){var n="__ph-"+e.index+"__";return e.placeholders.push(o),e.index++,r+n})}return t.prototype.restore=function(t){var e=this;return t.replace(/__ph-(\d+)__/g,function(t,r){return e.placeholders[+r]})},t.prototype.content=function(){return this._content},t}(),u="-shadowcsshost",a="-shadowcssslotted",h="-shadowcsscontext",f=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",_=new RegExp("("+u+f,"gim"),d=new RegExp("("+h+f,"gim"),g=new RegExp("("+a+f,"gim"),v=u+"-no-combinator",S=/-shadowcsshost-no-combinator([^\s]*)/,m=[/::shadow/g,/::content/g],y="([>\\s~+[.,{:][\\s\\S]*)?$",x=/-shadowcsshost/gim,C=/:host/gim,w=/::slotted/gim,R=/:host-context/gim,H=/\/\*\s*[\s\S]*?\*\//g,O=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,b=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,W=/([{}])/g,P="{",j="}",T="%BLOCK%",k=function(){function t(t,e){this.selector=t,this.content=e}return t}(),M=function(){function t(t,e){this.escapedString=t,this.blocks=e}return t}()}});
//# sourceMappingURL=3.chunk.ddf57.js.map