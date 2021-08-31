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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _artworks_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../artworks.json */ \"./src/artworks.json\");\n\nvar _jsxFileName = \"/Users/tim/Projects/irene-desvignes/src/pages/series/[slug].tsx\";\n\n\n\n\nconst Works = ({\n  serie\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"works-list\",\n      children: serie.images.map((row, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: row.map(image => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          href: \"#\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: `/images/works/${serie.slug}/${image}.jpg`\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 17\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 15\n        }, undefined))\n      }, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 11\n      }, undefined))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, undefined);\n};\n\nconst getStaticPaths = async () => {\n  const filePath = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), \"src/artworks.json\");\n  const artworks = JSON.parse(await fs__WEBPACK_IMPORTED_MODULE_1__.promises.readFile(filePath, \"utf8\"));\n  return {\n    paths: artworks.series.map(serie => ({\n      params: {\n        slug: serie.slug\n      }\n    })),\n    fallback: false\n  };\n};\nconst getStaticProps = async ({\n  params\n}) => {\n  const slug = params === null || params === void 0 ? void 0 : params.slug;\n  const serie = _artworks_json__WEBPACK_IMPORTED_MODULE_3__.series.find(serie => serie.slug === slug);\n  return {\n    props: {\n      serie\n    }\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Works);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc2VyaWVzL1tzbHVnXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOztBQU1BLE1BQU1JLEtBQXNCLEdBQUcsQ0FBQztBQUFFQyxFQUFBQTtBQUFGLENBQUQsS0FBZTtBQUM1QyxzQkFDRTtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQSxnQkFDR0EsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEdBQWIsQ0FBaUIsQ0FBQ0MsR0FBRCxFQUFNQyxLQUFOLGtCQUNoQjtBQUFBLGtCQUNHRCxHQUFHLENBQUNELEdBQUosQ0FBU0csS0FBRCxpQkFDUDtBQUFHLGNBQUksRUFBQyxHQUFSO0FBQUEsaUNBQ0U7QUFBSyxlQUFHLEVBQUcsaUJBQWdCTCxLQUFLLENBQUNNLElBQUssSUFBR0QsS0FBTTtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERDtBQURILFNBQVVELEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFlRCxDQWhCRDs7QUFrQk8sTUFBTUcsY0FBOEIsR0FBRyxZQUFZO0FBQ3hELFFBQU1DLFFBQVEsR0FBR1gsZ0RBQUEsQ0FBVWEsT0FBTyxDQUFDQyxHQUFSLEVBQVYsRUFBeUIsbUJBQXpCLENBQWpCO0FBQ0EsUUFBTWIsUUFBUSxHQUFHYyxJQUFJLENBQUNDLEtBQUwsQ0FBVyxNQUFNakIsaURBQUEsQ0FBWVksUUFBWixFQUFzQixNQUF0QixDQUFqQixDQUFqQjtBQUVBLFNBQU87QUFDTE8sSUFBQUEsS0FBSyxFQUFFakIsUUFBUSxDQUFDa0IsTUFBVCxDQUFnQmQsR0FBaEIsQ0FBcUJGLEtBQUQsS0FBOEI7QUFDdkRpQixNQUFBQSxNQUFNLEVBQUU7QUFBRVgsUUFBQUEsSUFBSSxFQUFFTixLQUFLLENBQUNNO0FBQWQ7QUFEK0MsS0FBOUIsQ0FBcEIsQ0FERjtBQUlMWSxJQUFBQSxRQUFRLEVBQUU7QUFKTCxHQUFQO0FBTUQsQ0FWTTtBQVlBLE1BQU1DLGNBQXFDLEdBQUcsT0FBTztBQUFFRixFQUFBQTtBQUFGLENBQVAsS0FBc0I7QUFDekUsUUFBTVgsSUFBSSxHQUFHVyxNQUFILGFBQUdBLE1BQUgsdUJBQUdBLE1BQU0sQ0FBRVgsSUFBckI7QUFDQSxRQUFNTixLQUFLLEdBQUdGLHVEQUFBLENBQ1hFLEtBQUQsSUFBNkJBLEtBQUssQ0FBQ00sSUFBTixLQUFlQSxJQURoQyxDQUFkO0FBR0EsU0FBTztBQUFFZSxJQUFBQSxLQUFLLEVBQUU7QUFBRXJCLE1BQUFBO0FBQUY7QUFBVCxHQUFQO0FBQ0QsQ0FOTTtBQVFQLGlFQUFlRCxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Nlcmllcy9bc2x1Z10udHN4P2RhYzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U3RhdGljUGF0aHMsIEdldFN0YXRpY1Byb3BzLCBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBwcm9taXNlcyBhcyBmcyB9IGZyb20gXCJmc1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCBhcnR3b3JrcyBmcm9tIFwiLi4vLi4vYXJ0d29ya3MuanNvblwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzZXJpZTogeyBzbHVnOiBzdHJpbmc7IG5hbWU6IHN0cmluZzsgaW1hZ2VzOiAobnVtYmVyIHwgc3RyaW5nKVtdW10gfTtcbn1cblxuY29uc3QgV29ya3M6IE5leHRQYWdlPFByb3BzPiA9ICh7IHNlcmllIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29ya3MtbGlzdFwiPlxuICAgICAgICB7c2VyaWUuaW1hZ2VzLm1hcCgocm93LCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICB7cm93Lm1hcCgoaW1hZ2UpID0+IChcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17YC9pbWFnZXMvd29ya3MvJHtzZXJpZS5zbHVnfS8ke2ltYWdlfS5qcGdgfSAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHM6IEdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcInNyYy9hcnR3b3Jrcy5qc29uXCIpO1xuICBjb25zdCBhcnR3b3JrcyA9IEpTT04ucGFyc2UoYXdhaXQgZnMucmVhZEZpbGUoZmlsZVBhdGgsIFwidXRmOFwiKSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoczogYXJ0d29ya3Muc2VyaWVzLm1hcCgoc2VyaWU6IHsgc2x1Zzogc3RyaW5nIH0pID0+ICh7XG4gICAgICBwYXJhbXM6IHsgc2x1Zzogc2VyaWUuc2x1ZyB9LFxuICAgIH0pKSxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzPFByb3BzPiA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IHNsdWcgPSBwYXJhbXM/LnNsdWcgYXMgc3RyaW5nO1xuICBjb25zdCBzZXJpZSA9IGFydHdvcmtzLnNlcmllcy5maW5kKFxuICAgIChzZXJpZTogeyBzbHVnOiBzdHJpbmcgfSkgPT4gc2VyaWUuc2x1ZyA9PT0gc2x1Z1xuICApO1xuICByZXR1cm4geyBwcm9wczogeyBzZXJpZSB9IH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXb3JrcztcbiJdLCJuYW1lcyI6WyJwcm9taXNlcyIsImZzIiwicGF0aCIsImFydHdvcmtzIiwiV29ya3MiLCJzZXJpZSIsImltYWdlcyIsIm1hcCIsInJvdyIsImluZGV4IiwiaW1hZ2UiLCJzbHVnIiwiZ2V0U3RhdGljUGF0aHMiLCJmaWxlUGF0aCIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiSlNPTiIsInBhcnNlIiwicmVhZEZpbGUiLCJwYXRocyIsInNlcmllcyIsInBhcmFtcyIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJmaW5kIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/series/[slug].tsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/series/[slug].tsx"));
module.exports = __webpack_exports__;

})();