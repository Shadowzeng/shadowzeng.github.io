(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{JuMs:function(t,n,e){"use strict";e.r(n),e.d(n,"MindmapViewerModule",function(){return u}),e.d(n,"MindmapViewerComponent",function(){return s});var o=e("ofXK"),r=e("tyNb"),i=e("fXoL"),c=e("tk/3");let s=(()=>{class t{constructor(t){this._http=t}ngOnInit(){const t=mindap.create("editor-map",{rootNode:{name:"Root"}});this._http.get("./map.json").subscribe(n=>{t.new(n)})}}return t.\u0275fac=function(n){return new(n||t)(i.Jb(c.a))},t.\u0275cmp=i.Db({type:t,selectors:[["app-mindmap-viewer"]],decls:1,vars:0,consts:[["id","editor-map",1,"map-root"]],template:function(t,n){1&t&&i.Kb(0,"div",0)},styles:["[_nghost-%COMP%]{display:block;height:calc(100% - 36px)}.map-root[_ngcontent-%COMP%]{height:100%}"]}),t})();const p=[{path:"",component:s,pathMatch:"full"}];let a=(()=>{class t{}return t.\u0275mod=i.Hb({type:t}),t.\u0275inj=i.Gb({factory:function(n){return new(n||t)},imports:[[r.b.forChild(p)],r.b]}),t})(),u=(()=>{class t{}return t.\u0275mod=i.Hb({type:t}),t.\u0275inj=i.Gb({factory:function(n){return new(n||t)},imports:[[o.b,a]]}),t})()}}]);