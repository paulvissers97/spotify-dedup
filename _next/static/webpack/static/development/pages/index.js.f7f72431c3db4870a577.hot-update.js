webpackHotUpdate("static/development/pages/index.js",{

/***/ "./dedup/deduplicator.ts":
/*!*******************************!*\
  !*** ./dedup/deduplicator.ts ***!
  \*******************************/
/*! exports provided: PlaylistDeduplicator, SavedTracksDeduplicator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistDeduplicator", function() { return PlaylistDeduplicator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedTracksDeduplicator", function() { return SavedTracksDeduplicator; });
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _promiseForPages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./promiseForPages */ "./dedup/promiseForPages.ts");







function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var BaseDeduplicator = /*#__PURE__*/function () {
  function BaseDeduplicator() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, BaseDeduplicator);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(BaseDeduplicator, [{
    key: "removeDuplicates",
    value: function removeDuplicates(model) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.async(function removeDuplicates$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              throw 'Not implemented';

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "getTracks",
    value: function getTracks() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.async(function getTracks$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              throw 'Not implemented';

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }], [{
    key: "findDuplicatedTracks",
    value: function findDuplicatedTracks(tracks) {
      var seenIds = {};
      var seenNameAndArtist = {};
      var result = tracks.reduce(function (duplicates, track, index) {
        if (track === null) return duplicates;
        if (track.id === null) return duplicates;
        var isDuplicate = false;
        var seenNameAndArtistKey = "".concat(track.name, ":").concat(track.artists[0].name);

        if (track.id in seenIds) {
          // if the two tracks have the same Spotify ID, they are duplicates
          isDuplicate = true;
        } else {
          // if they have the same name, main artist, and roughly same duration
          // we consider tem duplicates too
          if (seenNameAndArtistKey in seenNameAndArtist && Math.abs(seenNameAndArtist[seenNameAndArtistKey] - track.duration_ms) < 2000) {
            isDuplicate = true;
          }
        }

        if (isDuplicate) {
          duplicates.push({
            index: index,
            track: track,
            reason: track.id in seenIds ? 'same-id' : 'same-name-artist'
          });
        } else {
          seenIds[track.id] = true;
          seenNameAndArtist[seenNameAndArtistKey] = track.duration_ms;
        }

        return duplicates;
      }, []);
      return result;
    }
  }]);

  return BaseDeduplicator;
}();

var PlaylistDeduplicator = /*#__PURE__*/function (_BaseDeduplicator) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(PlaylistDeduplicator, _BaseDeduplicator);

  var _super = _createSuper(PlaylistDeduplicator);

  function PlaylistDeduplicator() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, PlaylistDeduplicator);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(PlaylistDeduplicator, null, [{
    key: "getTracks",
    value: function getTracks(api, playlist) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.async(function getTracks$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", new Promise(function (resolve, reject) {
                var tracks = [];
                Object(_promiseForPages__WEBPACK_IMPORTED_MODULE_6__["default"])(api, api.getGeneric(playlist.tracks.href) // 'https://api.spotify.com/v1/users/11153223185/playlists/0yygtDHfwC7uITHxfrcQsF/tracks'
                ).then(function (pagePromises // todo: I'd love to replace this with
                ) {
                  return (// .then(Promise.all)
                    // à la http://www.html5rocks.com/en/tutorials/es6/promises/#toc-transforming-values
                    Promise.all(pagePromises)
                  );
                }).then(function (pages) {
                  pages.forEach(function (page) {
                    page.items.forEach(function (item) {
                      tracks.push(item && item.track);
                    });
                  });
                  resolve(tracks);
                })["catch"](reject);
              }));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "removeDuplicates",
    value: function removeDuplicates(api, playlistModel) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.async(function removeDuplicates$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", new Promise(function (resolve, reject) {
                if (playlistModel.playlist.id === 'starred') {
                  reject('It is not possible to delete duplicates from your Starred playlist using this tool since this is not supported in the Spotify Web API. You will need to remove these manually.');
                }

                if (playlistModel.playlist.collaborative) {
                  reject('It is not possible to delete duplicates from a collaborative playlist using this tool since this is not supported in the Spotify Web API. You will need to remove these manually.');
                } else {
                  (function () {
                    var tracksToRemove = playlistModel.duplicates.map(function (d) {
                      return {
                        uri: d.track.linked_from ? d.track.linked_from.uri : d.track.uri,
                        positions: [d.index]
                      };
                    }).reverse(); // reverse so we delete the last ones first

                    var promises = [];

                    do {
                      var chunk = tracksToRemove.splice(0, 100);

                      (function (playlistModel, chunk, api) {
                        promises.push(function () {
                          return api.removeTracksFromPlaylist(playlistModel.playlist.owner.id, playlistModel.playlist.id, chunk);
                        });
                      })(playlistModel, chunk, api);
                    } while (tracksToRemove.length > 0);

                    promises.reduce(function (promise, func) {
                      return promise.then(function () {
                        return func();
                      });
                    }, Promise.resolve(null)).then(function () {
                      playlistModel.duplicates = [];
                      resolve();
                    })["catch"](function (e) {
                      reject(e);
                    });
                  })();
                }
              }));

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }]);

  return PlaylistDeduplicator;
}(BaseDeduplicator);
var SavedTracksDeduplicator = /*#__PURE__*/function (_BaseDeduplicator2) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(SavedTracksDeduplicator, _BaseDeduplicator2);

  var _super2 = _createSuper(SavedTracksDeduplicator);

  function SavedTracksDeduplicator() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, SavedTracksDeduplicator);

    return _super2.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(SavedTracksDeduplicator, null, [{
    key: "getTracks",
    value: function getTracks(api, initialRequest) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.async(function getTracks$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", new Promise(function (resolve, reject) {
                var tracks = [];
                Object(_promiseForPages__WEBPACK_IMPORTED_MODULE_6__["default"])(api, initialRequest).then(function (pagePromises // todo: I'd love to replace this with
                ) {
                  return (// .then(Promise.all)
                    // à la http://www.html5rocks.com/en/tutorials/es6/promises/#toc-transforming-values
                    Promise.all(pagePromises)
                  );
                }).then(function (pages) {
                  pages.forEach(function (page) {
                    page.items.forEach(function (item) {
                      tracks.push(item.track);
                    });
                  });
                  resolve(tracks);
                })["catch"](function (e) {
                  console.error("There was an error fetching the tracks from playlist ".concat(initialRequest.href), e);
                  reject(e);
                });
              }));

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "removeDuplicates",
    value: function removeDuplicates(api, model) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.async(function removeDuplicates$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              return _context7.abrupt("return", new Promise(function (resolve, reject) {
                var tracksToRemove = model.duplicates.map(function (d) {
                  return d.track.linked_from ? d.track.linked_from.id : d.track.id;
                });

                do {
                  (function _callee() {
                    var chunk;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.async(function _callee$(_context6) {
                      while (1) {
                        switch (_context6.prev = _context6.next) {
                          case 0:
                            chunk = tracksToRemove.splice(0, 50);
                            _context6.next = 3;
                            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.awrap(api.removeFromMySavedTracks(chunk));

                          case 3:
                          case "end":
                            return _context6.stop();
                        }
                      }
                    }, null, null, null, Promise);
                  })();
                } while (tracksToRemove.length > 0);

                model.duplicates = [];
                resolve();
              }));

            case 1:
            case "end":
              return _context7.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }]);

  return SavedTracksDeduplicator;
}(BaseDeduplicator);

/***/ })

})
//# sourceMappingURL=index.js.f7f72431c3db4870a577.hot-update.js.map