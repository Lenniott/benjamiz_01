"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./components/reusable/button.jsx":
/*!****************************************!*\
  !*** ./components/reusable/button.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Icon = (param)=>{\n    let { icon } = param;\n    return icon && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        \"aria-hidden\": \"true\",\n        children: icon\n    }, void 0, false, {\n        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/button.jsx\",\n        lineNumber: 3,\n        columnNumber: 36\n    }, undefined);\n};\n_c = Icon;\nfunction Button(param) {\n    let { title, download, link, label, iconStart, iconEnd, click, size } = param;\n    const sizeMapping = {\n        small: \"8\",\n        default: \"16\"\n    };\n    const btnSize = sizeMapping[size] || sizeMapping.default;\n    const commonClasses = \"flex gap-2 justify-center items-center shadow-lg rounded-lg focus:ring-1 duration-500\";\n    const textClasses = iconStart || iconEnd ? \"hidden sm:inline text-xs sm:text-lg\" : \"text-xs sm:text-lg\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        download: download,\n        href: link,\n        className: \"\".concat(commonClasses, \" w-\").concat(btnSize, \" h-\").concat(btnSize, \" sm:w-auto px-\").concat(btnSize, \" py-\").concat(btnSize / 4, \"  sm:px-\").concat(btnSize / 2, \" sm:py-\").concat(btnSize / 8, \" text-lg bg-ternary-light text-primary-dark hover:bg-primary-dark hover:text-primary-light hover:translate-y-0.5 hover:scale-105\"),\n        \"aria-label\": label || title,\n        onClick: click,\n        role: \"button\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                icon: iconStart\n            }, void 0, false, {\n                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/button.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: textClasses,\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/button.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                icon: iconEnd\n            }, void 0, false, {\n                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/button.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/button.jsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Button;\nButton.propTypes = {\n    title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,\n    download: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),\n    link: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),\n    label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),\n    iconStart: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),\n    iconEnd: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),\n    click: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),\n    size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([\n        \"small\",\n        \"default\"\n    ])\n};\nButton.defaultProps = {\n    size: \"default\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);\nvar _c, _c1;\n$RefreshReg$(_c, \"Icon\");\n$RefreshReg$(_c1, \"Button\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3JldXNhYmxlL2J1dHRvbi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1DO0FBRW5DLE1BQU1DLE9BQU87UUFBQyxFQUFFQyxJQUFJLEVBQUU7V0FBS0Esc0JBQVEsOERBQUNDO1FBQUlDLGVBQVk7a0JBQVFGOzs7Ozs7QUFBVTtLQUFoRUQ7QUFFTixTQUFTSSxPQUFPLEtBQWlFO1FBQWpFLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsU0FBUyxFQUFFQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFLEdBQWpFO0lBQ2QsTUFBTUMsY0FBYztRQUNsQkMsT0FBTztRQUNQQyxTQUFTO0lBQ1g7SUFDQSxNQUFNQyxVQUFVSCxXQUFXLENBQUNELEtBQUssSUFBSUMsWUFBWUUsT0FBTztJQUV4RCxNQUFNRSxnQkFBaUI7SUFFdkIsTUFBTUMsY0FBYyxhQUFjUixVQUFXLHdDQUF3QztJQUVyRixxQkFDRSw4REFBQ1M7UUFDQ2IsVUFBVUE7UUFDVmMsTUFBTWI7UUFDTmMsV0FBVyxHQUFzQkwsT0FBbkJDLGVBQWMsT0FBa0JELE9BQWJBLFNBQVEsT0FBNkJBLE9BQXhCQSxTQUFRLGtCQUE4QkEsT0FBZEEsU0FBUSxRQUEwQkEsT0FBcEJBLFVBQVEsR0FBRSxZQUErQkEsT0FBckJBLFVBQVUsR0FBRSxXQUFtQixPQUFWQSxVQUFRLEdBQUU7UUFDdklNLGNBQVlkLFNBQVNIO1FBQ3JCa0IsU0FBU1o7UUFDVGEsTUFBSzs7MEJBRUwsOERBQUN4QjtnQkFBS0MsTUFBTVE7Ozs7OzswQkFDWiw4REFBQ2dCO2dCQUFLSixXQUFXSDswQkFBY2I7Ozs7OzswQkFDL0IsOERBQUNMO2dCQUFLQyxNQUFNUzs7Ozs7Ozs7Ozs7O0FBR2xCO01BekJTTjtBQTJCVEEsT0FBT3NCLFNBQVMsR0FBRztJQUNqQnJCLE9BQU9OLDBEQUFnQixDQUFDNkIsVUFBVTtJQUNsQ3RCLFVBQVVQLHdEQUFjO0lBQ3hCUSxNQUFNUiwwREFBZ0I7SUFDdEJTLE9BQU9ULDBEQUFnQjtJQUN2QlUsV0FBV1Ysd0RBQWM7SUFDekJXLFNBQVNYLHdEQUFjO0lBQ3ZCWSxPQUFPWix3REFBYztJQUNyQmEsTUFBTWIsdURBQWUsQ0FBQztRQUFDO1FBQVM7S0FBVTtBQUM1QztBQUVBSyxPQUFPNkIsWUFBWSxHQUFHO0lBQ3BCckIsTUFBTTtBQUNSO0FBRUEsK0RBQWVSLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXVzYWJsZS9idXR0b24uanN4PzVjMDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgSWNvbiA9ICh7IGljb24gfSkgPT4gaWNvbiAmJiA8ZGl2IGFyaWEtaGlkZGVuPVwidHJ1ZVwiPntpY29ufTwvZGl2PjtcblxuZnVuY3Rpb24gQnV0dG9uKHsgdGl0bGUsIGRvd25sb2FkLCBsaW5rLCBsYWJlbCwgaWNvblN0YXJ0LCBpY29uRW5kLCBjbGljaywgc2l6ZSB9KSB7XG4gIGNvbnN0IHNpemVNYXBwaW5nID0ge1xuICAgIHNtYWxsOiAnOCcsXG4gICAgZGVmYXVsdDogJzE2JyxcbiAgfTtcbiAgY29uc3QgYnRuU2l6ZSA9IHNpemVNYXBwaW5nW3NpemVdIHx8IHNpemVNYXBwaW5nLmRlZmF1bHQ7XG4gIFxuICBjb25zdCBjb21tb25DbGFzc2VzID0gYGZsZXggZ2FwLTIganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHNoYWRvdy1sZyByb3VuZGVkLWxnIGZvY3VzOnJpbmctMSBkdXJhdGlvbi01MDBgO1xuICBcbiAgY29uc3QgdGV4dENsYXNzZXMgPSAoaWNvblN0YXJ0IHx8IGljb25FbmQpID8gJ2hpZGRlbiBzbTppbmxpbmUgdGV4dC14cyBzbTp0ZXh0LWxnJyA6ICd0ZXh0LXhzIHNtOnRleHQtbGcnO1xuICBcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBkb3dubG9hZD17ZG93bmxvYWR9XG4gICAgICBocmVmPXtsaW5rfVxuICAgICAgY2xhc3NOYW1lPXtgJHtjb21tb25DbGFzc2VzfSB3LSR7YnRuU2l6ZX0gaC0ke2J0blNpemV9IHNtOnctYXV0byBweC0ke2J0blNpemV9IHB5LSR7YnRuU2l6ZS80fSAgc206cHgtJHtidG5TaXplIC8gMn0gc206cHktJHtidG5TaXplLzh9IHRleHQtbGcgYmctdGVybmFyeS1saWdodCB0ZXh0LXByaW1hcnktZGFyayBob3ZlcjpiZy1wcmltYXJ5LWRhcmsgaG92ZXI6dGV4dC1wcmltYXJ5LWxpZ2h0IGhvdmVyOnRyYW5zbGF0ZS15LTAuNSBob3ZlcjpzY2FsZS0xMDVgfVxuICAgICAgYXJpYS1sYWJlbD17bGFiZWwgfHwgdGl0bGV9XG4gICAgICBvbkNsaWNrPXtjbGlja31cbiAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgID5cbiAgICAgIDxJY29uIGljb249e2ljb25TdGFydH0gLz5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17dGV4dENsYXNzZXN9Pnt0aXRsZX08L3NwYW4+XG4gICAgICA8SWNvbiBpY29uPXtpY29uRW5kfSAvPlxuICAgIDwvYnV0dG9uPlxuICApO1xufVxuXG5CdXR0b24ucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBkb3dubG9hZDogUHJvcFR5cGVzLmJvb2wsXG4gIGxpbms6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpY29uU3RhcnQ6IFByb3BUeXBlcy5ub2RlLFxuICBpY29uRW5kOiBQcm9wVHlwZXMubm9kZSxcbiAgY2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWydzbWFsbCcsICdkZWZhdWx0J10pLFxufTtcblxuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2l6ZTogJ2RlZmF1bHQnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIl0sIm5hbWVzIjpbIlByb3BUeXBlcyIsIkljb24iLCJpY29uIiwiZGl2IiwiYXJpYS1oaWRkZW4iLCJCdXR0b24iLCJ0aXRsZSIsImRvd25sb2FkIiwibGluayIsImxhYmVsIiwiaWNvblN0YXJ0IiwiaWNvbkVuZCIsImNsaWNrIiwic2l6ZSIsInNpemVNYXBwaW5nIiwic21hbGwiLCJkZWZhdWx0IiwiYnRuU2l6ZSIsImNvbW1vbkNsYXNzZXMiLCJ0ZXh0Q2xhc3NlcyIsImJ1dHRvbiIsImhyZWYiLCJjbGFzc05hbWUiLCJhcmlhLWxhYmVsIiwib25DbGljayIsInJvbGUiLCJzcGFuIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJub2RlIiwiZnVuYyIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/reusable/button.jsx\n"));

/***/ })

});