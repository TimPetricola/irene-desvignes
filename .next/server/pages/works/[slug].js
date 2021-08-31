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
exports.id = "pages/works/[slug]";
exports.ids = ["pages/works/[slug]"];
exports.modules = {

/***/ "./src/pages/works/[slug].tsx":
/*!************************************!*\
  !*** ./src/pages/works/[slug].tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _artworks_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../artworks.json */ \"./src/artworks.json\");\n\nvar _jsxFileName = \"/Users/tim/Projects/irene-desvignes/src/pages/works/[slug].tsx\";\n\n\n\n\nconst Works = ({\n  serie\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"works-list\",\n      children: serie.images.map((row, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: row.map(image => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          href: \"#\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: `/images/works/${serie.slug}/${image}.jpg`\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 17\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 15\n        }, undefined))\n      }, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 11\n      }, undefined))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, undefined);\n};\n\nconst getStaticPaths = async () => {\n  const filePath = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), \"src/artworks.json\");\n  const artworks = JSON.parse(await fs__WEBPACK_IMPORTED_MODULE_1__.promises.readFile(filePath, \"utf8\"));\n  return {\n    paths: artworks.series.map(serie => ({\n      params: {\n        slug: serie.slug\n      }\n    })),\n    fallback: false\n  };\n};\nconst getStaticProps = async ({\n  params\n}) => {\n  const slug = params === null || params === void 0 ? void 0 : params.slug;\n  const serie = _artworks_json__WEBPACK_IMPORTED_MODULE_3__.series.find(serie => serie.slug === slug);\n  return {\n    props: {\n      serie\n    }\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Works);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvd29ya3MvW3NsdWddLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7O0FBTUEsTUFBTUksS0FBc0IsR0FBRyxDQUFDO0FBQUVDLEVBQUFBO0FBQUYsQ0FBRCxLQUFlO0FBQzVDLHNCQUNFO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBLGdCQUNHQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsR0FBYixDQUFpQixDQUFDQyxHQUFELEVBQU1DLEtBQU4sa0JBQ2hCO0FBQUEsa0JBQ0dELEdBQUcsQ0FBQ0QsR0FBSixDQUFTRyxLQUFELGlCQUNQO0FBQUcsY0FBSSxFQUFDLEdBQVI7QUFBQSxpQ0FDRTtBQUFLLGVBQUcsRUFBRyxpQkFBZ0JMLEtBQUssQ0FBQ00sSUFBSyxJQUFHRCxLQUFNO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUREO0FBREgsU0FBVUQsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWVELENBaEJEOztBQWtCTyxNQUFNRyxjQUE4QixHQUFHLFlBQVk7QUFDeEQsUUFBTUMsUUFBUSxHQUFHWCxnREFBQSxDQUFVYSxPQUFPLENBQUNDLEdBQVIsRUFBVixFQUF5QixtQkFBekIsQ0FBakI7QUFDQSxRQUFNYixRQUFRLEdBQUdjLElBQUksQ0FBQ0MsS0FBTCxDQUFXLE1BQU1qQixpREFBQSxDQUFZWSxRQUFaLEVBQXNCLE1BQXRCLENBQWpCLENBQWpCO0FBRUEsU0FBTztBQUNMTyxJQUFBQSxLQUFLLEVBQUVqQixRQUFRLENBQUNrQixNQUFULENBQWdCZCxHQUFoQixDQUFxQkYsS0FBRCxLQUE4QjtBQUN2RGlCLE1BQUFBLE1BQU0sRUFBRTtBQUFFWCxRQUFBQSxJQUFJLEVBQUVOLEtBQUssQ0FBQ007QUFBZDtBQUQrQyxLQUE5QixDQUFwQixDQURGO0FBSUxZLElBQUFBLFFBQVEsRUFBRTtBQUpMLEdBQVA7QUFNRCxDQVZNO0FBWUEsTUFBTUMsY0FBcUMsR0FBRyxPQUFPO0FBQUVGLEVBQUFBO0FBQUYsQ0FBUCxLQUFzQjtBQUN6RSxRQUFNWCxJQUFJLEdBQUdXLE1BQUgsYUFBR0EsTUFBSCx1QkFBR0EsTUFBTSxDQUFFWCxJQUFyQjtBQUNBLFFBQU1OLEtBQUssR0FBR0YsdURBQUEsQ0FDWEUsS0FBRCxJQUE2QkEsS0FBSyxDQUFDTSxJQUFOLEtBQWVBLElBRGhDLENBQWQ7QUFHQSxTQUFPO0FBQUVlLElBQUFBLEtBQUssRUFBRTtBQUFFckIsTUFBQUE7QUFBRjtBQUFULEdBQVA7QUFDRCxDQU5NO0FBUVAsaUVBQWVELEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvd29ya3MvW3NsdWddLnRzeD9hZjNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1BhdGhzLCBHZXRTdGF0aWNQcm9wcywgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgcHJvbWlzZXMgYXMgZnMgfSBmcm9tIFwiZnNcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgYXJ0d29ya3MgZnJvbSBcIi4uLy4uL2FydHdvcmtzLmpzb25cIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgc2VyaWU6IHsgc2x1Zzogc3RyaW5nOyBuYW1lOiBzdHJpbmc7IGltYWdlczogKG51bWJlciB8IHN0cmluZylbXVtdIH07XG59XG5cbmNvbnN0IFdvcmtzOiBOZXh0UGFnZTxQcm9wcz4gPSAoeyBzZXJpZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmtzLWxpc3RcIj5cbiAgICAgICAge3NlcmllLmltYWdlcy5tYXAoKHJvdywgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAge3Jvdy5tYXAoKGltYWdlKSA9PiAoXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2AvaW1hZ2VzL3dvcmtzLyR7c2VyaWUuc2x1Z30vJHtpbWFnZX0uanBnYH0gLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzOiBHZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgXCJzcmMvYXJ0d29ya3MuanNvblwiKTtcbiAgY29uc3QgYXJ0d29ya3MgPSBKU09OLnBhcnNlKGF3YWl0IGZzLnJlYWRGaWxlKGZpbGVQYXRoLCBcInV0ZjhcIikpO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHM6IGFydHdvcmtzLnNlcmllcy5tYXAoKHNlcmllOiB7IHNsdWc6IHN0cmluZyB9KSA9PiAoe1xuICAgICAgcGFyYW1zOiB7IHNsdWc6IHNlcmllLnNsdWcgfSxcbiAgICB9KSksXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wczxQcm9wcz4gPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCBzbHVnID0gcGFyYW1zPy5zbHVnIGFzIHN0cmluZztcbiAgY29uc3Qgc2VyaWUgPSBhcnR3b3Jrcy5zZXJpZXMuZmluZChcbiAgICAoc2VyaWU6IHsgc2x1Zzogc3RyaW5nIH0pID0+IHNlcmllLnNsdWcgPT09IHNsdWdcbiAgKTtcbiAgcmV0dXJuIHsgcHJvcHM6IHsgc2VyaWUgfSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV29ya3M7XG4iXSwibmFtZXMiOlsicHJvbWlzZXMiLCJmcyIsInBhdGgiLCJhcnR3b3JrcyIsIldvcmtzIiwic2VyaWUiLCJpbWFnZXMiLCJtYXAiLCJyb3ciLCJpbmRleCIsImltYWdlIiwic2x1ZyIsImdldFN0YXRpY1BhdGhzIiwiZmlsZVBhdGgiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsIkpTT04iLCJwYXJzZSIsInJlYWRGaWxlIiwicGF0aHMiLCJzZXJpZXMiLCJwYXJhbXMiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwiZmluZCIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/works/[slug].tsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/works/[slug].tsx"));
module.exports = __webpack_exports__;

})();