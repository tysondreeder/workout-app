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
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _List = __webpack_require__(2);
	
	var _List2 = _interopRequireDefault(_List);
	
	var _View2 = __webpack_require__(4);
	
	var _View3 = _interopRequireDefault(_View2);
	
	var _list = __webpack_require__(5);
	
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
	        key: 'ready',
	        value: function ready() {
	            var _this2 = this;
	
	            var model = new _List2.default();
	            model.get().then(function (resp) {
	                var data = JSON.parse(resp);
	                _this2.$main.innerHTML = _this2.template(data.response);
	            });
	        }
	    }, {
	        key: 'showList',
	        value: function showList() {
	            this.ready();
	            this.init();
	        }
	    }, {
	        key: 'template',
	        value: function template(data) {
	            return (0, _list2.default)(data);
	        }
	    }]);
	
	    return List;
	}(_View3.default);
	
	exports.default = List;
	
	
	var list = new List();
	
	list.ready();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _XHR = __webpack_require__(3);
	
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
/* 3 */
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _XHR = __webpack_require__(3);
	
	var _XHR2 = _interopRequireDefault(_XHR);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	        value: function ready(res) {
	            $main.innerHTML = res;
	            this.init();
	        }
	    }, {
	        key: 'template',
	        value: function template(data) {
	            var template = 'hi';
	            // if(rendered) {
	            //     XHR.get(url).then(function(data) {
	            //         return this.ready(data);
	            //     });
	            // } else {
	            //     rendered = true;
	            //     this.init();
	            // }
	        }
	    }, {
	        key: 'init',
	        value: function init() {}
	    }, {
	        key: '$main',
	        get: function get() {
	            return $main;
	        }
	    }]);
	
	    return View;
	}();
	
	exports.default = View;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (ctx) {
	    return _template.call(ctx, ctx);
	};
	
	function _template() {
	    return '<table class="table">\n    <thead>\n    <tr>\n        <th>Workout Name</th>\n        <th>Days of the week</th>\n    </tr>\n    </thead>\n    <tbody>\n    ' + this.map(function (workout) {
	        return '<tr>\n            <td>' + workout.workout_name + '</td>\n            <td>' + workout.workout_days.days.join(', ') + '</td>\n            <td>\n                <a href=""></a>\n            </td>\n        </tr>';
	    }).join('\n') + '\n    </tbody>\n</table>';
	};

/***/ }
/******/ ]);
//# sourceMappingURL=app.bundle.js.map