webpackJsonp([1],[,,function(t,e,o){"use strict";var a=o(12),s=o.n(a),n=o(15);e.a={name:"App",data:function(){return{todo:[],complete:[],tip:'Start by entering a text and pressing <span class="border">Enter</span>',updateTip:!1}},components:{todo:n.a},created:function(){var t=this,e=["All the tasks are saved for future","Stay focused and work towards your goal","Remove your old tasks using the trash icon","By completing a task you are one step ahead towards your goal",'Start by entering some text and pressing <span class="border">Enter</span>'];if(localStorage.getItem("app.akash.focus")){var o=JSON.parse(localStorage.getItem("app.akash.focus"));this.todo=o.todo,this.complete=o.complete}setInterval(function(){if(!t.todo.length&&!t.complete.length){var o=e.indexOf(t.tip);t.tip=e[o==e.length-1?0:o+1],t.updateTip=!t.updateTip}},7e3)},methods:{addNewItem:function(t){this.todo.unshift(t.target.value),t.target.value="",this.updateLocalStorage()},removeItem:function(t,e){"todo"===e?this.todo.splice(this.todo.indexOf(t),1):this.complete.splice(this.complete.indexOf(t),1),this.updateLocalStorage()},completeItem:function(t,e){"todo"===e?(this.removeItem(t,"todo"),this.complete.unshift(t)):(this.removeItem(t,"complete"),this.todo.unshift(t)),this.updateLocalStorage()},updateLocalStorage:function(){localStorage.setItem("app.akash.focus",s()({todo:this.todo,complete:this.complete}))}}}},function(t,e,o){"use strict";e.a={name:"todo",props:["title","state"],methods:{deleteItem:function(t,e){this.$emit("removeItem",t,e)},completeItem:function(t,e){this.$emit("completeItem",t,e)}}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o(5),s=o(9);a.a.config.productionTip=!1,new a.a({el:"#app",template:"<App/>",components:{App:s.a}})},,,,,function(t,e,o){"use strict";function a(t){o(10)}var s=o(2),n=o(18),i=o(1),r=a,c=i(s.a,n.a,!1,r,null,null);e.a=c.exports},function(t,e){},,,,,function(t,e,o){"use strict";function a(t){o(16)}var s=o(3),n=o(17),i=o(1),r=a,c=i(s.a,n.a,!1,r,null,null);e.a=c.exports},function(t,e){},function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",{staticClass:"item"},[o("span",{staticClass:"name"},[t._v(t._s(t.title))]),t._v(" "),o("div",{staticClass:"buttons"},[o("button",{staticClass:"primary",on:{click:function(e){t.completeItem(t.title,t.state)}}},[o("i",{staticClass:"fas fa-check"})]),t._v(" "),o("button",{staticClass:"danger",on:{click:function(e){t.deleteItem(t.title,t.state)}}},[o("i",{staticClass:"fas fa-trash-alt"})])])])},s=[],n={render:a,staticRenderFns:s};e.a=n},function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("h1",{staticClass:"title"},[t._v("Focus")]),t._v(" "),t._m(0),t._v(" "),o("br"),t._v(" "),o("input",{attrs:{type:"text",maxlength:"45"},on:{keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.addNewItem(e)}}}),t._v(" "),o("br"),t._v(" "),t.todo.length||t.complete.length?o("div",[o("div",{staticClass:"todo"},t._l(t.todo,function(e){return o("div",{key:e},[o("todo",{attrs:{title:e,state:"todo"},on:{removeItem:t.removeItem,completeItem:t.completeItem}})],1)})),t._v(" "),o("div",{staticClass:"completed"},t._l(t.complete,function(e){return o("div",{key:e},[o("todo",{attrs:{title:e,state:"complete"},on:{removeItem:t.removeItem,completeItem:t.completeItem}})],1)}))]):o("transition",{attrs:{name:"fade",mode:"out-in"}},[o("span",{key:t.updateTip,staticClass:"help",domProps:{innerHTML:t._s(t.tip)}})])],1)},s=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h4",{staticClass:"subtitle"},[t._v("Developed by "),o("a",{attrs:{href:"https://github.com/blenderskool",target:"_blank"}},[t._v("Akash Hamirwasia")])])}],n={render:a,staticRenderFns:s};e.a=n}],[4]);
//# sourceMappingURL=app.02b1cd3ecd855788b88d.js.map