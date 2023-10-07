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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_FiXCircle_FiZoomIn_FiZoomOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=FiXCircle,FiZoomIn,FiZoomOut!=!react-icons/fi */ \"__barrel_optimize__?names=FiXCircle,FiZoomIn,FiZoomOut!=!./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_reusable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/reusable */ \"./components/reusable/index.jsx\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n\nvar _s = $RefreshSig$();\n // Make sure to import Image from 'next/image'\n\n\n\n\n\nfunction Modal(param) {\n    let { image, modal, modalClose } = param;\n    _s();\n    const bodyDivRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const imageDivRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [zoom, setZoom] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);\n    const [transformOrigin, setTransformOrigin] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"center\");\n    const [flexClasses, setFlexClasses] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"flex\");\n    const [storedScrollPosition, setStoredScrollPosition] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (modal) {\n            // Store the current scroll position\n            setStoredScrollPosition(window.scrollY);\n            // Additional code for when the modal opens\n            document.body.classList.add(\"overflow-y-hidden\");\n            // Scroll to the top\n            window.scrollTo({\n                top: 0,\n                behavior: \"smooth\"\n            });\n        } else {\n            // Restore the scroll position\n            window.scrollTo({\n                top: storedScrollPosition,\n                behavior: \"smooth\"\n            });\n            // Additional code for when the modal closes\n            document.body.classList.remove(\"overflow-y-hidden\");\n        }\n        setTransformOrigin(\"center\");\n        setStoredScrollPosition(0);\n        setFlexClasses(\"flex\");\n        setZoom(1);\n    }, [\n        modal\n    ]);\n    const handleZoomIn = ()=>{\n        setZoom((prevZoom)=>prevZoom + 0.25);\n    };\n    const handleZoomOut = ()=>{\n        setZoom((prevZoom)=>prevZoom > 1 ? prevZoom - 0.25 : prevZoom);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        console.log(\"Modal state:\", modal);\n        if (modal) {\n            document.body.classList.add(\"overflow-y-hidden\");\n        } else {\n            document.body.classList.remove(\"overflow-y-hidden\");\n        }\n    }, [\n        modal\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const bodyDiv = bodyDivRef.current;\n        const imageDiv = imageDivRef.current;\n        if (bodyDiv && imageDiv) {\n            const bodyDivSize = bodyDiv.getBoundingClientRect();\n            const imageDivSize = imageDiv.getBoundingClientRect();\n            // Check if the image width is close enough to the container width to cause an overflow when centered\n            const isCloseToOverflow = Math.abs(bodyDivSize.width - imageDivSize.width) < 50; // You can adjust the '50' as needed\n            if (imageDivSize.width > bodyDivSize.width) {\n                setFlexClasses(\"flex\");\n                setTransformOrigin(\"top left\");\n            } else {\n                setFlexClasses(\"flex justify-center items-center\");\n                setTransformOrigin(\"center\");\n            }\n        }\n    }, [\n        zoom\n    ]); // Re-run the effect when 'zoom' changes\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: modal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n            initial: {\n                opacity: 0,\n                y: -180\n            },\n            animate: {\n                opacity: 1,\n                y: 0\n            },\n            exit: {\n                opacity: 0,\n                y: -180\n            },\n            transition: {\n                ease: \"easeInOut\",\n                duration: 0.3\n            },\n            className: \"bg-primary-light fixed top-0 left-0 w-screen h-screen z-50 opacity-95 py-8 duration-500\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute top-4 right-4 z-10 md:pb-4 md:px-4 md:static md:flex md:items-start md:justify-end md:top-0 md:right-0 md:z-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            label: \"close\",\n                            onClick: modalClose,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiXCircle_FiZoomIn_FiZoomOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiXCircle, {\n                                className: \"text-4xl text-slate-500 hover:text-primary-dark\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                lineNumber: 99,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                            lineNumber: 98,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: bodyDivRef,\n                        className: \"overflow-scroll bg-red-400 \".concat(flexClasses),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            ref: imageDivRef,\n                            className: \"image container p-0 w-fit h-fit bg-green-400\",\n                            style: {\n                                transform: \"scale(\".concat(zoom, \")\"),\n                                transformOrigin: transformOrigin\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: (image === null || image === void 0 ? void 0 : image.src) || \"\",\n                                alt: (image === null || image === void 0 ? void 0 : image.alt) || \"\",\n                                height: (image === null || image === void 0 ? void 0 : image.height) || \"\",\n                                width: (image === null || image === void 0 ? void 0 : image.width) || \"\",\n                                className: \"w-auto h-[80vh] transition-transform duration-300 transform-gpu\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                lineNumber: 105,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                            lineNumber: 104,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-primary-light text-center mt-4 px-8\",\n                        children: (image === null || image === void 0 ? void 0 : image.alt) || \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                        lineNumber: 114,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-primary-dark text-center my-4 w-full fixed bottom-0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center items-center gap-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_reusable__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                    iconStart: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiXCircle_FiZoomIn_FiZoomOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiZoomIn, {}, void 0, false, void 0, void 0),\n                                    title: \"Zoom in\",\n                                    className: \"bg-white py-1 px-2\",\n                                    click: handleZoomIn\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_reusable__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                    iconStart: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiXCircle_FiZoomIn_FiZoomOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiZoomOut, {}, void 0, false, void 0, void 0),\n                                    title: \"Zoom out\",\n                                    className: \"bg-white py-1 px-2\",\n                                    click: handleZoomOut\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                            lineNumber: 116,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                        lineNumber: 115,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                lineNumber: 96,\n                columnNumber: 9\n            }, this)\n        }, uuid__WEBPACK_IMPORTED_MODULE_6__.v4, false, {\n            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n            lineNumber: 88,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Modal, \"uIC/DGaSEsHPilOjnGh72BYUpPI=\");\n_c = Modal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7V0E3QnpGM0Isb0NBQU1BOzs7Ozs7QUFxQ25CO0dBdEhTQztLQUFBQTtBQXdIVCwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3JldXNhYmxlL21vZGFsLmpzeD8zOTE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiOyAvLyBNYWtlIHN1cmUgdG8gaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyBGaVhDaXJjbGUsIEZpWm9vbUluLCBGaVpvb21PdXQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtCdXR0b259IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuXG5mdW5jdGlvbiBNb2RhbCh7IGltYWdlLCBtb2RhbCwgbW9kYWxDbG9zZSB9KSB7XG4gIGNvbnN0IGJvZHlEaXZSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGltYWdlRGl2UmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBbem9vbSwgc2V0Wm9vbV0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW3RyYW5zZm9ybU9yaWdpbiwgc2V0VHJhbnNmb3JtT3JpZ2luXSA9IHVzZVN0YXRlKFwiY2VudGVyXCIpO1xuICBjb25zdCBbZmxleENsYXNzZXMsIHNldEZsZXhDbGFzc2VzXSA9IHVzZVN0YXRlKFwiZmxleFwiKTtcbiAgY29uc3QgW3N0b3JlZFNjcm9sbFBvc2l0aW9uLCBzZXRTdG9yZWRTY3JvbGxQb3NpdGlvbl0gPSB1c2VTdGF0ZSgwKTtcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG1vZGFsKSB7XG4gICAgICAvLyBTdG9yZSB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb25cbiAgICAgIHNldFN0b3JlZFNjcm9sbFBvc2l0aW9uKHdpbmRvdy5zY3JvbGxZKTtcbiAgICAgIC8vIEFkZGl0aW9uYWwgY29kZSBmb3Igd2hlbiB0aGUgbW9kYWwgb3BlbnNcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnb3ZlcmZsb3cteS1oaWRkZW4nKTtcbiAgICAgIC8vIFNjcm9sbCB0byB0aGUgdG9wXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZXN0b3JlIHRoZSBzY3JvbGwgcG9zaXRpb25cbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgIHRvcDogc3RvcmVkU2Nyb2xsUG9zaXRpb24sXG4gICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICAgIH0pO1xuICAgICAgLy8gQWRkaXRpb25hbCBjb2RlIGZvciB3aGVuIHRoZSBtb2RhbCBjbG9zZXNcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmZsb3cteS1oaWRkZW4nKTtcbiAgICB9XG4gICAgc2V0VHJhbnNmb3JtT3JpZ2luKFwiY2VudGVyXCIpO1xuICAgIHNldFN0b3JlZFNjcm9sbFBvc2l0aW9uKDApO1xuICAgIHNldEZsZXhDbGFzc2VzKFwiZmxleFwiKTtcbiAgICBzZXRab29tKDEpO1xuICB9LCBbbW9kYWxdKTtcblxuXG4gIGNvbnN0IGhhbmRsZVpvb21JbiA9ICgpID0+IHtcbiAgICBzZXRab29tKChwcmV2Wm9vbSkgPT4gcHJldlpvb20gKyAwLjI1KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVab29tT3V0ID0gKCkgPT4ge1xuICAgIHNldFpvb20oKHByZXZab29tKSA9PiAocHJldlpvb20gPiAxID8gcHJldlpvb20gLSAwLjI1IDogcHJldlpvb20pKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiTW9kYWwgc3RhdGU6XCIsIG1vZGFsKTsgXG4gICAgaWYgKG1vZGFsKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ292ZXJmbG93LXktaGlkZGVuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmZsb3cteS1oaWRkZW4nKTtcbiAgICB9XG4gIH0sIFttb2RhbF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgYm9keURpdiA9IGJvZHlEaXZSZWYuY3VycmVudDtcbiAgICBjb25zdCBpbWFnZURpdiA9IGltYWdlRGl2UmVmLmN1cnJlbnQ7XG4gIFxuICAgIGlmIChib2R5RGl2ICYmIGltYWdlRGl2KSB7XG4gICAgICBjb25zdCBib2R5RGl2U2l6ZSA9IGJvZHlEaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBpbWFnZURpdlNpemUgPSBpbWFnZURpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgXG4gICAgICAvLyBDaGVjayBpZiB0aGUgaW1hZ2Ugd2lkdGggaXMgY2xvc2UgZW5vdWdoIHRvIHRoZSBjb250YWluZXIgd2lkdGggdG8gY2F1c2UgYW4gb3ZlcmZsb3cgd2hlbiBjZW50ZXJlZFxuICAgICAgY29uc3QgaXNDbG9zZVRvT3ZlcmZsb3cgPSBNYXRoLmFicyhib2R5RGl2U2l6ZS53aWR0aCAtIGltYWdlRGl2U2l6ZS53aWR0aCkgPCA1MDsgLy8gWW91IGNhbiBhZGp1c3QgdGhlICc1MCcgYXMgbmVlZGVkXG4gIFxuICAgICAgaWYgKGltYWdlRGl2U2l6ZS53aWR0aCA+IGJvZHlEaXZTaXplLndpZHRoICkge1xuICAgICAgICBzZXRGbGV4Q2xhc3NlcyhcImZsZXhcIik7XG4gICAgICAgIHNldFRyYW5zZm9ybU9yaWdpbihcInRvcCBsZWZ0XCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0RmxleENsYXNzZXMoXCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiKTtcbiAgICAgICAgc2V0VHJhbnNmb3JtT3JpZ2luKFwiY2VudGVyXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW3pvb21dKTsgLy8gUmUtcnVuIHRoZSBlZmZlY3Qgd2hlbiAnem9vbScgY2hhbmdlc1xuICBcblxuXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge21vZGFsICYmIChcbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAga2V5PXt1dWlkdjR9XG4gICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogLTE4MCB9fVxuICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwLCB5OiAtMTgwIH19IC8vIFRoaXMgbGluZSB3aWxsIG1ha2UgdGhlIG1vZGFsIGFuaW1hdGUgb3V0IHdpdGggdGhlc2UgdmFsdWVzXG4gICAgICAgIHRyYW5zaXRpb249e3sgZWFzZTogXCJlYXNlSW5PdXRcIiwgZHVyYXRpb246IDAuMyB9fVxuICAgICAgICBjbGFzc05hbWU9XCJiZy1wcmltYXJ5LWxpZ2h0IGZpeGVkIHRvcC0wIGxlZnQtMCB3LXNjcmVlbiBoLXNjcmVlbiB6LTUwIG9wYWNpdHktOTUgcHktOCBkdXJhdGlvbi01MDBcIlxuICAgICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtNCByaWdodC00IHotMTAgbWQ6cGItNCBtZDpweC00IG1kOnN0YXRpYyBtZDpmbGV4IG1kOml0ZW1zLXN0YXJ0IG1kOmp1c3RpZnktZW5kIG1kOnRvcC0wIG1kOnJpZ2h0LTAgbWQ6ei0xMFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBsYWJlbD1cImNsb3NlXCIgb25DbGljaz17bW9kYWxDbG9zZX0+XG4gICAgICAgICAgICAgICAgPEZpWENpcmNsZSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCB0ZXh0LXNsYXRlLTUwMCBob3Zlcjp0ZXh0LXByaW1hcnktZGFya1wiIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiByZWY9e2JvZHlEaXZSZWZ9ICBjbGFzc05hbWU9e2BvdmVyZmxvdy1zY3JvbGwgYmctcmVkLTQwMCAke2ZsZXhDbGFzc2VzfWB9PlxuICAgICAgICAgICAgICA8ZGl2IHJlZj17aW1hZ2VEaXZSZWZ9IGNsYXNzTmFtZT1cImltYWdlIGNvbnRhaW5lciBwLTAgdy1maXQgaC1maXQgYmctZ3JlZW4tNDAwXCIgc3R5bGU9e3sgdHJhbnNmb3JtOiBgc2NhbGUoJHt6b29tfSlgLCB0cmFuc2Zvcm1PcmlnaW46IHRyYW5zZm9ybU9yaWdpbiB9fT5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2U/LnNyYyB8fCBcIlwifVxuICAgICAgICAgICAgICAgICAgYWx0PXtpbWFnZT8uYWx0IHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9e2ltYWdlPy5oZWlnaHQgfHwgXCJcIn1cbiAgICAgICAgICAgICAgICAgIHdpZHRoPXtpbWFnZT8ud2lkdGggfHwgXCJcIn1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctYXV0byBoLVs4MHZoXSB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgdHJhbnNmb3JtLWdwdVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnktbGlnaHQgdGV4dC1jZW50ZXIgbXQtNCBweC04XCI+e2ltYWdlPy5hbHQgfHwgXCJcIn08L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnktZGFyayB0ZXh0LWNlbnRlciBteS00IHctZnVsbCBmaXhlZCBib3R0b20tMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBnYXAtMlwiPiAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8QnV0dG9uIGljb25TdGFydD17PEZpWm9vbUluLz59IHRpdGxlPSdab29tIGluJyBjbGFzc05hbWU9XCJiZy13aGl0ZSBweS0xIHB4LTJcIiBjbGljaz17aGFuZGxlWm9vbUlufS8+XG4gICAgICAgICAgICAgIDxCdXR0b24gaWNvblN0YXJ0PXs8Rmlab29tT3V0Lz59IHRpdGxlPSdab29tIG91dCcgY2xhc3NOYW1lPVwiYmctd2hpdGUgcHktMSBweC0yXCIgY2xpY2s9e2hhbmRsZVpvb21PdXR9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICApfVxuICAgICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiRmlYQ2lyY2xlIiwiRmlab29tSW4iLCJGaVpvb21PdXQiLCJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkJ1dHRvbiIsInY0IiwidXVpZHY0IiwiTW9kYWwiLCJpbWFnZSIsIm1vZGFsIiwibW9kYWxDbG9zZSIsImJvZHlEaXZSZWYiLCJpbWFnZURpdlJlZiIsInpvb20iLCJzZXRab29tIiwidHJhbnNmb3JtT3JpZ2luIiwic2V0VHJhbnNmb3JtT3JpZ2luIiwiZmxleENsYXNzZXMiLCJzZXRGbGV4Q2xhc3NlcyIsInN0b3JlZFNjcm9sbFBvc2l0aW9uIiwic2V0U3RvcmVkU2Nyb2xsUG9zaXRpb24iLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsInJlbW92ZSIsImhhbmRsZVpvb21JbiIsInByZXZab29tIiwiaGFuZGxlWm9vbU91dCIsImNvbnNvbGUiLCJsb2ciLCJib2R5RGl2IiwiY3VycmVudCIsImltYWdlRGl2IiwiYm9keURpdlNpemUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJpbWFnZURpdlNpemUiLCJpc0Nsb3NlVG9PdmVyZmxvdyIsIk1hdGgiLCJhYnMiLCJ3aWR0aCIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsImFuaW1hdGUiLCJleGl0IiwidHJhbnNpdGlvbiIsImVhc2UiLCJkdXJhdGlvbiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsImxhYmVsIiwib25DbGljayIsInJlZiIsInN0eWxlIiwidHJhbnNmb3JtIiwic3JjIiwiYWx0IiwiaGVpZ2h0IiwicCIsImljb25TdGFydCIsInRpdGxlIiwiY2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/reusable/modal.jsx\n"));

/***/ })

});