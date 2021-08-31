"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/series/[slug]";
exports.ids = ["pages/series/[slug]"];
exports.modules = {

/***/ "./src/pages/series/[slug].tsx":
/*!*************************************!*\
  !*** ./src/pages/series/[slug].tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var simple_react_lightbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! simple-react-lightbox */ \"simple-react-lightbox\");\n/* harmony import */ var simple_react_lightbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(simple_react_lightbox__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _artworks_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../artworks.json */ \"./src/artworks.json\");\n\nvar _jsxFileName = \"/Users/tim/Projects/irene-desvignes/src/pages/series/[slug].tsx\";\n\n\n\n\n\nconst Works = ({\n  serie\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"works-list\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(simple_react_lightbox__WEBPACK_IMPORTED_MODULE_3__.SRLWrapper, {\n      options: {\n        settings: {\n          autoplaySpeed: 0,\n          overlayColor: \"#587171\"\n        },\n        buttons: {\n          showAutoplayButton: false,\n          sowDownloadButton: false,\n          showFullscreenButton: false,\n          showNextButton: false,\n          showPrevButton: false,\n          showThumbnailsButton: false\n        },\n        caption: {\n          showCaption: false\n        },\n        thumbnails: {\n          showThumbnails: false\n        }\n      },\n      children: serie.images.map((row, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: row.map(image => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          href: `/images/works/${serie.slug}/${image}.jpg`,\n          className: \"works-list-thumb\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: `/images/works/${serie.slug}/thumbs/${image}.jpg`,\n            className: \"works-list-img\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 17\n          }, undefined)\n        }, image, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 15\n        }, undefined))\n      }, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 11\n      }, undefined))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, undefined);\n};\n\nconst getStaticPaths = async () => {\n  const filePath = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), \"src/artworks.json\");\n  const artworks = JSON.parse(await fs__WEBPACK_IMPORTED_MODULE_1__.promises.readFile(filePath, \"utf8\"));\n  return {\n    paths: artworks.series.map(serie => ({\n      params: {\n        slug: serie.slug\n      }\n    })),\n    fallback: false\n  };\n};\nconst getStaticProps = async ({\n  params\n}) => {\n  const slug = params === null || params === void 0 ? void 0 : params.slug;\n  const serie = _artworks_json__WEBPACK_IMPORTED_MODULE_4__.series.find(serie => serie.slug === slug);\n  return {\n    props: {\n      serie\n    }\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Works);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Tk07QUFRUCxpRUFBZUQsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYWdlcy9zZXJpZXMvW3NsdWddLnRzeD9kYWM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1BhdGhzLCBHZXRTdGF0aWNQcm9wcywgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgcHJvbWlzZXMgYXMgZnMgfSBmcm9tIFwiZnNcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBTUkxXcmFwcGVyIH0gZnJvbSBcInNpbXBsZS1yZWFjdC1saWdodGJveFwiO1xuaW1wb3J0IGFydHdvcmtzIGZyb20gXCIuLi8uLi9hcnR3b3Jrcy5qc29uXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHNlcmllOiB7IHNsdWc6IHN0cmluZzsgbmFtZTogc3RyaW5nOyBpbWFnZXM6IChudW1iZXIgfCBzdHJpbmcpW11bXSB9O1xufVxuXG5jb25zdCBXb3JrczogTmV4dFBhZ2U8UHJvcHM+ID0gKHsgc2VyaWUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3Jrcy1saXN0XCI+PC9kaXY+XG4gICAgICA8U1JMV3JhcHBlclxuICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgc2V0dGluZ3M6IHsgYXV0b3BsYXlTcGVlZDogMCwgb3ZlcmxheUNvbG9yOiBcIiM1ODcxNzFcIiB9LFxuICAgICAgICAgIGJ1dHRvbnM6IHtcbiAgICAgICAgICAgIHNob3dBdXRvcGxheUJ1dHRvbjogZmFsc2UsXG4gICAgICAgICAgICBzb3dEb3dubG9hZEJ1dHRvbjogZmFsc2UsXG4gICAgICAgICAgICBzaG93RnVsbHNjcmVlbkJ1dHRvbjogZmFsc2UsXG4gICAgICAgICAgICBzaG93TmV4dEJ1dHRvbjogZmFsc2UsXG4gICAgICAgICAgICBzaG93UHJldkJ1dHRvbjogZmFsc2UsXG4gICAgICAgICAgICBzaG93VGh1bWJuYWlsc0J1dHRvbjogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjYXB0aW9uOiB7IHNob3dDYXB0aW9uOiBmYWxzZSB9LFxuICAgICAgICAgIHRodW1ibmFpbHM6IHsgc2hvd1RodW1ibmFpbHM6IGZhbHNlIH0sXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtzZXJpZS5pbWFnZXMubWFwKChyb3csIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIHtyb3cubWFwKChpbWFnZSkgPT4gKFxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e2AvaW1hZ2VzL3dvcmtzLyR7c2VyaWUuc2x1Z30vJHtpbWFnZX0uanBnYH1cbiAgICAgICAgICAgICAgICBrZXk9e2ltYWdlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndvcmtzLWxpc3QtdGh1bWJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltYWdlcy93b3Jrcy8ke3NlcmllLnNsdWd9L3RodW1icy8ke2ltYWdlfS5qcGdgfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid29ya3MtbGlzdC1pbWdcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvU1JMV3JhcHBlcj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHM6IEdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcInNyYy9hcnR3b3Jrcy5qc29uXCIpO1xuICBjb25zdCBhcnR3b3JrcyA9IEpTT04ucGFyc2UoYXdhaXQgZnMucmVhZEZpbGUoZmlsZVBhdGgsIFwidXRmOFwiKSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoczogYXJ0d29ya3Muc2VyaWVzLm1hcCgoc2VyaWU6IHsgc2x1Zzogc3RyaW5nIH0pID0+ICh7XG4gICAgICBwYXJhbXM6IHsgc2x1Zzogc2VyaWUuc2x1ZyB9LFxuICAgIH0pKSxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzPFByb3BzPiA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IHNsdWcgPSBwYXJhbXM/LnNsdWcgYXMgc3RyaW5nO1xuICBjb25zdCBzZXJpZSA9IGFydHdvcmtzLnNlcmllcy5maW5kKFxuICAgIChzZXJpZTogeyBzbHVnOiBzdHJpbmcgfSkgPT4gc2VyaWUuc2x1ZyA9PT0gc2x1Z1xuICApO1xuICByZXR1cm4geyBwcm9wczogeyBzZXJpZSB9IH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXb3JrcztcbiJdLCJuYW1lcyI6WyJwcm9taXNlcyIsImZzIiwicGF0aCIsIlNSTFdyYXBwZXIiLCJhcnR3b3JrcyIsIldvcmtzIiwic2VyaWUiLCJzZXR0aW5ncyIsImF1dG9wbGF5U3BlZWQiLCJvdmVybGF5Q29sb3IiLCJidXR0b25zIiwic2hvd0F1dG9wbGF5QnV0dG9uIiwic293RG93bmxvYWRCdXR0b24iLCJzaG93RnVsbHNjcmVlbkJ1dHRvbiIsInNob3dOZXh0QnV0dG9uIiwic2hvd1ByZXZCdXR0b24iLCJzaG93VGh1bWJuYWlsc0J1dHRvbiIsImNhcHRpb24iLCJzaG93Q2FwdGlvbiIsInRodW1ibmFpbHMiLCJzaG93VGh1bWJuYWlscyIsImltYWdlcyIsIm1hcCIsInJvdyIsImluZGV4IiwiaW1hZ2UiLCJzbHVnIiwiZ2V0U3RhdGljUGF0aHMiLCJmaWxlUGF0aCIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiSlNPTiIsInBhcnNlIiwicmVhZEZpbGUiLCJwYXRocyIsInNlcmllcyIsInBhcmFtcyIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJmaW5kIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/series/[slug].tsx\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "simple-react-lightbox":
/*!****************************************!*\
  !*** external "simple-react-lightbox" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("simple-react-lightbox");

/***/ }),

/***/ "./src/artworks.json":
/*!***************************!*\
  !*** ./src/artworks.json ***!
  \***************************/
/***/ ((module) => {

module.exports = JSON.parse('{"series":[{"slug":"poupees","name":"Poupées","images":[[1,2,3],[4,5,6,7,8],[9,10,11,12,13,14,15,16],[17,18,19,20,21,22],[23,24],[25,26,27,28,29,30,31,32],[33,34,35,36]]},{"slug":"iles","name":"Îles","images":[["lago-verde-1","lago-verde-3","lago-verde-2","lago-verde-4"],["isola-lobos-1","isola-lobos-2"],["paysages-lanzarote-1","paysages-lanzarote-2","paysages-lanzarote-3","paysages-lanzarote-4"],["paysages-lanzarote-5","paysages-lanzarote-6","paysages-lanzarote-7","paysages-lanzarote-8"],["paysages-lanzarote-9","paysages-lanzarote-10","paysages-lanzarote-11"],["ilots-zen-1","ilots-zen-2","ilots-zen-3","ilots-zen-4"],["ilots-zen-5","ilots-zen-6"],["cartographie-sejours-1","cartographie-sejours-2","cartographie-sejours-3","cartographie-sejours-4"],["cartographie-sejours-5","cartographie-sejours-6","cartographie-sejours-7","cartographie-sejours-8"],["cartographie-sejours-9","cartographie-sejours-10","cartographie-sejours-11","cartographie-sejours-12"],["petits-volcans-apprivoises-1","petits-volcans-apprivoises-2","petits-volcans-apprivoises-3","petits-volcans-apprivoises-4"],["petits-volcans-apprivoises-5","petits-volcans-apprivoises-6","petits-volcans-apprivoises-7"]]},{"slug":"jardins","name":"Jardins","images":[[21,10,11,7],[20,9,6],[15,16,17,18],[12,13,14,5],[1,3,2]]},{"slug":"autoportraits","name":"Autoportraits","images":[[1,2,3]]},{"slug":"eau","name":"Le bord de l\'eau","images":[[1,2,3,4],[5,6,7]]},{"slug":"dialogues","name":"Dialogues","images":[[1,2,3,4],[5,6,7,8],[9]]},{"slug":"geographies","name":"Géo-graphies","images":[[1,2,3,4],[5,7,6],[8,9,10]]}]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/series/[slug].tsx"));
module.exports = __webpack_exports__;

})();