(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{206:function(e,t,v){"use strict";v.r(t);var a=v(0),r=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("div",{staticClass:"content"},[v("h1",{attrs:{id:"vue-无痕刷新"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue-无痕刷新","aria-hidden":"true"}},[e._v("#")]),e._v(" vue 无痕刷新")]),e._v(" "),v("p",[e._v("最近遇到一个需求，需要刷新当前页面来更新数据，网上找了很多方法，在这里做个总结。")]),e._v(" "),v("p",[e._v("这里主要记录三种方法，分别是：强制刷新、伪造刷新、无痕刷新。")]),e._v(" "),v("h2",{attrs:{id:"强制刷新"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#强制刷新","aria-hidden":"true"}},[e._v("#")]),e._v(" 强制刷新")]),e._v(" "),v("p",[v("code",[e._v("window.location.reload()")]),e._v("，原生 js 提供的方法；")]),e._v(" "),v("p",[v("code",[e._v("this.$router.go(0)")]),e._v("，vue 路由里面的一种方法；")]),e._v(" "),v("p",[e._v("这两种方法都可以达到页面刷新的目的，简单粗暴，但是用户体验不好，相当于按 F5 刷新页面，页面的重新载入，会有短暂的白屏。")]),e._v(" "),v("h2",{attrs:{id:"伪造刷新"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#伪造刷新","aria-hidden":"true"}},[e._v("#")]),e._v(" 伪造刷新")]),e._v(" "),v("p",[e._v("通过路由跳转的方法刷新，具体思路是点击按钮跳转一个空白页，然后再马上跳回来")]),e._v(" "),v("div",{staticClass:"language-vue extra-class"},[v("pre",{pre:!0,attrs:{class:"language-vue"}},[v("code",[e._v("// index.vue 首页\nthis.$router.replace('/empty')\n\n// empty.vue 空白页\ncreated() {\n    this.$router.replace('/')\n}\n")])])]),v("p",[e._v("当点击刷新按钮时地址栏会有快速的地址切换过程")]),e._v(" "),v("h2",{attrs:{id:"无痕刷新"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#无痕刷新","aria-hidden":"true"}},[e._v("#")]),e._v(" 无痕刷新")]),e._v(" "),v("p",[e._v("先在全局组件注册一个方法，用该方法控制 "),v("code",[e._v("router-view")]),e._v(" 的显示与否，然后在子组件调用；")]),e._v(" "),v("p",[e._v("用 "),v("code",[e._v("v-if")]),e._v(" 控制 "),v("code",[e._v("<router-view></router-view>")]),e._v(" 的显示；")]),e._v(" "),v("p",[e._v("provide：全局注册方法；")]),e._v(" "),v("p",[e._v("inject：子组件引用 provide 注册的方法；")]),e._v(" "),v("p",[v("strong",[e._v("App.vue：")])]),e._v(" "),v("p",[v("img",{attrs:{src:"http://cjm0.oss-cn-beijing.aliyuncs.com/18-11-16/85048642.jpg",alt:""}})]),e._v(" "),v("p",[v("strong",[e._v("当前组件：")])]),e._v(" "),v("p",[v("img",{attrs:{src:"http://cjm0.oss-cn-beijing.aliyuncs.com/18-11-16/65616354.jpg",alt:""}})]),e._v(" "),v("p",[e._v("当点击按钮时所有页面重新渲染，体验最好")])])}],!1,null,null,null);r.options.__file="vue_reload.md";t.default=r.exports}}]);