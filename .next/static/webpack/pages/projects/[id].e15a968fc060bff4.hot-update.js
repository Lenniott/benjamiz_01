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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Button(param) {\n    let { title, download, link, label, iconStart, iconEnd, click } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"justify-center items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            download: download,\n            href: link,\n            className: \"font-general-medium flex gap-2 justify-center items-center w-16 h-16 my-0 sm:my-4 text-lg shadow-lg rounded-lg bg-ternary-light text-primary-dark focus:ring-1 focus:ring-primary-dark hover:bg-primary-dark hover:text-primary-light hover:translate-y-0.5 hover:scale-105 duration-500\",\n            \"aria-label\": label || title,\n            onClick: click,\n            role: \"button\" // Explicitly define the role\n            ,\n            children: [\n                iconStart && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    \"aria-hidden\": \"true\",\n                    children: iconStart\n                }, void 0, false, {\n                    fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/button.jsx\",\n                    lineNumber: 12,\n                    columnNumber: 23\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"hidden sm:inline text-xs sm:text-lg \",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/button.jsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this),\n                iconEnd && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    \"aria-hidden\": \"true\",\n                    children: iconEnd\n                }, void 0, false, {\n                    fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/button.jsx\",\n                    lineNumber: 15,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/button.jsx\",\n            lineNumber: 4,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/button.jsx\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, this);\n}\n_c = Button;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);\nvar _c;\n$RefreshReg$(_c, \"Button\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3JldXNhYmxlL2J1dHRvbi5qc3giLCJtYXBwaW5ncyI6Ijs7OztBQUFBLFNBQVNBLE9BQU8sS0FBMkQ7UUFBM0QsRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxTQUFTLEVBQUVDLE9BQU8sRUFBRUMsS0FBSyxFQUFFLEdBQTNEO0lBQ2QscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNDO1lBQ0NSLFVBQVVBO1lBQ1ZTLE1BQU1SO1lBQ05NLFdBQVU7WUFDVkcsY0FBWVIsU0FBU0g7WUFDckJZLFNBQVNOO1lBQ1RPLE1BQUssU0FBUyw2QkFBNkI7OztnQkFFMUNULDJCQUFhLDhEQUFDRztvQkFBSU8sZUFBWTs4QkFBUVY7Ozs7Ozs4QkFFdkMsOERBQUNXO29CQUFLUCxXQUFVOzhCQUF3Q1I7Ozs7OztnQkFDdkRLLHlCQUFXLDhEQUFDRTtvQkFBSU8sZUFBWTs4QkFBUVQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTdDO0tBbEJTTjtBQW9CVCwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3JldXNhYmxlL2J1dHRvbi5qc3g/NWMwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBCdXR0b24oeyB0aXRsZSwgZG93bmxvYWQsIGxpbmssIGxhYmVsLCBpY29uU3RhcnQsIGljb25FbmQsIGNsaWNrIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBkb3dubG9hZD17ZG93bmxvYWR9XG4gICAgICAgIGhyZWY9e2xpbmt9XG4gICAgICAgIGNsYXNzTmFtZT1cImZvbnQtZ2VuZXJhbC1tZWRpdW0gZmxleCBnYXAtMiBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy0xNiBoLTE2IG15LTAgc206bXktNCB0ZXh0LWxnIHNoYWRvdy1sZyByb3VuZGVkLWxnIGJnLXRlcm5hcnktbGlnaHQgdGV4dC1wcmltYXJ5LWRhcmsgZm9jdXM6cmluZy0xIGZvY3VzOnJpbmctcHJpbWFyeS1kYXJrIGhvdmVyOmJnLXByaW1hcnktZGFyayBob3Zlcjp0ZXh0LXByaW1hcnktbGlnaHQgaG92ZXI6dHJhbnNsYXRlLXktMC41IGhvdmVyOnNjYWxlLTEwNSBkdXJhdGlvbi01MDBcIlxuICAgICAgICBhcmlhLWxhYmVsPXtsYWJlbCB8fCB0aXRsZX0gLy8gRmFsbGJhY2sgdG8gdGl0bGUgaWYgbGFiZWwgaXMgbm90IHByb3ZpZGVkXG4gICAgICAgIG9uQ2xpY2s9e2NsaWNrfVxuICAgICAgICByb2xlPVwiYnV0dG9uXCIgLy8gRXhwbGljaXRseSBkZWZpbmUgdGhlIHJvbGVcbiAgICAgID5cbiAgICAgICAge2ljb25TdGFydCAmJiA8ZGl2IGFyaWEtaGlkZGVuPVwidHJ1ZVwiPntpY29uU3RhcnR9PC9kaXY+fVxuICAgICAgICB7LyogSGlkZSB0ZXh0IG9uIHNjcmVlbnMgc21hbGxlciB0aGFuICdzbScgKi99XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZGRlbiBzbTppbmxpbmUgdGV4dC14cyBzbTp0ZXh0LWxnIFwiPnt0aXRsZX08L3NwYW4+XG4gICAgICAgIHtpY29uRW5kICYmIDxkaXYgYXJpYS1oaWRkZW49XCJ0cnVlXCI+e2ljb25FbmR9PC9kaXY+fVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJ0aXRsZSIsImRvd25sb2FkIiwibGluayIsImxhYmVsIiwiaWNvblN0YXJ0IiwiaWNvbkVuZCIsImNsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwiaHJlZiIsImFyaWEtbGFiZWwiLCJvbkNsaWNrIiwicm9sZSIsImFyaWEtaGlkZGVuIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/reusable/button.jsx\n"));

/***/ })

});