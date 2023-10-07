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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_FiChevronDown_FiChevronUp_FiXCircle_FiZoomIn_FiZoomOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=FiChevronDown,FiChevronUp,FiXCircle,FiZoomIn,FiZoomOut!=!react-icons/fi */ \"__barrel_optimize__?names=FiChevronDown,FiChevronUp,FiXCircle,FiZoomIn,FiZoomOut!=!./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_reusable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/reusable */ \"./components/reusable/index.jsx\");\n\nvar _s = $RefreshSig$();\n // Make sure to import Image from 'next/image'\n\n\n\n\nfunction Modal(param) {\n    let { image, modal, modalClose } = param;\n    _s();\n    const bodyDivRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const imageDivRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const modalRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [zoom, setZoom] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);\n    const [control, setControl] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [transformOrigin, setTransformOrigin] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"center\");\n    const [flexClasses, setFlexClasses] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"flex\");\n    const [storedScrollPosition, setStoredScrollPosition] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (modal) {\n            // Store the current scroll position and prevent scrolling\n            setStoredScrollPosition(window.scrollY);\n            document.body.classList.add(\"overflow-y-hidden\");\n            // Scroll to the top after a delay to allow for animation\n            setTimeout(()=>{\n                window.scrollTo({\n                    top: 0\n                });\n            }, 600);\n        } else {\n            // Restore the scroll position and allow scrolling\n            window.scrollTo({\n                top: storedScrollPosition\n            });\n            document.body.classList.remove(\"overflow-y-hidden\");\n        }\n        // Reset zoom level\n        setZoom(1);\n    }, [\n        modal\n    ]);\n    const handleZoomIn = ()=>{\n        setZoom((prevZoom)=>prevZoom + 0.25);\n    };\n    const handleZoomOut = ()=>{\n        setZoom((prevZoom)=>prevZoom > 1 ? prevZoom - 0.25 : prevZoom);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const bodyDiv = bodyDivRef.current;\n        const imageDiv = imageDivRef.current;\n        if (bodyDiv && imageDiv) {\n            const bodyDivSize = bodyDiv.getBoundingClientRect();\n            const imageDivSize = imageDiv.getBoundingClientRect();\n            let newFlexClasses = \"flex  \";\n            let newTransformOrigin = \"center\";\n            if (imageDivSize.width > bodyDivSize.width) {\n                newTransformOrigin = \"left\";\n            } else {\n                newFlexClasses += \" justify-center \";\n            }\n            if (imageDivSize.height > bodyDivSize.height) {\n                if (newTransformOrigin.includes(\"left\")) {\n                    newTransformOrigin += \" top\";\n                } else {\n                    newTransformOrigin = \"center top\";\n                }\n            } else {\n                newFlexClasses += \" items-center \";\n            }\n            setFlexClasses(newFlexClasses.trim());\n            setTransformOrigin(newTransformOrigin.trim());\n        }\n    }, [\n        zoom,\n        modal\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: modal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n            ref: modalRef,\n            initial: {\n                opacity: 0,\n                y: -180\n            },\n            animate: {\n                opacity: 1,\n                y: 0\n            },\n            exit: {\n                opacity: 0,\n                y: -180\n            },\n            transition: {\n                ease: \"easeInOut\",\n                duration: 0.3\n            },\n            className: \"bg-primary-light fixed top-0 left-0 w-screen h-screen z-50 opacity-95 py-8 duration-500\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pb-4 px-4 flex items-start justify-end \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            label: \"close\",\n                            onClick: modalClose,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiChevronDown_FiChevronUp_FiXCircle_FiZoomIn_FiZoomOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiXCircle, {\n                                className: \"text-4xl text-slate-500 hover:text-primary-dark\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                lineNumber: 100,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                            lineNumber: 99,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: bodyDivRef,\n                        className: \"overflow-scroll \".concat(flexClasses, \" bg-red-500 h-[calc(100vh-230px)]\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            ref: imageDivRef,\n                            className: \"image container p-0 w-auto h-full \".concat(flexClasses),\n                            style: {\n                                transform: \"scale(\".concat(zoom, \")\"),\n                                transformOrigin: transformOrigin\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: (image === null || image === void 0 ? void 0 : image.src) || \"\",\n                                alt: (image === null || image === void 0 ? void 0 : image.alt) || \"\",\n                                height: (image === null || image === void 0 ? void 0 : image.height) || \"\",\n                                width: (image === null || image === void 0 ? void 0 : image.width) || \"\",\n                                className: \"w-full h-auto transition-transform duration-300 transform-gpu\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                lineNumber: 106,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                            lineNumber: 105,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-primary-dark text-center my-4 w-full fixed -bottom-4 left-0 bg-primary-light border-t border-slate-300\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    onMouseEnter: ()=>setControl(false),\n                                    onMouseLeave: ()=>setControl(true),\n                                    children: control ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-primary-dark text-center text-xs px-8 z-20 my-4\",\n                                        children: \"view description\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                        lineNumber: 124,\n                                        columnNumber: 16\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-primary-dark text-center px-8 z-20 my-4\",\n                                        children: (image === null || image === void 0 ? void 0 : image.alt) || \"\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                        lineNumber: 125,\n                                        columnNumber: 16\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                    lineNumber: 119,\n                                    columnNumber: 10\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center w-full justify-center gap-4 mb-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_reusable__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                            iconStart: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiChevronDown_FiChevronUp_FiXCircle_FiZoomIn_FiZoomOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiZoomIn, {}, void 0, false, void 0, void 0),\n                                            title: \"Zoom in\",\n                                            click: handleZoomIn\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                            lineNumber: 129,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_reusable__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                            iconStart: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiChevronDown_FiChevronUp_FiXCircle_FiZoomIn_FiZoomOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiZoomOut, {}, void 0, false, void 0, void 0),\n                                            title: \"Zoom out\",\n                                            click: handleZoomOut\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                            lineNumber: 130,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                    lineNumber: 128,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                            lineNumber: 118,\n                            columnNumber: 10\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                        lineNumber: 117,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                lineNumber: 97,\n                columnNumber: 9\n            }, this)\n        }, (image === null || image === void 0 ? void 0 : image.src) || \"\", false, {\n            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n            lineNumber: 88,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Modal, \"bZBKGzIBHXcCEopR+qtfG959a9M=\");\n_c = Modal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NENBQVVDLE9BQU90Qzs7Ozs7O3NEQUN2RCw4REFBQzVCLHdEQUFNQTs0Q0FBQ2dFLHlCQUFXLDhEQUFDeEUsbUlBQVNBOzRDQUFJeUUsT0FBTTs0Q0FBV0MsT0FBT3BDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztXQXhDMUQ1QixDQUFBQSxrQkFBQUEsNEJBQUFBLE1BQU95RCxHQUFHLEtBQUk7Ozs7OztBQWtEM0I7R0FwSVMxRDtLQUFBQTtBQXNJVCwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3JldXNhYmxlL21vZGFsLmpzeD8zOTE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiOyAvLyBNYWtlIHN1cmUgdG8gaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyBGaVhDaXJjbGUsIEZpWm9vbUluLCBGaVpvb21PdXQgLEZpQ2hldnJvbkRvd24gLEZpQ2hldnJvblVwfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtCdXR0b259IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlXCI7XG5cblxuZnVuY3Rpb24gTW9kYWwoeyBpbWFnZSwgbW9kYWwsIG1vZGFsQ2xvc2UgfSkge1xuICBjb25zdCBib2R5RGl2UmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBpbWFnZURpdlJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgbW9kYWxSZWY9dXNlUmVmKG51bGwpO1xuICBjb25zdCBbem9vbSwgc2V0Wm9vbV0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW2NvbnRyb2wsIHNldENvbnRyb2xdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFt0cmFuc2Zvcm1PcmlnaW4sIHNldFRyYW5zZm9ybU9yaWdpbl0gPSB1c2VTdGF0ZShcImNlbnRlclwiKTtcbiAgY29uc3QgW2ZsZXhDbGFzc2VzLCBzZXRGbGV4Q2xhc3Nlc10gPSB1c2VTdGF0ZShcImZsZXhcIik7XG4gIGNvbnN0IFtzdG9yZWRTY3JvbGxQb3NpdGlvbiwgc2V0U3RvcmVkU2Nyb2xsUG9zaXRpb25dID0gdXNlU3RhdGUoMCk7XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChtb2RhbCkge1xuICAgICAgLy8gU3RvcmUgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIGFuZCBwcmV2ZW50IHNjcm9sbGluZ1xuICAgICAgc2V0U3RvcmVkU2Nyb2xsUG9zaXRpb24od2luZG93LnNjcm9sbFkpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdvdmVyZmxvdy15LWhpZGRlbicpO1xuXG4gICAgICAvLyBTY3JvbGwgdG8gdGhlIHRvcCBhZnRlciBhIGRlbGF5IHRvIGFsbG93IGZvciBhbmltYXRpb25cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAgfSk7XG4gICAgICB9LCA2MDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZXN0b3JlIHRoZSBzY3JvbGwgcG9zaXRpb24gYW5kIGFsbG93IHNjcm9sbGluZ1xuICAgICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiBzdG9yZWRTY3JvbGxQb3NpdGlvbiB9KTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmZsb3cteS1oaWRkZW4nKTtcbiAgICB9XG5cbiAgICAvLyBSZXNldCB6b29tIGxldmVsXG4gICAgc2V0Wm9vbSgxKTtcbiAgfSwgW21vZGFsXSk7XG5cbiAgY29uc3QgaGFuZGxlWm9vbUluID0gKCkgPT4ge1xuICAgIHNldFpvb20ocHJldlpvb20gPT4gcHJldlpvb20gKyAwLjI1KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVab29tT3V0ID0gKCkgPT4ge1xuICAgIHNldFpvb20ocHJldlpvb20gPT4gKHByZXZab29tID4gMSA/IHByZXZab29tIC0gMC4yNSA6IHByZXZab29tKSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBib2R5RGl2ID0gYm9keURpdlJlZi5jdXJyZW50O1xuICAgIGNvbnN0IGltYWdlRGl2ID0gaW1hZ2VEaXZSZWYuY3VycmVudDtcbiAgXG4gICAgaWYgKGJvZHlEaXYgJiYgaW1hZ2VEaXYpIHtcbiAgICAgIGNvbnN0IGJvZHlEaXZTaXplID0gYm9keURpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IGltYWdlRGl2U2l6ZSA9IGltYWdlRGl2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBcbiAgICAgIGxldCBuZXdGbGV4Q2xhc3NlcyA9IFwiZmxleCAgXCI7XG4gICAgICBsZXQgbmV3VHJhbnNmb3JtT3JpZ2luID0gXCJjZW50ZXJcIjtcbiAgXG4gICAgICBpZiAoaW1hZ2VEaXZTaXplLndpZHRoID4gYm9keURpdlNpemUud2lkdGgpIHtcbiAgICAgICAgbmV3VHJhbnNmb3JtT3JpZ2luID0gXCJsZWZ0XCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdGbGV4Q2xhc3NlcyArPSBcIiBqdXN0aWZ5LWNlbnRlciBcIjtcbiAgICAgIH1cbiAgXG4gICAgICBpZiAoaW1hZ2VEaXZTaXplLmhlaWdodCA+IGJvZHlEaXZTaXplLmhlaWdodCkge1xuICAgICAgICBpZiAobmV3VHJhbnNmb3JtT3JpZ2luLmluY2x1ZGVzKFwibGVmdFwiKSkge1xuICAgICAgICAgIG5ld1RyYW5zZm9ybU9yaWdpbiArPSBcIiB0b3BcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdUcmFuc2Zvcm1PcmlnaW4gPSBcImNlbnRlciB0b3BcIjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3RmxleENsYXNzZXMgKz0gXCIgaXRlbXMtY2VudGVyIFwiO1xuICAgICAgfVxuICBcbiAgICAgIHNldEZsZXhDbGFzc2VzKG5ld0ZsZXhDbGFzc2VzLnRyaW0oKSk7XG4gICAgICBzZXRUcmFuc2Zvcm1PcmlnaW4obmV3VHJhbnNmb3JtT3JpZ2luLnRyaW0oKSk7XG4gICAgfVxuICB9LCBbem9vbSwgbW9kYWxdKTtcbiAgXG5cblxuXG5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7bW9kYWwgJiYgKFxuXG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIHJlZj17bW9kYWxSZWZ9XG4gICAgICAgIGtleT17aW1hZ2U/LnNyYyB8fCBcIlwifVxuICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IC0xODAgfX1cbiAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCwgeTogLTE4MCB9fSAvLyBUaGlzIGxpbmUgd2lsbCBtYWtlIHRoZSBtb2RhbCBhbmltYXRlIG91dCB3aXRoIHRoZXNlIHZhbHVlc1xuICAgICAgICB0cmFuc2l0aW9uPXt7IGVhc2U6IFwiZWFzZUluT3V0XCIsIGR1cmF0aW9uOiAwLjMgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwiYmctcHJpbWFyeS1saWdodCBmaXhlZCB0b3AtMCBsZWZ0LTAgdy1zY3JlZW4gaC1zY3JlZW4gei01MCBvcGFjaXR5LTk1IHB5LTggZHVyYXRpb24tNTAwXCJcbiAgICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItNCBweC00IGZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1lbmQgXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGxhYmVsPVwiY2xvc2VcIiBvbkNsaWNrPXttb2RhbENsb3NlfT5cbiAgICAgICAgICAgICAgICA8RmlYQ2lyY2xlIGNsYXNzTmFtZT1cInRleHQtNHhsIHRleHQtc2xhdGUtNTAwIGhvdmVyOnRleHQtcHJpbWFyeS1kYXJrXCIgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHJlZj17Ym9keURpdlJlZn0gIGNsYXNzTmFtZT17YG92ZXJmbG93LXNjcm9sbCAke2ZsZXhDbGFzc2VzfSBiZy1yZWQtNTAwIGgtW2NhbGMoMTAwdmgtMjMwcHgpXWB9PlxuICAgICAgICAgICAgICA8ZGl2IHJlZj17aW1hZ2VEaXZSZWZ9IGNsYXNzTmFtZT17YGltYWdlIGNvbnRhaW5lciBwLTAgdy1hdXRvIGgtZnVsbCAke2ZsZXhDbGFzc2VzfWB9IHN0eWxlPXt7IHRyYW5zZm9ybTogYHNjYWxlKCR7em9vbX0pYCwgdHJhbnNmb3JtT3JpZ2luOiB0cmFuc2Zvcm1PcmlnaW4gfX0+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlPy5zcmMgfHwgXCJcIn1cbiAgICAgICAgICAgICAgICAgIGFsdD17aW1hZ2U/LmFsdCB8fCBcIlwifVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtpbWFnZT8uaGVpZ2h0IHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICB3aWR0aD17aW1hZ2U/LndpZHRoIHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0tZ3B1XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnktZGFyayB0ZXh0LWNlbnRlciBteS00IHctZnVsbCBmaXhlZCAtYm90dG9tLTQgbGVmdC0wIGJnLXByaW1hcnktbGlnaHQgYm9yZGVyLXQgYm9yZGVyLXNsYXRlLTMwMFwiPlxuICAgICAgICAgPGRpdj5cbiAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldENvbnRyb2woZmFsc2UpfVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRDb250cm9sKHRydWUpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjb250cm9sID9cbiAgICAgICAgICAgICAgKDxwIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeS1kYXJrIHRleHQtY2VudGVyIHRleHQteHMgcHgtOCB6LTIwIG15LTRcIj52aWV3IGRlc2NyaXB0aW9uPC9wPikgOlxuICAgICAgICAgICAgICAoPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5LWRhcmsgdGV4dC1jZW50ZXIgcHgtOCB6LTIwIG15LTRcIj57aW1hZ2U/LmFsdCB8fCBcIlwifTwvcD4pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHctZnVsbCBqdXN0aWZ5LWNlbnRlciBnYXAtNCBtYi00XCI+ICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxCdXR0b24gaWNvblN0YXJ0PXs8Rmlab29tSW4vPn0gdGl0bGU9J1pvb20gaW4nIGNsaWNrPXtoYW5kbGVab29tSW59Lz5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uU3RhcnQ9ezxGaVpvb21PdXQvPn0gdGl0bGU9J1pvb20gb3V0JyBjbGljaz17aGFuZGxlWm9vbU91dH0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgKX1cbiAgICAgICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiRmlYQ2lyY2xlIiwiRmlab29tSW4iLCJGaVpvb21PdXQiLCJGaUNoZXZyb25Eb3duIiwiRmlDaGV2cm9uVXAiLCJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkJ1dHRvbiIsIk1vZGFsIiwiaW1hZ2UiLCJtb2RhbCIsIm1vZGFsQ2xvc2UiLCJib2R5RGl2UmVmIiwiaW1hZ2VEaXZSZWYiLCJtb2RhbFJlZiIsInpvb20iLCJzZXRab29tIiwiY29udHJvbCIsInNldENvbnRyb2wiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJzZXRUcmFuc2Zvcm1PcmlnaW4iLCJmbGV4Q2xhc3NlcyIsInNldEZsZXhDbGFzc2VzIiwic3RvcmVkU2Nyb2xsUG9zaXRpb24iLCJzZXRTdG9yZWRTY3JvbGxQb3NpdGlvbiIsIndpbmRvdyIsInNjcm9sbFkiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRUaW1lb3V0Iiwic2Nyb2xsVG8iLCJ0b3AiLCJyZW1vdmUiLCJoYW5kbGVab29tSW4iLCJwcmV2Wm9vbSIsImhhbmRsZVpvb21PdXQiLCJib2R5RGl2IiwiY3VycmVudCIsImltYWdlRGl2IiwiYm9keURpdlNpemUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJpbWFnZURpdlNpemUiLCJuZXdGbGV4Q2xhc3NlcyIsIm5ld1RyYW5zZm9ybU9yaWdpbiIsIndpZHRoIiwiaGVpZ2h0IiwiaW5jbHVkZXMiLCJ0cmltIiwiZGl2IiwicmVmIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5IiwiYW5pbWF0ZSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZWFzZSIsImR1cmF0aW9uIiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwibGFiZWwiLCJvbkNsaWNrIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJzcmMiLCJhbHQiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJwIiwiaWNvblN0YXJ0IiwidGl0bGUiLCJjbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/reusable/modal.jsx\n"));

/***/ })

});