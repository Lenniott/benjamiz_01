"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./data/aboutMeData.js":
/*!*****************************!*\
  !*** ./data/aboutMeData.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aboutMeData: function() { return /* binding */ aboutMeData; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _public_images_aboutMe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/images/aboutMe */ \"./public/images/aboutMe/index.jsx\");\n\n\n\nconst aboutMeData = [\n    {\n        id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)(),\n        title: \"\\uD83D\\uDC64 About me\",\n        image: _public_images_aboutMe__WEBPACK_IMPORTED_MODULE_1__[\"default\"].point,\n        bio: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: \"I'm Benjamin, a problem solver who loves a challenge. I excel at simplifying complex issues and taking the initiative to fix what's broken. I value direct communication and factual reasoning, and I'm committed to personal growth and sensitivity to others' needs. Outside work, I'm an avid learner, bouldering enthusiast, and singer-songwriter who's always keen to expand my knowledge.\"\n        }, void 0, false)\n    },\n    {\n        id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)(),\n        title: \"\\uD83D\\uDC68‍\\uD83D\\uDC69‍\\uD83D\\uDC67‍\\uD83D\\uDC66 Family & Me\",\n        image: _public_images_aboutMe__WEBPACK_IMPORTED_MODULE_1__[\"default\"].family,\n        bio: \"I'm a devoted husband and father, my family is what drives me to continually grow and improve both personally and professionally. My main aim is to ensure a strong foundation for us to thrive.\"\n    },\n    {\n        id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)(),\n        title: \"\\uD83D\\uDC68‍\\uD83D\\uDCBB Professional Me\",\n        image: _public_images_aboutMe__WEBPACK_IMPORTED_MODULE_1__[\"default\"].proMe,\n        bio: \"I thrive in agile settings, advocating for full team involvment throughout development. My design approach balances user needs with business goals. With a strong technical understanding, I excel at fostering collaboration to deliver impactful, straightforward solutions.\"\n    },\n    {\n        id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)(),\n        title: \"\\uD83D\\uDD0D Curious me\",\n        image: _public_images_aboutMe__WEBPACK_IMPORTED_MODULE_1__[\"default\"].thoughts,\n        bio: \"I'm naturally curious, and always eager to dig deeper. I am continually working towards making the fuzzy focused through investigation, questions and validating work often with other stake holders\"\n    },\n    {\n        id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)(),\n        title: \"\\uD83C\\uDFAF Why Me?\",\n        image: _public_images_aboutMe__WEBPACK_IMPORTED_MODULE_1__[\"default\"].cliff,\n        bio: \"I'm passionate about product development and deeply committed to refining the principles that guide how my team and I build products. My approach blends empathy, collaboration, and curiosity with strategic thinking and continuous learning. This holistic perspective enables us to truly embody the agile methodology in every project we undertake.\"\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhL2Fib3V0TWVEYXRhLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFvQztBQUNpQjtBQUM5QyxNQUFNRyxjQUFjO0lBQ3pCO1FBQ0VDLElBQUlILHdDQUFNQTtRQUNWSSxPQUFPO1FBQ1BDLE9BQU9KLG9FQUFtQjtRQUMxQk0sbUJBQ0U7c0JBQUU7O0lBU047SUFDQTtRQUNFSixJQUFJSCx3Q0FBTUE7UUFDVkksT0FBTztRQUNQQyxPQUFPSixxRUFBb0I7UUFDM0JNLEtBQUs7SUFDUDtJQUNBO1FBQ0VKLElBQUlILHdDQUFNQTtRQUNWSSxPQUFPO1FBQ1BDLE9BQU9KLG9FQUFtQjtRQUMxQk0sS0FBSztJQUNQO0lBQ0E7UUFDRUosSUFBSUgsd0NBQU1BO1FBQ1ZJLE9BQU87UUFDUEMsT0FBT0osdUVBQXNCO1FBQzdCTSxLQUFLO0lBQ1A7SUFDQTtRQUNFSixJQUFJSCx3Q0FBTUE7UUFDVkksT0FBTztRQUNQQyxPQUFPSixvRUFBbUI7UUFDMUJNLEtBQUs7SUFDUDtDQUNELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGF0YS9hYm91dE1lRGF0YS5qcz9jMWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgYWJvdXRNZUltYWdlcyBmcm9tIFwiLi4vcHVibGljL2ltYWdlcy9hYm91dE1lXCI7XG5leHBvcnQgY29uc3QgYWJvdXRNZURhdGEgPSBbXG4gIHtcbiAgICBpZDogdXVpZHY0KCksXG4gICAgdGl0bGU6IFwi8J+RpCBBYm91dCBtZVwiLFxuICAgIGltYWdlOiBhYm91dE1lSW1hZ2VzLnBvaW50LFxuICAgIGJpbzogKFxuICAgICAgPD5cbiAgICAgICAgSSdtIEJlbmphbWluLCBhIHByb2JsZW0gc29sdmVyIHdobyBsb3ZlcyBhIGNoYWxsZW5nZS4gSSBleGNlbCBhdFxuICAgICAgICBzaW1wbGlmeWluZyBjb21wbGV4IGlzc3VlcyBhbmQgdGFraW5nIHRoZSBpbml0aWF0aXZlIHRvIGZpeCB3aGF0J3NcbiAgICAgICAgYnJva2VuLiBJIHZhbHVlIGRpcmVjdCBjb21tdW5pY2F0aW9uIGFuZCBmYWN0dWFsIHJlYXNvbmluZywgYW5kIEknbVxuICAgICAgICBjb21taXR0ZWQgdG8gcGVyc29uYWwgZ3Jvd3RoIGFuZCBzZW5zaXRpdml0eSB0byBvdGhlcnMnIG5lZWRzLiBPdXRzaWRlXG4gICAgICAgIHdvcmssIEknbSBhbiBhdmlkIGxlYXJuZXIsIGJvdWxkZXJpbmcgZW50aHVzaWFzdCwgYW5kIHNpbmdlci1zb25nd3JpdGVyXG4gICAgICAgIHdobydzIGFsd2F5cyBrZWVuIHRvIGV4cGFuZCBteSBrbm93bGVkZ2UuXG4gICAgICA8Lz5cbiAgICApLFxuICB9LFxuICB7XG4gICAgaWQ6IHV1aWR2NCgpLFxuICAgIHRpdGxlOiBcIvCfkajigI3wn5Gp4oCN8J+Rp+KAjfCfkaYgRmFtaWx5ICYgTWVcIixcbiAgICBpbWFnZTogYWJvdXRNZUltYWdlcy5mYW1pbHksXG4gICAgYmlvOiBcIkknbSBhIGRldm90ZWQgaHVzYmFuZCBhbmQgZmF0aGVyLCBteSBmYW1pbHkgaXMgd2hhdCBkcml2ZXMgbWUgdG8gY29udGludWFsbHkgZ3JvdyBhbmQgaW1wcm92ZSBib3RoIHBlcnNvbmFsbHkgYW5kIHByb2Zlc3Npb25hbGx5LiBNeSBtYWluIGFpbSBpcyB0byBlbnN1cmUgYSBzdHJvbmcgZm91bmRhdGlvbiBmb3IgdXMgdG8gdGhyaXZlLlwiLFxuICB9LFxuICB7XG4gICAgaWQ6IHV1aWR2NCgpLFxuICAgIHRpdGxlOiBcIvCfkajigI3wn5K7IFByb2Zlc3Npb25hbCBNZVwiLFxuICAgIGltYWdlOiBhYm91dE1lSW1hZ2VzLnByb01lLFxuICAgIGJpbzogXCJJIHRocml2ZSBpbiBhZ2lsZSBzZXR0aW5ncywgYWR2b2NhdGluZyBmb3IgZnVsbCB0ZWFtIGludm9sdm1lbnQgdGhyb3VnaG91dCBkZXZlbG9wbWVudC4gTXkgZGVzaWduIGFwcHJvYWNoIGJhbGFuY2VzIHVzZXIgbmVlZHMgd2l0aCBidXNpbmVzcyBnb2Fscy4gV2l0aCBhIHN0cm9uZyB0ZWNobmljYWwgdW5kZXJzdGFuZGluZywgSSBleGNlbCBhdCBmb3N0ZXJpbmcgY29sbGFib3JhdGlvbiB0byBkZWxpdmVyIGltcGFjdGZ1bCwgc3RyYWlnaHRmb3J3YXJkIHNvbHV0aW9ucy5cIixcbiAgfSxcbiAge1xuICAgIGlkOiB1dWlkdjQoKSxcbiAgICB0aXRsZTogXCLwn5SNIEN1cmlvdXMgbWVcIixcbiAgICBpbWFnZTogYWJvdXRNZUltYWdlcy50aG91Z2h0cyxcbiAgICBiaW86IFwiSSdtIG5hdHVyYWxseSBjdXJpb3VzLCBhbmQgYWx3YXlzIGVhZ2VyIHRvIGRpZyBkZWVwZXIuIEkgYW0gY29udGludWFsbHkgd29ya2luZyB0b3dhcmRzIG1ha2luZyB0aGUgZnV6enkgZm9jdXNlZCB0aHJvdWdoIGludmVzdGlnYXRpb24sIHF1ZXN0aW9ucyBhbmQgdmFsaWRhdGluZyB3b3JrIG9mdGVuIHdpdGggb3RoZXIgc3Rha2UgaG9sZGVyc1wiLFxuICB9LFxuICB7XG4gICAgaWQ6IHV1aWR2NCgpLFxuICAgIHRpdGxlOiBcIvCfjq8gV2h5IE1lP1wiLFxuICAgIGltYWdlOiBhYm91dE1lSW1hZ2VzLmNsaWZmLFxuICAgIGJpbzogXCJJJ20gcGFzc2lvbmF0ZSBhYm91dCBwcm9kdWN0IGRldmVsb3BtZW50IGFuZCBkZWVwbHkgY29tbWl0dGVkIHRvIHJlZmluaW5nIHRoZSBwcmluY2lwbGVzIHRoYXQgZ3VpZGUgaG93IG15IHRlYW0gYW5kIEkgYnVpbGQgcHJvZHVjdHMuIE15IGFwcHJvYWNoIGJsZW5kcyBlbXBhdGh5LCBjb2xsYWJvcmF0aW9uLCBhbmQgY3VyaW9zaXR5IHdpdGggc3RyYXRlZ2ljIHRoaW5raW5nIGFuZCBjb250aW51b3VzIGxlYXJuaW5nLiBUaGlzIGhvbGlzdGljIHBlcnNwZWN0aXZlIGVuYWJsZXMgdXMgdG8gdHJ1bHkgZW1ib2R5IHRoZSBhZ2lsZSBtZXRob2RvbG9neSBpbiBldmVyeSBwcm9qZWN0IHdlIHVuZGVydGFrZS5cIixcbiAgfSxcbl07XG4iXSwibmFtZXMiOlsidjQiLCJ1dWlkdjQiLCJhYm91dE1lSW1hZ2VzIiwiYWJvdXRNZURhdGEiLCJpZCIsInRpdGxlIiwiaW1hZ2UiLCJwb2ludCIsImJpbyIsImZhbWlseSIsInByb01lIiwidGhvdWdodHMiLCJjbGlmZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./data/aboutMeData.js\n"));

/***/ })

});