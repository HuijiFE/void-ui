(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["examples-layout_popover"],{"0423":function(t,o,e){"use strict";e.r(o);var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"e-popover-demo"},[e("vd-flexbox",{attrs:{gap:"small",align:"stretch"}},[e("vd-flexbox",{attrs:{gap:"small",direction:"column",align:"end"}},[e("vd-flexbox",{attrs:{staticClass:"e-popover-demo_placeholder"}},[e("vd-button",{attrs:{skin:"flat"}})],1),t._l(t.aligns,function(o){return e("vd-flexbox",{key:o},[e("vd-popover",{attrs:{title:"Title",position:"left",align:o}},[e("vd-button",{attrs:{slot:"trigger",skin:"silk"},slot:"trigger"},[t._v("\n            "+t._s(o)+"\n          ")]),e("div",[t._v(t._s('position="left" align="'+o+'"'))]),e("div",[t._v("Content for popover.")]),e("div",[t._v("Other content for popover.")])],1)],1)}),e("vd-flexbox",{attrs:{staticClass:"e-popover-demo_placeholder"}},[e("vd-button",{attrs:{skin:"flat"}})],1)],2),e("vd-flexbox",{attrs:{flex:"none",direction:"column",justify:"space-between"}},[e("vd-flexbox",{attrs:{flex:"none",gap:"small",justify:"center"}},t._l(t.aligns,function(o){return e("vd-flexbox",{key:o,attrs:{flex:"none"}},[e("vd-popover",{attrs:{title:"Title",position:"top",align:o}},[e("vd-button",{attrs:{slot:"trigger",skin:"silk"},slot:"trigger"},[t._v("\n              "+t._s(o)+"\n            ")]),e("div",[t._v(t._s('position="top" align="'+o+'"'))]),e("div",[t._v("Content for popover.")]),e("div",[t._v("Other content for popover.")])],1)],1)}),1),e("vd-flexbox",{attrs:{flex:"none",gap:"small",justify:"center"}},t._l(t.aligns,function(o){return e("vd-flexbox",{key:o,attrs:{flex:"none"}},[e("vd-popover",{attrs:{title:"Title",position:"bottom",align:o}},[e("vd-button",{attrs:{slot:"trigger",skin:"silk"},slot:"trigger"},[t._v("\n              "+t._s(o)+"\n            ")]),e("div",[t._v(t._s('position="bottom" align="'+o+'"'))]),e("div",[t._v("Content for popover.")]),e("div",[t._v("Other content for popover.")])],1)],1)}),1)],1),e("vd-flexbox",{attrs:{gap:"small",direction:"column",align:"start"}},[e("vd-flexbox",{attrs:{staticClass:"e-popover-demo_placeholder"}},[e("vd-button",{attrs:{skin:"flat"}})],1),t._l(t.aligns,function(o){return e("vd-flexbox",{key:o},[e("vd-popover",{attrs:{title:"Title",position:"right",align:o}},[e("vd-button",{attrs:{slot:"trigger",skin:"silk"},slot:"trigger"},[t._v("\n            "+t._s(o)+"\n          ")]),e("div",[t._v(t._s('position="right" align="'+o+'"'))]),e("div",[t._v("Content for popover.")]),e("div",[t._v("Other content for popover.")])],1)],1)}),e("vd-flexbox",{attrs:{staticClass:"e-popover-demo_placeholder"}},[e("vd-button",{attrs:{skin:"flat"}})],1)],2)],1)],1)},r=[],i={data:function(){return{aligns:["start","center","end"]}}},s=i,l=e("2be6"),a=Object(l["a"])(s,n,r,!1,null,null,null);o["default"]=a.exports},"2be6":function(t,o,e){"use strict";function n(t,o,e,n,r,i,s,l){var a,v="function"===typeof t?t.options:t;if(o&&(v.render=o,v.staticRenderFns=e,v._compiled=!0),n&&(v.functional=!0),i&&(v._scopeId="data-v-"+i),s?(a=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},v._ssrRegister=a):r&&(a=l?function(){r.call(this,this.$root.$options.shadowRoot)}:r),a)if(v.functional){v._injectStyles=a;var p=v.render;v.render=function(t,o){return a.call(o),p(t,o)}}else{var d=v.beforeCreate;v.beforeCreate=d?[].concat(d,a):[a]}return{exports:t,options:v}}e.d(o,"a",function(){return n})},"9a2a":function(t,o,e){"use strict";e.r(o);var n=e("87bb"),r=e("b52d"),i=e("fd71"),s=e("ced0"),l=e("15ac"),a=e("0f9e"),v=e("9869"),p=e("fc36"),d=["start","center","end"],f=function(t){function o(){return Object(n["a"])(this,o),Object(i["a"])(this,Object(s["a"])(o).apply(this,arguments))}return Object(l["a"])(o,t),Object(r["a"])(o,[{key:"render",value:function(t){return t("div",{staticClass:"e-popover-demo"},[t("vd-flexbox",{attrs:{gap:"small",align:"stretch"}},[t("vd-flexbox",{attrs:{gap:"small",direction:"column",align:"end"}},[t("vd-flexbox",{staticClass:"e-popover-demo_placeholder"},[t("vd-button",{attrs:{skin:"flat"}})]),d.map(function(o){return t("vd-flexbox",[t("vd-popover",{attrs:{title:"Title",position:"left",align:o}},[t("vd-button",{slot:"trigger",attrs:{skin:"silk"}},[o]),t("div",['position="left" align="'.concat(o,'"')]),t("div",["Content for popover."]),t("div",["Other content for popover."])])])}),t("vd-flexbox",{staticClass:"e-popover-demo_placeholder"},[t("vd-button",{attrs:{skin:"flat"}})])]),t("vd-flexbox",{attrs:{flex:"none",direction:"column",justify:"space-between"}},[t("vd-flexbox",{attrs:{flex:"none",gap:"small",justify:"center"}},[d.map(function(o){return t("vd-flexbox",{attrs:{flex:"none"}},[t("vd-popover",{attrs:{title:"Title",position:"top",align:o}},[t("vd-button",{slot:"trigger",attrs:{skin:"silk"}},[o]),t("div",['position="top" align="'.concat(o,'"')]),t("div",["Content for popover."]),t("div",["Other content for popover."])])])})]),t("vd-flexbox",{attrs:{flex:"none",gap:"small",justify:"center"}},[d.map(function(o){return t("vd-flexbox",{attrs:{flex:"none"}},[t("vd-popover",{attrs:{title:"Title",position:"bottom",align:o}},[t("vd-button",{slot:"trigger",attrs:{skin:"silk"}},[o]),t("div",['position="bottom" align="'.concat(o,'"')]),t("div",["Content for popover."]),t("div",["Other content for popover."])])])})])]),t("vd-flexbox",{attrs:{gap:"small",direction:"column",algin:"start"}},[t("vd-flexbox",{staticClass:"e-popover-demo_placeholder"},[t("vd-button",{attrs:{skin:"flat"}})]),d.map(function(o){return t("vd-flexbox",[t("vd-popover",{attrs:{title:"Title",position:"right",align:o}},[t("vd-button",{slot:"trigger",attrs:{skin:"silk"}},[o]),t("div",['position="right" align="'.concat(o,'"')]),t("div",["Content for popover."]),t("div",["Other content for popover."])])])}),t("vd-flexbox",{staticClass:"e-popover-demo_placeholder"},[t("vd-button",{attrs:{skin:"flat"}})])])])])}}]),o}(v["default"]);f=a["a"]([p["a"]],f),o["default"]=f}}]);
//# sourceMappingURL=examples-layout_popover.bd9460d9f275dff9c199ee3fe38346b1b940831947786dfdea32d5bee758e2982a5ba6bc328193dce42a9c060f1937209ad473556ddbd565b91a9653f6d5e55d.js.map