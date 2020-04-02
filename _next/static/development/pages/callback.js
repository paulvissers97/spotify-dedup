(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/callback.js"],{

/***/ "./dedup/oauth-config.ts":
/*!*******************************!*\
  !*** ./dedup/oauth-config.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {var clientId = '04dca0de1c4e4aca88cc615ac23581be';
var redirectUri = 'location' in global && global['location']['host'] === 'localhost:3000' ? 'http://localhost:3000/callback' : 'https://jmperezperez.com/spotify-dedup/callback/';
var host = /http[s]?:\/\/[^/]+/.exec(redirectUri)[0];
/* harmony default export */ __webpack_exports__["default"] = ({
  clientId: clientId,
  redirectUri: redirectUri,
  host: host
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./dedup/oauth-send-back.ts":
/*!**********************************!*\
  !*** ./dedup/oauth-send-back.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _oauth_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./oauth-config */ "./dedup/oauth-config.ts");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  if (true) {
    var target = window.self === window.top ? window.opener : window.parent;
    var hash = window.location.hash;

    if (hash) {
      var token = window.location.hash.split('&')[0].split('=')[1];
      target.postMessage(token, _oauth_config__WEBPACK_IMPORTED_MODULE_0__["default"].host);
    }
  }
});

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fcallback&absolutePagePath=%2FUsers%2Fjmperez%2Fgithub%2Fspotify-dedup%2Fpages%2Fcallback%2Findex.tsx!./":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fcallback&absolutePagePath=%2FUsers%2Fjmperez%2Fgithub%2Fspotify-dedup%2Fpages%2Fcallback%2Findex.tsx ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/callback", function() {
      var mod = __webpack_require__(/*! ./pages/callback/index.tsx */ "./pages/callback/index.tsx")
      if(true) {
        module.hot.accept(/*! ./pages/callback/index.tsx */ "./pages/callback/index.tsx", function() {
          if(!next.router.components["/callback"]) return
          var updatedPage = __webpack_require__(/*! ./pages/callback/index.tsx */ "./pages/callback/index.tsx")
          next.router.update("/callback", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./pages/callback/index.tsx":
/*!**********************************!*\
  !*** ./pages/callback/index.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Callback; });
/* harmony import */ var _dedup_oauth_send_back__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dedup/oauth-send-back */ "./dedup/oauth-send-back.ts");

function Callback() {
  Object(_dedup_oauth_send_back__WEBPACK_IMPORTED_MODULE_0__["default"])();
  return null;
}

/***/ }),

/***/ 2:
/*!***************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fcallback&absolutePagePath=%2FUsers%2Fjmperez%2Fgithub%2Fspotify-dedup%2Fpages%2Fcallback%2Findex.tsx ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fcallback&absolutePagePath=%2FUsers%2Fjmperez%2Fgithub%2Fspotify-dedup%2Fpages%2Fcallback%2Findex.tsx! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fcallback&absolutePagePath=%2FUsers%2Fjmperez%2Fgithub%2Fspotify-dedup%2Fpages%2Fcallback%2Findex.tsx!./");


/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=callback.js.map