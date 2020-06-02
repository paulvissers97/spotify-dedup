webpackHotUpdate("static/development/pages/index.js",{

/***/ "./dedup/playlist-cache.ts":
/*!*********************************!*\
  !*** ./dedup/playlist-cache.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PlaylistCache; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar SNAPSHOT_VERSION = 'v1';\n\nvar PlaylistCache = /*#__PURE__*/function () {\n  function PlaylistCache() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, PlaylistCache);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(PlaylistCache, [{\n    key: \"needsCheckForDuplicates\",\n    value: function needsCheckForDuplicates(playlist) {\n      if ('snapshot_id' in playlist) {\n        try {\n          if (localStorage.getItem(playlist.snapshot_id) === SNAPSHOT_VERSION) {\n            return false;\n          }\n        } catch (e) {\n          return true;\n        }\n      }\n\n      return true;\n    }\n  }, {\n    key: \"storePlaylistWithoutDuplicates\",\n    value: function storePlaylistWithoutDuplicates(playlist) {\n      if ('snapshot_id' in playlist) {\n        try {\n          localStorage.setItem(playlist.snapshot_id, SNAPSHOT_VERSION);\n        } catch (e) {}\n      }\n    }\n  }]);\n\n  return PlaylistCache;\n}();\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZWR1cC9wbGF5bGlzdC1jYWNoZS50cz9mYmFjIl0sIm5hbWVzIjpbIlNOQVBTSE9UX1ZFUlNJT04iLCJQbGF5bGlzdENhY2hlIiwicGxheWxpc3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic25hcHNob3RfaWQiLCJlIiwic2V0SXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsSUFBTUEsZ0JBQWdCLEdBQUcsSUFBekI7O0lBQ3FCQyxhOzs7Ozs7OzRDQUNLQyxRLEVBQStCO0FBQ3JELFVBQUksaUJBQWlCQSxRQUFyQixFQUErQjtBQUM3QixZQUFJO0FBQ0YsY0FBSUMsWUFBWSxDQUFDQyxPQUFiLENBQXFCRixRQUFRLENBQUNHLFdBQTlCLE1BQStDTCxnQkFBbkQsRUFBcUU7QUFDbkUsbUJBQU8sS0FBUDtBQUNEO0FBQ0YsU0FKRCxDQUlFLE9BQU9NLENBQVAsRUFBVTtBQUNWLGlCQUFPLElBQVA7QUFDRDtBQUNGOztBQUNELGFBQU8sSUFBUDtBQUNEOzs7bURBRThCSixRLEVBQStCO0FBQzVELFVBQUksaUJBQWlCQSxRQUFyQixFQUErQjtBQUM3QixZQUFJO0FBQ0ZDLHNCQUFZLENBQUNJLE9BQWIsQ0FBcUJMLFFBQVEsQ0FBQ0csV0FBOUIsRUFBMkNMLGdCQUEzQztBQUNELFNBRkQsQ0FFRSxPQUFPTSxDQUFQLEVBQVUsQ0FBRTtBQUNmO0FBQ0YiLCJmaWxlIjoiLi9kZWR1cC9wbGF5bGlzdC1jYWNoZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNwb3RpZnlQbGF5bGlzdFR5cGUgfSBmcm9tICcuL3Nwb3RpZnktYXBpJztcbmNvbnN0IFNOQVBTSE9UX1ZFUlNJT04gPSAndjEnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWxpc3RDYWNoZSB7XG4gIG5lZWRzQ2hlY2tGb3JEdXBsaWNhdGVzKHBsYXlsaXN0OiBTcG90aWZ5UGxheWxpc3RUeXBlKSB7XG4gICAgaWYgKCdzbmFwc2hvdF9pZCcgaW4gcGxheWxpc3QpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwbGF5bGlzdC5zbmFwc2hvdF9pZCkgPT09IFNOQVBTSE9UX1ZFUlNJT04pIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc3RvcmVQbGF5bGlzdFdpdGhvdXREdXBsaWNhdGVzKHBsYXlsaXN0OiBTcG90aWZ5UGxheWxpc3RUeXBlKSB7XG4gICAgaWYgKCdzbmFwc2hvdF9pZCcgaW4gcGxheWxpc3QpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHBsYXlsaXN0LnNuYXBzaG90X2lkLCBTTkFQU0hPVF9WRVJTSU9OKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./dedup/playlist-cache.ts\n");

/***/ })

})