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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_FiXCircle_FiZoomIn_FiZoomOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=FiXCircle,FiZoomIn,FiZoomOut!=!react-icons/fi */ \"__barrel_optimize__?names=FiXCircle,FiZoomIn,FiZoomOut!=!./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_reusable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/reusable */ \"./components/reusable/index.jsx\");\n\nvar _s = $RefreshSig$();\n // Make sure to import Image from 'next/image'\n\n\n\n\nfunction Modal(param) {\n    let { image, modal, modalClose } = param;\n    _s();\n    const bodyDivRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const imageDivRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [zoom, setZoom] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);\n    const [transformOrigin, setTransformOrigin] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"center\");\n    const [flexClasses, setFlexClasses] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"flex\");\n    const [storedScrollPosition, setStoredScrollPosition] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (modal) {\n            // Store the current scroll position\n            setStoredScrollPosition(window.scrollY);\n            // Additional code for when the modal opens\n            document.body.classList.add(\"overflow-y-hidden\");\n            // Scroll to the top\n            window.scrollTo({\n                top: 0,\n                behavior: \"smooth\"\n            });\n        } else {\n            // Restore the scroll position\n            window.scrollTo({\n                top: storedScrollPosition,\n                behavior: \"smooth\"\n            });\n            // Additional code for when the modal closes\n            document.body.classList.remove(\"overflow-y-hidden\");\n        }\n        setZoom(1);\n    }, [\n        modal\n    ]);\n    const handleZoomIn = ()=>{\n        setZoom((prevZoom)=>prevZoom + 0.25);\n    };\n    const handleZoomOut = ()=>{\n        setZoom((prevZoom)=>prevZoom > 1 ? prevZoom - 0.25 : prevZoom);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        console.log(\"Modal state:\", modal);\n        if (modal) {\n            document.body.classList.add(\"overflow-y-hidden\");\n        } else {\n            document.body.classList.remove(\"overflow-y-hidden\");\n        }\n    }, [\n        modal\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const bodyDiv = bodyDivRef.current;\n        const imageDiv = imageDivRef.current;\n        if (bodyDiv && imageDiv) {\n            const bodyDivSize = bodyDiv.getBoundingClientRect();\n            const imageDivSize = imageDiv.getBoundingClientRect();\n            if (imageDivSize.width > bodyDivSize.width) {\n                setFlexClasses(\"flex\");\n                setTransformOrigin(\"top left\");\n            } else {\n                setFlexClasses(\"flex justify-center items-center\");\n                setTransformOrigin(\"center\");\n            }\n        }\n    }, [\n        zoom,\n        modal\n    ]); // Re-run the effect when 'zoom' changes\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: modal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n            initial: {\n                opacity: 0,\n                y: 0\n            },\n            animate: {\n                opacity: 1,\n                y: 0\n            },\n            exit: {\n                opacity: 0,\n                y: -180\n            },\n            transition: {\n                ease: \"easeInOut\",\n                duration: 0.1\n            },\n            className: \"bg-primary-light fixed top-0 left-0 w-screen h-screen z-50 opacity-95 py-8 duration-500\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pb-4 px-4 flex items-start justify-end \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            label: \"close\",\n                            onClick: modalClose,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiXCircle_FiZoomIn_FiZoomOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiXCircle, {\n                                className: \"text-4xl text-slate-500 hover:text-primary-dark\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                lineNumber: 94,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                            lineNumber: 93,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: bodyDivRef,\n                        className: \"overflow-scroll \".concat(flexClasses),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            ref: imageDivRef,\n                            className: \"image container p-0 w-auto sm:h-[65vh]\",\n                            style: {\n                                transform: \"scale(\".concat(zoom, \")\"),\n                                transformOrigin: transformOrigin\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: (image === null || image === void 0 ? void 0 : image.src) || \"\",\n                                alt: (image === null || image === void 0 ? void 0 : image.alt) || \"\",\n                                height: (image === null || image === void 0 ? void 0 : image.height) || \"\",\n                                width: (image === null || image === void 0 ? void 0 : image.width) || \"\",\n                                className: \"w-auto h-full transition-transform duration-300 transform-gpu\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                lineNumber: 100,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                            lineNumber: 99,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-primary-dark text-center mt-4 px-8 z-20\",\n                        children: (image === null || image === void 0 ? void 0 : image.alt) || \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                        lineNumber: 110,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-primary-dark text-center my-4 w-full fixed bottom-0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center items-center gap-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_reusable__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                    iconStart: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiXCircle_FiZoomIn_FiZoomOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiZoomIn, {}, void 0, false, void 0, void 0),\n                                    title: \"Zoom in\",\n                                    className: \"bg-white py-1 px-2\",\n                                    click: handleZoomIn\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                    lineNumber: 113,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_reusable__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                    iconStart: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiXCircle_FiZoomIn_FiZoomOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiZoomOut, {}, void 0, false, void 0, void 0),\n                                    title: \"Zoom out\",\n                                    className: \"bg-white py-1 px-2\",\n                                    click: handleZoomOut\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                    lineNumber: 114,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                            lineNumber: 112,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                        lineNumber: 111,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                lineNumber: 91,\n                columnNumber: 9\n            }, this)\n        }, (image === null || image === void 0 ? void 0 : image.src) || \"\", false, {\n            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n            lineNumber: 83,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Modal, \"uIC/DGaSEsHPilOjnGh72BYUpPI=\");\n_c = Modal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Oi8vX05fRS8uL2NvbXBvbmVudHMvcmV1c2FibGUvbW9kYWwuanN4PzM5MTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7IC8vIE1ha2Ugc3VyZSB0byBpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IEZpWENpcmNsZSwgRmlab29tSW4sIEZpWm9vbU91dCB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGVcIjtcblxuXG5mdW5jdGlvbiBNb2RhbCh7IGltYWdlLCBtb2RhbCwgbW9kYWxDbG9zZSB9KSB7XG4gIGNvbnN0IGJvZHlEaXZSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGltYWdlRGl2UmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBbem9vbSwgc2V0Wm9vbV0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW3RyYW5zZm9ybU9yaWdpbiwgc2V0VHJhbnNmb3JtT3JpZ2luXSA9IHVzZVN0YXRlKFwiY2VudGVyXCIpO1xuICBjb25zdCBbZmxleENsYXNzZXMsIHNldEZsZXhDbGFzc2VzXSA9IHVzZVN0YXRlKFwiZmxleFwiKTtcbiAgY29uc3QgW3N0b3JlZFNjcm9sbFBvc2l0aW9uLCBzZXRTdG9yZWRTY3JvbGxQb3NpdGlvbl0gPSB1c2VTdGF0ZSgwKTtcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG1vZGFsKSB7XG4gICAgICAvLyBTdG9yZSB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb25cbiAgICAgIHNldFN0b3JlZFNjcm9sbFBvc2l0aW9uKHdpbmRvdy5zY3JvbGxZKTtcbiAgICAgIC8vIEFkZGl0aW9uYWwgY29kZSBmb3Igd2hlbiB0aGUgbW9kYWwgb3BlbnNcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnb3ZlcmZsb3cteS1oaWRkZW4nKTtcbiAgICAgIC8vIFNjcm9sbCB0byB0aGUgdG9wXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZXN0b3JlIHRoZSBzY3JvbGwgcG9zaXRpb25cbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgIHRvcDogc3RvcmVkU2Nyb2xsUG9zaXRpb24sXG4gICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICAgIH0pO1xuICAgICAgLy8gQWRkaXRpb25hbCBjb2RlIGZvciB3aGVuIHRoZSBtb2RhbCBjbG9zZXNcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmZsb3cteS1oaWRkZW4nKTtcbiAgICB9XG4gICAgc2V0Wm9vbSgxKTtcbiAgfSwgW21vZGFsXSk7XG5cblxuICBjb25zdCBoYW5kbGVab29tSW4gPSAoKSA9PiB7XG4gICAgc2V0Wm9vbSgocHJldlpvb20pID0+IHByZXZab29tICsgMC4yNSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlWm9vbU91dCA9ICgpID0+IHtcbiAgICBzZXRab29tKChwcmV2Wm9vbSkgPT4gKHByZXZab29tID4gMSA/IHByZXZab29tIC0gMC4yNSA6IHByZXZab29tKSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIk1vZGFsIHN0YXRlOlwiLCBtb2RhbCk7IFxuICAgIGlmIChtb2RhbCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdvdmVyZmxvdy15LWhpZGRlbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJmbG93LXktaGlkZGVuJyk7XG4gICAgfVxuICB9LCBbbW9kYWxdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGJvZHlEaXYgPSBib2R5RGl2UmVmLmN1cnJlbnQ7XG4gICAgY29uc3QgaW1hZ2VEaXYgPSBpbWFnZURpdlJlZi5jdXJyZW50O1xuICBcbiAgICBpZiAoYm9keURpdiAmJiBpbWFnZURpdikge1xuICAgICAgY29uc3QgYm9keURpdlNpemUgPSBib2R5RGl2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgaW1hZ2VEaXZTaXplID0gaW1hZ2VEaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIFxuICAgICAgaWYgKGltYWdlRGl2U2l6ZS53aWR0aCA+IGJvZHlEaXZTaXplLndpZHRoICkge1xuICAgICAgICBzZXRGbGV4Q2xhc3NlcyhcImZsZXhcIik7XG4gICAgICAgIHNldFRyYW5zZm9ybU9yaWdpbihcInRvcCBsZWZ0XCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0RmxleENsYXNzZXMoXCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiKTtcbiAgICAgICAgc2V0VHJhbnNmb3JtT3JpZ2luKFwiY2VudGVyXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW3pvb20sIG1vZGFsXSk7IC8vIFJlLXJ1biB0aGUgZWZmZWN0IHdoZW4gJ3pvb20nIGNoYW5nZXNcbiAgXG5cblxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHttb2RhbCAmJiAoXG5cbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAga2V5PXtpbWFnZT8uc3JjIHx8IFwiXCJ9XG4gICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMCB9fVxuICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwLCB5OiAtMTgwIH19IC8vIFRoaXMgbGluZSB3aWxsIG1ha2UgdGhlIG1vZGFsIGFuaW1hdGUgb3V0IHdpdGggdGhlc2UgdmFsdWVzXG4gICAgICAgIHRyYW5zaXRpb249e3sgZWFzZTogXCJlYXNlSW5PdXRcIiwgZHVyYXRpb246IDAuMSB9fVxuICAgICAgICBjbGFzc05hbWU9XCJiZy1wcmltYXJ5LWxpZ2h0IGZpeGVkIHRvcC0wIGxlZnQtMCB3LXNjcmVlbiBoLXNjcmVlbiB6LTUwIG9wYWNpdHktOTUgcHktOCBkdXJhdGlvbi01MDBcIlxuICAgICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi00IHB4LTQgZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWVuZCBcIj5cbiAgICAgICAgICAgIDxidXR0b24gbGFiZWw9XCJjbG9zZVwiIG9uQ2xpY2s9e21vZGFsQ2xvc2V9PlxuICAgICAgICAgICAgICAgIDxGaVhDaXJjbGUgY2xhc3NOYW1lPVwidGV4dC00eGwgdGV4dC1zbGF0ZS01MDAgaG92ZXI6dGV4dC1wcmltYXJ5LWRhcmtcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgcmVmPXtib2R5RGl2UmVmfSAgY2xhc3NOYW1lPXtgb3ZlcmZsb3ctc2Nyb2xsICR7ZmxleENsYXNzZXN9YH0+XG4gICAgICAgICAgICAgIDxkaXYgcmVmPXtpbWFnZURpdlJlZn0gY2xhc3NOYW1lPVwiaW1hZ2UgY29udGFpbmVyIHAtMCB3LWF1dG8gc206aC1bNjV2aF1cIiBzdHlsZT17eyB0cmFuc2Zvcm06IGBzY2FsZSgke3pvb219KWAsIHRyYW5zZm9ybU9yaWdpbjogdHJhbnNmb3JtT3JpZ2luIH19PlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZT8uc3JjIHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICBhbHQ9e2ltYWdlPy5hbHQgfHwgXCJcIn1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17aW1hZ2U/LmhlaWdodCB8fCBcIlwifVxuICAgICAgICAgICAgICAgICAgd2lkdGg9e2ltYWdlPy53aWR0aCB8fCBcIlwifVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1hdXRvIGgtZnVsbCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgdHJhbnNmb3JtLWdwdVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeS1kYXJrIHRleHQtY2VudGVyIG10LTQgcHgtOCB6LTIwXCI+e2ltYWdlPy5hbHQgfHwgXCJcIn08L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnktZGFyayB0ZXh0LWNlbnRlciBteS00IHctZnVsbCBmaXhlZCBib3R0b20tMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBnYXAtMlwiPiAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8QnV0dG9uIGljb25TdGFydD17PEZpWm9vbUluLz59IHRpdGxlPSdab29tIGluJyBjbGFzc05hbWU9XCJiZy13aGl0ZSBweS0xIHB4LTJcIiBjbGljaz17aGFuZGxlWm9vbUlufS8+XG4gICAgICAgICAgICAgIDxCdXR0b24gaWNvblN0YXJ0PXs8Rmlab29tT3V0Lz59IHRpdGxlPSdab29tIG91dCcgY2xhc3NOYW1lPVwiYmctd2hpdGUgcHktMSBweC0yXCIgY2xpY2s9e2hhbmRsZVpvb21PdXR9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICl9XG4gICAgICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkZpWENpcmNsZSIsIkZpWm9vbUluIiwiRmlab29tT3V0IiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJCdXR0b24iLCJNb2RhbCIsImltYWdlIiwibW9kYWwiLCJtb2RhbENsb3NlIiwiYm9keURpdlJlZiIsImltYWdlRGl2UmVmIiwiem9vbSIsInNldFpvb20iLCJ0cmFuc2Zvcm1PcmlnaW4iLCJzZXRUcmFuc2Zvcm1PcmlnaW4iLCJmbGV4Q2xhc3NlcyIsInNldEZsZXhDbGFzc2VzIiwic3RvcmVkU2Nyb2xsUG9zaXRpb24iLCJzZXRTdG9yZWRTY3JvbGxQb3NpdGlvbiIsIndpbmRvdyIsInNjcm9sbFkiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwicmVtb3ZlIiwiaGFuZGxlWm9vbUluIiwicHJldlpvb20iLCJoYW5kbGVab29tT3V0IiwiY29uc29sZSIsImxvZyIsImJvZHlEaXYiLCJjdXJyZW50IiwiaW1hZ2VEaXYiLCJib2R5RGl2U2l6ZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImltYWdlRGl2U2l6ZSIsIndpZHRoIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5IiwiYW5pbWF0ZSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZWFzZSIsImR1cmF0aW9uIiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwibGFiZWwiLCJvbkNsaWNrIiwicmVmIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJzcmMiLCJhbHQiLCJoZWlnaHQiLCJwIiwiaWNvblN0YXJ0IiwidGl0bGUiLCJjbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/reusable/modal.jsx\n"));

/***/ })

});