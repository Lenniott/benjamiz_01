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

/***/ "./pages/projects/[id].jsx":
/*!*********************************!*\
  !*** ./pages/projects/[id].jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_PagesMetaHead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/PagesMetaHead */ \"./components/PagesMetaHead.jsx\");\n/* harmony import */ var _components_reusable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/reusable */ \"./components/reusable/index.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ProjectSingle(props) {\n    _s();\n    const modalRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const handleOpenModal = ()=>{\n        modalRef.current.toggleModal();\n    };\n    const [currentImage, setCurrentImage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const renderLayout = (details, index)=>{\n        switch(details.styleID){\n            case \"ImageOnly\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-center gap-8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid gap-2 py-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    alt: details.alt,\n                                    src: details.img,\n                                    width: 300,\n                                    height: 300,\n                                    className: \"w-full rounded-lg\",\n                                    onClick: ()=>{\n                                        setCurrentImage({\n                                            src: details.imgHi,\n                                            alt: details.alt,\n                                            height: 3000,\n                                            width: 3000\n                                        }); // Set the hi-res image\n                                        handleOpenModal();\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/pages/projects/[id].jsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-center text-xs\",\n                                    children: details.alt\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/pages/projects/[id].jsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/pages/projects/[id].jsx\",\n                            lineNumber: 26,\n                            columnNumber: 15\n                        }, this)\n                    }, details.id, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/pages/projects/[id].jsx\",\n                        lineNumber: 22,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false);\n            case \"textOnly\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"py-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" rounded-lg\",\n                        children: [\n                            details.title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"w-full flex justify-start text-2xl font-semibold pb-2\",\n                                children: details.title\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/pages/projects/[id].jsx\",\n                                lineNumber: 53,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-ternary-dark text-left font-light  text-lg\",\n                                children: details.body\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/pages/projects/[id].jsx\",\n                                lineNumber: 58,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/pages/projects/[id].jsx\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, this)\n                }, details.id, false, {\n                    fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/pages/projects/[id].jsx\",\n                    lineNumber: 50,\n                    columnNumber: 11\n                }, this);\n            case \"allDetails\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid md:flex gap-8 \".concat((index + 1) % 2 === 0 ? \"\" : \"md:flex-row-reverse\", \" \"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex py-2 \".concat(details.img ? \"md:w-3/5\" : \"\", \" flex-col justify-center items-center\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"w-full flex justify-start text-2xl font-semibold pb-2\",\n                                        children: details.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/pages/projects/[id].jsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-ternary-dark text-left font-light  text-lg\",\n                                        children: details.body\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/pages/projects/[id].jsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/pages/projects/[id].jsx\",\n                                lineNumber: 73,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"md:w-2/5 flex flex-col items-center justify-center gap-2 \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        alt: details.alt,\n                                        src: details.img,\n                                        width: 300,\n                                        height: 300,\n                                        className: \"object-cover rounded-lg\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/pages/projects/[id].jsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-center text-xs\",\n                                        children: details.alt\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/pages/projects/[id].jsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/pages/projects/[id].jsx\",\n                                lineNumber: 86,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, details.id, true, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/pages/projects/[id].jsx\",\n                        lineNumber: 67,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false);\n            case \"quote\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-8 mt-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-slate-700 p-4 rounded-lg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"w-full flex justify-start text-2xl font-semibold\",\n                                children: details.title\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/pages/projects/[id].jsx\",\n                                lineNumber: 103,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"italic text-ternary-light text-left font-light  text-lg \",\n                                children: details.body\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/pages/projects/[id].jsx\",\n                                lineNumber: 106,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/pages/projects/[id].jsx\",\n                        lineNumber: 102,\n                        columnNumber: 13\n                    }, this)\n                }, details.id, false, {\n                    fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/pages/projects/[id].jsx\",\n                    lineNumber: 101,\n                    columnNumber: 11\n                }, this);\n            case \"chip\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-slate-200 p-4 rounded-lg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"w-full flex justify-start text-xl font-semibold text-gray-700 pb-2\",\n                                children: details.title\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/pages/projects/[id].jsx\",\n                                lineNumber: 116,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"italic text-ternary-dark text-left font-light  text-lg \",\n                                children: details.body\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/pages/projects/[id].jsx\",\n                                lineNumber: 119,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/pages/projects/[id].jsx\",\n                        lineNumber: 115,\n                        columnNumber: 13\n                    }, this)\n                }, details.id, false, {\n                    fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/pages/projects/[id].jsx\",\n                    lineNumber: 114,\n                    columnNumber: 11\n                }, this);\n            default:\n                return null;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto max-w-6xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_reusable__WEBPACK_IMPORTED_MODULE_4__.Modal, {\n                modal: modal,\n                image: currentImage,\n                onClose: handleCloseModal\n            }, void 0, false, {\n                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/pages/projects/[id].jsx\",\n                lineNumber: 132,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PagesMetaHead__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: props.project.title\n            }, void 0, false, {\n                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/pages/projects/[id].jsx\",\n                lineNumber: 137,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-4\",\n                        children: props.project.ProjectHeader.title\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/pages/projects/[id].jsx\",\n                        lineNumber: 141,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-light text-primary-dar\",\n                            children: props.project.ProjectHeader.description\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/pages/projects/[id].jsx\",\n                            lineNumber: 145,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/pages/projects/[id].jsx\",\n                        lineNumber: 144,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/pages/projects/[id].jsx\",\n                lineNumber: 140,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full text-left grid gap-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-primary-dark dark:text-primary-light text-2xl font-bold mb-7\",\n                            children: props.project.ProjectInfo.ProjectDetailsHeading\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/pages/projects/[id].jsx\",\n                            lineNumber: 155,\n                            columnNumber: 11\n                        }, this),\n                        props.project.ProjectInfo.ProjectDetails.map((details, index)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: renderLayout(details, index)\n                            }, details.id, false, {\n                                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/pages/projects/[id].jsx\",\n                                lineNumber: 159,\n                                columnNumber: 20\n                            }, this);\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/pages/projects/[id].jsx\",\n                    lineNumber: 154,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/pages/projects/[id].jsx\",\n                lineNumber: 152,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/pages/projects/[id].jsx\",\n        lineNumber: 131,\n        columnNumber: 5\n    }, this);\n}\n_s(ProjectSingle, \"I0pcdSwcWDqcUhRRt6Muy5fWyJQ=\");\n_c = ProjectSingle;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectSingle);\nvar _c;\n$RefreshReg$(_c, \"ProjectSingle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUU7Ozs7O1lBV3hCO2dCQUNFLE9BQU87UUFDWDtJQUNGO0lBRUEscUJBQ0UsOERBQUNWO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDZix1REFBS0E7Z0JBQ0o0QixPQUFPQTtnQkFDUEMsT0FBT3JCO2dCQUNQc0IsU0FBU0M7Ozs7OzswQkFFWCw4REFBQ2hDLGlFQUFhQTtnQkFBQzBCLE9BQU90QixNQUFNNkIsT0FBTyxDQUFDUCxLQUFLOzs7Ozs7MEJBR3pDLDhEQUFDWDs7a0NBQ0MsOERBQUNTO3dCQUFFUixXQUFVO2tDQUNWWixNQUFNNkIsT0FBTyxDQUFDQyxhQUFhLENBQUNSLEtBQUs7Ozs7OztrQ0FFcEMsOERBQUNYO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDUTs0QkFBRVIsV0FBVTtzQ0FDVlosTUFBTTZCLE9BQU8sQ0FBQ0MsYUFBYSxDQUFDQyxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFNOUMsOERBQUNwQjtnQkFBSUMsV0FBVTswQkFFYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDUTs0QkFBRVIsV0FBVTtzQ0FDVlosTUFBTTZCLE9BQU8sQ0FBQ0csV0FBVyxDQUFDQyxxQkFBcUI7Ozs7Ozt3QkFFakRqQyxNQUFNNkIsT0FBTyxDQUFDRyxXQUFXLENBQUNFLGNBQWMsQ0FBQ0MsR0FBRyxDQUFDLENBQUMzQixTQUFTQzs0QkFDdEQscUJBQU8sOERBQUNFOzBDQUFzQkosYUFBYUMsU0FBU0M7K0JBQW5DRCxRQUFRYSxFQUFFOzs7Ozt3QkFDN0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1WO0dBN0pTdEI7S0FBQUE7O0FBd0tULCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2plY3RzL1tpZF0uanN4PzU4NzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBhZ2VzTWV0YUhlYWQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUGFnZXNNZXRhSGVhZFwiO1xuaW1wb3J0IHsgcHJvamVjdHNEYXRhIH0gZnJvbSBcIi4uLy4uL2RhdGEvcHJvamVjdHNEYXRhXCI7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlXCI7XG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cblxuZnVuY3Rpb24gUHJvamVjdFNpbmdsZShwcm9wcykge1xuICBjb25zdCBtb2RhbFJlZiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBoYW5kbGVPcGVuTW9kYWwgPSAoKSA9PiB7XG4gICAgICBtb2RhbFJlZi5jdXJyZW50LnRvZ2dsZU1vZGFsKCk7XG4gIH07XG4gIGNvbnN0IFtjdXJyZW50SW1hZ2UsIHNldEN1cnJlbnRJbWFnZV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCByZW5kZXJMYXlvdXQgPSAoZGV0YWlscywgaW5kZXgpID0+IHtcbiAgICBzd2l0Y2ggKGRldGFpbHMuc3R5bGVJRCkge1xuICAgICAgY2FzZSBcIkltYWdlT25seVwiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17ZGV0YWlscy5pZH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLThgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTIgcHktMlwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgYWx0PXtkZXRhaWxzLmFsdH1cbiAgICAgICAgICAgICAgICAgIHNyYz17ZGV0YWlscy5pbWd9XG4gICAgICAgICAgICAgICAgICB3aWR0aD17MzAwfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszMDB9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1sZ1wiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRJbWFnZSh7XG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiBkZXRhaWxzLmltZ0hpLFxuICAgICAgICAgICAgICAgICAgICAgIGFsdDogZGV0YWlscy5hbHQsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDAwLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDAwLFxuICAgICAgICAgICAgICAgICAgICB9KTsgLy8gU2V0IHRoZSBoaS1yZXMgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlT3Blbk1vZGFsKCk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC14c1wiPntkZXRhaWxzLmFsdH08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICAgICk7XG4gICAgICBjYXNlIFwidGV4dE9ubHlcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGtleT17ZGV0YWlscy5pZH0gY2xhc3NOYW1lPVwicHktMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgICB7ZGV0YWlscy50aXRsZSAmJiAoXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGp1c3RpZnktc3RhcnQgdGV4dC0yeGwgZm9udC1zZW1pYm9sZCBwYi0yXCI+XG4gICAgICAgICAgICAgICAgICB7ZGV0YWlscy50aXRsZX1cbiAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtdGVybmFyeS1kYXJrIHRleHQtbGVmdCBmb250LWxpZ2h0ICB0ZXh0LWxnXCI+XG4gICAgICAgICAgICAgICAge2RldGFpbHMuYm9keX1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICBjYXNlIFwiYWxsRGV0YWlsc1wiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17ZGV0YWlscy5pZH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3JpZCBtZDpmbGV4IGdhcC04ICR7XG4gICAgICAgICAgICAgICAgKGluZGV4ICsgMSkgJSAyID09PSAwID8gXCJcIiA6IFwibWQ6ZmxleC1yb3ctcmV2ZXJzZVwiXG4gICAgICAgICAgICAgIH0gYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggcHktMiAke1xuICAgICAgICAgICAgICAgICAgZGV0YWlscy5pbWcgPyBcIm1kOnctMy81XCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgfSBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGp1c3RpZnktc3RhcnQgdGV4dC0yeGwgZm9udC1zZW1pYm9sZCBwYi0yXCI+XG4gICAgICAgICAgICAgICAgICB7ZGV0YWlscy50aXRsZX1cbiAgICAgICAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC10ZXJuYXJ5LWRhcmsgdGV4dC1sZWZ0IGZvbnQtbGlnaHQgIHRleHQtbGdcIj5cbiAgICAgICAgICAgICAgICAgIHtkZXRhaWxzLmJvZHl9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDp3LTIvNSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMiBcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIGFsdD17ZGV0YWlscy5hbHR9XG4gICAgICAgICAgICAgICAgICBzcmM9e2RldGFpbHMuaW1nfVxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezMwMH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MzAwfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIHJvdW5kZWQtbGdcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC14c1wiPntkZXRhaWxzLmFsdH08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICAgICk7XG4gICAgICBjYXNlIFwicXVvdGVcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGtleT17ZGV0YWlscy5pZH0gY2xhc3NOYW1lPVwibWItOCBtdC00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNsYXRlLTcwMCBwLTQgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXgganVzdGlmeS1zdGFydCB0ZXh0LTJ4bCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAge2RldGFpbHMudGl0bGV9XG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIml0YWxpYyB0ZXh0LXRlcm5hcnktbGlnaHQgdGV4dC1sZWZ0IGZvbnQtbGlnaHQgIHRleHQtbGcgXCI+XG4gICAgICAgICAgICAgICAge2RldGFpbHMuYm9keX1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICBjYXNlIFwiY2hpcFwiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYga2V5PXtkZXRhaWxzLmlkfSBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc2xhdGUtMjAwIHAtNCByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LXN0YXJ0IHRleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNzAwIHBiLTJcIj5cbiAgICAgICAgICAgICAgICB7ZGV0YWlscy50aXRsZX1cbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaXRhbGljIHRleHQtdGVybmFyeS1kYXJrIHRleHQtbGVmdCBmb250LWxpZ2h0ICB0ZXh0LWxnIFwiPlxuICAgICAgICAgICAgICAgIHtkZXRhaWxzLmJvZHl9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBtYXgtdy02eGxcIj5cbiAgICAgIDxNb2RhbFxuICAgICAgICBtb2RhbD17bW9kYWx9XG4gICAgICAgIGltYWdlPXtjdXJyZW50SW1hZ2V9XG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlTW9kYWx9XG4gICAgICAvPlxuICAgICAgPFBhZ2VzTWV0YUhlYWQgdGl0bGU9e3Byb3BzLnByb2plY3QudGl0bGV9IC8+XG5cbiAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICA8ZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWdlbmVyYWwtbWVkaXVtIHRleHQtbGVmdCB0ZXh0LTN4bCBzbTp0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1wcmltYXJ5LWRhcmsgZGFyazp0ZXh0LXByaW1hcnktbGlnaHQgbXQtMTQgc206bXQtMjAgbWItNFwiPlxuICAgICAgICAgIHtwcm9wcy5wcm9qZWN0LlByb2plY3RIZWFkZXIudGl0bGV9XG4gICAgICAgIDwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1saWdodCB0ZXh0LXByaW1hcnktZGFyXCI+XG4gICAgICAgICAgICB7cHJvcHMucHJvamVjdC5Qcm9qZWN0SGVhZGVyLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIEluZm8gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICB7LyogIFNpbmdsZSBwcm9qZWN0IHJpZ2h0IHNlY3Rpb24gZGV0YWlscyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1sZWZ0IGdyaWQgZ2FwLTRcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnktZGFyayBkYXJrOnRleHQtcHJpbWFyeS1saWdodCB0ZXh0LTJ4bCBmb250LWJvbGQgbWItN1wiPlxuICAgICAgICAgICAge3Byb3BzLnByb2plY3QuUHJvamVjdEluZm8uUHJvamVjdERldGFpbHNIZWFkaW5nfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICB7cHJvcHMucHJvamVjdC5Qcm9qZWN0SW5mby5Qcm9qZWN0RGV0YWlscy5tYXAoKGRldGFpbHMsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2RldGFpbHMuaWR9PntyZW5kZXJMYXlvdXQoZGV0YWlscywgaW5kZXgpfTwvZGl2PjtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiA8UmVsYXRlZFByb2plY3RzIC8+ICovfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcXVlcnkgfSkge1xuICBjb25zdCB7IGlkIH0gPSBxdWVyeTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcHJvamVjdDogcHJvamVjdHNEYXRhLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gcGFyc2VJbnQoaWQpKVswXSxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0U2luZ2xlO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlU3RhdGUiLCJQYWdlc01ldGFIZWFkIiwiTW9kYWwiLCJ1c2VSZWYiLCJQcm9qZWN0U2luZ2xlIiwicHJvcHMiLCJtb2RhbFJlZiIsImhhbmRsZU9wZW5Nb2RhbCIsImN1cnJlbnQiLCJ0b2dnbGVNb2RhbCIsImN1cnJlbnRJbWFnZSIsInNldEN1cnJlbnRJbWFnZSIsInJlbmRlckxheW91dCIsImRldGFpbHMiLCJpbmRleCIsInN0eWxlSUQiLCJkaXYiLCJjbGFzc05hbWUiLCJhbHQiLCJzcmMiLCJpbWciLCJ3aWR0aCIsImhlaWdodCIsIm9uQ2xpY2siLCJpbWdIaSIsInAiLCJpZCIsInRpdGxlIiwiaDIiLCJib2R5IiwibW9kYWwiLCJpbWFnZSIsIm9uQ2xvc2UiLCJoYW5kbGVDbG9zZU1vZGFsIiwicHJvamVjdCIsIlByb2plY3RIZWFkZXIiLCJkZXNjcmlwdGlvbiIsIlByb2plY3RJbmZvIiwiUHJvamVjdERldGFpbHNIZWFkaW5nIiwiUHJvamVjdERldGFpbHMiLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/projects/[id].jsx\n"));

/***/ })

});