(this["webpackJsonpbasic-calculator"]=this["webpackJsonpbasic-calculator"]||[]).push([[0],[,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var D_projects_React_basic_calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_App_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(12),_App_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__),_buttons__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);function App(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),_useState2=Object(D_projects_React_basic_calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),isdark=_useState2[0],setIsdark=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState4=Object(D_projects_React_basic_calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),calc=_useState4[0],setCalc=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState6=Object(D_projects_React_basic_calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState5,2),result=_useState6[0],setResult=_useState6[1],ops=["/","+","-","*","."],updateCalc=function updateCalc(value){ops.includes(value)&&""===calc||ops.includes(value)&&ops.includes(calc.slice(-1))||(setCalc(calc+value),ops.includes(value)||setResult(eval(calc+value).toString()))},remove=function(){if(""!==calc){var _=calc.slice(0,-1);setCalc(_.toString())}else setResult("0")},calculate=function calculate(){setCalc(eval(calc).toString())};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"modebtn",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p",{children:"Switch To "}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{className:"dark",onClick:function(){return setIsdark(!0)},children:"Dark "}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p",{children:"/"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{className:"light",onClick:function(){return setIsdark(!1)},children:"Light"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p",{children:"Mode "})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"App",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"calculator ".concat(isdark?"dark":"light"),children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"display",children:[calc&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input",{type:"text",placeholder:"0",readOnly:!0,className:"digitArea ".concat(isdark?"dark":"light"),value:result}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input",{type:"text",className:"digitArea ".concat(isdark?"dark":"light"),value:calc,placeholder:"0"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"buttonsArea",children:_buttons__WEBPACK_IMPORTED_MODULE_3__.a.map((function(_){var e=_.id,t=_.type,a=_.value,c="num"===t?isdark?"dark":"light":"clr"===t?isdark?"darkdel":"lightdel":"yellow";return"calc"===t&&(c="green"),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{className:c,onClick:function(){return"C"!==a&&"="!==a?"".concat(updateCalc(a)):"C"===a?remove():calculate()},children:a},e)}))})]})})]})}__webpack_exports__.a=App},function(_,e,t){"use strict";e.a=[{id:1,type:"num",value:7},{id:2,type:"num",value:8},{id:3,type:"num",value:9},{id:4,type:"clr",value:"C"},{id:5,type:"num",value:4},{id:6,type:"num",value:5},{id:7,type:"num",value:6},{id:8,type:"opr",value:"-"},{id:9,type:"num",value:1},{id:10,type:"num",value:2},{id:11,type:"num",value:3},{id:12,type:"opr",value:"+"},{id:13,type:"opr",value:"."},{id:14,type:"num",value:0},{id:15,type:"opr",value:"*"},{id:16,type:"opr",value:"/"},{id:17,type:"calc",value:"="}]},,,,,function(_,e,t){},function(_,e,t){},,function(_,e,t){"use strict";t.r(e);var a=t(1),c=t.n(a),r=t(4),s=t.n(r),u=(t(11),t(5)),l=function(_){_&&_ instanceof Function&&t.e(3).then(t.bind(null,15)).then((function(e){var t=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;t(_),a(_),c(_),r(_),s(_)}))},i=t(0);s.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(u.a,{})}),document.getElementById("root")),l()}],[[14,1,2]]]);
//# sourceMappingURL=main.f348b14b.chunk.js.map