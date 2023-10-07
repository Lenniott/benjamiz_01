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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_FiChevronDown_FiChevronUp_FiXCircle_FiZoomIn_FiZoomOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=FiChevronDown,FiChevronUp,FiXCircle,FiZoomIn,FiZoomOut!=!react-icons/fi */ \"__barrel_optimize__?names=FiChevronDown,FiChevronUp,FiXCircle,FiZoomIn,FiZoomOut!=!./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_reusable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/reusable */ \"./components/reusable/index.jsx\");\n\nvar _s = $RefreshSig$();\n // Make sure to import Image from 'next/image'\n\n\n\n\nfunction Modal(param) {\n    let { image, modal, modalClose } = param;\n    _s();\n    const bodyDivRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const imageDivRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const modalRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [zoom, setZoom] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);\n    const [control, setControl] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [transformOrigin, setTransformOrigin] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"center\");\n    const [flexClasses, setFlexClasses] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"flex\");\n    const [storedScrollPosition, setStoredScrollPosition] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (modal) {\n            // Store the current scroll position\n            setStoredScrollPosition(window.scrollY);\n            // Additional code for when the modal opens\n            document.body.classList.add(\"overflow-y-hidden\");\n            // Scroll to the top\n            setTimeout(()=>{\n                window.scrollTo({\n                    top: 0\n                });\n            }, 600); // 600 milliseconds = 0.6 seconds\n        } else {\n            // Restore the scroll position\n            window.scrollTo({\n                top: storedScrollPosition\n            });\n            // Additional code for when the modal closes\n            document.body.classList.remove(\"overflow-y-hidden\");\n        }\n        setZoom(1);\n    }, [\n        modal\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const modalDiv = modalRef.current;\n        if (modal) {\n            const modalDivSize = modalDiv.getBoundingClientRect();\n            if (modalDivSize.height < 500) {\n                setControl(false);\n            } else {\n                setControl(true);\n            }\n        }\n    }, [\n        modal\n    ]); // Re-run the effect when 'zoom' changes\n    const handleZoomIn = ()=>{\n        setZoom((prevZoom)=>prevZoom + 0.25);\n    };\n    const handleZoomOut = ()=>{\n        setZoom((prevZoom)=>prevZoom > 1 ? prevZoom - 0.25 : prevZoom);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        console.log(\"Modal state:\", modal);\n        if (modal) {\n            document.body.classList.add(\"overflow-y-hidden\");\n        } else {\n            document.body.classList.remove(\"overflow-y-hidden\");\n        }\n    }, [\n        modal\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const bodyDiv = bodyDivRef.current;\n        const imageDiv = imageDivRef.current;\n        if (bodyDiv && imageDiv) {\n            const bodyDivSize = bodyDiv.getBoundingClientRect();\n            const imageDivSize = imageDiv.getBoundingClientRect();\n            if (imageDivSize.width > bodyDivSize.width) {\n                setFlexClasses(\"flex\");\n                setTransformOrigin(\"top left\");\n            } else {\n                setFlexClasses(\"flex justify-center items-center\");\n                setTransformOrigin(\"center\");\n            }\n        }\n    }, [\n        zoom,\n        modal\n    ]); // Re-run the effect when 'zoom' changes\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: modal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n            ref: modalRef,\n            initial: {\n                opacity: 0,\n                y: -180\n            },\n            animate: {\n                opacity: 1,\n                y: 0\n            },\n            exit: {\n                opacity: 0,\n                y: -180\n            },\n            transition: {\n                ease: \"easeInOut\",\n                duration: 0.3\n            },\n            className: \"bg-primary-light fixed top-0 left-0 w-screen h-screen z-50 opacity-95 py-8 duration-500\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pb-4 px-4 flex items-start justify-end \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            label: \"close\",\n                            onClick: modalClose,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiChevronDown_FiChevronUp_FiXCircle_FiZoomIn_FiZoomOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiXCircle, {\n                                className: \"text-4xl text-slate-500 hover:text-primary-dark\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                lineNumber: 110,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                            lineNumber: 109,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: bodyDivRef,\n                        className: \"overflow-scroll \".concat(flexClasses),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            ref: imageDivRef,\n                            className: \"image container p-0 w-auto sm:h-[65vh]\",\n                            style: {\n                                transform: \"scale(\".concat(zoom, \")\"),\n                                transformOrigin: transformOrigin\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: (image === null || image === void 0 ? void 0 : image.src) || \"\",\n                                alt: (image === null || image === void 0 ? void 0 : image.alt) || \"\",\n                                height: (image === null || image === void 0 ? void 0 : image.height) || \"\",\n                                width: (image === null || image === void 0 ? void 0 : image.width) || \"\",\n                                className: \"w-auto h-full transition-transform duration-300 transform-gpu\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                lineNumber: 116,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                            lineNumber: 115,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-primary-dark text-center my-4 w-full fixed -bottom-4 left-0 bg-primary-light border-t border-slate-300\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-primary-dark text-center px-8 z-20 my-4\",\n                                            children: \"hover to view\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                            lineNumber: 130,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-primary-dark text-center px-8 z-20 my-4\",\n                                            children: (image === null || image === void 0 ? void 0 : image.alt) || \"\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                            lineNumber: 131,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                    lineNumber: 129,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center w-full justify-center gap-4 mb-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_reusable__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                            iconStart: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiChevronDown_FiChevronUp_FiXCircle_FiZoomIn_FiZoomOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiZoomIn, {}, void 0, false, void 0, void 0),\n                                            title: \"Zoom in\",\n                                            click: handleZoomIn\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                            lineNumber: 135,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_reusable__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                            iconStart: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiChevronDown_FiChevronUp_FiXCircle_FiZoomIn_FiZoomOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiZoomOut, {}, void 0, false, void 0, void 0),\n                                            title: \"Zoom out\",\n                                            click: handleZoomOut\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                            lineNumber: 136,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                    lineNumber: 134,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                            lineNumber: 128,\n                            columnNumber: 10\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                        lineNumber: 127,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                lineNumber: 107,\n                columnNumber: 9\n            }, this)\n        }, (image === null || image === void 0 ? void 0 : image.src) || \"\", false, {\n            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n            lineNumber: 98,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Modal, \"Qn1YwNkWErDhVQRoY8QeMvWGoug=\");\n_c = Modal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsa0JBQUFBLDRCQUFBQSxNQUFPMEQsR0FBRyxLQUFJOzs7Ozs7Ozs7Ozs7OENBRzdFLDhEQUFDakI7b0NBQUlVLFdBQVU7O3NEQUNiLDhEQUFDckQsd0RBQU1BOzRDQUFDOEQseUJBQVcsOERBQUN2RSxrSUFBUUE7NENBQUl3RSxPQUFNOzRDQUFVQyxPQUFPL0I7Ozs7OztzREFDdkQsOERBQUNqQyx3REFBTUE7NENBQUM4RCx5QkFBVyw4REFBQ3RFLG1JQUFTQTs0Q0FBSXVFLE9BQU07NENBQVdDLE9BQU83Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7V0FwQzFEakMsQ0FBQUEsa0JBQUFBLDRCQUFBQSxNQUFPeUQsR0FBRyxLQUFJOzs7Ozs7QUE4QzNCO0dBMUlTMUQ7S0FBQUE7QUE0SVQsK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXVzYWJsZS9tb2RhbC5qc3g/MzkxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjsgLy8gTWFrZSBzdXJlIHRvIGltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgRmlYQ2lyY2xlLCBGaVpvb21JbiwgRmlab29tT3V0ICxGaUNoZXZyb25Eb3duICxGaUNoZXZyb25VcH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZVwiO1xuXG5cbmZ1bmN0aW9uIE1vZGFsKHsgaW1hZ2UsIG1vZGFsLCBtb2RhbENsb3NlIH0pIHtcbiAgY29uc3QgYm9keURpdlJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgaW1hZ2VEaXZSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IG1vZGFsUmVmPXVzZVJlZihudWxsKTtcbiAgY29uc3QgW3pvb20sIHNldFpvb21dID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtjb250cm9sLCBzZXRDb250cm9sXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbdHJhbnNmb3JtT3JpZ2luLCBzZXRUcmFuc2Zvcm1PcmlnaW5dID0gdXNlU3RhdGUoXCJjZW50ZXJcIik7XG4gIGNvbnN0IFtmbGV4Q2xhc3Nlcywgc2V0RmxleENsYXNzZXNdID0gdXNlU3RhdGUoXCJmbGV4XCIpO1xuICBjb25zdCBbc3RvcmVkU2Nyb2xsUG9zaXRpb24sIHNldFN0b3JlZFNjcm9sbFBvc2l0aW9uXSA9IHVzZVN0YXRlKDApO1xuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobW9kYWwpIHtcbiAgICAgIC8vIFN0b3JlIHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvblxuICAgICAgc2V0U3RvcmVkU2Nyb2xsUG9zaXRpb24od2luZG93LnNjcm9sbFkpO1xuICAgICAgLy8gQWRkaXRpb25hbCBjb2RlIGZvciB3aGVuIHRoZSBtb2RhbCBvcGVuc1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdvdmVyZmxvdy15LWhpZGRlbicpO1xuICAgICAgLy8gU2Nyb2xsIHRvIHRoZSB0b3BcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgfSk7XG4gICAgICB9LCA2MDApOyAvLyA2MDAgbWlsbGlzZWNvbmRzID0gMC42IHNlY29uZHNcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmVzdG9yZSB0aGUgc2Nyb2xsIHBvc2l0aW9uXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICB0b3A6IHN0b3JlZFNjcm9sbFBvc2l0aW9uLFxuICAgICAgfSk7XG4gICAgICAvLyBBZGRpdGlvbmFsIGNvZGUgZm9yIHdoZW4gdGhlIG1vZGFsIGNsb3Nlc1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyZmxvdy15LWhpZGRlbicpO1xuICAgIH1cbiAgICBzZXRab29tKDEpO1xuICB9LCBbbW9kYWxdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG1vZGFsRGl2ID0gbW9kYWxSZWYuY3VycmVudDtcbiAgXG4gICAgaWYgKG1vZGFsKSB7XG4gICAgICBjb25zdCBtb2RhbERpdlNpemUgPSBtb2RhbERpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgXG4gICAgICBpZiAobW9kYWxEaXZTaXplLmhlaWdodCA8IDUwMCApIHtcbiAgICAgICAgc2V0Q29udHJvbChmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgc2V0Q29udHJvbCh0cnVlKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW21vZGFsXSk7IC8vIFJlLXJ1biB0aGUgZWZmZWN0IHdoZW4gJ3pvb20nIGNoYW5nZXNcblxuICBjb25zdCBoYW5kbGVab29tSW4gPSAoKSA9PiB7XG4gICAgc2V0Wm9vbSgocHJldlpvb20pID0+IHByZXZab29tICsgMC4yNSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlWm9vbU91dCA9ICgpID0+IHtcbiAgICBzZXRab29tKChwcmV2Wm9vbSkgPT4gKHByZXZab29tID4gMSA/IHByZXZab29tIC0gMC4yNSA6IHByZXZab29tKSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIk1vZGFsIHN0YXRlOlwiLCBtb2RhbCk7IFxuICAgIGlmIChtb2RhbCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdvdmVyZmxvdy15LWhpZGRlbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJmbG93LXktaGlkZGVuJyk7XG4gICAgfVxuICB9LCBbbW9kYWxdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGJvZHlEaXYgPSBib2R5RGl2UmVmLmN1cnJlbnQ7XG4gICAgY29uc3QgaW1hZ2VEaXYgPSBpbWFnZURpdlJlZi5jdXJyZW50O1xuICBcbiAgICBpZiAoYm9keURpdiAmJiBpbWFnZURpdikge1xuICAgICAgY29uc3QgYm9keURpdlNpemUgPSBib2R5RGl2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgaW1hZ2VEaXZTaXplID0gaW1hZ2VEaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIFxuICAgICAgaWYgKGltYWdlRGl2U2l6ZS53aWR0aCA+IGJvZHlEaXZTaXplLndpZHRoICkge1xuICAgICAgICBzZXRGbGV4Q2xhc3NlcyhcImZsZXhcIik7XG4gICAgICAgIHNldFRyYW5zZm9ybU9yaWdpbihcInRvcCBsZWZ0XCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0RmxleENsYXNzZXMoXCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiKTtcbiAgICAgICAgc2V0VHJhbnNmb3JtT3JpZ2luKFwiY2VudGVyXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW3pvb20sIG1vZGFsXSk7IC8vIFJlLXJ1biB0aGUgZWZmZWN0IHdoZW4gJ3pvb20nIGNoYW5nZXNcbiAgXG5cblxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHttb2RhbCAmJiAoXG5cbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgcmVmPXttb2RhbFJlZn1cbiAgICAgICAga2V5PXtpbWFnZT8uc3JjIHx8IFwiXCJ9XG4gICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogLTE4MCB9fVxuICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwLCB5OiAtMTgwIH19IC8vIFRoaXMgbGluZSB3aWxsIG1ha2UgdGhlIG1vZGFsIGFuaW1hdGUgb3V0IHdpdGggdGhlc2UgdmFsdWVzXG4gICAgICAgIHRyYW5zaXRpb249e3sgZWFzZTogXCJlYXNlSW5PdXRcIiwgZHVyYXRpb246IDAuMyB9fVxuICAgICAgICBjbGFzc05hbWU9XCJiZy1wcmltYXJ5LWxpZ2h0IGZpeGVkIHRvcC0wIGxlZnQtMCB3LXNjcmVlbiBoLXNjcmVlbiB6LTUwIG9wYWNpdHktOTUgcHktOCBkdXJhdGlvbi01MDBcIlxuICAgICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi00IHB4LTQgZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWVuZCBcIj5cbiAgICAgICAgICAgIDxidXR0b24gbGFiZWw9XCJjbG9zZVwiIG9uQ2xpY2s9e21vZGFsQ2xvc2V9PlxuICAgICAgICAgICAgICAgIDxGaVhDaXJjbGUgY2xhc3NOYW1lPVwidGV4dC00eGwgdGV4dC1zbGF0ZS01MDAgaG92ZXI6dGV4dC1wcmltYXJ5LWRhcmtcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgcmVmPXtib2R5RGl2UmVmfSAgY2xhc3NOYW1lPXtgb3ZlcmZsb3ctc2Nyb2xsICR7ZmxleENsYXNzZXN9YH0+XG4gICAgICAgICAgICAgIDxkaXYgcmVmPXtpbWFnZURpdlJlZn0gY2xhc3NOYW1lPVwiaW1hZ2UgY29udGFpbmVyIHAtMCB3LWF1dG8gc206aC1bNjV2aF1cIiBzdHlsZT17eyB0cmFuc2Zvcm06IGBzY2FsZSgke3pvb219KWAsIHRyYW5zZm9ybU9yaWdpbjogdHJhbnNmb3JtT3JpZ2luIH19PlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZT8uc3JjIHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICBhbHQ9e2ltYWdlPy5hbHQgfHwgXCJcIn1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17aW1hZ2U/LmhlaWdodCB8fCBcIlwifVxuICAgICAgICAgICAgICAgICAgd2lkdGg9e2ltYWdlPy53aWR0aCB8fCBcIlwifVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1hdXRvIGgtZnVsbCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgdHJhbnNmb3JtLWdwdVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5LWRhcmsgdGV4dC1jZW50ZXIgbXktNCB3LWZ1bGwgZml4ZWQgLWJvdHRvbS00IGxlZnQtMCBiZy1wcmltYXJ5LWxpZ2h0IGJvcmRlci10IGJvcmRlci1zbGF0ZS0zMDBcIj5cbiAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnktZGFyayB0ZXh0LWNlbnRlciBweC04IHotMjAgbXktNFwiPmhvdmVyIHRvIHZpZXc8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeS1kYXJrIHRleHQtY2VudGVyIHB4LTggei0yMCBteS00XCI+e2ltYWdlPy5hbHQgfHwgXCJcIn08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB3LWZ1bGwganVzdGlmeS1jZW50ZXIgZ2FwLTQgbWItNFwiPiAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8QnV0dG9uIGljb25TdGFydD17PEZpWm9vbUluLz59IHRpdGxlPSdab29tIGluJyBjbGljaz17aGFuZGxlWm9vbUlufS8+XG4gICAgICAgICAgICAgIDxCdXR0b24gaWNvblN0YXJ0PXs8Rmlab29tT3V0Lz59IHRpdGxlPSdab29tIG91dCcgY2xpY2s9e2hhbmRsZVpvb21PdXR9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICl9XG4gICAgICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkZpWENpcmNsZSIsIkZpWm9vbUluIiwiRmlab29tT3V0IiwiRmlDaGV2cm9uRG93biIsIkZpQ2hldnJvblVwIiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJCdXR0b24iLCJNb2RhbCIsImltYWdlIiwibW9kYWwiLCJtb2RhbENsb3NlIiwiYm9keURpdlJlZiIsImltYWdlRGl2UmVmIiwibW9kYWxSZWYiLCJ6b29tIiwic2V0Wm9vbSIsImNvbnRyb2wiLCJzZXRDb250cm9sIiwidHJhbnNmb3JtT3JpZ2luIiwic2V0VHJhbnNmb3JtT3JpZ2luIiwiZmxleENsYXNzZXMiLCJzZXRGbGV4Q2xhc3NlcyIsInN0b3JlZFNjcm9sbFBvc2l0aW9uIiwic2V0U3RvcmVkU2Nyb2xsUG9zaXRpb24iLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0VGltZW91dCIsInNjcm9sbFRvIiwidG9wIiwicmVtb3ZlIiwibW9kYWxEaXYiLCJjdXJyZW50IiwibW9kYWxEaXZTaXplIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0IiwiaGFuZGxlWm9vbUluIiwicHJldlpvb20iLCJoYW5kbGVab29tT3V0IiwiY29uc29sZSIsImxvZyIsImJvZHlEaXYiLCJpbWFnZURpdiIsImJvZHlEaXZTaXplIiwiaW1hZ2VEaXZTaXplIiwid2lkdGgiLCJkaXYiLCJyZWYiLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJhbmltYXRlIiwiZXhpdCIsInRyYW5zaXRpb24iLCJlYXNlIiwiZHVyYXRpb24iLCJjbGFzc05hbWUiLCJidXR0b24iLCJsYWJlbCIsIm9uQ2xpY2siLCJzdHlsZSIsInRyYW5zZm9ybSIsInNyYyIsImFsdCIsInAiLCJpY29uU3RhcnQiLCJ0aXRsZSIsImNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/reusable/modal.jsx\n"));

/***/ })

});