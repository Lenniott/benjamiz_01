"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects/[id]",{

/***/ "./components/reusable/button.jsx":
/*!****************************************!*\
  !*** ./components/reusable/button.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Button(param) {\n    let { title, download, link, label, iconStart, iconEnd, click } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" justify-center items-center sm:block\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            download: download,\n            href: link,\n            className: \"font-general-medium flex gap-2 justify-center items-center p-16 sm:p-8 text-lg py-2.5 sm:py-3 shadow-lg rounded-lg bg-ternary-light text-primary-dark focus:ring-1 focus:ring-primary-dark hover:bg-primary-dark hover:text-primary-light  hover:translate-y-0.5 hover:scale-105 duration-500\",\n            \"aria-label\": label,\n            onClick: click,\n            children: [\n                iconStart && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: iconStart\n                }, void 0, false, {\n                    fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/button.jsx\",\n                    lineNumber: 11,\n                    columnNumber: 23\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"hidden sm:hidden-0 text-sm sm:text-lg duration-100\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/button.jsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this),\n                iconEnd && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: iconEnd\n                }, void 0, false, {\n                    fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/button.jsx\",\n                    lineNumber: 14,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/button.jsx\",\n            lineNumber: 4,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/button.jsx\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, this);\n}\n_c = Button;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);\nvar _c;\n$RefreshReg$(_c, \"Button\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3JldXNhYmxlL2J1dHRvbi5qc3giLCJtYXBwaW5ncyI6Ijs7OztBQUFBLFNBQVNBLE9BQU8sS0FBMkQ7UUFBM0QsRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxTQUFTLEVBQUVDLE9BQU8sRUFBRUMsS0FBSyxFQUFFLEdBQTNEO0lBQ2QscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNDO1lBQ0NSLFVBQVVBO1lBQ1ZTLE1BQU1SO1lBQ05NLFdBQVU7WUFDVkcsY0FBWVI7WUFDWlMsU0FBU047O2dCQUVSRiwyQkFBYSw4REFBQ0c7OEJBQUtIOzs7Ozs7OEJBRXBCLDhEQUFDUztvQkFBS0wsV0FBVTs4QkFBc0RSOzs7Ozs7Z0JBQ3JFSyx5QkFBVyw4REFBQ0U7OEJBQUtGOzs7Ozs7Ozs7Ozs7Ozs7OztBQUkxQjtLQWpCU047QUFtQlQsK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXVzYWJsZS9idXR0b24uanN4PzVjMDkiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gQnV0dG9uKHsgdGl0bGUsIGRvd25sb2FkLCBsaW5rLCBsYWJlbCwgaWNvblN0YXJ0LCBpY29uRW5kLCBjbGljayB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCIganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHNtOmJsb2NrXCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGRvd25sb2FkPXtkb3dubG9hZH1cbiAgICAgICAgaHJlZj17bGlua31cbiAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1nZW5lcmFsLW1lZGl1bSBmbGV4IGdhcC0yIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBwLTE2IHNtOnAtOCB0ZXh0LWxnIHB5LTIuNSBzbTpweS0zIHNoYWRvdy1sZyByb3VuZGVkLWxnIGJnLXRlcm5hcnktbGlnaHQgdGV4dC1wcmltYXJ5LWRhcmsgZm9jdXM6cmluZy0xIGZvY3VzOnJpbmctcHJpbWFyeS1kYXJrIGhvdmVyOmJnLXByaW1hcnktZGFyayBob3Zlcjp0ZXh0LXByaW1hcnktbGlnaHQgIGhvdmVyOnRyYW5zbGF0ZS15LTAuNSBob3ZlcjpzY2FsZS0xMDUgZHVyYXRpb24tNTAwXCJcbiAgICAgICAgYXJpYS1sYWJlbD17bGFiZWx9XG4gICAgICAgIG9uQ2xpY2s9e2NsaWNrfVxuICAgICAgPlxuICAgICAgICB7aWNvblN0YXJ0ICYmIDxkaXY+e2ljb25TdGFydH08L2Rpdj59XG5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmhpZGRlbi0wIHRleHQtc20gc206dGV4dC1sZyBkdXJhdGlvbi0xMDBcIj57dGl0bGV9PC9zcGFuPlxuICAgICAgICB7aWNvbkVuZCAmJiA8ZGl2PntpY29uRW5kfTwvZGl2Pn1cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iXSwibmFtZXMiOlsiQnV0dG9uIiwidGl0bGUiLCJkb3dubG9hZCIsImxpbmsiLCJsYWJlbCIsImljb25TdGFydCIsImljb25FbmQiLCJjbGljayIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsImhyZWYiLCJhcmlhLWxhYmVsIiwib25DbGljayIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/reusable/button.jsx\n"));

/***/ })

});