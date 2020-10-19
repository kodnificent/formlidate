(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Formlidate"] = factory();
	else
		root["Formlidate"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n\n  for (var i = 0, arr2 = new Array(len); i < len; i++) {\n    arr2[i] = arr[i];\n  }\n\n  return arr2;\n}\n\nmodule.exports = _arrayLikeToArray;\n\n//# sourceURL=webpack://Formlidate/./node_modules/@babel/runtime/helpers/arrayLikeToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayWithHoles(arr) {\n  if (Array.isArray(arr)) return arr;\n}\n\nmodule.exports = _arrayWithHoles;\n\n//# sourceURL=webpack://Formlidate/./node_modules/@babel/runtime/helpers/arrayWithHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ \"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\");\n\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) return arrayLikeToArray(arr);\n}\n\nmodule.exports = _arrayWithoutHoles;\n\n//# sourceURL=webpack://Formlidate/./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack://Formlidate/./node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;\n\n//# sourceURL=webpack://Formlidate/./node_modules/@babel/runtime/helpers/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nmodule.exports = _defineProperty;\n\n//# sourceURL=webpack://Formlidate/./node_modules/@babel/runtime/helpers/defineProperty.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _iterableToArray(iter) {\n  if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter);\n}\n\nmodule.exports = _iterableToArray;\n\n//# sourceURL=webpack://Formlidate/./node_modules/@babel/runtime/helpers/iterableToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _iterableToArrayLimit(arr, i) {\n  if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return;\n  var _arr = [];\n  var _n = true;\n  var _d = false;\n  var _e = undefined;\n\n  try {\n    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {\n      _arr.push(_s.value);\n\n      if (i && _arr.length === i) break;\n    }\n  } catch (err) {\n    _d = true;\n    _e = err;\n  } finally {\n    try {\n      if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n    } finally {\n      if (_d) throw _e;\n    }\n  }\n\n  return _arr;\n}\n\nmodule.exports = _iterableToArrayLimit;\n\n//# sourceURL=webpack://Formlidate/./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\nmodule.exports = _nonIterableRest;\n\n//# sourceURL=webpack://Formlidate/./node_modules/@babel/runtime/helpers/nonIterableRest.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\nmodule.exports = _nonIterableSpread;\n\n//# sourceURL=webpack://Formlidate/./node_modules/@babel/runtime/helpers/nonIterableSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ \"./node_modules/@babel/runtime/helpers/arrayWithHoles.js\");\n\nvar iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ \"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js\");\n\nvar unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ \"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\");\n\nvar nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ \"./node_modules/@babel/runtime/helpers/nonIterableRest.js\");\n\nfunction _slicedToArray(arr, i) {\n  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();\n}\n\nmodule.exports = _slicedToArray;\n\n//# sourceURL=webpack://Formlidate/./node_modules/@babel/runtime/helpers/slicedToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ \"./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js\");\n\nvar iterableToArray = __webpack_require__(/*! ./iterableToArray */ \"./node_modules/@babel/runtime/helpers/iterableToArray.js\");\n\nvar unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ \"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\");\n\nvar nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ \"./node_modules/@babel/runtime/helpers/nonIterableSpread.js\");\n\nfunction _toConsumableArray(arr) {\n  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();\n}\n\nmodule.exports = _toConsumableArray;\n\n//# sourceURL=webpack://Formlidate/./node_modules/@babel/runtime/helpers/toConsumableArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    module.exports = _typeof = function _typeof(obj) {\n      return typeof obj;\n    };\n  } else {\n    module.exports = _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\nmodule.exports = _typeof;\n\n//# sourceURL=webpack://Formlidate/./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ \"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\");\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return arrayLikeToArray(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);\n}\n\nmodule.exports = _unsupportedIterableToArray;\n\n//# sourceURL=webpack://Formlidate/./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js?");

/***/ }),

/***/ "./src/CallbackValidator.js":
/*!**********************************!*\
  !*** ./src/CallbackValidator.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CallbackValidator; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n/* eslint-disable class-methods-use-this */\nvar CallbackValidator = /*#__PURE__*/function () {\n  /**\n   * Create an instance of a callback validator.\n   *\n   * @param {function} callback\n   */\n  function CallbackValidator(callback) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CallbackValidator);\n\n    this.callback = callback;\n  }\n  /**\n   * Check if a field's value passes the validation rule.\n   *\n   * @param {any} value Value of the field to be validated\n   * @param {Object} values Values of other fields\n   * @param {string} attribute Attribute name of the field under validation\n   */\n\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CallbackValidator, [{\n    key: \"passes\",\n    value: function passes(value, values, attribute) {\n      this.errorMessage = this.callback.call(this, value, values, attribute);\n      return this.errorMessage === true;\n    }\n    /**\n     * Get the rule's error message.\n     */\n\n  }, {\n    key: \"message\",\n    value: function message() {\n      var _this$errorMessage;\n\n      return (_this$errorMessage = this.errorMessage) !== null && _this$errorMessage !== void 0 ? _this$errorMessage : 'Invalid';\n    }\n  }]);\n\n  return CallbackValidator;\n}();\n\n\n\n//# sourceURL=webpack://Formlidate/./src/CallbackValidator.js?");

/***/ }),

