(window.webpackJsonp=window.webpackJsonp||[]).push([[9,2],{298:function(t,e,n){"use strict";n.r(e);var l=n(8),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("div",{staticClass:"header__text-box"},[t._m(0),t._v(" "),n("nuxt-link",{staticClass:"btn btn--default",attrs:{to:"/posts"}},[t._v("All Posts")])],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"heading-primary"},[n("span",{staticClass:"heading-primary--main"},[t._v("Get the best tech news")]),t._v(" "),n("span",{staticClass:"heading-primary--sub"},[t._v("here on Swatch")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(298).default})},307:function(t,e,n){"use strict";n.r(e);var l={components:{Header:n(298).default},data:function(){return{}},computed:{loadedPosts:function(){return this.$store.getters.loadedPosts}}},r=n(8),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-page"},[n("Header"),t._v(" "),n("main",[n("div",{staticClass:"row"},[n("PostsList",{attrs:{posts:t.loadedPosts}})],1)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(298).default,PostsList:n(126).default})}}]);