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

/***/ "./components/reusable/modal.jsx":
/*!***************************************!*\
  !*** ./components/reusable/modal.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_FiXCircle_react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=FiXCircle!=!react-icons/fi */ \"__barrel_optimize__?names=FiXCircle!=!./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n // Make sure to import Image from 'next/image'\n\n\nfunction Modal(param) {\n    let { image, modal, modalClose } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: modal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n            initial: {\n                opacity: 0,\n                y: -180\n            },\n            animate: {\n                opacity: 1,\n                y: 0\n            },\n            transition: {\n                ease: \"easeInOut\",\n                duration: 0.3\n            },\n            className: \"bg-black fixed top-0 left-0 w-screen h-screen z-50 relatative opacity-95 p-8 duration-500\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full flex items-start justify-end pb-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        label: \"close\",\n                        onClick: modalClose,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiXCircle_react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiXCircle, {\n                            className: \"text-4xl text-primary-light\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                            lineNumber: 17,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                    lineNumber: 15,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"-w-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: (image === null || image === void 0 ? void 0 : image.src) || \"\",\n                        alt: (image === null || image === void 0 ? void 0 : image.alt) || \"\",\n                        height: (image === null || image === void 0 ? void 0 : image.height) || \"\",\n                        width: (image === null || image === void 0 ? void 0 : image.width) || \"\",\n                        className: \"w-full\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: (image === null || image === void 0 ? void 0 : image.alt) || \"\"\n                }, void 0, false, {\n                    fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n            lineNumber: 9,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_c = Modal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3JldXNhYmxlL21vZGFsLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUErQixDQUFDLDhDQUE4QztBQUNuQztBQUNKO0FBRXZDLFNBQVNHLE1BQU0sS0FBNEI7UUFBNUIsRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFVBQVUsRUFBRSxHQUE1QjtJQUNiLHFCQUNFO2tCQUNHRCx1QkFDQyw4REFBQ0gsaURBQU1BLENBQUNLLEdBQUc7WUFDVEMsU0FBUztnQkFBRUMsU0FBUztnQkFBR0MsR0FBRyxDQUFDO1lBQUk7WUFDL0JDLFNBQVM7Z0JBQUVGLFNBQVM7Z0JBQUdDLEdBQUc7WUFBRTtZQUM1QkUsWUFBWTtnQkFBRUMsTUFBTTtnQkFBYUMsVUFBVTtZQUFJO1lBQy9DQyxXQUFVOzs4QkFFViw4REFBQ1I7b0JBQUlRLFdBQVU7OEJBQ2IsNEVBQUNDO3dCQUFPQyxPQUFNO3dCQUFRQyxTQUFTWjtrQ0FDN0IsNEVBQUNMLHNGQUFTQTs0QkFBQ2MsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFHekIsOERBQUNJO29CQUFLSixXQUFVOzhCQUNkLDRFQUFDZixtREFBS0E7d0JBQ0pvQixLQUFLaEIsQ0FBQUEsa0JBQUFBLDRCQUFBQSxNQUFPZ0IsR0FBRyxLQUFJO3dCQUNuQkMsS0FBS2pCLENBQUFBLGtCQUFBQSw0QkFBQUEsTUFBT2lCLEdBQUcsS0FBSTt3QkFDbkJDLFFBQVFsQixDQUFBQSxrQkFBQUEsNEJBQUFBLE1BQU9rQixNQUFNLEtBQUk7d0JBQ3pCQyxPQUFPbkIsQ0FBQUEsa0JBQUFBLDRCQUFBQSxNQUFPbUIsS0FBSyxLQUFJO3dCQUN2QlIsV0FBVTs7Ozs7Ozs7Ozs7OEJBR2QsOERBQUNTOzhCQUFHcEIsQ0FBQUEsa0JBQUFBLDRCQUFBQSxNQUFPaUIsR0FBRyxLQUFJOzs7Ozs7Ozs7Ozs7O0FBSzVCO0tBN0JTbEI7QUErQlQsK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXVzYWJsZS9tb2RhbC5qc3g/MzkxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjsgLy8gTWFrZSBzdXJlIHRvIGltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgRmlYQ2lyY2xlIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5mdW5jdGlvbiBNb2RhbCh7IGltYWdlLCBtb2RhbCwgbW9kYWxDbG9zZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHttb2RhbCAmJiAoXG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAtMTgwIH19XG4gICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgdHJhbnNpdGlvbj17eyBlYXNlOiBcImVhc2VJbk91dFwiLCBkdXJhdGlvbjogMC4zIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmxhY2sgZml4ZWQgdG9wLTAgbGVmdC0wIHctc2NyZWVuIGgtc2NyZWVuIHotNTAgcmVsYXRhdGl2ZSBvcGFjaXR5LTk1IHAtOCBkdXJhdGlvbi01MDBcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWVuZCBwYi00XCI+XG4gICAgICAgICAgICA8YnV0dG9uIGxhYmVsPVwiY2xvc2VcIiBvbkNsaWNrPXttb2RhbENsb3NlfT5cbiAgICAgICAgICAgICAgPEZpWENpcmNsZSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCB0ZXh0LXByaW1hcnktbGlnaHRcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiLXctZnVsbFwiPlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz17aW1hZ2U/LnNyYyB8fCBcIlwifVxuICAgICAgICAgICAgICBhbHQ9e2ltYWdlPy5hbHQgfHwgXCJcIn1cbiAgICAgICAgICAgICAgaGVpZ2h0PXtpbWFnZT8uaGVpZ2h0IHx8IFwiXCJ9XG4gICAgICAgICAgICAgIHdpZHRoPXtpbWFnZT8ud2lkdGggfHwgXCJcIn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxwPntpbWFnZT8uYWx0IHx8IFwiXCJ9PC9wPlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkZpWENpcmNsZSIsIm1vdGlvbiIsIk1vZGFsIiwiaW1hZ2UiLCJtb2RhbCIsIm1vZGFsQ2xvc2UiLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImVhc2UiLCJkdXJhdGlvbiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsImxhYmVsIiwib25DbGljayIsInNwYW4iLCJzcmMiLCJhbHQiLCJoZWlnaHQiLCJ3aWR0aCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/reusable/modal.jsx\n"));

/***/ })

});