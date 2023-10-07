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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_FiXCircle_FiZoomIn_FiZoomOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=FiXCircle,FiZoomIn,FiZoomOut!=!react-icons/fi */ \"__barrel_optimize__?names=FiXCircle,FiZoomIn,FiZoomOut!=!./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_reusable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/reusable */ \"./components/reusable/index.jsx\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n\nvar _s = $RefreshSig$();\n // Make sure to import Image from 'next/image'\n\n\n\n\n\nfunction Modal(param) {\n    let { image, modal, modalClose } = param;\n    _s();\n    const bodyDivRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const imageDivRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [zoom, setZoom] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);\n    const [transformOrigin, setTransformOrigin] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"center\");\n    const [flexClasses, setFlexClasses] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"flex\");\n    const [storedScrollPosition, setStoredScrollPosition] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (modal) {\n            // Store the current scroll position\n            setStoredScrollPosition(window.scrollY);\n            // Additional code for when the modal opens\n            document.body.classList.add(\"overflow-y-hidden\");\n            // Scroll to the top\n            window.scrollTo({\n                top: 0,\n                behavior: \"smooth\"\n            });\n        } else {\n            // Restore the scroll position\n            window.scrollTo({\n                top: storedScrollPosition,\n                behavior: \"smooth\"\n            });\n            // Additional code for when the modal closes\n            document.body.classList.remove(\"overflow-y-hidden\");\n        }\n    }, [\n        modal\n    ]);\n    const handleZoomIn = ()=>{\n        setZoom((prevZoom)=>prevZoom + 0.5);\n    };\n    const handleZoomOut = ()=>{\n        setZoom((prevZoom)=>prevZoom > 1 ? prevZoom - 0.5 : prevZoom);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        console.log(\"Modal state:\", modal);\n        if (modal) {\n            document.body.classList.add(\"overflow-y-hidden\");\n        } else {\n            document.body.classList.remove(\"overflow-y-hidden\");\n        }\n    }, [\n        modal\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (zoom > 1.5) {\n            setTransformOrigin(\"top left\");\n        } else {\n            setTransformOrigin(\"center\");\n        }\n    }, [\n        zoom\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const bodyDiv = bodyDivRef.current;\n        const imageDiv = imageDivRef.current;\n        if (bodyDiv && imageDiv) {\n            const bodyDivSize = bodyDiv.getBoundingClientRect();\n            const imageDivSize = imageDiv.getBoundingClientRect();\n            if (bodyDivSize.width > imageDivSize.width) {\n                setFlexClasses(\"flex\");\n            } else {\n                setFlexClasses(\"flex justify-center items-center\");\n            }\n        }\n    }, [\n        zoom\n    ]); // Re-run the effect when 'zoom' changes\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: modal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n            initial: {\n                opacity: 0,\n                y: -180\n            },\n            animate: {\n                opacity: 1,\n                y: 0\n            },\n            exit: {\n                opacity: 0,\n                y: -180\n            },\n            transition: {\n                ease: \"easeInOut\",\n                duration: 0.3\n            },\n            className: \"bg-primary-light fixed top-0 left-0 w-screen h-screen z-50 relatative opacity-95 py-8 duration-500\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute top-4 right-4 z-10 md:pb-4 md:px-4 md:static md:flex md:items-start md:justify-end md:top-0 md:right-0 md:z-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            label: \"close\",\n                            onClick: modalClose,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiXCircle_FiZoomIn_FiZoomOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiXCircle, {\n                                className: \"text-4xl text-slate-500 hover:text-primary-dark\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                lineNumber: 95,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                            lineNumber: 94,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: bodyDivRef,\n                        className: \"overflow-scroll bg-red-400 \".concat(flexClasses),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            ref: imageDivRef,\n                            className: \"image container p-0 w-fit h-fit bg-green-400\",\n                            style: {\n                                transform: \"scale(\".concat(zoom, \")\"),\n                                transformOrigin: transformOrigin\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: (image === null || image === void 0 ? void 0 : image.src) || \"\",\n                                alt: (image === null || image === void 0 ? void 0 : image.alt) || \"\",\n                                height: (image === null || image === void 0 ? void 0 : image.height) || \"\",\n                                width: (image === null || image === void 0 ? void 0 : image.width) || \"\",\n                                className: \"w-auto h-[80vh] transition-transform duration-300 transform-gpu\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                lineNumber: 101,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                            lineNumber: 100,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-primary-light text-center mt-4 px-8\",\n                        children: (image === null || image === void 0 ? void 0 : image.alt) || \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                        lineNumber: 110,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-primary-dark text-center my-4 w-full fixed bottom-0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center items-center gap-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_reusable__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                    iconStart: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiXCircle_FiZoomIn_FiZoomOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiZoomIn, {}, void 0, false, void 0, void 0),\n                                    title: \"Zoom in\",\n                                    className: \"bg-white py-1 px-2\",\n                                    click: handleZoomIn\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                    lineNumber: 113,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_reusable__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                    iconStart: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiXCircle_FiZoomIn_FiZoomOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiZoomOut, {}, void 0, false, void 0, void 0),\n                                    title: \"Zoom out\",\n                                    className: \"bg-white py-1 px-2\",\n                                    click: handleZoomOut\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                    lineNumber: 114,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                            lineNumber: 112,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                        lineNumber: 111,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                lineNumber: 92,\n                columnNumber: 9\n            }, this)\n        }, uuid__WEBPACK_IMPORTED_MODULE_6__.v4, false, {\n            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n            lineNumber: 84,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Modal, \"PquzpTbYXzyNm1IepVFBrZpjPUM=\");\n_c = Modal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VCwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3JldXNhYmxlL21vZGFsLmpzeD8zOTE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiOyAvLyBNYWtlIHN1cmUgdG8gaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyBGaVhDaXJjbGUsIEZpWm9vbUluLCBGaVpvb21PdXQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtCdXR0b259IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuXG5mdW5jdGlvbiBNb2RhbCh7IGltYWdlLCBtb2RhbCwgbW9kYWxDbG9zZSB9KSB7XG4gIGNvbnN0IGJvZHlEaXZSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGltYWdlRGl2UmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBbem9vbSwgc2V0Wm9vbV0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW3RyYW5zZm9ybU9yaWdpbiwgc2V0VHJhbnNmb3JtT3JpZ2luXSA9IHVzZVN0YXRlKFwiY2VudGVyXCIpO1xuICBjb25zdCBbZmxleENsYXNzZXMsIHNldEZsZXhDbGFzc2VzXSA9IHVzZVN0YXRlKFwiZmxleFwiKTtcbiAgY29uc3QgW3N0b3JlZFNjcm9sbFBvc2l0aW9uLCBzZXRTdG9yZWRTY3JvbGxQb3NpdGlvbl0gPSB1c2VTdGF0ZSgwKTtcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG1vZGFsKSB7XG4gICAgICAvLyBTdG9yZSB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb25cbiAgICAgIHNldFN0b3JlZFNjcm9sbFBvc2l0aW9uKHdpbmRvdy5zY3JvbGxZKTtcbiAgICAgIC8vIEFkZGl0aW9uYWwgY29kZSBmb3Igd2hlbiB0aGUgbW9kYWwgb3BlbnNcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnb3ZlcmZsb3cteS1oaWRkZW4nKTtcbiAgICAgIC8vIFNjcm9sbCB0byB0aGUgdG9wXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZXN0b3JlIHRoZSBzY3JvbGwgcG9zaXRpb25cbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgIHRvcDogc3RvcmVkU2Nyb2xsUG9zaXRpb24sXG4gICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICAgIH0pO1xuICAgICAgLy8gQWRkaXRpb25hbCBjb2RlIGZvciB3aGVuIHRoZSBtb2RhbCBjbG9zZXNcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmZsb3cteS1oaWRkZW4nKTtcbiAgICB9XG4gIH0sIFttb2RhbF0pO1xuXG5cbiAgY29uc3QgaGFuZGxlWm9vbUluID0gKCkgPT4ge1xuICAgIHNldFpvb20oKHByZXZab29tKSA9PiBwcmV2Wm9vbSArIDAuNSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlWm9vbU91dCA9ICgpID0+IHtcbiAgICBzZXRab29tKChwcmV2Wm9vbSkgPT4gKHByZXZab29tID4gMSA/IHByZXZab29tIC0gMC41IDogcHJldlpvb20pKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiTW9kYWwgc3RhdGU6XCIsIG1vZGFsKTsgXG4gICAgaWYgKG1vZGFsKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ292ZXJmbG93LXktaGlkZGVuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmZsb3cteS1oaWRkZW4nKTtcbiAgICB9XG4gIH0sIFttb2RhbF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHpvb20gPiAxLjUpIHtcbiAgICAgIHNldFRyYW5zZm9ybU9yaWdpbihcInRvcCBsZWZ0XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUcmFuc2Zvcm1PcmlnaW4oXCJjZW50ZXJcIik7XG4gICAgfVxuICB9LCBbem9vbV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgYm9keURpdiA9IGJvZHlEaXZSZWYuY3VycmVudDtcbiAgICBjb25zdCBpbWFnZURpdiA9IGltYWdlRGl2UmVmLmN1cnJlbnQ7XG5cbiAgICBpZiAoYm9keURpdiAmJiBpbWFnZURpdikge1xuICAgICAgY29uc3QgYm9keURpdlNpemUgPSBib2R5RGl2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgaW1hZ2VEaXZTaXplID0gaW1hZ2VEaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgIGlmIChib2R5RGl2U2l6ZS53aWR0aCA+aW1hZ2VEaXZTaXplLndpZHRoKSB7XG4gICAgICAgIHNldEZsZXhDbGFzc2VzKFwiZmxleFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldEZsZXhDbGFzc2VzKFwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIik7XG4gICAgICB9XG4gICAgfVxuICB9LCBbem9vbV0pOyAvLyBSZS1ydW4gdGhlIGVmZmVjdCB3aGVuICd6b29tJyBjaGFuZ2VzXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge21vZGFsICYmIChcbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAga2V5PXt1dWlkdjR9XG4gICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogLTE4MCB9fVxuICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwLCB5OiAtMTgwIH19IC8vIFRoaXMgbGluZSB3aWxsIG1ha2UgdGhlIG1vZGFsIGFuaW1hdGUgb3V0IHdpdGggdGhlc2UgdmFsdWVzXG4gICAgICAgIHRyYW5zaXRpb249e3sgZWFzZTogXCJlYXNlSW5PdXRcIiwgZHVyYXRpb246IDAuMyB9fVxuICAgICAgICBjbGFzc05hbWU9XCJiZy1wcmltYXJ5LWxpZ2h0IGZpeGVkIHRvcC0wIGxlZnQtMCB3LXNjcmVlbiBoLXNjcmVlbiB6LTUwIHJlbGF0YXRpdmUgb3BhY2l0eS05NSBweS04IGR1cmF0aW9uLTUwMFwiXG4gICAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC00IHJpZ2h0LTQgei0xMCBtZDpwYi00IG1kOnB4LTQgbWQ6c3RhdGljIG1kOmZsZXggbWQ6aXRlbXMtc3RhcnQgbWQ6anVzdGlmeS1lbmQgbWQ6dG9wLTAgbWQ6cmlnaHQtMCBtZDp6LTEwXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGxhYmVsPVwiY2xvc2VcIiBvbkNsaWNrPXttb2RhbENsb3NlfT5cbiAgICAgICAgICAgICAgICA8RmlYQ2lyY2xlIGNsYXNzTmFtZT1cInRleHQtNHhsIHRleHQtc2xhdGUtNTAwIGhvdmVyOnRleHQtcHJpbWFyeS1kYXJrXCIgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHJlZj17Ym9keURpdlJlZn0gIGNsYXNzTmFtZT17YG92ZXJmbG93LXNjcm9sbCBiZy1yZWQtNDAwICR7ZmxleENsYXNzZXN9YH0+XG4gICAgICAgICAgICAgIDxkaXYgcmVmPXtpbWFnZURpdlJlZn0gY2xhc3NOYW1lPVwiaW1hZ2UgY29udGFpbmVyIHAtMCB3LWZpdCBoLWZpdCBiZy1ncmVlbi00MDBcIiBzdHlsZT17eyB0cmFuc2Zvcm06IGBzY2FsZSgke3pvb219KWAsIHRyYW5zZm9ybU9yaWdpbjogdHJhbnNmb3JtT3JpZ2luIH19PlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZT8uc3JjIHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICBhbHQ9e2ltYWdlPy5hbHQgfHwgXCJcIn1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17aW1hZ2U/LmhlaWdodCB8fCBcIlwifVxuICAgICAgICAgICAgICAgICAgd2lkdGg9e2ltYWdlPy53aWR0aCB8fCBcIlwifVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1hdXRvIGgtWzgwdmhdIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0tZ3B1XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeS1saWdodCB0ZXh0LWNlbnRlciBtdC00IHB4LThcIj57aW1hZ2U/LmFsdCB8fCBcIlwifTwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeS1kYXJrIHRleHQtY2VudGVyIG15LTQgdy1mdWxsIGZpeGVkIGJvdHRvbS0wXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGdhcC0yXCI+ICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxCdXR0b24gaWNvblN0YXJ0PXs8Rmlab29tSW4vPn0gdGl0bGU9J1pvb20gaW4nIGNsYXNzTmFtZT1cImJnLXdoaXRlIHB5LTEgcHgtMlwiIGNsaWNrPXtoYW5kbGVab29tSW59Lz5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uU3RhcnQ9ezxGaVpvb21PdXQvPn0gdGl0bGU9J1pvb20gb3V0JyBjbGFzc05hbWU9XCJiZy13aGl0ZSBweS0xIHB4LTJcIiBjbGljaz17aGFuZGxlWm9vbU91dH0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICl9XG4gICAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJGaVhDaXJjbGUiLCJGaVpvb21JbiIsIkZpWm9vbU91dCIsIm1vdGlvbiIsIkFuaW1hdGVQcmVzZW5jZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiQnV0dG9uIiwidjQiLCJ1dWlkdjQiLCJNb2RhbCIsImltYWdlIiwibW9kYWwiLCJtb2RhbENsb3NlIiwiYm9keURpdlJlZiIsImltYWdlRGl2UmVmIiwiem9vbSIsInNldFpvb20iLCJ0cmFuc2Zvcm1PcmlnaW4iLCJzZXRUcmFuc2Zvcm1PcmlnaW4iLCJmbGV4Q2xhc3NlcyIsInNldEZsZXhDbGFzc2VzIiwic3RvcmVkU2Nyb2xsUG9zaXRpb24iLCJzZXRTdG9yZWRTY3JvbGxQb3NpdGlvbiIsIndpbmRvdyIsInNjcm9sbFkiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwicmVtb3ZlIiwiaGFuZGxlWm9vbUluIiwicHJldlpvb20iLCJoYW5kbGVab29tT3V0IiwiY29uc29sZSIsImxvZyIsImJvZHlEaXYiLCJjdXJyZW50IiwiaW1hZ2VEaXYiLCJib2R5RGl2U2l6ZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImltYWdlRGl2U2l6ZSIsIndpZHRoIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5IiwiYW5pbWF0ZSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZWFzZSIsImR1cmF0aW9uIiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwibGFiZWwiLCJvbkNsaWNrIiwicmVmIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJzcmMiLCJhbHQiLCJoZWlnaHQiLCJwIiwiaWNvblN0YXJ0IiwidGl0bGUiLCJjbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/reusable/modal.jsx\n"));

/***/ })

});