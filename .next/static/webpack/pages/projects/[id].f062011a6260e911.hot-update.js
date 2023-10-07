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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_FiXCircle_FiZoomIn_FiZoomOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=FiXCircle,FiZoomIn,FiZoomOut!=!react-icons/fi */ \"__barrel_optimize__?names=FiXCircle,FiZoomIn,FiZoomOut!=!./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_reusable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/reusable */ \"./components/reusable/index.jsx\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n\nvar _s = $RefreshSig$();\n // Make sure to import Image from 'next/image'\n\n\n\n\n\nfunction Modal(param) {\n    let { image, modal, modalClose } = param;\n    _s();\n    const bodyDivRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const imageDivRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [zoom, setZoom] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);\n    const [transformOrigin, setTransformOrigin] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"center\");\n    const [flexClasses, setFlexClasses] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"flex\");\n    const [storedScrollPosition, setStoredScrollPosition] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (modal) {\n            // Store the current scroll position\n            setStoredScrollPosition(window.scrollY);\n            // Additional code for when the modal opens\n            document.body.classList.add(\"overflow-y-hidden\");\n            // Scroll to the top\n            window.scrollTo({\n                top: 0,\n                behavior: \"smooth\"\n            });\n        } else {\n            // Restore the scroll position\n            window.scrollTo({\n                top: storedScrollPosition,\n                behavior: \"smooth\"\n            });\n            // Additional code for when the modal closes\n            document.body.classList.remove(\"overflow-y-hidden\");\n        }\n    }, [\n        modal\n    ]);\n    const handleZoomIn = ()=>{\n        setZoom((prevZoom)=>prevZoom + 0.25);\n    };\n    const handleZoomOut = ()=>{\n        setZoom((prevZoom)=>prevZoom > 1 ? prevZoom - 0.25 : prevZoom);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        console.log(\"Modal state:\", modal);\n        if (modal) {\n            document.body.classList.add(\"overflow-y-hidden\");\n        } else {\n            document.body.classList.remove(\"overflow-y-hidden\");\n        }\n    }, [\n        modal\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (zoom > 1.5) {\n            setTransformOrigin(\"top left\");\n        } else {\n            setTransformOrigin(\"center\");\n        }\n    }, [\n        zoom\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const bodyDiv = bodyDivRef.current;\n        const imageDiv = imageDivRef.current;\n        if (bodyDiv && imageDiv) {\n            const bodyDivSize = bodyDiv.getBoundingClientRect();\n            const imageDivSize = imageDiv.getBoundingClientRect();\n            // Check if the image width is close enough to the container width to cause an overflow when centered\n            const isCloseToOverflow = Math.abs(bodyDivSize.width - imageDivSize.width) > 50; // You can adjust the '50' as needed\n            if (imageDivSize.width > bodyDivSize.width || isCloseToOverflow) {\n                setFlexClasses(\"flex\");\n            } else {\n                setFlexClasses(\"flex justify-center items-center\");\n            }\n        }\n    }, [\n        zoom\n    ]); // Re-run the effect when 'zoom' changes\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: modal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n            initial: {\n                opacity: 0,\n                y: -180\n            },\n            animate: {\n                opacity: 1,\n                y: 0\n            },\n            exit: {\n                opacity: 0,\n                y: -180\n            },\n            transition: {\n                ease: \"easeInOut\",\n                duration: 0.3\n            },\n            className: \"bg-primary-light fixed top-0 left-0 w-screen h-screen z-50 opacity-95 py-8 duration-500\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute top-4 right-4 z-10 md:pb-4 md:px-4 md:static md:flex md:items-start md:justify-end md:top-0 md:right-0 md:z-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            label: \"close\",\n                            onClick: modalClose,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiXCircle_FiZoomIn_FiZoomOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiXCircle, {\n                                className: \"text-4xl text-slate-500 hover:text-primary-dark\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                lineNumber: 101,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                            lineNumber: 100,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: bodyDivRef,\n                        className: \"overflow-scroll bg-red-400 \".concat(flexClasses),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            ref: imageDivRef,\n                            className: \"image container p-0 w-fit h-fit bg-green-400\",\n                            style: {\n                                transform: \"scale(\".concat(zoom, \")\"),\n                                transformOrigin: transformOrigin\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: (image === null || image === void 0 ? void 0 : image.src) || \"\",\n                                alt: (image === null || image === void 0 ? void 0 : image.alt) || \"\",\n                                height: (image === null || image === void 0 ? void 0 : image.height) || \"\",\n                                width: (image === null || image === void 0 ? void 0 : image.width) || \"\",\n                                className: \"w-auto h-[80vh] transition-transform duration-300 transform-gpu\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                lineNumber: 107,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                            lineNumber: 106,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-primary-light text-center mt-4 px-8\",\n                        children: (image === null || image === void 0 ? void 0 : image.alt) || \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                        lineNumber: 116,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-primary-dark text-center my-4 w-full fixed bottom-0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center items-center gap-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_reusable__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                    iconStart: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiXCircle_FiZoomIn_FiZoomOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiZoomIn, {}, void 0, false, void 0, void 0),\n                                    title: \"Zoom in\",\n                                    className: \"bg-white py-1 px-2\",\n                                    click: handleZoomIn\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                    lineNumber: 119,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_reusable__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                    iconStart: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiXCircle_FiZoomIn_FiZoomOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiZoomOut, {}, void 0, false, void 0, void 0),\n                                    title: \"Zoom out\",\n                                    className: \"bg-white py-1 px-2\",\n                                    click: handleZoomOut\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                                    lineNumber: 120,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                            lineNumber: 118,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                        lineNumber: 117,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n                lineNumber: 98,\n                columnNumber: 9\n            }, this)\n        }, uuid__WEBPACK_IMPORTED_MODULE_6__.v4, false, {\n            fileName: \"/Users/ben/Desktop/CODE/benjamiz_01/benjamiz_01/components/reusable/modal.jsx\",\n            lineNumber: 90,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Modal, \"PquzpTbYXzyNm1IepVFBrZpjPUM=\");\n_c = Modal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3JldXNhYmxlL21vZGFsLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQStCLENBQUMsOENBQThDO0FBQ2Q7QUFDUjtBQUNKO0FBQ0g7QUFDYjtBQUVwQyxTQUFTWSxNQUFNLEtBQTRCO1FBQTVCLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxVQUFVLEVBQUUsR0FBNUI7O0lBQ2IsTUFBTUMsYUFBYVIsNkNBQU1BLENBQUM7SUFDMUIsTUFBTVMsY0FBY1QsNkNBQU1BLENBQUM7SUFDM0IsTUFBTSxDQUFDVSxNQUFNQyxRQUFRLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ2MsaUJBQWlCQyxtQkFBbUIsR0FBR2YsK0NBQVFBLENBQUM7SUFDdkQsTUFBTSxDQUFDZ0IsYUFBYUMsZUFBZSxHQUFHakIsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDa0Isc0JBQXNCQyx3QkFBd0IsR0FBR25CLCtDQUFRQSxDQUFDO0lBR2pFQyxnREFBU0EsQ0FBQztRQUNSLElBQUlPLE9BQU87WUFDVCxvQ0FBb0M7WUFDcENXLHdCQUF3QkMsT0FBT0MsT0FBTztZQUN0QywyQ0FBMkM7WUFDM0NDLFNBQVNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUM7WUFDNUIsb0JBQW9CO1lBQ3BCTCxPQUFPTSxRQUFRLENBQUM7Z0JBQ2RDLEtBQUs7Z0JBQ0xDLFVBQVU7WUFDWjtRQUNGLE9BQU87WUFDTCw4QkFBOEI7WUFDOUJSLE9BQU9NLFFBQVEsQ0FBQztnQkFDZEMsS0FBS1Q7Z0JBQ0xVLFVBQVU7WUFDWjtZQUNBLDRDQUE0QztZQUM1Q04sU0FBU0MsSUFBSSxDQUFDQyxTQUFTLENBQUNLLE1BQU0sQ0FBQztRQUNqQztJQUNGLEdBQUc7UUFBQ3JCO0tBQU07SUFHVixNQUFNc0IsZUFBZTtRQUNuQmpCLFFBQVEsQ0FBQ2tCLFdBQWFBLFdBQVc7SUFDbkM7SUFFQSxNQUFNQyxnQkFBZ0I7UUFDcEJuQixRQUFRLENBQUNrQixXQUFjQSxXQUFXLElBQUlBLFdBQVcsT0FBT0E7SUFDMUQ7SUFFQTlCLGdEQUFTQSxDQUFDO1FBQ1JnQyxRQUFRQyxHQUFHLENBQUMsZ0JBQWdCMUI7UUFDNUIsSUFBSUEsT0FBTztZQUNUYyxTQUFTQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDO1FBQzlCLE9BQU87WUFDTEgsU0FBU0MsSUFBSSxDQUFDQyxTQUFTLENBQUNLLE1BQU0sQ0FBQztRQUNqQztJQUNGLEdBQUc7UUFBQ3JCO0tBQU07SUFFVlAsZ0RBQVNBLENBQUM7UUFDUixJQUFJVyxPQUFPLEtBQUs7WUFDZEcsbUJBQW1CO1FBQ3JCLE9BQU87WUFDTEEsbUJBQW1CO1FBQ3JCO0lBQ0YsR0FBRztRQUFDSDtLQUFLO0lBRVRYLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWtDLFVBQVV6QixXQUFXMEIsT0FBTztRQUNsQyxNQUFNQyxXQUFXMUIsWUFBWXlCLE9BQU87UUFFcEMsSUFBSUQsV0FBV0UsVUFBVTtZQUN2QixNQUFNQyxjQUFjSCxRQUFRSSxxQkFBcUI7WUFDakQsTUFBTUMsZUFBZUgsU0FBU0UscUJBQXFCO1lBRW5ELHFHQUFxRztZQUNyRyxNQUFNRSxvQkFBb0JDLEtBQUtDLEdBQUcsQ0FBQ0wsWUFBWU0sS0FBSyxHQUFHSixhQUFhSSxLQUFLLElBQUcsSUFBSSxvQ0FBb0M7WUFFcEgsSUFBSUosYUFBYUksS0FBSyxHQUFHTixZQUFZTSxLQUFLLElBQUlILG1CQUFtQjtnQkFDL0R4QixlQUFlO1lBQ2pCLE9BQU87Z0JBQ0xBLGVBQWU7WUFDakI7UUFDRjtJQUNGLEdBQUc7UUFBQ0w7S0FBSyxHQUFHLHdDQUF3QztJQUtwRCxxQkFDRTtrQkFDR0osdUJBQ0MsOERBQUNWLGlEQUFNQSxDQUFDK0MsR0FBRztZQUVYQyxTQUFTO2dCQUFFQyxTQUFTO2dCQUFHQyxHQUFHLENBQUM7WUFBSTtZQUMvQkMsU0FBUztnQkFBRUYsU0FBUztnQkFBR0MsR0FBRztZQUFFO1lBQzVCRSxNQUFNO2dCQUFFSCxTQUFTO2dCQUFHQyxHQUFHLENBQUM7WUFBSTtZQUM1QkcsWUFBWTtnQkFBRUMsTUFBTTtnQkFBYUMsVUFBVTtZQUFJO1lBQy9DQyxXQUFVO3NCQUVWLDRFQUFDVDtnQkFBSVMsV0FBVTs7a0NBQ2YsOERBQUNUO3dCQUFJUyxXQUFVO2tDQUNYLDRFQUFDQzs0QkFBT0MsT0FBTTs0QkFBUUMsU0FBU2hEO3NDQUMzQiw0RUFBQ2QseUdBQVNBO2dDQUFDMkQsV0FBVTs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJN0IsOERBQUNUO3dCQUFJYSxLQUFLaEQ7d0JBQWE0QyxXQUFXLDhCQUEwQyxPQUFadEM7a0NBQzFELDRFQUFDNkI7NEJBQUlhLEtBQUsvQzs0QkFBYTJDLFdBQVU7NEJBQStDSyxPQUFPO2dDQUFFQyxXQUFXLFNBQWMsT0FBTGhELE1BQUs7Z0NBQUlFLGlCQUFpQkE7NEJBQWdCO3NDQUNySiw0RUFBQ3BCLG1EQUFLQTtnQ0FDSm1FLEtBQUt0RCxDQUFBQSxrQkFBQUEsNEJBQUFBLE1BQU9zRCxHQUFHLEtBQUk7Z0NBQ25CQyxLQUFLdkQsQ0FBQUEsa0JBQUFBLDRCQUFBQSxNQUFPdUQsR0FBRyxLQUFJO2dDQUNuQkMsUUFBUXhELENBQUFBLGtCQUFBQSw0QkFBQUEsTUFBT3dELE1BQU0sS0FBSTtnQ0FDekJuQixPQUFPckMsQ0FBQUEsa0JBQUFBLDRCQUFBQSxNQUFPcUMsS0FBSyxLQUFJO2dDQUN2QlUsV0FBVTs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJbEIsOERBQUNVO3dCQUFFVixXQUFVO2tDQUE0Qy9DLENBQUFBLGtCQUFBQSw0QkFBQUEsTUFBT3VELEdBQUcsS0FBSTs7Ozs7O2tDQUN2RSw4REFBQ2pCO3dCQUFJUyxXQUFVO2tDQUNiLDRFQUFDVDs0QkFBSVMsV0FBVTs7OENBQ2IsOERBQUNuRCx3REFBTUE7b0NBQUM4RCx5QkFBVyw4REFBQ3JFLHdHQUFRQTtvQ0FBSXNFLE9BQU07b0NBQVVaLFdBQVU7b0NBQXFCYSxPQUFPckM7Ozs7Ozs4Q0FDdEYsOERBQUMzQix3REFBTUE7b0NBQUM4RCx5QkFBVyw4REFBQ3BFLHlHQUFTQTtvQ0FBSXFFLE9BQU07b0NBQVdaLFdBQVU7b0NBQXFCYSxPQUFPbkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1dBN0J6RjNCLG9DQUFNQTs7Ozs7O0FBcUNuQjtHQXhIU0M7S0FBQUE7QUEwSFQsK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXVzYWJsZS9tb2RhbC5qc3g/MzkxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjsgLy8gTWFrZSBzdXJlIHRvIGltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgRmlYQ2lyY2xlLCBGaVpvb21JbiwgRmlab29tT3V0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZVwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcblxuZnVuY3Rpb24gTW9kYWwoeyBpbWFnZSwgbW9kYWwsIG1vZGFsQ2xvc2UgfSkge1xuICBjb25zdCBib2R5RGl2UmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBpbWFnZURpdlJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgW3pvb20sIHNldFpvb21dID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFt0cmFuc2Zvcm1PcmlnaW4sIHNldFRyYW5zZm9ybU9yaWdpbl0gPSB1c2VTdGF0ZShcImNlbnRlclwiKTtcbiAgY29uc3QgW2ZsZXhDbGFzc2VzLCBzZXRGbGV4Q2xhc3Nlc10gPSB1c2VTdGF0ZShcImZsZXhcIik7XG4gIGNvbnN0IFtzdG9yZWRTY3JvbGxQb3NpdGlvbiwgc2V0U3RvcmVkU2Nyb2xsUG9zaXRpb25dID0gdXNlU3RhdGUoMCk7XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChtb2RhbCkge1xuICAgICAgLy8gU3RvcmUgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uXG4gICAgICBzZXRTdG9yZWRTY3JvbGxQb3NpdGlvbih3aW5kb3cuc2Nyb2xsWSk7XG4gICAgICAvLyBBZGRpdGlvbmFsIGNvZGUgZm9yIHdoZW4gdGhlIG1vZGFsIG9wZW5zXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ292ZXJmbG93LXktaGlkZGVuJyk7XG4gICAgICAvLyBTY3JvbGwgdG8gdGhlIHRvcFxuICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmVzdG9yZSB0aGUgc2Nyb2xsIHBvc2l0aW9uXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICB0b3A6IHN0b3JlZFNjcm9sbFBvc2l0aW9uLFxuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICB9KTtcbiAgICAgIC8vIEFkZGl0aW9uYWwgY29kZSBmb3Igd2hlbiB0aGUgbW9kYWwgY2xvc2VzXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJmbG93LXktaGlkZGVuJyk7XG4gICAgfVxuICB9LCBbbW9kYWxdKTtcblxuXG4gIGNvbnN0IGhhbmRsZVpvb21JbiA9ICgpID0+IHtcbiAgICBzZXRab29tKChwcmV2Wm9vbSkgPT4gcHJldlpvb20gKyAwLjI1KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVab29tT3V0ID0gKCkgPT4ge1xuICAgIHNldFpvb20oKHByZXZab29tKSA9PiAocHJldlpvb20gPiAxID8gcHJldlpvb20gLSAwLjI1IDogcHJldlpvb20pKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiTW9kYWwgc3RhdGU6XCIsIG1vZGFsKTsgXG4gICAgaWYgKG1vZGFsKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ292ZXJmbG93LXktaGlkZGVuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmZsb3cteS1oaWRkZW4nKTtcbiAgICB9XG4gIH0sIFttb2RhbF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHpvb20gPiAxLjUpIHtcbiAgICAgIHNldFRyYW5zZm9ybU9yaWdpbihcInRvcCBsZWZ0XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUcmFuc2Zvcm1PcmlnaW4oXCJjZW50ZXJcIik7XG4gICAgfVxuICB9LCBbem9vbV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgYm9keURpdiA9IGJvZHlEaXZSZWYuY3VycmVudDtcbiAgICBjb25zdCBpbWFnZURpdiA9IGltYWdlRGl2UmVmLmN1cnJlbnQ7XG4gIFxuICAgIGlmIChib2R5RGl2ICYmIGltYWdlRGl2KSB7XG4gICAgICBjb25zdCBib2R5RGl2U2l6ZSA9IGJvZHlEaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBpbWFnZURpdlNpemUgPSBpbWFnZURpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgXG4gICAgICAvLyBDaGVjayBpZiB0aGUgaW1hZ2Ugd2lkdGggaXMgY2xvc2UgZW5vdWdoIHRvIHRoZSBjb250YWluZXIgd2lkdGggdG8gY2F1c2UgYW4gb3ZlcmZsb3cgd2hlbiBjZW50ZXJlZFxuICAgICAgY29uc3QgaXNDbG9zZVRvT3ZlcmZsb3cgPSBNYXRoLmFicyhib2R5RGl2U2l6ZS53aWR0aCAtIGltYWdlRGl2U2l6ZS53aWR0aCkgPjUwOyAvLyBZb3UgY2FuIGFkanVzdCB0aGUgJzUwJyBhcyBuZWVkZWRcbiAgXG4gICAgICBpZiAoaW1hZ2VEaXZTaXplLndpZHRoID4gYm9keURpdlNpemUud2lkdGggfHwgaXNDbG9zZVRvT3ZlcmZsb3cpIHtcbiAgICAgICAgc2V0RmxleENsYXNzZXMoXCJmbGV4XCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0RmxleENsYXNzZXMoXCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFt6b29tXSk7IC8vIFJlLXJ1biB0aGUgZWZmZWN0IHdoZW4gJ3pvb20nIGNoYW5nZXNcbiAgXG5cblxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHttb2RhbCAmJiAoXG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIGtleT17dXVpZHY0fVxuICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IC0xODAgfX1cbiAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCwgeTogLTE4MCB9fSAvLyBUaGlzIGxpbmUgd2lsbCBtYWtlIHRoZSBtb2RhbCBhbmltYXRlIG91dCB3aXRoIHRoZXNlIHZhbHVlc1xuICAgICAgICB0cmFuc2l0aW9uPXt7IGVhc2U6IFwiZWFzZUluT3V0XCIsIGR1cmF0aW9uOiAwLjMgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwiYmctcHJpbWFyeS1saWdodCBmaXhlZCB0b3AtMCBsZWZ0LTAgdy1zY3JlZW4gaC1zY3JlZW4gei01MCBvcGFjaXR5LTk1IHB5LTggZHVyYXRpb24tNTAwXCJcbiAgICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTQgcmlnaHQtNCB6LTEwIG1kOnBiLTQgbWQ6cHgtNCBtZDpzdGF0aWMgbWQ6ZmxleCBtZDppdGVtcy1zdGFydCBtZDpqdXN0aWZ5LWVuZCBtZDp0b3AtMCBtZDpyaWdodC0wIG1kOnotMTBcIj5cbiAgICAgICAgICAgIDxidXR0b24gbGFiZWw9XCJjbG9zZVwiIG9uQ2xpY2s9e21vZGFsQ2xvc2V9PlxuICAgICAgICAgICAgICAgIDxGaVhDaXJjbGUgY2xhc3NOYW1lPVwidGV4dC00eGwgdGV4dC1zbGF0ZS01MDAgaG92ZXI6dGV4dC1wcmltYXJ5LWRhcmtcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgcmVmPXtib2R5RGl2UmVmfSAgY2xhc3NOYW1lPXtgb3ZlcmZsb3ctc2Nyb2xsIGJnLXJlZC00MDAgJHtmbGV4Q2xhc3Nlc31gfT5cbiAgICAgICAgICAgICAgPGRpdiByZWY9e2ltYWdlRGl2UmVmfSBjbGFzc05hbWU9XCJpbWFnZSBjb250YWluZXIgcC0wIHctZml0IGgtZml0IGJnLWdyZWVuLTQwMFwiIHN0eWxlPXt7IHRyYW5zZm9ybTogYHNjYWxlKCR7em9vbX0pYCwgdHJhbnNmb3JtT3JpZ2luOiB0cmFuc2Zvcm1PcmlnaW4gfX0+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlPy5zcmMgfHwgXCJcIn1cbiAgICAgICAgICAgICAgICAgIGFsdD17aW1hZ2U/LmFsdCB8fCBcIlwifVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtpbWFnZT8uaGVpZ2h0IHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICB3aWR0aD17aW1hZ2U/LndpZHRoIHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWF1dG8gaC1bODB2aF0gdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwIHRyYW5zZm9ybS1ncHVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5LWxpZ2h0IHRleHQtY2VudGVyIG10LTQgcHgtOFwiPntpbWFnZT8uYWx0IHx8IFwiXCJ9PC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5LWRhcmsgdGV4dC1jZW50ZXIgbXktNCB3LWZ1bGwgZml4ZWQgYm90dG9tLTBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTJcIj4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uU3RhcnQ9ezxGaVpvb21Jbi8+fSB0aXRsZT0nWm9vbSBpbicgY2xhc3NOYW1lPVwiYmctd2hpdGUgcHktMSBweC0yXCIgY2xpY2s9e2hhbmRsZVpvb21Jbn0vPlxuICAgICAgICAgICAgICA8QnV0dG9uIGljb25TdGFydD17PEZpWm9vbU91dC8+fSB0aXRsZT0nWm9vbSBvdXQnIGNsYXNzTmFtZT1cImJnLXdoaXRlIHB5LTEgcHgtMlwiIGNsaWNrPXtoYW5kbGVab29tT3V0fS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgKX1cbiAgICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkZpWENpcmNsZSIsIkZpWm9vbUluIiwiRmlab29tT3V0IiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJCdXR0b24iLCJ2NCIsInV1aWR2NCIsIk1vZGFsIiwiaW1hZ2UiLCJtb2RhbCIsIm1vZGFsQ2xvc2UiLCJib2R5RGl2UmVmIiwiaW1hZ2VEaXZSZWYiLCJ6b29tIiwic2V0Wm9vbSIsInRyYW5zZm9ybU9yaWdpbiIsInNldFRyYW5zZm9ybU9yaWdpbiIsImZsZXhDbGFzc2VzIiwic2V0RmxleENsYXNzZXMiLCJzdG9yZWRTY3JvbGxQb3NpdGlvbiIsInNldFN0b3JlZFNjcm9sbFBvc2l0aW9uIiwid2luZG93Iiwic2Nyb2xsWSIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJyZW1vdmUiLCJoYW5kbGVab29tSW4iLCJwcmV2Wm9vbSIsImhhbmRsZVpvb21PdXQiLCJjb25zb2xlIiwibG9nIiwiYm9keURpdiIsImN1cnJlbnQiLCJpbWFnZURpdiIsImJvZHlEaXZTaXplIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaW1hZ2VEaXZTaXplIiwiaXNDbG9zZVRvT3ZlcmZsb3ciLCJNYXRoIiwiYWJzIiwid2lkdGgiLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJhbmltYXRlIiwiZXhpdCIsInRyYW5zaXRpb24iLCJlYXNlIiwiZHVyYXRpb24iLCJjbGFzc05hbWUiLCJidXR0b24iLCJsYWJlbCIsIm9uQ2xpY2siLCJyZWYiLCJzdHlsZSIsInRyYW5zZm9ybSIsInNyYyIsImFsdCIsImhlaWdodCIsInAiLCJpY29uU3RhcnQiLCJ0aXRsZSIsImNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/reusable/modal.jsx\n"));

/***/ })

});