/***/ "./src/Formlidate.js":
/*!***************************!*\
  !*** ./src/Formlidate.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Formlidate; });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ \"./node_modules/@babel/runtime/helpers/typeof.js\");\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./default */ \"./src/default.js\");\n/* harmony import */ var _FormlidateData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormlidateData */ \"./src/FormlidateData.js\");\n/* harmony import */ var _CallbackValidator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CallbackValidator */ \"./src/CallbackValidator.js\");\n\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n // Note that all properties and methods should be prepended with a $\n// to enable one differentiate core methods or properties from props\n// that were merged into the class.\n\nvar Formlidate = /*#__PURE__*/function () {\n  /**\n   * Create a new Formlidate instance.\n   *\n   * @param {string} [selector]\n   * @param {Object} [options]\n   * @param {Object} options.placeholders\n   * @param {Object|string} options.rules\n   * @param {object} options.messages\n   * @param {boolean} options.onBlur\n   * @param {boolean} options.onInput\n   * @param {string} options.fieldSelector\n   * @param {string} options.feedbackSelector\n   * @param {Function} options.beforeValidate\n   * @param {Function} options.onInvalid\n   * @param {Function|boolean} options.onChange\n   * @param {Function} options.validated\n   */\n  function Formlidate() {\n    var _this = this;\n\n    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Formlidate);\n\n    // we merge option props into the class\n    var mergedOptions = _objectSpread(_objectSpread({}, Formlidate.$validatorMixinOptions()), options);\n\n    Object.keys(mergedOptions).forEach(function (key) {\n      var _this$key;\n\n      _this[key] = (_this$key = _this[key]) !== null && _this$key !== void 0 ? _this$key : mergedOptions[key];\n    });\n    this.$selector = selector !== null && selector !== void 0 ? selector : _default__WEBPACK_IMPORTED_MODULE_5__[\"default\"].selector;\n    this.$form = this.$selector instanceof Element ? this.$selector : document.querySelector(this.$selector);\n\n    if (!this.$form) {\n      // @todo throw error\n      return;\n    }\n\n    this.$attachPlaceholders();\n    this.$setFields();\n    this.$attachSubmitEvent();\n  }\n  /**\n   * Attach form placeholders to the static $placeholders.\n   */\n\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Formlidate, [{\n    key: \"$attachPlaceholders\",\n    value: function $attachPlaceholders() {\n      if (this.placeholders) {\n        Formlidate.$withPlaceholders(this.placeholders);\n      }\n    }\n    /**\n     * Assign rules and feedbackSelector to form fields.\n     */\n\n  }, {\n    key: \"$setFields\",\n    value: function $setFields() {\n      var _this2 = this;\n\n      var fields = {}; // first we assign rules and field element to each field\n\n      if (this.rules && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(this.rules) === 'object') {\n        // we give precedence to rules property when setting fields\n        Object.keys(this.rules).forEach(function (fieldName) {\n          var rules = _this2.rules[fieldName];\n\n          var selector = _this2.fieldSelector.replace(':attribute', fieldName);\n\n          var data = {\n            attribute: fieldName,\n            rules: typeof rules === 'string' ? rules.split('|') : rules,\n            el: _this2.$form.querySelector(selector),\n            els: _this2.$form.querySelectorAll(selector)\n          };\n          fields[fieldName] = data;\n        });\n      } else {\n        // alternatively, we search through the html fields for rules.\n        _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(this.$form.querySelectorAll('[name]')).forEach(function (el) {\n          var name = el.getAttribute('name'); // @todo through error if name is null or undefined\n\n          var data = {\n            attribute: name,\n            rules: el.getAttribute('data-rules') ? el.getAttribute('data-rules').split('|') : [],\n            el: el,\n            els: _this2.$form.querySelectorAll(\"[name=\".concat(name, \"]\"))\n          };\n          fields[name] = data;\n        });\n      }\n\n      Object.values(fields).forEach(function (field) {\n        var _this2$messages$field, _this2$messages;\n\n        // next we assign the feedback selector value\n        // and query the feedback el to each field.\n        field.feedbackSelector = _this2.feedbackSelector.replace(':attribute', field.attribute);\n        field.feedbackEl = _this2.$form.querySelector(field.feedbackSelector); // we assign custom field rule messages to the field\n\n        field.messages = (_this2$messages$field = (_this2$messages = _this2.messages) === null || _this2$messages === void 0 ? void 0 : _this2$messages[field.attribute]) !== null && _this2$messages$field !== void 0 ? _this2$messages$field : null; // next we add a change event to all field elements\n\n        if (typeof _this2.onChange === 'function') {\n          _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(field.els).forEach(function (el) {\n            el.addEventListener('change', function (event) {\n              _this2.onChange.call(_this2, event, field);\n            });\n          });\n        }\n      });\n      this.$fields = fields;\n    }\n    /**\n     * Attach submit event listener to the form that requires validation.\n     */\n\n  }, {\n    key: \"$attachSubmitEvent\",\n    value: function $attachSubmitEvent() {\n      var _this$$attachedSubmit,\n          _this3 = this;\n\n      this.$attachedSubmitEvent = (_this$$attachedSubmit = this.$attachedSubmitEvent) !== null && _this$$attachedSubmit !== void 0 ? _this$$attachedSubmit : false; // we check if the submit event hasn't been attached attached\n      // to avoid attaching an event twice and also, the form exists.\n\n      if (this.$attachedSubmitEvent || !this.$form) return;\n      this.$form.addEventListener('submit', function (event) {\n        return _this3.$handleValidation(event);\n      });\n      this.$attachedSubmitEvent = true;\n    }\n    /**\n     * Handle the form validation event.\n     *\n     * @param {Event} event\n     */\n\n  }, {\n    key: \"$handleValidation\",\n    value: function $handleValidation(event) {\n      if (typeof this.beforeValidate === 'function') this.beforeValidate.call(this, event);\n      var result = Formlidate.$validate(this.$fieldValues(), this.$fields);\n\n      if (result.invalid) {\n        return typeof this.onInvalid === 'function' ? this.onInvalid.call(this, event, result.errors) : this.onInvalid;\n      }\n\n      return typeof this.validated === 'function' ? this.validated.call(this, result.data) : this.validated;\n    }\n    /**\n     * Get field values.\n     */\n\n  }, {\n    key: \"$fieldValues\",\n    value: function $fieldValues() {\n      var formData = new _FormlidateData__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this.$form);\n      var values = {};\n      Object.values(this.$fields).forEach(function (field) {\n        var multipleValue = formData.getAll(field.attribute);\n        var singleValue = formData.get(field.attribute);\n        var value;\n\n        switch (field.el.type) {\n          case 'file':\n            value = field.el.multiple ? multipleValue : singleValue;\n            break;\n\n          case 'select-multiple':\n            value = multipleValue;\n            break;\n\n          case 'checkbox':\n            value = multipleValue;\n            break;\n\n          default:\n            value = singleValue;\n            break;\n        }\n\n        values[field.attribute] = value;\n      });\n      return values;\n    }\n    /**\n     * Get validator options value.\n     */\n\n  }], [{\n    key: \"$validatorMixinOptions\",\n    value: function $validatorMixinOptions() {\n      var options = typeof _default__WEBPACK_IMPORTED_MODULE_5__[\"default\"].options === 'function' ? _default__WEBPACK_IMPORTED_MODULE_5__[\"default\"].options.call(_default__WEBPACK_IMPORTED_MODULE_5__[\"default\"]) : _default__WEBPACK_IMPORTED_MODULE_5__[\"default\"].options;\n      return options;\n    }\n    /**\n     * Validate form fields against its rules.\n     *\n     * @param {{fieldName: any}} data\n     * An object containing field names as key and field value as value.\n     *\n     * @param {{fieldName: {attribute: string, rules: array}}} fields\n     * An object containing fields with the field name as key.\n     * The value must contain the field object with atleast attribute and rules properties.\n     */\n\n  }, {\n    key: \"$validate\",\n    value: function $validate(data, fields) {\n      var _this4 = this;\n\n      var result = {\n        invalid: false,\n        errors: {},\n        data: data\n      };\n      Object.values(fields).forEach(function (field) {\n        var errorMessage;\n        var validator;\n        var value = data[field.attribute];\n        var values = data;\n        var attribute = field.attribute;\n        field.rules.some(function (ruleName) {\n          var _field$messages$Strin, _field$messages;\n\n          if (typeof ruleName === 'function') {\n            validator = new _CallbackValidator__WEBPACK_IMPORTED_MODULE_7__[\"default\"](ruleName);\n          } else {\n            var Rule = Formlidate.$findRule(ruleName);\n\n            if (!Rule) {\n              // note that if the rule does not exist,\n              // we still assign an error to the field.\n              errorMessage = 'Invalid rule';\n              return false;\n            }\n\n            var parameters = Formlidate.$ruleParameters(ruleName);\n            validator = new Rule(parameters);\n          } // we only want to run a validation rule if the field value is present\n          // just like saying the field can be nullable but only validate\n          // when it has a value.\n\n\n          if (ruleName !== 'required') {\n            // we know the value is empty if it fails the required rule.\n            var RequiredRule = Formlidate.$findRule('required');\n            var empty = !new RequiredRule().passes(value);\n            if (empty) return false; // pass validation\n          }\n\n          if (validator.passes(value, values, attribute)) return false; // validation fails\n\n          var validatorMessage = (_field$messages$Strin = (_field$messages = field.messages) === null || _field$messages === void 0 ? void 0 : _field$messages[String(ruleName)]) !== null && _field$messages$Strin !== void 0 ? _field$messages$Strin : validator.message();\n          var message = validatorMessage !== null && validatorMessage !== void 0 ? validatorMessage : 'Invalid';\n          message = message.replace(':attribute', field.attribute);\n          errorMessage = message; // we stop validating after first failure.\n\n          return true;\n        }, _this4);\n        if (errorMessage) result.errors[field.attribute] = errorMessage;\n      }, this);\n      result.invalid = Object.keys(result.errors).length > 0;\n      return result;\n    }\n    /**\n     * Swap attribute placeholders with a more user friendly label\n     * such as \"First name\" in place of \"first_name\".\n     *\n     * @param {Object} placeholders\n     */\n\n  }, {\n    key: \"$withPlaceholders\",\n    value: function $withPlaceholders(placeholders) {\n      if (!this.$placeholders) {\n        this.$placeholders = placeholders;\n      }\n\n      this.$placeholders = _objectSpread(_objectSpread({}, this.$placeholders), placeholders);\n    }\n    /**\n     * Extract parameters from a given form rule.\n     *\n     * @param {string} ruleName\n     */\n\n  }, {\n    key: \"$ruleParameters\",\n    value: function $ruleParameters(ruleName) {\n      var _ruleName$split$;\n\n      var parameters = (_ruleName$split$ = ruleName.split(':', 2)[1]) === null || _ruleName$split$ === void 0 ? void 0 : _ruleName$split$.split(',');\n      return parameters !== null && parameters !== void 0 ? parameters : [];\n    }\n    /**\n     * Get the placeholder value of an attribute.\n     *\n     * @param {string} attributeName\n     */\n\n  }, {\n    key: \"$placeholder\",\n    value: function $placeholder(attributeName) {\n      var _this$$placeholders$a, _this$$placeholders;\n\n      var placeholder = (_this$$placeholders$a = (_this$$placeholders = this.$placeholders) === null || _this$$placeholders === void 0 ? void 0 : _this$$placeholders[attributeName]) !== null && _this$$placeholders$a !== void 0 ? _this$$placeholders$a : attributeName;\n      return placeholder;\n    }\n    /**\n     * Translate rule messages.\n     *\n     * @param {Object} transalations\n     * An object containing transalations with the rule name as key\n     * and translation message as value.\n     */\n\n  }, {\n    key: \"$withTranslations\",\n    value: function $withTranslations(transalations) {\n      if (!this.$translations) {\n        this.$translations = transalations;\n      }\n\n      this.$translations = _objectSpread(_objectSpread({}, this.$translations), transalations);\n      return this;\n    }\n    /**\n     * Get the translated message for a validation rule.\n     *\n     * @param {string} ruleName\n     * @param {string} [defaultMessage]\n     */\n\n  }, {\n    key: \"$translation\",\n    value: function $translation(ruleName) {\n      var _this$$translations;\n\n      var defaultMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n      var trans = (_this$$translations = this.$translations) === null || _this$$translations === void 0 ? void 0 : _this$$translations[ruleName];\n      return trans !== null && trans !== void 0 ? trans : defaultMessage;\n    }\n    /**\n     * Add a custom validation rule.\n     *\n     * @param  {...any} rule\n     */\n\n  }, {\n    key: \"$withRule\",\n    value: function $withRule() {\n      var _this$$customRules;\n\n      var customRules = (_this$$customRules = this.$customRules) !== null && _this$$customRules !== void 0 ? _this$$customRules : [];\n\n      for (var _len = arguments.length, rule = new Array(_len), _key = 0; _key < _len; _key++) {\n        rule[_key] = arguments[_key];\n      }\n\n      this.$customRules = customRules.concat(rule);\n      return this;\n    }\n    /**\n     * Find a rule by name.\n     *\n     * @param {string} ruleName\n     */\n\n  }, {\n    key: \"$findRule\",\n    value: function $findRule(ruleName) {\n      var _this$$customRules2;\n\n      var validationRule = (_this$$customRules2 = this.$customRules) === null || _this$$customRules2 === void 0 ? void 0 : _this$$customRules2.filter(function (rule) {\n        return rule.name() === ruleName;\n      })[0];\n      return validationRule;\n    }\n  }]);\n\n  return Formlidate;\n}();\n\n\n\n//# sourceURL=webpack://Formlidate/./src/Formlidate.js?");

