(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/itembank/itembank"],{

/***/ 37:
/*!*******************************************************************!*\
  !*** E:/GPer/GPer/main.js?{"page":"pages%2Fitembank%2Fitembank"} ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _itembank = _interopRequireDefault(__webpack_require__(/*! ./pages/itembank/itembank.vue */ 38));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_itembank.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 38:
/*!************************************************!*\
  !*** E:/GPer/GPer/pages/itembank/itembank.vue ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _itembank_vue_vue_type_template_id_2a74cf46_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./itembank.vue?vue&type=template&id=2a74cf46&scoped=true& */ 39);
/* harmony import */ var _itembank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./itembank.vue?vue&type=script&lang=js& */ 41);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _itembank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _itembank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _itembank_vue_vue_type_style_index_0_id_2a74cf46_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./itembank.vue?vue&type=style&index=0&id=2a74cf46&lang=less&scoped=true& */ 43);
/* harmony import */ var _HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../HX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);

var renderjs





/* normalize component */

var component = Object(_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _itembank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _itembank_vue_vue_type_template_id_2a74cf46_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _itembank_vue_vue_type_template_id_2a74cf46_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2a74cf46",
  null,
  false,
  _itembank_vue_vue_type_template_id_2a74cf46_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

/* hot reload */
if (false) { var api; }
component.options.__file = "GPer/GPer/pages/itembank/itembank.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 39:
/*!*******************************************************************************************!*\
  !*** E:/GPer/GPer/pages/itembank/itembank.vue?vue&type=template&id=2a74cf46&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_itembank_vue_vue_type_template_id_2a74cf46_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../HX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./itembank.vue?vue&type=template&id=2a74cf46&scoped=true& */ 40);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_itembank_vue_vue_type_template_id_2a74cf46_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_itembank_vue_vue_type_template_id_2a74cf46_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_itembank_vue_vue_type_template_id_2a74cf46_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_itembank_vue_vue_type_template_id_2a74cf46_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 40:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/GPer/GPer/pages/itembank/itembank.vue?vue&type=template&id=2a74cf46&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var f0 = _vm._f("numToWeek")(_vm.today.day)

  if (!_vm._isMounted) {
    _vm.e0 = function($event) {
      _vm.showClock = !_vm.showClock
    }

    _vm.e1 = function($event) {
      _vm.showClock = !_vm.showClock
    }

    _vm.e2 = function($event) {
      _vm.showPoster0 = false
    }

    _vm.e3 = function($event) {
      _vm.showPoster1 = false
    }

    _vm.e4 = function($event) {
      _vm.showPoster2 = false
    }
  }

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        f0: f0
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 41:
/*!*************************************************************************!*\
  !*** E:/GPer/GPer/pages/itembank/itembank.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_itembank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../HX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./itembank.vue?vue&type=script&lang=js& */ 42);
/* harmony import */ var _HX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_itembank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_itembank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_itembank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_itembank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_itembank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 42:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/GPer/GPer/pages/itembank/itembank.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 19));












































































































































var _http = __webpack_require__(/*! @api/http */ 22);

