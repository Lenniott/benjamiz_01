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

/***/ "./components/projects/MoreLinks.jsx":
/*!*******************************************!*\
  !*** ./components/projects/MoreLinks.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\nconst ProjectLink = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n        initial: {\n            opacity: 0\n        },\n        animate: {\n            opacity: 1,\n            delay: 1\n        },\n        transition: {\n            ease: \"easeInOut\",\n            duration: 0.7,\n            delay: 0.15\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: props.link,\n            \"aria-label\": props.title,\n            target: \"_blank\",\n            rel: \"noopener noreferrer\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-fit h-full rounded-xl shadow-lg grayscale hover:grayscale-0 hover:shadow-xl  hover:translate-y-0.5 hover:scale-105 cursor-pointer  bg-secondary-light duration-500\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"font-general-medium text-md md:text-lg text-ternary-dark dark:text-ternary-light break-normal\",\n                        children: props.title\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/projects/MoreLinks.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/projects/MoreLinks.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"p-4 text-ternary-dark text-left font-light  text-md \",\n                        children: props.description\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/projects/MoreLinks.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/projects/MoreLinks.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/projects/MoreLinks.jsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/projects/MoreLinks.jsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ProjectLink;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectLink);\nvar _c;\n$RefreshReg$(_c, \"ProjectLink\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2plY3RzL01vcmVMaW5rcy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBdUM7QUFFdkMsTUFBTUMsY0FBYyxDQUFDQztJQUNuQixxQkFDRSw4REFBQ0YsaURBQU1BLENBQUNHLEdBQUc7UUFDVEMsU0FBUztZQUFFQyxTQUFTO1FBQUU7UUFDdEJDLFNBQVM7WUFBRUQsU0FBUztZQUFHRSxPQUFPO1FBQUU7UUFDaENDLFlBQVk7WUFDVkMsTUFBTTtZQUNOQyxVQUFVO1lBQ1ZILE9BQU87UUFDVDtrQkFFQSw0RUFBQ0k7WUFDQ0MsTUFBTVYsTUFBTVcsSUFBSTtZQUNoQkMsY0FBWVosTUFBTWEsS0FBSztZQUN2QkMsUUFBTztZQUNQQyxLQUFJOzs4QkFFSiw4REFBQ2Q7b0JBQUllLFdBQVU7OEJBRVgsNEVBQUNDO3dCQUFHRCxXQUFVO2tDQUNiaEIsTUFBTWEsS0FBSzs7Ozs7Ozs7Ozs7OEJBR2QsOERBQUNaOzhCQUNDLDRFQUFDaUI7d0JBQUVGLFdBQVU7a0NBQ1JoQixNQUFNbUIsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9sQztLQWhDTXBCO0FBa0NOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcHJvamVjdHMvTW9yZUxpbmtzLmpzeD80Mjg2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmNvbnN0IFByb2plY3RMaW5rID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCBkZWxheTogMSB9fVxuICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICBlYXNlOiBcImVhc2VJbk91dFwiLFxuICAgICAgICBkdXJhdGlvbjogMC43LFxuICAgICAgICBkZWxheTogMC4xNSxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGFcbiAgICAgICAgaHJlZj17cHJvcHMubGlua31cbiAgICAgICAgYXJpYS1sYWJlbD17cHJvcHMudGl0bGV9XG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZml0IGgtZnVsbCByb3VuZGVkLXhsIHNoYWRvdy1sZyBncmF5c2NhbGUgaG92ZXI6Z3JheXNjYWxlLTAgaG92ZXI6c2hhZG93LXhsICBob3Zlcjp0cmFuc2xhdGUteS0wLjUgaG92ZXI6c2NhbGUtMTA1IGN1cnNvci1wb2ludGVyICBiZy1zZWNvbmRhcnktbGlnaHQgZHVyYXRpb24tNTAwXCI+XG4gICAgICAgICBcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWdlbmVyYWwtbWVkaXVtIHRleHQtbWQgbWQ6dGV4dC1sZyB0ZXh0LXRlcm5hcnktZGFyayBkYXJrOnRleHQtdGVybmFyeS1saWdodCBicmVhay1ub3JtYWxcIj5cbiAgICAgICAgICAgIHtwcm9wcy50aXRsZX1cbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAtNCB0ZXh0LXRlcm5hcnktZGFyayB0ZXh0LWxlZnQgZm9udC1saWdodCAgdGV4dC1tZCBcIj5cbiAgICAgICAgICAgICAgICB7cHJvcHMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2E+XG4gICAgPC9tb3Rpb24uZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdExpbms7XG4iXSwibmFtZXMiOlsibW90aW9uIiwiUHJvamVjdExpbmsiLCJwcm9wcyIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsImRlbGF5IiwidHJhbnNpdGlvbiIsImVhc2UiLCJkdXJhdGlvbiIsImEiLCJocmVmIiwibGluayIsImFyaWEtbGFiZWwiLCJ0aXRsZSIsInRhcmdldCIsInJlbCIsImNsYXNzTmFtZSIsImgyIiwicCIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/projects/MoreLinks.jsx\n"));

/***/ })

});