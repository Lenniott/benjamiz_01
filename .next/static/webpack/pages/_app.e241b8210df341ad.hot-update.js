"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/shared/AppHeader.jsx":
/*!*****************************************!*\
  !*** ./components/shared/AppHeader.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction AppHeader() {\n    _s();\n    const [showMenu, setShowMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const menuRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    function toggleMenu() {\n        setShowMenu(!showMenu);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        function handleClickOutside(event) {\n            if (menuRef.current && !menuRef.current.contains(event.target)) {\n                setShowMenu(false);\n            }\n        }\n        document.addEventListener(\"mousedown\", handleClickOutside);\n        return ()=>{\n            document.removeEventListener(\"mousedown\", handleClickOutside);\n        };\n    }, []);\n    const NavMenuItem = (props)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    onClick: toggleMenu,\n                    href: props.link,\n                    \"aria-label\": props.label,\n                    className: \"block text-left text-lg text-primary-dark sm:py-2 p-2 hover:bg-slate-200 rounded-lg duration-500\",\n                    children: props.label\n                }, void 0, false, {\n                    fileName: \"/project/benjamiz_01/components/shared/AppHeader.jsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                    className: \"border-ternary-light \"\n                }, void 0, false, {\n                    fileName: \"/project/benjamiz_01/components/shared/AppHeader.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true);\n    };\n    const NavList = (props)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: props.link,\n                className: \"block text-left text-lg font-medium text-primary-dark hover:underline underline-offset-4  sm:mx-4 mb-2 sm:py-2 duration-500\",\n                \"aria-label\": props.label,\n                children: props.label\n            }, void 0, false, {\n                fileName: \"/project/benjamiz_01/components/shared/AppHeader.jsx\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, this)\n        }, void 0, false);\n    };\n    const navList = [\n        [\n            \"/about\",\n            \"About me\"\n        ],\n        [\n            \"/projects\",\n            \"Case studies\"\n        ],\n        [\n            \"/cv\",\n            \"Experience\"\n        ]\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.nav, {\n        initial: {\n            opacity: 0\n        },\n        animate: {\n            opacity: 1\n        },\n        id: \"nav\",\n        className: \"sticky top-0 z-50  w-full \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-secondary-light  z-10 w-full\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex max-w-screen-xl mx-auto px-6 justify-between items-center py-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between items-center \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-center items-center gap-2 font-medium text-xs\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"grid p-6 bg-primary-dark shadow-sm rounded-lg h-7 w-7 place-content-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex justify-center text-primary-light\",\n                                                children: \"Benja\"\n                                            }, void 0, false, {\n                                                fileName: \"/project/benjamiz_01/components/shared/AppHeader.jsx\",\n                                                lineNumber: 79,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex justify-center text-primary-light\",\n                                                children: \"miz\"\n                                            }, void 0, false, {\n                                                fileName: \"/project/benjamiz_01/components/shared/AppHeader.jsx\",\n                                                lineNumber: 82,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/project/benjamiz_01/components/shared/AppHeader.jsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/project/benjamiz_01/components/shared/AppHeader.jsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/project/benjamiz_01/components/shared/AppHeader.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/project/benjamiz_01/components/shared/AppHeader.jsx\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/project/benjamiz_01/components/shared/AppHeader.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"sm:hidden\",\n                        ref: menuRef,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: toggleMenu,\n                                type: \"button\",\n                                className: \"focus:outline-none w-12 h-12 font-general-medium flex justify-center items-center text-lg shadow-md rounded-lg bg-primary-light hover:bg-primary-dark text-se hover:text-primary-light hover:translate-y-0.5 hover:scale-110 duration-500\",\n                                \"aria-label\": \"Hamburger Menu\",\n                                children: showMenu ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__.FiX, {\n                                    className: \"text-3xl\"\n                                }, void 0, false, {\n                                    fileName: \"/project/benjamiz_01/components/shared/AppHeader.jsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 17\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__.FiMenu, {\n                                    className: \"text-3xl\"\n                                }, void 0, false, {\n                                    fileName: \"/project/benjamiz_01/components/shared/AppHeader.jsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/project/benjamiz_01/components/shared/AppHeader.jsx\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: showMenu ? \"absolute right-0 m-0 mt-2 sm:ml-4 sm:mt-3 md:flex px-5 py-3 pb-full sm: z-10 p-0 justify-between items-center shadow-lg sm:shadow-none bg-primary-light rounded-lg w-full\" : \"hidden\",\n                                children: navList.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavMenuItem, {\n                                                id: index,\n                                                label: item[1],\n                                                link: item[1]\n                                            }, void 0, false, {\n                                                fileName: \"/project/benjamiz_01/components/shared/AppHeader.jsx\",\n                                                lineNumber: 114,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                                                id: \"hr-\".concat(index),\n                                                className: \"border-gray-100 \"\n                                            }, void 0, false, {\n                                                fileName: \"/project/benjamiz_01/components/shared/AppHeader.jsx\",\n                                                lineNumber: 115,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true))\n                            }, void 0, false, {\n                                fileName: \"/project/benjamiz_01/components/shared/AppHeader.jsx\",\n                                lineNumber: 105,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/project/benjamiz_01/components/shared/AppHeader.jsx\",\n                        lineNumber: 91,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none\",\n                        children: navList.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavList, {\n                                id: index,\n                                label: item[1],\n                                link: item[0]\n                            }, void 0, false, {\n                                fileName: \"/project/benjamiz_01/components/shared/AppHeader.jsx\",\n                                lineNumber: 124,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/project/benjamiz_01/components/shared/AppHeader.jsx\",\n                        lineNumber: 122,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/project/benjamiz_01/components/shared/AppHeader.jsx\",\n                lineNumber: 72,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/project/benjamiz_01/components/shared/AppHeader.jsx\",\n            lineNumber: 71,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/project/benjamiz_01/components/shared/AppHeader.jsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n}\n_s(AppHeader, \"IrpJJ9vEf04eEvLSh3rG0JvlrDI=\");\n_c = AppHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppHeader);\nvar _c;\n$RefreshReg$(_c, \"AppHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU9oQixPQUFPZSxJQUFJLENBQUMsRUFBRTtnQ0FBRWpCLE1BQU1pQixJQUFJLENBQUMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUS9EO0dBOUhTbEM7S0FBQUE7QUFnSVQsK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvQXBwSGVhZGVyLmpzeD80ZGQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IEZpWCwgRmlNZW51IH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XG5cbmZ1bmN0aW9uIEFwcEhlYWRlcigpIHtcbiAgY29uc3QgW3Nob3dNZW51LCBzZXRTaG93TWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IG1lbnVSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgZnVuY3Rpb24gdG9nZ2xlTWVudSgpIHtcbiAgICBzZXRTaG93TWVudSghc2hvd01lbnUpO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmdW5jdGlvbiBoYW5kbGVDbGlja091dHNpZGUoZXZlbnQpIHtcbiAgICAgIGlmIChtZW51UmVmLmN1cnJlbnQgJiYgIW1lbnVSZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgIHNldFNob3dNZW51KGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgY29uc3QgTmF2TWVudUl0ZW0gPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPExpbmtcbiAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVNZW51fVxuICAgICAgICAgIGhyZWY9e3Byb3BzLmxpbmt9XG4gICAgICAgICAgYXJpYS1sYWJlbD17cHJvcHMubGFiZWx9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1sZWZ0IHRleHQtbGcgdGV4dC1wcmltYXJ5LWRhcmsgc206cHktMiBwLTIgaG92ZXI6Ymctc2xhdGUtMjAwIHJvdW5kZWQtbGcgZHVyYXRpb24tNTAwXCJcbiAgICAgICAgPlxuICAgICAgICAgIHtwcm9wcy5sYWJlbH1cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwiYm9yZGVyLXRlcm5hcnktbGlnaHQgXCIgLz5cbiAgICAgIDwvPlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgTmF2TGlzdCA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8TGlua1xuICAgICAgICAgIGhyZWY9e3Byb3BzLmxpbmt9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1sZWZ0IHRleHQtbGcgZm9udC1tZWRpdW0gdGV4dC1wcmltYXJ5LWRhcmsgaG92ZXI6dW5kZXJsaW5lIHVuZGVybGluZS1vZmZzZXQtNCAgc206bXgtNCBtYi0yIHNtOnB5LTIgZHVyYXRpb24tNTAwXCJcbiAgICAgICAgICBhcmlhLWxhYmVsPXtwcm9wcy5sYWJlbH1cbiAgICAgICAgPlxuICAgICAgICAgIHtwcm9wcy5sYWJlbH1cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBuYXZMaXN0ID0gW1xuICAgIFtcIi9hYm91dFwiLCBcIkFib3V0IG1lXCJdLFxuICAgIFtcIi9wcm9qZWN0c1wiLCBcIkNhc2Ugc3R1ZGllc1wiXSxcbiAgICBbXCIvY3ZcIiwgXCJFeHBlcmllbmNlXCJdLFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5uYXZcbiAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XG4gICAgICBpZD1cIm5hdlwiXG4gICAgICBjbGFzc05hbWU9XCJzdGlja3kgdG9wLTAgei01MCAgdy1mdWxsIFwiXG4gICAgPlxuICAgICAgey8qIEhlYWRlciAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc2Vjb25kYXJ5LWxpZ2h0ICB6LTEwIHctZnVsbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWF4LXctc2NyZWVuLXhsIG14LWF1dG8gcHgtNiBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHB5LTJcIj5cbiAgICAgICAgICB7LyogSGVhZGVyIG1lbnUgbGlua3MgYW5kIHNtYWxsIHNjcmVlbiBoYW1idXJnZXIgbWVudSAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBnYXAtMiBmb250LW1lZGl1bSB0ZXh0LXhzXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgcC02IGJnLXByaW1hcnktZGFyayBzaGFkb3ctc20gcm91bmRlZC1sZyBoLTcgdy03IHBsYWNlLWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB0ZXh0LXByaW1hcnktbGlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICBCZW5qYVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHRleHQtcHJpbWFyeS1saWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgIG1pelxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogU21hbGwgc2NyZWVuIGhhbWJ1cmdlciBtZW51ICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206aGlkZGVuXCIgcmVmPXttZW51UmVmfT5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlTWVudX1cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvY3VzOm91dGxpbmUtbm9uZSB3LTEyIGgtMTIgZm9udC1nZW5lcmFsLW1lZGl1bSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LWxnIHNoYWRvdy1tZCByb3VuZGVkLWxnIGJnLXByaW1hcnktbGlnaHQgaG92ZXI6YmctcHJpbWFyeS1kYXJrIHRleHQtc2UgaG92ZXI6dGV4dC1wcmltYXJ5LWxpZ2h0IGhvdmVyOnRyYW5zbGF0ZS15LTAuNSBob3ZlcjpzY2FsZS0xMTAgZHVyYXRpb24tNTAwXCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkhhbWJ1cmdlciBNZW51XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3Nob3dNZW51ID8gKFxuICAgICAgICAgICAgICAgIDxGaVggY2xhc3NOYW1lPVwidGV4dC0zeGxcIiAvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxGaU1lbnUgY2xhc3NOYW1lPVwidGV4dC0zeGxcIiAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICB7LyogSGVhZGVyIGxpbmtzIHNtYWxsIHNjcmVlbiAqL31cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICBzaG93TWVudVxuICAgICAgICAgICAgICAgICAgPyBcImFic29sdXRlIHJpZ2h0LTAgbS0wIG10LTIgc206bWwtNCBzbTptdC0zIG1kOmZsZXggcHgtNSBweS0zIHBiLWZ1bGwgc206IHotMTAgcC0wIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgc2hhZG93LWxnIHNtOnNoYWRvdy1ub25lIGJnLXByaW1hcnktbGlnaHQgcm91bmRlZC1sZyB3LWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgOiBcImhpZGRlblwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge25hdkxpc3QubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8TmF2TWVudUl0ZW0gaWQ9e2luZGV4fSBsYWJlbD17aXRlbVsxXX0gbGluaz17aXRlbVsxXX0gLz5cbiAgICAgICAgICAgICAgICAgIDxociBpZD17YGhyLSR7aW5kZXh9YH0gY2xhc3NOYW1lPVwiYm9yZGVyLWdyYXktMTAwIFwiIC8+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogSGVhZGVyIGxpbmtzIGxhcmdlIHNjcmVlbiAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtZ2VuZXJhbC1tZWRpdW0gaGlkZGVuIG0tMCBzbTptbC00IG10LTUgc206bXQtMyBzbTpmbGV4IHAtNSBzbTpwLTAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHNoYWRvdy1sZyBzbTpzaGFkb3ctbm9uZVwiPlxuICAgICAgICAgICAge25hdkxpc3QubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8TmF2TGlzdCBpZD17aW5kZXh9IGxhYmVsPXtpdGVtWzFdfSBsaW5rPXtpdGVtWzBdfSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogSGVhZGVyIHJpZ2h0IHNlY3Rpb24gYnV0dG9ucyAqL31cbiAgICAgIDwvZGl2PlxuICAgIDwvbW90aW9uLm5hdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwSGVhZGVyO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiTGluayIsIm1vdGlvbiIsIkZpWCIsIkZpTWVudSIsIkFwcEhlYWRlciIsInNob3dNZW51Iiwic2V0U2hvd01lbnUiLCJtZW51UmVmIiwidG9nZ2xlTWVudSIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImV2ZW50IiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIk5hdk1lbnVJdGVtIiwicHJvcHMiLCJvbkNsaWNrIiwiaHJlZiIsImxpbmsiLCJhcmlhLWxhYmVsIiwibGFiZWwiLCJjbGFzc05hbWUiLCJociIsIk5hdkxpc3QiLCJuYXZMaXN0IiwibmF2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwiaWQiLCJkaXYiLCJyZWYiLCJidXR0b24iLCJ0eXBlIiwibWFwIiwiaXRlbSIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/shared/AppHeader.jsx\n"));

/***/ })

});