/***/ }),

/***/ "./src/FormlidateData.js":
/*!*******************************!*\
  !*** ./src/FormlidateData.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _default = /*#__PURE__*/function () {\n  function _default(form) {\n    var _this = this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _default);\n\n    this.data = {};\n    var data = new FormData(form);\n    data.forEach(function (value, key) {\n      var _this$data$key;\n\n      _this.data[key] = (_this$data$key = _this.data[key]) !== null && _this$data$key !== void 0 ? _this$data$key : [];\n\n      _this.data[key].push(value);\n    });\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(_default, [{\n    key: \"get\",\n    value: function get(key) {\n      var _this$data$key2;\n\n      return (_this$data$key2 = this.data[key]) === null || _this$data$key2 === void 0 ? void 0 : _this$data$key2[0];\n    }\n  }, {\n    key: \"getAll\",\n    value: function getAll(key) {\n      return this.data[key];\n    }\n  }]);\n\n  return _default;\n}();\n\n\n\n//# sourceURL=webpack://Formlidate/./src/FormlidateData.js?");

/***/ }),

/***/ "./src/default.js":
/*!************************!*\
  !*** ./src/default.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  /**\n   * Target form element selector.\n   */\n  selector: 'form',\n\n  /**\n   * Formlidate options.\n   */\n  options: function options() {\n    return {\n      placeholders: null,\n      rules: null,\n      messages: null,\n      fieldSelector: '[name=:attribute]',\n      feedbackSelector: '[data-:attribute-feedback]',\n      beforeValidate: this.beforeValidate,\n      onInvalid: this.onInvalid,\n      onChange: this.onChange,\n      validated: this.validated\n    };\n  },\n\n  /**\n   * Callback to call before validating a form.\n   *\n   * @param {Object} event\n   */\n  beforeValidate: function beforeValidate() {\n    Object.values(this.$fields).forEach(function (field) {\n      field.feedbackEl.innerText = '';\n    });\n  },\n\n  /**\n   * Callback to call when a field's value changes.\n   *\n   * @param {Event} event\n   * @param {Object} field\n   */\n  onChange: function onChange(event, field) {\n    if (!field.feedbackEl) return;\n    field.feedbackEl.innerText = '';\n    var attribute = field.attribute;\n    var fields = {};\n    fields[attribute] = field;\n    var result = this.constructor.$validate(this.$fieldValues(), fields);\n    if (!result.invalid) return;\n    field.feedbackEl.innerText = result.errors[attribute];\n  },\n\n  /**\n   * Callback to call when there is a validation error on a form.\n   *\n   * @param {Event} event\n   * @param {array} errors\n   */\n  onInvalid: function onInvalid(event, errors) {\n    event.preventDefault();\n    Object.values(this.$fields).forEach(function (field) {\n      var _errors$field$attribu;\n\n      if (!field.feedbackEl) return;\n      field.feedbackEl.innerText = (_errors$field$attribu = errors[field.attribute]) !== null && _errors$field$attribu !== void 0 ? _errors$field$attribu : '';\n    });\n  },\n\n  /**\n   * Callback to call after the form passes validation.\n   */\n  validated: function validated() {//\n  }\n});\n\n//# sourceURL=webpack://Formlidate/./src/default.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Formlidate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Formlidate */ \"./src/Formlidate.js\");\n/* harmony import */ var _rules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rules */ \"./src/rules/index.js\");\n\n\n\n_Formlidate__WEBPACK_IMPORTED_MODULE_1__[\"default\"].$withRule.apply(_Formlidate__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_rules__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Formlidate__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack://Formlidate/./src/index.js?");

/***/ }),

