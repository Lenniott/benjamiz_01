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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_FiXCircle_FiZoomIn_FiZoomOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=FiXCircle,FiZoomIn,FiZoomOut!=!react-icons/fi */ \"__barrel_optimize__?names=FiXCircle,FiZoomIn,FiZoomOut!=!./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_reusable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/reusable */ \"./components/reusable/index.jsx\");\n\nvar _s = $RefreshSig$();\n // Make sure to import Image from 'next/image'\n\n\n\n\nfunction Modal(param) {\n    let { image, modal, modalClose } = param;\n    _s();\n    const bodyDivRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const imageDivRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [zoom, setZoom] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);\n    const [transformOrigin, setTransformOrigin] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"center\");\n    const [flexClasses, setFlexClasses] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"flex\");\n    const [storedScrollPosition, setStoredScrollPosition] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (modal) {\n            // Store the current scroll position\n            setStoredScrollPosition(window.scrollY);\n            // Additional code for when the modal opens\n            document.body.classList.add(\"overflow-y-hidden\");\n            // Scroll to the top\n            setTimeout(()=>{\n                window.scrollTo({\n                    top: 0\n                });\n            }, 600); // 600 milliseconds = 0.6 seconds\n        } else {\n            // Restore the scroll position\n            window.scrollTo({\n                top: storedScrollPosition\n            });\n            // Additional code for when the modal closes\n            document.body.classList.remove(\"overflow-y-hidden\");\n        }\n        setZoom(1);\n    }, [\n        modal\n    ]);\n    const handleZoomIn = ()=>{\n        setZoom((prevZoom)=>prevZoom + 0.25);\n    };\n    const handleZoomOut = ()=>{\n        setZoom((prevZoom)=>prevZoom > 1 ? prevZoom - 0.25 : prevZoom);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        console.log(\"Modal state:\", modal);\n        if (modal) {\n            document.body.classList.add(\"overflow-y-hidden\");\n        } else {\n            document.body.classList.remove(\"overflow-y-hidden\");\n        }\n    }, [\n        modal\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const bodyDiv = bodyDivRef.current;\n        const imageDiv = imageDivRef.current;\n        if (bodyDiv && imageDiv) {\n            const bodyDivSize = bodyDiv.getBoundingClientRect();\n            const imageDivSize = imageDiv.getBoundingClientRect();\n            if (imageDivSize.width > bodyDivSize.width) {\n                setFlexClasses(\"flex\");\n                setTransformOrigin(\"top left\");\n            } else {\n                setFlexClasses(\"flex justify-center items-center\");\n                setTransformOrigin(\"center\");\n            }\n        }\n    }, [\n        zoom,\n        modal\n    ]); // Re-run the effect when 'zoom' changes\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: modal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n            initial: {\n                opacity: 0,\n                y: -180\n            },\n            animate: {\n                opacity: 1,\n                y: 0\n            },\n            exit: {\n                opacity: 0,\n                y: -180\n            },\n            transition: {\n                ease: \"easeInOut\",\n                duration: 0.3\n            },\n            className: \"bg-primary-light fixed top-0 left-0 w-screen h-screen z-50 opacity-95 py-8 duration-500\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pb-4 px-4 flex items-start justify-end \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            label: \"close\",\n                            onClick: modalClose,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiXCircle_FiZoomIn_FiZoomOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiXCircle, {\n                                className: \"text-4xl text-slate-500 hover:text-primary-dark\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                lineNumber: 94,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                            lineNumber: 93,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: bodyDivRef,\n                        className: \"overflow-scroll \".concat(flexClasses),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            ref: imageDivRef,\n                            className: \"image container p-0 w-auto sm:h-[65vh]\",\n                            style: {\n                                transform: \"scale(\".concat(zoom, \")\"),\n                                transformOrigin: transformOrigin\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: (image === null || image === void 0 ? void 0 : image.src) || \"\",\n                                alt: (image === null || image === void 0 ? void 0 : image.alt) || \"\",\n                                height: (image === null || image === void 0 ? void 0 : image.height) || \"\",\n                                width: (image === null || image === void 0 ? void 0 : image.width) || \"\",\n                                className: \"w-auto h-full transition-transform duration-300 transform-gpu\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                lineNumber: 100,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                            lineNumber: 99,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-primary-dark text-center my-4 w-full fixed bottom-0\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-primary-dark text-center px-8 z-20 bg-red-500\",\n                                children: (image === null || image === void 0 ? void 0 : image.alt) || \"\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                lineNumber: 112,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center items-center gap-4 bg-green-500 h-fit\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_reusable__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                        iconStart: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiXCircle_FiZoomIn_FiZoomOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiZoomIn, {}, void 0, false, void 0, void 0),\n                                        title: \"Zoom in\",\n                                        click: handleZoomIn\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                        lineNumber: 114,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_reusable__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                        iconStart: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiXCircle_FiZoomIn_FiZoomOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiZoomOut, {}, void 0, false, void 0, void 0),\n                                        title: \"Zoom out\",\n                                        click: handleZoomOut\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                        lineNumber: 115,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                lineNumber: 113,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                        lineNumber: 111,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                lineNumber: 91,\n                columnNumber: 9\n            }, this)\n        }, (image === null || image === void 0 ? void 0 : image.src) || \"\", false, {\n            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n            lineNumber: 83,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Modal, \"uIC/DGaSEsHPilOjnGh72BYUpPI=\");\n_c = Modal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly4vY29tcG9uZW50cy9yZXVzYWJsZS9tb2RhbC5qc3g/MzkxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjsgLy8gTWFrZSBzdXJlIHRvIGltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgRmlYQ2lyY2xlLCBGaVpvb21JbiwgRmlab29tT3V0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZVwiO1xuXG5cbmZ1bmN0aW9uIE1vZGFsKHsgaW1hZ2UsIG1vZGFsLCBtb2RhbENsb3NlIH0pIHtcbiAgY29uc3QgYm9keURpdlJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgaW1hZ2VEaXZSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IFt6b29tLCBzZXRab29tXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbdHJhbnNmb3JtT3JpZ2luLCBzZXRUcmFuc2Zvcm1PcmlnaW5dID0gdXNlU3RhdGUoXCJjZW50ZXJcIik7XG4gIGNvbnN0IFtmbGV4Q2xhc3Nlcywgc2V0RmxleENsYXNzZXNdID0gdXNlU3RhdGUoXCJmbGV4XCIpO1xuICBjb25zdCBbc3RvcmVkU2Nyb2xsUG9zaXRpb24sIHNldFN0b3JlZFNjcm9sbFBvc2l0aW9uXSA9IHVzZVN0YXRlKDApO1xuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobW9kYWwpIHtcbiAgICAgIC8vIFN0b3JlIHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvblxuICAgICAgc2V0U3RvcmVkU2Nyb2xsUG9zaXRpb24od2luZG93LnNjcm9sbFkpO1xuICAgICAgLy8gQWRkaXRpb25hbCBjb2RlIGZvciB3aGVuIHRoZSBtb2RhbCBvcGVuc1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdvdmVyZmxvdy15LWhpZGRlbicpO1xuICAgICAgLy8gU2Nyb2xsIHRvIHRoZSB0b3BcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgfSk7XG4gICAgICB9LCA2MDApOyAvLyA2MDAgbWlsbGlzZWNvbmRzID0gMC42IHNlY29uZHNcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmVzdG9yZSB0aGUgc2Nyb2xsIHBvc2l0aW9uXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICB0b3A6IHN0b3JlZFNjcm9sbFBvc2l0aW9uLFxuICAgICAgfSk7XG4gICAgICAvLyBBZGRpdGlvbmFsIGNvZGUgZm9yIHdoZW4gdGhlIG1vZGFsIGNsb3Nlc1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyZmxvdy15LWhpZGRlbicpO1xuICAgIH1cbiAgICBzZXRab29tKDEpO1xuICB9LCBbbW9kYWxdKTtcblxuXG4gIGNvbnN0IGhhbmRsZVpvb21JbiA9ICgpID0+IHtcbiAgICBzZXRab29tKChwcmV2Wm9vbSkgPT4gcHJldlpvb20gKyAwLjI1KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVab29tT3V0ID0gKCkgPT4ge1xuICAgIHNldFpvb20oKHByZXZab29tKSA9PiAocHJldlpvb20gPiAxID8gcHJldlpvb20gLSAwLjI1IDogcHJldlpvb20pKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiTW9kYWwgc3RhdGU6XCIsIG1vZGFsKTsgXG4gICAgaWYgKG1vZGFsKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ292ZXJmbG93LXktaGlkZGVuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmZsb3cteS1oaWRkZW4nKTtcbiAgICB9XG4gIH0sIFttb2RhbF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgYm9keURpdiA9IGJvZHlEaXZSZWYuY3VycmVudDtcbiAgICBjb25zdCBpbWFnZURpdiA9IGltYWdlRGl2UmVmLmN1cnJlbnQ7XG4gIFxuICAgIGlmIChib2R5RGl2ICYmIGltYWdlRGl2KSB7XG4gICAgICBjb25zdCBib2R5RGl2U2l6ZSA9IGJvZHlEaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBpbWFnZURpdlNpemUgPSBpbWFnZURpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgXG4gICAgICBpZiAoaW1hZ2VEaXZTaXplLndpZHRoID4gYm9keURpdlNpemUud2lkdGggKSB7XG4gICAgICAgIHNldEZsZXhDbGFzc2VzKFwiZmxleFwiKTtcbiAgICAgICAgc2V0VHJhbnNmb3JtT3JpZ2luKFwidG9wIGxlZnRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRGbGV4Q2xhc3NlcyhcImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCIpO1xuICAgICAgICBzZXRUcmFuc2Zvcm1PcmlnaW4oXCJjZW50ZXJcIik7XG4gICAgICB9XG4gICAgfVxuICB9LCBbem9vbSwgbW9kYWxdKTsgLy8gUmUtcnVuIHRoZSBlZmZlY3Qgd2hlbiAnem9vbScgY2hhbmdlc1xuICBcblxuXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge21vZGFsICYmIChcblxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICBrZXk9e2ltYWdlPy5zcmMgfHwgXCJcIn1cbiAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAtMTgwIH19XG4gICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAsIHk6IC0xODAgfX0gLy8gVGhpcyBsaW5lIHdpbGwgbWFrZSB0aGUgbW9kYWwgYW5pbWF0ZSBvdXQgd2l0aCB0aGVzZSB2YWx1ZXNcbiAgICAgICAgdHJhbnNpdGlvbj17eyBlYXNlOiBcImVhc2VJbk91dFwiLCBkdXJhdGlvbjogMC4zIH19XG4gICAgICAgIGNsYXNzTmFtZT1cImJnLXByaW1hcnktbGlnaHQgZml4ZWQgdG9wLTAgbGVmdC0wIHctc2NyZWVuIGgtc2NyZWVuIHotNTAgb3BhY2l0eS05NSBweS04IGR1cmF0aW9uLTUwMFwiXG4gICAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTQgcHgtNCBmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktZW5kIFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBsYWJlbD1cImNsb3NlXCIgb25DbGljaz17bW9kYWxDbG9zZX0+XG4gICAgICAgICAgICAgICAgPEZpWENpcmNsZSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCB0ZXh0LXNsYXRlLTUwMCBob3Zlcjp0ZXh0LXByaW1hcnktZGFya1wiIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiByZWY9e2JvZHlEaXZSZWZ9ICBjbGFzc05hbWU9e2BvdmVyZmxvdy1zY3JvbGwgJHtmbGV4Q2xhc3Nlc31gfT5cbiAgICAgICAgICAgICAgPGRpdiByZWY9e2ltYWdlRGl2UmVmfSBjbGFzc05hbWU9XCJpbWFnZSBjb250YWluZXIgcC0wIHctYXV0byBzbTpoLVs2NXZoXVwiIHN0eWxlPXt7IHRyYW5zZm9ybTogYHNjYWxlKCR7em9vbX0pYCwgdHJhbnNmb3JtT3JpZ2luOiB0cmFuc2Zvcm1PcmlnaW4gfX0+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlPy5zcmMgfHwgXCJcIn1cbiAgICAgICAgICAgICAgICAgIGFsdD17aW1hZ2U/LmFsdCB8fCBcIlwifVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtpbWFnZT8uaGVpZ2h0IHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICB3aWR0aD17aW1hZ2U/LndpZHRoIHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWF1dG8gaC1mdWxsIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0tZ3B1XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnktZGFyayB0ZXh0LWNlbnRlciBteS00IHctZnVsbCBmaXhlZCBib3R0b20tMFwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeS1kYXJrIHRleHQtY2VudGVyIHB4LTggei0yMCBiZy1yZWQtNTAwXCI+e2ltYWdlPy5hbHQgfHwgXCJcIn08L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGdhcC00IGJnLWdyZWVuLTUwMCBoLWZpdFwiPiAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8QnV0dG9uIGljb25TdGFydD17PEZpWm9vbUluLz59IHRpdGxlPSdab29tIGluJyBjbGljaz17aGFuZGxlWm9vbUlufS8+XG4gICAgICAgICAgICAgIDxCdXR0b24gaWNvblN0YXJ0PXs8Rmlab29tT3V0Lz59IHRpdGxlPSdab29tIG91dCcgY2xpY2s9e2hhbmRsZVpvb21PdXR9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICl9XG4gICAgICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkZpWENpcmNsZSIsIkZpWm9vbUluIiwiRmlab29tT3V0IiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJCdXR0b24iLCJNb2RhbCIsImltYWdlIiwibW9kYWwiLCJtb2RhbENsb3NlIiwiYm9keURpdlJlZiIsImltYWdlRGl2UmVmIiwiem9vbSIsInNldFpvb20iLCJ0cmFuc2Zvcm1PcmlnaW4iLCJzZXRUcmFuc2Zvcm1PcmlnaW4iLCJmbGV4Q2xhc3NlcyIsInNldEZsZXhDbGFzc2VzIiwic3RvcmVkU2Nyb2xsUG9zaXRpb24iLCJzZXRTdG9yZWRTY3JvbGxQb3NpdGlvbiIsIndpbmRvdyIsInNjcm9sbFkiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRUaW1lb3V0Iiwic2Nyb2xsVG8iLCJ0b3AiLCJyZW1vdmUiLCJoYW5kbGVab29tSW4iLCJwcmV2Wm9vbSIsImhhbmRsZVpvb21PdXQiLCJjb25zb2xlIiwibG9nIiwiYm9keURpdiIsImN1cnJlbnQiLCJpbWFnZURpdiIsImJvZHlEaXZTaXplIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaW1hZ2VEaXZTaXplIiwid2lkdGgiLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJhbmltYXRlIiwiZXhpdCIsInRyYW5zaXRpb24iLCJlYXNlIiwiZHVyYXRpb24iLCJjbGFzc05hbWUiLCJidXR0b24iLCJsYWJlbCIsIm9uQ2xpY2siLCJyZWYiLCJzdHlsZSIsInRyYW5zZm9ybSIsInNyYyIsImFsdCIsImhlaWdodCIsInAiLCJpY29uU3RhcnQiLCJ0aXRsZSIsImNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/reusable/modal.jsx\n"));

/***/ })

});