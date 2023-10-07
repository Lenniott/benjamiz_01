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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_FiXCircle_FiZoomIn_FiZoomOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=FiXCircle,FiZoomIn,FiZoomOut!=!react-icons/fi */ \"__barrel_optimize__?names=FiXCircle,FiZoomIn,FiZoomOut!=!./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_reusable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/reusable */ \"./components/reusable/index.jsx\");\n\nvar _s = $RefreshSig$();\n // Make sure to import Image from 'next/image'\n\n\n\n\nfunction Modal(param) {\n    let { image, modal, modalClose } = param;\n    _s();\n    const bodyDivRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const imageDivRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [zoom, setZoom] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);\n    const [transformOrigin, setTransformOrigin] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"center\");\n    const [flexClasses, setFlexClasses] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"flex\");\n    const [storedScrollPosition, setStoredScrollPosition] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (modal) {\n            // Store the current scroll position\n            setStoredScrollPosition(window.scrollY);\n            // Additional code for when the modal opens\n            document.body.classList.add(\"overflow-y-hidden\");\n            // Scroll to the top\n            setTimeout(()=>{\n                window.scrollTo({\n                    top: 0,\n                    behavior: \"smooth\"\n                });\n            }, 1000); // 300 milliseconds = 0.3 seconds\n        } else {\n            // Restore the scroll position\n            window.scrollTo({\n                top: storedScrollPosition\n            });\n            // Additional code for when the modal closes\n            document.body.classList.remove(\"overflow-y-hidden\");\n        }\n        setZoom(1);\n    }, [\n        modal\n    ]);\n    const handleZoomIn = ()=>{\n        setZoom((prevZoom)=>prevZoom + 0.25);\n    };\n    const handleZoomOut = ()=>{\n        setZoom((prevZoom)=>prevZoom > 1 ? prevZoom - 0.25 : prevZoom);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        console.log(\"Modal state:\", modal);\n        if (modal) {\n            document.body.classList.add(\"overflow-y-hidden\");\n        } else {\n            document.body.classList.remove(\"overflow-y-hidden\");\n        }\n    }, [\n        modal\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const bodyDiv = bodyDivRef.current;\n        const imageDiv = imageDivRef.current;\n        if (bodyDiv && imageDiv) {\n            const bodyDivSize = bodyDiv.getBoundingClientRect();\n            const imageDivSize = imageDiv.getBoundingClientRect();\n            if (imageDivSize.width > bodyDivSize.width) {\n                setFlexClasses(\"flex\");\n                setTransformOrigin(\"top left\");\n            } else {\n                setFlexClasses(\"flex justify-center items-center\");\n                setTransformOrigin(\"center\");\n            }\n        }\n    }, [\n        zoom,\n        modal\n    ]); // Re-run the effect when 'zoom' changes\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: modal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n            initial: {\n                opacity: 0,\n                y: -180\n            },\n            animate: {\n                opacity: 1,\n                y: 0\n            },\n            exit: {\n                opacity: 0,\n                y: -180\n            },\n            transition: {\n                ease: \"easeInOut\",\n                duration: 0.3\n            },\n            className: \"bg-primary-light fixed top-0 left-0 w-screen h-screen z-50 opacity-95 py-8 duration-500\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pb-4 px-4 flex items-start justify-end \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            label: \"close\",\n                            onClick: modalClose,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiXCircle_FiZoomIn_FiZoomOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiXCircle, {\n                                className: \"text-4xl text-slate-500 hover:text-primary-dark\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                lineNumber: 95,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                            lineNumber: 94,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: bodyDivRef,\n                        className: \"overflow-scroll \".concat(flexClasses),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            ref: imageDivRef,\n                            className: \"image container p-0 w-auto sm:h-[65vh]\",\n                            style: {\n                                transform: \"scale(\".concat(zoom, \")\"),\n                                transformOrigin: transformOrigin\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: (image === null || image === void 0 ? void 0 : image.src) || \"\",\n                                alt: (image === null || image === void 0 ? void 0 : image.alt) || \"\",\n                                height: (image === null || image === void 0 ? void 0 : image.height) || \"\",\n                                width: (image === null || image === void 0 ? void 0 : image.width) || \"\",\n                                className: \"w-auto h-full transition-transform duration-300 transform-gpu\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                lineNumber: 101,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                            lineNumber: 100,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-primary-dark text-center mt-4 px-8 z-20\",\n                        children: (image === null || image === void 0 ? void 0 : image.alt) || \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                        lineNumber: 111,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-primary-dark text-center my-4 w-full fixed bottom-0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center items-center gap-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_reusable__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                    iconStart: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiXCircle_FiZoomIn_FiZoomOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiZoomIn, {}, void 0, false, void 0, void 0),\n                                    title: \"Zoom in\",\n                                    className: \"bg-white py-1 px-2\",\n                                    click: handleZoomIn\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                    lineNumber: 114,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_reusable__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                    iconStart: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiXCircle_FiZoomIn_FiZoomOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiZoomOut, {}, void 0, false, void 0, void 0),\n                                    title: \"Zoom out\",\n                                    className: \"bg-white py-1 px-2\",\n                                    click: handleZoomOut\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                    lineNumber: 115,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                            lineNumber: 113,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                        lineNumber: 112,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                lineNumber: 92,\n                columnNumber: 9\n            }, this)\n        }, (image === null || image === void 0 ? void 0 : image.src) || \"\", false, {\n            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n            lineNumber: 84,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Modal, \"uIC/DGaSEsHPilOjnGh72BYUpPI=\");\n_c = Modal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXVzYWJsZS9tb2RhbC5qc3g/MzkxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjsgLy8gTWFrZSBzdXJlIHRvIGltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgRmlYQ2lyY2xlLCBGaVpvb21JbiwgRmlab29tT3V0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZVwiO1xuXG5cbmZ1bmN0aW9uIE1vZGFsKHsgaW1hZ2UsIG1vZGFsLCBtb2RhbENsb3NlIH0pIHtcbiAgY29uc3QgYm9keURpdlJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgaW1hZ2VEaXZSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IFt6b29tLCBzZXRab29tXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbdHJhbnNmb3JtT3JpZ2luLCBzZXRUcmFuc2Zvcm1PcmlnaW5dID0gdXNlU3RhdGUoXCJjZW50ZXJcIik7XG4gIGNvbnN0IFtmbGV4Q2xhc3Nlcywgc2V0RmxleENsYXNzZXNdID0gdXNlU3RhdGUoXCJmbGV4XCIpO1xuICBjb25zdCBbc3RvcmVkU2Nyb2xsUG9zaXRpb24sIHNldFN0b3JlZFNjcm9sbFBvc2l0aW9uXSA9IHVzZVN0YXRlKDApO1xuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobW9kYWwpIHtcbiAgICAgIC8vIFN0b3JlIHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvblxuICAgICAgc2V0U3RvcmVkU2Nyb2xsUG9zaXRpb24od2luZG93LnNjcm9sbFkpO1xuICAgICAgLy8gQWRkaXRpb25hbCBjb2RlIGZvciB3aGVuIHRoZSBtb2RhbCBvcGVuc1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdvdmVyZmxvdy15LWhpZGRlbicpO1xuICAgICAgLy8gU2Nyb2xsIHRvIHRoZSB0b3BcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICAgIH0pO1xuICAgICAgfSwgMTAwMCk7IC8vIDMwMCBtaWxsaXNlY29uZHMgPSAwLjMgc2Vjb25kc1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZXN0b3JlIHRoZSBzY3JvbGwgcG9zaXRpb25cbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgIHRvcDogc3RvcmVkU2Nyb2xsUG9zaXRpb24sXG4gICAgICB9KTtcbiAgICAgIC8vIEFkZGl0aW9uYWwgY29kZSBmb3Igd2hlbiB0aGUgbW9kYWwgY2xvc2VzXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJmbG93LXktaGlkZGVuJyk7XG4gICAgfVxuICAgIHNldFpvb20oMSk7XG4gIH0sIFttb2RhbF0pO1xuXG5cbiAgY29uc3QgaGFuZGxlWm9vbUluID0gKCkgPT4ge1xuICAgIHNldFpvb20oKHByZXZab29tKSA9PiBwcmV2Wm9vbSArIDAuMjUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVpvb21PdXQgPSAoKSA9PiB7XG4gICAgc2V0Wm9vbSgocHJldlpvb20pID0+IChwcmV2Wm9vbSA+IDEgPyBwcmV2Wm9vbSAtIDAuMjUgOiBwcmV2Wm9vbSkpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJNb2RhbCBzdGF0ZTpcIiwgbW9kYWwpOyBcbiAgICBpZiAobW9kYWwpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnb3ZlcmZsb3cteS1oaWRkZW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyZmxvdy15LWhpZGRlbicpO1xuICAgIH1cbiAgfSwgW21vZGFsXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBib2R5RGl2ID0gYm9keURpdlJlZi5jdXJyZW50O1xuICAgIGNvbnN0IGltYWdlRGl2ID0gaW1hZ2VEaXZSZWYuY3VycmVudDtcbiAgXG4gICAgaWYgKGJvZHlEaXYgJiYgaW1hZ2VEaXYpIHtcbiAgICAgIGNvbnN0IGJvZHlEaXZTaXplID0gYm9keURpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IGltYWdlRGl2U2l6ZSA9IGltYWdlRGl2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBcbiAgICAgIGlmIChpbWFnZURpdlNpemUud2lkdGggPiBib2R5RGl2U2l6ZS53aWR0aCApIHtcbiAgICAgICAgc2V0RmxleENsYXNzZXMoXCJmbGV4XCIpO1xuICAgICAgICBzZXRUcmFuc2Zvcm1PcmlnaW4oXCJ0b3AgbGVmdFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldEZsZXhDbGFzc2VzKFwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIik7XG4gICAgICAgIHNldFRyYW5zZm9ybU9yaWdpbihcImNlbnRlclwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFt6b29tLCBtb2RhbF0pOyAvLyBSZS1ydW4gdGhlIGVmZmVjdCB3aGVuICd6b29tJyBjaGFuZ2VzXG4gIFxuXG5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7bW9kYWwgJiYgKFxuXG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIGtleT17aW1hZ2U/LnNyYyB8fCBcIlwifVxuICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IC0xODAgfX1cbiAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCwgeTogLTE4MCB9fSAvLyBUaGlzIGxpbmUgd2lsbCBtYWtlIHRoZSBtb2RhbCBhbmltYXRlIG91dCB3aXRoIHRoZXNlIHZhbHVlc1xuICAgICAgICB0cmFuc2l0aW9uPXt7IGVhc2U6IFwiZWFzZUluT3V0XCIsIGR1cmF0aW9uOiAwLjMgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwiYmctcHJpbWFyeS1saWdodCBmaXhlZCB0b3AtMCBsZWZ0LTAgdy1zY3JlZW4gaC1zY3JlZW4gei01MCBvcGFjaXR5LTk1IHB5LTggZHVyYXRpb24tNTAwXCJcbiAgICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItNCBweC00IGZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1lbmQgXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGxhYmVsPVwiY2xvc2VcIiBvbkNsaWNrPXttb2RhbENsb3NlfT5cbiAgICAgICAgICAgICAgICA8RmlYQ2lyY2xlIGNsYXNzTmFtZT1cInRleHQtNHhsIHRleHQtc2xhdGUtNTAwIGhvdmVyOnRleHQtcHJpbWFyeS1kYXJrXCIgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHJlZj17Ym9keURpdlJlZn0gIGNsYXNzTmFtZT17YG92ZXJmbG93LXNjcm9sbCAke2ZsZXhDbGFzc2VzfWB9PlxuICAgICAgICAgICAgICA8ZGl2IHJlZj17aW1hZ2VEaXZSZWZ9IGNsYXNzTmFtZT1cImltYWdlIGNvbnRhaW5lciBwLTAgdy1hdXRvIHNtOmgtWzY1dmhdXCIgc3R5bGU9e3sgdHJhbnNmb3JtOiBgc2NhbGUoJHt6b29tfSlgLCB0cmFuc2Zvcm1PcmlnaW46IHRyYW5zZm9ybU9yaWdpbiB9fT5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2U/LnNyYyB8fCBcIlwifVxuICAgICAgICAgICAgICAgICAgYWx0PXtpbWFnZT8uYWx0IHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9e2ltYWdlPy5oZWlnaHQgfHwgXCJcIn1cbiAgICAgICAgICAgICAgICAgIHdpZHRoPXtpbWFnZT8ud2lkdGggfHwgXCJcIn1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctYXV0byBoLWZ1bGwgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwIHRyYW5zZm9ybS1ncHVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnktZGFyayB0ZXh0LWNlbnRlciBtdC00IHB4LTggei0yMFwiPntpbWFnZT8uYWx0IHx8IFwiXCJ9PC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5LWRhcmsgdGV4dC1jZW50ZXIgbXktNCB3LWZ1bGwgZml4ZWQgYm90dG9tLTBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTJcIj4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uU3RhcnQ9ezxGaVpvb21Jbi8+fSB0aXRsZT0nWm9vbSBpbicgY2xhc3NOYW1lPVwiYmctd2hpdGUgcHktMSBweC0yXCIgY2xpY2s9e2hhbmRsZVpvb21Jbn0vPlxuICAgICAgICAgICAgICA8QnV0dG9uIGljb25TdGFydD17PEZpWm9vbU91dC8+fSB0aXRsZT0nWm9vbSBvdXQnIGNsYXNzTmFtZT1cImJnLXdoaXRlIHB5LTEgcHgtMlwiIGNsaWNrPXtoYW5kbGVab29tT3V0fS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICApfVxuICAgICAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJGaVhDaXJjbGUiLCJGaVpvb21JbiIsIkZpWm9vbU91dCIsIm1vdGlvbiIsIkFuaW1hdGVQcmVzZW5jZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiQnV0dG9uIiwiTW9kYWwiLCJpbWFnZSIsIm1vZGFsIiwibW9kYWxDbG9zZSIsImJvZHlEaXZSZWYiLCJpbWFnZURpdlJlZiIsInpvb20iLCJzZXRab29tIiwidHJhbnNmb3JtT3JpZ2luIiwic2V0VHJhbnNmb3JtT3JpZ2luIiwiZmxleENsYXNzZXMiLCJzZXRGbGV4Q2xhc3NlcyIsInN0b3JlZFNjcm9sbFBvc2l0aW9uIiwic2V0U3RvcmVkU2Nyb2xsUG9zaXRpb24iLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0VGltZW91dCIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJyZW1vdmUiLCJoYW5kbGVab29tSW4iLCJwcmV2Wm9vbSIsImhhbmRsZVpvb21PdXQiLCJjb25zb2xlIiwibG9nIiwiYm9keURpdiIsImN1cnJlbnQiLCJpbWFnZURpdiIsImJvZHlEaXZTaXplIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaW1hZ2VEaXZTaXplIiwid2lkdGgiLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJhbmltYXRlIiwiZXhpdCIsInRyYW5zaXRpb24iLCJlYXNlIiwiZHVyYXRpb24iLCJjbGFzc05hbWUiLCJidXR0b24iLCJsYWJlbCIsIm9uQ2xpY2siLCJyZWYiLCJzdHlsZSIsInRyYW5zZm9ybSIsInNyYyIsImFsdCIsImhlaWdodCIsInAiLCJpY29uU3RhcnQiLCJ0aXRsZSIsImNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/reusable/modal.jsx\n"));

/***/ })

});