/***/ "./src/rules/Accepted.js":
/*!*******************************!*\
  !*** ./src/rules/Accepted.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Accepted; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Formlidate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Formlidate */ \"./src/Formlidate.js\");\n\n\n\n/* eslint-disable class-methods-use-this */\n\n\nvar Accepted = /*#__PURE__*/function () {\n  function Accepted() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Accepted);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Accepted, [{\n    key: \"passes\",\n\n    /**\n     * Check if a field's value passes the validation rule.\n     *\n     * @param {any} value Value of the field to be validated\n     * @param {Object} values Values of other fields\n     */\n    value: function passes(value) {\n      return value === 'yes' || value === 'on' || value === 1 || value === true;\n    }\n    /**\n     * Get the rule's error message.\n     */\n\n  }, {\n    key: \"message\",\n    value: function message() {\n      return _Formlidate__WEBPACK_IMPORTED_MODULE_2__[\"default\"].$translation(Accepted.name(), 'Invalid');\n    }\n  }], [{\n    key: \"name\",\n\n    /**\n     * Get the name of the validation rule.\n     */\n    value: function name() {\n      return 'accepted';\n    }\n  }]);\n\n  return Accepted;\n}();\n\n\n\n//# sourceURL=webpack://Formlidate/./src/rules/Accepted.js?");

/***/ }),

/***/ "./src/rules/Alpha.js":
/*!****************************!*\
  !*** ./src/rules/Alpha.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Alpha; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Formlidate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Formlidate */ \"./src/Formlidate.js\");\n\n\n\n/* eslint-disable class-methods-use-this */\n\n\nvar Alpha = /*#__PURE__*/function () {\n  function Alpha() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Alpha);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Alpha, [{\n    key: \"passes\",\n\n    /**\n     * Check if a field's value passes the validation rule.\n     *\n     * @param {any} value Value of the field to be validated\n     */\n    value: function passes(value) {\n      return Boolean(String(value).match(/^[A-Za-z]+$/));\n    }\n    /**\n     * Get the rule's error message.\n     */\n\n  }, {\n    key: \"message\",\n    value: function message() {\n      return _Formlidate__WEBPACK_IMPORTED_MODULE_2__[\"default\"].$translation(Alpha.name(), 'Invalid');\n    }\n  }], [{\n    key: \"name\",\n\n    /**\n     * Get the name of the validation rule.\n     */\n    value: function name() {\n      return 'alpha';\n    }\n  }]);\n\n  return Alpha;\n}();\n\n\n\n//# sourceURL=webpack://Formlidate/./src/rules/Alpha.js?");

/***/ }),

/***/ "./src/rules/AlphaDash.js":
/*!********************************!*\
  !*** ./src/rules/AlphaDash.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AlphaDash; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Formlidate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Formlidate */ \"./src/Formlidate.js\");\n\n\n\n/* eslint-disable class-methods-use-this */\n\n\nvar AlphaDash = /*#__PURE__*/function () {\n  function AlphaDash() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AlphaDash);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(AlphaDash, [{\n    key: \"passes\",\n\n    /**\n     * Check if a field's value passes the validation rule.\n     *\n     * @param {any} value Value of the field to be validated\n     */\n    value: function passes(value) {\n      return Boolean(String(value).match(/^[A-Za-z0-9_-]+$/));\n    }\n    /**\n     * Get the rule's error message.\n     */\n\n  }, {\n    key: \"message\",\n    value: function message() {\n      return _Formlidate__WEBPACK_IMPORTED_MODULE_2__[\"default\"].$translation(AlphaDash.name(), 'Invalid');\n    }\n  }], [{\n    key: \"name\",\n\n    /**\n     * Get the name of the validation rule.\n     */\n    value: function name() {\n      return 'alpha_dash';\n    }\n  }]);\n\n  return AlphaDash;\n}();\n\n\n\n//# sourceURL=webpack://Formlidate/./src/rules/AlphaDash.js?");

/***/ }),

/***/ "./src/rules/AlphaNum.js":
/*!*******************************!*\
  !*** ./src/rules/AlphaNum.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AlphaNum; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Formlidate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Formlidate */ \"./src/Formlidate.js\");\n\n\n\n/* eslint-disable class-methods-use-this */\n\n\nvar AlphaNum = /*#__PURE__*/function () {\n  function AlphaNum() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AlphaNum);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(AlphaNum, [{\n    key: \"passes\",\n\n    /**\n     * Check if a field's value passes the validation rule.\n     *\n     * @param {any} value Value of the field to be validated\n     */\n    value: function passes(value) {\n      return Boolean(String(value).match(/^[A-Za-z0-9]+$/));\n    }\n    /**\n     * Get the rule's error message.\n     */\n\n  }, {\n    key: \"message\",\n    value: function message() {\n      return _Formlidate__WEBPACK_IMPORTED_MODULE_2__[\"default\"].$translation(AlphaNum.name(), 'Invalid');\n    }\n  }], [{\n    key: \"name\",\n\n    /**\n     * Get the name of the validation rule.\n     */\n    value: function name() {\n      return 'alpha_num';\n    }\n  }]);\n\n  return AlphaNum;\n}();\n\n\n\n//# sourceURL=webpack://Formlidate/./src/rules/AlphaNum.js?");

/***/ }),

/***/ "./src/rules/Array.js":
/*!****************************!*\
  !*** ./src/rules/Array.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ArrayRule; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Formlidate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Formlidate */ \"./src/Formlidate.js\");\n\n\n\n/* eslint-disable class-methods-use-this */\n\n\nvar ArrayRule = /*#__PURE__*/function () {\n  function ArrayRule() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ArrayRule);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ArrayRule, [{\n    key: \"passes\",\n\n    /**\n     * Check if a field's value passes the validation rule.\n     *\n     * @param {any} value Value of the field to be validated\n     */\n    value: function passes(value) {\n      if (!(value instanceof Array)) {\n        return false;\n      }\n\n      return true;\n    }\n    /**\n     * Get the rule's error message.\n     */\n\n  }, {\n    key: \"message\",\n    value: function message() {\n      return _Formlidate__WEBPACK_IMPORTED_MODULE_2__[\"default\"].$translation(ArrayRule.name(), 'Invalid');\n    }\n  }], [{\n    key: \"name\",\n\n    /**\n     * Get the name of the validation rule.\n     */\n    value: function name() {\n      return 'array';\n    }\n  }]);\n\n  return ArrayRule;\n}();\n\n\n\n//# sourceURL=webpack://Formlidate/./src/rules/Array.js?");

/***/ }),

/***/ "./src/rules/Boolean.js":
/*!******************************!*\
  !*** ./src/rules/Boolean.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BooleanRule; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Formlidate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Formlidate */ \"./src/Formlidate.js\");\n\n\n\n/* eslint-disable class-methods-use-this */\n\n\nvar BooleanRule = /*#__PURE__*/function () {\n  function BooleanRule() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BooleanRule);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BooleanRule, [{\n    key: \"passes\",\n\n    /**\n     * Check if a field's value passes the validation rule.\n     *\n     * @param {any} value Value of the field to be validated\n     */\n    value: function passes(value) {\n      return [true, false, 'true', 'false', '1', '0', 1, 0].includes(value);\n    }\n    /**\n     * Get the rule's error message.\n     */\n\n  }, {\n    key: \"message\",\n    value: function message() {\n      return _Formlidate__WEBPACK_IMPORTED_MODULE_2__[\"default\"].$translation(BooleanRule.name(), 'Invalid');\n    }\n  }], [{\n    key: \"name\",\n\n    /**\n     * Get the name of the validation rule.\n     */\n    value: function name() {\n      return 'boolean';\n    }\n  }]);\n\n  return BooleanRule;\n}();\n\n\n\n//# sourceURL=webpack://Formlidate/./src/rules/Boolean.js?");

/***/ }),