var _api = __webpack_require__(/*! @api */ 31);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var
wxLogin = _api.user.wxLogin;var
getTodayByUserId = _api.itembank.getTodayByUserId,todayIsCard = _api.itembank.todayIsCard,immediatelyPunchUserId = _api.itembank.immediatelyPunchUserId,getDaysCount = _api.itembank.getDaysCount,getInterviewSituation = _api.itembank.getInterviewSituation,getExerciseSituation = _api.itembank.getExerciseSituation;var _default =
{
  data: function data() {
    return {
      today: {
        m: '',
        d: '',
        day: '' },

      showClock: false,
      showPoster0: false, // 打卡成功拟态框状态
      showPoster1: false, // 分享面试拟态框状态
      showPoster2: false, // 分享练习拟态框状态
      isPunch: 0, // 是否打卡，
      // 今日答题情况
      todayCount: {
        exerciseCount: 0,
        interviewCount: 0,
        daysCount: 0 },

      // 大厂面试数据
      interviewSituation: {
        interviewCount: 0,
        interviewQuestionCount: 0,
        interviewCorrectCount: 0,
        interviewCorrectScore: 0 },

      // 专题练习数据
      exerciseSituation: {
        exerciseCount: 0,
        exerciseQuestionCount: 0,
        exerciseCorrectCount: 0,
        exerciseCorrectScore: 0 } };


  },
  onShow: function () {var _onShow = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var _ref, code, userInfo, _ref2, exerciseCount, interviewCount, _ref3, daysCount, isCardStatus, interviewSituation, exerciseSituation;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (

              this.$store.state.userId) {_context.next = 15;break;}_context.next = 3;return (
                _http.util.login());case 3:_ref = _context.sent;code = _ref.code;_context.next = 7;return (
                wxLogin({ code: code }));case 7:userInfo = _context.sent;if (

              userInfo.userId) {_context.next = 12;break;}
              uni.hideLoading();
              this.jump('/pages/user/user');return _context.abrupt("return");case 12:


              uni.setStorageSync('userId', this.$store.state.userId);
              this.$store.state.userInfo = userInfo;
              this.$store.state.userId = userInfo.userId;case 15:


              this.getDate();
              // 获取今日答题情况
              // console.info(this.$store.state.userId);
              _context.next = 18;return getTodayByUserId({ userId: this.$store.state.userId });case 18:_ref2 = _context.sent;exerciseCount = _ref2.exerciseCount;interviewCount = _ref2.interviewCount;
              this.todayCount.exerciseCount = exerciseCount;
              this.todayCount.interviewCount = interviewCount;

              // 获取连续打卡的天数
              _context.next = 25;return getDaysCount({ userId: this.$store.state.userId });case 25:_ref3 = _context.sent;daysCount = _ref3.daysCount;
              this.todayCount.daysCount = daysCount;

              // 获取打卡状态
              _context.next = 30;return todayIsCard({ userId: this.$store.state.userId });case 30:isCardStatus = _context.sent;
              this.isPunch = isCardStatus;

              // 获取大厂面试数据
              _context.next = 34;return getInterviewSituation({ userId: this.$store.state.userId });case 34:interviewSituation = _context.sent;
              this.interviewSituation = interviewSituation;

              // 获取专题练习数据
              _context.next = 38;return getExerciseSituation({ userId: this.$store.state.userId });case 38:exerciseSituation = _context.sent;
              this.exerciseSituation = exerciseSituation;
              // uni.hideLoading();
            case 40:case "end":return _context.stop();}}}, _callee, this);}));function onShow() {return _onShow.apply(this, arguments);}return onShow;}(),
  methods: {
    // 获取今日日期
    getDate: function getDate() {
      var date = new Date();
      var m = date.getMonth() + 1; //获取当前月份(0-11,0代表1月)
      var d = date.getDate();
      var day = date.getDay();
      this.today.m = m;
      this.today.d = d;
      this.today.day = day;
    },

    // 立即打卡
    immediatelyClock: function () {var _immediatelyClock = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var data;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                this.showClock = false;
                this.showPoster0 = true;
                this.createImage(0);_context2.next = 5;return (

                  immediatelyPunchUserId({ userId: this.$store.state.userId }));case 5:data = _context2.sent;
                this.isPunch = true;
                // console.info(data);
              case 7:case "end":return _context2.stop();}}}, _callee2, this);}));function immediatelyClock() {return _immediatelyClock.apply(this, arguments);}return immediatelyClock;}(),

    // 分享大厂面试
    shareInterview: function shareInterview() {
      this.showPoster1 = true;
      this.createImage(1);
    },

    // 分享专题练习
    sharePractice: function sharePractice() {
      this.showPoster2 = true;
      this.createImage(2);
    },

    // 生成海报图片
    // index:
    // 0 立即打卡
    // 1 分享大厂面试
    // 2 分享专题练习
    createImage: function createImage(index) {
      var context = uni.createCanvasContext('myCanvas');
      // 1 - 背景图片
      if (index === 0) context.drawImage('/static/clockyes.png', 0, 0, 375, 667);
      if (index === 1) context.drawImage('/static/clockyes1.png', 0, 0, 375, 667);
      if (index === 2) context.drawImage('/static/clockyes2.png', 0, 0, 375, 667);

      // 2 - 用户头像
      context.save(); // 先保存状态 已便于画完圆再用
      context.beginPath(); //开始绘制
      //先画个圆
      context.arc(187, 99, 47, 0, Math.PI * 2);
      context.setFillStyle('#ffffff');
      context.fill(); //保证图片无bug填充
      context.clip(); //画了圆 再剪切 原始画布中剪切任意形状和尺寸。一旦剪切了某个区域，则所有之后的绘图都会被限制在被剪切的区域内
      context.drawImage('/static/logo.png', 140, 52, 94, 94); // 推进去图片
      context.restore();

      // 3 - 打卡总天数
      context.setFillStyle('#fff');
      context.setFontSize(20);
      if (index === 0) {
        context.fillText('我已在GPer社区题库打卡', 36, 180);
        context.fillText('天', 325, 180);

        context.setFillStyle('#FDC223');
        context.setFontSize(36);
        context.textAlign = 'center';
        context.fillText(this.todayCount.daysCount, 294, 180);
      }
      if (index === 1) context.fillText('每日面试 离大厂只有一步之遥', 55, 180);
      if (index === 2) context.fillText('每日练习 离大厂只有一步之遥', 55, 180);

      // 4 - 赶快加入一起刷题学习吧
      if (index === 0 || index === 2) context.setFillStyle('#FDC223');
      if (index === 1) context.setFillStyle('#288DEE');

      context.textAlign = 'left';
      context.setFontSize(14);
      context.fillText('赶快加入一起刷题学习吧', 110, 215);
      context.fillText('一', 83, 215);
      context.fillText('一', 275, 215);

      // 5 - 今日答题情况
      context.setFillStyle('#6F6A5B');
      context.setFontSize(16);
      if (index === 0) context.fillText('今日答题情况', 141, 325);
      if (index === 1) context.fillText('我的面试情况', 141, 325);
      if (index === 2) context.fillText('我的练习情况', 141, 325);

      context.setFontSize(13);
      if (index === 0) {
        context.fillText('面试次数', 42, 392);
        context.fillText('练习次数', 163, 392);
        context.fillText('学习打卡', 284, 392);
      }
      if (index === 1) {
        context.fillText('面试次数', 42, 392);
        context.fillText('正确题数', 163, 392);
        context.fillText('综合得分', 284, 392);
      }
      if (index === 2) {
        context.fillText('练习次数', 42, 392);
        context.fillText('正确题数', 163, 392);
        context.fillText('综合得分', 284, 392);
      }

      context.setFillStyle('#4C483D');
      context.setFontSize(20);
      context.textAlign = 'center';
      if (index === 0) {
        context.fillText(this.todayCount.interviewCount, 68, 370);
        context.fillText(this.todayCount.exerciseCount, 188, 370);
        context.fillText(this.todayCount.daysCount, 308, 370);
      }
      if (index === 1) {
        context.fillText(this.interviewSituation.interviewCount, 68, 370);
        context.fillText("".concat(this.interviewSituation.interviewCorrectCount, "/").concat(this.interviewSituation.interviewQuestionCount), 188, 370);
        context.fillText(this.interviewSituation.interviewCorrectScore, 308, 370);
      }
      if (index === 2) {
        context.fillText(this.exerciseSituation.exerciseCount, 68, 370);
        context.fillText("".concat(this.exerciseSituation.exerciseCorrectCount, "/").concat(this.exerciseSituation.exerciseQuestionCount), 188, 370);
        context.fillText(this.exerciseSituation.exerciseCorrectScore, 308, 370);
      }

      // 6 - 小程序码
      context.drawImage('/static/logo.png', 110, 460, 155, 152); // 推进去图片

      // 7 - 扫描小程序码立即刷题学习
      context.textAlign = 'left';
      context.setFillStyle('#fff');
      context.setFontSize(14);
      context.fillText('扫描小程序码立即刷题学习', 104, 640);

      // 8 - 完成绘制
      context.draw();
    },

    // 下载海报
    downloadImage: function downloadImage() {
      var _this = this;
      // 将 canvas 绘制的海报生成图片
      uni.canvasToTempFilePath(
      {
        x: 0,
        y: 0,
        width: 375,
        height: 667,
        // destWidth: 200,
        // destHeight: 200,
        canvasId: 'myCanvas',
        fileType: 'jpg',
        success: function success(res) {
          // 在H5平台下，tempFilePath 为 base64
          console.log(res.tempFilePath);
          uni.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success: function success() {
              _this.showToast('保存成功');
            } });


          // uni.previewImage({
          //   urls: [res.tempFilePath],
          //   success() {
          //     console.info('预览成功');
          //   }
          // });
        } },

      this);

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 43:
/*!**********************************************************************************************************!*\
  !*** E:/GPer/GPer/pages/itembank/itembank.vue?vue&type=style&index=0&id=2a74cf46&lang=less&scoped=true& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_HX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HX_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_itembank_vue_vue_type_style_index_0_id_2a74cf46_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HX/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!../../../../HX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-1!../../../../HX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--10-oneOf-1-2!../../../../HX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../HX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-1-3!../../../../HX/HBuilderX/plugins/uniapp-cli/node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!../../../../HX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!../../../../HX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./itembank.vue?vue&type=style&index=0&id=2a74cf46&lang=less&scoped=true& */ 44);
/* harmony import */ var _HX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_HX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HX_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_itembank_vue_vue_type_style_index_0_id_2a74cf46_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_HX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HX_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_itembank_vue_vue_type_style_index_0_id_2a74cf46_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_HX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HX_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_itembank_vue_vue_type_style_index_0_id_2a74cf46_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_HX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HX_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_itembank_vue_vue_type_style_index_0_id_2a74cf46_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_HX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HX_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_itembank_vue_vue_type_style_index_0_id_2a74cf46_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 44:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-1!./node_modules/css-loader??ref--10-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/GPer/GPer/pages/itembank/itembank.vue?vue&type=style&index=0&id=2a74cf46&lang=less&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[37,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/itembank/itembank.js.map