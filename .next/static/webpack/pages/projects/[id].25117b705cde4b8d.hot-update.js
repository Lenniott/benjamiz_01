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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_FiChevronDown_FiChevronUp_FiXCircle_FiZoomIn_FiZoomOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=FiChevronDown,FiChevronUp,FiXCircle,FiZoomIn,FiZoomOut!=!react-icons/fi */ \"__barrel_optimize__?names=FiChevronDown,FiChevronUp,FiXCircle,FiZoomIn,FiZoomOut!=!./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_reusable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/reusable */ \"./components/reusable/index.jsx\");\n\nvar _s = $RefreshSig$();\n // Make sure to import Image from 'next/image'\n\n\n\n\nfunction Modal(param) {\n    let { image, modal, modalClose } = param;\n    _s();\n    const bodyDivRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const imageDivRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const modalRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [zoom, setZoom] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);\n    const [control, setControl] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [transformOrigin, setTransformOrigin] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"center\");\n    const [flexClasses, setFlexClasses] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"flex\");\n    const [storedScrollPosition, setStoredScrollPosition] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (modal) {\n            // Store the current scroll position and prevent scrolling\n            setStoredScrollPosition(window.scrollY);\n            document.body.classList.add(\"overflow-y-hidden\");\n            // Scroll to the top after a delay to allow for animation\n            setTimeout(()=>{\n                window.scrollTo({\n                    top: 0\n                });\n            }, 600);\n        } else {\n            // Restore the scroll position and allow scrolling\n            window.scrollTo({\n                top: storedScrollPosition\n            });\n            document.body.classList.remove(\"overflow-y-hidden\");\n        }\n        // Reset zoom level\n        setZoom(1);\n    }, [\n        modal\n    ]);\n    const handleZoomIn = ()=>{\n        setZoom((prevZoom)=>prevZoom + 0.25);\n    };\n    const handleZoomOut = ()=>{\n        setZoom((prevZoom)=>prevZoom > 1 ? prevZoom - 0.25 : prevZoom);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const bodyDiv = bodyDivRef.current;\n        const imageDiv = imageDivRef.current;\n        if (bodyDiv && imageDiv) {\n            const bodyDivSize = bodyDiv.getBoundingClientRect();\n            const imageDivSize = imageDiv.getBoundingClientRect();\n            let newFlexClasses = \"flex\";\n            let newTransformOrigin = \"\";\n            if (imageDivSize.width > bodyDivSize.width) {\n                newTransformOrigin = \"left\";\n            } else {\n                newFlexClasses += \" justify-center \";\n            }\n            if (imageDivSize.height > bodyDivSize.height) {\n                if (newTransformOrigin.includes(\"left\")) {\n                    newTransformOrigin += \" top\";\n                } else {\n                    newTransformOrigin = \"center top\";\n                }\n            } else {\n                newFlexClasses += \" items-center \";\n            }\n            setFlexClasses(newFlexClasses.trim());\n            setTransformOrigin(newTransformOrigin.trim());\n        }\n    }, [\n        zoom,\n        modal\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: modal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n            ref: modalRef,\n            initial: {\n                opacity: 0,\n                y: -180\n            },\n            animate: {\n                opacity: 1,\n                y: 0\n            },\n            exit: {\n                opacity: 0,\n                y: -180\n            },\n            transition: {\n                ease: \"easeInOut\",\n                duration: 0.3\n            },\n            className: \"bg-primary-light fixed top-0 left-0 w-screen h-screen z-50 opacity-95 py-8 duration-500\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pb-4 px-4 flex items-start justify-end \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            label: \"close\",\n                            onClick: modalClose,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiChevronDown_FiChevronUp_FiXCircle_FiZoomIn_FiZoomOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiXCircle, {\n                                className: \"text-4xl text-slate-500 hover:text-primary-dark\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                lineNumber: 100,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                            lineNumber: 99,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: bodyDivRef,\n                        className: \"overflow-scroll \".concat(flexClasses, \" bg-red-500 h-[calc(100vh-230px)]\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            ref: imageDivRef,\n                            className: \"image container p-0 w-auto h-full\",\n                            style: {\n                                transform: \"scale(\".concat(zoom, \")\"),\n                                transformOrigin: transformOrigin\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: (image === null || image === void 0 ? void 0 : image.src) || \"\",\n                                alt: (image === null || image === void 0 ? void 0 : image.alt) || \"\",\n                                height: (image === null || image === void 0 ? void 0 : image.height) || \"\",\n                                width: (image === null || image === void 0 ? void 0 : image.width) || \"\",\n                                className: \"w-auto h-full transition-transform duration-300 transform-gpu\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                lineNumber: 106,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                            lineNumber: 105,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-primary-dark text-center my-4 w-full fixed -bottom-4 left-0 bg-primary-light border-t border-slate-300\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"hidden-0 hover:hidden text-primary-dark text-center px-8 z-20 my-4\",\n                                    children: \"hover to view\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                    lineNumber: 129,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"hidden hover:hidden-0 text-primary-dark text-center px-8 z-20 my-4\",\n                                    children: (image === null || image === void 0 ? void 0 : image.alt) || \"\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                    lineNumber: 130,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center w-full justify-center gap-4 mb-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_reusable__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                            iconStart: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiChevronDown_FiChevronUp_FiXCircle_FiZoomIn_FiZoomOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiZoomIn, {}, void 0, false, void 0, void 0),\n                                            title: \"Zoom in\",\n                                            click: handleZoomIn\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                            lineNumber: 134,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_reusable__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                            iconStart: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiChevronDown_FiChevronUp_FiXCircle_FiZoomIn_FiZoomOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiZoomOut, {}, void 0, false, void 0, void 0),\n                                            title: \"Zoom out\",\n                                            click: handleZoomOut\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                            lineNumber: 135,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                    lineNumber: 133,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                            lineNumber: 118,\n                            columnNumber: 10\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                        lineNumber: 117,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                lineNumber: 97,\n                columnNumber: 9\n            }, this)\n        }, (image === null || image === void 0 ? void 0 : image.src) || \"\", false, {\n            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n            lineNumber: 88,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Modal, \"bZBKGzIBHXcCEopR+qtfG959a9M=\");\n_c = Modal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBT2xDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztXQTdDMUQ1QixDQUFBQSxrQkFBQUEsNEJBQUFBLE1BQU95RCxHQUFHLEtBQUk7Ozs7OztBQXVEM0I7R0F6SVMxRDtLQUFBQTtBQTJJVCwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3JldXNhYmxlL21vZGFsLmpzeD8zOTE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiOyAvLyBNYWtlIHN1cmUgdG8gaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyBGaVhDaXJjbGUsIEZpWm9vbUluLCBGaVpvb21PdXQgLEZpQ2hldnJvbkRvd24gLEZpQ2hldnJvblVwfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtCdXR0b259IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlXCI7XG5cblxuZnVuY3Rpb24gTW9kYWwoeyBpbWFnZSwgbW9kYWwsIG1vZGFsQ2xvc2UgfSkge1xuICBjb25zdCBib2R5RGl2UmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBpbWFnZURpdlJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgbW9kYWxSZWY9dXNlUmVmKG51bGwpO1xuICBjb25zdCBbem9vbSwgc2V0Wm9vbV0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW2NvbnRyb2wsIHNldENvbnRyb2xdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFt0cmFuc2Zvcm1PcmlnaW4sIHNldFRyYW5zZm9ybU9yaWdpbl0gPSB1c2VTdGF0ZShcImNlbnRlclwiKTtcbiAgY29uc3QgW2ZsZXhDbGFzc2VzLCBzZXRGbGV4Q2xhc3Nlc10gPSB1c2VTdGF0ZShcImZsZXhcIik7XG4gIGNvbnN0IFtzdG9yZWRTY3JvbGxQb3NpdGlvbiwgc2V0U3RvcmVkU2Nyb2xsUG9zaXRpb25dID0gdXNlU3RhdGUoMCk7XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChtb2RhbCkge1xuICAgICAgLy8gU3RvcmUgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIGFuZCBwcmV2ZW50IHNjcm9sbGluZ1xuICAgICAgc2V0U3RvcmVkU2Nyb2xsUG9zaXRpb24od2luZG93LnNjcm9sbFkpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdvdmVyZmxvdy15LWhpZGRlbicpO1xuXG4gICAgICAvLyBTY3JvbGwgdG8gdGhlIHRvcCBhZnRlciBhIGRlbGF5IHRvIGFsbG93IGZvciBhbmltYXRpb25cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAgfSk7XG4gICAgICB9LCA2MDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZXN0b3JlIHRoZSBzY3JvbGwgcG9zaXRpb24gYW5kIGFsbG93IHNjcm9sbGluZ1xuICAgICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiBzdG9yZWRTY3JvbGxQb3NpdGlvbiB9KTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmZsb3cteS1oaWRkZW4nKTtcbiAgICB9XG5cbiAgICAvLyBSZXNldCB6b29tIGxldmVsXG4gICAgc2V0Wm9vbSgxKTtcbiAgfSwgW21vZGFsXSk7XG5cbiAgY29uc3QgaGFuZGxlWm9vbUluID0gKCkgPT4ge1xuICAgIHNldFpvb20ocHJldlpvb20gPT4gcHJldlpvb20gKyAwLjI1KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVab29tT3V0ID0gKCkgPT4ge1xuICAgIHNldFpvb20ocHJldlpvb20gPT4gKHByZXZab29tID4gMSA/IHByZXZab29tIC0gMC4yNSA6IHByZXZab29tKSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBib2R5RGl2ID0gYm9keURpdlJlZi5jdXJyZW50O1xuICAgIGNvbnN0IGltYWdlRGl2ID0gaW1hZ2VEaXZSZWYuY3VycmVudDtcbiAgXG4gICAgaWYgKGJvZHlEaXYgJiYgaW1hZ2VEaXYpIHtcbiAgICAgIGNvbnN0IGJvZHlEaXZTaXplID0gYm9keURpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IGltYWdlRGl2U2l6ZSA9IGltYWdlRGl2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBcbiAgICAgIGxldCBuZXdGbGV4Q2xhc3NlcyA9IFwiZmxleFwiO1xuICAgICAgbGV0IG5ld1RyYW5zZm9ybU9yaWdpbiA9IFwiXCI7XG4gIFxuICAgICAgaWYgKGltYWdlRGl2U2l6ZS53aWR0aCA+IGJvZHlEaXZTaXplLndpZHRoKSB7XG4gICAgICAgIG5ld1RyYW5zZm9ybU9yaWdpbiA9IFwibGVmdFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3RmxleENsYXNzZXMgKz0gXCIganVzdGlmeS1jZW50ZXIgXCI7XG4gICAgICB9XG4gIFxuICAgICAgaWYgKGltYWdlRGl2U2l6ZS5oZWlnaHQgPiBib2R5RGl2U2l6ZS5oZWlnaHQpIHtcbiAgICAgICAgaWYgKG5ld1RyYW5zZm9ybU9yaWdpbi5pbmNsdWRlcyhcImxlZnRcIikpIHtcbiAgICAgICAgICBuZXdUcmFuc2Zvcm1PcmlnaW4gKz0gXCIgdG9wXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3VHJhbnNmb3JtT3JpZ2luID0gXCJjZW50ZXIgdG9wXCI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0ZsZXhDbGFzc2VzICs9IFwiIGl0ZW1zLWNlbnRlciBcIjtcbiAgICAgIH1cbiAgXG4gICAgICBzZXRGbGV4Q2xhc3NlcyhuZXdGbGV4Q2xhc3Nlcy50cmltKCkpO1xuICAgICAgc2V0VHJhbnNmb3JtT3JpZ2luKG5ld1RyYW5zZm9ybU9yaWdpbi50cmltKCkpO1xuICAgIH1cbiAgfSwgW3pvb20sIG1vZGFsXSk7XG4gIFxuXG5cblxuXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge21vZGFsICYmIChcblxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICByZWY9e21vZGFsUmVmfVxuICAgICAgICBrZXk9e2ltYWdlPy5zcmMgfHwgXCJcIn1cbiAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAtMTgwIH19XG4gICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAsIHk6IC0xODAgfX0gLy8gVGhpcyBsaW5lIHdpbGwgbWFrZSB0aGUgbW9kYWwgYW5pbWF0ZSBvdXQgd2l0aCB0aGVzZSB2YWx1ZXNcbiAgICAgICAgdHJhbnNpdGlvbj17eyBlYXNlOiBcImVhc2VJbk91dFwiLCBkdXJhdGlvbjogMC4zIH19XG4gICAgICAgIGNsYXNzTmFtZT1cImJnLXByaW1hcnktbGlnaHQgZml4ZWQgdG9wLTAgbGVmdC0wIHctc2NyZWVuIGgtc2NyZWVuIHotNTAgb3BhY2l0eS05NSBweS04IGR1cmF0aW9uLTUwMFwiXG4gICAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTQgcHgtNCBmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktZW5kIFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBsYWJlbD1cImNsb3NlXCIgb25DbGljaz17bW9kYWxDbG9zZX0+XG4gICAgICAgICAgICAgICAgPEZpWENpcmNsZSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCB0ZXh0LXNsYXRlLTUwMCBob3Zlcjp0ZXh0LXByaW1hcnktZGFya1wiIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiByZWY9e2JvZHlEaXZSZWZ9ICBjbGFzc05hbWU9e2BvdmVyZmxvdy1zY3JvbGwgJHtmbGV4Q2xhc3Nlc30gYmctcmVkLTUwMCBoLVtjYWxjKDEwMHZoLTIzMHB4KV1gfT5cbiAgICAgICAgICAgICAgPGRpdiByZWY9e2ltYWdlRGl2UmVmfSBjbGFzc05hbWU9XCJpbWFnZSBjb250YWluZXIgcC0wIHctYXV0byBoLWZ1bGxcIiBzdHlsZT17eyB0cmFuc2Zvcm06IGBzY2FsZSgke3pvb219KWAsIHRyYW5zZm9ybU9yaWdpbjogdHJhbnNmb3JtT3JpZ2luIH19PlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZT8uc3JjIHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICBhbHQ9e2ltYWdlPy5hbHQgfHwgXCJcIn1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17aW1hZ2U/LmhlaWdodCB8fCBcIlwifVxuICAgICAgICAgICAgICAgICAgd2lkdGg9e2ltYWdlPy53aWR0aCB8fCBcIlwifVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1hdXRvIGgtZnVsbCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgdHJhbnNmb3JtLWdwdVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5LWRhcmsgdGV4dC1jZW50ZXIgbXktNCB3LWZ1bGwgZml4ZWQgLWJvdHRvbS00IGxlZnQtMCBiZy1wcmltYXJ5LWxpZ2h0IGJvcmRlci10IGJvcmRlci1zbGF0ZS0zMDBcIj5cbiAgICAgICAgIDxkaXY+XG4gICAgICAgICB7LyogPGRpdiBcbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0Q29udHJvbChmYWxzZSl9XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldENvbnRyb2wodHJ1ZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NvbnRyb2wgP1xuICAgICAgICAgICAgICAoPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5LWRhcmsgdGV4dC1jZW50ZXIgcHgtOCB6LTIwIG15LTRcIj5ob3ZlciB0byB2aWV3PC9wPikgOlxuICAgICAgICAgICAgICAoPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5LWRhcmsgdGV4dC1jZW50ZXIgcHgtOCB6LTIwIG15LTRcIj57aW1hZ2U/LmFsdCB8fCBcIlwifTwvcD4pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+ICovfVxuXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImhpZGRlbi0wIGhvdmVyOmhpZGRlbiB0ZXh0LXByaW1hcnktZGFyayB0ZXh0LWNlbnRlciBweC04IHotMjAgbXktNFwiPmhvdmVyIHRvIHZpZXc8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImhpZGRlbiBob3ZlcjpoaWRkZW4tMCB0ZXh0LXByaW1hcnktZGFyayB0ZXh0LWNlbnRlciBweC04IHotMjAgbXktNFwiPntpbWFnZT8uYWx0IHx8IFwiXCJ9PC9wPlxuXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgdy1mdWxsIGp1c3RpZnktY2VudGVyIGdhcC00IG1iLTRcIj4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uU3RhcnQ9ezxGaVpvb21Jbi8+fSB0aXRsZT0nWm9vbSBpbicgY2xpY2s9e2hhbmRsZVpvb21Jbn0vPlxuICAgICAgICAgICAgICA8QnV0dG9uIGljb25TdGFydD17PEZpWm9vbU91dC8+fSB0aXRsZT0nWm9vbSBvdXQnIGNsaWNrPXtoYW5kbGVab29tT3V0fS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICApfVxuICAgICAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJGaVhDaXJjbGUiLCJGaVpvb21JbiIsIkZpWm9vbU91dCIsIkZpQ2hldnJvbkRvd24iLCJGaUNoZXZyb25VcCIsIm1vdGlvbiIsIkFuaW1hdGVQcmVzZW5jZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiQnV0dG9uIiwiTW9kYWwiLCJpbWFnZSIsIm1vZGFsIiwibW9kYWxDbG9zZSIsImJvZHlEaXZSZWYiLCJpbWFnZURpdlJlZiIsIm1vZGFsUmVmIiwiem9vbSIsInNldFpvb20iLCJjb250cm9sIiwic2V0Q29udHJvbCIsInRyYW5zZm9ybU9yaWdpbiIsInNldFRyYW5zZm9ybU9yaWdpbiIsImZsZXhDbGFzc2VzIiwic2V0RmxleENsYXNzZXMiLCJzdG9yZWRTY3JvbGxQb3NpdGlvbiIsInNldFN0b3JlZFNjcm9sbFBvc2l0aW9uIiwid2luZG93Iiwic2Nyb2xsWSIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsInNldFRpbWVvdXQiLCJzY3JvbGxUbyIsInRvcCIsInJlbW92ZSIsImhhbmRsZVpvb21JbiIsInByZXZab29tIiwiaGFuZGxlWm9vbU91dCIsImJvZHlEaXYiLCJjdXJyZW50IiwiaW1hZ2VEaXYiLCJib2R5RGl2U2l6ZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImltYWdlRGl2U2l6ZSIsIm5ld0ZsZXhDbGFzc2VzIiwibmV3VHJhbnNmb3JtT3JpZ2luIiwid2lkdGgiLCJoZWlnaHQiLCJpbmNsdWRlcyIsInRyaW0iLCJkaXYiLCJyZWYiLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJhbmltYXRlIiwiZXhpdCIsInRyYW5zaXRpb24iLCJlYXNlIiwiZHVyYXRpb24iLCJjbGFzc05hbWUiLCJidXR0b24iLCJsYWJlbCIsIm9uQ2xpY2siLCJzdHlsZSIsInRyYW5zZm9ybSIsInNyYyIsImFsdCIsInAiLCJpY29uU3RhcnQiLCJ0aXRsZSIsImNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/reusable/modal.jsx\n"));

/***/ })

});