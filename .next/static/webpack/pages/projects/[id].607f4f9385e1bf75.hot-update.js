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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_FiChevronDown_FiChevronUp_FiXCircle_FiZoomIn_FiZoomOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=FiChevronDown,FiChevronUp,FiXCircle,FiZoomIn,FiZoomOut!=!react-icons/fi */ \"__barrel_optimize__?names=FiChevronDown,FiChevronUp,FiXCircle,FiZoomIn,FiZoomOut!=!./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_reusable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/reusable */ \"./components/reusable/index.jsx\");\n\nvar _s = $RefreshSig$();\n // Make sure to import Image from 'next/image'\n\n\n\n\nfunction Modal(param) {\n    let { image, modal, modalClose } = param;\n    _s();\n    const bodyDivRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const imageDivRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const modalRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [zoom, setZoom] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);\n    const [control, setControl] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [transformOrigin, setTransformOrigin] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"center\");\n    const [flexClasses, setFlexClasses] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"flex\");\n    const [storedScrollPosition, setStoredScrollPosition] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (modal) {\n            // Store the current scroll position and prevent scrolling\n            setStoredScrollPosition(window.scrollY);\n            document.body.classList.add(\"overflow-y-hidden\");\n            // Scroll to the top after a delay to allow for animation\n            setTimeout(()=>{\n                window.scrollTo({\n                    top: 0\n                });\n            }, 600);\n        } else {\n            // Restore the scroll position and allow scrolling\n            window.scrollTo({\n                top: storedScrollPosition\n            });\n            document.body.classList.remove(\"overflow-y-hidden\");\n        }\n        // Reset zoom level\n        setZoom(1);\n    }, [\n        modal\n    ]);\n    const handleZoomIn = ()=>{\n        setZoom((prevZoom)=>prevZoom + 0.25);\n    };\n    const handleZoomOut = ()=>{\n        setZoom((prevZoom)=>prevZoom > 1 ? prevZoom - 0.25 : prevZoom);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const bodyDiv = bodyDivRef.current;\n        const imageDiv = imageDivRef.current;\n        if (bodyDiv && imageDiv) {\n            const bodyDivSize = bodyDiv.getBoundingClientRect();\n            const imageDivSize = imageDiv.getBoundingClientRect();\n            let newFlexClasses = \"flex\";\n            let newTransformOrigin = \"\";\n            if (imageDivSize.width > bodyDivSize.width) {\n                newTransformOrigin = \"left\";\n            } else {\n                newFlexClasses += \" justify-center \";\n            }\n            if (imageDivSize.height > bodyDivSize.height) {\n                if (newTransformOrigin.includes(\"left\")) {\n                    newTransformOrigin += \" top\";\n                } else {\n                    newTransformOrigin = \"center top\";\n                }\n            } else {\n                newFlexClasses += \" items-center \";\n            }\n            setFlexClasses(newFlexClasses.trim());\n            setTransformOrigin(newTransformOrigin.trim());\n        }\n    }, [\n        zoom,\n        modal\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: modal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n            ref: modalRef,\n            initial: {\n                opacity: 0,\n                y: -180\n            },\n            animate: {\n                opacity: 1,\n                y: 0\n            },\n            exit: {\n                opacity: 0,\n                y: -180\n            },\n            transition: {\n                ease: \"easeInOut\",\n                duration: 0.3\n            },\n            className: \"bg-primary-light fixed top-0 left-0 w-screen h-screen z-50 opacity-95 py-8 duration-500\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pb-4 px-4 flex items-start justify-end \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            label: \"close\",\n                            onClick: modalClose,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiChevronDown_FiChevronUp_FiXCircle_FiZoomIn_FiZoomOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiXCircle, {\n                                className: \"text-4xl text-slate-500 hover:text-primary-dark\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                lineNumber: 100,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                            lineNumber: 99,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: bodyDivRef,\n                        className: \"overflow-scroll \".concat(flexClasses, \" h-[calc(100vh-230px)]\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            ref: imageDivRef,\n                            className: \"image container p-0 w-auto h-full flex items-center justify-center xs:flex-initial xs:items-start xs:justify-start\",\n                            style: {\n                                transform: \"scale(\".concat(zoom, \")\"),\n                                transformOrigin: transformOrigin\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: (image === null || image === void 0 ? void 0 : image.src) || \"\",\n                                alt: (image === null || image === void 0 ? void 0 : image.alt) || \"\",\n                                height: (image === null || image === void 0 ? void 0 : image.height) || \"\",\n                                width: (image === null || image === void 0 ? void 0 : image.width) || \"\",\n                                className: \"w-full h-auto xs:w-auto xs:h-full transition-transform duration-300 transform-gpu\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                lineNumber: 106,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                            lineNumber: 105,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-primary-dark text-center my-4 w-full fixed -bottom-4 left-0 bg-primary-light border-t border-slate-300\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    onMouseEnter: ()=>setControl(false),\n                                    onMouseLeave: ()=>setControl(true),\n                                    children: control ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-primary-dark text-center font-xs px-8 z-20 my-4\",\n                                        children: \"view description\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                        lineNumber: 124,\n                                        columnNumber: 16\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-primary-dark text-center px-8 z-20 my-4\",\n                                        children: (image === null || image === void 0 ? void 0 : image.alt) || \"\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                        lineNumber: 125,\n                                        columnNumber: 16\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                    lineNumber: 119,\n                                    columnNumber: 10\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center w-full justify-center gap-4 mb-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_reusable__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                            iconStart: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiChevronDown_FiChevronUp_FiXCircle_FiZoomIn_FiZoomOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiZoomIn, {}, void 0, false, void 0, void 0),\n                                            title: \"Zoom in\",\n                                            click: handleZoomIn\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                            lineNumber: 129,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_reusable__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                            iconStart: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiChevronDown_FiChevronUp_FiXCircle_FiZoomIn_FiZoomOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiZoomOut, {}, void 0, false, void 0, void 0),\n                                            title: \"Zoom out\",\n                                            click: handleZoomOut\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                            lineNumber: 130,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                    lineNumber: 128,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                            lineNumber: 118,\n                            columnNumber: 10\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                        lineNumber: 117,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                lineNumber: 97,\n                columnNumber: 9\n            }, this)\n        }, (image === null || image === void 0 ? void 0 : image.src) || \"\", false, {\n            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n            lineNumber: 88,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Modal, \"bZBKGzIBHXcCEopR+qtfG959a9M=\");\n_c = Modal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztzREFDdkQsOERBQUM1Qix3REFBTUE7NENBQUNnRSx5QkFBVyw4REFBQ3hFLG1JQUFTQTs0Q0FBSXlFLE9BQU07NENBQVdDLE9BQU9wQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7V0F4QzFENUIsQ0FBQUEsa0JBQUFBLDRCQUFBQSxNQUFPeUQsR0FBRyxLQUFJOzs7Ozs7QUFrRDNCO0dBcElTMUQ7S0FBQUE7QUFzSVQsK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXVzYWJsZS9tb2RhbC5qc3g/MzkxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjsgLy8gTWFrZSBzdXJlIHRvIGltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgRmlYQ2lyY2xlLCBGaVpvb21JbiwgRmlab29tT3V0ICxGaUNoZXZyb25Eb3duICxGaUNoZXZyb25VcH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZVwiO1xuXG5cbmZ1bmN0aW9uIE1vZGFsKHsgaW1hZ2UsIG1vZGFsLCBtb2RhbENsb3NlIH0pIHtcbiAgY29uc3QgYm9keURpdlJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgaW1hZ2VEaXZSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IG1vZGFsUmVmPXVzZVJlZihudWxsKTtcbiAgY29uc3QgW3pvb20sIHNldFpvb21dID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtjb250cm9sLCBzZXRDb250cm9sXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbdHJhbnNmb3JtT3JpZ2luLCBzZXRUcmFuc2Zvcm1PcmlnaW5dID0gdXNlU3RhdGUoXCJjZW50ZXJcIik7XG4gIGNvbnN0IFtmbGV4Q2xhc3Nlcywgc2V0RmxleENsYXNzZXNdID0gdXNlU3RhdGUoXCJmbGV4XCIpO1xuICBjb25zdCBbc3RvcmVkU2Nyb2xsUG9zaXRpb24sIHNldFN0b3JlZFNjcm9sbFBvc2l0aW9uXSA9IHVzZVN0YXRlKDApO1xuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobW9kYWwpIHtcbiAgICAgIC8vIFN0b3JlIHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiBhbmQgcHJldmVudCBzY3JvbGxpbmdcbiAgICAgIHNldFN0b3JlZFNjcm9sbFBvc2l0aW9uKHdpbmRvdy5zY3JvbGxZKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnb3ZlcmZsb3cteS1oaWRkZW4nKTtcblxuICAgICAgLy8gU2Nyb2xsIHRvIHRoZSB0b3AgYWZ0ZXIgYSBkZWxheSB0byBhbGxvdyBmb3IgYW5pbWF0aW9uXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwIH0pO1xuICAgICAgfSwgNjAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmVzdG9yZSB0aGUgc2Nyb2xsIHBvc2l0aW9uIGFuZCBhbGxvdyBzY3JvbGxpbmdcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogc3RvcmVkU2Nyb2xsUG9zaXRpb24gfSk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJmbG93LXktaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgLy8gUmVzZXQgem9vbSBsZXZlbFxuICAgIHNldFpvb20oMSk7XG4gIH0sIFttb2RhbF0pO1xuXG4gIGNvbnN0IGhhbmRsZVpvb21JbiA9ICgpID0+IHtcbiAgICBzZXRab29tKHByZXZab29tID0+IHByZXZab29tICsgMC4yNSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlWm9vbU91dCA9ICgpID0+IHtcbiAgICBzZXRab29tKHByZXZab29tID0+IChwcmV2Wm9vbSA+IDEgPyBwcmV2Wm9vbSAtIDAuMjUgOiBwcmV2Wm9vbSkpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgYm9keURpdiA9IGJvZHlEaXZSZWYuY3VycmVudDtcbiAgICBjb25zdCBpbWFnZURpdiA9IGltYWdlRGl2UmVmLmN1cnJlbnQ7XG4gIFxuICAgIGlmIChib2R5RGl2ICYmIGltYWdlRGl2KSB7XG4gICAgICBjb25zdCBib2R5RGl2U2l6ZSA9IGJvZHlEaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBpbWFnZURpdlNpemUgPSBpbWFnZURpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgXG4gICAgICBsZXQgbmV3RmxleENsYXNzZXMgPSBcImZsZXhcIjtcbiAgICAgIGxldCBuZXdUcmFuc2Zvcm1PcmlnaW4gPSBcIlwiO1xuICBcbiAgICAgIGlmIChpbWFnZURpdlNpemUud2lkdGggPiBib2R5RGl2U2l6ZS53aWR0aCkge1xuICAgICAgICBuZXdUcmFuc2Zvcm1PcmlnaW4gPSBcImxlZnRcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0ZsZXhDbGFzc2VzICs9IFwiIGp1c3RpZnktY2VudGVyIFwiO1xuICAgICAgfVxuICBcbiAgICAgIGlmIChpbWFnZURpdlNpemUuaGVpZ2h0ID4gYm9keURpdlNpemUuaGVpZ2h0KSB7XG4gICAgICAgIGlmIChuZXdUcmFuc2Zvcm1PcmlnaW4uaW5jbHVkZXMoXCJsZWZ0XCIpKSB7XG4gICAgICAgICAgbmV3VHJhbnNmb3JtT3JpZ2luICs9IFwiIHRvcFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld1RyYW5zZm9ybU9yaWdpbiA9IFwiY2VudGVyIHRvcFwiO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdGbGV4Q2xhc3NlcyArPSBcIiBpdGVtcy1jZW50ZXIgXCI7XG4gICAgICB9XG4gIFxuICAgICAgc2V0RmxleENsYXNzZXMobmV3RmxleENsYXNzZXMudHJpbSgpKTtcbiAgICAgIHNldFRyYW5zZm9ybU9yaWdpbihuZXdUcmFuc2Zvcm1PcmlnaW4udHJpbSgpKTtcbiAgICB9XG4gIH0sIFt6b29tLCBtb2RhbF0pO1xuICBcblxuXG5cblxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHttb2RhbCAmJiAoXG5cbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgcmVmPXttb2RhbFJlZn1cbiAgICAgICAga2V5PXtpbWFnZT8uc3JjIHx8IFwiXCJ9XG4gICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogLTE4MCB9fVxuICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwLCB5OiAtMTgwIH19IC8vIFRoaXMgbGluZSB3aWxsIG1ha2UgdGhlIG1vZGFsIGFuaW1hdGUgb3V0IHdpdGggdGhlc2UgdmFsdWVzXG4gICAgICAgIHRyYW5zaXRpb249e3sgZWFzZTogXCJlYXNlSW5PdXRcIiwgZHVyYXRpb246IDAuMyB9fVxuICAgICAgICBjbGFzc05hbWU9XCJiZy1wcmltYXJ5LWxpZ2h0IGZpeGVkIHRvcC0wIGxlZnQtMCB3LXNjcmVlbiBoLXNjcmVlbiB6LTUwIG9wYWNpdHktOTUgcHktOCBkdXJhdGlvbi01MDBcIlxuICAgICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi00IHB4LTQgZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWVuZCBcIj5cbiAgICAgICAgICAgIDxidXR0b24gbGFiZWw9XCJjbG9zZVwiIG9uQ2xpY2s9e21vZGFsQ2xvc2V9PlxuICAgICAgICAgICAgICAgIDxGaVhDaXJjbGUgY2xhc3NOYW1lPVwidGV4dC00eGwgdGV4dC1zbGF0ZS01MDAgaG92ZXI6dGV4dC1wcmltYXJ5LWRhcmtcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgcmVmPXtib2R5RGl2UmVmfSAgY2xhc3NOYW1lPXtgb3ZlcmZsb3ctc2Nyb2xsICR7ZmxleENsYXNzZXN9IGgtW2NhbGMoMTAwdmgtMjMwcHgpXWB9PlxuICAgICAgICAgICAgICA8ZGl2IHJlZj17aW1hZ2VEaXZSZWZ9IGNsYXNzTmFtZT1cImltYWdlIGNvbnRhaW5lciBwLTAgdy1hdXRvIGgtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB4czpmbGV4LWluaXRpYWwgeHM6aXRlbXMtc3RhcnQgeHM6anVzdGlmeS1zdGFydFwiIHN0eWxlPXt7IHRyYW5zZm9ybTogYHNjYWxlKCR7em9vbX0pYCwgdHJhbnNmb3JtT3JpZ2luOiB0cmFuc2Zvcm1PcmlnaW4gfX0+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlPy5zcmMgfHwgXCJcIn1cbiAgICAgICAgICAgICAgICAgIGFsdD17aW1hZ2U/LmFsdCB8fCBcIlwifVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtpbWFnZT8uaGVpZ2h0IHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICB3aWR0aD17aW1hZ2U/LndpZHRoIHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvIHhzOnctYXV0byB4czpoLWZ1bGwgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwIHRyYW5zZm9ybS1ncHVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeS1kYXJrIHRleHQtY2VudGVyIG15LTQgdy1mdWxsIGZpeGVkIC1ib3R0b20tNCBsZWZ0LTAgYmctcHJpbWFyeS1saWdodCBib3JkZXItdCBib3JkZXItc2xhdGUtMzAwXCI+XG4gICAgICAgICA8ZGl2PlxuICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0Q29udHJvbChmYWxzZSl9XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldENvbnRyb2wodHJ1ZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NvbnRyb2wgP1xuICAgICAgICAgICAgICAoPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5LWRhcmsgdGV4dC1jZW50ZXIgZm9udC14cyBweC04IHotMjAgbXktNFwiPnZpZXcgZGVzY3JpcHRpb248L3A+KSA6XG4gICAgICAgICAgICAgICg8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnktZGFyayB0ZXh0LWNlbnRlciBweC04IHotMjAgbXktNFwiPntpbWFnZT8uYWx0IHx8IFwiXCJ9PC9wPilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgdy1mdWxsIGp1c3RpZnktY2VudGVyIGdhcC00IG1iLTRcIj4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uU3RhcnQ9ezxGaVpvb21Jbi8+fSB0aXRsZT0nWm9vbSBpbicgY2xpY2s9e2hhbmRsZVpvb21Jbn0vPlxuICAgICAgICAgICAgICA8QnV0dG9uIGljb25TdGFydD17PEZpWm9vbU91dC8+fSB0aXRsZT0nWm9vbSBvdXQnIGNsaWNrPXtoYW5kbGVab29tT3V0fS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICApfVxuICAgICAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJGaVhDaXJjbGUiLCJGaVpvb21JbiIsIkZpWm9vbU91dCIsIkZpQ2hldnJvbkRvd24iLCJGaUNoZXZyb25VcCIsIm1vdGlvbiIsIkFuaW1hdGVQcmVzZW5jZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiQnV0dG9uIiwiTW9kYWwiLCJpbWFnZSIsIm1vZGFsIiwibW9kYWxDbG9zZSIsImJvZHlEaXZSZWYiLCJpbWFnZURpdlJlZiIsIm1vZGFsUmVmIiwiem9vbSIsInNldFpvb20iLCJjb250cm9sIiwic2V0Q29udHJvbCIsInRyYW5zZm9ybU9yaWdpbiIsInNldFRyYW5zZm9ybU9yaWdpbiIsImZsZXhDbGFzc2VzIiwic2V0RmxleENsYXNzZXMiLCJzdG9yZWRTY3JvbGxQb3NpdGlvbiIsInNldFN0b3JlZFNjcm9sbFBvc2l0aW9uIiwid2luZG93Iiwic2Nyb2xsWSIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsInNldFRpbWVvdXQiLCJzY3JvbGxUbyIsInRvcCIsInJlbW92ZSIsImhhbmRsZVpvb21JbiIsInByZXZab29tIiwiaGFuZGxlWm9vbU91dCIsImJvZHlEaXYiLCJjdXJyZW50IiwiaW1hZ2VEaXYiLCJib2R5RGl2U2l6ZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImltYWdlRGl2U2l6ZSIsIm5ld0ZsZXhDbGFzc2VzIiwibmV3VHJhbnNmb3JtT3JpZ2luIiwid2lkdGgiLCJoZWlnaHQiLCJpbmNsdWRlcyIsInRyaW0iLCJkaXYiLCJyZWYiLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJhbmltYXRlIiwiZXhpdCIsInRyYW5zaXRpb24iLCJlYXNlIiwiZHVyYXRpb24iLCJjbGFzc05hbWUiLCJidXR0b24iLCJsYWJlbCIsIm9uQ2xpY2siLCJzdHlsZSIsInRyYW5zZm9ybSIsInNyYyIsImFsdCIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsInAiLCJpY29uU3RhcnQiLCJ0aXRsZSIsImNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/reusable/modal.jsx\n"));

/***/ })

});