/***/ "./src/rules/Contains.js":
/*!*******************************!*\
  !*** ./src/rules/Contains.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Contains; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Formlidate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Formlidate */ \"./src/Formlidate.js\");\n\n\n\n/* eslint-disable class-methods-use-this */\n\n\nvar Contains = /*#__PURE__*/function () {\n  /**\n   * Create an instance of the rule class.\n   *\n   * @param {array} parameters\n   */\n  function Contains(params) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Contains);\n\n    this.expectedValues = params;\n  }\n  /**\n   * Get the name of the validation rule.\n   */\n\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Contains, [{\n    key: \"passes\",\n\n    /**\n     * Check if a field's value passes the validation rule.\n     *\n     * @param {any} value Value of the field to be validated\n     */\n    value: function passes(value) {\n      return this.expectedValues.some(function (expectedValue) {\n        return String(value).includes(expectedValue);\n      });\n    }\n    /**\n     * Get the rule's error message.\n     */\n\n  }, {\n    key: \"message\",\n    value: function message() {\n      return _Formlidate__WEBPACK_IMPORTED_MODULE_2__[\"default\"].$translation(Contains.name(), 'Invalid');\n    }\n  }], [{\n    key: \"name\",\n    value: function name() {\n      return 'contains';\n    }\n  }]);\n\n  return Contains;\n}();\n\n\n\n//# sourceURL=webpack://Formlidate/./src/rules/Contains.js?");

/***/ }),

/***/ "./src/rules/DateRule.js":
/*!*******************************!*\
  !*** ./src/rules/DateRule.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DateRule; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Formlidate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Formlidate */ \"./src/Formlidate.js\");\n\n\n\n/* eslint-disable class-methods-use-this */\n\n\nvar DateRule = /*#__PURE__*/function () {\n  function DateRule() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, DateRule);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(DateRule, [{\n    key: \"passes\",\n\n    /**\n     * Check if a field's value passes the validation rule.\n     *\n     * @param {any} value Value of the field to be validated\n     * @param {Object} values Values of other fields\n     */\n    value: function passes(value) {\n      // eslint-disable-next-line no-restricted-globals\n      return !isNaN(Date.parse(value));\n    }\n    /**\n     * Get the rule's error message.\n     */\n\n  }, {\n    key: \"message\",\n    value: function message() {\n      return _Formlidate__WEBPACK_IMPORTED_MODULE_2__[\"default\"].$translation(DateRule.name(), 'Invalid date');\n    }\n  }], [{\n    key: \"name\",\n\n    /**\n     * Get the name of the validation rule.\n     */\n    value: function name() {\n      return 'date';\n    }\n  }]);\n\n  return DateRule;\n}();\n\n\n\n//# sourceURL=webpack://Formlidate/./src/rules/DateRule.js?");

/***/ }),

/***/ "./src/rules/Different.js":
/*!********************************!*\
  !*** ./src/rules/Different.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Different; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Formlidate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Formlidate */ \"./src/Formlidate.js\");\n\n\n\n\n/* eslint-disable class-methods-use-this */\n\n\nvar Different = /*#__PURE__*/function () {\n  /**\n   * Create an instance of the rule class.\n   *\n   * @param {array} parameters\n   */\n  function Different(_ref) {\n    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 1),\n        param1 = _ref2[0];\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Different);\n\n    this.otherField = param1;\n  }\n  /**\n   * Get the name of the validation rule.\n   */\n\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Different, [{\n    key: \"passes\",\n\n    /**\n     * Check if a field's value passes the validation rule.\n     *\n     * @param {any} value Value of the field to be validated\n     * @param {Object} values Values of other fields\n     */\n    value: function passes(value, values) {\n      return values[this.otherField] !== value;\n    }\n    /**\n     * Get the rule's error message.\n     */\n\n  }, {\n    key: \"message\",\n    value: function message() {\n      return _Formlidate__WEBPACK_IMPORTED_MODULE_3__[\"default\"].$translation(Different.name(), 'Invalid');\n    }\n  }], [{\n    key: \"name\",\n    value: function name() {\n      return 'different';\n    }\n  }]);\n\n  return Different;\n}();\n\n\n\n//# sourceURL=webpack://Formlidate/./src/rules/Different.js?");

/***/ }),

/***/ "./src/rules/Digits.js":
/*!*****************************!*\
  !*** ./src/rules/Digits.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Digits; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Formlidate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Formlidate */ \"./src/Formlidate.js\");\n\n\n\n\n/* eslint-disable class-methods-use-this */\n\n\nvar Digits = /*#__PURE__*/function () {\n  /**\n   * Create an instance of the rule class.\n   *\n   * @param {array} parameters\n   */\n  function Digits(_ref) {\n    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 1),\n        param1 = _ref2[0];\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Digits);\n\n    this.exactLength = param1;\n  }\n  /**\n   * Get the name of the validation rule.\n   */\n\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Digits, [{\n    key: \"passes\",\n\n    /**\n     * Check if a field's value passes the validation rule.\n     *\n     * @param {any} value Value of the field to be validated\n     */\n    value: function passes(value) {\n      return new RegExp(\"^\\\\d{\".concat(this.exactLength, \"}$\")).test(value);\n    }\n    /**\n     * Get the rule's error message.\n     */\n\n  }, {\n    key: \"message\",\n    value: function message() {\n      return _Formlidate__WEBPACK_IMPORTED_MODULE_3__[\"default\"].$translation(Digits.name(), 'Invalid');\n    }\n  }], [{\n    key: \"name\",\n    value: function name() {\n      return 'digits';\n    }\n  }]);\n\n  return Digits;\n}();\n\n\n\n//# sourceURL=webpack://Formlidate/./src/rules/Digits.js?");

/***/ }),

/***/ "./src/rules/DigitsBetween.js":
/*!************************************!*\
  !*** ./src/rules/DigitsBetween.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DigitsBetween; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Formlidate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Formlidate */ \"./src/Formlidate.js\");\n\n\n\n\n/* eslint-disable class-methods-use-this */\n\n\nvar DigitsBetween = /*#__PURE__*/function () {\n  /**\n   * Create an instance of the rule class.\n   *\n   * @param {array} parameters\n   */\n  function DigitsBetween(_ref) {\n    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),\n        min = _ref2[0],\n        max = _ref2[1];\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, DigitsBetween);\n\n    this.min = min;\n    this.max = max;\n  }\n  /**\n   * Get the name of the validation rule.\n   */\n\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(DigitsBetween, [{\n    key: \"passes\",\n\n    /**\n     * Check if a field's value passes the validation rule.\n     *\n     * @param {any} value Value of the field to be validated\n     */\n    value: function passes(value) {\n      if (this.min && this.max) {\n        return new RegExp(\"^\\\\d{\".concat(this.min, \",\").concat(this.max, \"}$\")).test(value);\n      }\n\n      return new RegExp(\"^\\\\d{\".concat(this.min, \",}$\")).test(value);\n    }\n    /**\n     * Get the rule's error message.\n     */\n\n  }, {\n    key: \"message\",\n    value: function message() {\n      return _Formlidate__WEBPACK_IMPORTED_MODULE_3__[\"default\"].$translation(DigitsBetween.name(), 'Invalid');\n    }\n  }], [{\n    key: \"name\",\n    value: function name() {\n      return 'digits_between';\n    }\n  }]);\n\n  return DigitsBetween;\n}();\n\n\n\n//# sourceURL=webpack://Formlidate/./src/rules/DigitsBetween.js?");

/***/ }),

/***/ "./src/rules/Email.js":
/*!****************************!*\
  !*** ./src/rules/Email.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Email; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Formlidate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Formlidate */ \"./src/Formlidate.js\");\n\n\n\n/* eslint-disable class-methods-use-this */\n\n\nvar Email = /*#__PURE__*/function () {\n  function Email() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Email);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Email, [{\n    key: \"passes\",\n\n    /**\n     * Check if a field's value passes the validation rule.\n     *\n     * @param {any} value Value of the field to be validated\n     */\n    value: function passes(value) {\n      return /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\\.\\w{2,}$/.test(value);\n    }\n    /**\n     * Get the rule's error message.\n     */\n\n  }, {\n    key: \"message\",\n    value: function message() {\n      return _Formlidate__WEBPACK_IMPORTED_MODULE_2__[\"default\"].$translation(Email.name(), 'Invalid email');\n    }\n  }], [{\n    key: \"name\",\n\n    /**\n     * Get the name of the validation rule.\n     */\n    value: function name() {\n      return 'email';\n    }\n  }]);\n\n  return Email;\n}();\n\n\n\n//# sourceURL=webpack://Formlidate/./src/rules/Email.js?");

