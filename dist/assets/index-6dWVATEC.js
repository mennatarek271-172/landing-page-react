import{R as q,i as bs,r as c,_ as tr,a as jr,b as dt,c as ft,s as ua,g as Do,u as Fr,d as M,f as on,e as $e,h as le,L as ys,l as Tn,j as Oa,k as ie,m as zt,n as Ra,o as xs,I as Wo,p as da,w as ot,q as Xe,t as H,v as N,x as Cs,y as mt,z as Pr,A as ee,B as xt,C as Tt,D as gt,E as Ss,F as Mn,G as ws,H as qo,J as Nr,K as $s,M as Es,N as Os,O as $t,P as Le,Q as br,S as Rs,T as Is,U as J,V as Go,W as Ye,X as sn,Y as js,Z as fa,$ as Fs,a0 as Ps,a1 as zr,a2 as ut,a3 as yr,a4 as An,a5 as Ns,a6 as _n,a7 as ko,a8 as de,a9 as kt,aa as St,ab as vt,ac as Ia,ad as zs,ae as Ts,af as Ms,ag as As,ah as _s,ai as Bs,aj as Vs,ak as Ls,al as ja,am as K,an as $,ao as Hs,ap as Ds}from"./index-CVIy7vOr.js";function xr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=[];return q.Children.forEach(e,function(n){n==null&&!t.keepEmpty||(Array.isArray(n)?r=r.concat(xr(n)):bs(n)&&n.props?r=r.concat(xr(n.props.children,t)):r.push(n))}),r}var Bn=c.createContext(null);function Ws(e){var t=e.children,r=e.onBatchResize,n=c.useRef(0),a=c.useRef([]),o=c.useContext(Bn),i=c.useCallback(function(s,l,d){n.current+=1;var u=n.current;a.current.push({size:s,element:l,data:d}),Promise.resolve().then(function(){u===n.current&&(r?.(a.current),a.current=[])}),o?.(s,l,d)},[r,o]);return c.createElement(Bn.Provider,{value:i},t)}var Uo=(function(){if(typeof Map<"u")return Map;function e(t,r){var n=-1;return t.some(function(a,o){return a[0]===r?(n=o,!0):!1}),n}return(function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(r){var n=e(this.__entries__,r),a=this.__entries__[n];return a&&a[1]},t.prototype.set=function(r,n){var a=e(this.__entries__,r);~a?this.__entries__[a][1]=n:this.__entries__.push([r,n])},t.prototype.delete=function(r){var n=this.__entries__,a=e(n,r);~a&&n.splice(a,1)},t.prototype.has=function(r){return!!~e(this.__entries__,r)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(r,n){n===void 0&&(n=null);for(var a=0,o=this.__entries__;a<o.length;a++){var i=o[a];r.call(n,i[1],i[0])}},t})()})(),Vn=typeof window<"u"&&typeof document<"u"&&window.document===document,Cr=(function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()})(),qs=(function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(Cr):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}})(),Gs=2;function ks(e,t){var r=!1,n=!1,a=0;function o(){r&&(r=!1,e()),n&&s()}function i(){qs(o)}function s(){var l=Date.now();if(r){if(l-a<Gs)return;n=!0}else r=!0,n=!1,setTimeout(i,t);a=l}return s}var Us=20,Xs=["top","right","bottom","left","width","height","size","weight"],Ys=typeof MutationObserver<"u",Ks=(function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=ks(this.refresh.bind(this),Us)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var r=this.observers_,n=r.indexOf(t);~n&&r.splice(n,1),!r.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(r){return r.gatherActive(),r.hasActive()});return t.forEach(function(r){return r.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!Vn||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Ys?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!Vn||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var r=t.propertyName,n=r===void 0?"":r,a=Xs.some(function(o){return!!~n.indexOf(o)});a&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e})(),Xo=(function(e,t){for(var r=0,n=Object.keys(t);r<n.length;r++){var a=n[r];Object.defineProperty(e,a,{value:t[a],enumerable:!1,writable:!1,configurable:!0})}return e}),Mt=(function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||Cr}),Yo=Tr(0,0,0,0);function Sr(e){return parseFloat(e)||0}function Fa(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return t.reduce(function(n,a){var o=e["border-"+a+"-width"];return n+Sr(o)},0)}function Zs(e){for(var t=["top","right","bottom","left"],r={},n=0,a=t;n<a.length;n++){var o=a[n],i=e["padding-"+o];r[o]=Sr(i)}return r}function Js(e){var t=e.getBBox();return Tr(0,0,t.width,t.height)}function Qs(e){var t=e.clientWidth,r=e.clientHeight;if(!t&&!r)return Yo;var n=Mt(e).getComputedStyle(e),a=Zs(n),o=a.left+a.right,i=a.top+a.bottom,s=Sr(n.width),l=Sr(n.height);if(n.boxSizing==="border-box"&&(Math.round(s+o)!==t&&(s-=Fa(n,"left","right")+o),Math.round(l+i)!==r&&(l-=Fa(n,"top","bottom")+i)),!tl(e)){var d=Math.round(s+o)-t,u=Math.round(l+i)-r;Math.abs(d)!==1&&(s-=d),Math.abs(u)!==1&&(l-=u)}return Tr(a.left,a.top,s,l)}var el=(function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof Mt(e).SVGGraphicsElement}:function(e){return e instanceof Mt(e).SVGElement&&typeof e.getBBox=="function"}})();function tl(e){return e===Mt(e).document.documentElement}function rl(e){return Vn?el(e)?Js(e):Qs(e):Yo}function nl(e){var t=e.x,r=e.y,n=e.width,a=e.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,i=Object.create(o.prototype);return Xo(i,{x:t,y:r,width:n,height:a,top:r,right:t+n,bottom:a+r,left:t}),i}function Tr(e,t,r,n){return{x:e,y:t,width:r,height:n}}var al=(function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Tr(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=rl(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e})(),ol=(function(){function e(t,r){var n=nl(r);Xo(this,{target:t,contentRect:n})}return e})(),il=(function(){function e(t,r,n){if(this.activeObservations_=[],this.observations_=new Uo,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=r,this.callbackCtx_=n}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof Mt(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var r=this.observations_;r.has(t)||(r.set(t,new al(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof Mt(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var r=this.observations_;r.has(t)&&(r.delete(t),r.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(r){r.isActive()&&t.activeObservations_.push(r)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,r=this.activeObservations_.map(function(n){return new ol(n.target,n.broadcastRect())});this.callback_.call(t,r,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e})(),Ko=typeof WeakMap<"u"?new WeakMap:new Uo,Zo=(function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var r=Ks.getInstance(),n=new il(t,r,this);Ko.set(this,n)}return e})();["observe","unobserve","disconnect"].forEach(function(e){Zo.prototype[e]=function(){var t;return(t=Ko.get(this))[e].apply(t,arguments)}});var sl=(function(){return typeof Cr.ResizeObserver<"u"?Cr.ResizeObserver:Zo})(),bt=new Map;function ll(e){e.forEach(function(t){var r,n=t.target;(r=bt.get(n))===null||r===void 0||r.forEach(function(a){return a(n)})})}var Jo=new sl(ll);function cl(e,t){bt.has(e)||(bt.set(e,new Set),Jo.observe(e)),bt.get(e).add(t)}function ul(e,t){bt.has(e)&&(bt.get(e).delete(t),bt.get(e).size||(Jo.unobserve(e),bt.delete(e)))}var dl=(function(e){tr(r,e);var t=jr(r);function r(){return dt(this,r),t.apply(this,arguments)}return ft(r,[{key:"render",value:function(){return this.props.children}}]),r})(c.Component);function fl(e,t){var r=e.children,n=e.disabled,a=c.useRef(null),o=c.useRef(null),i=c.useContext(Bn),s=typeof r=="function",l=s?r(a):r,d=c.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),u=!s&&c.isValidElement(l)&&ua(l),f=u?Do(l):null,p=Fr(f,a),y=function(){var S;return on(a.current)||(a.current&&$e(a.current)==="object"?on((S=a.current)===null||S===void 0?void 0:S.nativeElement):null)||on(o.current)};c.useImperativeHandle(t,function(){return y()});var h=c.useRef(e);h.current=e;var g=c.useCallback(function(m){var S=h.current,v=S.onResize,C=S.data,R=m.getBoundingClientRect(),b=R.width,O=R.height,x=m.offsetWidth,I=m.offsetHeight,w=Math.floor(b),E=Math.floor(O);if(d.current.width!==w||d.current.height!==E||d.current.offsetWidth!==x||d.current.offsetHeight!==I){var j={width:w,height:E,offsetWidth:x,offsetHeight:I};d.current=j;var F=x===Math.round(b)?b:x,z=I===Math.round(O)?O:I,P=M(M({},j),{},{offsetWidth:F,offsetHeight:z});i?.(P,m,C),v&&Promise.resolve().then(function(){v(P,m)})}},[]);return c.useEffect(function(){var m=y();return m&&!n&&cl(m,g),function(){return ul(m,g)}},[a.current,n]),c.createElement(dl,{ref:o},u?c.cloneElement(l,{ref:p}):l)}var ml=c.forwardRef(fl),gl="rc-observer-key";function pl(e,t){var r=e.children,n=typeof r=="function"?[r]:xr(r);return n.map(function(a,o){var i=a?.key||"".concat(gl,"-").concat(o);return c.createElement(ml,le({},e,{key:i,ref:o===0?t:void 0}),a)})}var Qo=c.forwardRef(pl);Qo.Collection=Ws;const hl=(e,t)=>{const r=c.useContext(ys),n=c.useMemo(()=>{var o;const i=t||Tn[e],s=(o=r?.[e])!==null&&o!==void 0?o:{};return Object.assign(Object.assign({},typeof i=="function"?i():i),s||{})},[e,t,r]),a=c.useMemo(()=>{const o=r?.locale;return r?.exist&&!o?Tn.locale:o},[r]);return[n,a]};function ln(e){return e!==void 0}function Mr(e,t){var r=t||{},n=r.defaultValue,a=r.value,o=r.onChange,i=r.postState,s=Oa(function(){return ln(a)?a:ln(n)?typeof n=="function"?n():n:typeof e=="function"?e():e}),l=ie(s,2),d=l[0],u=l[1],f=a!==void 0?a:d,p=i?i(f):f,y=zt(o),h=Oa([f]),g=ie(h,2),m=g[0],S=g[1];Ra(function(){var C=m[0];d!==C&&y(d,C)},[m]),Ra(function(){ln(a)||u(a)},[a]);var v=zt(function(C,R){u(C,R),S([f],R)});return[p,v]}const ma=["blue","purple","cyan","green","magenta","pink","red","orange","yellow","volcano","geekblue","lime","gold"];var vl={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"};function ei(e){var t;return e==null||(t=e.getRootNode)===null||t===void 0?void 0:t.call(e)}function bl(e){return ei(e)instanceof ShadowRoot}function yl(e){return bl(e)?ei(e):null}function xl(e){return e.replace(/-(.)/g,function(t,r){return r.toUpperCase()})}function Cl(e,t){ot(e,"[@ant-design/icons] ".concat(t))}function Pa(e){return $e(e)==="object"&&typeof e.name=="string"&&typeof e.theme=="string"&&($e(e.icon)==="object"||typeof e.icon=="function")}function Na(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(e).reduce(function(t,r){var n=e[r];return r==="class"?(t.className=n,delete t.class):(delete t[r],t[xl(r)]=n),t},{})}function Ln(e,t,r){return r?q.createElement(e.tag,M(M({key:t},Na(e.attrs)),r),(e.children||[]).map(function(n,a){return Ln(n,"".concat(t,"-").concat(e.tag,"-").concat(a))})):q.createElement(e.tag,M({key:t},Na(e.attrs)),(e.children||[]).map(function(n,a){return Ln(n,"".concat(t,"-").concat(e.tag,"-").concat(a))}))}function ti(e){return xs(e)[0]}function ri(e){return e?Array.isArray(e)?e:[e]:[]}var Sl=`
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,wl=function(t){var r=c.useContext(Wo),n=r.csp,a=r.prefixCls,o=r.layer,i=Sl;a&&(i=i.replace(/anticon/g,a)),o&&(i="@layer ".concat(o,` {
`).concat(i,`
}`)),c.useEffect(function(){var s=t.current,l=yl(s);da(i,"@ant-design-icons",{prepend:!o,csp:n,attachTo:l})},[])},$l=["icon","className","onClick","style","primaryColor","secondaryColor"],Xt={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function El(e){var t=e.primaryColor,r=e.secondaryColor;Xt.primaryColor=t,Xt.secondaryColor=r||ti(t),Xt.calculated=!!r}function Ol(){return M({},Xt)}var Lt=function(t){var r=t.icon,n=t.className,a=t.onClick,o=t.style,i=t.primaryColor,s=t.secondaryColor,l=Xe(t,$l),d=c.useRef(),u=Xt;if(i&&(u={primaryColor:i,secondaryColor:s||ti(i)}),wl(d),Cl(Pa(r),"icon should be icon definiton, but got ".concat(r)),!Pa(r))return null;var f=r;return f&&typeof f.icon=="function"&&(f=M(M({},f),{},{icon:f.icon(u.primaryColor,u.secondaryColor)})),Ln(f.icon,"svg-".concat(f.name),M(M({className:n,onClick:a,style:o,"data-icon":f.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},l),{},{ref:d}))};Lt.displayName="IconReact";Lt.getTwoToneColors=Ol;Lt.setTwoToneColors=El;function ni(e){var t=ri(e),r=ie(t,2),n=r[0],a=r[1];return Lt.setTwoToneColors({primaryColor:n,secondaryColor:a})}function Rl(){var e=Lt.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor}var Il=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];ni(Cs.primary);var Ee=c.forwardRef(function(e,t){var r=e.className,n=e.icon,a=e.spin,o=e.rotate,i=e.tabIndex,s=e.onClick,l=e.twoToneColor,d=Xe(e,Il),u=c.useContext(Wo),f=u.prefixCls,p=f===void 0?"anticon":f,y=u.rootClassName,h=H(y,p,N(N({},"".concat(p,"-").concat(n.name),!!n.name),"".concat(p,"-spin"),!!a||n.name==="loading"),r),g=i;g===void 0&&s&&(g=-1);var m=o?{msTransform:"rotate(".concat(o,"deg)"),transform:"rotate(".concat(o,"deg)")}:void 0,S=ri(l),v=ie(S,2),C=v[0],R=v[1];return c.createElement("span",le({role:"img","aria-label":n.name},d,{ref:t,tabIndex:g,onClick:s,className:h}),c.createElement(Lt,{icon:n,primaryColor:C,secondaryColor:R,style:m}))});Ee.displayName="AntdIcon";Ee.getTwoToneColor=Rl;Ee.setTwoToneColor=ni;var jl=function(t,r){return c.createElement(Ee,le({},t,{ref:r,icon:vl}))},ai=c.forwardRef(jl),Fl={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"}}]},name:"close-circle",theme:"filled"},Pl=function(t,r){return c.createElement(Ee,le({},t,{ref:r,icon:Fl}))},oi=c.forwardRef(Pl),Nl={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"}}]},name:"close",theme:"outlined"},zl=function(t,r){return c.createElement(Ee,le({},t,{ref:r,icon:Nl}))},ii=c.forwardRef(zl),Tl={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"},Ml=function(t,r){return c.createElement(Ee,le({},t,{ref:r,icon:Tl}))},Al=c.forwardRef(Ml),_l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"},Bl=function(t,r){return c.createElement(Ee,le({},t,{ref:r,icon:_l}))},Vl=c.forwardRef(Bl),Ll=`accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,Hl=`onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,Dl="".concat(Ll," ").concat(Hl).split(/[\s\n]+/),Wl="aria-",ql="data-";function za(e,t){return e.indexOf(t)===0}function At(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r;t===!1?r={aria:!0,data:!0,attr:!0}:t===!0?r={aria:!0}:r=M({},t);var n={};return Object.keys(e).forEach(function(a){(r.aria&&(a==="role"||za(a,Wl))||r.data&&za(a,ql)||r.attr&&Dl.includes(a))&&(n[a]=e[a])}),n}const sr=(e,t,r,n,a)=>({background:e,border:`${ee(n.lineWidth)} ${n.lineType} ${t}`,[`${a}-icon`]:{color:r}}),Gl=e=>{const{componentCls:t,motionDurationSlow:r,marginXS:n,marginSM:a,fontSize:o,fontSizeLG:i,lineHeight:s,borderRadiusLG:l,motionEaseInOutCirc:d,withDescriptionIconSize:u,colorText:f,colorTextHeading:p,withDescriptionPadding:y,defaultPadding:h}=e;return{[t]:Object.assign(Object.assign({},Pr(e)),{position:"relative",display:"flex",alignItems:"center",padding:h,wordWrap:"break-word",borderRadius:l,[`&${t}-rtl`]:{direction:"rtl"},[`${t}-content`]:{flex:1,minWidth:0},[`${t}-icon`]:{marginInlineEnd:n,lineHeight:0},"&-description":{display:"none",fontSize:o,lineHeight:s},"&-message":{color:p},[`&${t}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${r} ${d}, opacity ${r} ${d},
        padding-top ${r} ${d}, padding-bottom ${r} ${d},
        margin-bottom ${r} ${d}`},[`&${t}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${t}-with-description`]:{alignItems:"flex-start",padding:y,[`${t}-icon`]:{marginInlineEnd:a,fontSize:u,lineHeight:0},[`${t}-message`]:{display:"block",marginBottom:n,color:p,fontSize:i},[`${t}-description`]:{display:"block",color:f}},[`${t}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},kl=e=>{const{componentCls:t,colorSuccess:r,colorSuccessBorder:n,colorSuccessBg:a,colorWarning:o,colorWarningBorder:i,colorWarningBg:s,colorError:l,colorErrorBorder:d,colorErrorBg:u,colorInfo:f,colorInfoBorder:p,colorInfoBg:y}=e;return{[t]:{"&-success":sr(a,n,r,e,t),"&-info":sr(y,p,f,e,t),"&-warning":sr(s,i,o,e,t),"&-error":Object.assign(Object.assign({},sr(u,d,l,e,t)),{[`${t}-description > pre`]:{margin:0,padding:0}})}}},Ul=e=>{const{componentCls:t,iconCls:r,motionDurationMid:n,marginXS:a,fontSizeIcon:o,colorIcon:i,colorIconHover:s}=e;return{[t]:{"&-action":{marginInlineStart:a},[`${t}-close-icon`]:{marginInlineStart:a,padding:0,overflow:"hidden",fontSize:o,lineHeight:ee(o),backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${r}-close`]:{color:i,transition:`color ${n}`,"&:hover":{color:s}}},"&-close-text":{color:i,transition:`color ${n}`,"&:hover":{color:s}}}}},Xl=e=>({withDescriptionIconSize:e.fontSizeHeading3,defaultPadding:`${e.paddingContentVerticalSM}px 12px`,withDescriptionPadding:`${e.paddingMD}px ${e.paddingContentHorizontalLG}px`}),Yl=mt("Alert",e=>[Gl(e),kl(e),Ul(e)],Xl);var Ta=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Kl={success:ai,info:Vl,error:oi,warning:Al},Zl=e=>{const{icon:t,prefixCls:r,type:n}=e,a=Kl[n]||null;return t?Ss(t,c.createElement("span",{className:`${r}-icon`},t),()=>({className:H(`${r}-icon`,t.props.className)})):c.createElement(a,{className:`${r}-icon`})},Jl=e=>{const{isClosable:t,prefixCls:r,closeIcon:n,handleClose:a,ariaProps:o}=e,i=n===!0||n===void 0?c.createElement(ii,null):n;return t?c.createElement("button",Object.assign({type:"button",onClick:a,className:`${r}-close-icon`,tabIndex:0},o),i):null},si=c.forwardRef((e,t)=>{const{description:r,prefixCls:n,message:a,banner:o,className:i,rootClassName:s,style:l,onMouseEnter:d,onMouseLeave:u,onClick:f,afterClose:p,showIcon:y,closable:h,closeText:g,closeIcon:m,action:S,id:v}=e,C=Ta(e,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action","id"]),[R,b]=c.useState(!1),O=c.useRef(null);c.useImperativeHandle(t,()=>({nativeElement:O.current}));const{getPrefixCls:x,direction:I,closable:w,closeIcon:E,className:j,style:F}=xt("alert"),z=x("alert",n),[P,T,A]=Yl(z),V=D=>{var L;b(!0),(L=e.onClose)===null||L===void 0||L.call(e,D)},G=c.useMemo(()=>e.type!==void 0?e.type:o?"warning":"info",[e.type,o]),te=c.useMemo(()=>typeof h=="object"&&h.closeIcon||g?!0:typeof h=="boolean"?h:m!==!1&&m!==null&&m!==void 0?!0:!!w,[g,m,h,w]),re=o&&y===void 0?!0:y,X=H(z,`${z}-${G}`,{[`${z}-with-description`]:!!r,[`${z}-no-icon`]:!re,[`${z}-banner`]:!!o,[`${z}-rtl`]:I==="rtl"},j,i,s,A,T),Q=At(C,{aria:!0,data:!0}),W=c.useMemo(()=>typeof h=="object"&&h.closeIcon?h.closeIcon:g||(m!==void 0?m:typeof w=="object"&&w.closeIcon?w.closeIcon:E),[m,h,w,g,E]),_=c.useMemo(()=>{const D=h??w;if(typeof D=="object"){const{closeIcon:L}=D;return Ta(D,["closeIcon"])}return{}},[h,w]);return P(c.createElement(Tt,{visible:!R,motionName:`${z}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:D=>({maxHeight:D.offsetHeight}),onLeaveEnd:p},({className:D,style:L},ne)=>c.createElement("div",Object.assign({id:v,ref:gt(O,ne),"data-show":!R,className:H(X,D),style:Object.assign(Object.assign(Object.assign({},F),l),L),onMouseEnter:d,onMouseLeave:u,onClick:f,role:"alert"},Q),re?c.createElement(Zl,{description:r,icon:e.icon,prefixCls:z,type:G}):null,c.createElement("div",{className:`${z}-content`},a?c.createElement("div",{className:`${z}-message`},a):null,r?c.createElement("div",{className:`${z}-description`},r):null),S?c.createElement("div",{className:`${z}-action`},S):null,c.createElement(Jl,{isClosable:te,prefixCls:z,closeIcon:W,handleClose:V,ariaProps:_}))))});function Ql(e,t,r){return t=Mn(t),ws(e,qo()?Reflect.construct(t,r||[],Mn(e).constructor):t.apply(e,r))}let ec=(function(e){function t(){var r;return dt(this,t),r=Ql(this,t,arguments),r.state={error:void 0,info:{componentStack:""}},r}return tr(t,e),ft(t,[{key:"componentDidCatch",value:function(n,a){this.setState({error:n,info:a})}},{key:"render",value:function(){const{message:n,description:a,id:o,children:i}=this.props,{error:s,info:l}=this.state,d=l?.componentStack||null,u=typeof n>"u"?(s||"").toString():n,f=typeof a>"u"?d:a;return s?c.createElement(si,{id:o,type:"error",message:u,description:c.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},f)}):i}}])})(c.Component);const Hn=si;Hn.ErrorBoundary=ec;const li=e=>{const[,,,,t]=Nr();return t?`${e}-css-var`:""};var cn={TAB:9,ESC:27},tc={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"},rc=function(t,r){return c.createElement(Ee,le({},t,{ref:r,icon:tc}))},nc=c.forwardRef(rc);function Ma(...e){const t={};return e.forEach(r=>{r&&Object.keys(r).forEach(n=>{r[n]!==void 0&&(t[n]=r[n])})}),t}function Aa(e){if(!e)return;const{closable:t,closeIcon:r}=e;return{closable:t,closeIcon:r}}function _a(e){const{closable:t,closeIcon:r}=e||{};return q.useMemo(()=>{if(!t&&(t===!1||r===!1||r===null))return!1;if(t===void 0&&r===void 0)return null;let n={closeIcon:typeof r!="boolean"&&r!==null?r:void 0};return t&&typeof t=="object"&&(n=Object.assign(Object.assign({},n),t)),n},[t,r])}const ac={},oc=(e,t,r=ac)=>{const n=_a(e),a=_a(t),[o]=hl("global",Tn.global),i=typeof n!="boolean"?!!n?.disabled:!1,s=q.useMemo(()=>Object.assign({closeIcon:q.createElement(ii,null)},r),[r]),l=q.useMemo(()=>n===!1?!1:n?Ma(s,a,n):a===!1?!1:a?Ma(s,a):s.closable?s:!1,[n,a,s]);return q.useMemo(()=>{var d,u;if(l===!1)return[!1,null,i,{}];const{closeIconRender:f}=s,{closeIcon:p}=l;let y=p;const h=At(l,!0);return y!=null&&(f&&(y=f(p)),y=q.isValidElement(y)?q.cloneElement(y,Object.assign(Object.assign(Object.assign({},y.props),{"aria-label":(u=(d=y.props)===null||d===void 0?void 0:d["aria-label"])!==null&&u!==void 0?u:o.close}),h)):q.createElement("span",Object.assign({"aria-label":o.close},h),y)),[!0,y,i,h]},[i,o.close,l,s])},ci=q.createContext(void 0),Ct=100,ui={Modal:Ct,Drawer:Ct,Popover:Ct,Popconfirm:Ct,Tooltip:Ct,Tour:Ct,FloatButton:Ct},ic={SelectLike:50,Dropdown:50,DatePicker:50,Menu:50,ImagePreview:1};function sc(e){return e in ui}const lc=(e,t)=>{const[,r]=Nr(),n=q.useContext(ci),a=sc(e);let o;if(t!==void 0)o=[t,t];else{let i=n??0;a?i+=(n?0:r.zIndexPopupBase)+ui[e]:i+=ic[e],o=[n===void 0?t:i,i]}return o};function di(e,t){this.v=e,this.k=t}function Be(e,t,r,n){var a=Object.defineProperty;try{a({},"",{})}catch{a=0}Be=function(i,s,l,d){function u(f,p){Be(i,f,function(y){return this._invoke(f,p,y)})}s?a?a(i,s,{value:l,enumerable:!d,configurable:!d,writable:!d}):i[s]=l:(u("next",0),u("throw",1),u("return",2))},Be(e,t,r,n)}function ga(){var e,t,r=typeof Symbol=="function"?Symbol:{},n=r.iterator||"@@iterator",a=r.toStringTag||"@@toStringTag";function o(y,h,g,m){var S=h&&h.prototype instanceof s?h:s,v=Object.create(S.prototype);return Be(v,"_invoke",(function(C,R,b){var O,x,I,w=0,E=b||[],j=!1,F={p:0,n:0,v:e,a:z,f:z.bind(e,4),d:function(T,A){return O=T,x=0,I=e,F.n=A,i}};function z(P,T){for(x=P,I=T,t=0;!j&&w&&!A&&t<E.length;t++){var A,V=E[t],G=F.p,te=V[2];P>3?(A=te===T)&&(I=V[(x=V[4])?5:(x=3,3)],V[4]=V[5]=e):V[0]<=G&&((A=P<2&&G<V[1])?(x=0,F.v=T,F.n=V[1]):G<te&&(A=P<3||V[0]>T||T>te)&&(V[4]=P,V[5]=T,F.n=te,x=0))}if(A||P>1)return i;throw j=!0,T}return function(P,T,A){if(w>1)throw TypeError("Generator is already running");for(j&&T===1&&z(T,A),x=T,I=A;(t=x<2?e:I)||!j;){O||(x?x<3?(x>1&&(F.n=-1),z(x,I)):F.n=I:F.v=I);try{if(w=2,O){if(x||(P="next"),t=O[P]){if(!(t=t.call(O,I)))throw TypeError("iterator result is not an object");if(!t.done)return t;I=t.value,x<2&&(x=0)}else x===1&&(t=O.return)&&t.call(O),x<2&&(I=TypeError("The iterator does not provide a '"+P+"' method"),x=1);O=e}else if((t=(j=F.n<0)?I:C.call(R,F))!==i)break}catch(V){O=e,x=1,I=V}finally{w=1}}return{value:t,done:j}}})(y,g,m),!0),v}var i={};function s(){}function l(){}function d(){}t=Object.getPrototypeOf;var u=[][n]?t(t([][n]())):(Be(t={},n,function(){return this}),t),f=d.prototype=s.prototype=Object.create(u);function p(y){return Object.setPrototypeOf?Object.setPrototypeOf(y,d):(y.__proto__=d,Be(y,a,"GeneratorFunction")),y.prototype=Object.create(f),y}return l.prototype=d,Be(f,"constructor",d),Be(d,"constructor",l),l.displayName="GeneratorFunction",Be(d,a,"GeneratorFunction"),Be(f),Be(f,a,"Generator"),Be(f,n,function(){return this}),Be(f,"toString",function(){return"[object Generator]"}),(ga=function(){return{w:o,m:p}})()}function wr(e,t){function r(a,o,i,s){try{var l=e[a](o),d=l.value;return d instanceof di?t.resolve(d.v).then(function(u){r("next",u,i,s)},function(u){r("throw",u,i,s)}):t.resolve(d).then(function(u){l.value=u,i(l)},function(u){return r("throw",u,i,s)})}catch(u){s(u)}}var n;this.next||(Be(wr.prototype),Be(wr.prototype,typeof Symbol=="function"&&Symbol.asyncIterator||"@asyncIterator",function(){return this})),Be(this,"_invoke",function(a,o,i){function s(){return new t(function(l,d){r(a,i,l,d)})}return n=n?n.then(s,s):s()},!0)}function fi(e,t,r,n,a){return new wr(ga().w(e,t,r,n),a||Promise)}function cc(e,t,r,n,a){var o=fi(e,t,r,n,a);return o.next().then(function(i){return i.done?i.value:o.next()})}function uc(e){var t=Object(e),r=[];for(var n in t)r.unshift(n);return function a(){for(;r.length;)if((n=r.pop())in t)return a.value=n,a.done=!1,a;return a.done=!0,a}}function Ba(e){if(e!=null){var t=e[typeof Symbol=="function"&&Symbol.iterator||"@@iterator"],r=0;if(t)return t.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length))return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}}}throw new TypeError($e(e)+" is not iterable")}function Ve(){var e=ga(),t=e.m(Ve),r=(Object.getPrototypeOf?Object.getPrototypeOf(t):t.__proto__).constructor;function n(i){var s=typeof i=="function"&&i.constructor;return!!s&&(s===r||(s.displayName||s.name)==="GeneratorFunction")}var a={throw:1,return:2,break:3,continue:3};function o(i){var s,l;return function(d){s||(s={stop:function(){return l(d.a,2)},catch:function(){return d.v},abrupt:function(f,p){return l(d.a,a[f],p)},delegateYield:function(f,p,y){return s.resultName=p,l(d.d,Ba(f),y)},finish:function(f){return l(d.f,f)}},l=function(f,p,y){d.p=s.prev,d.n=s.next;try{return f(p,y)}finally{s.next=d.n}}),s.resultName&&(s[s.resultName]=d.v,s.resultName=void 0),s.sent=d.v,s.next=d.n;try{return i.call(this,s)}finally{d.p=s.prev,d.n=s.next}}}return(Ve=function(){return{wrap:function(l,d,u,f){return e.w(o(l),d,u,f&&f.reverse())},isGeneratorFunction:n,mark:e.m,awrap:function(l,d){return new di(l,d)},AsyncIterator:wr,async:function(l,d,u,f,p){return(n(d)?fi:cc)(o(l),d,u,f,p)},keys:uc,values:Ba}})()}function Va(e,t,r,n,a,o,i){try{var s=e[o](i),l=s.value}catch(d){return void r(d)}s.done?t(l):Promise.resolve(l).then(n,a)}function Ot(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var o=e.apply(t,r);function i(l){Va(o,n,a,i,s,"next",l)}function s(l){Va(o,n,a,i,s,"throw",l)}i(void 0)})}}var rr=M({},$s),dc=rr.version,un=rr.render,fc=rr.unmountComponentAtNode,Ar;try{var mc=Number((dc||"").split(".")[0]);mc>=18&&(Ar=rr.createRoot)}catch{}function La(e){var t=rr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;t&&$e(t)==="object"&&(t.usingClientEntryPoint=e)}var $r="__rc_react_root__";function gc(e,t){La(!0);var r=t[$r]||Ar(t);La(!1),r.render(e),t[$r]=r}function pc(e,t){un?.(e,t)}function hc(e,t){if(Ar){gc(e,t);return}pc(e,t)}function vc(e){return Dn.apply(this,arguments)}function Dn(){return Dn=Ot(Ve().mark(function e(t){return Ve().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Promise.resolve().then(function(){var a;(a=t[$r])===null||a===void 0||a.unmount(),delete t[$r]}));case 1:case"end":return n.stop()}},e)})),Dn.apply(this,arguments)}function bc(e){fc(e)}function yc(e){return Wn.apply(this,arguments)}function Wn(){return Wn=Ot(Ve().mark(function e(t){return Ve().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(Ar===void 0){n.next=2;break}return n.abrupt("return",vc(t));case 2:bc(t);case 3:case"end":return n.stop()}},e)})),Wn.apply(this,arguments)}const xc=(e,t)=>(hc(e,t),()=>yc(t));let Cc=xc;function Sc(e){return Cc}const Ha=(e,t,r)=>`${e}-${t}`;function Rt(e,t){var r=Object.assign({},e);return Array.isArray(t)&&t.forEach(function(n){delete r[n]}),r}const wc=(function(e){if(!e)return!1;if(e instanceof Element){if(e.offsetParent)return!0;if(e.getBBox){var t=e.getBBox(),r=t.width,n=t.height;if(r||n)return!0}if(e.getBoundingClientRect){var a=e.getBoundingClientRect(),o=a.width,i=a.height;if(o||i)return!0}}return!1}),$c=e=>{const{componentCls:t,colorPrimary:r}=e;return{[t]:{position:"absolute",background:"transparent",pointerEvents:"none",boxSizing:"border-box",color:`var(--wave-color, ${r})`,boxShadow:"0 0 0 0 currentcolor",opacity:.2,"&.wave-motion-appear":{transition:[`box-shadow 0.4s ${e.motionEaseOutCirc}`,`opacity 2s ${e.motionEaseOutCirc}`].join(","),"&-active":{boxShadow:"0 0 0 6px currentcolor",opacity:0},"&.wave-quick":{transition:[`box-shadow ${e.motionDurationSlow} ${e.motionEaseInOut}`,`opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`].join(",")}}}}},Ec=Es("Wave",$c),mi=`${Os}-wave-target`;function Oc(e){return e&&e!=="#fff"&&e!=="#ffffff"&&e!=="rgb(255, 255, 255)"&&e!=="rgba(255, 255, 255, 1)"&&!/rgba\((?:\d*, ){3}0\)/.test(e)&&e!=="transparent"&&e!=="canvastext"}function Rc(e){var t;const{borderTopColor:r,borderColor:n,backgroundColor:a}=getComputedStyle(e);return(t=[r,n,a].find(Oc))!==null&&t!==void 0?t:null}function dn(e){return Number.isNaN(e)?0:e}const Ic=e=>{const{className:t,target:r,component:n,registerUnmount:a}=e,o=c.useRef(null),i=c.useRef(null);c.useEffect(()=>{i.current=a()},[]);const[s,l]=c.useState(null),[d,u]=c.useState([]),[f,p]=c.useState(0),[y,h]=c.useState(0),[g,m]=c.useState(0),[S,v]=c.useState(0),[C,R]=c.useState(!1),b={left:f,top:y,width:g,height:S,borderRadius:d.map(I=>`${I}px`).join(" ")};s&&(b["--wave-color"]=s);function O(){const I=getComputedStyle(r);l(Rc(r));const w=I.position==="static",{borderLeftWidth:E,borderTopWidth:j}=I;p(w?r.offsetLeft:dn(-Number.parseFloat(E))),h(w?r.offsetTop:dn(-Number.parseFloat(j))),m(r.offsetWidth),v(r.offsetHeight);const{borderTopLeftRadius:F,borderTopRightRadius:z,borderBottomLeftRadius:P,borderBottomRightRadius:T}=I;u([F,z,T,P].map(A=>dn(Number.parseFloat(A))))}if(c.useEffect(()=>{if(r){const I=$t(()=>{O(),R(!0)});let w;return typeof ResizeObserver<"u"&&(w=new ResizeObserver(O),w.observe(r)),()=>{$t.cancel(I),w?.disconnect()}}},[r]),!C)return null;const x=(n==="Checkbox"||n==="Radio")&&r?.classList.contains(mi);return c.createElement(Tt,{visible:!0,motionAppear:!0,motionName:"wave-motion",motionDeadline:5e3,onAppearEnd:(I,w)=>{var E,j;if(w.deadline||w.propertyName==="opacity"){const F=(E=o.current)===null||E===void 0?void 0:E.parentElement;(j=i.current)===null||j===void 0||j.call(i).then(()=>{F?.remove()})}return!1}},({className:I},w)=>c.createElement("div",{ref:gt(o,w),className:H(t,I,{"wave-quick":x}),style:b}))},jc=(e,t)=>{var r;const{component:n}=t;if(n==="Checkbox"&&!(!((r=e.querySelector("input"))===null||r===void 0)&&r.checked))return;const a=document.createElement("div");a.style.position="absolute",a.style.left="0px",a.style.top="0px",e?.insertBefore(a,e?.firstChild);const o=Sc();let i=null;function s(){return i}i=o(c.createElement(Ic,Object.assign({},t,{target:e,registerUnmount:s})),a)},Fc=(e,t,r)=>{const{wave:n}=c.useContext(Le),[,a,o]=Nr(),i=zt(d=>{const u=e.current;if(n?.disabled||!u)return;const f=u.querySelector(`.${mi}`)||u,{showEffect:p}=n||{};(p||jc)(f,{className:t,token:a,component:r,event:d,hashId:o})}),s=c.useRef(null);return d=>{$t.cancel(s.current),s.current=$t(()=>{i(d)})}},Pc=e=>{const{children:t,disabled:r,component:n}=e,{getPrefixCls:a}=c.useContext(Le),o=c.useRef(null),i=a("wave"),[,s]=Ec(i),l=Fc(o,H(i,s),n);if(q.useEffect(()=>{const u=o.current;if(!u||u.nodeType!==window.Node.ELEMENT_NODE||r)return;const f=p=>{!wc(p.target)||!u.getAttribute||u.getAttribute("disabled")||u.disabled||u.className.includes("disabled")&&!u.className.includes("disabled:")||u.getAttribute("aria-disabled")==="true"||u.className.includes("-leave")||l(p)};return u.addEventListener("click",f,!0),()=>{u.removeEventListener("click",f,!0)}},[r]),!q.isValidElement(t))return t??null;const d=ua(t)?gt(Do(t),o):o;return br(t,{ref:d})},Ht=e=>{const t=q.useContext(Rs);return q.useMemo(()=>e?typeof e=="string"?e??t:typeof e=="function"?e(t):t:t,[e,t])},gi=c.createContext(null),_r=(e,t)=>{const r=c.useContext(gi),n=c.useMemo(()=>{if(!r)return"";const{compactDirection:a,isFirstItem:o,isLastItem:i}=r,s=a==="vertical"?"-vertical-":"-";return H(`${e}-compact${s}item`,{[`${e}-compact${s}first-item`]:o,[`${e}-compact${s}last-item`]:i,[`${e}-compact${s}item-rtl`]:t==="rtl"})},[e,t,r]);return{compactSize:r?.compactSize,compactDirection:r?.compactDirection,compactItemClassnames:n}},Nc=e=>{const{children:t}=e;return c.createElement(gi.Provider,{value:null},t)};var zc=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const pi=c.createContext(void 0),Tc=e=>{const{getPrefixCls:t,direction:r}=c.useContext(Le),{prefixCls:n,size:a,className:o}=e,i=zc(e,["prefixCls","size","className"]),s=t("btn-group",n),[,,l]=Nr(),d=c.useMemo(()=>{switch(a){case"large":return"lg";case"small":return"sm";default:return""}},[a]),u=H(s,{[`${s}-${d}`]:d,[`${s}-rtl`]:r==="rtl"},o,l);return c.createElement(pi.Provider,{value:a},c.createElement("div",Object.assign({},i,{className:u})))},Da=/^[\u4E00-\u9FA5]{2}$/,qn=Da.test.bind(Da);function Wa(e){return typeof e=="string"}function fn(e){return e==="text"||e==="link"}function Mc(e,t){if(e==null)return;const r=t?" ":"";return typeof e!="string"&&typeof e!="number"&&Wa(e.type)&&qn(e.props.children)?br(e,{children:e.props.children.split("").join(r)}):Wa(e)?qn(e)?q.createElement("span",null,e.split("").join(r)):q.createElement("span",null,e):Is(e)?q.createElement("span",null,e):e}function Ac(e,t){let r=!1;const n=[];return q.Children.forEach(e,a=>{const o=typeof a,i=o==="string"||o==="number";if(r&&i){const s=n.length-1,l=n[s];n[s]=`${l}${a}`}else n.push(a);r=i}),q.Children.map(n,a=>Mc(a,t))}["default","primary","danger"].concat(J(ma));const hi=c.forwardRef((e,t)=>{const{className:r,style:n,children:a,prefixCls:o}=e,i=H(`${o}-icon`,r);return q.createElement("span",{ref:t,className:i,style:n},a)}),qa=c.forwardRef((e,t)=>{const{prefixCls:r,className:n,style:a,iconClassName:o}=e,i=H(`${r}-loading-icon`,n);return q.createElement(hi,{prefixCls:r,className:i,style:a,ref:t},q.createElement(nc,{className:o}))}),mn=()=>({width:0,opacity:0,transform:"scale(0)"}),gn=e=>({width:e.scrollWidth,opacity:1,transform:"scale(1)"}),_c=e=>{const{prefixCls:t,loading:r,existIcon:n,className:a,style:o,mount:i}=e,s=!!r;return n?q.createElement(qa,{prefixCls:t,className:a,style:o}):q.createElement(Tt,{visible:s,motionName:`${t}-loading-icon-motion`,motionAppear:!i,motionEnter:!i,motionLeave:!i,removeOnLeave:!0,onAppearStart:mn,onAppearActive:gn,onEnterStart:mn,onEnterActive:gn,onLeaveStart:gn,onLeaveActive:mn},({className:l,style:d},u)=>{const f=Object.assign(Object.assign({},o),d);return q.createElement(qa,{prefixCls:t,className:H(a,l),style:f,ref:u})})},Ga=(e,t)=>({[`> span, > ${e}`]:{"&:not(:last-child)":{[`&, & > ${e}`]:{"&:not(:disabled)":{borderInlineEndColor:t}}},"&:not(:first-child)":{[`&, & > ${e}`]:{"&:not(:disabled)":{borderInlineStartColor:t}}}}}),Bc=e=>{const{componentCls:t,fontSize:r,lineWidth:n,groupBorderColor:a,colorErrorHover:o}=e;return{[`${t}-group`]:[{position:"relative",display:"inline-flex",[`> span, > ${t}`]:{"&:not(:last-child)":{[`&, & > ${t}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},"&:not(:first-child)":{marginInlineStart:e.calc(n).mul(-1).equal(),[`&, & > ${t}`]:{borderStartStartRadius:0,borderEndStartRadius:0}}},[t]:{position:"relative",zIndex:1,"&:hover, &:focus, &:active":{zIndex:2},"&[disabled]":{zIndex:0}},[`${t}-icon-only`]:{fontSize:r}},Ga(`${t}-primary`,a),Ga(`${t}-danger`,o)]}};var Vc=["b"],Lc=["v"],pn=function(t){return Math.round(Number(t||0))},Hc=function(t){if(t instanceof Go)return t;if(t&&$e(t)==="object"&&"h"in t&&"b"in t){var r=t,n=r.b,a=Xe(r,Vc);return M(M({},a),{},{v:n})}return typeof t=="string"&&/hsb/.test(t)?t.replace(/hsb/,"hsv"):t},Kt=(function(e){tr(r,e);var t=jr(r);function r(n){return dt(this,r),t.call(this,Hc(n))}return ft(r,[{key:"toHsbString",value:function(){var a=this.toHsb(),o=pn(a.s*100),i=pn(a.b*100),s=pn(a.h),l=a.a,d="hsb(".concat(s,", ").concat(o,"%, ").concat(i,"%)"),u="hsba(".concat(s,", ").concat(o,"%, ").concat(i,"%, ").concat(l.toFixed(l===0?0:2),")");return l===1?d:u}},{key:"toHsb",value:function(){var a=this.toHsv(),o=a.v,i=Xe(a,Lc);return M(M({},i),{},{b:o,a:this.a})}}]),r})(Go),Dc=function(t){return t instanceof Kt?t:new Kt(t)};Dc("#1677ff");const Wc=(e,t)=>e?.replace(/[^\w/]/g,"").slice(0,t?8:6)||"",qc=(e,t)=>e?Wc(e,t):"";let Gc=(function(){function e(t){dt(this,e);var r;if(this.cleared=!1,t instanceof e){this.metaColor=t.metaColor.clone(),this.colors=(r=t.colors)===null||r===void 0?void 0:r.map(a=>({color:new e(a.color),percent:a.percent})),this.cleared=t.cleared;return}const n=Array.isArray(t);n&&t.length?(this.colors=t.map(({color:a,percent:o})=>({color:new e(a),percent:o})),this.metaColor=new Kt(this.colors[0].color.metaColor)):this.metaColor=new Kt(n?"":t),(!t||n&&!this.colors)&&(this.metaColor=this.metaColor.setA(0),this.cleared=!0)}return ft(e,[{key:"toHsb",value:function(){return this.metaColor.toHsb()}},{key:"toHsbString",value:function(){return this.metaColor.toHsbString()}},{key:"toHex",value:function(){return qc(this.toHexString(),this.metaColor.a<1)}},{key:"toHexString",value:function(){return this.metaColor.toHexString()}},{key:"toRgb",value:function(){return this.metaColor.toRgb()}},{key:"toRgbString",value:function(){return this.metaColor.toRgbString()}},{key:"isGradient",value:function(){return!!this.colors&&!this.cleared}},{key:"getColors",value:function(){return this.colors||[{color:this,percent:0}]}},{key:"toCssString",value:function(){const{colors:r}=this;return r?`linear-gradient(90deg, ${r.map(a=>`${a.color.toRgbString()} ${a.percent}%`).join(", ")})`:this.metaColor.toRgbString()}},{key:"equals",value:function(r){return!r||this.isGradient()!==r.isGradient()?!1:this.isGradient()?this.colors.length===r.colors.length&&this.colors.every((n,a)=>{const o=r.colors[a];return n.percent===o.percent&&n.color.equals(o.color)}):this.toHexString()===r.toHexString()}}])})();const kc=(e,t)=>{const{r,g:n,b:a,a:o}=e.toRgb(),i=new Kt(e.toRgbString()).onBackground(t).toHsv();return o<=.5?i.v>.5:r*.299+n*.587+a*.114>192},vi=e=>{const{paddingInline:t,onlyIconSize:r}=e;return Ye(e,{buttonPaddingHorizontal:t,buttonPaddingVertical:0,buttonIconOnlyFontSize:r})},bi=e=>{var t,r,n,a,o,i;const s=(t=e.contentFontSize)!==null&&t!==void 0?t:e.fontSize,l=(r=e.contentFontSizeSM)!==null&&r!==void 0?r:e.fontSize,d=(n=e.contentFontSizeLG)!==null&&n!==void 0?n:e.fontSizeLG,u=(a=e.contentLineHeight)!==null&&a!==void 0?a:sn(s),f=(o=e.contentLineHeightSM)!==null&&o!==void 0?o:sn(l),p=(i=e.contentLineHeightLG)!==null&&i!==void 0?i:sn(d),y=kc(new Gc(e.colorBgSolid),"#fff")?"#000":"#fff",h=ma.reduce((g,m)=>Object.assign(Object.assign({},g),{[`${m}ShadowColor`]:`0 ${ee(e.controlOutlineWidth)} 0 ${js(e[`${m}1`],e.colorBgContainer)}`}),{});return Object.assign(Object.assign({},h),{fontWeight:400,iconGap:e.marginXS,defaultShadow:`0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`,primaryShadow:`0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`,dangerShadow:`0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`,primaryColor:e.colorTextLightSolid,dangerColor:e.colorTextLightSolid,borderColorDisabled:e.colorBorder,defaultGhostColor:e.colorBgContainer,ghostBg:"transparent",defaultGhostBorderColor:e.colorBgContainer,paddingInline:e.paddingContentHorizontal-e.lineWidth,paddingInlineLG:e.paddingContentHorizontal-e.lineWidth,paddingInlineSM:8-e.lineWidth,onlyIconSize:"inherit",onlyIconSizeSM:"inherit",onlyIconSizeLG:"inherit",groupBorderColor:e.colorPrimaryHover,linkHoverBg:"transparent",textTextColor:e.colorText,textTextHoverColor:e.colorText,textTextActiveColor:e.colorText,textHoverBg:e.colorFillTertiary,defaultColor:e.colorText,defaultBg:e.colorBgContainer,defaultBorderColor:e.colorBorder,defaultBorderColorDisabled:e.colorBorder,defaultHoverBg:e.colorBgContainer,defaultHoverColor:e.colorPrimaryHover,defaultHoverBorderColor:e.colorPrimaryHover,defaultActiveBg:e.colorBgContainer,defaultActiveColor:e.colorPrimaryActive,defaultActiveBorderColor:e.colorPrimaryActive,solidTextColor:y,contentFontSize:s,contentFontSizeSM:l,contentFontSizeLG:d,contentLineHeight:u,contentLineHeightSM:f,contentLineHeightLG:p,paddingBlock:Math.max((e.controlHeight-s*u)/2-e.lineWidth,0),paddingBlockSM:Math.max((e.controlHeightSM-l*f)/2-e.lineWidth,0),paddingBlockLG:Math.max((e.controlHeightLG-d*p)/2-e.lineWidth,0)})},Uc=e=>{const{componentCls:t,iconCls:r,fontWeight:n,opacityLoading:a,motionDurationSlow:o,motionEaseInOut:i,iconGap:s,calc:l}=e;return{[t]:{outline:"none",position:"relative",display:"inline-flex",gap:s,alignItems:"center",justifyContent:"center",fontWeight:n,whiteSpace:"nowrap",textAlign:"center",backgroundImage:"none",background:"transparent",border:`${ee(e.lineWidth)} ${e.lineType} transparent`,cursor:"pointer",transition:`all ${e.motionDurationMid} ${e.motionEaseInOut}`,userSelect:"none",touchAction:"manipulation",color:e.colorText,"&:disabled > *":{pointerEvents:"none"},[`${t}-icon > svg`]:Fs(),"> a":{color:"currentColor"},"&:not(:disabled)":fa(e),[`&${t}-two-chinese-chars::first-letter`]:{letterSpacing:"0.34em"},[`&${t}-two-chinese-chars > *:not(${r})`]:{marginInlineEnd:"-0.34em",letterSpacing:"0.34em"},[`&${t}-icon-only`]:{paddingInline:0,[`&${t}-compact-item`]:{flex:"none"}},[`&${t}-loading`]:{opacity:a,cursor:"default"},[`${t}-loading-icon`]:{transition:["width","opacity","margin"].map(d=>`${d} ${o} ${i}`).join(",")},[`&:not(${t}-icon-end)`]:{[`${t}-loading-icon-motion`]:{"&-appear-start, &-enter-start":{marginInlineEnd:l(s).mul(-1).equal()},"&-appear-active, &-enter-active":{marginInlineEnd:0},"&-leave-start":{marginInlineEnd:0},"&-leave-active":{marginInlineEnd:l(s).mul(-1).equal()}}},"&-icon-end":{flexDirection:"row-reverse",[`${t}-loading-icon-motion`]:{"&-appear-start, &-enter-start":{marginInlineStart:l(s).mul(-1).equal()},"&-appear-active, &-enter-active":{marginInlineStart:0},"&-leave-start":{marginInlineStart:0},"&-leave-active":{marginInlineStart:l(s).mul(-1).equal()}}}}}},yi=(e,t,r)=>({[`&:not(:disabled):not(${e}-disabled)`]:{"&:hover":t,"&:active":r}}),Xc=e=>({minWidth:e.controlHeight,paddingInline:0,borderRadius:"50%"}),Yc=e=>({cursor:"not-allowed",borderColor:e.borderColorDisabled,color:e.colorTextDisabled,background:e.colorBgContainerDisabled,boxShadow:"none"}),Br=(e,t,r,n,a,o,i,s)=>({[`&${e}-background-ghost`]:Object.assign(Object.assign({color:r||void 0,background:t,borderColor:n||void 0,boxShadow:"none"},yi(e,Object.assign({background:t},i),Object.assign({background:t},s))),{"&:disabled":{cursor:"not-allowed",color:a||void 0,borderColor:o||void 0}})}),Kc=e=>({[`&:disabled, &${e.componentCls}-disabled`]:Object.assign({},Yc(e))}),Zc=e=>({[`&:disabled, &${e.componentCls}-disabled`]:{cursor:"not-allowed",color:e.colorTextDisabled}}),Vr=(e,t,r,n)=>{const o=n&&["link","text"].includes(n)?Zc:Kc;return Object.assign(Object.assign({},o(e)),yi(e.componentCls,t,r))},Lr=(e,t,r,n,a)=>({[`&${e.componentCls}-variant-solid`]:Object.assign({color:t,background:r},Vr(e,n,a))}),Hr=(e,t,r,n,a)=>({[`&${e.componentCls}-variant-outlined, &${e.componentCls}-variant-dashed`]:Object.assign({borderColor:t,background:r},Vr(e,n,a))}),Dr=e=>({[`&${e.componentCls}-variant-dashed`]:{borderStyle:"dashed"}}),Wr=(e,t,r,n)=>({[`&${e.componentCls}-variant-filled`]:Object.assign({boxShadow:"none",background:t},Vr(e,r,n))}),st=(e,t,r,n,a)=>({[`&${e.componentCls}-variant-${r}`]:Object.assign({color:t,boxShadow:"none"},Vr(e,n,a,r))}),Jc=e=>{const{componentCls:t}=e;return ma.reduce((r,n)=>{const a=e[`${n}6`],o=e[`${n}1`],i=e[`${n}5`],s=e[`${n}2`],l=e[`${n}3`],d=e[`${n}7`];return Object.assign(Object.assign({},r),{[`&${t}-color-${n}`]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:a,boxShadow:e[`${n}ShadowColor`]},Lr(e,e.colorTextLightSolid,a,{background:i},{background:d})),Hr(e,a,e.colorBgContainer,{color:i,borderColor:i,background:e.colorBgContainer},{color:d,borderColor:d,background:e.colorBgContainer})),Dr(e)),Wr(e,o,{color:a,background:s},{color:a,background:l})),st(e,a,"link",{color:i},{color:d})),st(e,a,"text",{color:i,background:o},{color:d,background:l}))})},{})},Qc=e=>Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:e.defaultColor,boxShadow:e.defaultShadow},Lr(e,e.solidTextColor,e.colorBgSolid,{color:e.solidTextColor,background:e.colorBgSolidHover},{color:e.solidTextColor,background:e.colorBgSolidActive})),Dr(e)),Wr(e,e.colorFillTertiary,{color:e.defaultColor,background:e.colorFillSecondary},{color:e.defaultColor,background:e.colorFill})),Br(e.componentCls,e.ghostBg,e.defaultGhostColor,e.defaultGhostBorderColor,e.colorTextDisabled,e.colorBorder)),st(e,e.textTextColor,"link",{color:e.colorLinkHover,background:e.linkHoverBg},{color:e.colorLinkActive})),eu=e=>Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:e.colorPrimary,boxShadow:e.primaryShadow},Hr(e,e.colorPrimary,e.colorBgContainer,{color:e.colorPrimaryTextHover,borderColor:e.colorPrimaryHover,background:e.colorBgContainer},{color:e.colorPrimaryTextActive,borderColor:e.colorPrimaryActive,background:e.colorBgContainer})),Dr(e)),Wr(e,e.colorPrimaryBg,{color:e.colorPrimary,background:e.colorPrimaryBgHover},{color:e.colorPrimary,background:e.colorPrimaryBorder})),st(e,e.colorPrimaryText,"text",{color:e.colorPrimaryTextHover,background:e.colorPrimaryBg},{color:e.colorPrimaryTextActive,background:e.colorPrimaryBorder})),st(e,e.colorPrimaryText,"link",{color:e.colorPrimaryTextHover,background:e.linkHoverBg},{color:e.colorPrimaryTextActive})),Br(e.componentCls,e.ghostBg,e.colorPrimary,e.colorPrimary,e.colorTextDisabled,e.colorBorder,{color:e.colorPrimaryHover,borderColor:e.colorPrimaryHover},{color:e.colorPrimaryActive,borderColor:e.colorPrimaryActive})),tu=e=>Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:e.colorError,boxShadow:e.dangerShadow},Lr(e,e.dangerColor,e.colorError,{background:e.colorErrorHover},{background:e.colorErrorActive})),Hr(e,e.colorError,e.colorBgContainer,{color:e.colorErrorHover,borderColor:e.colorErrorBorderHover},{color:e.colorErrorActive,borderColor:e.colorErrorActive})),Dr(e)),Wr(e,e.colorErrorBg,{color:e.colorError,background:e.colorErrorBgFilledHover},{color:e.colorError,background:e.colorErrorBgActive})),st(e,e.colorError,"text",{color:e.colorErrorHover,background:e.colorErrorBg},{color:e.colorErrorHover,background:e.colorErrorBgActive})),st(e,e.colorError,"link",{color:e.colorErrorHover},{color:e.colorErrorActive})),Br(e.componentCls,e.ghostBg,e.colorError,e.colorError,e.colorTextDisabled,e.colorBorder,{color:e.colorErrorHover,borderColor:e.colorErrorHover},{color:e.colorErrorActive,borderColor:e.colorErrorActive})),ru=e=>Object.assign(Object.assign({},st(e,e.colorLink,"link",{color:e.colorLinkHover},{color:e.colorLinkActive})),Br(e.componentCls,e.ghostBg,e.colorInfo,e.colorInfo,e.colorTextDisabled,e.colorBorder,{color:e.colorInfoHover,borderColor:e.colorInfoHover},{color:e.colorInfoActive,borderColor:e.colorInfoActive})),nu=e=>{const{componentCls:t}=e;return Object.assign({[`${t}-color-default`]:Qc(e),[`${t}-color-primary`]:eu(e),[`${t}-color-dangerous`]:tu(e),[`${t}-color-link`]:ru(e)},Jc(e))},au=e=>Object.assign(Object.assign(Object.assign(Object.assign({},Hr(e,e.defaultBorderColor,e.defaultBg,{color:e.defaultHoverColor,borderColor:e.defaultHoverBorderColor,background:e.defaultHoverBg},{color:e.defaultActiveColor,borderColor:e.defaultActiveBorderColor,background:e.defaultActiveBg})),st(e,e.textTextColor,"text",{color:e.textTextHoverColor,background:e.textHoverBg},{color:e.textTextActiveColor,background:e.colorBgTextActive})),Lr(e,e.primaryColor,e.colorPrimary,{background:e.colorPrimaryHover,color:e.primaryColor},{background:e.colorPrimaryActive,color:e.primaryColor})),st(e,e.colorLink,"link",{color:e.colorLinkHover,background:e.linkHoverBg},{color:e.colorLinkActive})),pa=(e,t="")=>{const{componentCls:r,controlHeight:n,fontSize:a,borderRadius:o,buttonPaddingHorizontal:i,iconCls:s,buttonPaddingVertical:l,buttonIconOnlyFontSize:d}=e;return[{[t]:{fontSize:a,height:n,padding:`${ee(l)} ${ee(i)}`,borderRadius:o,[`&${r}-icon-only`]:{width:n,[s]:{fontSize:d}}}},{[`${r}${r}-circle${t}`]:Xc(e)},{[`${r}${r}-round${t}`]:{borderRadius:e.controlHeight,[`&:not(${r}-icon-only)`]:{paddingInline:e.buttonPaddingHorizontal}}}]},ou=e=>{const t=Ye(e,{fontSize:e.contentFontSize});return pa(t,e.componentCls)},iu=e=>{const t=Ye(e,{controlHeight:e.controlHeightSM,fontSize:e.contentFontSizeSM,padding:e.paddingXS,buttonPaddingHorizontal:e.paddingInlineSM,buttonPaddingVertical:0,borderRadius:e.borderRadiusSM,buttonIconOnlyFontSize:e.onlyIconSizeSM});return pa(t,`${e.componentCls}-sm`)},su=e=>{const t=Ye(e,{controlHeight:e.controlHeightLG,fontSize:e.contentFontSizeLG,buttonPaddingHorizontal:e.paddingInlineLG,buttonPaddingVertical:0,borderRadius:e.borderRadiusLG,buttonIconOnlyFontSize:e.onlyIconSizeLG});return pa(t,`${e.componentCls}-lg`)},lu=e=>{const{componentCls:t}=e;return{[t]:{[`&${t}-block`]:{width:"100%"}}}},cu=mt("Button",e=>{const t=vi(e);return[Uc(t),ou(t),iu(t),su(t),lu(t),nu(t),au(t),Bc(t)]},bi,{unitless:{fontWeight:!0,contentLineHeight:!0,contentLineHeightSM:!0,contentLineHeightLG:!0}});function uu(e,t,r,n){const{focusElCls:a,focus:o,borderElCls:i}=r,s=i?"> *":"",l=["hover",o?"focus":null,"active"].filter(Boolean).map(d=>`&:${d} ${s}`).join(",");return{[`&-item:not(${t}-last-item)`]:{marginInlineEnd:e.calc(e.lineWidth).mul(-1).equal()},[`&-item:not(${n}-status-success)`]:{zIndex:2},"&-item":Object.assign(Object.assign({[l]:{zIndex:3}},a?{[`&${a}`]:{zIndex:3}}:{}),{[`&[disabled] ${s}`]:{zIndex:0}})}}function du(e,t,r){const{borderElCls:n}=r,a=n?`> ${n}`:"";return{[`&-item:not(${t}-first-item):not(${t}-last-item) ${a}`]:{borderRadius:0},[`&-item:not(${t}-last-item)${t}-first-item`]:{[`& ${a}, &${e}-sm ${a}, &${e}-lg ${a}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`&-item:not(${t}-first-item)${t}-last-item`]:{[`& ${a}, &${e}-sm ${a}, &${e}-lg ${a}`]:{borderStartStartRadius:0,borderEndStartRadius:0}}}}function xi(e,t={focus:!0}){const{componentCls:r}=e,{componentCls:n}=t,a=n||r,o=`${a}-compact`;return{[o]:Object.assign(Object.assign({},uu(e,o,t,a)),du(a,o,t))}}function fu(e,t,r){return{[`&-item:not(${t}-last-item)`]:{marginBottom:e.calc(e.lineWidth).mul(-1).equal()},[`&-item:not(${r}-status-success)`]:{zIndex:2},"&-item":{"&:hover,&:focus,&:active":{zIndex:3},"&[disabled]":{zIndex:0}}}}function mu(e,t){return{[`&-item:not(${t}-first-item):not(${t}-last-item)`]:{borderRadius:0},[`&-item${t}-first-item:not(${t}-last-item)`]:{[`&, &${e}-sm, &${e}-lg`]:{borderEndEndRadius:0,borderEndStartRadius:0}},[`&-item${t}-last-item:not(${t}-first-item)`]:{[`&, &${e}-sm, &${e}-lg`]:{borderStartStartRadius:0,borderStartEndRadius:0}}}}function gu(e){const t=`${e.componentCls}-compact-vertical`;return{[t]:Object.assign(Object.assign({},fu(e,t,e.componentCls)),mu(e.componentCls,t))}}const pu=e=>{const{componentCls:t,colorPrimaryHover:r,lineWidth:n,calc:a}=e,o=a(n).mul(-1).equal(),i=s=>{const l=`${t}-compact${s?"-vertical":""}-item${t}-primary:not([disabled])`;return{[`${l} + ${l}::before`]:{position:"absolute",top:s?o:0,insetInlineStart:s?0:o,backgroundColor:r,content:'""',width:s?"100%":n,height:s?n:"100%"}}};return Object.assign(Object.assign({},i()),i(!0))},hu=Ps(["Button","compact"],e=>{const t=vi(e);return[xi(t),gu(t),pu(t)]},bi);var vu=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};function bu(e){if(typeof e=="object"&&e){let t=e?.delay;return t=!Number.isNaN(t)&&typeof t=="number"?t:0,{loading:t<=0,delay:t}}return{loading:!!e,delay:0}}const yu={default:["default","outlined"],primary:["primary","solid"],dashed:["default","dashed"],link:["link","link"],text:["default","text"]},xu=q.forwardRef((e,t)=>{var r,n;const{loading:a=!1,prefixCls:o,color:i,variant:s,type:l,danger:d=!1,shape:u,size:f,styles:p,disabled:y,className:h,rootClassName:g,children:m,icon:S,iconPosition:v="start",ghost:C=!1,block:R=!1,htmlType:b="button",classNames:O,style:x={},autoInsertSpace:I,autoFocus:w}=e,E=vu(e,["loading","prefixCls","color","variant","type","danger","shape","size","styles","disabled","className","rootClassName","children","icon","iconPosition","ghost","block","htmlType","classNames","style","autoInsertSpace","autoFocus"]),j=l||"default",{button:F}=q.useContext(Le),z=u||F?.shape||"default",[P,T]=c.useMemo(()=>{if(i&&s)return[i,s];if(l||d){const Te=yu[j]||[];return d?["danger",Te[1]]:Te}return F?.color&&F?.variant?[F.color,F.variant]:["default","outlined"]},[i,s,l,d,F?.color,F?.variant,j]),V=P==="danger"?"dangerous":P,{getPrefixCls:G,direction:te,autoInsertSpace:re,className:X,style:Q,classNames:W,styles:_}=xt("button"),D=(r=I??re)!==null&&r!==void 0?r:!0,L=G("btn",o),[ne,U,ce]=cu(L),Y=c.useContext(zr),k=y??Y,Ce=c.useContext(pi),pe=c.useMemo(()=>bu(a),[a]),[Se,Oe]=c.useState(pe.loading),[oe,ae]=c.useState(!1),Re=c.useRef(null),we=Fr(t,Re),We=c.Children.count(m)===1&&!S&&!fn(T),he=c.useRef(!0);q.useEffect(()=>(he.current=!1,()=>{he.current=!0}),[]),ut(()=>{let Te=null;pe.delay>0?Te=setTimeout(()=>{Te=null,Oe(!0)},pe.delay):Oe(pe.loading);function lt(){Te&&(clearTimeout(Te),Te=null)}return lt},[pe.delay,pe.loading]),c.useEffect(()=>{if(!Re.current||!D)return;const Te=Re.current.textContent||"";We&&qn(Te)?oe||ae(!0):oe&&ae(!1)}),c.useEffect(()=>{w&&Re.current&&Re.current.focus()},[]);const Ie=q.useCallback(Te=>{var lt;if(Se||k){Te.preventDefault();return}(lt=e.onClick)===null||lt===void 0||lt.call(e,("href"in e,Te))},[e.onClick,Se,k]),{compactSize:ue,compactItemClassnames:Z}=_r(L,te),ye={large:"lg",small:"sm",middle:void 0},He=Ht(Te=>{var lt,an;return(an=(lt=f??ue)!==null&&lt!==void 0?lt:Ce)!==null&&an!==void 0?an:Te}),Ze=He&&(n=ye[He])!==null&&n!==void 0?n:"",Je=Se?"loading":S,Qe=Rt(E,["navigate"]),ht=H(L,U,ce,{[`${L}-${z}`]:z!=="default"&&z,[`${L}-${j}`]:j,[`${L}-dangerous`]:d,[`${L}-color-${V}`]:V,[`${L}-variant-${T}`]:T,[`${L}-${Ze}`]:Ze,[`${L}-icon-only`]:!m&&m!==0&&!!Je,[`${L}-background-ghost`]:C&&!fn(T),[`${L}-loading`]:Se,[`${L}-two-chinese-chars`]:oe&&D&&!Se,[`${L}-block`]:R,[`${L}-rtl`]:te==="rtl",[`${L}-icon-end`]:v==="end"},Z,h,g,X),ir=Object.assign(Object.assign({},Q),x),rn=H(O?.icon,W.icon),je=Object.assign(Object.assign({},p?.icon||{}),_.icon||{}),fe=Te=>q.createElement(hi,{prefixCls:L,className:rn,style:je},Te),et=()=>q.createElement(_c,{existIcon:!!S,prefixCls:L,loading:Se,mount:he.current});let tt;S&&!Se?tt=fe(S):a&&typeof a=="object"&&a.icon?tt=fe(a.icon):tt=et();const Ea=m||m===0?Ac(m,We&&D):null;if(Qe.href!==void 0)return ne(q.createElement("a",Object.assign({},Qe,{className:H(ht,{[`${L}-disabled`]:k}),href:k?void 0:Qe.href,style:ir,onClick:Ie,ref:we,tabIndex:k?-1:0,"aria-disabled":k}),tt,Ea));let nn=q.createElement("button",Object.assign({},E,{type:b,className:ht,style:ir,onClick:Ie,disabled:k,ref:we}),tt,Ea,Z&&q.createElement(hu,{prefixCls:L}));return fn(T)||(nn=q.createElement(Pc,{component:"Button",disabled:Se},nn)),ne(nn)}),qr=xu;qr.Group=Tc;qr.__ANT_BUTTON=!0;var Ci=c.createContext(null),ka=[];function Cu(e,t){var r=c.useState(function(){if(!yr())return null;var h=document.createElement("div");return h}),n=ie(r,1),a=n[0],o=c.useRef(!1),i=c.useContext(Ci),s=c.useState(ka),l=ie(s,2),d=l[0],u=l[1],f=i||(o.current?void 0:function(h){u(function(g){var m=[h].concat(J(g));return m})});function p(){a.parentElement||document.body.appendChild(a),o.current=!0}function y(){var h;(h=a.parentElement)===null||h===void 0||h.removeChild(a),o.current=!1}return ut(function(){return e?i?i(p):p():y(),y},[e]),ut(function(){d.length&&(d.forEach(function(h){return h()}),u(ka))},[d]),[a,f]}function Su(e){var t="rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7)),r=document.createElement("div");r.id=t;var n=r.style;n.position="absolute",n.left="0",n.top="0",n.width="100px",n.height="100px",n.overflow="scroll";var a,o;if(e){var i=getComputedStyle(e);n.scrollbarColor=i.scrollbarColor,n.scrollbarWidth=i.scrollbarWidth;var s=getComputedStyle(e,"::-webkit-scrollbar"),l=parseInt(s.width,10),d=parseInt(s.height,10);try{var u=l?"width: ".concat(s.width,";"):"",f=d?"height: ".concat(s.height,";"):"";da(`
#`.concat(t,`::-webkit-scrollbar {
`).concat(u,`
`).concat(f,`
}`),t)}catch(h){console.error(h),a=l,o=d}}document.body.appendChild(r);var p=e&&a&&!isNaN(a)?a:r.offsetWidth-r.clientWidth,y=e&&o&&!isNaN(o)?o:r.offsetHeight-r.clientHeight;return document.body.removeChild(r),An(t),{width:p,height:y}}function wu(e){return typeof document>"u"||!e||!(e instanceof Element)?{width:0,height:0}:Su(e)}function $u(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth}var Eu="rc-util-locker-".concat(Date.now()),Ua=0;function Ou(e){var t=!!e,r=c.useState(function(){return Ua+=1,"".concat(Eu,"_").concat(Ua)}),n=ie(r,1),a=n[0];ut(function(){if(t){var o=wu(document.body).width,i=$u();da(`
html body {
  overflow-y: hidden;
  `.concat(i?"width: calc(100% - ".concat(o,"px);"):"",`
}`),a)}else An(a);return function(){An(a)}},[t,a])}var Ru=!1;function Iu(e){return Ru}var Xa=function(t){return t===!1?!1:!yr()||!t?null:typeof t=="string"?document.querySelector(t):typeof t=="function"?t():t},ju=c.forwardRef(function(e,t){var r=e.open,n=e.autoLock,a=e.getContainer;e.debug;var o=e.autoDestroy,i=o===void 0?!0:o,s=e.children,l=c.useState(r),d=ie(l,2),u=d[0],f=d[1],p=u||r;c.useEffect(function(){(i||r)&&f(r)},[r,i]);var y=c.useState(function(){return Xa(a)}),h=ie(y,2),g=h[0],m=h[1];c.useEffect(function(){var j=Xa(a);m(j??null)});var S=Cu(p&&!g),v=ie(S,2),C=v[0],R=v[1],b=g??C;Ou(n&&r&&yr()&&(b===C||b===document.body));var O=null;if(s&&ua(s)&&t){var x=s;O=x.ref}var I=Fr(O,t);if(!p||!yr()||g===void 0)return null;var w=b===!1||Iu(),E=s;return t&&(E=c.cloneElement(s,{ref:I})),c.createElement(Ci.Provider,{value:R},w?E:Ns.createPortal(E,b))});function Fu(){var e=M({},_n);return e.useId}var Ya=0,Ka=Fu();const Si=Ka?(function(t){var r=Ka();return t||r}):(function(t){var r=c.useState("ssr-id"),n=ie(r,2),a=n[0],o=n[1];return c.useEffect(function(){var i=Ya;Ya+=1,o("rc_unique_".concat(i))},[]),t||a});var wt="RC_FORM_INTERNAL_HOOKS",xe=function(){ot(!1,"Can not find FormContext. Please make sure you wrap Field under Form.")},_t=c.createContext({getFieldValue:xe,getFieldsValue:xe,getFieldError:xe,getFieldWarning:xe,getFieldsError:xe,isFieldsTouched:xe,isFieldTouched:xe,isFieldValidating:xe,isFieldsValidating:xe,resetFields:xe,setFields:xe,setFieldValue:xe,setFieldsValue:xe,validateFields:xe,submit:xe,getInternalHooks:function(){return xe(),{dispatch:xe,initEntityValue:xe,registerField:xe,useSubscribe:xe,setInitialValues:xe,destroyForm:xe,setCallbacks:xe,registerWatch:xe,getFields:xe,setValidateMessages:xe,setPreserve:xe,getInitialValue:xe}}}),Er=c.createContext(null);function Gn(e){return e==null?[]:Array.isArray(e)?e:[e]}function Pu(e){return e&&!!e._init}function kn(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",tel:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var t=JSON.parse(JSON.stringify(this));return t.clone=this.clone,t}}}var Un=kn();function Nu(e){try{return Function.toString.call(e).indexOf("[native code]")!==-1}catch{return typeof e=="function"}}function zu(e,t,r){if(qo())return Reflect.construct.apply(null,arguments);var n=[null];n.push.apply(n,t);var a=new(e.bind.apply(e,n));return r&&ko(a,r.prototype),a}function Xn(e){var t=typeof Map=="function"?new Map:void 0;return Xn=function(n){if(n===null||!Nu(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(t!==void 0){if(t.has(n))return t.get(n);t.set(n,a)}function a(){return zu(n,arguments,Mn(this).constructor)}return a.prototype=Object.create(n.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),ko(a,n)},Xn(e)}var Tu=/%[sdj%]/g,Mu=function(){};function Yn(e){if(!e||!e.length)return null;var t={};return e.forEach(function(r){var n=r.field;t[n]=t[n]||[],t[n].push(r)}),t}function ke(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var a=0,o=r.length;if(typeof e=="function")return e.apply(null,r);if(typeof e=="string"){var i=e.replace(Tu,function(s){if(s==="%%")return"%";if(a>=o)return s;switch(s){case"%s":return String(r[a++]);case"%d":return Number(r[a++]);case"%j":try{return JSON.stringify(r[a++])}catch{return"[Circular]"}break;default:return s}});return i}return e}function Au(e){return e==="string"||e==="url"||e==="hex"||e==="email"||e==="date"||e==="pattern"||e==="tel"}function ze(e,t){return!!(e==null||t==="array"&&Array.isArray(e)&&!e.length||Au(t)&&typeof e=="string"&&!e)}function _u(e,t,r){var n=[],a=0,o=e.length;function i(s){n.push.apply(n,J(s||[])),a++,a===o&&r(n)}e.forEach(function(s){t(s,i)})}function Za(e,t,r){var n=0,a=e.length;function o(i){if(i&&i.length){r(i);return}var s=n;n=n+1,s<a?t(e[s],o):r([])}o([])}function Bu(e){var t=[];return Object.keys(e).forEach(function(r){t.push.apply(t,J(e[r]||[]))}),t}var Ja=(function(e){tr(r,e);var t=jr(r);function r(n,a){var o;return dt(this,r),o=t.call(this,"Async Validation Error"),N(de(o),"errors",void 0),N(de(o),"fields",void 0),o.errors=n,o.fields=a,o}return ft(r)})(Xn(Error));function Vu(e,t,r,n,a){if(t.first){var o=new Promise(function(p,y){var h=function(S){return n(S),S.length?y(new Ja(S,Yn(S))):p(a)},g=Bu(e);Za(g,r,h)});return o.catch(function(p){return p}),o}var i=t.firstFields===!0?Object.keys(e):t.firstFields||[],s=Object.keys(e),l=s.length,d=0,u=[],f=new Promise(function(p,y){var h=function(m){if(u.push.apply(u,m),d++,d===l)return n(u),u.length?y(new Ja(u,Yn(u))):p(a)};s.length||(n(u),p(a)),s.forEach(function(g){var m=e[g];i.indexOf(g)!==-1?Za(m,r,h):_u(m,r,h)})});return f.catch(function(p){return p}),f}function Lu(e){return!!(e&&e.message!==void 0)}function Hu(e,t){for(var r=e,n=0;n<t.length;n++){if(r==null)return r;r=r[t[n]]}return r}function Qa(e,t){return function(r){var n;return e.fullFields?n=Hu(t,e.fullFields):n=t[r.field||e.fullField],Lu(r)?(r.field=r.field||e.fullField,r.fieldValue=n,r):{message:typeof r=="function"?r():r,fieldValue:n,field:r.field||e.fullField}}}function eo(e,t){if(t){for(var r in t)if(t.hasOwnProperty(r)){var n=t[r];$e(n)==="object"&&$e(e[r])==="object"?e[r]=M(M({},e[r]),n):e[r]=n}}return e}var It="enum",Du=function(t,r,n,a,o){t[It]=Array.isArray(t[It])?t[It]:[],t[It].indexOf(r)===-1&&a.push(ke(o.messages[It],t.fullField,t[It].join(", ")))},Wu=function(t,r,n,a,o){if(t.pattern){if(t.pattern instanceof RegExp)t.pattern.lastIndex=0,t.pattern.test(r)||a.push(ke(o.messages.pattern.mismatch,t.fullField,r,t.pattern));else if(typeof t.pattern=="string"){var i=new RegExp(t.pattern);i.test(r)||a.push(ke(o.messages.pattern.mismatch,t.fullField,r,t.pattern))}}},qu=function(t,r,n,a,o){var i=typeof t.len=="number",s=typeof t.min=="number",l=typeof t.max=="number",d=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,u=r,f=null,p=typeof r=="number",y=typeof r=="string",h=Array.isArray(r);if(p?f="number":y?f="string":h&&(f="array"),!f)return!1;h&&(u=r.length),y&&(u=r.replace(d,"_").length),i?u!==t.len&&a.push(ke(o.messages[f].len,t.fullField,t.len)):s&&!l&&u<t.min?a.push(ke(o.messages[f].min,t.fullField,t.min)):l&&!s&&u>t.max?a.push(ke(o.messages[f].max,t.fullField,t.max)):s&&l&&(u<t.min||u>t.max)&&a.push(ke(o.messages[f].range,t.fullField,t.min,t.max))},wi=function(t,r,n,a,o,i){t.required&&(!n.hasOwnProperty(t.field)||ze(r,i||t.type))&&a.push(ke(o.messages.required,t.fullField))},lr;const Gu=(function(){if(lr)return lr;var e="[a-fA-F\\d:]",t=function(O){return O&&O.includeBoundaries?"(?:(?<=\\s|^)(?=".concat(e,")|(?<=").concat(e,")(?=\\s|$))"):""},r="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",n="[a-fA-F\\d]{1,4}",a=["(?:".concat(n,":){7}(?:").concat(n,"|:)"),"(?:".concat(n,":){6}(?:").concat(r,"|:").concat(n,"|:)"),"(?:".concat(n,":){5}(?::").concat(r,"|(?::").concat(n,"){1,2}|:)"),"(?:".concat(n,":){4}(?:(?::").concat(n,"){0,1}:").concat(r,"|(?::").concat(n,"){1,3}|:)"),"(?:".concat(n,":){3}(?:(?::").concat(n,"){0,2}:").concat(r,"|(?::").concat(n,"){1,4}|:)"),"(?:".concat(n,":){2}(?:(?::").concat(n,"){0,3}:").concat(r,"|(?::").concat(n,"){1,5}|:)"),"(?:".concat(n,":){1}(?:(?::").concat(n,"){0,4}:").concat(r,"|(?::").concat(n,"){1,6}|:)"),"(?::(?:(?::".concat(n,"){0,5}:").concat(r,"|(?::").concat(n,"){1,7}|:))")],o="(?:%[0-9a-zA-Z]{1,})?",i="(?:".concat(a.join("|"),")").concat(o),s=new RegExp("(?:^".concat(r,"$)|(?:^").concat(i,"$)")),l=new RegExp("^".concat(r,"$")),d=new RegExp("^".concat(i,"$")),u=function(O){return O&&O.exact?s:new RegExp("(?:".concat(t(O)).concat(r).concat(t(O),")|(?:").concat(t(O)).concat(i).concat(t(O),")"),"g")};u.v4=function(b){return b&&b.exact?l:new RegExp("".concat(t(b)).concat(r).concat(t(b)),"g")},u.v6=function(b){return b&&b.exact?d:new RegExp("".concat(t(b)).concat(i).concat(t(b)),"g")};var f="(?:(?:[a-z]+:)?//)",p="(?:\\S+(?::\\S*)?@)?",y=u.v4().source,h=u.v6().source,g="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",m="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",S="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",v="(?::\\d{2,5})?",C='(?:[/?#][^\\s"]*)?',R="(?:".concat(f,"|www\\.)").concat(p,"(?:localhost|").concat(y,"|").concat(h,"|").concat(g).concat(m).concat(S,")").concat(v).concat(C);return lr=new RegExp("(?:^".concat(R,"$)"),"i"),lr});var hn={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,tel:/^(\+[0-9]{1,3}[-\s\u2011]?)?(\([0-9]{1,4}\)[-\s\u2011]?)?([0-9]+[-\s\u2011]?)*[0-9]+$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},Ut={integer:function(t){return Ut.number(t)&&parseInt(t,10)===t},float:function(t){return Ut.number(t)&&!Ut.integer(t)},array:function(t){return Array.isArray(t)},regexp:function(t){if(t instanceof RegExp)return!0;try{return!!new RegExp(t)}catch{return!1}},date:function(t){return typeof t.getTime=="function"&&typeof t.getMonth=="function"&&typeof t.getYear=="function"&&!isNaN(t.getTime())},number:function(t){return isNaN(t)?!1:typeof t=="number"},object:function(t){return $e(t)==="object"&&!Ut.array(t)},method:function(t){return typeof t=="function"},email:function(t){return typeof t=="string"&&t.length<=320&&!!t.match(hn.email)},tel:function(t){return typeof t=="string"&&t.length<=32&&!!t.match(hn.tel)},url:function(t){return typeof t=="string"&&t.length<=2048&&!!t.match(Gu())},hex:function(t){return typeof t=="string"&&!!t.match(hn.hex)}},ku=function(t,r,n,a,o){if(t.required&&r===void 0){wi(t,r,n,a,o);return}var i=["integer","float","array","regexp","object","method","email","tel","number","date","url","hex"],s=t.type;i.indexOf(s)>-1?Ut[s](r)||a.push(ke(o.messages.types[s],t.fullField,t.type)):s&&$e(r)!==t.type&&a.push(ke(o.messages.types[s],t.fullField,t.type))},Uu=function(t,r,n,a,o){(/^\s+$/.test(r)||r==="")&&a.push(ke(o.messages.whitespace,t.fullField))};const se={required:wi,whitespace:Uu,type:ku,range:qu,enum:Du,pattern:Wu};var Xu=function(t,r,n,a,o){var i=[],s=t.required||!t.required&&a.hasOwnProperty(t.field);if(s){if(ze(r)&&!t.required)return n();se.required(t,r,a,i,o)}n(i)},Yu=function(t,r,n,a,o){var i=[],s=t.required||!t.required&&a.hasOwnProperty(t.field);if(s){if(r==null&&!t.required)return n();se.required(t,r,a,i,o,"array"),r!=null&&(se.type(t,r,a,i,o),se.range(t,r,a,i,o))}n(i)},Ku=function(t,r,n,a,o){var i=[],s=t.required||!t.required&&a.hasOwnProperty(t.field);if(s){if(ze(r)&&!t.required)return n();se.required(t,r,a,i,o),r!==void 0&&se.type(t,r,a,i,o)}n(i)},Zu=function(t,r,n,a,o){var i=[],s=t.required||!t.required&&a.hasOwnProperty(t.field);if(s){if(ze(r,"date")&&!t.required)return n();if(se.required(t,r,a,i,o),!ze(r,"date")){var l;r instanceof Date?l=r:l=new Date(r),se.type(t,l,a,i,o),l&&se.range(t,l.getTime(),a,i,o)}}n(i)},Ju="enum",Qu=function(t,r,n,a,o){var i=[],s=t.required||!t.required&&a.hasOwnProperty(t.field);if(s){if(ze(r)&&!t.required)return n();se.required(t,r,a,i,o),r!==void 0&&se[Ju](t,r,a,i,o)}n(i)},ed=function(t,r,n,a,o){var i=[],s=t.required||!t.required&&a.hasOwnProperty(t.field);if(s){if(ze(r)&&!t.required)return n();se.required(t,r,a,i,o),r!==void 0&&(se.type(t,r,a,i,o),se.range(t,r,a,i,o))}n(i)},td=function(t,r,n,a,o){var i=[],s=t.required||!t.required&&a.hasOwnProperty(t.field);if(s){if(ze(r)&&!t.required)return n();se.required(t,r,a,i,o),r!==void 0&&(se.type(t,r,a,i,o),se.range(t,r,a,i,o))}n(i)},rd=function(t,r,n,a,o){var i=[],s=t.required||!t.required&&a.hasOwnProperty(t.field);if(s){if(ze(r)&&!t.required)return n();se.required(t,r,a,i,o),r!==void 0&&se.type(t,r,a,i,o)}n(i)},nd=function(t,r,n,a,o){var i=[],s=t.required||!t.required&&a.hasOwnProperty(t.field);if(s){if(r===""&&(r=void 0),ze(r)&&!t.required)return n();se.required(t,r,a,i,o),r!==void 0&&(se.type(t,r,a,i,o),se.range(t,r,a,i,o))}n(i)},ad=function(t,r,n,a,o){var i=[],s=t.required||!t.required&&a.hasOwnProperty(t.field);if(s){if(ze(r)&&!t.required)return n();se.required(t,r,a,i,o),r!==void 0&&se.type(t,r,a,i,o)}n(i)},od=function(t,r,n,a,o){var i=[],s=t.required||!t.required&&a.hasOwnProperty(t.field);if(s){if(ze(r,"string")&&!t.required)return n();se.required(t,r,a,i,o),ze(r,"string")||se.pattern(t,r,a,i,o)}n(i)},id=function(t,r,n,a,o){var i=[],s=t.required||!t.required&&a.hasOwnProperty(t.field);if(s){if(ze(r)&&!t.required)return n();se.required(t,r,a,i,o),ze(r)||se.type(t,r,a,i,o)}n(i)},sd=function(t,r,n,a,o){var i=[],s=Array.isArray(r)?"array":$e(r);se.required(t,r,a,i,o,s),n(i)},ld=function(t,r,n,a,o){var i=[],s=t.required||!t.required&&a.hasOwnProperty(t.field);if(s){if(ze(r,"string")&&!t.required)return n();se.required(t,r,a,i,o,"string"),ze(r,"string")||(se.type(t,r,a,i,o),se.range(t,r,a,i,o),se.pattern(t,r,a,i,o),t.whitespace===!0&&se.whitespace(t,r,a,i,o))}n(i)},cr=function(t,r,n,a,o){var i=t.type,s=[],l=t.required||!t.required&&a.hasOwnProperty(t.field);if(l){if(ze(r,i)&&!t.required)return n();se.required(t,r,a,s,o,i),ze(r,i)||se.type(t,r,a,s,o)}n(s)};const Yt={string:ld,method:rd,number:nd,boolean:Ku,regexp:id,integer:td,float:ed,array:Yu,object:ad,enum:Qu,pattern:od,date:Zu,url:cr,hex:cr,email:cr,tel:cr,required:sd,any:Xu};var nr=(function(){function e(t){dt(this,e),N(this,"rules",null),N(this,"_messages",Un),this.define(t)}return ft(e,[{key:"define",value:function(r){var n=this;if(!r)throw new Error("Cannot configure a schema with no rules");if($e(r)!=="object"||Array.isArray(r))throw new Error("Rules must be an object");this.rules={},Object.keys(r).forEach(function(a){var o=r[a];n.rules[a]=Array.isArray(o)?o:[o]})}},{key:"messages",value:function(r){return r&&(this._messages=eo(kn(),r)),this._messages}},{key:"validate",value:function(r){var n=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(){},i=r,s=a,l=o;if(typeof s=="function"&&(l=s,s={}),!this.rules||Object.keys(this.rules).length===0)return l&&l(null,i),Promise.resolve(i);function d(h){var g=[],m={};function S(C){if(Array.isArray(C)){var R;g=(R=g).concat.apply(R,J(C))}else g.push(C)}for(var v=0;v<h.length;v++)S(h[v]);g.length?(m=Yn(g),l(g,m)):l(null,i)}if(s.messages){var u=this.messages();u===Un&&(u=kn()),eo(u,s.messages),s.messages=u}else s.messages=this.messages();var f={},p=s.keys||Object.keys(this.rules);p.forEach(function(h){var g=n.rules[h],m=i[h];g.forEach(function(S){var v=S;typeof v.transform=="function"&&(i===r&&(i=M({},i)),m=i[h]=v.transform(m),m!=null&&(v.type=v.type||(Array.isArray(m)?"array":$e(m)))),typeof v=="function"?v={validator:v}:v=M({},v),v.validator=n.getValidationMethod(v),v.validator&&(v.field=h,v.fullField=v.fullField||h,v.type=n.getType(v),f[h]=f[h]||[],f[h].push({rule:v,value:m,source:i,field:h}))})});var y={};return Vu(f,s,function(h,g){var m=h.rule,S=(m.type==="object"||m.type==="array")&&($e(m.fields)==="object"||$e(m.defaultField)==="object");S=S&&(m.required||!m.required&&h.value),m.field=h.field;function v(x,I){return M(M({},I),{},{fullField:"".concat(m.fullField,".").concat(x),fullFields:m.fullFields?[].concat(J(m.fullFields),[x]):[x]})}function C(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],I=Array.isArray(x)?x:[x];!s.suppressWarning&&I.length&&e.warning("async-validator:",I),I.length&&m.message!==void 0&&m.message!==null&&(I=[].concat(m.message));var w=I.map(Qa(m,i));if(s.first&&w.length)return y[m.field]=1,g(w);if(!S)g(w);else{if(m.required&&!h.value)return m.message!==void 0?w=[].concat(m.message).map(Qa(m,i)):s.error&&(w=[s.error(m,ke(s.messages.required,m.field))]),g(w);var E={};m.defaultField&&Object.keys(h.value).map(function(z){E[z]=m.defaultField}),E=M(M({},E),h.rule.fields);var j={};Object.keys(E).forEach(function(z){var P=E[z],T=Array.isArray(P)?P:[P];j[z]=T.map(v.bind(null,z))});var F=new e(j);F.messages(s.messages),h.rule.options&&(h.rule.options.messages=s.messages,h.rule.options.error=s.error),F.validate(h.value,h.rule.options||s,function(z){var P=[];w&&w.length&&P.push.apply(P,J(w)),z&&z.length&&P.push.apply(P,J(z)),g(P.length?P:null)})}}var R;if(m.asyncValidator)R=m.asyncValidator(m,h.value,C,h.source,s);else if(m.validator){try{R=m.validator(m,h.value,C,h.source,s)}catch(x){var b,O;(b=(O=console).error)===null||b===void 0||b.call(O,x),s.suppressValidatorError||setTimeout(function(){throw x},0),C(x.message)}R===!0?C():R===!1?C(typeof m.message=="function"?m.message(m.fullField||m.field):m.message||"".concat(m.fullField||m.field," fails")):R instanceof Array?C(R):R instanceof Error&&C(R.message)}R&&R.then&&R.then(function(){return C()},function(x){return C(x)})},function(h){d(h)},i)}},{key:"getType",value:function(r){if(r.type===void 0&&r.pattern instanceof RegExp&&(r.type="pattern"),typeof r.validator!="function"&&r.type&&!Yt.hasOwnProperty(r.type))throw new Error(ke("Unknown rule type %s",r.type));return r.type||"string"}},{key:"getValidationMethod",value:function(r){if(typeof r.validator=="function")return r.validator;var n=Object.keys(r),a=n.indexOf("message");return a!==-1&&n.splice(a,1),n.length===1&&n[0]==="required"?Yt.required:Yt[this.getType(r)]||void 0}}]),e})();N(nr,"register",function(t,r){if(typeof r!="function")throw new Error("Cannot register a validator by type, validator is not a function");Yt[t]=r});N(nr,"warning",Mu);N(nr,"messages",Un);N(nr,"validators",Yt);var qe="'${name}' is not a valid ${type}",$i={default:"Validation error on field '${name}'",required:"'${name}' is required",enum:"'${name}' must be one of [${enum}]",whitespace:"'${name}' cannot be empty",date:{format:"'${name}' is invalid for format date",parse:"'${name}' could not be parsed as date",invalid:"'${name}' is invalid date"},types:{string:qe,method:qe,array:qe,object:qe,number:qe,date:qe,boolean:qe,integer:qe,float:qe,regexp:qe,email:qe,url:qe,hex:qe},string:{len:"'${name}' must be exactly ${len} characters",min:"'${name}' must be at least ${min} characters",max:"'${name}' cannot be longer than ${max} characters",range:"'${name}' must be between ${min} and ${max} characters"},number:{len:"'${name}' must equal ${len}",min:"'${name}' cannot be less than ${min}",max:"'${name}' cannot be greater than ${max}",range:"'${name}' must be between ${min} and ${max}"},array:{len:"'${name}' must be exactly ${len} in length",min:"'${name}' cannot be less than ${min} in length",max:"'${name}' cannot be greater than ${max} in length",range:"'${name}' must be between ${min} and ${max} in length"},pattern:{mismatch:"'${name}' does not match pattern ${pattern}"}},to=nr;function cd(e,t){return e.replace(/\\?\$\{\w+\}/g,function(r){if(r.startsWith("\\"))return r.slice(1);var n=r.slice(2,-1);return t[n]})}var ro="CODE_LOGIC_ERROR";function Kn(e,t,r,n,a){return Zn.apply(this,arguments)}function Zn(){return Zn=Ot(Ve().mark(function e(t,r,n,a,o){var i,s,l,d,u,f,p,y,h;return Ve().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return i=M({},n),delete i.ruleIndex,to.warning=function(){},i.validator&&(s=i.validator,i.validator=function(){try{return s.apply(void 0,arguments)}catch(S){return console.error(S),Promise.reject(ro)}}),l=null,i&&i.type==="array"&&i.defaultField&&(l=i.defaultField,delete i.defaultField),d=new to(N({},t,[i])),u=kt($i,a.validateMessages),d.messages(u),f=[],m.prev=10,m.next=13,Promise.resolve(d.validate(N({},t,r),M({},a)));case 13:m.next=18;break;case 15:m.prev=15,m.t0=m.catch(10),m.t0.errors&&(f=m.t0.errors.map(function(S,v){var C=S.message,R=C===ro?u.default:C;return c.isValidElement(R)?c.cloneElement(R,{key:"error_".concat(v)}):R}));case 18:if(!(!f.length&&l&&Array.isArray(r)&&r.length>0)){m.next=23;break}return m.next=21,Promise.all(r.map(function(S,v){return Kn("".concat(t,".").concat(v),S,l,a,o)}));case 21:return p=m.sent,m.abrupt("return",p.reduce(function(S,v){return[].concat(J(S),J(v))},[]));case 23:return y=M(M({},n),{},{name:t,enum:(n.enum||[]).join(", ")},o),h=f.map(function(S){return typeof S=="string"?cd(S,y):S}),m.abrupt("return",h);case 26:case"end":return m.stop()}},e,null,[[10,15]])})),Zn.apply(this,arguments)}function ud(e,t,r,n,a,o){var i=e.join("."),s=r.map(function(u,f){var p=u.validator,y=M(M({},u),{},{ruleIndex:f});return p&&(y.validator=function(h,g,m){var S=!1,v=function(){for(var b=arguments.length,O=new Array(b),x=0;x<b;x++)O[x]=arguments[x];Promise.resolve().then(function(){ot(!S,"Your validator function has already return a promise. `callback` will be ignored."),S||m.apply(void 0,O)})},C=p(h,g,v);S=C&&typeof C.then=="function"&&typeof C.catch=="function",ot(S,"`callback` is deprecated. Please return a promise instead."),S&&C.then(function(){m()}).catch(function(R){m(R||" ")})}),y}).sort(function(u,f){var p=u.warningOnly,y=u.ruleIndex,h=f.warningOnly,g=f.ruleIndex;return!!p==!!h?y-g:p?1:-1}),l;if(a===!0)l=new Promise((function(){var u=Ot(Ve().mark(function f(p,y){var h,g,m;return Ve().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:h=0;case 1:if(!(h<s.length)){v.next=12;break}return g=s[h],v.next=5,Kn(i,t,g,n,o);case 5:if(m=v.sent,!m.length){v.next=9;break}return y([{errors:m,rule:g}]),v.abrupt("return");case 9:h+=1,v.next=1;break;case 12:p([]);case 13:case"end":return v.stop()}},f)}));return function(f,p){return u.apply(this,arguments)}})());else{var d=s.map(function(u){return Kn(i,t,u,n,o).then(function(f){return{errors:f,rule:u}})});l=(a?fd(d):dd(d)).then(function(u){return Promise.reject(u)})}return l.catch(function(u){return u}),l}function dd(e){return Jn.apply(this,arguments)}function Jn(){return Jn=Ot(Ve().mark(function e(t){return Ve().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Promise.all(t).then(function(a){var o,i=(o=[]).concat.apply(o,J(a));return i}));case 1:case"end":return n.stop()}},e)})),Jn.apply(this,arguments)}function fd(e){return Qn.apply(this,arguments)}function Qn(){return Qn=Ot(Ve().mark(function e(t){var r;return Ve().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return r=0,a.abrupt("return",new Promise(function(o){t.forEach(function(i){i.then(function(s){s.errors.length&&o([s]),r+=1,r===t.length&&o([])})})}));case 2:case"end":return a.stop()}},e)})),Qn.apply(this,arguments)}function Fe(e){return Gn(e)}function no(e,t){var r={};return t.forEach(function(n){var a=St(e,n);r=vt(r,n,a)}),r}function Ft(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return e&&e.some(function(n){return Ei(t,n,r)})}function Ei(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return!e||!t||!r&&e.length!==t.length?!1:t.every(function(n,a){return e[a]===n})}function md(e,t){if(e===t)return!0;if(!e&&t||e&&!t||!e||!t||$e(e)!=="object"||$e(t)!=="object")return!1;var r=Object.keys(e),n=Object.keys(t),a=new Set([].concat(r,n));return J(a).every(function(o){var i=e[o],s=t[o];return typeof i=="function"&&typeof s=="function"?!0:i===s})}function gd(e){var t=arguments.length<=1?void 0:arguments[1];return t&&t.target&&$e(t.target)==="object"&&e in t.target?t.target[e]:t}function ao(e,t,r){var n=e.length;if(t<0||t>=n||r<0||r>=n)return e;var a=e[t],o=t-r;return o>0?[].concat(J(e.slice(0,r)),[a],J(e.slice(r,t)),J(e.slice(t+1,n))):o<0?[].concat(J(e.slice(0,t)),J(e.slice(t+1,r+1)),[a],J(e.slice(r+1,n))):e}var pd=["name"],Ke=[];function vn(e,t,r,n,a,o){return typeof e=="function"?e(t,r,"source"in o?{source:o.source}:{}):n!==a}var ha=(function(e){tr(r,e);var t=jr(r);function r(n){var a;if(dt(this,r),a=t.call(this,n),N(de(a),"state",{resetCount:0}),N(de(a),"cancelRegisterFunc",null),N(de(a),"mounted",!1),N(de(a),"touched",!1),N(de(a),"dirty",!1),N(de(a),"validatePromise",void 0),N(de(a),"prevValidating",void 0),N(de(a),"errors",Ke),N(de(a),"warnings",Ke),N(de(a),"cancelRegister",function(){var l=a.props,d=l.preserve,u=l.isListField,f=l.name;a.cancelRegisterFunc&&a.cancelRegisterFunc(u,d,Fe(f)),a.cancelRegisterFunc=null}),N(de(a),"getNamePath",function(){var l=a.props,d=l.name,u=l.fieldContext,f=u.prefixName,p=f===void 0?[]:f;return d!==void 0?[].concat(J(p),J(d)):[]}),N(de(a),"getRules",function(){var l=a.props,d=l.rules,u=d===void 0?[]:d,f=l.fieldContext;return u.map(function(p){return typeof p=="function"?p(f):p})}),N(de(a),"refresh",function(){a.mounted&&a.setState(function(l){var d=l.resetCount;return{resetCount:d+1}})}),N(de(a),"metaCache",null),N(de(a),"triggerMetaEvent",function(l){var d=a.props.onMetaChange;if(d){var u=M(M({},a.getMeta()),{},{destroy:l});Ia(a.metaCache,u)||d(u),a.metaCache=u}else a.metaCache=null}),N(de(a),"onStoreChange",function(l,d,u){var f=a.props,p=f.shouldUpdate,y=f.dependencies,h=y===void 0?[]:y,g=f.onReset,m=u.store,S=a.getNamePath(),v=a.getValue(l),C=a.getValue(m),R=d&&Ft(d,S);switch(u.type==="valueUpdate"&&u.source==="external"&&!Ia(v,C)&&(a.touched=!0,a.dirty=!0,a.validatePromise=null,a.errors=Ke,a.warnings=Ke,a.triggerMetaEvent()),u.type){case"reset":if(!d||R){a.touched=!1,a.dirty=!1,a.validatePromise=void 0,a.errors=Ke,a.warnings=Ke,a.triggerMetaEvent(),g?.(),a.refresh();return}break;case"remove":{if(p&&vn(p,l,m,v,C,u)){a.reRender();return}break}case"setField":{var b=u.data;if(R){"touched"in b&&(a.touched=b.touched),"validating"in b&&!("originRCField"in b)&&(a.validatePromise=b.validating?Promise.resolve([]):null),"errors"in b&&(a.errors=b.errors||Ke),"warnings"in b&&(a.warnings=b.warnings||Ke),a.dirty=!0,a.triggerMetaEvent(),a.reRender();return}else if("value"in b&&Ft(d,S,!0)){a.reRender();return}if(p&&!S.length&&vn(p,l,m,v,C,u)){a.reRender();return}break}case"dependenciesUpdate":{var O=h.map(Fe);if(O.some(function(x){return Ft(u.relatedFields,x)})){a.reRender();return}break}default:if(R||(!h.length||S.length||p)&&vn(p,l,m,v,C,u)){a.reRender();return}break}p===!0&&a.reRender()}),N(de(a),"validateRules",function(l){var d=a.getNamePath(),u=a.getValue(),f=l||{},p=f.triggerName,y=f.validateOnly,h=y===void 0?!1:y,g=Promise.resolve().then(Ot(Ve().mark(function m(){var S,v,C,R,b,O,x;return Ve().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:if(a.mounted){w.next=2;break}return w.abrupt("return",[]);case 2:if(S=a.props,v=S.validateFirst,C=v===void 0?!1:v,R=S.messageVariables,b=S.validateDebounce,O=a.getRules(),p&&(O=O.filter(function(E){return E}).filter(function(E){var j=E.validateTrigger;if(!j)return!0;var F=Gn(j);return F.includes(p)})),!(b&&p)){w.next=10;break}return w.next=8,new Promise(function(E){setTimeout(E,b)});case 8:if(a.validatePromise===g){w.next=10;break}return w.abrupt("return",[]);case 10:return x=ud(d,u,O,l,C,R),x.catch(function(E){return E}).then(function(){var E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Ke;if(a.validatePromise===g){var j;a.validatePromise=null;var F=[],z=[];(j=E.forEach)===null||j===void 0||j.call(E,function(P){var T=P.rule.warningOnly,A=P.errors,V=A===void 0?Ke:A;T?z.push.apply(z,J(V)):F.push.apply(F,J(V))}),a.errors=F,a.warnings=z,a.triggerMetaEvent(),a.reRender()}}),w.abrupt("return",x);case 13:case"end":return w.stop()}},m)})));return h||(a.validatePromise=g,a.dirty=!0,a.errors=Ke,a.warnings=Ke,a.triggerMetaEvent(),a.reRender()),g}),N(de(a),"isFieldValidating",function(){return!!a.validatePromise}),N(de(a),"isFieldTouched",function(){return a.touched}),N(de(a),"isFieldDirty",function(){if(a.dirty||a.props.initialValue!==void 0)return!0;var l=a.props.fieldContext,d=l.getInternalHooks(wt),u=d.getInitialValue;return u(a.getNamePath())!==void 0}),N(de(a),"getErrors",function(){return a.errors}),N(de(a),"getWarnings",function(){return a.warnings}),N(de(a),"isListField",function(){return a.props.isListField}),N(de(a),"isList",function(){return a.props.isList}),N(de(a),"isPreserve",function(){return a.props.preserve}),N(de(a),"getMeta",function(){a.prevValidating=a.isFieldValidating();var l={touched:a.isFieldTouched(),validating:a.prevValidating,errors:a.errors,warnings:a.warnings,name:a.getNamePath(),validated:a.validatePromise===null};return l}),N(de(a),"getOnlyChild",function(l){if(typeof l=="function"){var d=a.getMeta();return M(M({},a.getOnlyChild(l(a.getControlled(),d,a.props.fieldContext))),{},{isFunction:!0})}var u=xr(l);return u.length!==1||!c.isValidElement(u[0])?{child:u,isFunction:!1}:{child:u[0],isFunction:!1}}),N(de(a),"getValue",function(l){var d=a.props.fieldContext.getFieldsValue,u=a.getNamePath();return St(l||d(!0),u)}),N(de(a),"getControlled",function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=a.props,u=d.name,f=d.trigger,p=d.validateTrigger,y=d.getValueFromEvent,h=d.normalize,g=d.valuePropName,m=d.getValueProps,S=d.fieldContext,v=p!==void 0?p:S.validateTrigger,C=a.getNamePath(),R=S.getInternalHooks,b=S.getFieldsValue,O=R(wt),x=O.dispatch,I=a.getValue(),w=m||function(P){return N({},g,P)},E=l[f],j=u!==void 0?w(I):{},F=M(M({},l),j);F[f]=function(){a.touched=!0,a.dirty=!0,a.triggerMetaEvent();for(var P,T=arguments.length,A=new Array(T),V=0;V<T;V++)A[V]=arguments[V];y?P=y.apply(void 0,A):P=gd.apply(void 0,[g].concat(A)),h&&(P=h(P,I,b(!0))),P!==I&&x({type:"updateValue",namePath:C,value:P}),E&&E.apply(void 0,A)};var z=Gn(v||[]);return z.forEach(function(P){var T=F[P];F[P]=function(){T&&T.apply(void 0,arguments);var A=a.props.rules;A&&A.length&&x({type:"validateField",namePath:C,triggerName:P})}}),F}),n.fieldContext){var o=n.fieldContext.getInternalHooks,i=o(wt),s=i.initEntityValue;s(de(a))}return a}return ft(r,[{key:"componentDidMount",value:function(){var a=this.props,o=a.shouldUpdate,i=a.fieldContext;if(this.mounted=!0,i){var s=i.getInternalHooks,l=s(wt),d=l.registerField;this.cancelRegisterFunc=d(this)}o===!0&&this.reRender()}},{key:"componentWillUnmount",value:function(){this.cancelRegister(),this.triggerMetaEvent(!0),this.mounted=!1}},{key:"reRender",value:function(){this.mounted&&this.forceUpdate()}},{key:"render",value:function(){var a=this.state.resetCount,o=this.props.children,i=this.getOnlyChild(o),s=i.child,l=i.isFunction,d;return l?d=s:c.isValidElement(s)?d=c.cloneElement(s,this.getControlled(s.props)):(ot(!s,"`children` of Field is not validate ReactElement."),d=s),c.createElement(c.Fragment,{key:a},d)}}]),r})(c.Component);N(ha,"contextType",_t);N(ha,"defaultProps",{trigger:"onChange",valuePropName:"value"});function Oi(e){var t,r=e.name,n=Xe(e,pd),a=c.useContext(_t),o=c.useContext(Er),i=r!==void 0?Fe(r):void 0,s=(t=n.isListField)!==null&&t!==void 0?t:!!o,l="keep";return s||(l="_".concat((i||[]).join("_"))),c.createElement(ha,le({key:l,name:i,isListField:s},n,{fieldContext:a}))}function hd(e){var t=e.name,r=e.initialValue,n=e.children,a=e.rules,o=e.validateTrigger,i=e.isListField,s=c.useContext(_t),l=c.useContext(Er),d=c.useRef({keys:[],id:0}),u=d.current,f=c.useMemo(function(){var g=Fe(s.prefixName)||[];return[].concat(J(g),J(Fe(t)))},[s.prefixName,t]),p=c.useMemo(function(){return M(M({},s),{},{prefixName:f})},[s,f]),y=c.useMemo(function(){return{getKey:function(m){var S=f.length,v=m[S];return[u.keys[v],m.slice(S+1)]}}},[f]);if(typeof n!="function")return ot(!1,"Form.List only accepts function as children."),null;var h=function(m,S,v){var C=v.source;return C==="internal"?!1:m!==S};return c.createElement(Er.Provider,{value:y},c.createElement(_t.Provider,{value:p},c.createElement(Oi,{name:[],shouldUpdate:h,rules:a,validateTrigger:o,initialValue:r,isList:!0,isListField:i??!!l},function(g,m){var S=g.value,v=S===void 0?[]:S,C=g.onChange,R=s.getFieldValue,b=function(){var w=R(f||[]);return w||[]},O={add:function(w,E){var j=b();E>=0&&E<=j.length?(u.keys=[].concat(J(u.keys.slice(0,E)),[u.id],J(u.keys.slice(E))),C([].concat(J(j.slice(0,E)),[w],J(j.slice(E))))):(u.keys=[].concat(J(u.keys),[u.id]),C([].concat(J(j),[w]))),u.id+=1},remove:function(w){var E=b(),j=new Set(Array.isArray(w)?w:[w]);j.size<=0||(u.keys=u.keys.filter(function(F,z){return!j.has(z)}),C(E.filter(function(F,z){return!j.has(z)})))},move:function(w,E){if(w!==E){var j=b();w<0||w>=j.length||E<0||E>=j.length||(u.keys=ao(u.keys,w,E),C(ao(j,w,E)))}}},x=v||[];return Array.isArray(x)||(x=[]),n(x.map(function(I,w){var E=u.keys[w];return E===void 0&&(u.keys[w]=u.id,E=u.keys[w],u.id+=1),{name:w,key:E,isListField:!0}}),O,m)})))}function vd(e){var t=!1,r=e.length,n=[];return e.length?new Promise(function(a,o){e.forEach(function(i,s){i.catch(function(l){return t=!0,l}).then(function(l){r-=1,n[s]=l,!(r>0)&&(t&&o(n),a(n))})})}):Promise.resolve([])}var Ri="__@field_split__";function bn(e){return e.map(function(t){return"".concat($e(t),":").concat(t)}).join(Ri)}var jt=(function(){function e(){dt(this,e),N(this,"kvs",new Map)}return ft(e,[{key:"set",value:function(r,n){this.kvs.set(bn(r),n)}},{key:"get",value:function(r){return this.kvs.get(bn(r))}},{key:"update",value:function(r,n){var a=this.get(r),o=n(a);o?this.set(r,o):this.delete(r)}},{key:"delete",value:function(r){this.kvs.delete(bn(r))}},{key:"map",value:function(r){return J(this.kvs.entries()).map(function(n){var a=ie(n,2),o=a[0],i=a[1],s=o.split(Ri);return r({key:s.map(function(l){var d=l.match(/^([^:]*):(.*)$/),u=ie(d,3),f=u[1],p=u[2];return f==="number"?Number(p):p}),value:i})})}},{key:"toJSON",value:function(){var r={};return this.map(function(n){var a=n.key,o=n.value;return r[a.join(".")]=o,null}),r}}]),e})(),bd=["name"],yd=ft(function e(t){var r=this;dt(this,e),N(this,"formHooked",!1),N(this,"forceRootUpdate",void 0),N(this,"subscribable",!0),N(this,"store",{}),N(this,"fieldEntities",[]),N(this,"initialValues",{}),N(this,"callbacks",{}),N(this,"validateMessages",null),N(this,"preserve",null),N(this,"lastValidatePromise",null),N(this,"getForm",function(){return{getFieldValue:r.getFieldValue,getFieldsValue:r.getFieldsValue,getFieldError:r.getFieldError,getFieldWarning:r.getFieldWarning,getFieldsError:r.getFieldsError,isFieldsTouched:r.isFieldsTouched,isFieldTouched:r.isFieldTouched,isFieldValidating:r.isFieldValidating,isFieldsValidating:r.isFieldsValidating,resetFields:r.resetFields,setFields:r.setFields,setFieldValue:r.setFieldValue,setFieldsValue:r.setFieldsValue,validateFields:r.validateFields,submit:r.submit,_init:!0,getInternalHooks:r.getInternalHooks}}),N(this,"getInternalHooks",function(n){return n===wt?(r.formHooked=!0,{dispatch:r.dispatch,initEntityValue:r.initEntityValue,registerField:r.registerField,useSubscribe:r.useSubscribe,setInitialValues:r.setInitialValues,destroyForm:r.destroyForm,setCallbacks:r.setCallbacks,setValidateMessages:r.setValidateMessages,getFields:r.getFields,setPreserve:r.setPreserve,getInitialValue:r.getInitialValue,registerWatch:r.registerWatch}):(ot(!1,"`getInternalHooks` is internal usage. Should not call directly."),null)}),N(this,"useSubscribe",function(n){r.subscribable=n}),N(this,"prevWithoutPreserves",null),N(this,"setInitialValues",function(n,a){if(r.initialValues=n||{},a){var o,i=kt(n,r.store);(o=r.prevWithoutPreserves)===null||o===void 0||o.map(function(s){var l=s.key;i=vt(i,l,St(n,l))}),r.prevWithoutPreserves=null,r.updateStore(i)}}),N(this,"destroyForm",function(n){if(n)r.updateStore({});else{var a=new jt;r.getFieldEntities(!0).forEach(function(o){r.isMergedPreserve(o.isPreserve())||a.set(o.getNamePath(),!0)}),r.prevWithoutPreserves=a}}),N(this,"getInitialValue",function(n){var a=St(r.initialValues,n);return n.length?kt(a):a}),N(this,"setCallbacks",function(n){r.callbacks=n}),N(this,"setValidateMessages",function(n){r.validateMessages=n}),N(this,"setPreserve",function(n){r.preserve=n}),N(this,"watchList",[]),N(this,"registerWatch",function(n){return r.watchList.push(n),function(){r.watchList=r.watchList.filter(function(a){return a!==n})}}),N(this,"notifyWatch",function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];if(r.watchList.length){var a=r.getFieldsValue(),o=r.getFieldsValue(!0);r.watchList.forEach(function(i){i(a,o,n)})}}),N(this,"timeoutId",null),N(this,"warningUnhooked",function(){}),N(this,"updateStore",function(n){r.store=n}),N(this,"getFieldEntities",function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;return n?r.fieldEntities.filter(function(a){return a.getNamePath().length}):r.fieldEntities}),N(this,"getFieldsMap",function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,a=new jt;return r.getFieldEntities(n).forEach(function(o){var i=o.getNamePath();a.set(i,o)}),a}),N(this,"getFieldEntitiesForNamePathList",function(n){if(!n)return r.getFieldEntities(!0);var a=r.getFieldsMap(!0);return n.map(function(o){var i=Fe(o);return a.get(i)||{INVALIDATE_NAME_PATH:Fe(o)}})}),N(this,"getFieldsValue",function(n,a){r.warningUnhooked();var o,i,s;if(n===!0||Array.isArray(n)?(o=n,i=a):n&&$e(n)==="object"&&(s=n.strict,i=n.filter),o===!0&&!i)return r.store;var l=r.getFieldEntitiesForNamePathList(Array.isArray(o)?o:null),d=[];return l.forEach(function(u){var f,p,y="INVALIDATE_NAME_PATH"in u?u.INVALIDATE_NAME_PATH:u.getNamePath();if(s){var h,g;if((h=(g=u).isList)!==null&&h!==void 0&&h.call(g))return}else if(!o&&(f=(p=u).isListField)!==null&&f!==void 0&&f.call(p))return;if(!i)d.push(y);else{var m="getMeta"in u?u.getMeta():null;i(m)&&d.push(y)}}),no(r.store,d.map(Fe))}),N(this,"getFieldValue",function(n){r.warningUnhooked();var a=Fe(n);return St(r.store,a)}),N(this,"getFieldsError",function(n){r.warningUnhooked();var a=r.getFieldEntitiesForNamePathList(n);return a.map(function(o,i){return o&&!("INVALIDATE_NAME_PATH"in o)?{name:o.getNamePath(),errors:o.getErrors(),warnings:o.getWarnings()}:{name:Fe(n[i]),errors:[],warnings:[]}})}),N(this,"getFieldError",function(n){r.warningUnhooked();var a=Fe(n),o=r.getFieldsError([a])[0];return o.errors}),N(this,"getFieldWarning",function(n){r.warningUnhooked();var a=Fe(n),o=r.getFieldsError([a])[0];return o.warnings}),N(this,"isFieldsTouched",function(){r.warningUnhooked();for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];var i=a[0],s=a[1],l,d=!1;a.length===0?l=null:a.length===1?Array.isArray(i)?(l=i.map(Fe),d=!1):(l=null,d=i):(l=i.map(Fe),d=s);var u=r.getFieldEntities(!0),f=function(m){return m.isFieldTouched()};if(!l)return d?u.every(function(g){return f(g)||g.isList()}):u.some(f);var p=new jt;l.forEach(function(g){p.set(g,[])}),u.forEach(function(g){var m=g.getNamePath();l.forEach(function(S){S.every(function(v,C){return m[C]===v})&&p.update(S,function(v){return[].concat(J(v),[g])})})});var y=function(m){return m.some(f)},h=p.map(function(g){var m=g.value;return m});return d?h.every(y):h.some(y)}),N(this,"isFieldTouched",function(n){return r.warningUnhooked(),r.isFieldsTouched([n])}),N(this,"isFieldsValidating",function(n){r.warningUnhooked();var a=r.getFieldEntities();if(!n)return a.some(function(i){return i.isFieldValidating()});var o=n.map(Fe);return a.some(function(i){var s=i.getNamePath();return Ft(o,s)&&i.isFieldValidating()})}),N(this,"isFieldValidating",function(n){return r.warningUnhooked(),r.isFieldsValidating([n])}),N(this,"resetWithFieldInitialValue",function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=new jt,o=r.getFieldEntities(!0);o.forEach(function(l){var d=l.props.initialValue,u=l.getNamePath();if(d!==void 0){var f=a.get(u)||new Set;f.add({entity:l,value:d}),a.set(u,f)}});var i=function(d){d.forEach(function(u){var f=u.props.initialValue;if(f!==void 0){var p=u.getNamePath(),y=r.getInitialValue(p);if(y!==void 0)ot(!1,"Form already set 'initialValues' with path '".concat(p.join("."),"'. Field can not overwrite it."));else{var h=a.get(p);if(h&&h.size>1)ot(!1,"Multiple Field with path '".concat(p.join("."),"' set 'initialValue'. Can not decide which one to pick."));else if(h){var g=r.getFieldValue(p),m=u.isListField();!m&&(!n.skipExist||g===void 0)&&r.updateStore(vt(r.store,p,J(h)[0].value))}}}})},s;n.entities?s=n.entities:n.namePathList?(s=[],n.namePathList.forEach(function(l){var d=a.get(l);if(d){var u;(u=s).push.apply(u,J(J(d).map(function(f){return f.entity})))}})):s=o,i(s)}),N(this,"resetFields",function(n){r.warningUnhooked();var a=r.store;if(!n){r.updateStore(kt(r.initialValues)),r.resetWithFieldInitialValue(),r.notifyObservers(a,null,{type:"reset"}),r.notifyWatch();return}var o=n.map(Fe);o.forEach(function(i){var s=r.getInitialValue(i);r.updateStore(vt(r.store,i,s))}),r.resetWithFieldInitialValue({namePathList:o}),r.notifyObservers(a,o,{type:"reset"}),r.notifyWatch(o)}),N(this,"setFields",function(n){r.warningUnhooked();var a=r.store,o=[];n.forEach(function(i){var s=i.name,l=Xe(i,bd),d=Fe(s);o.push(d),"value"in l&&r.updateStore(vt(r.store,d,l.value)),r.notifyObservers(a,[d],{type:"setField",data:i})}),r.notifyWatch(o)}),N(this,"getFields",function(){var n=r.getFieldEntities(!0),a=n.map(function(o){var i=o.getNamePath(),s=o.getMeta(),l=M(M({},s),{},{name:i,value:r.getFieldValue(i)});return Object.defineProperty(l,"originRCField",{value:!0}),l});return a}),N(this,"initEntityValue",function(n){var a=n.props.initialValue;if(a!==void 0){var o=n.getNamePath(),i=St(r.store,o);i===void 0&&r.updateStore(vt(r.store,o,a))}}),N(this,"isMergedPreserve",function(n){var a=n!==void 0?n:r.preserve;return a??!0}),N(this,"registerField",function(n){r.fieldEntities.push(n);var a=n.getNamePath();if(r.notifyWatch([a]),n.props.initialValue!==void 0){var o=r.store;r.resetWithFieldInitialValue({entities:[n],skipExist:!0}),r.notifyObservers(o,[n.getNamePath()],{type:"valueUpdate",source:"internal"})}return function(i,s){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];if(r.fieldEntities=r.fieldEntities.filter(function(f){return f!==n}),!r.isMergedPreserve(s)&&(!i||l.length>1)){var d=i?void 0:r.getInitialValue(a);if(a.length&&r.getFieldValue(a)!==d&&r.fieldEntities.every(function(f){return!Ei(f.getNamePath(),a)})){var u=r.store;r.updateStore(vt(u,a,d,!0)),r.notifyObservers(u,[a],{type:"remove"}),r.triggerDependenciesUpdate(u,a)}}r.notifyWatch([a])}}),N(this,"dispatch",function(n){switch(n.type){case"updateValue":{var a=n.namePath,o=n.value;r.updateValue(a,o);break}case"validateField":{var i=n.namePath,s=n.triggerName;r.validateFields([i],{triggerName:s});break}}}),N(this,"notifyObservers",function(n,a,o){if(r.subscribable){var i=M(M({},o),{},{store:r.getFieldsValue(!0)});r.getFieldEntities().forEach(function(s){var l=s.onStoreChange;l(n,a,i)})}else r.forceRootUpdate()}),N(this,"triggerDependenciesUpdate",function(n,a){var o=r.getDependencyChildrenFields(a);return o.length&&r.validateFields(o),r.notifyObservers(n,o,{type:"dependenciesUpdate",relatedFields:[a].concat(J(o))}),o}),N(this,"updateValue",function(n,a){var o=Fe(n),i=r.store;r.updateStore(vt(r.store,o,a)),r.notifyObservers(i,[o],{type:"valueUpdate",source:"internal"}),r.notifyWatch([o]);var s=r.triggerDependenciesUpdate(i,o),l=r.callbacks.onValuesChange;if(l){var d=no(r.store,[o]);l(d,r.getFieldsValue())}r.triggerOnFieldsChange([o].concat(J(s)))}),N(this,"setFieldsValue",function(n){r.warningUnhooked();var a=r.store;if(n){var o=kt(r.store,n);r.updateStore(o)}r.notifyObservers(a,null,{type:"valueUpdate",source:"external"}),r.notifyWatch()}),N(this,"setFieldValue",function(n,a){r.setFields([{name:n,value:a,errors:[],warnings:[]}])}),N(this,"getDependencyChildrenFields",function(n){var a=new Set,o=[],i=new jt;r.getFieldEntities().forEach(function(l){var d=l.props.dependencies;(d||[]).forEach(function(u){var f=Fe(u);i.update(f,function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:new Set;return p.add(l),p})})});var s=function l(d){var u=i.get(d)||new Set;u.forEach(function(f){if(!a.has(f)){a.add(f);var p=f.getNamePath();f.isFieldDirty()&&p.length&&(o.push(p),l(p))}})};return s(n),o}),N(this,"triggerOnFieldsChange",function(n,a){var o=r.callbacks.onFieldsChange;if(o){var i=r.getFields();if(a){var s=new jt;a.forEach(function(d){var u=d.name,f=d.errors;s.set(u,f)}),i.forEach(function(d){d.errors=s.get(d.name)||d.errors})}var l=i.filter(function(d){var u=d.name;return Ft(n,u)});l.length&&o(l,i)}}),N(this,"validateFields",function(n,a){r.warningUnhooked();var o,i;Array.isArray(n)||typeof n=="string"||typeof a=="string"?(o=n,i=a):i=n;var s=!!o,l=s?o.map(Fe):[],d=[],u=String(Date.now()),f=new Set,p=i||{},y=p.recursive,h=p.dirty;r.getFieldEntities(!0).forEach(function(v){if(s||l.push(v.getNamePath()),!(!v.props.rules||!v.props.rules.length)&&!(h&&!v.isFieldDirty())){var C=v.getNamePath();if(f.add(C.join(u)),!s||Ft(l,C,y)){var R=v.validateRules(M({validateMessages:M(M({},$i),r.validateMessages)},i));d.push(R.then(function(){return{name:C,errors:[],warnings:[]}}).catch(function(b){var O,x=[],I=[];return(O=b.forEach)===null||O===void 0||O.call(b,function(w){var E=w.rule.warningOnly,j=w.errors;E?I.push.apply(I,J(j)):x.push.apply(x,J(j))}),x.length?Promise.reject({name:C,errors:x,warnings:I}):{name:C,errors:x,warnings:I}}))}}});var g=vd(d);r.lastValidatePromise=g,g.catch(function(v){return v}).then(function(v){var C=v.map(function(R){var b=R.name;return b});r.notifyObservers(r.store,C,{type:"validateFinish"}),r.triggerOnFieldsChange(C,v)});var m=g.then(function(){return r.lastValidatePromise===g?Promise.resolve(r.getFieldsValue(l)):Promise.reject([])}).catch(function(v){var C=v.filter(function(R){return R&&R.errors.length});return Promise.reject({values:r.getFieldsValue(l),errorFields:C,outOfDate:r.lastValidatePromise!==g})});m.catch(function(v){return v});var S=l.filter(function(v){return f.has(v.join(u))});return r.triggerOnFieldsChange(S),m}),N(this,"submit",function(){r.warningUnhooked(),r.validateFields().then(function(n){var a=r.callbacks.onFinish;if(a)try{a(n)}catch(o){console.error(o)}}).catch(function(n){var a=r.callbacks.onFinishFailed;a&&a(n)})}),this.forceRootUpdate=t});function Ii(e){var t=c.useRef(),r=c.useState({}),n=ie(r,2),a=n[1];if(!t.current)if(e)t.current=e;else{var o=function(){a({})},i=new yd(o);t.current=i.getForm()}return[t.current]}var ea=c.createContext({triggerFormChange:function(){},triggerFormFinish:function(){},registerForm:function(){},unregisterForm:function(){}}),xd=function(t){var r=t.validateMessages,n=t.onFormChange,a=t.onFormFinish,o=t.children,i=c.useContext(ea),s=c.useRef({});return c.createElement(ea.Provider,{value:M(M({},i),{},{validateMessages:M(M({},i.validateMessages),r),triggerFormChange:function(d,u){n&&n(d,{changedFields:u,forms:s.current}),i.triggerFormChange(d,u)},triggerFormFinish:function(d,u){a&&a(d,{values:u,forms:s.current}),i.triggerFormFinish(d,u)},registerForm:function(d,u){d&&(s.current=M(M({},s.current),{},N({},d,u))),i.registerForm(d,u)},unregisterForm:function(d){var u=M({},s.current);delete u[d],s.current=u,i.unregisterForm(d)}})},o)},Cd=["name","initialValues","fields","form","preserve","children","component","validateMessages","validateTrigger","onValuesChange","onFieldsChange","onFinish","onFinishFailed","clearOnDestroy"],Sd=function(t,r){var n=t.name,a=t.initialValues,o=t.fields,i=t.form,s=t.preserve,l=t.children,d=t.component,u=d===void 0?"form":d,f=t.validateMessages,p=t.validateTrigger,y=p===void 0?"onChange":p,h=t.onValuesChange,g=t.onFieldsChange,m=t.onFinish,S=t.onFinishFailed,v=t.clearOnDestroy,C=Xe(t,Cd),R=c.useRef(null),b=c.useContext(ea),O=Ii(i),x=ie(O,1),I=x[0],w=I.getInternalHooks(wt),E=w.useSubscribe,j=w.setInitialValues,F=w.setCallbacks,z=w.setValidateMessages,P=w.setPreserve,T=w.destroyForm;c.useImperativeHandle(r,function(){return M(M({},I),{},{nativeElement:R.current})}),c.useEffect(function(){return b.registerForm(n,I),function(){b.unregisterForm(n)}},[b,I,n]),z(M(M({},b.validateMessages),f)),F({onValuesChange:h,onFieldsChange:function(_){if(b.triggerFormChange(n,_),g){for(var D=arguments.length,L=new Array(D>1?D-1:0),ne=1;ne<D;ne++)L[ne-1]=arguments[ne];g.apply(void 0,[_].concat(L))}},onFinish:function(_){b.triggerFormFinish(n,_),m&&m(_)},onFinishFailed:S}),P(s);var A=c.useRef(null);j(a,!A.current),A.current||(A.current=!0),c.useEffect(function(){return function(){return T(v)}},[]);var V,G=typeof l=="function";if(G){var te=I.getFieldsValue(!0);V=l(te,I)}else V=l;E(!G);var re=c.useRef();c.useEffect(function(){md(re.current||[],o||[])||I.setFields(o||[]),re.current=o},[o,I]);var X=c.useMemo(function(){return M(M({},I),{},{validateTrigger:y})},[I,y]),Q=c.createElement(Er.Provider,{value:null},c.createElement(_t.Provider,{value:X},V));return u===!1?Q:c.createElement(u,le({},C,{ref:R,onSubmit:function(_){_.preventDefault(),_.stopPropagation(),I.submit()},onReset:function(_){var D;_.preventDefault(),I.resetFields(),(D=C.onReset)===null||D===void 0||D.call(C,_)}}),Q)};function oo(e){try{return JSON.stringify(e)}catch{return Math.random()}}function wd(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=t[0],a=t[1],o=a===void 0?{}:a,i=Pu(o)?{form:o}:o,s=i.form,l=c.useState(),d=ie(l,2),u=d[0],f=d[1],p=c.useMemo(function(){return oo(u)},[u]),y=c.useRef(p);y.current=p;var h=c.useContext(_t),g=s||h,m=g&&g._init,S=Fe(n),v=c.useRef(S);return v.current=S,c.useEffect(function(){if(m){var C=g.getFieldsValue,R=g.getInternalHooks,b=R(wt),O=b.registerWatch,x=function(j,F){var z=i.preserve?F:j;return typeof n=="function"?n(z):St(z,v.current)},I=O(function(E,j){var F=x(E,j),z=oo(F);y.current!==z&&(y.current=z,f(F))}),w=x(C(),C(!0));return u!==w&&f(w),I}},[m]),u}var $d=c.forwardRef(Sd),ar=$d;ar.FormProvider=xd;ar.Field=Oi;ar.List=hd;ar.useForm=Ii;ar.useWatch=wd;const yt=c.createContext({}),Ed=({children:e,status:t,override:r})=>{const n=c.useContext(yt),a=c.useMemo(()=>{const o=Object.assign({},n);return r&&delete o.isFormItemInput,t&&(delete o.status,delete o.hasFeedback,delete o.feedbackIcon),o},[t,r,n]);return c.createElement(yt.Provider,{value:a},e)},Od=c.createContext(void 0),ta=e=>{const{space:t,form:r,children:n}=e;if(n==null)return null;let a=n;return r&&(a=q.createElement(Ed,{override:!0,status:!0},a)),t&&(a=q.createElement(Nc,null,a)),a},Gr=e=>{const{prefixCls:t,className:r,style:n,size:a,shape:o}=e,i=H({[`${t}-lg`]:a==="large",[`${t}-sm`]:a==="small"}),s=H({[`${t}-circle`]:o==="circle",[`${t}-square`]:o==="square",[`${t}-round`]:o==="round"}),l=c.useMemo(()=>typeof a=="number"?{width:a,height:a,lineHeight:`${a}px`}:{},[a]);return c.createElement("span",{className:H(t,i,s,r),style:Object.assign(Object.assign({},l),n)})},Rd=new zs("ant-skeleton-loading",{"0%":{backgroundPosition:"100% 50%"},"100%":{backgroundPosition:"0 50%"}}),kr=e=>({height:e,lineHeight:ee(e)}),Pt=e=>Object.assign({width:e},kr(e)),Id=e=>({background:e.skeletonLoadingBackground,backgroundSize:"400% 100%",animationName:Rd,animationDuration:e.skeletonLoadingMotionDuration,animationTimingFunction:"ease",animationIterationCount:"infinite"}),yn=(e,t)=>Object.assign({width:t(e).mul(5).equal(),minWidth:t(e).mul(5).equal()},kr(e)),jd=e=>{const{skeletonAvatarCls:t,gradientFromColor:r,controlHeight:n,controlHeightLG:a,controlHeightSM:o}=e;return{[t]:Object.assign({display:"inline-block",verticalAlign:"top",background:r},Pt(n)),[`${t}${t}-circle`]:{borderRadius:"50%"},[`${t}${t}-lg`]:Object.assign({},Pt(a)),[`${t}${t}-sm`]:Object.assign({},Pt(o))}},Fd=e=>{const{controlHeight:t,borderRadiusSM:r,skeletonInputCls:n,controlHeightLG:a,controlHeightSM:o,gradientFromColor:i,calc:s}=e;return{[n]:Object.assign({display:"inline-block",verticalAlign:"top",background:i,borderRadius:r},yn(t,s)),[`${n}-lg`]:Object.assign({},yn(a,s)),[`${n}-sm`]:Object.assign({},yn(o,s))}},io=e=>Object.assign({width:e},kr(e)),Pd=e=>{const{skeletonImageCls:t,imageSizeBase:r,gradientFromColor:n,borderRadiusSM:a,calc:o}=e;return{[t]:Object.assign(Object.assign({display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"middle",background:n,borderRadius:a},io(o(r).mul(2).equal())),{[`${t}-path`]:{fill:"#bfbfbf"},[`${t}-svg`]:Object.assign(Object.assign({},io(r)),{maxWidth:o(r).mul(4).equal(),maxHeight:o(r).mul(4).equal()}),[`${t}-svg${t}-svg-circle`]:{borderRadius:"50%"}}),[`${t}${t}-circle`]:{borderRadius:"50%"}}},xn=(e,t,r)=>{const{skeletonButtonCls:n}=e;return{[`${r}${n}-circle`]:{width:t,minWidth:t,borderRadius:"50%"},[`${r}${n}-round`]:{borderRadius:t}}},Cn=(e,t)=>Object.assign({width:t(e).mul(2).equal(),minWidth:t(e).mul(2).equal()},kr(e)),Nd=e=>{const{borderRadiusSM:t,skeletonButtonCls:r,controlHeight:n,controlHeightLG:a,controlHeightSM:o,gradientFromColor:i,calc:s}=e;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({[r]:Object.assign({display:"inline-block",verticalAlign:"top",background:i,borderRadius:t,width:s(n).mul(2).equal(),minWidth:s(n).mul(2).equal()},Cn(n,s))},xn(e,n,r)),{[`${r}-lg`]:Object.assign({},Cn(a,s))}),xn(e,a,`${r}-lg`)),{[`${r}-sm`]:Object.assign({},Cn(o,s))}),xn(e,o,`${r}-sm`))},zd=e=>{const{componentCls:t,skeletonAvatarCls:r,skeletonTitleCls:n,skeletonParagraphCls:a,skeletonButtonCls:o,skeletonInputCls:i,skeletonImageCls:s,controlHeight:l,controlHeightLG:d,controlHeightSM:u,gradientFromColor:f,padding:p,marginSM:y,borderRadius:h,titleHeight:g,blockRadius:m,paragraphLiHeight:S,controlHeightXS:v,paragraphMarginTop:C}=e;return{[t]:{display:"table",width:"100%",[`${t}-header`]:{display:"table-cell",paddingInlineEnd:p,verticalAlign:"top",[r]:Object.assign({display:"inline-block",verticalAlign:"top",background:f},Pt(l)),[`${r}-circle`]:{borderRadius:"50%"},[`${r}-lg`]:Object.assign({},Pt(d)),[`${r}-sm`]:Object.assign({},Pt(u))},[`${t}-content`]:{display:"table-cell",width:"100%",verticalAlign:"top",[n]:{width:"100%",height:g,background:f,borderRadius:m,[`+ ${a}`]:{marginBlockStart:u}},[a]:{padding:0,"> li":{width:"100%",height:S,listStyle:"none",background:f,borderRadius:m,"+ li":{marginBlockStart:v}}},[`${a}> li:last-child:not(:first-child):not(:nth-child(2))`]:{width:"61%"}},[`&-round ${t}-content`]:{[`${n}, ${a} > li`]:{borderRadius:h}}},[`${t}-with-avatar ${t}-content`]:{[n]:{marginBlockStart:y,[`+ ${a}`]:{marginBlockStart:C}}},[`${t}${t}-element`]:Object.assign(Object.assign(Object.assign(Object.assign({display:"inline-block",width:"auto"},Nd(e)),jd(e)),Fd(e)),Pd(e)),[`${t}${t}-block`]:{width:"100%",[o]:{width:"100%"},[i]:{width:"100%"}},[`${t}${t}-active`]:{[`
        ${n},
        ${a} > li,
        ${r},
        ${o},
        ${i},
        ${s}
      `]:Object.assign({},Id(e))}}},Td=e=>{const{colorFillContent:t,colorFill:r}=e,n=t,a=r;return{color:n,colorGradientEnd:a,gradientFromColor:n,gradientToColor:a,titleHeight:e.controlHeight/2,blockRadius:e.borderRadiusSM,paragraphMarginTop:e.marginLG+e.marginXXS,paragraphLiHeight:e.controlHeight/2}},Dt=mt("Skeleton",e=>{const{componentCls:t,calc:r}=e,n=Ye(e,{skeletonAvatarCls:`${t}-avatar`,skeletonTitleCls:`${t}-title`,skeletonParagraphCls:`${t}-paragraph`,skeletonButtonCls:`${t}-button`,skeletonInputCls:`${t}-input`,skeletonImageCls:`${t}-image`,imageSizeBase:r(e.controlHeight).mul(1.5).equal(),borderRadius:100,skeletonLoadingBackground:`linear-gradient(90deg, ${e.gradientFromColor} 25%, ${e.gradientToColor} 37%, ${e.gradientFromColor} 63%)`,skeletonLoadingMotionDuration:"1.4s"});return zd(n)},Td,{deprecatedTokens:[["color","gradientFromColor"],["colorGradientEnd","gradientToColor"]]}),Md=e=>{const{prefixCls:t,className:r,rootClassName:n,active:a,shape:o="circle",size:i="default"}=e,{getPrefixCls:s}=c.useContext(Le),l=s("skeleton",t),[d,u,f]=Dt(l),p=Rt(e,["prefixCls","className"]),y=H(l,`${l}-element`,{[`${l}-active`]:a},r,n,u,f);return d(c.createElement("div",{className:y},c.createElement(Gr,Object.assign({prefixCls:`${l}-avatar`,shape:o,size:i},p))))},Ad=e=>{const{prefixCls:t,className:r,rootClassName:n,active:a,block:o=!1,size:i="default"}=e,{getPrefixCls:s}=c.useContext(Le),l=s("skeleton",t),[d,u,f]=Dt(l),p=Rt(e,["prefixCls"]),y=H(l,`${l}-element`,{[`${l}-active`]:a,[`${l}-block`]:o},r,n,u,f);return d(c.createElement("div",{className:y},c.createElement(Gr,Object.assign({prefixCls:`${l}-button`,size:i},p))))},_d="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",Bd=e=>{const{prefixCls:t,className:r,rootClassName:n,style:a,active:o}=e,{getPrefixCls:i}=c.useContext(Le),s=i("skeleton",t),[l,d,u]=Dt(s),f=H(s,`${s}-element`,{[`${s}-active`]:o},r,n,d,u);return l(c.createElement("div",{className:f},c.createElement("div",{className:H(`${s}-image`,r),style:a},c.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:`${s}-image-svg`},c.createElement("title",null,"Image placeholder"),c.createElement("path",{d:_d,className:`${s}-image-path`})))))},Vd=e=>{const{prefixCls:t,className:r,rootClassName:n,active:a,block:o,size:i="default"}=e,{getPrefixCls:s}=c.useContext(Le),l=s("skeleton",t),[d,u,f]=Dt(l),p=Rt(e,["prefixCls"]),y=H(l,`${l}-element`,{[`${l}-active`]:a,[`${l}-block`]:o},r,n,u,f);return d(c.createElement("div",{className:y},c.createElement(Gr,Object.assign({prefixCls:`${l}-input`,size:i},p))))},Ld=e=>{const{prefixCls:t,className:r,rootClassName:n,style:a,active:o,children:i}=e,{getPrefixCls:s}=c.useContext(Le),l=s("skeleton",t),[d,u,f]=Dt(l),p=H(l,`${l}-element`,{[`${l}-active`]:o},u,r,n,f);return d(c.createElement("div",{className:p},c.createElement("div",{className:H(`${l}-image`,r),style:a},i)))},Hd=(e,t)=>{const{width:r,rows:n=2}=t;if(Array.isArray(r))return r[e];if(n-1===e)return r},Dd=e=>{const{prefixCls:t,className:r,style:n,rows:a=0}=e,o=Array.from({length:a}).map((i,s)=>c.createElement("li",{key:s,style:{width:Hd(s,e)}}));return c.createElement("ul",{className:H(t,r),style:n},o)},Wd=({prefixCls:e,className:t,width:r,style:n})=>c.createElement("h3",{className:H(e,t),style:Object.assign({width:r},n)});function Sn(e){return e&&typeof e=="object"?e:{}}function qd(e,t){return e&&!t?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}function Gd(e,t){return!e&&t?{width:"38%"}:e&&t?{width:"50%"}:{}}function kd(e,t){const r={};return(!e||!t)&&(r.width="61%"),!e&&t?r.rows=3:r.rows=2,r}const Wt=e=>{const{prefixCls:t,loading:r,className:n,rootClassName:a,style:o,children:i,avatar:s=!1,title:l=!0,paragraph:d=!0,active:u,round:f}=e,{getPrefixCls:p,direction:y,className:h,style:g}=xt("skeleton"),m=p("skeleton",t),[S,v,C]=Dt(m);if(r||!("loading"in e)){const R=!!s,b=!!l,O=!!d;let x;if(R){const E=Object.assign(Object.assign({prefixCls:`${m}-avatar`},qd(b,O)),Sn(s));x=c.createElement("div",{className:`${m}-header`},c.createElement(Gr,Object.assign({},E)))}let I;if(b||O){let E;if(b){const F=Object.assign(Object.assign({prefixCls:`${m}-title`},Gd(R,O)),Sn(l));E=c.createElement(Wd,Object.assign({},F))}let j;if(O){const F=Object.assign(Object.assign({prefixCls:`${m}-paragraph`},kd(R,b)),Sn(d));j=c.createElement(Dd,Object.assign({},F))}I=c.createElement("div",{className:`${m}-content`},E,j)}const w=H(m,{[`${m}-with-avatar`]:R,[`${m}-active`]:u,[`${m}-rtl`]:y==="rtl",[`${m}-round`]:f},h,n,a,v,C);return S(c.createElement("div",{className:w,style:Object.assign(Object.assign({},g),o)},x,I))}return i??null};Wt.Button=Ad;Wt.Avatar=Md;Wt.Input=Vd;Wt.Image=Bd;Wt.Node=Ld;function so(){}const Ud=c.createContext({add:so,remove:so});function Xd(e){const t=c.useContext(Ud),r=c.useRef(null);return zt(a=>{if(a){const o=a;o&&(t.add(o),r.current=o)}else t.remove(r.current)})}function ra(e,t,r){return H({[`${e}-status-success`]:t==="success",[`${e}-status-warning`]:t==="warning",[`${e}-status-error`]:t==="error",[`${e}-status-validating`]:t==="validating",[`${e}-has-feedback`]:r})}const va=(e,t)=>t||e,ji=(e,t,r)=>{var n,a;const{variant:o,[e]:i}=c.useContext(Le),s=c.useContext(Od),l=i?.variant;let d;typeof t<"u"?d=t:r===!1?d="borderless":d=(a=(n=s??l)!==null&&n!==void 0?n:o)!==null&&a!==void 0?a:"outlined";const u=Ts.includes(d);return[d,u]};var Yd={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"},Kd=function(t,r){return c.createElement(Ee,le({},t,{ref:r,icon:Yd}))},Zd=c.forwardRef(Kd);function Ur(e){return Ye(e,{inputAffixPadding:e.paddingXXS})}const Xr=e=>{const{controlHeight:t,fontSize:r,lineHeight:n,lineWidth:a,controlHeightSM:o,controlHeightLG:i,fontSizeLG:s,lineHeightLG:l,paddingSM:d,controlPaddingHorizontalSM:u,controlPaddingHorizontal:f,colorFillAlter:p,colorPrimaryHover:y,colorPrimary:h,controlOutlineWidth:g,controlOutline:m,colorErrorOutline:S,colorWarningOutline:v,colorBgContainer:C,inputFontSize:R,inputFontSizeLG:b,inputFontSizeSM:O}=e,x=R||r,I=O||x,w=b||s,E=Math.round((t-x*n)/2*10)/10-a,j=Math.round((o-I*n)/2*10)/10-a,F=Math.ceil((i-w*l)/2*10)/10-a;return{paddingBlock:Math.max(E,0),paddingBlockSM:Math.max(j,0),paddingBlockLG:Math.max(F,0),paddingInline:d-a,paddingInlineSM:u-a,paddingInlineLG:f-a,addonBg:p,activeBorderColor:h,hoverBorderColor:y,activeShadow:`0 0 0 ${g}px ${m}`,errorActiveShadow:`0 0 0 ${g}px ${S}`,warningActiveShadow:`0 0 0 ${g}px ${v}`,hoverBg:C,activeBg:C,inputFontSize:x,inputFontSizeLG:w,inputFontSizeSM:I}},Jd=e=>({borderColor:e.hoverBorderColor,backgroundColor:e.hoverBg}),ba=e=>({color:e.colorTextDisabled,backgroundColor:e.colorBgContainerDisabled,borderColor:e.colorBorder,boxShadow:"none",cursor:"not-allowed",opacity:1,"input[disabled], textarea[disabled]":{cursor:"not-allowed"},"&:hover:not([disabled])":Object.assign({},Jd(Ye(e,{hoverBorderColor:e.colorBorder,hoverBg:e.colorBgContainerDisabled})))}),Fi=(e,t)=>({background:e.colorBgContainer,borderWidth:e.lineWidth,borderStyle:e.lineType,borderColor:t.borderColor,"&:hover":{borderColor:t.hoverBorderColor,backgroundColor:e.hoverBg},"&:focus, &:focus-within":{borderColor:t.activeBorderColor,boxShadow:t.activeShadow,outline:0,backgroundColor:e.activeBg}}),lo=(e,t)=>({[`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]:Object.assign(Object.assign({},Fi(e,t)),{[`${e.componentCls}-prefix, ${e.componentCls}-suffix`]:{color:t.affixColor}}),[`&${e.componentCls}-status-${t.status}${e.componentCls}-disabled`]:{borderColor:t.borderColor}}),Qd=(e,t)=>({"&-outlined":Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Fi(e,{borderColor:e.colorBorder,hoverBorderColor:e.hoverBorderColor,activeBorderColor:e.activeBorderColor,activeShadow:e.activeShadow})),{[`&${e.componentCls}-disabled, &[disabled]`]:Object.assign({},ba(e))}),lo(e,{status:"error",borderColor:e.colorError,hoverBorderColor:e.colorErrorBorderHover,activeBorderColor:e.colorError,activeShadow:e.errorActiveShadow,affixColor:e.colorError})),lo(e,{status:"warning",borderColor:e.colorWarning,hoverBorderColor:e.colorWarningBorderHover,activeBorderColor:e.colorWarning,activeShadow:e.warningActiveShadow,affixColor:e.colorWarning})),t)}),co=(e,t)=>({[`&${e.componentCls}-group-wrapper-status-${t.status}`]:{[`${e.componentCls}-group-addon`]:{borderColor:t.addonBorderColor,color:t.addonColor}}}),ef=e=>({"&-outlined":Object.assign(Object.assign(Object.assign({[`${e.componentCls}-group`]:{"&-addon":{background:e.addonBg,border:`${ee(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},"&-addon:first-child":{borderInlineEnd:0},"&-addon:last-child":{borderInlineStart:0}}},co(e,{status:"error",addonBorderColor:e.colorError,addonColor:e.colorErrorText})),co(e,{status:"warning",addonBorderColor:e.colorWarning,addonColor:e.colorWarningText})),{[`&${e.componentCls}-group-wrapper-disabled`]:{[`${e.componentCls}-group-addon`]:Object.assign({},ba(e))}})}),tf=(e,t)=>{const{componentCls:r}=e;return{"&-borderless":Object.assign({background:"transparent",border:"none","&:focus, &:focus-within":{outline:"none"},[`&${r}-disabled, &[disabled]`]:{color:e.colorTextDisabled,cursor:"not-allowed"},[`&${r}-status-error`]:{"&, & input, & textarea":{color:e.colorError}},[`&${r}-status-warning`]:{"&, & input, & textarea":{color:e.colorWarning}}},t)}},Pi=(e,t)=>{var r;return{background:t.bg,borderWidth:e.lineWidth,borderStyle:e.lineType,borderColor:"transparent","input&, & input, textarea&, & textarea":{color:(r=t?.inputColor)!==null&&r!==void 0?r:"unset"},"&:hover":{background:t.hoverBg},"&:focus, &:focus-within":{outline:0,borderColor:t.activeBorderColor,backgroundColor:e.activeBg}}},uo=(e,t)=>({[`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]:Object.assign(Object.assign({},Pi(e,t)),{[`${e.componentCls}-prefix, ${e.componentCls}-suffix`]:{color:t.affixColor}})}),rf=(e,t)=>({"&-filled":Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Pi(e,{bg:e.colorFillTertiary,hoverBg:e.colorFillSecondary,activeBorderColor:e.activeBorderColor})),{[`&${e.componentCls}-disabled, &[disabled]`]:Object.assign({},ba(e))}),uo(e,{status:"error",bg:e.colorErrorBg,hoverBg:e.colorErrorBgHover,activeBorderColor:e.colorError,inputColor:e.colorErrorText,affixColor:e.colorError})),uo(e,{status:"warning",bg:e.colorWarningBg,hoverBg:e.colorWarningBgHover,activeBorderColor:e.colorWarning,inputColor:e.colorWarningText,affixColor:e.colorWarning})),t)}),fo=(e,t)=>({[`&${e.componentCls}-group-wrapper-status-${t.status}`]:{[`${e.componentCls}-group-addon`]:{background:t.addonBg,color:t.addonColor}}}),nf=e=>({"&-filled":Object.assign(Object.assign(Object.assign({[`${e.componentCls}-group-addon`]:{background:e.colorFillTertiary,"&:last-child":{position:"static"}}},fo(e,{status:"error",addonBg:e.colorErrorBg,addonColor:e.colorErrorText})),fo(e,{status:"warning",addonBg:e.colorWarningBg,addonColor:e.colorWarningText})),{[`&${e.componentCls}-group-wrapper-disabled`]:{[`${e.componentCls}-group`]:{"&-addon":{background:e.colorFillTertiary,color:e.colorTextDisabled},"&-addon:first-child":{borderInlineStart:`${ee(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderTop:`${ee(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderBottom:`${ee(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},"&-addon:last-child":{borderInlineEnd:`${ee(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderTop:`${ee(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderBottom:`${ee(e.lineWidth)} ${e.lineType} ${e.colorBorder}`}}}})}),Ni=(e,t)=>({background:e.colorBgContainer,borderWidth:`${ee(e.lineWidth)} 0`,borderStyle:`${e.lineType} none`,borderColor:`transparent transparent ${t.borderColor} transparent`,borderRadius:0,"&:hover":{borderColor:`transparent transparent ${t.hoverBorderColor} transparent`,backgroundColor:e.hoverBg},"&:focus, &:focus-within":{borderColor:`transparent transparent ${t.activeBorderColor} transparent`,outline:0,backgroundColor:e.activeBg}}),mo=(e,t)=>({[`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]:Object.assign(Object.assign({},Ni(e,t)),{[`${e.componentCls}-prefix, ${e.componentCls}-suffix`]:{color:t.affixColor}}),[`&${e.componentCls}-status-${t.status}${e.componentCls}-disabled`]:{borderColor:`transparent transparent ${t.borderColor} transparent`}}),af=(e,t)=>({"&-underlined":Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Ni(e,{borderColor:e.colorBorder,hoverBorderColor:e.hoverBorderColor,activeBorderColor:e.activeBorderColor,activeShadow:e.activeShadow})),{[`&${e.componentCls}-disabled, &[disabled]`]:{color:e.colorTextDisabled,boxShadow:"none",cursor:"not-allowed","&:hover":{borderColor:`transparent transparent ${e.colorBorder} transparent`}},"input[disabled], textarea[disabled]":{cursor:"not-allowed"}}),mo(e,{status:"error",borderColor:e.colorError,hoverBorderColor:e.colorErrorBorderHover,activeBorderColor:e.colorError,activeShadow:e.errorActiveShadow,affixColor:e.colorError})),mo(e,{status:"warning",borderColor:e.colorWarning,hoverBorderColor:e.colorWarningBorderHover,activeBorderColor:e.colorWarning,activeShadow:e.warningActiveShadow,affixColor:e.colorWarning})),t)}),of=e=>({"&::-moz-placeholder":{opacity:1},"&::placeholder":{color:e,userSelect:"none"},"&:placeholder-shown":{textOverflow:"ellipsis"}}),zi=e=>{const{paddingBlockLG:t,lineHeightLG:r,borderRadiusLG:n,paddingInlineLG:a}=e;return{padding:`${ee(t)} ${ee(a)}`,fontSize:e.inputFontSizeLG,lineHeight:r,borderRadius:n}},Ti=e=>({padding:`${ee(e.paddingBlockSM)} ${ee(e.paddingInlineSM)}`,fontSize:e.inputFontSizeSM,borderRadius:e.borderRadiusSM}),Mi=e=>Object.assign(Object.assign({position:"relative",display:"inline-block",width:"100%",minWidth:0,padding:`${ee(e.paddingBlock)} ${ee(e.paddingInline)}`,color:e.colorText,fontSize:e.inputFontSize,lineHeight:e.lineHeight,borderRadius:e.borderRadius,transition:`all ${e.motionDurationMid}`},of(e.colorTextPlaceholder)),{"&-lg":Object.assign({},zi(e)),"&-sm":Object.assign({},Ti(e)),"&-rtl, &-textarea-rtl":{direction:"rtl"}}),sf=e=>{const{componentCls:t,antCls:r}=e;return{position:"relative",display:"table",width:"100%",borderCollapse:"separate",borderSpacing:0,"&[class*='col-']":{paddingInlineEnd:e.paddingXS,"&:last-child":{paddingInlineEnd:0}},[`&-lg ${t}, &-lg > ${t}-group-addon`]:Object.assign({},zi(e)),[`&-sm ${t}, &-sm > ${t}-group-addon`]:Object.assign({},Ti(e)),[`&-lg ${r}-select-single ${r}-select-selector`]:{height:e.controlHeightLG},[`&-sm ${r}-select-single ${r}-select-selector`]:{height:e.controlHeightSM},[`> ${t}`]:{display:"table-cell","&:not(:first-child):not(:last-child)":{borderRadius:0}},[`${t}-group`]:{"&-addon, &-wrap":{display:"table-cell",width:1,whiteSpace:"nowrap",verticalAlign:"middle","&:not(:first-child):not(:last-child)":{borderRadius:0}},"&-wrap > *":{display:"block !important"},"&-addon":{position:"relative",padding:`0 ${ee(e.paddingInline)}`,color:e.colorText,fontWeight:"normal",fontSize:e.inputFontSize,textAlign:"center",borderRadius:e.borderRadius,transition:`all ${e.motionDurationSlow}`,lineHeight:1,[`${r}-select`]:{margin:`${ee(e.calc(e.paddingBlock).add(1).mul(-1).equal())} ${ee(e.calc(e.paddingInline).mul(-1).equal())}`,[`&${r}-select-single:not(${r}-select-customize-input):not(${r}-pagination-size-changer)`]:{[`${r}-select-selector`]:{backgroundColor:"inherit",border:`${ee(e.lineWidth)} ${e.lineType} transparent`,boxShadow:"none"}}},[`${r}-cascader-picker`]:{margin:`-9px ${ee(e.calc(e.paddingInline).mul(-1).equal())}`,backgroundColor:"transparent",[`${r}-cascader-input`]:{textAlign:"start",border:0,boxShadow:"none"}}}},[t]:{width:"100%",marginBottom:0,textAlign:"inherit","&:focus":{zIndex:1,borderInlineEndWidth:1},"&:hover":{zIndex:1,borderInlineEndWidth:1,[`${t}-search-with-button &`]:{zIndex:0}}},[`> ${t}:first-child, ${t}-group-addon:first-child`]:{borderStartEndRadius:0,borderEndEndRadius:0,[`${r}-select ${r}-select-selector`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`> ${t}-affix-wrapper`]:{[`&:not(:first-child) ${t}`]:{borderStartStartRadius:0,borderEndStartRadius:0},[`&:not(:last-child) ${t}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`> ${t}:last-child, ${t}-group-addon:last-child`]:{borderStartStartRadius:0,borderEndStartRadius:0,[`${r}-select ${r}-select-selector`]:{borderStartStartRadius:0,borderEndStartRadius:0}},[`${t}-affix-wrapper`]:{"&:not(:last-child)":{borderStartEndRadius:0,borderEndEndRadius:0,[`${t}-search &`]:{borderStartStartRadius:e.borderRadius,borderEndStartRadius:e.borderRadius}},[`&:not(:first-child), ${t}-search &:not(:first-child)`]:{borderStartStartRadius:0,borderEndStartRadius:0}},[`&${t}-group-compact`]:Object.assign(Object.assign({display:"block"},Ms()),{[`${t}-group-addon, ${t}-group-wrap, > ${t}`]:{"&:not(:first-child):not(:last-child)":{borderInlineEndWidth:e.lineWidth,"&:hover, &:focus":{zIndex:1}}},"& > *":{display:"inline-flex",float:"none",verticalAlign:"top",borderRadius:0},[`
        & > ${t}-affix-wrapper,
        & > ${t}-number-affix-wrapper,
        & > ${r}-picker-range
      `]:{display:"inline-flex"},"& > *:not(:last-child)":{marginInlineEnd:e.calc(e.lineWidth).mul(-1).equal(),borderInlineEndWidth:e.lineWidth},[t]:{float:"none"},[`& > ${r}-select > ${r}-select-selector,
      & > ${r}-select-auto-complete ${t},
      & > ${r}-cascader-picker ${t},
      & > ${t}-group-wrapper ${t}`]:{borderInlineEndWidth:e.lineWidth,borderRadius:0,"&:hover, &:focus":{zIndex:1}},[`& > ${r}-select-focused`]:{zIndex:1},[`& > ${r}-select > ${r}-select-arrow`]:{zIndex:1},[`& > *:first-child,
      & > ${r}-select:first-child > ${r}-select-selector,
      & > ${r}-select-auto-complete:first-child ${t},
      & > ${r}-cascader-picker:first-child ${t}`]:{borderStartStartRadius:e.borderRadius,borderEndStartRadius:e.borderRadius},[`& > *:last-child,
      & > ${r}-select:last-child > ${r}-select-selector,
      & > ${r}-cascader-picker:last-child ${t},
      & > ${r}-cascader-picker-focused:last-child ${t}`]:{borderInlineEndWidth:e.lineWidth,borderStartEndRadius:e.borderRadius,borderEndEndRadius:e.borderRadius},[`& > ${r}-select-auto-complete ${t}`]:{verticalAlign:"top"},[`${t}-group-wrapper + ${t}-group-wrapper`]:{marginInlineStart:e.calc(e.lineWidth).mul(-1).equal(),[`${t}-affix-wrapper`]:{borderRadius:0}},[`${t}-group-wrapper:not(:last-child)`]:{[`&${t}-search > ${t}-group`]:{[`& > ${t}-group-addon > ${t}-search-button`]:{borderRadius:0},[`& > ${t}`]:{borderStartStartRadius:e.borderRadius,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:e.borderRadius}}}})}},lf=e=>{const{componentCls:t,controlHeightSM:r,lineWidth:n,calc:a}=e,i=a(r).sub(a(n).mul(2)).sub(16).div(2).equal();return{[t]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Pr(e)),Mi(e)),Qd(e)),rf(e)),tf(e)),af(e)),{'&[type="color"]':{height:e.controlHeight,[`&${t}-lg`]:{height:e.controlHeightLG},[`&${t}-sm`]:{height:r,paddingTop:i,paddingBottom:i}},'&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration':{appearance:"none"}})}},cf=e=>{const{componentCls:t}=e;return{[`${t}-clear-icon`]:{margin:0,padding:0,lineHeight:0,color:e.colorTextQuaternary,fontSize:e.fontSizeIcon,verticalAlign:-1,cursor:"pointer",transition:`color ${e.motionDurationSlow}`,border:"none",outline:"none",backgroundColor:"transparent","&:hover":{color:e.colorIcon},"&:active":{color:e.colorText},"&-hidden":{visibility:"hidden"},"&-has-suffix":{margin:`0 ${ee(e.inputAffixPadding)}`}}}},uf=e=>{const{componentCls:t,inputAffixPadding:r,colorTextDescription:n,motionDurationSlow:a,colorIcon:o,colorIconHover:i,iconCls:s}=e,l=`${t}-affix-wrapper`,d=`${t}-affix-wrapper-disabled`;return{[l]:Object.assign(Object.assign(Object.assign(Object.assign({},Mi(e)),{display:"inline-flex",[`&:not(${t}-disabled):hover`]:{zIndex:1,[`${t}-search-with-button &`]:{zIndex:0}},"&-focused, &:focus":{zIndex:1},[`> input${t}`]:{padding:0},[`> input${t}, > textarea${t}`]:{fontSize:"inherit",border:"none",borderRadius:0,outline:"none",background:"transparent",color:"inherit","&::-ms-reveal":{display:"none"},"&:focus":{boxShadow:"none !important"}},"&::before":{display:"inline-block",width:0,visibility:"hidden",content:'"\\a0"'},[t]:{"&-prefix, &-suffix":{display:"flex",flex:"none",alignItems:"center","> *:not(:last-child)":{marginInlineEnd:e.paddingXS}},"&-show-count-suffix":{color:n,direction:"ltr"},"&-show-count-has-suffix":{marginInlineEnd:e.paddingXXS},"&-prefix":{marginInlineEnd:r},"&-suffix":{marginInlineStart:r}}}),cf(e)),{[`${s}${t}-password-icon`]:{color:o,cursor:"pointer",transition:`all ${a}`,"&:hover":{color:i}}}),[`${t}-underlined`]:{borderRadius:0},[d]:{[`${s}${t}-password-icon`]:{color:o,cursor:"not-allowed","&:hover":{color:o}}}}},df=e=>{const{componentCls:t,borderRadiusLG:r,borderRadiusSM:n}=e;return{[`${t}-group`]:Object.assign(Object.assign(Object.assign({},Pr(e)),sf(e)),{"&-rtl":{direction:"rtl"},"&-wrapper":Object.assign(Object.assign(Object.assign({display:"inline-block",width:"100%",textAlign:"start",verticalAlign:"top","&-rtl":{direction:"rtl"},"&-lg":{[`${t}-group-addon`]:{borderRadius:r,fontSize:e.inputFontSizeLG}},"&-sm":{[`${t}-group-addon`]:{borderRadius:n}}},ef(e)),nf(e)),{[`&:not(${t}-compact-first-item):not(${t}-compact-last-item)${t}-compact-item`]:{[`${t}, ${t}-group-addon`]:{borderRadius:0}},[`&:not(${t}-compact-last-item)${t}-compact-first-item`]:{[`${t}, ${t}-group-addon`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`&:not(${t}-compact-first-item)${t}-compact-last-item`]:{[`${t}, ${t}-group-addon`]:{borderStartStartRadius:0,borderEndStartRadius:0}},[`&:not(${t}-compact-last-item)${t}-compact-item`]:{[`${t}-affix-wrapper`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`&:not(${t}-compact-first-item)${t}-compact-item`]:{[`${t}-affix-wrapper`]:{borderStartStartRadius:0,borderEndStartRadius:0}}})})}},ff=e=>{const{componentCls:t,antCls:r}=e,n=`${t}-search`;return{[n]:{[t]:{"&:not([disabled]):hover, &:not([disabled]):focus":{[`+ ${t}-group-addon ${n}-button:not(${r}-btn-color-primary):not(${r}-btn-variant-text)`]:{borderInlineStartColor:e.colorPrimaryHover}}},[`${t}-affix-wrapper`]:{height:e.controlHeight,borderRadius:0},[`${t}-lg`]:{lineHeight:e.calc(e.lineHeightLG).sub(2e-4).equal()},[`> ${t}-group`]:{[`> ${t}-group-addon:last-child`]:{insetInlineStart:-1,padding:0,border:0,[`${n}-button`]:{marginInlineEnd:-1,borderStartStartRadius:0,borderEndStartRadius:0,boxShadow:"none"},[`${n}-button:not(${r}-btn-color-primary)`]:{color:e.colorTextDescription,"&:not([disabled]):hover":{color:e.colorPrimaryHover},"&:active":{color:e.colorPrimaryActive},[`&${r}-btn-loading::before`]:{inset:0}}}},[`${n}-button`]:{height:e.controlHeight,"&:hover, &:focus":{zIndex:1}},"&-large":{[`${t}-affix-wrapper, ${n}-button`]:{height:e.controlHeightLG}},"&-small":{[`${t}-affix-wrapper, ${n}-button`]:{height:e.controlHeightSM}},"&-rtl":{direction:"rtl"},[`&${t}-compact-item`]:{[`&:not(${t}-compact-last-item)`]:{[`${t}-group-addon`]:{[`${t}-search-button`]:{marginInlineEnd:e.calc(e.lineWidth).mul(-1).equal(),borderRadius:0}}},[`&:not(${t}-compact-first-item)`]:{[`${t},${t}-affix-wrapper`]:{borderRadius:0}},[`> ${t}-group-addon ${t}-search-button,
        > ${t},
        ${t}-affix-wrapper`]:{"&:hover, &:focus, &:active":{zIndex:2}},[`> ${t}-affix-wrapper-focused`]:{zIndex:2}}}}},mf=e=>{const{componentCls:t}=e;return{[`${t}-out-of-range`]:{[`&, & input, & textarea, ${t}-show-count-suffix, ${t}-data-count`]:{color:e.colorError}}}},Ai=mt(["Input","Shared"],e=>{const t=Ye(e,Ur(e));return[lf(t),uf(t)]},Xr,{resetFont:!1}),_i=mt(["Input","Component"],e=>{const t=Ye(e,Ur(e));return[df(t),ff(t),mf(t),xi(t)]},Xr,{resetFont:!1});var go=function(t,r){if(!t)return null;var n={left:t.offsetLeft,right:t.parentElement.clientWidth-t.clientWidth-t.offsetLeft,width:t.clientWidth,top:t.offsetTop,bottom:t.parentElement.clientHeight-t.clientHeight-t.offsetTop,height:t.clientHeight};return r?{left:0,right:0,width:0,top:n.top,bottom:n.bottom,height:n.height}:{left:n.left,right:n.right,width:n.width,top:0,bottom:0,height:0}},rt=function(t){return t!==void 0?"".concat(t,"px"):void 0};function gf(e){var t=e.prefixCls,r=e.containerRef,n=e.value,a=e.getValueIndex,o=e.motionName,i=e.onMotionStart,s=e.onMotionEnd,l=e.direction,d=e.vertical,u=d===void 0?!1:d,f=c.useRef(null),p=c.useState(n),y=ie(p,2),h=y[0],g=y[1],m=function(T){var A,V=a(T),G=(A=r.current)===null||A===void 0?void 0:A.querySelectorAll(".".concat(t,"-item"))[V];return G?.offsetParent&&G},S=c.useState(null),v=ie(S,2),C=v[0],R=v[1],b=c.useState(null),O=ie(b,2),x=O[0],I=O[1];ut(function(){if(h!==n){var P=m(h),T=m(n),A=go(P,u),V=go(T,u);g(n),R(A),I(V),P&&T?i():s()}},[n]);var w=c.useMemo(function(){if(u){var P;return rt((P=C?.top)!==null&&P!==void 0?P:0)}return rt(l==="rtl"?-C?.right:C?.left)},[u,l,C]),E=c.useMemo(function(){if(u){var P;return rt((P=x?.top)!==null&&P!==void 0?P:0)}return rt(l==="rtl"?-x?.right:x?.left)},[u,l,x]),j=function(){return u?{transform:"translateY(var(--thumb-start-top))",height:"var(--thumb-start-height)"}:{transform:"translateX(var(--thumb-start-left))",width:"var(--thumb-start-width)"}},F=function(){return u?{transform:"translateY(var(--thumb-active-top))",height:"var(--thumb-active-height)"}:{transform:"translateX(var(--thumb-active-left))",width:"var(--thumb-active-width)"}},z=function(){R(null),I(null),s()};return!C||!x?null:c.createElement(Tt,{visible:!0,motionName:o,motionAppear:!0,onAppearStart:j,onAppearActive:F,onVisibleChanged:z},function(P,T){var A=P.className,V=P.style,G=M(M({},V),{},{"--thumb-start-left":w,"--thumb-start-width":rt(C?.width),"--thumb-active-left":E,"--thumb-active-width":rt(x?.width),"--thumb-start-top":w,"--thumb-start-height":rt(C?.height),"--thumb-active-top":E,"--thumb-active-height":rt(x?.height)}),te={ref:gt(f,T),style:G,className:H("".concat(t,"-thumb"),A)};return c.createElement("div",te)})}var pf=["prefixCls","direction","vertical","options","disabled","defaultValue","value","name","onChange","className","motionName"];function hf(e){if(typeof e.title<"u")return e.title;if($e(e.label)!=="object"){var t;return(t=e.label)===null||t===void 0?void 0:t.toString()}}function vf(e){return e.map(function(t){if($e(t)==="object"&&t!==null){var r=hf(t);return M(M({},t),{},{title:r})}return{label:t?.toString(),title:t?.toString(),value:t}})}var bf=function(t){var r=t.prefixCls,n=t.className,a=t.disabled,o=t.checked,i=t.label,s=t.title,l=t.value,d=t.name,u=t.onChange,f=t.onFocus,p=t.onBlur,y=t.onKeyDown,h=t.onKeyUp,g=t.onMouseDown,m=function(v){a||u(v,l)};return c.createElement("label",{className:H(n,N({},"".concat(r,"-item-disabled"),a)),onMouseDown:g},c.createElement("input",{name:d,className:"".concat(r,"-item-input"),type:"radio",disabled:a,checked:o,onChange:m,onFocus:f,onBlur:p,onKeyDown:y,onKeyUp:h}),c.createElement("div",{className:"".concat(r,"-item-label"),title:s},i))},yf=c.forwardRef(function(e,t){var r,n=e.prefixCls,a=n===void 0?"rc-segmented":n,o=e.direction,i=e.vertical,s=e.options,l=s===void 0?[]:s,d=e.disabled,u=e.defaultValue,f=e.value,p=e.name,y=e.onChange,h=e.className,g=h===void 0?"":h,m=e.motionName,S=m===void 0?"thumb-motion":m,v=Xe(e,pf),C=c.useRef(null),R=c.useMemo(function(){return gt(C,t)},[C,t]),b=c.useMemo(function(){return vf(l)},[l]),O=Mr((r=b[0])===null||r===void 0?void 0:r.value,{value:f,defaultValue:u}),x=ie(O,2),I=x[0],w=x[1],E=c.useState(!1),j=ie(E,2),F=j[0],z=j[1],P=function(k,Ce){w(Ce),y?.(Ce)},T=Rt(v,["children"]),A=c.useState(!1),V=ie(A,2),G=V[0],te=V[1],re=c.useState(!1),X=ie(re,2),Q=X[0],W=X[1],_=function(){W(!0)},D=function(){W(!1)},L=function(){te(!1)},ne=function(k){k.key==="Tab"&&te(!0)},U=function(k){var Ce=b.findIndex(function(oe){return oe.value===I}),pe=b.length,Se=(Ce+k+pe)%pe,Oe=b[Se];Oe&&(w(Oe.value),y?.(Oe.value))},ce=function(k){switch(k.key){case"ArrowLeft":case"ArrowUp":U(-1);break;case"ArrowRight":case"ArrowDown":U(1);break}};return c.createElement("div",le({role:"radiogroup","aria-label":"segmented control",tabIndex:d?void 0:0,"aria-orientation":i?"vertical":"horizontal"},T,{className:H(a,N(N(N({},"".concat(a,"-rtl"),o==="rtl"),"".concat(a,"-disabled"),d),"".concat(a,"-vertical"),i),g),ref:R}),c.createElement("div",{className:"".concat(a,"-group")},c.createElement(gf,{vertical:i,prefixCls:a,value:I,containerRef:C,motionName:"".concat(a,"-").concat(S),direction:o,getValueIndex:function(k){return b.findIndex(function(Ce){return Ce.value===k})},onMotionStart:function(){z(!0)},onMotionEnd:function(){z(!1)}}),b.map(function(Y){return c.createElement(bf,le({},Y,{name:p,key:Y.value,prefixCls:a,className:H(Y.className,"".concat(a,"-item"),N(N({},"".concat(a,"-item-selected"),Y.value===I&&!F),"".concat(a,"-item-focused"),Q&&G&&Y.value===I)),checked:Y.value===I,onChange:P,onFocus:_,onBlur:D,onKeyDown:ce,onKeyUp:ne,onMouseDown:L,disabled:!!d||!!Y.disabled}))})))}),xf=yf;function po(e,t){return{[`${e}, ${e}:hover, ${e}:focus`]:{color:t.colorTextDisabled,cursor:"not-allowed"}}}function ho(e){return{background:e.itemSelectedBg,boxShadow:e.boxShadowTertiary}}const Cf=Object.assign({overflow:"hidden"},_s),Sf=e=>{const{componentCls:t}=e,r=e.calc(e.controlHeight).sub(e.calc(e.trackPadding).mul(2)).equal(),n=e.calc(e.controlHeightLG).sub(e.calc(e.trackPadding).mul(2)).equal(),a=e.calc(e.controlHeightSM).sub(e.calc(e.trackPadding).mul(2)).equal();return{[t]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Pr(e)),{display:"inline-block",padding:e.trackPadding,color:e.itemColor,background:e.trackBg,borderRadius:e.borderRadius,transition:`all ${e.motionDurationMid}`}),fa(e)),{[`${t}-group`]:{position:"relative",display:"flex",alignItems:"stretch",justifyItems:"flex-start",flexDirection:"row",width:"100%"},[`&${t}-rtl`]:{direction:"rtl"},[`&${t}-vertical`]:{[`${t}-group`]:{flexDirection:"column"},[`${t}-thumb`]:{width:"100%",height:0,padding:`0 ${ee(e.paddingXXS)}`}},[`&${t}-block`]:{display:"flex"},[`&${t}-block ${t}-item`]:{flex:1,minWidth:0},[`${t}-item`]:{position:"relative",textAlign:"center",cursor:"pointer",transition:`color ${e.motionDurationMid}`,borderRadius:e.borderRadiusSM,transform:"translateZ(0)","&-selected":Object.assign(Object.assign({},ho(e)),{color:e.itemSelectedColor}),"&-focused":As(e),"&::after":{content:'""',position:"absolute",zIndex:-1,width:"100%",height:"100%",top:0,insetInlineStart:0,borderRadius:"inherit",opacity:0,transition:`opacity ${e.motionDurationMid}, background-color ${e.motionDurationMid}`,pointerEvents:"none"},[`&:not(${t}-item-selected):not(${t}-item-disabled)`]:{"&:hover, &:active":{color:e.itemHoverColor},"&:hover::after":{opacity:1,backgroundColor:e.itemHoverBg},"&:active::after":{opacity:1,backgroundColor:e.itemActiveBg}},"&-label":Object.assign({minHeight:r,lineHeight:ee(r),padding:`0 ${ee(e.segmentedPaddingHorizontal)}`},Cf),"&-icon + *":{marginInlineStart:e.calc(e.marginSM).div(2).equal()},"&-input":{position:"absolute",insetBlockStart:0,insetInlineStart:0,width:0,height:0,opacity:0,pointerEvents:"none"}},[`${t}-thumb`]:Object.assign(Object.assign({},ho(e)),{position:"absolute",insetBlockStart:0,insetInlineStart:0,width:0,height:"100%",padding:`${ee(e.paddingXXS)} 0`,borderRadius:e.borderRadiusSM,[`& ~ ${t}-item:not(${t}-item-selected):not(${t}-item-disabled)::after`]:{backgroundColor:"transparent"}}),[`&${t}-lg`]:{borderRadius:e.borderRadiusLG,[`${t}-item-label`]:{minHeight:n,lineHeight:ee(n),padding:`0 ${ee(e.segmentedPaddingHorizontal)}`,fontSize:e.fontSizeLG},[`${t}-item, ${t}-thumb`]:{borderRadius:e.borderRadius}},[`&${t}-sm`]:{borderRadius:e.borderRadiusSM,[`${t}-item-label`]:{minHeight:a,lineHeight:ee(a),padding:`0 ${ee(e.segmentedPaddingHorizontalSM)}`},[`${t}-item, ${t}-thumb`]:{borderRadius:e.borderRadiusXS}}}),po(`&-disabled ${t}-item`,e)),po(`${t}-item-disabled`,e)),{[`${t}-thumb-motion-appear-active`]:{transition:`transform ${e.motionDurationSlow} ${e.motionEaseInOut}, width ${e.motionDurationSlow} ${e.motionEaseInOut}`,willChange:"transform, width"},[`&${t}-shape-round`]:{borderRadius:9999,[`${t}-item, ${t}-thumb`]:{borderRadius:9999}}})}},wf=e=>{const{colorTextLabel:t,colorText:r,colorFillSecondary:n,colorBgElevated:a,colorFill:o,lineWidthBold:i,colorBgLayout:s}=e;return{trackPadding:i,trackBg:s,itemColor:t,itemHoverColor:r,itemHoverBg:n,itemSelectedBg:a,itemActiveBg:o,itemSelectedColor:r}},$f=mt("Segmented",e=>{const{lineWidth:t,calc:r}=e,n=Ye(e,{segmentedPaddingHorizontal:r(e.controlPaddingHorizontal).sub(t).equal(),segmentedPaddingHorizontalSM:r(e.controlPaddingHorizontalSM).sub(t).equal()});return Sf(n)},wf);var vo=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};function Ef(e){return typeof e=="object"&&!!e?.icon}const Of=c.forwardRef((e,t)=>{const r=Si(),{prefixCls:n,className:a,rootClassName:o,block:i,options:s=[],size:l="middle",style:d,vertical:u,shape:f="default",name:p=r}=e,y=vo(e,["prefixCls","className","rootClassName","block","options","size","style","vertical","shape","name"]),{getPrefixCls:h,direction:g,className:m,style:S}=xt("segmented"),v=h("segmented",n),[C,R,b]=$f(v),O=Ht(l),x=c.useMemo(()=>s.map(E=>{if(Ef(E)){const{icon:j,label:F}=E,z=vo(E,["icon","label"]);return Object.assign(Object.assign({},z),{label:c.createElement(c.Fragment,null,c.createElement("span",{className:`${v}-item-icon`},j),F&&c.createElement("span",null,F))})}return E}),[s,v]),I=H(a,o,m,{[`${v}-block`]:i,[`${v}-sm`]:O==="small",[`${v}-lg`]:O==="large",[`${v}-vertical`]:u,[`${v}-shape-${f}`]:f==="round"},R,b),w=Object.assign(Object.assign({},S),d);return C(c.createElement(xf,Object.assign({},y,{name:p,className:I,style:w,options:x,ref:t,prefixCls:v,direction:g,vertical:u})))}),bo=Of;function Rf(e){return!!(e.addonBefore||e.addonAfter)}function If(e){return!!(e.prefix||e.suffix||e.allowClear)}function yo(e,t,r){var n=t.cloneNode(!0),a=Object.create(e,{target:{value:n},currentTarget:{value:n}});return n.value=r,typeof t.selectionStart=="number"&&typeof t.selectionEnd=="number"&&(n.selectionStart=t.selectionStart,n.selectionEnd=t.selectionEnd),n.setSelectionRange=function(){t.setSelectionRange.apply(t,arguments)},a}function Or(e,t,r,n){if(r){var a=t;if(t.type==="click"){a=yo(t,e,""),r(a);return}if(e.type!=="file"&&n!==void 0){a=yo(t,e,n),r(a);return}r(a)}}function Bi(e,t){if(e){e.focus(t);var r=t||{},n=r.cursor;if(n){var a=e.value.length;switch(n){case"start":e.setSelectionRange(0,0);break;case"end":e.setSelectionRange(a,a);break;default:e.setSelectionRange(0,a)}}}}var Vi=q.forwardRef(function(e,t){var r,n,a,o=e.inputElement,i=e.children,s=e.prefixCls,l=e.prefix,d=e.suffix,u=e.addonBefore,f=e.addonAfter,p=e.className,y=e.style,h=e.disabled,g=e.readOnly,m=e.focused,S=e.triggerFocus,v=e.allowClear,C=e.value,R=e.handleReset,b=e.hidden,O=e.classes,x=e.classNames,I=e.dataAttrs,w=e.styles,E=e.components,j=e.onClear,F=i??o,z=E?.affixWrapper||"span",P=E?.groupWrapper||"span",T=E?.wrapper||"span",A=E?.groupAddon||"span",V=c.useRef(null),G=function(Oe){var oe;(oe=V.current)!==null&&oe!==void 0&&oe.contains(Oe.target)&&S?.()},te=If(e),re=c.cloneElement(F,{value:C,className:H((r=F.props)===null||r===void 0?void 0:r.className,!te&&x?.variant)||null}),X=c.useRef(null);if(q.useImperativeHandle(t,function(){return{nativeElement:X.current||V.current}}),te){var Q=null;if(v){var W=!h&&!g&&C,_="".concat(s,"-clear-icon"),D=$e(v)==="object"&&v!==null&&v!==void 0&&v.clearIcon?v.clearIcon:"✖";Q=q.createElement("button",{type:"button",tabIndex:-1,onClick:function(Oe){R?.(Oe),j?.()},onMouseDown:function(Oe){return Oe.preventDefault()},className:H(_,N(N({},"".concat(_,"-hidden"),!W),"".concat(_,"-has-suffix"),!!d))},D)}var L="".concat(s,"-affix-wrapper"),ne=H(L,N(N(N(N(N({},"".concat(s,"-disabled"),h),"".concat(L,"-disabled"),h),"".concat(L,"-focused"),m),"".concat(L,"-readonly"),g),"".concat(L,"-input-with-clear-btn"),d&&v&&C),O?.affixWrapper,x?.affixWrapper,x?.variant),U=(d||v)&&q.createElement("span",{className:H("".concat(s,"-suffix"),x?.suffix),style:w?.suffix},Q,d);re=q.createElement(z,le({className:ne,style:w?.affixWrapper,onClick:G},I?.affixWrapper,{ref:V}),l&&q.createElement("span",{className:H("".concat(s,"-prefix"),x?.prefix),style:w?.prefix},l),re,U)}if(Rf(e)){var ce="".concat(s,"-group"),Y="".concat(ce,"-addon"),k="".concat(ce,"-wrapper"),Ce=H("".concat(s,"-wrapper"),ce,O?.wrapper,x?.wrapper),pe=H(k,N({},"".concat(k,"-disabled"),h),O?.group,x?.groupWrapper);re=q.createElement(P,{className:pe,ref:X},q.createElement(T,{className:Ce},u&&q.createElement(A,{className:Y},u),re,f&&q.createElement(A,{className:Y},f)))}return q.cloneElement(re,{className:H((n=re.props)===null||n===void 0?void 0:n.className,p)||null,style:M(M({},(a=re.props)===null||a===void 0?void 0:a.style),y),hidden:b})}),jf=["show"];function Li(e,t){return c.useMemo(function(){var r={};t&&(r.show=$e(t)==="object"&&t.formatter?t.formatter:!!t),r=M(M({},r),e);var n=r,a=n.show,o=Xe(n,jf);return M(M({},o),{},{show:!!a,showFormatter:typeof a=="function"?a:void 0,strategy:o.strategy||function(i){return i.length}})},[e,t])}var Ff=["autoComplete","onChange","onFocus","onBlur","onPressEnter","onKeyDown","onKeyUp","prefixCls","disabled","htmlSize","className","maxLength","suffix","showCount","count","type","classes","classNames","styles","onCompositionStart","onCompositionEnd"],Pf=c.forwardRef(function(e,t){var r=e.autoComplete,n=e.onChange,a=e.onFocus,o=e.onBlur,i=e.onPressEnter,s=e.onKeyDown,l=e.onKeyUp,d=e.prefixCls,u=d===void 0?"rc-input":d,f=e.disabled,p=e.htmlSize,y=e.className,h=e.maxLength,g=e.suffix,m=e.showCount,S=e.count,v=e.type,C=v===void 0?"text":v,R=e.classes,b=e.classNames,O=e.styles,x=e.onCompositionStart,I=e.onCompositionEnd,w=Xe(e,Ff),E=c.useState(!1),j=ie(E,2),F=j[0],z=j[1],P=c.useRef(!1),T=c.useRef(!1),A=c.useRef(null),V=c.useRef(null),G=function(Z){A.current&&Bi(A.current,Z)},te=Mr(e.defaultValue,{value:e.value}),re=ie(te,2),X=re[0],Q=re[1],W=X==null?"":String(X),_=c.useState(null),D=ie(_,2),L=D[0],ne=D[1],U=Li(S,m),ce=U.max||h,Y=U.strategy(W),k=!!ce&&Y>ce;c.useImperativeHandle(t,function(){var ue;return{focus:G,blur:function(){var ye;(ye=A.current)===null||ye===void 0||ye.blur()},setSelectionRange:function(ye,He,Ze){var Je;(Je=A.current)===null||Je===void 0||Je.setSelectionRange(ye,He,Ze)},select:function(){var ye;(ye=A.current)===null||ye===void 0||ye.select()},input:A.current,nativeElement:((ue=V.current)===null||ue===void 0?void 0:ue.nativeElement)||A.current}}),c.useEffect(function(){T.current&&(T.current=!1),z(function(ue){return ue&&f?!1:ue})},[f]);var Ce=function(Z,ye,He){var Ze=ye;if(!P.current&&U.exceedFormatter&&U.max&&U.strategy(ye)>U.max){if(Ze=U.exceedFormatter(ye,{max:U.max}),ye!==Ze){var Je,Qe;ne([((Je=A.current)===null||Je===void 0?void 0:Je.selectionStart)||0,((Qe=A.current)===null||Qe===void 0?void 0:Qe.selectionEnd)||0])}}else if(He.source==="compositionEnd")return;Q(Ze),A.current&&Or(A.current,Z,n,Ze)};c.useEffect(function(){if(L){var ue;(ue=A.current)===null||ue===void 0||ue.setSelectionRange.apply(ue,J(L))}},[L]);var pe=function(Z){Ce(Z,Z.target.value,{source:"change"})},Se=function(Z){P.current=!1,Ce(Z,Z.currentTarget.value,{source:"compositionEnd"}),I?.(Z)},Oe=function(Z){i&&Z.key==="Enter"&&!T.current&&(T.current=!0,i(Z)),s?.(Z)},oe=function(Z){Z.key==="Enter"&&(T.current=!1),l?.(Z)},ae=function(Z){z(!0),a?.(Z)},Re=function(Z){T.current&&(T.current=!1),z(!1),o?.(Z)},we=function(Z){Q(""),G(),A.current&&Or(A.current,Z,n)},We=k&&"".concat(u,"-out-of-range"),he=function(){var Z=Rt(e,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","showCount","count","classes","htmlSize","styles","classNames","onClear"]);return q.createElement("input",le({autoComplete:r},Z,{onChange:pe,onFocus:ae,onBlur:Re,onKeyDown:Oe,onKeyUp:oe,className:H(u,N({},"".concat(u,"-disabled"),f),b?.input),style:O?.input,ref:A,size:p,type:C,onCompositionStart:function(He){P.current=!0,x?.(He)},onCompositionEnd:Se}))},Ie=function(){var Z=Number(ce)>0;if(g||U.show){var ye=U.showFormatter?U.showFormatter({value:W,count:Y,maxLength:ce}):"".concat(Y).concat(Z?" / ".concat(ce):"");return q.createElement(q.Fragment,null,U.show&&q.createElement("span",{className:H("".concat(u,"-show-count-suffix"),N({},"".concat(u,"-show-count-has-suffix"),!!g),b?.count),style:M({},O?.count)},ye),g)}return null};return q.createElement(Vi,le({},w,{prefixCls:u,className:H(y,We),handleReset:we,value:W,focused:F,triggerFocus:G,suffix:Ie(),disabled:f,classes:R,classNames:b,styles:O,ref:V}),he())});const Hi=e=>{let t;return typeof e=="object"&&e?.clearIcon?t=e:e&&(t={clearIcon:q.createElement(oi,null)}),t};function Di(e,t){const r=c.useRef([]),n=()=>{r.current.push(setTimeout(()=>{var a,o,i,s;!((a=e.current)===null||a===void 0)&&a.input&&((o=e.current)===null||o===void 0?void 0:o.input.getAttribute("type"))==="password"&&(!((i=e.current)===null||i===void 0)&&i.input.hasAttribute("value"))&&((s=e.current)===null||s===void 0||s.input.removeAttribute("value"))}))};return c.useEffect(()=>(t&&n(),()=>r.current.forEach(a=>{a&&clearTimeout(a)})),[]),n}function Nf(e){return!!(e.prefix||e.suffix||e.allowClear||e.showCount)}var zf=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Yr=c.forwardRef((e,t)=>{const{prefixCls:r,bordered:n=!0,status:a,size:o,disabled:i,onBlur:s,onFocus:l,suffix:d,allowClear:u,addonAfter:f,addonBefore:p,className:y,style:h,styles:g,rootClassName:m,onChange:S,classNames:v,variant:C,_skipAddonWarning:R}=e,b=zf(e,["prefixCls","bordered","status","size","disabled","onBlur","onFocus","suffix","allowClear","addonAfter","addonBefore","className","style","styles","rootClassName","onChange","classNames","variant","_skipAddonWarning"]),{getPrefixCls:O,direction:x,allowClear:I,autoComplete:w,className:E,style:j,classNames:F,styles:z}=xt("input"),P=O("input",r),T=c.useRef(null),A=li(P),[V,G,te]=Ai(P,m),[re]=_i(P,A),{compactSize:X,compactItemClassnames:Q}=_r(P,x),W=Ht(we=>{var We;return(We=o??X)!==null&&We!==void 0?We:we}),_=q.useContext(zr),D=i??_,{status:L,hasFeedback:ne,feedbackIcon:U}=c.useContext(yt),ce=va(L,a),Y=Nf(e)||!!ne;c.useRef(Y);const k=Di(T,!0),Ce=we=>{k(),s?.(we)},pe=we=>{k(),l?.(we)},Se=we=>{k(),S?.(we)},Oe=(ne||d)&&q.createElement(q.Fragment,null,d,ne&&U),oe=Hi(u??I),[ae,Re]=ji("input",C,n);return V(re(q.createElement(Pf,Object.assign({ref:gt(t,T),prefixCls:P,autoComplete:w},b,{disabled:D,onBlur:Ce,onFocus:pe,style:Object.assign(Object.assign({},j),h),styles:Object.assign(Object.assign({},z),g),suffix:Oe,allowClear:oe,className:H(y,m,te,A,Q,E),onChange:Se,addonBefore:p&&q.createElement(ta,{form:!0,space:!0},p),addonAfter:f&&q.createElement(ta,{form:!0,space:!0},f),classNames:Object.assign(Object.assign(Object.assign({},v),F),{input:H({[`${P}-sm`]:W==="small",[`${P}-lg`]:W==="large",[`${P}-rtl`]:x==="rtl"},v?.input,F.input,G),variant:H({[`${P}-${ae}`]:Re},ra(P,ce)),affixWrapper:H({[`${P}-affix-wrapper-sm`]:W==="small",[`${P}-affix-wrapper-lg`]:W==="large",[`${P}-affix-wrapper-rtl`]:x==="rtl"},G),wrapper:H({[`${P}-group-rtl`]:x==="rtl"},G),groupWrapper:H({[`${P}-group-wrapper-sm`]:W==="small",[`${P}-group-wrapper-lg`]:W==="large",[`${P}-group-wrapper-rtl`]:x==="rtl",[`${P}-group-wrapper-${ae}`]:Re},ra(`${P}-group-wrapper`,ce,ne),G)})}))))});var Tf={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"}}]},name:"calendar",theme:"outlined"},Mf=function(t,r){return c.createElement(Ee,le({},t,{ref:r,icon:Tf}))},Af=c.forwardRef(Mf),xo=c.createContext(null),Wi=c.createContext({}),_f=["prefixCls","className","containerRef"],Bf=function(t){var r=t.prefixCls,n=t.className,a=t.containerRef,o=Xe(t,_f),i=c.useContext(Wi),s=i.panel,l=Fr(s,a);return c.createElement("div",le({className:H("".concat(r,"-content"),n),role:"dialog",ref:l},At(t,{aria:!0}),{"aria-modal":"true"},o))};function Co(e){return typeof e=="string"&&String(Number(e))===e?(ot(!1,"Invalid value type of `width` or `height` which should be number type instead."),Number(e)):e}var So={width:0,height:0,overflow:"hidden",outline:"none",position:"absolute"};function Vf(e,t){var r,n,a,o=e.prefixCls,i=e.open,s=e.placement,l=e.inline,d=e.push,u=e.forceRender,f=e.autoFocus,p=e.keyboard,y=e.classNames,h=e.rootClassName,g=e.rootStyle,m=e.zIndex,S=e.className,v=e.id,C=e.style,R=e.motion,b=e.width,O=e.height,x=e.children,I=e.mask,w=e.maskClosable,E=e.maskMotion,j=e.maskClassName,F=e.maskStyle,z=e.afterOpenChange,P=e.onClose,T=e.onMouseEnter,A=e.onMouseOver,V=e.onMouseLeave,G=e.onClick,te=e.onKeyDown,re=e.onKeyUp,X=e.styles,Q=e.drawerRender,W=c.useRef(),_=c.useRef(),D=c.useRef();c.useImperativeHandle(t,function(){return W.current});var L=function(Ie){var ue=Ie.keyCode,Z=Ie.shiftKey;switch(ue){case cn.TAB:{if(ue===cn.TAB){if(!Z&&document.activeElement===D.current){var ye;(ye=_.current)===null||ye===void 0||ye.focus({preventScroll:!0})}else if(Z&&document.activeElement===_.current){var He;(He=D.current)===null||He===void 0||He.focus({preventScroll:!0})}}break}case cn.ESC:{P&&p&&(Ie.stopPropagation(),P(Ie));break}}};c.useEffect(function(){if(i&&f){var he;(he=W.current)===null||he===void 0||he.focus({preventScroll:!0})}},[i]);var ne=c.useState(!1),U=ie(ne,2),ce=U[0],Y=U[1],k=c.useContext(xo),Ce;typeof d=="boolean"?Ce=d?{}:{distance:0}:Ce=d||{};var pe=(r=(n=(a=Ce)===null||a===void 0?void 0:a.distance)!==null&&n!==void 0?n:k?.pushDistance)!==null&&r!==void 0?r:180,Se=c.useMemo(function(){return{pushDistance:pe,push:function(){Y(!0)},pull:function(){Y(!1)}}},[pe]);c.useEffect(function(){if(i){var he;k==null||(he=k.push)===null||he===void 0||he.call(k)}else{var Ie;k==null||(Ie=k.pull)===null||Ie===void 0||Ie.call(k)}},[i]),c.useEffect(function(){return function(){var he;k==null||(he=k.pull)===null||he===void 0||he.call(k)}},[]);var Oe=c.createElement(Tt,le({key:"mask"},E,{visible:I&&i}),function(he,Ie){var ue=he.className,Z=he.style;return c.createElement("div",{className:H("".concat(o,"-mask"),ue,y?.mask,j),style:M(M(M({},Z),F),X?.mask),onClick:w&&i?P:void 0,ref:Ie})}),oe=typeof R=="function"?R(s):R,ae={};if(ce&&pe)switch(s){case"top":ae.transform="translateY(".concat(pe,"px)");break;case"bottom":ae.transform="translateY(".concat(-pe,"px)");break;case"left":ae.transform="translateX(".concat(pe,"px)");break;default:ae.transform="translateX(".concat(-pe,"px)");break}s==="left"||s==="right"?ae.width=Co(b):ae.height=Co(O);var Re={onMouseEnter:T,onMouseOver:A,onMouseLeave:V,onClick:G,onKeyDown:te,onKeyUp:re},we=c.createElement(Tt,le({key:"panel"},oe,{visible:i,forceRender:u,onVisibleChanged:function(Ie){z?.(Ie)},removeOnLeave:!1,leavedClassName:"".concat(o,"-content-wrapper-hidden")}),function(he,Ie){var ue=he.className,Z=he.style,ye=c.createElement(Bf,le({id:v,containerRef:Ie,prefixCls:o,className:H(S,y?.content),style:M(M({},C),X?.content)},At(e,{aria:!0}),Re),x);return c.createElement("div",le({className:H("".concat(o,"-content-wrapper"),y?.wrapper,ue),style:M(M(M({},ae),Z),X?.wrapper)},At(e,{data:!0})),Q?Q(ye):ye)}),We=M({},g);return m&&(We.zIndex=m),c.createElement(xo.Provider,{value:Se},c.createElement("div",{className:H(o,"".concat(o,"-").concat(s),h,N(N({},"".concat(o,"-open"),i),"".concat(o,"-inline"),l)),style:We,tabIndex:-1,ref:W,onKeyDown:L},Oe,c.createElement("div",{tabIndex:0,ref:_,style:So,"aria-hidden":"true","data-sentinel":"start"}),we,c.createElement("div",{tabIndex:0,ref:D,style:So,"aria-hidden":"true","data-sentinel":"end"})))}var Lf=c.forwardRef(Vf),Hf=function(t){var r=t.open,n=r===void 0?!1:r,a=t.prefixCls,o=a===void 0?"rc-drawer":a,i=t.placement,s=i===void 0?"right":i,l=t.autoFocus,d=l===void 0?!0:l,u=t.keyboard,f=u===void 0?!0:u,p=t.width,y=p===void 0?378:p,h=t.mask,g=h===void 0?!0:h,m=t.maskClosable,S=m===void 0?!0:m,v=t.getContainer,C=t.forceRender,R=t.afterOpenChange,b=t.destroyOnClose,O=t.onMouseEnter,x=t.onMouseOver,I=t.onMouseLeave,w=t.onClick,E=t.onKeyDown,j=t.onKeyUp,F=t.panelRef,z=c.useState(!1),P=ie(z,2),T=P[0],A=P[1],V=c.useState(!1),G=ie(V,2),te=G[0],re=G[1];ut(function(){re(!0)},[]);var X=te?n:!1,Q=c.useRef(),W=c.useRef();ut(function(){X&&(W.current=document.activeElement)},[X]);var _=function(ce){var Y;if(A(ce),R?.(ce),!ce&&W.current&&!((Y=Q.current)!==null&&Y!==void 0&&Y.contains(W.current))){var k;(k=W.current)===null||k===void 0||k.focus({preventScroll:!0})}},D=c.useMemo(function(){return{panel:F}},[F]);if(!C&&!T&&!X&&b)return null;var L={onMouseEnter:O,onMouseOver:x,onMouseLeave:I,onClick:w,onKeyDown:E,onKeyUp:j},ne=M(M({},t),{},{open:X,prefixCls:o,placement:s,autoFocus:d,keyboard:f,width:y,mask:g,maskClosable:S,inline:v===!1,afterOpenChange:_,ref:Q},L);return c.createElement(Wi.Provider,{value:D},c.createElement(ju,{open:X||C||T,autoDestroy:!1,getContainer:v,autoLock:g&&(X||T)},c.createElement(Lf,ne)))};const qi=e=>{var t,r;const{prefixCls:n,ariaId:a,title:o,footer:i,extra:s,closable:l,loading:d,onClose:u,headerStyle:f,bodyStyle:p,footerStyle:y,children:h,classNames:g,styles:m}=e,S=xt("drawer");let v;l===!1?v=void 0:l===void 0||l===!0?v="start":v=l?.placement==="end"?"end":"start";const C=c.useCallback(I=>c.createElement("button",{type:"button",onClick:u,className:H(`${n}-close`,{[`${n}-close-${v}`]:v==="end"})},I),[u,n,v]),[R,b]=oc(Aa(e),Aa(S),{closable:!0,closeIconRender:C}),O=()=>{var I,w;return!o&&!R?null:c.createElement("div",{style:Object.assign(Object.assign(Object.assign({},(I=S.styles)===null||I===void 0?void 0:I.header),f),m?.header),className:H(`${n}-header`,{[`${n}-header-close-only`]:R&&!o&&!s},(w=S.classNames)===null||w===void 0?void 0:w.header,g?.header)},c.createElement("div",{className:`${n}-header-title`},v==="start"&&b,o&&c.createElement("div",{className:`${n}-title`,id:a},o)),s&&c.createElement("div",{className:`${n}-extra`},s),v==="end"&&b)},x=()=>{var I,w;if(!i)return null;const E=`${n}-footer`;return c.createElement("div",{className:H(E,(I=S.classNames)===null||I===void 0?void 0:I.footer,g?.footer),style:Object.assign(Object.assign(Object.assign({},(w=S.styles)===null||w===void 0?void 0:w.footer),y),m?.footer)},i)};return c.createElement(c.Fragment,null,O(),c.createElement("div",{className:H(`${n}-body`,g?.body,(t=S.classNames)===null||t===void 0?void 0:t.body),style:Object.assign(Object.assign(Object.assign({},(r=S.styles)===null||r===void 0?void 0:r.body),p),m?.body)},d?c.createElement(Wt,{active:!0,title:!1,paragraph:{rows:5},className:`${n}-body-skeleton`}):h),x())},Df=e=>{const t="100%";return{left:`translateX(-${t})`,right:`translateX(${t})`,top:`translateY(-${t})`,bottom:`translateY(${t})`}[e]},Gi=(e,t)=>({"&-enter, &-appear":Object.assign(Object.assign({},e),{"&-active":t}),"&-leave":Object.assign(Object.assign({},t),{"&-active":e})}),ki=(e,t)=>Object.assign({"&-enter, &-appear, &-leave":{"&-start":{transition:"none"},"&-active":{transition:`all ${t}`}}},Gi({opacity:e},{opacity:1})),Wf=(e,t)=>[ki(.7,t),Gi({transform:Df(e)},{transform:"none"})],qf=e=>{const{componentCls:t,motionDurationSlow:r}=e;return{[t]:{[`${t}-mask-motion`]:ki(0,r),[`${t}-panel-motion`]:["left","right","top","bottom"].reduce((n,a)=>Object.assign(Object.assign({},n),{[`&-${a}`]:Wf(a,r)}),{})}}},Gf=e=>{const{borderRadiusSM:t,componentCls:r,zIndexPopup:n,colorBgMask:a,colorBgElevated:o,motionDurationSlow:i,motionDurationMid:s,paddingXS:l,padding:d,paddingLG:u,fontSizeLG:f,lineHeightLG:p,lineWidth:y,lineType:h,colorSplit:g,marginXS:m,colorIcon:S,colorIconHover:v,colorBgTextHover:C,colorBgTextActive:R,colorText:b,fontWeightStrong:O,footerPaddingBlock:x,footerPaddingInline:I,calc:w}=e,E=`${r}-content-wrapper`;return{[r]:{position:"fixed",inset:0,zIndex:n,pointerEvents:"none",color:b,"&-pure":{position:"relative",background:o,display:"flex",flexDirection:"column",[`&${r}-left`]:{boxShadow:e.boxShadowDrawerLeft},[`&${r}-right`]:{boxShadow:e.boxShadowDrawerRight},[`&${r}-top`]:{boxShadow:e.boxShadowDrawerUp},[`&${r}-bottom`]:{boxShadow:e.boxShadowDrawerDown}},"&-inline":{position:"absolute"},[`${r}-mask`]:{position:"absolute",inset:0,zIndex:n,background:a,pointerEvents:"auto"},[E]:{position:"absolute",zIndex:n,maxWidth:"100vw",transition:`all ${i}`,"&-hidden":{display:"none"}},[`&-left > ${E}`]:{top:0,bottom:0,left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowDrawerLeft},[`&-right > ${E}`]:{top:0,right:{_skip_check_:!0,value:0},bottom:0,boxShadow:e.boxShadowDrawerRight},[`&-top > ${E}`]:{top:0,insetInline:0,boxShadow:e.boxShadowDrawerUp},[`&-bottom > ${E}`]:{bottom:0,insetInline:0,boxShadow:e.boxShadowDrawerDown},[`${r}-content`]:{display:"flex",flexDirection:"column",width:"100%",height:"100%",overflow:"auto",background:o,pointerEvents:"auto"},[`${r}-header`]:{display:"flex",flex:0,alignItems:"center",padding:`${ee(d)} ${ee(u)}`,fontSize:f,lineHeight:p,borderBottom:`${ee(y)} ${h} ${g}`,"&-title":{display:"flex",flex:1,alignItems:"center",minWidth:0,minHeight:0}},[`${r}-extra`]:{flex:"none"},[`${r}-close`]:Object.assign({display:"inline-flex",width:w(f).add(l).equal(),height:w(f).add(l).equal(),borderRadius:t,justifyContent:"center",alignItems:"center",color:S,fontWeight:O,fontSize:f,fontStyle:"normal",lineHeight:1,textAlign:"center",textTransform:"none",textDecoration:"none",background:"transparent",border:0,cursor:"pointer",transition:`all ${s}`,textRendering:"auto",[`&${r}-close-end`]:{marginInlineStart:m},[`&:not(${r}-close-end)`]:{marginInlineEnd:m},"&:hover":{color:v,backgroundColor:C,textDecoration:"none"},"&:active":{backgroundColor:R}},fa(e)),[`${r}-title`]:{flex:1,margin:0,fontWeight:e.fontWeightStrong,fontSize:f,lineHeight:p},[`${r}-body`]:{flex:1,minWidth:0,minHeight:0,padding:u,overflow:"auto",[`${r}-body-skeleton`]:{width:"100%",height:"100%",display:"flex",justifyContent:"center"}},[`${r}-footer`]:{flexShrink:0,padding:`${ee(x)} ${ee(I)}`,borderTop:`${ee(y)} ${h} ${g}`},"&-rtl":{direction:"rtl"}}}},kf=e=>({zIndexPopup:e.zIndexPopupBase,footerPaddingBlock:e.paddingXS,footerPaddingInline:e.padding}),Ui=mt("Drawer",e=>{const t=Ye(e,{});return[Gf(t),qf(t)]},kf);var Xi=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Uf={distance:180},Yi=e=>{const{rootClassName:t,width:r,height:n,size:a="default",mask:o=!0,push:i=Uf,open:s,afterOpenChange:l,onClose:d,prefixCls:u,getContainer:f,panelRef:p=null,style:y,className:h,"aria-labelledby":g,visible:m,afterVisibleChange:S,maskStyle:v,drawerStyle:C,contentWrapperStyle:R,destroyOnClose:b,destroyOnHidden:O}=e,x=Xi(e,["rootClassName","width","height","size","mask","push","open","afterOpenChange","onClose","prefixCls","getContainer","panelRef","style","className","aria-labelledby","visible","afterVisibleChange","maskStyle","drawerStyle","contentWrapperStyle","destroyOnClose","destroyOnHidden"]),I=Si(),w=x.title?I:void 0,{getPopupContainer:E,getPrefixCls:j,direction:F,className:z,style:P,classNames:T,styles:A}=xt("drawer"),V=j("drawer",u),[G,te,re]=Ui(V),X=f===void 0&&E?()=>E(document.body):f,Q=H({"no-mask":!o,[`${V}-rtl`]:F==="rtl"},t,te,re),W=c.useMemo(()=>r??(a==="large"?736:378),[r,a]),_=c.useMemo(()=>n??(a==="large"?736:378),[n,a]),D={motionName:Ha(V,"mask-motion"),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500},L=pe=>({motionName:Ha(V,`panel-motion-${pe}`),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500}),ne=Xd(),U=gt(p,ne),[ce,Y]=lc("Drawer",x.zIndex),{classNames:k={},styles:Ce={}}=x;return G(c.createElement(ta,{form:!0,space:!0},c.createElement(ci.Provider,{value:Y},c.createElement(Hf,Object.assign({prefixCls:V,onClose:d,maskMotion:D,motion:L},x,{classNames:{mask:H(k.mask,T.mask),content:H(k.content,T.content),wrapper:H(k.wrapper,T.wrapper)},styles:{mask:Object.assign(Object.assign(Object.assign({},Ce.mask),v),A.mask),content:Object.assign(Object.assign(Object.assign({},Ce.content),C),A.content),wrapper:Object.assign(Object.assign(Object.assign({},Ce.wrapper),R),A.wrapper)},open:s??m,mask:o,push:i,width:W,height:_,style:Object.assign(Object.assign({},P),y),className:H(z,h),rootClassName:Q,getContainer:X,afterOpenChange:l??S,panelRef:U,zIndex:ce,"aria-labelledby":g??w,destroyOnClose:O??b}),c.createElement(qi,Object.assign({prefixCls:V},x,{ariaId:w,onClose:d}))))))},Xf=e=>{const{prefixCls:t,style:r,className:n,placement:a="right"}=e,o=Xi(e,["prefixCls","style","className","placement"]),{getPrefixCls:i}=c.useContext(Le),s=i("drawer",t),[l,d,u]=Ui(s),f=H(s,`${s}-pure`,`${s}-${a}`,d,u,n);return l(c.createElement("div",{className:f,style:r},c.createElement(qi,Object.assign({prefixCls:s},o))))};Yi._InternalPanelDoNotUseOrYouWillBeFired=Xf;var Yf={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"},Kf=function(t,r){return c.createElement(Ee,le({},t,{ref:r,icon:Yf}))},Zf=c.forwardRef(Kf);const Jf=e=>{const{getPrefixCls:t,direction:r}=c.useContext(Le),{prefixCls:n,className:a}=e,o=t("input-group",n),i=t("input"),[s,l,d]=_i(i),u=H(o,d,{[`${o}-lg`]:e.size==="large",[`${o}-sm`]:e.size==="small",[`${o}-compact`]:e.compact,[`${o}-rtl`]:r==="rtl"},l,a),f=c.useContext(yt),p=c.useMemo(()=>Object.assign(Object.assign({},f),{isFormItemInput:!1}),[f]);return s(c.createElement("span",{className:u,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},c.createElement(yt.Provider,{value:p},e.children)))},Qf=e=>{const{componentCls:t,paddingXS:r}=e;return{[t]:{display:"inline-flex",alignItems:"center",flexWrap:"nowrap",columnGap:r,[`${t}-input-wrapper`]:{position:"relative",[`${t}-mask-icon`]:{position:"absolute",zIndex:"1",top:"50%",right:"50%",transform:"translate(50%, -50%)",pointerEvents:"none"},[`${t}-mask-input`]:{color:"transparent",caretColor:e.colorText},[`${t}-mask-input[type=number]::-webkit-inner-spin-button`]:{"-webkit-appearance":"none",margin:0},[`${t}-mask-input[type=number]`]:{"-moz-appearance":"textfield"}},"&-rtl":{direction:"rtl"},[`${t}-input`]:{textAlign:"center",paddingInline:e.paddingXXS},[`&${t}-sm ${t}-input`]:{paddingInline:e.calc(e.paddingXXS).div(2).equal()},[`&${t}-lg ${t}-input`]:{paddingInline:e.paddingXS}}}},em=mt(["Input","OTP"],e=>{const t=Ye(e,Ur(e));return Qf(t)},Xr);var tm=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const rm=c.forwardRef((e,t)=>{const{className:r,value:n,onChange:a,onActiveChange:o,index:i,mask:s}=e,l=tm(e,["className","value","onChange","onActiveChange","index","mask"]),{getPrefixCls:d}=c.useContext(Le),u=d("otp"),f=typeof s=="string"?s:n,p=c.useRef(null);c.useImperativeHandle(t,()=>p.current);const y=m=>{a(i,m.target.value)},h=()=>{$t(()=>{var m;const S=(m=p.current)===null||m===void 0?void 0:m.input;document.activeElement===S&&S&&S.select()})},g=m=>{const{key:S,ctrlKey:v,metaKey:C}=m;S==="ArrowLeft"?o(i-1):S==="ArrowRight"?o(i+1):S==="z"&&(v||C)?m.preventDefault():S==="Backspace"&&!n&&o(i-1),h()};return c.createElement("span",{className:`${u}-input-wrapper`,role:"presentation"},s&&n!==""&&n!==void 0&&c.createElement("span",{className:`${u}-mask-icon`,"aria-hidden":"true"},f),c.createElement(Yr,Object.assign({"aria-label":`OTP Input ${i+1}`,type:s===!0?"password":"text"},l,{ref:p,value:n,onInput:y,onFocus:h,onKeyDown:g,onMouseDown:h,onMouseUp:h,className:H(r,{[`${u}-mask-input`]:s})})))});var nm=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};function ur(e){return(e||"").split("")}const am=e=>{const{index:t,prefixCls:r,separator:n}=e,a=typeof n=="function"?n(t):n;return a?c.createElement("span",{className:`${r}-separator`},a):null},om=c.forwardRef((e,t)=>{const{prefixCls:r,length:n=6,size:a,defaultValue:o,value:i,onChange:s,formatter:l,separator:d,variant:u,disabled:f,status:p,autoFocus:y,mask:h,type:g,onInput:m,inputMode:S}=e,v=nm(e,["prefixCls","length","size","defaultValue","value","onChange","formatter","separator","variant","disabled","status","autoFocus","mask","type","onInput","inputMode"]),{getPrefixCls:C,direction:R}=c.useContext(Le),b=C("otp",r),O=At(v,{aria:!0,data:!0,attr:!0}),[x,I,w]=em(b),E=Ht(_=>a??_),j=c.useContext(yt),F=va(j.status,p),z=c.useMemo(()=>Object.assign(Object.assign({},j),{status:F,hasFeedback:!1,feedbackIcon:null}),[j,F]),P=c.useRef(null),T=c.useRef({});c.useImperativeHandle(t,()=>({focus:()=>{var _;(_=T.current[0])===null||_===void 0||_.focus()},blur:()=>{var _;for(let D=0;D<n;D+=1)(_=T.current[D])===null||_===void 0||_.blur()},nativeElement:P.current}));const A=_=>l?l(_):_,[V,G]=c.useState(()=>ur(A(o||"")));c.useEffect(()=>{i!==void 0&&G(ur(i))},[i]);const te=zt(_=>{G(_),m&&m(_),s&&_.length===n&&_.every(D=>D)&&_.some((D,L)=>V[L]!==D)&&s(_.join(""))}),re=zt((_,D)=>{let L=J(V);for(let U=0;U<_;U+=1)L[U]||(L[U]="");D.length<=1?L[_]=D:L=L.slice(0,_).concat(ur(D)),L=L.slice(0,n);for(let U=L.length-1;U>=0&&!L[U];U-=1)L.pop();const ne=A(L.map(U=>U||" ").join(""));return L=ur(ne).map((U,ce)=>U===" "&&!L[ce]?L[ce]:U),L}),X=(_,D)=>{var L;const ne=re(_,D),U=Math.min(_+D.length,n-1);U!==_&&ne[_]!==void 0&&((L=T.current[U])===null||L===void 0||L.focus()),te(ne)},Q=_=>{var D;(D=T.current[_])===null||D===void 0||D.focus()},W={variant:u,disabled:f,status:F,mask:h,type:g,inputMode:S};return x(c.createElement("div",Object.assign({},O,{ref:P,className:H(b,{[`${b}-sm`]:E==="small",[`${b}-lg`]:E==="large",[`${b}-rtl`]:R==="rtl"},w,I),role:"group"}),c.createElement(yt.Provider,{value:z},Array.from({length:n}).map((_,D)=>{const L=`otp-${D}`,ne=V[D]||"";return c.createElement(c.Fragment,{key:L},c.createElement(rm,Object.assign({ref:U=>{T.current[D]=U},index:D,size:E,htmlSize:1,className:`${b}-input`,onChange:X,value:ne,onActiveChange:Q,autoFocus:D===0&&y},W)),D<n-1&&c.createElement(am,{separator:d,index:D,prefixCls:b}))}))))});var im={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},sm=function(t,r){return c.createElement(Ee,le({},t,{ref:r,icon:im}))},lm=c.forwardRef(sm),cm=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const um=e=>e?c.createElement(Zf,null):c.createElement(lm,null),dm={click:"onClick",hover:"onMouseOver"},fm=c.forwardRef((e,t)=>{const{disabled:r,action:n="click",visibilityToggle:a=!0,iconRender:o=um,suffix:i}=e,s=c.useContext(zr),l=r??s,d=typeof a=="object"&&a.visible!==void 0,[u,f]=c.useState(()=>d?a.visible:!1),p=c.useRef(null);c.useEffect(()=>{d&&f(a.visible)},[d,a]);const y=Di(p),h=()=>{var j;if(l)return;u&&y();const F=!u;f(F),typeof a=="object"&&((j=a.onVisibleChange)===null||j===void 0||j.call(a,F))},g=j=>{const F=dm[n]||"",z=o(u),P={[F]:h,className:`${j}-icon`,key:"passwordIcon",onMouseDown:T=>{T.preventDefault()},onMouseUp:T=>{T.preventDefault()}};return c.cloneElement(c.isValidElement(z)?z:c.createElement("span",null,z),P)},{className:m,prefixCls:S,inputPrefixCls:v,size:C}=e,R=cm(e,["className","prefixCls","inputPrefixCls","size"]),{getPrefixCls:b}=c.useContext(Le),O=b("input",v),x=b("input-password",S),I=a&&g(x),w=H(x,m,{[`${x}-${C}`]:!!C}),E=Object.assign(Object.assign({},Rt(R,["suffix","iconRender","visibilityToggle"])),{type:u?"text":"password",className:w,prefixCls:O,suffix:c.createElement(c.Fragment,null,I,i)});return C&&(E.size=C),c.createElement(Yr,Object.assign({ref:gt(t,p)},E))});var mm=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const gm=c.forwardRef((e,t)=>{const{prefixCls:r,inputPrefixCls:n,className:a,size:o,suffix:i,enterButton:s=!1,addonAfter:l,loading:d,disabled:u,onSearch:f,onChange:p,onCompositionStart:y,onCompositionEnd:h,variant:g,onPressEnter:m}=e,S=mm(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd","variant","onPressEnter"]),{getPrefixCls:v,direction:C}=c.useContext(Le),R=c.useRef(!1),b=v("input-search",r),O=v("input",n),{compactSize:x}=_r(b,C),I=Ht(W=>{var _;return(_=o??x)!==null&&_!==void 0?_:W}),w=c.useRef(null),E=W=>{W?.target&&W.type==="click"&&f&&f(W.target.value,W,{source:"clear"}),p?.(W)},j=W=>{var _;document.activeElement===((_=w.current)===null||_===void 0?void 0:_.input)&&W.preventDefault()},F=W=>{var _,D;f&&f((D=(_=w.current)===null||_===void 0?void 0:_.input)===null||D===void 0?void 0:D.value,W,{source:"input"})},z=W=>{R.current||d||(m?.(W),F(W))},P=typeof s=="boolean"?c.createElement(Zd,null):null,T=`${b}-button`;let A;const V=s||{},G=V.type&&V.type.__ANT_BUTTON===!0;G||V.type==="button"?A=br(V,Object.assign({onMouseDown:j,onClick:W=>{var _,D;(D=(_=V?.props)===null||_===void 0?void 0:_.onClick)===null||D===void 0||D.call(_,W),F(W)},key:"enterButton"},G?{className:T,size:I}:{})):A=c.createElement(qr,{className:T,color:s?"primary":"default",size:I,disabled:u,key:"enterButton",onMouseDown:j,onClick:F,loading:d,icon:P,variant:g==="borderless"||g==="filled"||g==="underlined"?"text":s?"solid":void 0},s),l&&(A=[A,br(l,{key:"addonAfter"})]);const te=H(b,{[`${b}-rtl`]:C==="rtl",[`${b}-${I}`]:!!I,[`${b}-with-button`]:!!s},a),re=W=>{R.current=!0,y?.(W)},X=W=>{R.current=!1,h?.(W)},Q=Object.assign(Object.assign({},S),{className:te,prefixCls:O,type:"search",size:I,variant:g,onPressEnter:z,onCompositionStart:re,onCompositionEnd:X,addonAfter:A,suffix:i,onChange:E,disabled:u,_skipAddonWarning:!0});return c.createElement(Yr,Object.assign({ref:gt(w,t)},Q))});var pm=`
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`,hm=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break","white-space"],wn={},Ge;function vm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=e.getAttribute("id")||e.getAttribute("data-reactid")||e.getAttribute("name");if(t&&wn[r])return wn[r];var n=window.getComputedStyle(e),a=n.getPropertyValue("box-sizing")||n.getPropertyValue("-moz-box-sizing")||n.getPropertyValue("-webkit-box-sizing"),o=parseFloat(n.getPropertyValue("padding-bottom"))+parseFloat(n.getPropertyValue("padding-top")),i=parseFloat(n.getPropertyValue("border-bottom-width"))+parseFloat(n.getPropertyValue("border-top-width")),s=hm.map(function(d){return"".concat(d,":").concat(n.getPropertyValue(d))}).join(";"),l={sizingStyle:s,paddingSize:o,borderSize:i,boxSizing:a};return t&&r&&(wn[r]=l),l}function bm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;Ge||(Ge=document.createElement("textarea"),Ge.setAttribute("tab-index","-1"),Ge.setAttribute("aria-hidden","true"),Ge.setAttribute("name","hiddenTextarea"),document.body.appendChild(Ge)),e.getAttribute("wrap")?Ge.setAttribute("wrap",e.getAttribute("wrap")):Ge.removeAttribute("wrap");var a=vm(e,t),o=a.paddingSize,i=a.borderSize,s=a.boxSizing,l=a.sizingStyle;Ge.setAttribute("style","".concat(l,";").concat(pm)),Ge.value=e.value||e.placeholder||"";var d=void 0,u=void 0,f,p=Ge.scrollHeight;if(s==="border-box"?p+=i:s==="content-box"&&(p-=o),r!==null||n!==null){Ge.value=" ";var y=Ge.scrollHeight-o;r!==null&&(d=y*r,s==="border-box"&&(d=d+o+i),p=Math.max(d,p)),n!==null&&(u=y*n,s==="border-box"&&(u=u+o+i),f=p>u?"":"hidden",p=Math.min(u,p))}var h={height:p,overflowY:f,resize:"none"};return d&&(h.minHeight=d),u&&(h.maxHeight=u),h}var ym=["prefixCls","defaultValue","value","autoSize","onResize","className","style","disabled","onChange","onInternalAutoSize"],$n=0,En=1,On=2,xm=c.forwardRef(function(e,t){var r=e,n=r.prefixCls,a=r.defaultValue,o=r.value,i=r.autoSize,s=r.onResize,l=r.className,d=r.style,u=r.disabled,f=r.onChange;r.onInternalAutoSize;var p=Xe(r,ym),y=Mr(a,{value:o,postState:function(W){return W??""}}),h=ie(y,2),g=h[0],m=h[1],S=function(W){m(W.target.value),f?.(W)},v=c.useRef();c.useImperativeHandle(t,function(){return{textArea:v.current}});var C=c.useMemo(function(){return i&&$e(i)==="object"?[i.minRows,i.maxRows]:[]},[i]),R=ie(C,2),b=R[0],O=R[1],x=!!i,I=c.useState(On),w=ie(I,2),E=w[0],j=w[1],F=c.useState(),z=ie(F,2),P=z[0],T=z[1],A=function(){j($n)};ut(function(){x&&A()},[o,b,O,x]),ut(function(){if(E===$n)j(En);else if(E===En){var Q=bm(v.current,!1,b,O);j(On),T(Q)}},[E]);var V=c.useRef(),G=function(){$t.cancel(V.current)},te=function(W){E===On&&(s?.(W),i&&(G(),V.current=$t(function(){A()})))};c.useEffect(function(){return G},[]);var re=x?P:null,X=M(M({},d),re);return(E===$n||E===En)&&(X.overflowY="hidden",X.overflowX="hidden"),c.createElement(Qo,{onResize:te,disabled:!(i||s)},c.createElement("textarea",le({},p,{ref:v,style:X,className:H(n,l,N({},"".concat(n,"-disabled"),u)),disabled:u,value:g,onChange:S})))}),Cm=["defaultValue","value","onFocus","onBlur","onChange","allowClear","maxLength","onCompositionStart","onCompositionEnd","suffix","prefixCls","showCount","count","className","style","disabled","hidden","classNames","styles","onResize","onClear","onPressEnter","readOnly","autoSize","onKeyDown"],Sm=q.forwardRef(function(e,t){var r,n=e.defaultValue,a=e.value,o=e.onFocus,i=e.onBlur,s=e.onChange,l=e.allowClear,d=e.maxLength,u=e.onCompositionStart,f=e.onCompositionEnd,p=e.suffix,y=e.prefixCls,h=y===void 0?"rc-textarea":y,g=e.showCount,m=e.count,S=e.className,v=e.style,C=e.disabled,R=e.hidden,b=e.classNames,O=e.styles,x=e.onResize,I=e.onClear,w=e.onPressEnter,E=e.readOnly,j=e.autoSize,F=e.onKeyDown,z=Xe(e,Cm),P=Mr(n,{value:a,defaultValue:n}),T=ie(P,2),A=T[0],V=T[1],G=A==null?"":String(A),te=q.useState(!1),re=ie(te,2),X=re[0],Q=re[1],W=q.useRef(!1),_=q.useState(null),D=ie(_,2),L=D[0],ne=D[1],U=c.useRef(null),ce=c.useRef(null),Y=function(){var fe;return(fe=ce.current)===null||fe===void 0?void 0:fe.textArea},k=function(){Y().focus()};c.useImperativeHandle(t,function(){var je;return{resizableTextArea:ce.current,focus:k,blur:function(){Y().blur()},nativeElement:((je=U.current)===null||je===void 0?void 0:je.nativeElement)||Y()}}),c.useEffect(function(){Q(function(je){return!C&&je})},[C]);var Ce=q.useState(null),pe=ie(Ce,2),Se=pe[0],Oe=pe[1];q.useEffect(function(){if(Se){var je;(je=Y()).setSelectionRange.apply(je,J(Se))}},[Se]);var oe=Li(m,g),ae=(r=oe.max)!==null&&r!==void 0?r:d,Re=Number(ae)>0,we=oe.strategy(G),We=!!ae&&we>ae,he=function(fe,et){var tt=et;!W.current&&oe.exceedFormatter&&oe.max&&oe.strategy(et)>oe.max&&(tt=oe.exceedFormatter(et,{max:oe.max}),et!==tt&&Oe([Y().selectionStart||0,Y().selectionEnd||0])),V(tt),Or(fe.currentTarget,fe,s,tt)},Ie=function(fe){W.current=!0,u?.(fe)},ue=function(fe){W.current=!1,he(fe,fe.currentTarget.value),f?.(fe)},Z=function(fe){he(fe,fe.target.value)},ye=function(fe){fe.key==="Enter"&&w&&w(fe),F?.(fe)},He=function(fe){Q(!0),o?.(fe)},Ze=function(fe){Q(!1),i?.(fe)},Je=function(fe){V(""),k(),Or(Y(),fe,s)},Qe=p,ht;oe.show&&(oe.showFormatter?ht=oe.showFormatter({value:G,count:we,maxLength:ae}):ht="".concat(we).concat(Re?" / ".concat(ae):""),Qe=q.createElement(q.Fragment,null,Qe,q.createElement("span",{className:H("".concat(h,"-data-count"),b?.count),style:O?.count},ht)));var ir=function(fe){var et;x?.(fe),(et=Y())!==null&&et!==void 0&&et.style.height&&ne(!0)},rn=!j&&!g&&!l;return q.createElement(Vi,{ref:U,value:G,allowClear:l,handleReset:Je,suffix:Qe,prefixCls:h,classNames:M(M({},b),{},{affixWrapper:H(b?.affixWrapper,N(N({},"".concat(h,"-show-count"),g),"".concat(h,"-textarea-allow-clear"),l))}),disabled:C,focused:X,className:H(S,We&&"".concat(h,"-out-of-range")),style:M(M({},v),L&&!rn?{height:"auto"}:{}),dataAttrs:{affixWrapper:{"data-count":typeof ht=="string"?ht:void 0}},hidden:R,readOnly:E,onClear:I},q.createElement(xm,le({},z,{autoSize:j,maxLength:d,onKeyDown:ye,onChange:Z,onFocus:He,onBlur:Ze,onCompositionStart:Ie,onCompositionEnd:ue,className:H(b?.textarea),style:M(M({},O?.textarea),{},{resize:v?.resize}),disabled:C,prefixCls:h,onResize:ir,ref:ce,readOnly:E})))});const wm=e=>{const{componentCls:t,paddingLG:r}=e,n=`${t}-textarea`;return{[`textarea${t}`]:{maxWidth:"100%",height:"auto",minHeight:e.controlHeight,lineHeight:e.lineHeight,verticalAlign:"bottom",transition:`all ${e.motionDurationSlow}`,resize:"vertical",[`&${t}-mouse-active`]:{transition:`all ${e.motionDurationSlow}, height 0s, width 0s`}},[`${t}-textarea-affix-wrapper-resize-dirty`]:{width:"auto"},[n]:{position:"relative","&-show-count":{[`${t}-data-count`]:{position:"absolute",bottom:e.calc(e.fontSize).mul(e.lineHeight).mul(-1).equal(),insetInlineEnd:0,color:e.colorTextDescription,whiteSpace:"nowrap",pointerEvents:"none"}},[`
        &-allow-clear > ${t},
        &-affix-wrapper${n}-has-feedback ${t}
      `]:{paddingInlineEnd:r},[`&-affix-wrapper${t}-affix-wrapper`]:{padding:0,[`> textarea${t}`]:{fontSize:"inherit",border:"none",outline:"none",background:"transparent",minHeight:e.calc(e.controlHeight).sub(e.calc(e.lineWidth).mul(2)).equal(),"&:focus":{boxShadow:"none !important"}},[`${t}-suffix`]:{margin:0,"> *:not(:last-child)":{marginInline:0},[`${t}-clear-icon`]:{position:"absolute",insetInlineEnd:e.paddingInline,insetBlockStart:e.paddingXS},[`${n}-suffix`]:{position:"absolute",top:0,insetInlineEnd:e.paddingInline,bottom:0,zIndex:1,display:"inline-flex",alignItems:"center",margin:"auto",pointerEvents:"none"}}},[`&-affix-wrapper${t}-affix-wrapper-rtl`]:{[`${t}-suffix`]:{[`${t}-data-count`]:{direction:"ltr",insetInlineStart:0}}},[`&-affix-wrapper${t}-affix-wrapper-sm`]:{[`${t}-suffix`]:{[`${t}-clear-icon`]:{insetInlineEnd:e.paddingInlineSM}}}}}},$m=mt(["Input","TextArea"],e=>{const t=Ye(e,Ur(e));return wm(t)},Xr,{resetFont:!1});var Em=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Om=c.forwardRef((e,t)=>{var r;const{prefixCls:n,bordered:a=!0,size:o,disabled:i,status:s,allowClear:l,classNames:d,rootClassName:u,className:f,style:p,styles:y,variant:h,showCount:g,onMouseDown:m,onResize:S}=e,v=Em(e,["prefixCls","bordered","size","disabled","status","allowClear","classNames","rootClassName","className","style","styles","variant","showCount","onMouseDown","onResize"]),{getPrefixCls:C,direction:R,allowClear:b,autoComplete:O,className:x,style:I,classNames:w,styles:E}=xt("textArea"),j=c.useContext(zr),F=i??j,{status:z,hasFeedback:P,feedbackIcon:T}=c.useContext(yt),A=va(z,s),V=c.useRef(null);c.useImperativeHandle(t,()=>{var oe;return{resizableTextArea:(oe=V.current)===null||oe===void 0?void 0:oe.resizableTextArea,focus:ae=>{var Re,we;Bi((we=(Re=V.current)===null||Re===void 0?void 0:Re.resizableTextArea)===null||we===void 0?void 0:we.textArea,ae)},blur:()=>{var ae;return(ae=V.current)===null||ae===void 0?void 0:ae.blur()}}});const G=C("input",n),te=li(G),[re,X,Q]=Ai(G,u),[W]=$m(G,te),{compactSize:_,compactItemClassnames:D}=_r(G,R),L=Ht(oe=>{var ae;return(ae=o??_)!==null&&ae!==void 0?ae:oe}),[ne,U]=ji("textArea",h,a),ce=Hi(l??b),[Y,k]=c.useState(!1),[Ce,pe]=c.useState(!1),Se=oe=>{k(!0),m?.(oe);const ae=()=>{k(!1),document.removeEventListener("mouseup",ae)};document.addEventListener("mouseup",ae)},Oe=oe=>{var ae,Re;if(S?.(oe),Y&&typeof getComputedStyle=="function"){const we=(Re=(ae=V.current)===null||ae===void 0?void 0:ae.nativeElement)===null||Re===void 0?void 0:Re.querySelector("textarea");we&&getComputedStyle(we).resize==="both"&&pe(!0)}};return re(W(c.createElement(Sm,Object.assign({autoComplete:O},v,{style:Object.assign(Object.assign({},I),p),styles:Object.assign(Object.assign({},E),y),disabled:F,allowClear:ce,className:H(Q,te,f,u,D,x,Ce&&`${G}-textarea-affix-wrapper-resize-dirty`),classNames:Object.assign(Object.assign(Object.assign({},d),w),{textarea:H({[`${G}-sm`]:L==="small",[`${G}-lg`]:L==="large"},X,d?.textarea,w.textarea,Y&&`${G}-mouse-active`),variant:H({[`${G}-${ne}`]:U},ra(G,A)),affixWrapper:H(`${G}-textarea-affix-wrapper`,{[`${G}-affix-wrapper-rtl`]:R==="rtl",[`${G}-affix-wrapper-sm`]:L==="small",[`${G}-affix-wrapper-lg`]:L==="large",[`${G}-textarea-show-count`]:g||((r=e.count)===null||r===void 0?void 0:r.show)},X)}),prefixCls:G,suffix:P&&c.createElement("span",{className:`${G}-textarea-suffix`},T),showCount:g,ref:V,onResize:Oe,onMouseDown:Se}))))}),ct=Yr;ct.Group=Jf;ct.Search=gm;ct.TextArea=Om;ct.Password=fm;ct.OTP=om;function Rm(e){var t=Object.create(null);return function(r){return t[r]===void 0&&(t[r]=e(r)),t[r]}}const Im=(e,t,r,n)=>{const a=[r,{code:t,...n||{}}];if(e?.services?.logger?.forward)return e.services.logger.forward(a,"warn","react-i18next::",!0);Et(a[0])&&(a[0]=`react-i18next:: ${a[0]}`),e?.services?.logger?.warn?e.services.logger.warn(...a):console?.warn&&console.warn(...a)},wo={},na=(e,t,r,n)=>{Et(r)&&wo[r]||(Et(r)&&(wo[r]=new Date),Im(e,t,r,n))},Ki=(e,t)=>()=>{if(e.isInitialized)t();else{const r=()=>{setTimeout(()=>{e.off("initialized",r)},0),t()};e.on("initialized",r)}},aa=(e,t,r)=>{e.loadNamespaces(t,Ki(e,r))},$o=(e,t,r,n)=>{if(Et(r)&&(r=[r]),e.options.preload&&e.options.preload.indexOf(t)>-1)return aa(e,r,n);r.forEach(a=>{e.options.ns.indexOf(a)<0&&e.options.ns.push(a)}),e.loadLanguages(t,Ki(e,n))},jm=(e,t,r={})=>!t.languages||!t.languages.length?(na(t,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:t.languages}),!0):t.hasLoadedNamespace(e,{lng:r.lng,precheck:(n,a)=>{if(r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!a(n.isLanguageChangingTo,e))return!1}}),Et=e=>typeof e=="string",Fm=e=>typeof e=="object"&&e!==null,Pm=c.createContext();class Nm{constructor(){this.usedNamespaces={}}addUsedNamespaces(t){t.forEach(r=>{this.usedNamespaces[r]||(this.usedNamespaces[r]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}var Rn={exports:{}},In={};var Eo;function zm(){if(Eo)return In;Eo=1;var e=Bs();function t(f,p){return f===p&&(f!==0||1/f===1/p)||f!==f&&p!==p}var r=typeof Object.is=="function"?Object.is:t,n=e.useState,a=e.useEffect,o=e.useLayoutEffect,i=e.useDebugValue;function s(f,p){var y=p(),h=n({inst:{value:y,getSnapshot:p}}),g=h[0].inst,m=h[1];return o(function(){g.value=y,g.getSnapshot=p,l(g)&&m({inst:g})},[f,y,p]),a(function(){return l(g)&&m({inst:g}),f(function(){l(g)&&m({inst:g})})},[f]),i(y),y}function l(f){var p=f.getSnapshot;f=f.value;try{var y=p();return!r(f,y)}catch{return!0}}function d(f,p){return p()}var u=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?d:s;return In.useSyncExternalStore=e.useSyncExternalStore!==void 0?e.useSyncExternalStore:u,In}var Oo;function Tm(){return Oo||(Oo=1,Rn.exports=zm()),Rn.exports}var Mm=Tm();const Am=(e,t)=>{if(Et(t))return t;if(Fm(t)&&Et(t.defaultValue))return t.defaultValue;if(typeof e=="function")return"";if(Array.isArray(e)){const r=e[e.length-1];return typeof r=="function"?"":r}return e},_m={t:Am,ready:!1},Bm=()=>()=>{},pt=(e,t={})=>{const{i18n:r}=t,{i18n:n,defaultNS:a}=c.useContext(Pm)||{},o=r||n||Ls();o&&!o.reportNamespaces&&(o.reportNamespaces=new Nm),o||na(o,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const i=c.useMemo(()=>({...Vs(),...o?.options?.react,...t}),[o,t]),{useSuspense:s,keyPrefix:l}=i,d=a||o?.options?.defaultNS,u=Et(d)?[d]:d||["translation"],f=c.useMemo(()=>u,u);o?.reportNamespaces?.addUsedNamespaces?.(f);const p=c.useRef(0),y=c.useCallback(w=>{if(!o)return Bm;const{bindI18n:E,bindI18nStore:j}=i,F=()=>{p.current+=1,w()};return E&&o.on(E,F),j&&o.store.on(j,F),()=>{E&&E.split(" ").forEach(z=>o.off(z,F)),j&&j.split(" ").forEach(z=>o.store.off(z,F))}},[o,i]),h=c.useRef(),g=c.useCallback(()=>{if(!o)return _m;const w=!!(o.isInitialized||o.initializedStoreOnce)&&f.every(T=>jm(T,o,i)),E=t.lng||o.language,j=p.current,F=h.current;if(F&&F.ready===w&&F.lng===E&&F.keyPrefix===l&&F.revision===j)return F;const P={t:o.getFixedT(E,i.nsMode==="fallback"?f:f[0],l),ready:w,lng:E,keyPrefix:l,revision:j};return h.current=P,P},[o,f,l,i,t.lng]),[m,S]=c.useState(0),{t:v,ready:C}=Mm.useSyncExternalStore(y,g,g);c.useEffect(()=>{if(o&&!C&&!s){const w=()=>S(E=>E+1);t.lng?$o(o,t.lng,f,w):aa(o,f,w)}},[o,t.lng,f,C,s,m]);const R=o||{},b=c.useRef(null),O=c.useRef(),x=w=>{const E=Object.getOwnPropertyDescriptors(w);E.__original&&delete E.__original;const j=Object.create(Object.getPrototypeOf(w),E);if(!Object.prototype.hasOwnProperty.call(j,"__original"))try{Object.defineProperty(j,"__original",{value:w,writable:!1,enumerable:!1,configurable:!1})}catch{}return j},I=c.useMemo(()=>{const w=R,E=w?.language;let j=w;w&&(b.current&&b.current.__original===w?O.current!==E?(j=x(w),b.current=j,O.current=E):j=b.current:(j=x(w),b.current=j,O.current=E));const F=!C&&!s?(...P)=>(na(o,"USE_T_BEFORE_READY","useTranslation: t was called before ready. When using useSuspense: false, make sure to check the ready flag before using t."),v(...P)):v,z=[F,j,C];return z.t=F,z.i18n=j,z.ready=C,z},[v,R,C,R.resolvedLanguage,R.language,R.languages]);if(o&&s&&!C)throw new Promise(w=>{const E=()=>w();t.lng?$o(o,t.lng,f,E):aa(o,f,E)});return I};var Vm={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H212V212h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H612V212h200v200zM464 544H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H212V612h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H612V612h200v200z"}}]},name:"appstore",theme:"outlined"},Lm=function(t,r){return c.createElement(Ee,le({},t,{ref:r,icon:Vm}))},Hm=c.forwardRef(Lm),Dm={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"}}]},name:"caret-right",theme:"filled"},Wm=function(t,r){return c.createElement(Ee,le({},t,{ref:r,icon:Dm}))},qm=c.forwardRef(Wm),Gm={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]},name:"github",theme:"outlined"},km=function(t,r){return c.createElement(Ee,le({},t,{ref:r,icon:Gm}))},Um=c.forwardRef(km),Xm={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM305.8 637.7c3.1 3.1 8.1 3.1 11.3 0l138.3-137.6L583 628.5c3.1 3.1 8.2 3.1 11.3 0l275.4-275.3c3.1-3.1 3.1-8.2 0-11.3l-39.6-39.6a8.03 8.03 0 00-11.3 0l-230 229.9L461.4 404a8.03 8.03 0 00-11.3 0L266.3 586.7a8.03 8.03 0 000 11.3l39.5 39.7z"}}]},name:"line-chart",theme:"outlined"},Ym=function(t,r){return c.createElement(Ee,le({},t,{ref:r,icon:Xm}))},Km=c.forwardRef(Ym),Zm={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3.1-447.8.2-671.7.3-671.7 447.8.1 671.7.2 671.7.3-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 10-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z"}}]},name:"linkedin",theme:"outlined"},Jm=function(t,r){return c.createElement(Ee,le({},t,{ref:r,icon:Zm}))},Qm=c.forwardRef(Jm),e0={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"},t0=function(t,r){return c.createElement(Ee,le({},t,{ref:r,icon:e0}))},r0=c.forwardRef(t0),n0={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"}}]},name:"menu",theme:"outlined"},a0=function(t,r){return c.createElement(Ee,le({},t,{ref:r,icon:n0}))},o0=c.forwardRef(a0),i0={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M300 328a60 60 0 10120 0 60 60 0 10-120 0zM852 64H172c-17.7 0-32 14.3-32 32v660c0 17.7 14.3 32 32 32h680c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-32 660H204V128h616v596zM604 328a60 60 0 10120 0 60 60 0 10-120 0zm250.2 556H169.8c-16.5 0-29.8 14.3-29.8 32v36c0 4.4 3.3 8 7.4 8h729.1c4.1 0 7.4-3.6 7.4-8v-36c.1-17.7-13.2-32-29.7-32zM664 508H360c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"robot",theme:"outlined"},s0=function(t,r){return c.createElement(Ee,le({},t,{ref:r,icon:i0}))},l0=c.forwardRef(s0),c0={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M824.2 699.9a301.55 301.55 0 00-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200-109.1 1.7-197 90.6-197 200 0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 01612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 008-8.2c-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4 0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 01612 612zM361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7z"}}]},name:"team",theme:"outlined"},u0=function(t,r){return c.createElement(Ee,le({},t,{ref:r,icon:c0}))},d0=c.forwardRef(u0),f0={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"}}]},name:"twitter",theme:"outlined"},m0=function(t,r){return c.createElement(Ee,le({},t,{ref:r,icon:f0}))},g0=c.forwardRef(m0);const p0=K(qr)`
  border-radius: ${({theme:e})=>e.radius.pill};
  height: 46px;
  padding: 0 1.25rem;
  font-weight: 600;

  ${({theme:e,$appearance:t})=>t==="primary"?ja`
          background: ${e.colors.secondary};
          border: 1px solid ${e.colors.secondary};
          color: ${e.colors.white};
          &:hover {
            transform: translateY(-1px);
            background: #5a52e0 !important;
            border-color: #5a52e0 !important;
            color: ${e.colors.white} !important;
          }
        `:ja`
          background: transparent;
          border: 1px solid ${e.colors.secondary};
          color: ${e.colors.secondary};
          &:hover {
            transform: translateY(-1px);
            border-color: ${e.colors.accent} !important;
            color: ${e.colors.accent} !important;
          }
        `};
`;function Bt({variant:e="primary",...t}){return $.jsx(p0,{$appearance:e,...t})}const h0=K.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: ${({$scrolled:e})=>e?"rgba(255,255,255,0.88)":"transparent"};
  backdrop-filter: ${({$scrolled:e})=>e?"blur(8px)":"none"};
  border-bottom: ${({$scrolled:e,theme:t})=>e?`1px solid ${t.colors.border}`:"1px solid transparent"};
  transition: all 0.25s ease-in-out;
`,v0=K.div`
  width: min(1160px, calc(100% - 3rem));
  margin: 0 auto;
  display: flex;
  height: 78px;
  align-items: center;
  justify-content: space-between;
`,b0=K.button`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  border: 0;
  background: transparent;
  font-weight: 800;
  font-size: 1.2rem;
  color: ${({theme:e})=>e.colors.primary};
  cursor: pointer;
`,y0=K.span`
  width: 18px;
  height: 18px;
  border-radius: 6px;
  transform: rotate(45deg);
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.secondary}, ${({theme:e})=>e.colors.accent});
`,x0=K.nav`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  @media (max-width: 768px) {
    display: none;
  }
`,C0=K.button`
  border: 0;
  background: transparent;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
  cursor: pointer;
`,S0=K.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  @media (max-width: 768px) {
    display: none;
  }
`,w0=K.button`
  border: 0;
  background: transparent;
  color: ${({theme:e})=>e.colors.primary};
  display: none;
  @media (max-width: 768px) {
    display: grid;
    place-items: center;
  }
`,$0=K.div`
  display: grid;
  gap: 0.8rem;
  margin-top: 1rem;
`,E0=["about","features","howItWorks","pricing","contact"];function O0(){const{t:e,i18n:t}=pt(),[r,n]=c.useState(!1),[a,o]=c.useState(!1);c.useEffect(()=>{const l=()=>n(window.scrollY>16);return window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)},[]);const i=c.useMemo(()=>E0.map(l=>({id:l,label:e(`nav.${l}`)})),[e]),s=l=>{const d=document.getElementById(l);d&&d.scrollIntoView({behavior:"smooth",block:"start"}),o(!1)};return $.jsxs(h0,{$scrolled:r,children:[$.jsxs(v0,{children:[$.jsxs(b0,{"aria-label":"Nexora home",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[$.jsx(y0,{}),e("brand.name")]}),$.jsx(x0,{"aria-label":"Main navigation",children:i.map(l=>$.jsx(C0,{"aria-label":l.label,onClick:()=>s(l.id),children:l.label},l.id))}),$.jsxs(S0,{children:[$.jsx(bo,{size:"small",value:t.language,options:[{label:"EN",value:"en"},{label:"AR",value:"ar"}],onChange:l=>{t.changeLanguage(String(l))},"aria-label":"Language selector"}),$.jsx(Bt,{"aria-label":e("nav.getStarted"),onClick:()=>s("contact"),children:e("nav.getStarted")})]}),$.jsx(w0,{"aria-label":e("nav.openMenu"),onClick:()=>o(!0),children:$.jsx(o0,{style:{fontSize:20}})})]}),$.jsx(Yi,{title:e("brand.name"),placement:"top",open:a,onClose:()=>o(!1),height:330,"aria-label":"Mobile menu drawer",children:$.jsxs($0,{children:[i.map(l=>$.jsx(Bt,{variant:"outline",onClick:()=>s(l.id),"aria-label":l.label,children:l.label},l.id)),$.jsx(bo,{value:t.language,options:[{label:"EN",value:"en"},{label:"AR",value:"ar"}],onChange:l=>{t.changeLanguage(String(l))},"aria-label":"Mobile language selector"})]})})]})}const R0=K.footer`
  background: ${({theme:e})=>e.colors.primary};
  color: ${({theme:e})=>e.colors.white};
  padding-top: 3.5rem;
`,I0=K.div`
  width: min(1160px, calc(100% - 3rem));
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr repeat(4, 1fr);
  gap: 1.2rem;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`,dr=K.h4`
  margin: 0 0 0.9rem;
`,Ae=K.a`
  display: block;
  color: rgba(255, 255, 255, 0.78);
  margin-bottom: 0.55rem;
`,j0=K.div`
  width: min(1160px, calc(100% - 3rem));
  margin: 2rem auto 0;
  padding: 1rem 0 1.4rem;
  border-top: 1px solid rgba(255, 255, 255, 0.16);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.7rem;
`;function F0(){const{t:e}=pt(),t=new Date().getFullYear();return $.jsxs(R0,{children:[$.jsxs(I0,{children:[$.jsxs("div",{children:[$.jsx("h3",{children:e("brand.name")}),$.jsx("p",{children:e("footer.description")}),$.jsxs("p",{children:[$.jsx(g0,{"aria-label":"Twitter icon"})," ",$.jsx(Qm,{"aria-label":"LinkedIn icon"})," ",$.jsx(Um,{"aria-label":"GitHub icon"})]})]}),$.jsxs("div",{children:[$.jsx(dr,{children:e("footer.columns.product")}),$.jsx(Ae,{href:"#features",children:e("footer.links.features")}),$.jsx(Ae,{href:"#features",children:e("footer.links.integrations")}),$.jsx(Ae,{href:"#pricing",children:e("footer.links.pricing")}),$.jsx(Ae,{href:"#",children:e("footer.links.changelog")})]}),$.jsxs("div",{children:[$.jsx(dr,{children:e("footer.columns.company")}),$.jsx(Ae,{href:"#about",children:e("footer.links.about")}),$.jsx(Ae,{href:"#",children:e("footer.links.careers")}),$.jsx(Ae,{href:"#",children:e("footer.links.blog")}),$.jsx(Ae,{href:"#contact",children:e("footer.links.contact")})]}),$.jsxs("div",{children:[$.jsx(dr,{children:e("footer.columns.resources")}),$.jsx(Ae,{href:"#",children:e("footer.links.docs")}),$.jsx(Ae,{href:"#",children:e("footer.links.help")}),$.jsx(Ae,{href:"#",children:e("footer.links.status")}),$.jsx(Ae,{href:"#",children:e("footer.links.community")})]}),$.jsxs("div",{children:[$.jsx(dr,{children:e("footer.columns.legal")}),$.jsx(Ae,{href:"#",children:e("footer.links.privacy")}),$.jsx(Ae,{href:"#",children:e("footer.links.terms")}),$.jsx(Ae,{href:"#",children:e("footer.links.security")}),$.jsx(Ae,{href:"#",children:e("footer.links.cookies")})]})]}),$.jsxs(j0,{children:[$.jsx("span",{children:e("footer.copyright",{year:t})}),$.jsx("span",{children:e("footer.madeWith")})]})]})}function P0(){const{pathname:e}=Hs();return c.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[e]),null}function N0(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function z0(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var T0=(function(){function e(r){var n=this;this._insertTag=function(a){var o;n.tags.length===0?n.insertionPoint?o=n.insertionPoint.nextSibling:n.prepend?o=n.container.firstChild:o=n.before:o=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(a,o),n.tags.push(a)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(n){n.forEach(this._insertTag)},t.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(z0(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var o=N0(a);try{o.insertRule(n,o.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(n));this.ctr++},t.flush=function(){this.tags.forEach(function(n){var a;return(a=n.parentNode)==null?void 0:a.removeChild(n)}),this.tags=[],this.ctr=0},e})(),_e="-ms-",Rr="-moz-",me="-webkit-",Zi="comm",ya="rule",xa="decl",M0="@import",Ji="@keyframes",A0="@layer",_0=Math.abs,Kr=String.fromCharCode,B0=Object.assign;function V0(e,t){return Me(e,0)^45?(((t<<2^Me(e,0))<<2^Me(e,1))<<2^Me(e,2))<<2^Me(e,3):0}function Qi(e){return e.trim()}function L0(e,t){return(e=t.exec(e))?e[0]:e}function ge(e,t,r){return e.replace(t,r)}function oa(e,t){return e.indexOf(t)}function Me(e,t){return e.charCodeAt(t)|0}function Zt(e,t,r){return e.slice(t,r)}function nt(e){return e.length}function Ca(e){return e.length}function fr(e,t){return t.push(e),e}function H0(e,t){return e.map(t).join("")}var Zr=1,Vt=1,es=0,De=0,Ne=0,qt="";function Jr(e,t,r,n,a,o,i){return{value:e,root:t,parent:r,type:n,props:a,children:o,line:Zr,column:Vt,length:i,return:""}}function Gt(e,t){return B0(Jr("",null,null,"",null,null,0),e,{length:-e.length},t)}function D0(){return Ne}function W0(){return Ne=De>0?Me(qt,--De):0,Vt--,Ne===10&&(Vt=1,Zr--),Ne}function Ue(){return Ne=De<es?Me(qt,De++):0,Vt++,Ne===10&&(Vt=1,Zr++),Ne}function it(){return Me(qt,De)}function pr(){return De}function or(e,t){return Zt(qt,e,t)}function Jt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ts(e){return Zr=Vt=1,es=nt(qt=e),De=0,[]}function rs(e){return qt="",e}function hr(e){return Qi(or(De-1,ia(e===91?e+2:e===40?e+1:e)))}function q0(e){for(;(Ne=it())&&Ne<33;)Ue();return Jt(e)>2||Jt(Ne)>3?"":" "}function G0(e,t){for(;--t&&Ue()&&!(Ne<48||Ne>102||Ne>57&&Ne<65||Ne>70&&Ne<97););return or(e,pr()+(t<6&&it()==32&&Ue()==32))}function ia(e){for(;Ue();)switch(Ne){case e:return De;case 34:case 39:e!==34&&e!==39&&ia(Ne);break;case 40:e===41&&ia(e);break;case 92:Ue();break}return De}function k0(e,t){for(;Ue()&&e+Ne!==57;)if(e+Ne===84&&it()===47)break;return"/*"+or(t,De-1)+"*"+Kr(e===47?e:Ue())}function U0(e){for(;!Jt(it());)Ue();return or(e,De)}function X0(e){return rs(vr("",null,null,null,[""],e=ts(e),0,[0],e))}function vr(e,t,r,n,a,o,i,s,l){for(var d=0,u=0,f=i,p=0,y=0,h=0,g=1,m=1,S=1,v=0,C="",R=a,b=o,O=n,x=C;m;)switch(h=v,v=Ue()){case 40:if(h!=108&&Me(x,f-1)==58){oa(x+=ge(hr(v),"&","&\f"),"&\f")!=-1&&(S=-1);break}case 34:case 39:case 91:x+=hr(v);break;case 9:case 10:case 13:case 32:x+=q0(h);break;case 92:x+=G0(pr()-1,7);continue;case 47:switch(it()){case 42:case 47:fr(Y0(k0(Ue(),pr()),t,r),l);break;default:x+="/"}break;case 123*g:s[d++]=nt(x)*S;case 125*g:case 59:case 0:switch(v){case 0:case 125:m=0;case 59+u:S==-1&&(x=ge(x,/\f/g,"")),y>0&&nt(x)-f&&fr(y>32?Io(x+";",n,r,f-1):Io(ge(x," ","")+";",n,r,f-2),l);break;case 59:x+=";";default:if(fr(O=Ro(x,t,r,d,u,a,s,C,R=[],b=[],f),o),v===123)if(u===0)vr(x,t,O,O,R,o,f,s,b);else switch(p===99&&Me(x,3)===110?100:p){case 100:case 108:case 109:case 115:vr(e,O,O,n&&fr(Ro(e,O,O,0,0,a,s,C,a,R=[],f),b),a,b,f,s,n?R:b);break;default:vr(x,O,O,O,[""],b,0,s,b)}}d=u=y=0,g=S=1,C=x="",f=i;break;case 58:f=1+nt(x),y=h;default:if(g<1){if(v==123)--g;else if(v==125&&g++==0&&W0()==125)continue}switch(x+=Kr(v),v*g){case 38:S=u>0?1:(x+="\f",-1);break;case 44:s[d++]=(nt(x)-1)*S,S=1;break;case 64:it()===45&&(x+=hr(Ue())),p=it(),u=f=nt(C=x+=U0(pr())),v++;break;case 45:h===45&&nt(x)==2&&(g=0)}}return o}function Ro(e,t,r,n,a,o,i,s,l,d,u){for(var f=a-1,p=a===0?o:[""],y=Ca(p),h=0,g=0,m=0;h<n;++h)for(var S=0,v=Zt(e,f+1,f=_0(g=i[h])),C=e;S<y;++S)(C=Qi(g>0?p[S]+" "+v:ge(v,/&\f/g,p[S])))&&(l[m++]=C);return Jr(e,t,r,a===0?ya:s,l,d,u)}function Y0(e,t,r){return Jr(e,t,r,Zi,Kr(D0()),Zt(e,2,-2),0)}function Io(e,t,r,n){return Jr(e,t,r,xa,Zt(e,0,n),Zt(e,n+1,-1),n)}function Nt(e,t){for(var r="",n=Ca(e),a=0;a<n;a++)r+=t(e[a],a,e,t)||"";return r}function K0(e,t,r,n){switch(e.type){case A0:if(e.children.length)break;case M0:case xa:return e.return=e.return||e.value;case Zi:return"";case Ji:return e.return=e.value+"{"+Nt(e.children,n)+"}";case ya:e.value=e.props.join(",")}return nt(r=Nt(e.children,n))?e.return=e.value+"{"+r+"}":""}function Z0(e){var t=Ca(e);return function(r,n,a,o){for(var i="",s=0;s<t;s++)i+=e[s](r,n,a,o)||"";return i}}function J0(e){return function(t){t.root||(t=t.return)&&e(t)}}var Q0=function(t,r,n){for(var a=0,o=0;a=o,o=it(),a===38&&o===12&&(r[n]=1),!Jt(o);)Ue();return or(t,De)},eg=function(t,r){var n=-1,a=44;do switch(Jt(a)){case 0:a===38&&it()===12&&(r[n]=1),t[n]+=Q0(De-1,r,n);break;case 2:t[n]+=hr(a);break;case 4:if(a===44){t[++n]=it()===58?"&\f":"",r[n]=t[n].length;break}default:t[n]+=Kr(a)}while(a=Ue());return t},tg=function(t,r){return rs(eg(ts(t),r))},jo=new WeakMap,rg=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var r=t.value,n=t.parent,a=t.column===n.column&&t.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(t.props.length===1&&r.charCodeAt(0)!==58&&!jo.get(n))&&!a){jo.set(t,!0);for(var o=[],i=tg(r,o),s=n.props,l=0,d=0;l<i.length;l++)for(var u=0;u<s.length;u++,d++)t.props[d]=o[l]?i[l].replace(/&\f/g,s[u]):s[u]+" "+i[l]}}},ng=function(t){if(t.type==="decl"){var r=t.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(t.return="",t.value="")}};function ns(e,t){switch(V0(e,t)){case 5103:return me+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return me+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return me+e+Rr+e+_e+e+e;case 6828:case 4268:return me+e+_e+e+e;case 6165:return me+e+_e+"flex-"+e+e;case 5187:return me+e+ge(e,/(\w+).+(:[^]+)/,me+"box-$1$2"+_e+"flex-$1$2")+e;case 5443:return me+e+_e+"flex-item-"+ge(e,/flex-|-self/,"")+e;case 4675:return me+e+_e+"flex-line-pack"+ge(e,/align-content|flex-|-self/,"")+e;case 5548:return me+e+_e+ge(e,"shrink","negative")+e;case 5292:return me+e+_e+ge(e,"basis","preferred-size")+e;case 6060:return me+"box-"+ge(e,"-grow","")+me+e+_e+ge(e,"grow","positive")+e;case 4554:return me+ge(e,/([^-])(transform)/g,"$1"+me+"$2")+e;case 6187:return ge(ge(ge(e,/(zoom-|grab)/,me+"$1"),/(image-set)/,me+"$1"),e,"")+e;case 5495:case 3959:return ge(e,/(image-set\([^]*)/,me+"$1$`$1");case 4968:return ge(ge(e,/(.+:)(flex-)?(.*)/,me+"box-pack:$3"+_e+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+me+e+e;case 4095:case 3583:case 4068:case 2532:return ge(e,/(.+)-inline(.+)/,me+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(nt(e)-1-t>6)switch(Me(e,t+1)){case 109:if(Me(e,t+4)!==45)break;case 102:return ge(e,/(.+:)(.+)-([^]+)/,"$1"+me+"$2-$3$1"+Rr+(Me(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~oa(e,"stretch")?ns(ge(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Me(e,t+1)!==115)break;case 6444:switch(Me(e,nt(e)-3-(~oa(e,"!important")&&10))){case 107:return ge(e,":",":"+me)+e;case 101:return ge(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+me+(Me(e,14)===45?"inline-":"")+"box$3$1"+me+"$2$3$1"+_e+"$2box$3")+e}break;case 5936:switch(Me(e,t+11)){case 114:return me+e+_e+ge(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return me+e+_e+ge(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return me+e+_e+ge(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return me+e+_e+e+e}return e}var ag=function(t,r,n,a){if(t.length>-1&&!t.return)switch(t.type){case xa:t.return=ns(t.value,t.length);break;case Ji:return Nt([Gt(t,{value:ge(t.value,"@","@"+me)})],a);case ya:if(t.length)return H0(t.props,function(o){switch(L0(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Nt([Gt(t,{props:[ge(o,/:(read-\w+)/,":"+Rr+"$1")]})],a);case"::placeholder":return Nt([Gt(t,{props:[ge(o,/:(plac\w+)/,":"+me+"input-$1")]}),Gt(t,{props:[ge(o,/:(plac\w+)/,":"+Rr+"$1")]}),Gt(t,{props:[ge(o,/:(plac\w+)/,_e+"input-$1")]})],a)}return""})}},og=[ag],ig=function(t){var r=t.key;if(r==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(g){var m=g.getAttribute("data-emotion");m.indexOf(" ")!==-1&&(document.head.appendChild(g),g.setAttribute("data-s",""))})}var a=t.stylisPlugins||og,o={},i,s=[];i=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(g){for(var m=g.getAttribute("data-emotion").split(" "),S=1;S<m.length;S++)o[m[S]]=!0;s.push(g)});var l,d=[rg,ng];{var u,f=[K0,J0(function(g){u.insert(g)})],p=Z0(d.concat(a,f)),y=function(m){return Nt(X0(m),p)};l=function(m,S,v,C){u=v,y(m?m+"{"+S.styles+"}":S.styles),C&&(h.inserted[S.name]=!0)}}var h={key:r,sheet:new T0({key:r,container:i,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:l};return h.sheet.hydrate(s),h},jn={exports:{}},ve={};var Fo;function sg(){if(Fo)return ve;Fo=1;var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,y=e?Symbol.for("react.memo"):60115,h=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,S=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function C(b){if(typeof b=="object"&&b!==null){var O=b.$$typeof;switch(O){case t:switch(b=b.type,b){case l:case d:case n:case o:case a:case f:return b;default:switch(b=b&&b.$$typeof,b){case s:case u:case h:case y:case i:return b;default:return O}}case r:return O}}}function R(b){return C(b)===d}return ve.AsyncMode=l,ve.ConcurrentMode=d,ve.ContextConsumer=s,ve.ContextProvider=i,ve.Element=t,ve.ForwardRef=u,ve.Fragment=n,ve.Lazy=h,ve.Memo=y,ve.Portal=r,ve.Profiler=o,ve.StrictMode=a,ve.Suspense=f,ve.isAsyncMode=function(b){return R(b)||C(b)===l},ve.isConcurrentMode=R,ve.isContextConsumer=function(b){return C(b)===s},ve.isContextProvider=function(b){return C(b)===i},ve.isElement=function(b){return typeof b=="object"&&b!==null&&b.$$typeof===t},ve.isForwardRef=function(b){return C(b)===u},ve.isFragment=function(b){return C(b)===n},ve.isLazy=function(b){return C(b)===h},ve.isMemo=function(b){return C(b)===y},ve.isPortal=function(b){return C(b)===r},ve.isProfiler=function(b){return C(b)===o},ve.isStrictMode=function(b){return C(b)===a},ve.isSuspense=function(b){return C(b)===f},ve.isValidElementType=function(b){return typeof b=="string"||typeof b=="function"||b===n||b===d||b===o||b===a||b===f||b===p||typeof b=="object"&&b!==null&&(b.$$typeof===h||b.$$typeof===y||b.$$typeof===i||b.$$typeof===s||b.$$typeof===u||b.$$typeof===m||b.$$typeof===S||b.$$typeof===v||b.$$typeof===g)},ve.typeOf=C,ve}var Po;function lg(){return Po||(Po=1,jn.exports=sg()),jn.exports}var Fn,No;function cg(){if(No)return Fn;No=1;var e=lg(),t={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},o={};o[e.ForwardRef]=n,o[e.Memo]=a;function i(h){return e.isMemo(h)?a:o[h.$$typeof]||t}var s=Object.defineProperty,l=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,p=Object.prototype;function y(h,g,m){if(typeof g!="string"){if(p){var S=f(g);S&&S!==p&&y(h,S,m)}var v=l(g);d&&(v=v.concat(d(g)));for(var C=i(h),R=i(g),b=0;b<v.length;++b){var O=v[b];if(!r[O]&&!(m&&m[O])&&!(R&&R[O])&&!(C&&C[O])){var x=u(g,O);try{s(h,O,x)}catch{}}}}return h}return Fn=y,Fn}cg();var ug=!0;function as(e,t,r){var n="";return r.split(" ").forEach(function(a){e[a]!==void 0?t.push(e[a]+";"):a&&(n+=a+" ")}),n}var Sa=function(t,r,n){var a=t.key+"-"+r.name;(n===!1||ug===!1)&&t.registered[a]===void 0&&(t.registered[a]=r.styles)},os=function(t,r,n){Sa(t,r,n);var a=t.key+"-"+r.name;if(t.inserted[r.name]===void 0){var o=r;do t.insert(r===o?"."+a:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function dg(e){for(var t=0,r,n=0,a=e.length;a>=4;++n,a-=4)r=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,t=(r&65535)*1540483477+((r>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(a){case 3:t^=(e.charCodeAt(n+2)&255)<<16;case 2:t^=(e.charCodeAt(n+1)&255)<<8;case 1:t^=e.charCodeAt(n)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var fg={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},mg=/[A-Z]|^ms/g,gg=/_EMO_([^_]+?)_([^]*?)_EMO_/g,is=function(t){return t.charCodeAt(1)===45},zo=function(t){return t!=null&&typeof t!="boolean"},Pn=Rm(function(e){return is(e)?e:e.replace(mg,"-$&").toLowerCase()}),To=function(t,r){switch(t){case"animation":case"animationName":if(typeof r=="string")return r.replace(gg,function(n,a,o){return at={name:a,styles:o,next:at},a})}return fg[t]!==1&&!is(t)&&typeof r=="number"&&r!==0?r+"px":r};function Qt(e,t,r){if(r==null)return"";var n=r;if(n.__emotion_styles!==void 0)return n;switch(typeof r){case"boolean":return"";case"object":{var a=r;if(a.anim===1)return at={name:a.name,styles:a.styles,next:at},a.name;var o=r;if(o.styles!==void 0){var i=o.next;if(i!==void 0)for(;i!==void 0;)at={name:i.name,styles:i.styles,next:at},i=i.next;var s=o.styles+";";return s}return pg(e,t,r)}case"function":{if(e!==void 0){var l=at,d=r(e);return at=l,Qt(e,t,d)}break}}var u=r;if(t==null)return u;var f=t[u];return f!==void 0?f:u}function pg(e,t,r){var n="";if(Array.isArray(r))for(var a=0;a<r.length;a++)n+=Qt(e,t,r[a])+";";else for(var o in r){var i=r[o];if(typeof i!="object"){var s=i;t!=null&&t[s]!==void 0?n+=o+"{"+t[s]+"}":zo(s)&&(n+=Pn(o)+":"+To(o,s)+";")}else if(Array.isArray(i)&&typeof i[0]=="string"&&(t==null||t[i[0]]===void 0))for(var l=0;l<i.length;l++)zo(i[l])&&(n+=Pn(o)+":"+To(o,i[l])+";");else{var d=Qt(e,t,i);switch(o){case"animation":case"animationName":{n+=Pn(o)+":"+d+";";break}default:n+=o+"{"+d+"}"}}}return n}var Mo=/label:\s*([^\s;{]+)\s*(;|$)/g,at;function wa(e,t,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var n=!0,a="";at=void 0;var o=e[0];if(o==null||o.raw===void 0)n=!1,a+=Qt(r,t,o);else{var i=o;a+=i[0]}for(var s=1;s<e.length;s++)if(a+=Qt(r,t,e[s]),n){var l=o;a+=l[s]}Mo.lastIndex=0;for(var d="",u;(u=Mo.exec(a))!==null;)d+="-"+u[1];var f=dg(a)+d;return{name:f,styles:a,next:at}}var hg=function(t){return t()},vg=_n.useInsertionEffect?_n.useInsertionEffect:!1,ss=vg||hg,ls=c.createContext(typeof HTMLElement<"u"?ig({key:"css"}):null);ls.Provider;var cs=function(t){return c.forwardRef(function(r,n){var a=c.useContext(ls);return t(r,a,n)})},us=c.createContext({}),Qr={}.hasOwnProperty,sa="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",ds=function(t,r){var n={};for(var a in r)Qr.call(r,a)&&(n[a]=r[a]);return n[sa]=t,n},bg=function(t){var r=t.cache,n=t.serialized,a=t.isStringTag;return Sa(r,n,a),ss(function(){return os(r,n,a)}),null},yg=cs(function(e,t,r){var n=e.css;typeof n=="string"&&t.registered[n]!==void 0&&(n=t.registered[n]);var a=e[sa],o=[n],i="";typeof e.className=="string"?i=as(t.registered,o,e.className):e.className!=null&&(i=e.className+" ");var s=wa(o,void 0,c.useContext(us));i+=t.key+"-"+s.name;var l={};for(var d in e)Qr.call(e,d)&&d!=="css"&&d!==sa&&(l[d]=e[d]);return l.className=i,r&&(l.ref=r),c.createElement(c.Fragment,null,c.createElement(bg,{cache:t,serialized:s,isStringTag:typeof a=="string"}),c.createElement(a,l))}),fs=yg,xg=$.Fragment,Pe=function(t,r,n){return Qr.call(r,"css")?$.jsx(fs,ds(t,r),n):$.jsx(t,r,n)},Ao=function(t,r){var n=arguments;if(r==null||!Qr.call(r,"css"))return c.createElement.apply(void 0,n);var a=n.length,o=new Array(a);o[0]=fs,o[1]=ds(t,r);for(var i=2;i<a;i++)o[i]=n[i];return c.createElement.apply(null,o)};(function(e){var t;t||(t=e.JSX||(e.JSX={}))})(Ao||(Ao={}));function ms(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return wa(t)}function B(){var e=ms.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var Cg=function e(t){for(var r=t.length,n=0,a="";n<r;n++){var o=t[n];if(o!=null){var i=void 0;switch(typeof o){case"boolean":break;case"object":{if(Array.isArray(o))i=e(o);else{i="";for(var s in o)o[s]&&s&&(i&&(i+=" "),i+=s)}break}default:i=o}i&&(a&&(a+=" "),a+=i)}}return a};function Sg(e,t,r){var n=[],a=as(e,n,r);return n.length<2?r:a+t(n)}var wg=function(t){var r=t.cache,n=t.serializedArr;return ss(function(){for(var a=0;a<n.length;a++)os(r,n[a],!1)}),null},Nn=cs(function(e,t){var r=[],n=function(){for(var l=arguments.length,d=new Array(l),u=0;u<l;u++)d[u]=arguments[u];var f=wa(d,t.registered);return r.push(f),Sa(t,f,!1),t.key+"-"+f.name},a=function(){for(var l=arguments.length,d=new Array(l),u=0;u<l;u++)d[u]=arguments[u];return Sg(t.registered,n,Cg(d))},o={css:n,cx:a,theme:c.useContext(us)},i=e.children(o);return c.createElement(c.Fragment,null,c.createElement(wg,{cache:t,serializedArr:r}),i)}),$g=Object.defineProperty,Eg=(e,t,r)=>t in e?$g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,mr=(e,t,r)=>Eg(e,typeof t!="symbol"?t+"":t,r),la=new Map,gr=new WeakMap,_o=0,Og=void 0;function Rg(e){return e?(gr.has(e)||(_o+=1,gr.set(e,_o.toString())),gr.get(e)):"0"}function Ig(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?Rg(e.root):e[t]}`).toString()}function jg(e){const t=Ig(e);let r=la.get(t);if(!r){const n=new Map;let a;const o=new IntersectionObserver(i=>{i.forEach(s=>{var l;const d=s.isIntersecting&&a.some(u=>s.intersectionRatio>=u);e.trackVisibility&&typeof s.isVisible>"u"&&(s.isVisible=d),(l=n.get(s.target))==null||l.forEach(u=>{u(d,s)})})},e);a=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:o,elements:n},la.set(t,r)}return r}function gs(e,t,r={},n=Og){if(typeof window.IntersectionObserver>"u"&&n!==void 0){const l=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:a,observer:o,elements:i}=jg(r),s=i.get(e)||[];return i.has(e)||i.set(e,s),s.push(t),o.observe(e),function(){s.splice(s.indexOf(t),1),s.length===0&&(i.delete(e),o.unobserve(e)),i.size===0&&(o.disconnect(),la.delete(a))}}function Fg(e){return typeof e.children!="function"}var Bo=class extends c.Component{constructor(e){super(e),mr(this,"node",null),mr(this,"_unobserveCb",null),mr(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),mr(this,"handleChange",(t,r)=>{t&&this.props.triggerOnce&&this.unobserve(),Fg(this.props)||this.setState({inView:t,entry:r}),this.props.onChange&&this.props.onChange(t,r)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:r,trackVisibility:n,delay:a,fallbackInView:o}=this.props;this._unobserveCb=gs(this.node,this.handleChange,{threshold:e,root:t,rootMargin:r,trackVisibility:n,delay:a},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:y,entry:h}=this.state;return e({inView:y,entry:h,ref:this.handleNode})}const{as:t,triggerOnce:r,threshold:n,root:a,rootMargin:o,onChange:i,skip:s,trackVisibility:l,delay:d,initialInView:u,fallbackInView:f,...p}=this.props;return c.createElement(t||"div",{ref:this.handleNode,...p},e)}};function ps({threshold:e,delay:t,trackVisibility:r,rootMargin:n,root:a,triggerOnce:o,skip:i,initialInView:s,fallbackInView:l,onChange:d}={}){var u;const[f,p]=c.useState(null),y=c.useRef(d),[h,g]=c.useState({inView:!!s,entry:void 0});y.current=d,c.useEffect(()=>{if(i||!f)return;let C;return C=gs(f,(R,b)=>{g({inView:R,entry:b}),y.current&&y.current(R,b),b.isIntersecting&&o&&C&&(C(),C=void 0)},{root:a,rootMargin:n,threshold:e,trackVisibility:r,delay:t},l),()=>{C&&C()}},[Array.isArray(e)?e.toString():e,f,a,n,o,i,r,l,t]);const m=(u=h.entry)==null?void 0:u.target,S=c.useRef(void 0);!f&&m&&!o&&!i&&S.current!==m&&(S.current=m,g({inView:!!s,entry:void 0}));const v=[p,h.inView,h.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}var zn={exports:{}},be={};var Vo;function Pg(){if(Vo)return be;Vo=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),i=Symbol.for("react.context"),s=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.suspense_list"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),y=Symbol.for("react.offscreen"),h;h=Symbol.for("react.module.reference");function g(m){if(typeof m=="object"&&m!==null){var S=m.$$typeof;switch(S){case e:switch(m=m.type,m){case r:case a:case n:case d:case u:return m;default:switch(m=m&&m.$$typeof,m){case s:case i:case l:case p:case f:case o:return m;default:return S}}case t:return S}}}return be.ContextConsumer=i,be.ContextProvider=o,be.Element=e,be.ForwardRef=l,be.Fragment=r,be.Lazy=p,be.Memo=f,be.Portal=t,be.Profiler=a,be.StrictMode=n,be.Suspense=d,be.SuspenseList=u,be.isAsyncMode=function(){return!1},be.isConcurrentMode=function(){return!1},be.isContextConsumer=function(m){return g(m)===i},be.isContextProvider=function(m){return g(m)===o},be.isElement=function(m){return typeof m=="object"&&m!==null&&m.$$typeof===e},be.isForwardRef=function(m){return g(m)===l},be.isFragment=function(m){return g(m)===r},be.isLazy=function(m){return g(m)===p},be.isMemo=function(m){return g(m)===f},be.isPortal=function(m){return g(m)===t},be.isProfiler=function(m){return g(m)===a},be.isStrictMode=function(m){return g(m)===n},be.isSuspense=function(m){return g(m)===d},be.isSuspenseList=function(m){return g(m)===u},be.isValidElementType=function(m){return typeof m=="string"||typeof m=="function"||m===r||m===a||m===n||m===d||m===u||m===y||typeof m=="object"&&m!==null&&(m.$$typeof===p||m.$$typeof===f||m.$$typeof===o||m.$$typeof===i||m.$$typeof===l||m.$$typeof===h||m.getModuleId!==void 0)},be.typeOf=g,be}var Lo;function Ng(){return Lo||(Lo=1,zn.exports=Pg()),zn.exports}var zg=Ng();B`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;B`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;B`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;B`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;B`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;B`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;B`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;B`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;B`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;B`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;B`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;B`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;B`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const Tg=B`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Mg=B`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ag=B`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,_g=B`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Bg=B`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,$a=B`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Vg=B`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Lg=B`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Hg=B`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Dg=B`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Wg=B`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,qg=B`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Gg=B`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function kg({duration:e=1e3,delay:t=0,timingFunction:r="ease",keyframes:n=$a,iterationCount:a=1}){return ms`
    animation-duration: ${e}ms;
    animation-timing-function: ${r};
    animation-delay: ${t}ms;
    animation-name: ${n};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${a};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function Ug(e){return e==null}function Xg(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function hs(e,t){return r=>r?e():t()}function er(e){return hs(e,()=>null)}function ca(e){return er(()=>({opacity:0}))(e)}const en=e=>{const{cascade:t=!1,damping:r=.5,delay:n=0,duration:a=1e3,fraction:o=0,keyframes:i=$a,triggerOnce:s=!1,className:l,style:d,childClassName:u,childStyle:f,children:p,onVisibilityChange:y}=e,h=c.useMemo(()=>kg({keyframes:i,duration:a}),[a,i]);return Ug(p)?null:Xg(p)?Pe(Kg,{...e,animationStyles:h,children:String(p)}):zg.isFragment(p)?Pe(vs,{...e,animationStyles:h}):Pe(xg,{children:c.Children.map(p,(g,m)=>{if(!c.isValidElement(g))return null;const S=n+(t?m*a*r:0);switch(g.type){case"ol":case"ul":return Pe(Nn,{children:({cx:v})=>Pe(g.type,{...g.props,className:v(l,g.props.className),style:Object.assign({},d,g.props.style),children:Pe(en,{...e,children:g.props.children})})});case"li":return Pe(Bo,{threshold:o,triggerOnce:s,onChange:y,children:({inView:v,ref:C})=>Pe(Nn,{children:({cx:R})=>Pe(g.type,{...g.props,ref:C,className:R(u,g.props.className),css:er(()=>h)(v),style:Object.assign({},f,g.props.style,ca(!v),{animationDelay:S+"ms"})})})});default:return Pe(Bo,{threshold:o,triggerOnce:s,onChange:y,children:({inView:v,ref:C})=>Pe("div",{ref:C,className:l,css:er(()=>h)(v),style:Object.assign({},d,ca(!v),{animationDelay:S+"ms"}),children:Pe(Nn,{children:({cx:R})=>Pe(g.type,{...g.props,className:R(u,g.props.className),style:Object.assign({},f,g.props.style)})})})})}})})},Yg={display:"inline-block",whiteSpace:"pre"},Kg=e=>{const{animationStyles:t,cascade:r=!1,damping:n=.5,delay:a=0,duration:o=1e3,fraction:i=0,triggerOnce:s=!1,className:l,style:d,children:u,onVisibilityChange:f}=e,{ref:p,inView:y}=ps({triggerOnce:s,threshold:i,onChange:f});return hs(()=>Pe("div",{ref:p,className:l,style:Object.assign({},d,Yg),children:u.split("").map((h,g)=>Pe("span",{css:er(()=>t)(y),style:{animationDelay:a+g*o*n+"ms"},children:h},g))}),()=>Pe(vs,{...e,children:u}))(r)},vs=e=>{const{animationStyles:t,fraction:r=0,triggerOnce:n=!1,className:a,style:o,children:i,onVisibilityChange:s}=e,{ref:l,inView:d}=ps({triggerOnce:n,threshold:r,onChange:s});return Pe("div",{ref:l,className:a,css:er(()=>t)(d),style:Object.assign({},o,ca(!d)),children:i})};B`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;B`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;B`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;B`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;B`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;B`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;B`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;B`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;B`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;B`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const Zg=B`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Jg=B`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Qg=B`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,ep=B`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,tp=B`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,rp=B`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,np=B`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,ap=B`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,op=B`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,ip=B`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,sp=B`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,lp=B`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,cp=B`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function up(e,t,r){switch(r){case"bottom-left":return t?Jg:Mg;case"bottom-right":return t?Qg:Ag;case"down":return e?t?tp:Bg:t?ep:_g;case"left":return e?t?np:Vg:t?rp:$a;case"right":return e?t?op:Hg:t?ap:Lg;case"top-left":return t?ip:Dg;case"top-right":return t?sp:Wg;case"up":return e?t?cp:Gg:t?lp:qg;default:return t?Zg:Tg}}const tn=e=>{const{big:t=!1,direction:r,reverse:n=!1,...a}=e,o=c.useMemo(()=>up(t,n,r),[t,r,n]);return Pe(en,{keyframes:o,...a})};B`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;B`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;B`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;B`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;B`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;B`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;B`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;B`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;B`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;B`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;B`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;B`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;B`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;B`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;B`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;B`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;B`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;B`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;B`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;const dp=B`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,fp=B`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,mp=B`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,gp=B`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,pp=B`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,hp=B`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,vp=B`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,bp=B`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;function yp(e,t){switch(t){case"down":return e?pp:dp;case"right":return e?vp:mp;case"up":return e?bp:gp;default:return e?hp:fp}}const Ir=e=>{const{direction:t,reverse:r=!1,...n}=e,a=c.useMemo(()=>yp(r,t),[t,r]);return Pe(en,{keyframes:a,...n})},xp=B`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,Cp=B`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Sp=B`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,wp=B`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,$p=B`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Ep=B`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,Op=B`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Rp=B`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,Ip=B`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,jp=B`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;function Fp(e,t){switch(t){case"down":return e?Op:Cp;case"left":return e?Rp:Sp;case"right":return e?Ip:wp;case"up":return e?jp:$p;default:return e?Ep:xp}}const Pp=e=>{const{direction:t,reverse:r=!1,...n}=e,a=c.useMemo(()=>Fp(r,t),[t,r]);return Pe(en,{keyframes:a,...n})},Np=Ds`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`,zp=K.section`
  min-height: 100vh;
  display: grid;
  align-items: center;
  background: radial-gradient(circle at top right, rgba(108, 99, 255, 0.18), transparent 50%);
  padding-top: 7rem;
  position: relative;
`,Tp=K.div`
  width: min(1160px, calc(100% - 3rem));
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 2rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Mp=K.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    animation: ${Np} 6s ease-in-out infinite;
  }
  &::before {
    width: 180px;
    height: 180px;
    background: rgba(0, 212, 170, 0.15);
    left: 5%;
    top: 20%;
  }
  &::after {
    width: 130px;
    height: 130px;
    background: rgba(108, 99, 255, 0.13);
    right: 8%;
    bottom: 18%;
  }
`;function Ap(){const{t:e}=pt();return $.jsxs(zp,{children:[$.jsx(Mp,{}),$.jsxs(Tp,{children:[$.jsx("div",{children:$.jsxs(tn,{direction:"up",triggerOnce:!0,duration:700,children:[$.jsx("h1",{children:e("hero.title")}),$.jsx("p",{children:e("hero.subtitle")}),$.jsxs("div",{style:{display:"flex",gap:"0.8rem",flexWrap:"wrap"},children:[$.jsx(Bt,{"aria-label":e("hero.primaryCta"),children:e("hero.primaryCta")}),$.jsx(Bt,{variant:"outline",icon:$.jsx(qm,{}),"aria-label":e("hero.secondaryCta"),children:e("hero.secondaryCta")})]})]})}),$.jsx(Ir,{direction:"right",triggerOnce:!0,duration:800,children:$.jsxs("svg",{viewBox:"0 0 420 320",width:"100%","aria-label":"Hero illustration",children:[$.jsx("rect",{x:"40",y:"40",width:"290",height:"220",rx:"28",fill:"#6C63FF",opacity:"0.12"}),$.jsx("circle",{cx:"312",cy:"84",r:"54",fill:"#00D4AA",opacity:"0.35"}),$.jsx("polygon",{points:"148,54 292,112 236,252 94,192",fill:"#6C63FF",opacity:"0.82"}),$.jsx("rect",{x:"118",y:"110",width:"160",height:"92",rx:"18",fill:"#FFFFFF"}),$.jsx("path",{d:"M138 157 H236",stroke:"#6C63FF",strokeWidth:"10",strokeLinecap:"round"}),$.jsx("path",{d:"M138 182 H208",stroke:"#00D4AA",strokeWidth:"10",strokeLinecap:"round"})]})})]})]})}const _p=K.section`
  padding: 5rem 0;
  background: ${({theme:e})=>e.colors.lightBg};
`,Bp=K.div`
  width: min(1160px, calc(100% - 3rem));
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Vp=K.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.9rem;
`,Lp=K.article`
  background: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.radius.md};
  padding: 1.1rem;
`;function Hp(){const{t:e}=pt(),t=e("about.stats",{returnObjects:!0});return $.jsx(_p,{id:"about",children:$.jsxs(Bp,{children:[$.jsx(Ir,{direction:"left",triggerOnce:!0,duration:700,children:$.jsxs("div",{children:[$.jsx("h2",{children:e("about.title")}),$.jsx("p",{children:e("about.description")})]})}),$.jsx(tn,{triggerOnce:!0,duration:800,children:$.jsx(Vp,{children:t.map(r=>$.jsxs(Lp,{children:[$.jsx("h3",{children:r.value}),$.jsx("p",{children:r.label})]},r.label))})})]})})}const Dp=K.section`
  padding: 5rem 0;
`,Wp=K.div`
  width: min(1160px, calc(100% - 3rem));
  margin: 0 auto;
`,qp=K.div`
  margin-top: 1.4rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Gp=K.article`
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.radius.md};
  padding: 1.1rem;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  &:hover {
    transform: translateY(-6px);
    box-shadow: ${({theme:e})=>e.shadows.md};
    border-color: ${({theme:e})=>e.colors.accent};
  }
`,kp=[l0,Af,d0,Km,Hm,r0];function Up(){const{t:e}=pt(),t=e("features.items",{returnObjects:!0});return $.jsx(Dp,{id:"features",children:$.jsxs(Wp,{children:[$.jsx("h2",{children:e("features.title")}),$.jsx(tn,{cascade:!0,damping:.12,triggerOnce:!0,duration:700,children:$.jsx(qp,{children:t.map((r,n)=>{const a=kp[n];return $.jsxs(Gp,{children:[$.jsx(a,{style:{fontSize:24,color:"#6C63FF"}}),$.jsx("h3",{children:r.title}),$.jsx("p",{children:r.description})]},r.title)})})})]})})}const Xp=K.section`
  padding: 5rem 0;
  background: ${({theme:e})=>e.colors.lightBg};
`,Yp=K.div`
  width: min(1160px, calc(100% - 3rem));
  margin: 0 auto;
`,Kp=K.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
  align-items: center;
  margin-top: 1.3rem;
  direction: ${({$reverse:e})=>e?"rtl":"ltr"};
  > * {
    direction: ltr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Zp=K.span`
  display: inline-grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${({theme:e})=>e.colors.secondary};
  color: ${({theme:e})=>e.colors.white};
  font-weight: 700;
`,Jp=({secondary:e})=>$.jsxs("svg",{viewBox:"0 0 360 220",width:"100%","aria-label":"Step illustration",children:[$.jsx("rect",{x:"26",y:"24",width:"292",height:"170",rx:"20",fill:e?"#00D4AA":"#6C63FF",opacity:"0.18"}),$.jsx("rect",{x:"72",y:"60",width:"210",height:"100",rx:"16",fill:"#FFFFFF"}),$.jsx("circle",{cx:"112",cy:"110",r:"18",fill:"#6C63FF",opacity:"0.8"}),$.jsx("path",{d:"M152 96 H246",stroke:"#00D4AA",strokeWidth:"10",strokeLinecap:"round"}),$.jsx("path",{d:"M152 122 H220",stroke:"#6C63FF",strokeWidth:"10",strokeLinecap:"round"})]});function Qp(){const{t:e}=pt(),t=e("howItWorks.steps",{returnObjects:!0});return $.jsx(Xp,{id:"howItWorks",children:$.jsxs(Yp,{children:[$.jsx("h2",{children:e("howItWorks.title")}),t.map((r,n)=>$.jsxs(Kp,{$reverse:n%2===0,children:[$.jsx(Ir,{direction:n%2===0?"right":"left",triggerOnce:!0,duration:800,children:$.jsx(Jp,{secondary:n===1})}),$.jsx(Ir,{direction:n%2===0?"left":"right",triggerOnce:!0,duration:800,children:$.jsxs("div",{children:[$.jsx(Zp,{children:n+1}),$.jsx("h3",{children:r.title}),$.jsx("p",{children:r.description}),$.jsx("a",{href:"#contact",children:r.link})]})})]},r.title))]})})}const eh=K.section`
  padding: 5rem 0;
`,th=K.div`
  width: min(1160px, calc(100% - 3rem));
  margin: 0 auto;
`,rh=K.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`,nh=K.article`
  background: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.colors.border};
  padding: 1.2rem;
  box-shadow: ${({$popular:e,theme:t})=>e?t.shadows.lg:"none"};
  transform: ${({$popular:e})=>e?"translateY(-10px)":"none"};
  position: relative;
`,ah=K.span`
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(90deg, #6c63ff, #00d4aa);
  color: #fff;
  font-size: 0.8rem;
  padding: 0.28rem 0.7rem;
  border-radius: 999px;
`;function oh(){const{t:e}=pt(),t=e("pricing.plans",{returnObjects:!0});return $.jsx(eh,{id:"pricing",children:$.jsxs(th,{children:[$.jsx("h2",{children:e("pricing.title")}),$.jsx(Pp,{cascade:!0,damping:.12,triggerOnce:!0,duration:750,children:$.jsx(rh,{children:t.map(r=>$.jsxs(nh,{$popular:!!r.popular,children:[r.popular?$.jsx(ah,{children:r.popular}):null,$.jsx("h3",{children:r.name}),$.jsxs("h4",{children:[r.price,$.jsx("small",{children:r.period})]}),$.jsx("ul",{children:r.features.map(n=>$.jsxs("li",{children:[$.jsx(ai,{style:{color:"#00D4AA",marginRight:8}}),n]},n))}),$.jsx(Bt,{style:{width:"100%"},"aria-label":r.cta,children:r.cta})]},r.name))})})]})})}const ih=K.section`
  padding: 5rem 0;
  background: ${({theme:e})=>e.colors.lightBg};
`,sh=K.div`
  width: min(1160px, calc(100% - 3rem));
  margin: 0 auto;
`,lh=K.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  @media (max-width: 768px) {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
  }
`,ch=K.article`
  background: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.radius.md};
  padding: 1.1rem;
  @media (max-width: 768px) {
    min-width: 85%;
    scroll-snap-align: start;
  }
`,uh=K.span`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: inline-grid;
  place-items: center;
  color: #fff;
  background: linear-gradient(120deg, #6c63ff, #00d4aa);
  font-weight: 700;
`;function dh(e){return e.split(" ").slice(0,2).map(t=>t.charAt(0)).join("").toUpperCase()}function fh(){const{t:e}=pt(),t=e("testimonials.items",{returnObjects:!0});return $.jsx(ih,{children:$.jsxs(sh,{children:[$.jsx("h2",{children:e("testimonials.title")}),$.jsx(tn,{cascade:!0,damping:.12,triggerOnce:!0,duration:700,children:$.jsx(lh,{children:t.map(r=>$.jsxs(ch,{children:[$.jsxs("p",{children:['"',r.quote,'"']}),$.jsx(uh,{children:dh(r.name)}),$.jsx("h4",{children:r.name}),$.jsx("small",{children:r.role})]},r.name))})})]})})}const mh=K.section`
  padding: 5rem 0;
`,gh=K.div`
  width: min(1160px, calc(100% - 3rem));
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,ph=K.form`
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.radius.md};
  padding: 1.2rem;
  display: grid;
  gap: 0.8rem;
`,Ho=K.span`
  color: #cc2f2f;
  font-size: 0.85rem;
`,hh={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1};function vh(){const{t:e}=pt(),[t,r]=c.useState({}),[n,a]=c.useState("idle"),o=c.useRef(null),i=async s=>{s.preventDefault();const l=new FormData(s.currentTarget),d=String(l.get("name")??"").trim(),u=String(l.get("email")??"").trim(),f=String(l.get("company")??"").trim(),p=String(l.get("message")??"").trim(),y={};if(d||(y.name=e("contact.validation.nameRequired")),u?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u)||(y.email=e("contact.validation.emailInvalid")):y.email=e("contact.validation.emailRequired"),r(y),!(Object.keys(y).length>0))try{const h=hh?.REACT_APP_CONTACT_ENDPOINT;if(!h)throw new Error("missing-endpoint");if(!(await fetch(h,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:d,email:u,company:f,message:p})})).ok)throw new Error("bad-response");a("ok"),o.current?.reset()}catch{a("fail")}};return $.jsx(mh,{id:"contact",children:$.jsxs(gh,{children:[$.jsxs("div",{children:[$.jsx("h2",{children:e("contact.title")}),$.jsx("p",{children:e("contact.subtitle")}),$.jsx("p",{children:e("contact.email")}),$.jsx("p",{children:e("contact.location")})]}),$.jsxs(ph,{ref:o,onSubmit:s=>{i(s)},noValidate:!0,"aria-label":"Contact form",children:[$.jsx("label",{htmlFor:"name",children:e("contact.form.name")}),$.jsx(ct,{id:"name",name:"name","aria-label":e("contact.form.name")}),t.name?$.jsx(Ho,{children:t.name}):null,$.jsx("label",{htmlFor:"email",children:e("contact.form.email")}),$.jsx(ct,{id:"email",name:"email","aria-label":e("contact.form.email")}),t.email?$.jsx(Ho,{children:t.email}):null,$.jsx("label",{htmlFor:"company",children:e("contact.form.company")}),$.jsx(ct,{id:"company",name:"company","aria-label":e("contact.form.company")}),$.jsx("label",{htmlFor:"message",children:e("contact.form.message")}),$.jsx(ct.TextArea,{id:"message",name:"message",rows:5,"aria-label":e("contact.form.message")}),$.jsx(Bt,{htmlType:"submit","aria-label":e("contact.form.submit"),children:e("contact.form.submit")}),n==="ok"?$.jsx(Hn,{message:e("contact.form.success"),type:"success",showIcon:!0}):null,n==="fail"?$.jsx(Hn,{message:e("contact.form.error"),type:"error",showIcon:!0}):null]})]})})}const bh=K.main`
  overflow: hidden;
`;function xh(){return $.jsxs($.Fragment,{children:[$.jsx(P0,{}),$.jsx(O0,{}),$.jsxs(bh,{children:[$.jsx(Ap,{}),$.jsx(Hp,{}),$.jsx(Up,{}),$.jsx(Qp,{}),$.jsx(oh,{}),$.jsx(fh,{}),$.jsx(vh,{})]}),$.jsx(F0,{})]})}export{xh as default};
