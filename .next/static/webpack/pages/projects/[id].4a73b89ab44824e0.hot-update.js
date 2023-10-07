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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_FiXCircle_FiZoomIn_FiZoomOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=FiXCircle,FiZoomIn,FiZoomOut!=!react-icons/fi */ \"__barrel_optimize__?names=FiXCircle,FiZoomIn,FiZoomOut!=!./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_reusable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/reusable */ \"./components/reusable/index.jsx\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n\nvar _s = $RefreshSig$();\n // Make sure to import Image from 'next/image'\n\n\n\n\n\nfunction Modal(param) {\n    let { image, modal, modalClose } = param;\n    _s();\n    const bodyDivRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const imageDivRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [zoom, setZoom] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);\n    const [transformOrigin, setTransformOrigin] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"center\");\n    const [flexClasses, setFlexClasses] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"flex\");\n    const [storedScrollPosition, setStoredScrollPosition] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (modal) {\n            // Store the current scroll position\n            setStoredScrollPosition(window.scrollY);\n            // Additional code for when the modal opens\n            document.body.classList.add(\"overflow-y-hidden\");\n            // Scroll to the top\n            window.scrollTo({\n                top: 0,\n                behavior: \"smooth\"\n            });\n        } else {\n            // Restore the scroll position\n            window.scrollTo({\n                top: storedScrollPosition,\n                behavior: \"smooth\"\n            });\n            // Additional code for when the modal closes\n            document.body.classList.remove(\"overflow-y-hidden\");\n        }\n        setZoom(1);\n    }, [\n        modal\n    ]);\n    const handleZoomIn = ()=>{\n        setZoom((prevZoom)=>prevZoom + 0.25);\n    };\n    const handleZoomOut = ()=>{\n        setZoom((prevZoom)=>prevZoom > 1 ? prevZoom - 0.25 : prevZoom);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        console.log(\"Modal state:\", modal);\n        if (modal) {\n            document.body.classList.add(\"overflow-y-hidden\");\n        } else {\n            document.body.classList.remove(\"overflow-y-hidden\");\n        }\n    }, [\n        modal\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const bodyDiv = bodyDivRef.current;\n        const imageDiv = imageDivRef.current;\n        if (bodyDiv && imageDiv) {\n            const bodyDivSize = bodyDiv.getBoundingClientRect();\n            const imageDivSize = imageDiv.getBoundingClientRect();\n            if (imageDivSize.width > bodyDivSize.width) {\n                setFlexClasses(\"flex\");\n                setTransformOrigin(\"top left\");\n            } else {\n                setFlexClasses(\"flex justify-center items-center\");\n                setTransformOrigin(\"center\");\n            }\n        }\n    }, [\n        zoom,\n        modal\n    ]); // Re-run the effect when 'zoom' changes\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: modal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n            initial: {\n                opacity: 0,\n                y: -180\n            },\n            animate: {\n                opacity: 1,\n                y: 0\n            },\n            exit: {\n                opacity: 0,\n                y: -180\n            },\n            transition: {\n                ease: \"easeInOut\",\n                duration: 0.3\n            },\n            className: \"bg-primary-light fixed top-0 left-0 w-screen h-screen z-50 opacity-95 py-8 duration-500\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute top-4 right-4 z-10 md:pb-4 md:px-4 md:static md:flex md:items-start md:justify-end md:top-0 md:right-0 md:z-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            label: \"close\",\n                            onClick: modalClose,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiXCircle_FiZoomIn_FiZoomOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiXCircle, {\n                                className: \"text-4xl text-slate-500 hover:text-primary-dark\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                lineNumber: 93,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                            lineNumber: 92,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: bodyDivRef,\n                        className: \"overflow-scroll \".concat(flexClasses),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            ref: imageDivRef,\n                            className: \"image container p-0 w-fit h-fit\",\n                            style: {\n                                transform: \"scale(\".concat(zoom, \")\"),\n                                transformOrigin: transformOrigin\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: (image === null || image === void 0 ? void 0 : image.src) || \"\",\n                                    alt: (image === null || image === void 0 ? void 0 : image.alt) || \"\",\n                                    height: (image === null || image === void 0 ? void 0 : image.height) || \"\",\n                                    width: (image === null || image === void 0 ? void 0 : image.width) || \"\",\n                                    className: \"w-auto h-[70vh] transition-transform duration-300 transform-gpu\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-primary-light text-center mt-4 px-8 z-20\",\n                                    children: (image === null || image === void 0 ? void 0 : image.alt) || \"\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                            lineNumber: 98,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-primary-dark text-center my-4 w-full fixed bottom-0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center items-center gap-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_reusable__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                    iconStart: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiXCircle_FiZoomIn_FiZoomOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiZoomIn, {}, void 0, false, void 0, void 0),\n                                    title: \"Zoom in\",\n                                    className: \"bg-white py-1 px-2\",\n                                    click: handleZoomIn\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                    lineNumber: 112,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_reusable__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                    iconStart: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiXCircle_FiZoomIn_FiZoomOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiZoomOut, {}, void 0, false, void 0, void 0),\n                                    title: \"Zoom out\",\n                                    className: \"bg-white py-1 px-2\",\n                                    click: handleZoomOut\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                    lineNumber: 113,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                            lineNumber: 111,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                        lineNumber: 110,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                lineNumber: 90,\n                columnNumber: 9\n            }, this)\n        }, uuid__WEBPACK_IMPORTED_MODULE_6__.v4, false, {\n            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n            lineNumber: 82,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Modal, \"uIC/DGaSEsHPilOjnGh72BYUpPI=\");\n_c = Modal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bnRzL3JldXNhYmxlL21vZGFsLmpzeD8zOTE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiOyAvLyBNYWtlIHN1cmUgdG8gaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyBGaVhDaXJjbGUsIEZpWm9vbUluLCBGaVpvb21PdXQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtCdXR0b259IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuXG5mdW5jdGlvbiBNb2RhbCh7IGltYWdlLCBtb2RhbCwgbW9kYWxDbG9zZSB9KSB7XG4gIGNvbnN0IGJvZHlEaXZSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGltYWdlRGl2UmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBbem9vbSwgc2V0Wm9vbV0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW3RyYW5zZm9ybU9yaWdpbiwgc2V0VHJhbnNmb3JtT3JpZ2luXSA9IHVzZVN0YXRlKFwiY2VudGVyXCIpO1xuICBjb25zdCBbZmxleENsYXNzZXMsIHNldEZsZXhDbGFzc2VzXSA9IHVzZVN0YXRlKFwiZmxleFwiKTtcbiAgY29uc3QgW3N0b3JlZFNjcm9sbFBvc2l0aW9uLCBzZXRTdG9yZWRTY3JvbGxQb3NpdGlvbl0gPSB1c2VTdGF0ZSgwKTtcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG1vZGFsKSB7XG4gICAgICAvLyBTdG9yZSB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb25cbiAgICAgIHNldFN0b3JlZFNjcm9sbFBvc2l0aW9uKHdpbmRvdy5zY3JvbGxZKTtcbiAgICAgIC8vIEFkZGl0aW9uYWwgY29kZSBmb3Igd2hlbiB0aGUgbW9kYWwgb3BlbnNcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnb3ZlcmZsb3cteS1oaWRkZW4nKTtcbiAgICAgIC8vIFNjcm9sbCB0byB0aGUgdG9wXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZXN0b3JlIHRoZSBzY3JvbGwgcG9zaXRpb25cbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgIHRvcDogc3RvcmVkU2Nyb2xsUG9zaXRpb24sXG4gICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICAgIH0pO1xuICAgICAgLy8gQWRkaXRpb25hbCBjb2RlIGZvciB3aGVuIHRoZSBtb2RhbCBjbG9zZXNcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmZsb3cteS1oaWRkZW4nKTtcbiAgICB9XG4gICAgc2V0Wm9vbSgxKTtcbiAgfSwgW21vZGFsXSk7XG5cblxuICBjb25zdCBoYW5kbGVab29tSW4gPSAoKSA9PiB7XG4gICAgc2V0Wm9vbSgocHJldlpvb20pID0+IHByZXZab29tICsgMC4yNSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlWm9vbU91dCA9ICgpID0+IHtcbiAgICBzZXRab29tKChwcmV2Wm9vbSkgPT4gKHByZXZab29tID4gMSA/IHByZXZab29tIC0gMC4yNSA6IHByZXZab29tKSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIk1vZGFsIHN0YXRlOlwiLCBtb2RhbCk7IFxuICAgIGlmIChtb2RhbCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdvdmVyZmxvdy15LWhpZGRlbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJmbG93LXktaGlkZGVuJyk7XG4gICAgfVxuICB9LCBbbW9kYWxdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGJvZHlEaXYgPSBib2R5RGl2UmVmLmN1cnJlbnQ7XG4gICAgY29uc3QgaW1hZ2VEaXYgPSBpbWFnZURpdlJlZi5jdXJyZW50O1xuICBcbiAgICBpZiAoYm9keURpdiAmJiBpbWFnZURpdikge1xuICAgICAgY29uc3QgYm9keURpdlNpemUgPSBib2R5RGl2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgaW1hZ2VEaXZTaXplID0gaW1hZ2VEaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIFxuICAgICAgaWYgKGltYWdlRGl2U2l6ZS53aWR0aCA+IGJvZHlEaXZTaXplLndpZHRoICkge1xuICAgICAgICBzZXRGbGV4Q2xhc3NlcyhcImZsZXhcIik7XG4gICAgICAgIHNldFRyYW5zZm9ybU9yaWdpbihcInRvcCBsZWZ0XCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0RmxleENsYXNzZXMoXCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiKTtcbiAgICAgICAgc2V0VHJhbnNmb3JtT3JpZ2luKFwiY2VudGVyXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW3pvb20sIG1vZGFsXSk7IC8vIFJlLXJ1biB0aGUgZWZmZWN0IHdoZW4gJ3pvb20nIGNoYW5nZXNcbiAgXG5cblxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHttb2RhbCAmJiAoXG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIGtleT17dXVpZHY0fVxuICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IC0xODAgfX1cbiAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCwgeTogLTE4MCB9fSAvLyBUaGlzIGxpbmUgd2lsbCBtYWtlIHRoZSBtb2RhbCBhbmltYXRlIG91dCB3aXRoIHRoZXNlIHZhbHVlc1xuICAgICAgICB0cmFuc2l0aW9uPXt7IGVhc2U6IFwiZWFzZUluT3V0XCIsIGR1cmF0aW9uOiAwLjMgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwiYmctcHJpbWFyeS1saWdodCBmaXhlZCB0b3AtMCBsZWZ0LTAgdy1zY3JlZW4gaC1zY3JlZW4gei01MCBvcGFjaXR5LTk1IHB5LTggZHVyYXRpb24tNTAwXCJcbiAgICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTQgcmlnaHQtNCB6LTEwIG1kOnBiLTQgbWQ6cHgtNCBtZDpzdGF0aWMgbWQ6ZmxleCBtZDppdGVtcy1zdGFydCBtZDpqdXN0aWZ5LWVuZCBtZDp0b3AtMCBtZDpyaWdodC0wIG1kOnotMTBcIj5cbiAgICAgICAgICAgIDxidXR0b24gbGFiZWw9XCJjbG9zZVwiIG9uQ2xpY2s9e21vZGFsQ2xvc2V9PlxuICAgICAgICAgICAgICAgIDxGaVhDaXJjbGUgY2xhc3NOYW1lPVwidGV4dC00eGwgdGV4dC1zbGF0ZS01MDAgaG92ZXI6dGV4dC1wcmltYXJ5LWRhcmtcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgcmVmPXtib2R5RGl2UmVmfSAgY2xhc3NOYW1lPXtgb3ZlcmZsb3ctc2Nyb2xsICR7ZmxleENsYXNzZXN9YH0+XG4gICAgICAgICAgICAgIDxkaXYgcmVmPXtpbWFnZURpdlJlZn0gY2xhc3NOYW1lPVwiaW1hZ2UgY29udGFpbmVyIHAtMCB3LWZpdCBoLWZpdFwiIHN0eWxlPXt7IHRyYW5zZm9ybTogYHNjYWxlKCR7em9vbX0pYCwgdHJhbnNmb3JtT3JpZ2luOiB0cmFuc2Zvcm1PcmlnaW4gfX0+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlPy5zcmMgfHwgXCJcIn1cbiAgICAgICAgICAgICAgICAgIGFsdD17aW1hZ2U/LmFsdCB8fCBcIlwifVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtpbWFnZT8uaGVpZ2h0IHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICB3aWR0aD17aW1hZ2U/LndpZHRoIHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWF1dG8gaC1bNzB2aF0gdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwIHRyYW5zZm9ybS1ncHVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5LWxpZ2h0IHRleHQtY2VudGVyIG10LTQgcHgtOCB6LTIwXCI+e2ltYWdlPy5hbHQgfHwgXCJcIn08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnktZGFyayB0ZXh0LWNlbnRlciBteS00IHctZnVsbCBmaXhlZCBib3R0b20tMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBnYXAtMlwiPiAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8QnV0dG9uIGljb25TdGFydD17PEZpWm9vbUluLz59IHRpdGxlPSdab29tIGluJyBjbGFzc05hbWU9XCJiZy13aGl0ZSBweS0xIHB4LTJcIiBjbGljaz17aGFuZGxlWm9vbUlufS8+XG4gICAgICAgICAgICAgIDxCdXR0b24gaWNvblN0YXJ0PXs8Rmlab29tT3V0Lz59IHRpdGxlPSdab29tIG91dCcgY2xhc3NOYW1lPVwiYmctd2hpdGUgcHktMSBweC0yXCIgY2xpY2s9e2hhbmRsZVpvb21PdXR9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICApfVxuICAgICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiRmlYQ2lyY2xlIiwiRmlab29tSW4iLCJGaVpvb21PdXQiLCJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkJ1dHRvbiIsInY0IiwidXVpZHY0IiwiTW9kYWwiLCJpbWFnZSIsIm1vZGFsIiwibW9kYWxDbG9zZSIsImJvZHlEaXZSZWYiLCJpbWFnZURpdlJlZiIsInpvb20iLCJzZXRab29tIiwidHJhbnNmb3JtT3JpZ2luIiwic2V0VHJhbnNmb3JtT3JpZ2luIiwiZmxleENsYXNzZXMiLCJzZXRGbGV4Q2xhc3NlcyIsInN0b3JlZFNjcm9sbFBvc2l0aW9uIiwic2V0U3RvcmVkU2Nyb2xsUG9zaXRpb24iLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsInJlbW92ZSIsImhhbmRsZVpvb21JbiIsInByZXZab29tIiwiaGFuZGxlWm9vbU91dCIsImNvbnNvbGUiLCJsb2ciLCJib2R5RGl2IiwiY3VycmVudCIsImltYWdlRGl2IiwiYm9keURpdlNpemUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJpbWFnZURpdlNpemUiLCJ3aWR0aCIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsImFuaW1hdGUiLCJleGl0IiwidHJhbnNpdGlvbiIsImVhc2UiLCJkdXJhdGlvbiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsImxhYmVsIiwib25DbGljayIsInJlZiIsInN0eWxlIiwidHJhbnNmb3JtIiwic3JjIiwiYWx0IiwiaGVpZ2h0IiwicCIsImljb25TdGFydCIsInRpdGxlIiwiY2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/reusable/modal.jsx\n"));

/***/ })

});