/***/ }),

/***/ "./src/rules/EndsWith.js":
/*!*******************************!*\
  !*** ./src/rules/EndsWith.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EndsWith; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Formlidate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Formlidate */ \"./src/Formlidate.js\");\n\n\n\n/* eslint-disable class-methods-use-this */\n\n\nvar EndsWith = /*#__PURE__*/function () {\n  /**\n   * Create an instance of the rule class.\n   *\n   * @param {array} parameters\n   */\n  function EndsWith(params) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EndsWith);\n\n    this.endValues = params;\n  }\n  /**\n   * Get the name of the validation rule.\n   */\n\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EndsWith, [{\n    key: \"passes\",\n\n    /**\n     * Check if a field's value passes the validation rule.\n     *\n     * @param {any} value Value of the field to be validated\n     */\n    value: function passes(value) {\n      return this.endValues.some(function (endValue) {\n        return value.endsWith(endValue);\n      });\n    }\n    /**\n     * Get the rule's error message.\n     */\n\n  }, {\n    key: \"message\",\n    value: function message() {\n      return _Formlidate__WEBPACK_IMPORTED_MODULE_2__[\"default\"].$translation(EndsWith.name(), 'Invalid');\n    }\n  }], [{\n    key: \"name\",\n    value: function name() {\n      return 'ends_with';\n    }\n  }]);\n\n  return EndsWith;\n}();\n\n\n\n//# sourceURL=webpack://Formlidate/./src/rules/EndsWith.js?");

/***/ }),

/***/ "./src/rules/File.js":
/*!***************************!*\
  !*** ./src/rules/File.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FileRule; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Formlidate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Formlidate */ \"./src/Formlidate.js\");\n\n\n\n/* eslint-disable class-methods-use-this */\n\n\nvar FileRule = /*#__PURE__*/function () {\n  function FileRule() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, FileRule);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(FileRule, [{\n    key: \"passes\",\n\n    /**\n     * Check if a field's value passes the validation rule.\n     *\n     * @param {any} value Value of the field to be validated\n     */\n    value: function passes(value) {\n      return value instanceof File || value instanceof Array && value[0] instanceof File;\n    }\n    /**\n     * Get the rule's error message.\n     */\n\n  }, {\n    key: \"message\",\n    value: function message() {\n      return _Formlidate__WEBPACK_IMPORTED_MODULE_2__[\"default\"].$translation(FileRule.name(), 'Invalid file');\n    }\n  }], [{\n    key: \"name\",\n\n    /**\n     * Get the name of the validation rule.\n     */\n    value: function name() {\n      return 'file';\n    }\n  }]);\n\n  return FileRule;\n}();\n\n\n\n//# sourceURL=webpack://Formlidate/./src/rules/File.js?");

/***/ }),

/***/ "./src/rules/GreaterThan.js":
/*!**********************************!*\
  !*** ./src/rules/GreaterThan.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GreaterThan; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Formlidate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Formlidate */ \"./src/Formlidate.js\");\n\n\n\n\n/* eslint-disable class-methods-use-this */\n\n\nvar GreaterThan = /*#__PURE__*/function () {\n  function GreaterThan(_ref) {\n    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 1),\n        otherFieldName = _ref2[0];\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, GreaterThan);\n\n    this.otherFieldName = otherFieldName;\n  }\n  /**\n   * Get the name of the validation rule.\n   */\n\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(GreaterThan, [{\n    key: \"passes\",\n\n    /**\n     * Check if a field's value passes the validation rule.\n     *\n     * @param {any} value Value of the field to be validated\n     * @param {Object} values Values of other fields\n     */\n    value: function passes(value, values) {\n      if (Object.prototype.hasOwnProperty.call(value, 'length')) {\n        return value.length > values[this.otherFieldName].length;\n      }\n\n      return value > values[this.otherFieldName];\n    }\n    /**\n     * Get the rule's error message.\n     */\n\n  }, {\n    key: \"message\",\n    value: function message() {\n      return _Formlidate__WEBPACK_IMPORTED_MODULE_3__[\"default\"].$translation(GreaterThan.name(), 'Invalid');\n    }\n  }], [{\n    key: \"name\",\n    value: function name() {\n      return 'gt';\n    }\n  }]);\n\n  return GreaterThan;\n}();\n\n\n\n//# sourceURL=webpack://Formlidate/./src/rules/GreaterThan.js?");

/***/ }),

/***/ "./src/rules/GreaterThanOrEqual.js":
/*!*****************************************!*\
  !*** ./src/rules/GreaterThanOrEqual.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GreaterThanOrEqual; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Formlidate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Formlidate */ \"./src/Formlidate.js\");\n\n\n\n\n/* eslint-disable class-methods-use-this */\n\n\nvar GreaterThanOrEqual = /*#__PURE__*/function () {\n  function GreaterThanOrEqual(_ref) {\n    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 1),\n        otherFieldName = _ref2[0];\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, GreaterThanOrEqual);\n\n    this.otherFieldName = otherFieldName;\n  }\n  /**\n   * Get the name of the validation rule.\n   */\n\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(GreaterThanOrEqual, [{\n    key: \"passes\",\n\n    /**\n     * Check if a field's value passes the validation rule.\n     *\n     * @param {any} value Value of the field to be validated\n     * @param {Object} values Values of other fields\n     */\n    value: function passes(value, values) {\n      if (Object.prototype.hasOwnProperty.call(value, 'length')) {\n        return value.length >= values[this.otherFieldName].length;\n      }\n\n      return value >= values[this.otherFieldName];\n    }\n    /**\n     * Get the rule's error message.\n     */\n\n  }, {\n    key: \"message\",\n    value: function message() {\n      return _Formlidate__WEBPACK_IMPORTED_MODULE_3__[\"default\"].$translation(GreaterThanOrEqual.name(), 'Invalid');\n    }\n  }], [{\n    key: \"name\",\n    value: function name() {\n      return 'gte';\n    }\n  }]);\n\n  return GreaterThanOrEqual;\n}();\n\n\n\n//# sourceURL=webpack://Formlidate/./src/rules/GreaterThanOrEqual.js?");

/***/ }),

/***/ "./src/rules/In.js":
/*!*************************!*\
  !*** ./src/rules/In.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return In; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Formlidate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Formlidate */ \"./src/Formlidate.js\");\n\n\n\n/* eslint-disable class-methods-use-this */\n\n\nvar In = /*#__PURE__*/function () {\n  /**\n   * Create an instance of the rule class.\n   *\n   * @param {array} parameters\n   */\n  function In(params) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, In);\n\n    this.expectedValues = params;\n  }\n  /**\n   * Get the name of the validation rule.\n   */\n\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(In, [{\n    key: \"passes\",\n\n    /**\n     * Check if a field's value passes the validation rule.\n     *\n     * @param {any} value Value of the field to be validated\n     */\n    value: function passes(value) {\n      return this.expectedValues.includes(value);\n    }\n    /**\n     * Get the rule's error message.\n     */\n\n  }, {\n    key: \"message\",\n    value: function message() {\n      return _Formlidate__WEBPACK_IMPORTED_MODULE_2__[\"default\"].$translation(In.name(), 'Invalid');\n    }\n  }], [{\n    key: \"name\",\n    value: function name() {\n      return 'in';\n    }\n  }]);\n\n  return In;\n}();\n\n\n\n//# sourceURL=webpack://Formlidate/./src/rules/In.js?");

