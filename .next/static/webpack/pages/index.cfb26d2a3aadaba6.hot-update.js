"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/projects/ProjectsGrid.jsx":
/*!**********************************************!*\
  !*** ./components/projects/ProjectsGrid.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ProjectSingle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectSingle */ \"./components/projects/ProjectSingle.jsx\");\n/* harmony import */ var _data_projectsData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/projectsData */ \"./data/projectsData.js\");\n\n\n\nfunction ProjectsGrid() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"py-5 sm:py-10 mt-5 sm:mt-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center justify-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light\",\n                        children: \"Case studies\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/projects/ProjectsGrid.jsx\",\n                        lineNumber: 9,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/projects/ProjectsGrid.jsx\",\n                    lineNumber: 8,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-5 max-w-xl\",\n                    children: _data_projectsData__WEBPACK_IMPORTED_MODULE_2__.projectsData.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectSingle__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            className: \"grow\",\n                            ...project\n                        }, index, false, {\n                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/projects/ProjectsGrid.jsx\",\n                            lineNumber: 16,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/projects/ProjectsGrid.jsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/projects/ProjectsGrid.jsx\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/projects/ProjectsGrid.jsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = ProjectsGrid;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectsGrid);\nvar _c;\n$RefreshReg$(_c, \"ProjectsGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2plY3RzL1Byb2plY3RzR3JpZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTRDO0FBQ1c7QUFFdkQsU0FBU0U7SUFDUCxxQkFDRSw4REFBQ0M7UUFBUUMsV0FBVTtrQkFDakIsNEVBQUNDO1lBQUlELFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBSUQsV0FBVTs4QkFDYiw0RUFBQ0U7d0JBQUVGLFdBQVU7a0NBQTBGOzs7Ozs7Ozs7Ozs4QkFLekcsOERBQUNDO29CQUFJRCxXQUFVOzhCQUNaSCw0REFBWUEsQ0FBQ00sR0FBRyxDQUFDLENBQUNDLFNBQVNDLHNCQUMxQiw4REFBQ1Qsc0RBQWFBOzRCQUFDSSxXQUFVOzRCQUFvQixHQUFHSSxPQUFPOzJCQUFsQkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1qRDtLQWxCU1A7QUFvQlQsK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0cy9Qcm9qZWN0c0dyaWQuanN4PzYwZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2plY3RTaW5nbGUgZnJvbSBcIi4vUHJvamVjdFNpbmdsZVwiO1xuaW1wb3J0IHsgcHJvamVjdHNEYXRhIH0gZnJvbSBcIi4uLy4uL2RhdGEvcHJvamVjdHNEYXRhXCI7XG5cbmZ1bmN0aW9uIFByb2plY3RzR3JpZCgpIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS01IHNtOnB5LTEwIG10LTUgc206bXQtMTBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtZ2VuZXJhbC1tZWRpdW0gdGV4dC0yeGwgc206dGV4dC00eGwgbWItMSB0ZXh0LXRlcm5hcnktZGFyayBkYXJrOnRleHQtdGVybmFyeS1saWdodFwiPlxuICAgICAgICAgICAgQ2FzZSBzdHVkaWVzXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgbXQtNiBzbTpnYXAtNSBtYXgtdy14bFwiPlxuICAgICAgICAgIHtwcm9qZWN0c0RhdGEubWFwKChwcm9qZWN0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPFByb2plY3RTaW5nbGUgY2xhc3NOYW1lPVwiZ3Jvd1wiIGtleT17aW5kZXh9IHsuLi5wcm9qZWN0fSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHNHcmlkO1xuIl0sIm5hbWVzIjpbIlByb2plY3RTaW5nbGUiLCJwcm9qZWN0c0RhdGEiLCJQcm9qZWN0c0dyaWQiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwicCIsIm1hcCIsInByb2plY3QiLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/projects/ProjectsGrid.jsx\n"));

/***/ })

});