(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{303:function(t,n,o){"use strict";o.r(n);o(64);var e={layout:"admin",middleware:["check-auth","auth"],methods:{onSubmitted:function(t){var n=this;this.$store.dispatch("addPost",t).then((function(t){var o;null!=t&&null!==(o=t.response)&&void 0!==o&&o.status?n.$toastr.e("Could not create post"):(n.$toastr.s("Post created"),n.$router.push("/admin"))}))}}},r=o(8),component=Object(r.a)(e,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"admin-new-post-page"},[o("div",{staticClass:"row"},[o("h1",{staticClass:"u-margin-top-big"},[t._v("Create new Post")]),t._v(" "),o("section",{staticClass:"new-post-form"},[o("AdminPostForm",{on:{submit:t.onSubmitted}})],1)])])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{AdminPostForm:o(127).default})}}]);