/***/ }),

/***/ "./src/rules/LessThan.js":
/*!*******************************!*\
  !*** ./src/rules/LessThan.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LessThan; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Formlidate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Formlidate */ \"./src/Formlidate.js\");\n\n\n\n\n/* eslint-disable class-methods-use-this */\n\n\nvar LessThan = /*#__PURE__*/function () {\n  function LessThan(_ref) {\n    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 1),\n        otherFieldName = _ref2[0];\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, LessThan);\n\n    this.otherFieldName = otherFieldName;\n  }\n  /**\n   * Get the name of the validation rule.\n   */\n\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(LessThan, [{\n    key: \"passes\",\n\n    /**\n     * Check if a field's value passes the validation rule.\n     *\n     * @param {any} value Value of the field to be validated\n     * @param {Object} values Values of other fields\n     */\n    value: function passes(value, values) {\n      if (Object.prototype.hasOwnProperty.call(value, 'length')) {\n        return value.length < values[this.otherFieldName].length;\n      }\n\n      return value < values[this.otherFieldName];\n    }\n    /**\n     * Get the rule's error message.\n     */\n\n  }, {\n    key: \"message\",\n    value: function message() {\n      return _Formlidate__WEBPACK_IMPORTED_MODULE_3__[\"default\"].$translation(LessThan.name(), 'Invalid');\n    }\n  }], [{\n    key: \"name\",\n    value: function name() {\n      return 'lt';\n    }\n  }]);\n\n  return LessThan;\n}();\n\n\n\n//# sourceURL=webpack://Formlidate/./src/rules/LessThan.js?");

/***/ }),

/***/ "./src/rules/LessThanOrEqual.js":
/*!**************************************!*\
  !*** ./src/rules/LessThanOrEqual.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LessThanOrEqual; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Formlidate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Formlidate */ \"./src/Formlidate.js\");\n\n\n\n\n/* eslint-disable class-methods-use-this */\n\n\nvar LessThanOrEqual = /*#__PURE__*/function () {\n  function LessThanOrEqual(_ref) {\n    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 1),\n        otherFieldName = _ref2[0];\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, LessThanOrEqual);\n\n    this.otherFieldName = otherFieldName;\n  }\n  /**\n   * Get the name of the validation rule.\n   */\n\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(LessThanOrEqual, [{\n    key: \"passes\",\n\n    /**\n     * Check if a field's value passes the validation rule.\n     *\n     * @param {any} value Value of the field to be validated\n     * @param {Object} values Values of other fields\n     */\n    value: function passes(value, values) {\n      if (Object.prototype.hasOwnProperty.call(value, 'length')) {\n        return value.length <= values[this.otherFieldName].length;\n      }\n\n      return value <= values[this.otherFieldName];\n    }\n    /**\n     * Get the rule's error message.\n     */\n\n  }, {\n    key: \"message\",\n    value: function message() {\n      return _Formlidate__WEBPACK_IMPORTED_MODULE_3__[\"default\"].$translation(LessThanOrEqual.name(), 'Invalid');\n    }\n  }], [{\n    key: \"name\",\n    value: function name() {\n      return 'lte';\n    }\n  }]);\n\n  return LessThanOrEqual;\n}();\n\n\n\n//# sourceURL=webpack://Formlidate/./src/rules/LessThanOrEqual.js?");

/***/ }),

/***/ "./src/rules/Regex.js":
/*!****************************!*\
  !*** ./src/rules/Regex.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Regex; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Formlidate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Formlidate */ \"./src/Formlidate.js\");\n\n\n\n\n/* eslint-disable class-methods-use-this */\n\n\nvar Regex = /*#__PURE__*/function () {\n  /**\n   * Create an instance of the rule class.\n   *\n   * @param {array} parameters\n   */\n  function Regex(_ref) {\n    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 1),\n        pattern = _ref2[0];\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Regex);\n\n    this.pattern = pattern;\n  }\n  /**\n   * Get the name of the validation rule.\n   */\n\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Regex, [{\n    key: \"passes\",\n\n    /**\n     * Check if a field's value passes the validation rule.\n     *\n     * @param {any} value Value of the field to be validated\n     * @param {Object} values Values of other fields\n     */\n    value: function passes(value) {\n      return new RegExp(this.pattern).test(value);\n    }\n    /**\n     * Get the rule's error message.\n     */\n\n  }, {\n    key: \"message\",\n    value: function message() {\n      return _Formlidate__WEBPACK_IMPORTED_MODULE_3__[\"default\"].$translation(Regex.name(), 'Invalid');\n    }\n  }], [{\n    key: \"name\",\n    value: function name() {\n      return 'regex';\n    }\n  }]);\n\n  return Regex;\n}();\n\n\n\n//# sourceURL=webpack://Formlidate/./src/rules/Regex.js?");

/***/ }),

/***/ "./src/rules/Required.js":
/*!*******************************!*\
  !*** ./src/rules/Required.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Required; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Formlidate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Formlidate */ \"./src/Formlidate.js\");\n\n\n\n/* eslint-disable class-methods-use-this */\n\n\nvar Required = /*#__PURE__*/function () {\n  function Required() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Required);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Required, [{\n    key: \"passes\",\n\n    /**\n     * Check if a field's value passes the validation rule.\n     *\n     * @param {any} value Value of the field to be validated\n     */\n    value: function passes(value) {\n      if (value instanceof File) return value.name !== '';\n      if (value instanceof Array && value[0] instanceof File) return value[0].name !== '';\n\n      if (value instanceof Array) {\n        // empty multiple file fields returns an array\n        // with the first value as empty string in some browsers\n        return value.length === 1 ? value[0] !== '' : value.length > 0;\n      }\n\n      if (value instanceof Object) return Object.keys(value).length > 0;\n      return value !== '' && value !== null && typeof value !== 'undefined';\n    }\n    /**\n     * Get the rule's error message.\n     */\n\n  }, {\n    key: \"message\",\n    value: function message() {\n      return _Formlidate__WEBPACK_IMPORTED_MODULE_2__[\"default\"].$translation(Required.name(), 'Required');\n    }\n  }], [{\n    key: \"name\",\n\n    /**\n     * Get the name of the validation rule.\n     */\n    value: function name() {\n      return 'required';\n    }\n  }]);\n\n  return Required;\n}();\n\n\n\n//# sourceURL=webpack://Formlidate/./src/rules/Required.js?");

/***/ }),

/***/ "./src/rules/RequiredIf.js":
/*!*********************************!*\
  !*** ./src/rules/RequiredIf.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RequiredIf; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Formlidate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Formlidate */ \"./src/Formlidate.js\");\n/* harmony import */ var _Required__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Required */ \"./src/rules/Required.js\");\n\n\n\n\n/* eslint-disable class-methods-use-this */\n\n\n\nvar RequiredIf = /*#__PURE__*/function () {\n  /**\n   * Create an instance of the rule class.\n   *\n   * @param {array} parameters\n   */\n  function RequiredIf(_ref) {\n    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),\n        dependentField = _ref2[0],\n        dependentValue = _ref2[1];\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, RequiredIf);\n\n    this.dependentField = dependentField;\n    this.dependentValue = dependentValue;\n  }\n  /**\n   * Get the name of the validation rule.\n   */\n\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(RequiredIf, [{\n    key: \"passes\",\n\n    /**\n     * Check if a field's value passes the validation rule.\n     *\n     * @param {any} value Value of the field to be validated\n     * @param {Object} values Values of other fields\n     */\n    value: function passes(value, values) {\n      return values[this.dependentField] === this.dependentValue ? new _Required__WEBPACK_IMPORTED_MODULE_4__[\"default\"]().passes(value) : true;\n    }\n    /**\n     * Get the rule's error message.\n     */\n\n  }, {\n    key: \"message\",\n    value: function message() {\n      return _Formlidate__WEBPACK_IMPORTED_MODULE_3__[\"default\"].$translation(RequiredIf.name(), 'Required');\n    }\n  }], [{\n    key: \"name\",\n    value: function name() {\n      return 'required_if';\n    }\n  }]);\n\n  return RequiredIf;\n}();\n\n\n\n//# sourceURL=webpack://Formlidate/./src/rules/RequiredIf.js?");

