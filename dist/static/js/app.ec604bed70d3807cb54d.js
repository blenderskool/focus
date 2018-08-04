webpackJsonp([1],[,,function(t,e,n){"use strict";function a(t){n(28)}var s=n(10),o=n(29),i=n(0),c=a,l=i(s.a,o.a,!1,c,"data-v-06da2f4c",null);e.a=l.exports},,,,,,,function(t,e,n){"use strict";var a=n(2),s=n(11),o=n(33),i=n(39);e.a={name:"App",data:function(){return{collName:"",taskName:""}},components:{tasks:o.a,collections:i.a,acrylic:a.a,tips:s.a},computed:{collections:function(){return this.$store.state.collections},activeCollection:function(){return this.$store.state.activeCollection},activeCollData:function(){return this.$store.getters.activeCollection}},created:function(){var t=this;if(localStorage.getItem("app.akash.focus")){var e=JSON.parse(localStorage.getItem("app.akash.focus"));e.todo&&(localStorage.setItem("app.akash.focus",""),e=[]),this.$store.commit("setStorage",e)}window.addEventListener("popstate",function(e){t.$store.commit("loadCollection",e.state?e.state.id:e.state)}),document.getElementsByTagName("beacon-app")[0].callMessage="Other work"},methods:{createTask:function(){this.taskName&&(this.$store.commit("addTask",this.taskName),this.taskName="")},createCollection:function(){this.collName&&(this.$store.commit("addCollection",this.collName),this.collName="")}}}},function(t,e,n){"use strict";e.a={name:"Acrylic"}},function(t,e,n){"use strict";function a(t){n(30),n(31)}var s=n(12),o=n(32),i=n(0),c=a,l=i(s.a,o.a,!1,c,"data-v-51ad85bb",null);e.a=l.exports},function(t,e,n){"use strict";e.a={name:"Tips",data:function(){return{tip:'Start by entering some text and pressing <span class="border">Enter</span>',updateTip:!1}},created:function(){var t=this,e=["Create collections to organize your tasks","All the tasks are saved for future","Stay focused and work towards your goal","Remove your old tasks using the trash icon","By completing a task you are one step ahead towards your goal",'Start by entering some text and pressing <span class="border">Enter</span>'];setInterval(function(){var n=e.indexOf(t.tip);t.tip=e[n==e.length-1?0:n+1],t.updateTip=!t.updateTip},7e3)}}},function(t,e,n){"use strict";var a=n(2),s=n(11),o=n(35);e.a={name:"TasksList",components:{task:o.a,tips:s.a,acrylic:a.a},computed:{todo:function(){return this.$store.getters.tasks()},completed:function(){return this.$store.getters.tasks(!0)}}}},function(t,e,n){"use strict";e.a={name:"Task",props:{task:Object},methods:{removeTask:function(){this.$store.commit("removeTask",this.task.id)},toggleTask:function(){this.$store.commit("toggleTask",this.task.id)}}}},function(t,e,n){"use strict";var a=n(41);e.a={name:"Collections",components:{card:a.a},computed:{collections:function(){return this.$store.state.collections}},methods:{openCollection:function(t){window.history.pushState({id:t},null,"./?collection="+t),this.$store.commit("loadCollection",t)},getMeter:function(t){var e=t.filter(function(t){return t.completed}).length;if(0!==t.length)return e/t.length*100}}}},function(t,e,n){"use strict";var a=n(2);e.a={name:"Card",props:["icon","title","subtitle","color","meter"],components:{acrylic:a.a}}},,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(8),s=n(25),o=n(46);a.a.config.productionTip=!1,new a.a({el:"#app",store:o.a,template:"<App/>",components:{App:s.a}})},,,,function(t,e,n){"use strict";function a(t){n(26)}var s=n(9),o=n(45),i=n(0),c=a,l=i(s.a,o.a,!1,c,null,null);e.a=l.exports},function(t,e){},,function(t,e){},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"acrylic-container"},[n("div",{staticClass:"child"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"acrylic"})])},s=[],o={render:a,staticRenderFns:s};e.a=o},function(t,e){},function(t,e){},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("span",{key:t.updateTip,staticClass:"help",domProps:{innerHTML:t._s(t.tip)}})])},s=[],o={render:a,staticRenderFns:s};e.a=o},function(t,e,n){"use strict";function a(t){n(34)}var s=n(13),o=n(38),i=n(0),c=a,l=i(s.a,o.a,!1,c,"data-v-5b60e18e",null);e.a=l.exports},function(t,e){},function(t,e,n){"use strict";function a(t){n(36)}var s=n(14),o=n(37),i=n(0),c=a,l=i(s.a,o.a,!1,c,"data-v-52e0c10f",null);e.a=l.exports},function(t,e){},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"item",class:{completed:t.task.completed}},[n("button",{staticClass:"primary",on:{click:t.toggleTask}},[t.task.completed?n("ion-icon",{attrs:{name:"ios-checkmark"}}):t._e()],1),t._v(" "),n("span",{staticClass:"name"},[t._v(t._s(t.task.title))]),t._v(" "),n("div",{staticClass:"buttons"},[n("button",{staticClass:"danger",on:{click:t.removeTask}},[n("ion-icon",{attrs:{name:"trash"}})],1)])])},s=[],o={render:a,staticRenderFns:s};e.a=o},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tasks"},[n("div",{staticClass:"wrapper"},[t.todo.length?n("acrylic",{staticClass:"list"},[n("ul",t._l(t.todo,function(t){return n("task",{key:t.id,attrs:{task:t}})}))]):!t.todo.length&&t.completed.length?n("span",[t._v("\n      Nothing left todo!\n    ")]):t._e()],1),t._v(" "),t.completed.length?n("acrylic",{staticClass:"list"},[n("ul",t._l(t.completed,function(t){return n("task",{key:t.id,attrs:{task:t}})}))]):!t.completed.length&&t.todo.length?n("span",[t._v("\n    You haven't completed anything!\n  ")]):t._e(),t._v(" "),t.todo.length||t.completed.length?t._e():n("tips")],1)},s=[],o={render:a,staticRenderFns:s};e.a=o},function(t,e,n){"use strict";function a(t){n(40)}var s=n(15),o=n(44),i=n(0),c=a,l=i(s.a,o.a,!1,c,"data-v-42fd3801",null);e.a=l.exports},function(t,e){},function(t,e,n){"use strict";function a(t){n(42)}var s=n(16),o=n(43),i=n(0),c=a,l=i(s.a,o.a,!1,c,null,null);e.a=l.exports},function(t,e){},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("acrylic",{staticClass:"card"},[t.meter?n("span",{staticClass:"meter",style:{width:t.meter+"%"}}):t._e(),t._v(" "),t.icon?n("i",{class:"icon "+t.icon,style:{color:t.color}}):t._e(),t._v(" "),n("div",{staticClass:"info"},[n("div",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"subtitle"},[t._v(t._s(t.subtitle))])])])},s=[],o={render:a,staticRenderFns:s};e.a=o},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"collections"},t._l(t.collections,function(e,a){return n("card",{key:a,attrs:{title:e.title,subtitle:e.tasks.length+" tasks",meter:t.getMeter(e.tasks)},nativeOn:{click:function(e){t.openCollection(a)}}})}))},s=[],o={render:a,staticRenderFns:s};e.a=o},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",{staticClass:"title"},[t._v("Focus")]),t._v(" "),t._m(0),t._v(" "),n("br"),t._v(" "),n("acrylic",{staticClass:"input-wrapper"},[null!==t.activeCollection?n("input",{directives:[{name:"model",rawName:"v-model",value:t.taskName,expression:"taskName"}],attrs:{type:"text",maxlength:"45",placeholder:"Enter a task in "+t.activeCollData.title.toLowerCase()},domProps:{value:t.taskName},on:{keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.createTask(e)},input:function(e){e.target.composing||(t.taskName=e.target.value)}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:t.collName,expression:"collName"}],attrs:{type:"text",maxlength:"20",placeholder:"Enter a collection name"},domProps:{value:t.collName},on:{keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.createCollection(e)},input:function(e){e.target.composing||(t.collName=e.target.value)}}})]),t._v(" "),n("br"),t._v(" "),null!==t.activeCollection?n("div",[n("tasks")],1):null===t.activeCollection?n("collections"):t._e(),t._v(" "),t.collections.length?t._e():n("tips")],1)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h4",{staticClass:"subtitle"},[t._v("Developed by "),n("a",{attrs:{href:"https://github.com/blenderskool",target:"_blank"}},[t._v("Akash Hamirwasia")])])}],o={render:a,staticRenderFns:s};e.a=o},function(t,e,n){"use strict";function a(t,e){return t.collections[t.activeCollection].tasks.filter(function(t){return t.id===e})}function s(t){localStorage.setItem("app.akash.focus",l()(t))}var o=n(47),i=n.n(o),c=n(76),l=n.n(c),r=n(8),u=n(78);r.a.use(u.a),e.a=new u.a.Store({state:{collections:[],activeCollection:null},getters:{activeCollection:function(t){var e=i()({},t.collections[t.activeCollection]);return e.tasks=void 0,e},tasks:function(t){return function(e){return t.collections[t.activeCollection].tasks.filter(function(t){return e?t.completed:!t.completed})}}},mutations:{setStorage:function(t,e){t.collections=e},loadCollection:function(t,e){t.activeCollection=e},addCollection:function(t,e){t.collections.push({title:e,tasks:[]}),s(t.collections)},addTask:function(t,e){t.collections[t.activeCollection].tasks.unshift({title:e,completed:!1,id:Math.random().toString(36).substring(7)}),s(t.collections)},toggleTask:function(t,e){var n=a(t,e);n.length&&(n[0].completed=!n[0].completed,s(t.collections))},removeTask:function(t,e){var n=t.collections[t.activeCollection].tasks,o=a(t,e);o.length&&(n.splice(n.indexOf(o[0]),1),s(t.collections))}}})}],[21]);
//# sourceMappingURL=app.ec604bed70d3807cb54d.js.map