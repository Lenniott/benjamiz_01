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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_FiXCircle_react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=FiXCircle!=!react-icons/fi */ \"__barrel_optimize__?names=FiXCircle!=!./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n // Make sure to import Image from 'next/image'\n\n\nfunction Modal(param) {\n    let { image, modal, modalClose } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {\n            children: modal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                initial: {\n                    opacity: 0,\n                    y: -180\n                },\n                animate: {\n                    opacity: 1,\n                    y: 0\n                },\n                exit: {\n                    opacity: 0,\n                    y: -180\n                },\n                transition: {\n                    ease: \"easeInOut\",\n                    duration: 0.3\n                },\n                className: \"bg-black fixed top-0 left-0 w-screen h-screen z-50 relatative opacity-95 p-8 duration-500\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full flex items-start justify-end pb-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            label: \"close\",\n                            onClick: modalClose,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiXCircle_react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiXCircle, {\n                                className: \"text-4xl text-primary-light\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                lineNumber: 18,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                            lineNumber: 17,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"-w-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: (image === null || image === void 0 ? void 0 : image.src) || \"\",\n                            alt: (image === null || image === void 0 ? void 0 : image.alt) || \"\",\n                            height: (image === null || image === void 0 ? void 0 : image.height) || \"\",\n                            width: (image === null || image === void 0 ? void 0 : image.width) || \"\",\n                            style: {\n                                objectFit: \"contain\"\n                            },\n                            className: \"w-full\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                            lineNumber: 22,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: (image === null || image === void 0 ? void 0 : image.alt) || \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n            lineNumber: 7,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_c = Modal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3JldXNhYmxlL21vZGFsLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUErQixDQUFDLDhDQUE4QztBQUNuQztBQUNhO0FBQ3hELFNBQVNJLE1BQU0sS0FBNEI7UUFBNUIsRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFVBQVUsRUFBRSxHQUE1QjtJQUNiLHFCQUNFO2tCQUNBLDRFQUFDSiwwREFBZUE7c0JBQ2JHLHVCQUNDLDhEQUFDSixpREFBTUEsQ0FBQ00sR0FBRztnQkFDWEMsU0FBUztvQkFBRUMsU0FBUztvQkFBR0MsR0FBRyxDQUFDO2dCQUFJO2dCQUMvQkMsU0FBUztvQkFBRUYsU0FBUztvQkFBR0MsR0FBRztnQkFBRTtnQkFDNUJFLE1BQU07b0JBQUVILFNBQVM7b0JBQUdDLEdBQUcsQ0FBQztnQkFBSTtnQkFDNUJHLFlBQVk7b0JBQUVDLE1BQU07b0JBQWFDLFVBQVU7Z0JBQUk7Z0JBQy9DQyxXQUFVOztrQ0FFUiw4REFBQ1Q7d0JBQUlTLFdBQVU7a0NBQ2IsNEVBQUNDOzRCQUFPQyxPQUFNOzRCQUFRQyxTQUFTYjtzQ0FDN0IsNEVBQUNOLHNGQUFTQTtnQ0FBQ2dCLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR3pCLDhEQUFDSTt3QkFBS0osV0FBVTtrQ0FDZCw0RUFBQ2pCLG1EQUFLQTs0QkFDSnNCLEtBQUtqQixDQUFBQSxrQkFBQUEsNEJBQUFBLE1BQU9pQixHQUFHLEtBQUk7NEJBQ25CQyxLQUFLbEIsQ0FBQUEsa0JBQUFBLDRCQUFBQSxNQUFPa0IsR0FBRyxLQUFJOzRCQUNuQkMsUUFBUW5CLENBQUFBLGtCQUFBQSw0QkFBQUEsTUFBT21CLE1BQU0sS0FBSTs0QkFDekJDLE9BQU9wQixDQUFBQSxrQkFBQUEsNEJBQUFBLE1BQU9vQixLQUFLLEtBQUk7NEJBQ3ZCQyxPQUFPO2dDQUFDQyxXQUFXOzRCQUFTOzRCQUM1QlYsV0FBVTs7Ozs7Ozs7Ozs7a0NBR2QsOERBQUNXO2tDQUFHdkIsQ0FBQUEsa0JBQUFBLDRCQUFBQSxNQUFPa0IsR0FBRyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNNUI7S0FqQ1NuQjtBQW1DVCwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3JldXNhYmxlL21vZGFsLmpzeD8zOTE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiOyAvLyBNYWtlIHN1cmUgdG8gaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyBGaVhDaXJjbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmZ1bmN0aW9uIE1vZGFsKHsgaW1hZ2UsIG1vZGFsLCBtb2RhbENsb3NlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICB7bW9kYWwgJiYgKFxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IC0xODAgfX1cbiAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCwgeTogLTE4MCB9fSAvLyBUaGlzIGxpbmUgd2lsbCBtYWtlIHRoZSBtb2RhbCBhbmltYXRlIG91dCB3aXRoIHRoZXNlIHZhbHVlc1xuICAgICAgICB0cmFuc2l0aW9uPXt7IGVhc2U6IFwiZWFzZUluT3V0XCIsIGR1cmF0aW9uOiAwLjMgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwiYmctYmxhY2sgZml4ZWQgdG9wLTAgbGVmdC0wIHctc2NyZWVuIGgtc2NyZWVuIHotNTAgcmVsYXRhdGl2ZSBvcGFjaXR5LTk1IHAtOCBkdXJhdGlvbi01MDBcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWVuZCBwYi00XCI+XG4gICAgICAgICAgICA8YnV0dG9uIGxhYmVsPVwiY2xvc2VcIiBvbkNsaWNrPXttb2RhbENsb3NlfT5cbiAgICAgICAgICAgICAgPEZpWENpcmNsZSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCB0ZXh0LXByaW1hcnktbGlnaHRcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiLXctZnVsbFwiPlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz17aW1hZ2U/LnNyYyB8fCBcIlwifVxuICAgICAgICAgICAgICBhbHQ9e2ltYWdlPy5hbHQgfHwgXCJcIn1cbiAgICAgICAgICAgICAgaGVpZ2h0PXtpbWFnZT8uaGVpZ2h0IHx8IFwiXCJ9XG4gICAgICAgICAgICAgIHdpZHRoPXtpbWFnZT8ud2lkdGggfHwgXCJcIn1cbiAgICAgICAgICAgICAgc3R5bGU9e3tvYmplY3RGaXQ6IFwiY29udGFpblwifX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxwPntpbWFnZT8uYWx0IHx8IFwiXCJ9PC9wPlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICApfVxuICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiRmlYQ2lyY2xlIiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwiTW9kYWwiLCJpbWFnZSIsIm1vZGFsIiwibW9kYWxDbG9zZSIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsImFuaW1hdGUiLCJleGl0IiwidHJhbnNpdGlvbiIsImVhc2UiLCJkdXJhdGlvbiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsImxhYmVsIiwib25DbGljayIsInNwYW4iLCJzcmMiLCJhbHQiLCJoZWlnaHQiLCJ3aWR0aCIsInN0eWxlIiwib2JqZWN0Rml0IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/reusable/modal.jsx\n"));

/***/ })

});