/***/ }),

/***/ "./src/rules/Same.js":
/*!***************************!*\
  !*** ./src/rules/Same.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Same; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Formlidate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Formlidate */ \"./src/Formlidate.js\");\n\n\n\n\n/* eslint-disable class-methods-use-this */\n\n\nvar Same = /*#__PURE__*/function () {\n  /**\n   * Create an instance of the rule class.\n   *\n   * @param {array} parameters\n   */\n  function Same(_ref) {\n    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 1),\n        param1 = _ref2[0];\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Same);\n\n    this.fieldName = param1;\n  }\n  /**\n   * Get the name of the validation rule.\n   */\n\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Same, [{\n    key: \"passes\",\n\n    /**\n     * Check if a field's value passes the validation rule.\n     *\n     * @param {any} value Value of the field to be validated\n     * @param {Object} values Values of other fields\n     */\n    value: function passes(value, values) {\n      return value === values[this.fieldName];\n    }\n    /**\n     * Get the rule's error message.\n     */\n\n  }, {\n    key: \"message\",\n    value: function message() {\n      return _Formlidate__WEBPACK_IMPORTED_MODULE_3__[\"default\"].$translation(Same.name(), 'Invalid');\n    }\n  }], [{\n    key: \"name\",\n    value: function name() {\n      return 'same';\n    }\n  }]);\n\n  return Same;\n}();\n\n\n\n//# sourceURL=webpack://Formlidate/./src/rules/Same.js?");

/***/ }),

/***/ "./src/rules/StartsWith.js":
/*!*********************************!*\
  !*** ./src/rules/StartsWith.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return StartsWith; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Formlidate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Formlidate */ \"./src/Formlidate.js\");\n\n\n\n/* eslint-disable class-methods-use-this */\n\n\nvar StartsWith = /*#__PURE__*/function () {\n  /**\n   * Create an instance of the rule class.\n   *\n   * @param {array} parameters\n   */\n  function StartsWith(params) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, StartsWith);\n\n    this.expectedValues = params;\n  }\n  /**\n   * Get the name of the validation rule.\n   */\n\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(StartsWith, [{\n    key: \"passes\",\n\n    /**\n     * Check if a field's value passes the validation rule.\n     *\n     * @param {any} value Value of the field to be validated\n     */\n    value: function passes(value) {\n      return this.expectedValues.some(function (expectedValue) {\n        return String(value).startsWith(expectedValue);\n      });\n    }\n    /**\n     * Get the rule's error message.\n     */\n\n  }, {\n    key: \"message\",\n    value: function message() {\n      return _Formlidate__WEBPACK_IMPORTED_MODULE_2__[\"default\"].$translation(StartsWith.name(), 'Invalid');\n    }\n  }], [{\n    key: \"name\",\n    value: function name() {\n      return 'starts_with';\n    }\n  }]);\n\n  return StartsWith;\n}();\n\n\n\n//# sourceURL=webpack://Formlidate/./src/rules/StartsWith.js?");

/***/ }),

/***/ "./src/rules/index.js":
/*!****************************!*\
  !*** ./src/rules/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Accepted__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Accepted */ \"./src/rules/Accepted.js\");\n/* harmony import */ var _Alpha__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Alpha */ \"./src/rules/Alpha.js\");\n/* harmony import */ var _AlphaDash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AlphaDash */ \"./src/rules/AlphaDash.js\");\n/* harmony import */ var _AlphaNum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AlphaNum */ \"./src/rules/AlphaNum.js\");\n/* harmony import */ var _Array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Array */ \"./src/rules/Array.js\");\n/* harmony import */ var _Boolean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Boolean */ \"./src/rules/Boolean.js\");\n/* harmony import */ var _Contains__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Contains */ \"./src/rules/Contains.js\");\n/* harmony import */ var _DateRule__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DateRule */ \"./src/rules/DateRule.js\");\n/* harmony import */ var _Different__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Different */ \"./src/rules/Different.js\");\n/* harmony import */ var _Digits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Digits */ \"./src/rules/Digits.js\");\n/* harmony import */ var _DigitsBetween__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DigitsBetween */ \"./src/rules/DigitsBetween.js\");\n/* harmony import */ var _Email__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Email */ \"./src/rules/Email.js\");\n/* harmony import */ var _EndsWith__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./EndsWith */ \"./src/rules/EndsWith.js\");\n/* harmony import */ var _File__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./File */ \"./src/rules/File.js\");\n/* harmony import */ var _GreaterThan__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./GreaterThan */ \"./src/rules/GreaterThan.js\");\n/* harmony import */ var _GreaterThanOrEqual__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./GreaterThanOrEqual */ \"./src/rules/GreaterThanOrEqual.js\");\n/* harmony import */ var _In__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./In */ \"./src/rules/In.js\");\n/* harmony import */ var _LessThan__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./LessThan */ \"./src/rules/LessThan.js\");\n/* harmony import */ var _LessThanOrEqual__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./LessThanOrEqual */ \"./src/rules/LessThanOrEqual.js\");\n/* harmony import */ var _Regex__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Regex */ \"./src/rules/Regex.js\");\n/* harmony import */ var _Required__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Required */ \"./src/rules/Required.js\");\n/* harmony import */ var _RequiredIf__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./RequiredIf */ \"./src/rules/RequiredIf.js\");\n/* harmony import */ var _Same__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Same */ \"./src/rules/Same.js\");\n/* harmony import */ var _StartsWith__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./StartsWith */ \"./src/rules/StartsWith.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([_Accepted__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _Alpha__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _AlphaDash__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _AlphaNum__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _Array__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _Boolean__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _Contains__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _DateRule__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _Different__WEBPACK_IMPORTED_MODULE_8__[\"default\"], _Digits__WEBPACK_IMPORTED_MODULE_9__[\"default\"], _DigitsBetween__WEBPACK_IMPORTED_MODULE_10__[\"default\"], _Email__WEBPACK_IMPORTED_MODULE_11__[\"default\"], _EndsWith__WEBPACK_IMPORTED_MODULE_12__[\"default\"], _File__WEBPACK_IMPORTED_MODULE_13__[\"default\"], _GreaterThan__WEBPACK_IMPORTED_MODULE_14__[\"default\"], _GreaterThanOrEqual__WEBPACK_IMPORTED_MODULE_15__[\"default\"], _In__WEBPACK_IMPORTED_MODULE_16__[\"default\"], _LessThan__WEBPACK_IMPORTED_MODULE_17__[\"default\"], _LessThanOrEqual__WEBPACK_IMPORTED_MODULE_18__[\"default\"], _Regex__WEBPACK_IMPORTED_MODULE_19__[\"default\"], _Required__WEBPACK_IMPORTED_MODULE_20__[\"default\"], _RequiredIf__WEBPACK_IMPORTED_MODULE_21__[\"default\"], _Same__WEBPACK_IMPORTED_MODULE_22__[\"default\"], _StartsWith__WEBPACK_IMPORTED_MODULE_23__[\"default\"]]);\n\n//# sourceURL=webpack://Formlidate/./src/rules/index.js?");

/***/ })

/******/ })["default"];
});
