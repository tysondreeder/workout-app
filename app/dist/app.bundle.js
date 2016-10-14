/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _list = __webpack_require__(3);
	
	var _list2 = _interopRequireDefault(_list);
	
	var _Routes = __webpack_require__(8);
	
	var _Routes2 = _interopRequireDefault(_Routes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// document.getElementById('main-content').innerHTML = 'Welcome to the workout app';
	
	var routes = [{
	    url: '#list',
	    method: function method() {
	        var list = new _list2.default();
	        list.showList();
	    }
	}, {
	    url: '#workout/{workoutId}/exercise/{exerciseId}',
	    method: function method() {
	        document.getElementById('main-content').innerHTML = 'This is the work out page';
	
	        console.log(route.getParam('exerciseId'));
	    }
	}, {
	    url: 'default',
	    method: function method() {
	        document.getElementById('main-content').innerHTML = 'welcome to the workout app';
	    }
	}];
	
	var route = new _Routes2.default();
	
	route.$on('load', routes);
	route.$on('hashchange', routes);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _List = __webpack_require__(4);
	
	var _List2 = _interopRequireDefault(_List);
	
	var _View2 = __webpack_require__(6);
	
	var _View3 = _interopRequireDefault(_View2);
	
	var _list = __webpack_require__(7);
	
	var _list2 = _interopRequireDefault(_list);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var List = function (_View) {
	    _inherits(List, _View);
	
	    function List() {
	        _classCallCheck(this, List);
	
	        return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this));
	    }
	
	    _createClass(List, [{
	        key: 'content',
	        value: function content() {
	            var _this2 = this;
	
	            var model = new _List2.default();
	            model.get().then(function (resp) {
	                var data = JSON.parse(resp);
	                _this2.ready(_list2.default, data.response);
	            });
	        }
	    }, {
	        key: 'showList',
	        value: function showList() {
	            this.content();
	        }
	    }]);
	
	    return List;
	}(_View3.default);
	
	exports.default = List;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _XHR = __webpack_require__(5);
	
	var _XHR2 = _interopRequireDefault(_XHR);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var List = function () {
	    function List() {
	        _classCallCheck(this, List);
	
	        this.url = '/api/v1/workout/list';
	    }
	
	    _createClass(List, [{
	        key: 'get',
	        value: function get() {
	            return _XHR2.default.get(this.url);
	        }
	    }]);
	
	    return List;
	}();
	
	exports.default = List;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var XHR = function () {
	    function XHR() {
	        _classCallCheck(this, XHR);
	    }
	
	    _createClass(XHR, [{
	        key: 'get',
	        value: function get(url) {
	            return this._makeRequest('GET', url);
	        }
	    }, {
	        key: 'post',
	        value: function post(url, params) {
	            return this._makeRequest('POST', url, params);
	        }
	    }, {
	        key: 'put',
	        value: function put(url, params) {
	            return this._makeRequest('PUT', url, params);
	        }
	    }, {
	        key: 'remove',
	        value: function remove(url, params) {
	            return this._makeRequest('DELETE', url, params);
	        }
	    }, {
	        key: '_makeRequest',
	        value: function _makeRequest(method, url, params) {
	            var m = method;
	            var u = url;
	            var p = params;
	
	            return new Promise(function (resolve, reject) {
	                var xhr = new XMLHttpRequest();
	
	                xhr.open(m, u);
	
	                xhr.onload = function () {
	                    resolve(xhr.response);
	                };
	
	                xhr.onerror = function () {
	                    reject(xhr.statusText);
	                };
	
	                if (p && (typeof p === 'undefined' ? 'undefined' : _typeof(p)) === 'object') {
	                    p = Object.keys(params).map(function (key) {
	                        return encodeURIComponent(key) + '=' + encodeURIComponent(p['key']);
	                    }).join('&');
	                }
	
	                xhr.send();
	            });
	        }
	    }]);
	
	    return XHR;
	}();
	
	exports.default = new XHR();

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var rendered = void 0,
	    $main = void 0;
	
	var View = function () {
	    function View() {
	        _classCallCheck(this, View);
	
	        rendered = false;
	        $main = document.getElementById('main-content');
	    }
	
	    _createClass(View, [{
	        key: 'ready',
	        value: function ready(template, data) {
	            $main.innerHTML = this._template(template, data);
	        }
	    }, {
	        key: '_template',
	        value: function _template(template, data) {
	            return template(data);
	        }
	    }]);
	
	    return View;
	}();
	
	exports.default = View;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (ctx) {
	    return _template.call(ctx, ctx);
	};
	
	function _template() {
	    return '<table class="table">\n    <thead>\n    <tr>\n        <th>Workout Name</th>\n        <th>Days of the week</th>\n        <th></th>\n    </tr>\n    </thead>\n    <tbody>\n    ' + this.map(function (workout) {
	        return '<tr>\n            <td>' + workout.workout_name + '</td>\n            <td>' + workout.workout_days.days.join(', ') + '</td>\n            <td>\n                <a href="#workout/' + workout.workout_id + '" class="btn btn-default">View</a>\n            </td>\n        </tr>';
	    }).join('\n') + '\n    </tbody>\n</table>';
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Routes = function () {
	    function Routes() {
	        _classCallCheck(this, Routes);
	
	        this.object = {};
	    }
	
	    _createClass(Routes, [{
	        key: '$on',
	        value: function $on(event, object) {
	            var _this = this;
	
	            return window.addEventListener(event, function () {
	                _this._set(object);
	            });
	        }
	    }, {
	        key: '_set',
	        value: function _set(object) {
	            var route = '';
	            if (location.hash !== '') {
	                route = location.hash;
	            } else {
	                route = 'default';
	            }
	            if (this._validUrl(route) === true) {
	                this._parseRouteObject(route, object);
	            }
	        }
	    }, {
	        key: '_parseRouteObject',
	        value: function _parseRouteObject(route, object) {
	            var _this2 = this;
	
	            object.map(function (instance) {
	                var url = instance.url.split('/');
	                _this2._mapUrl(route, url);
	                if (_this2._getParams(route)[0] === url[0]) {
	                    instance.method();
	                }
	            });
	        }
	    }, {
	        key: '_validUrl',
	        value: function _validUrl(route) {
	            return (/^[#a-z0-9\/]+$/i.test(route)
	            );
	        }
	    }, {
	        key: '_getParams',
	        value: function _getParams(url) {
	            return url.split('/');
	        }
	    }, {
	        key: 'getParam',
	        value: function getParam(key) {
	            return this.object[key];
	        }
	    }, {
	        key: '_mapUrl',
	        value: function _mapUrl(urlMap, urlArray) {
	            var params = urlMap.split('/');
	            var values = location.hash.split('/');
	            for (var k in params) {
	                if (typeof urlArray[k] !== 'undefined' && urlArray[k].search(/^{/) !== -1) {
	                    var param = urlArray[k].slice(1, -1);
	                    this.object[param] = values[k];
	                }
	            }
	        }
	    }]);
	
	    return Routes;
	}();
	
	exports.default = Routes;

/***/ }
/******/ ]);
//# sourceMappingURL=app.bundle.js.map