(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/itembank/analysis/analysis"],{

/***/ 149:
/*!******************************************************************************!*\
  !*** E:/GPer/GPer/main.js?{"page":"pages%2Fitembank%2Fanalysis%2Fanalysis"} ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _analysis = _interopRequireDefault(__webpack_require__(/*! ./pages/itembank/analysis/analysis.vue */ 150));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_analysis.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 150:
/*!*********************************************************!*\
  !*** E:/GPer/GPer/pages/itembank/analysis/analysis.vue ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _analysis_vue_vue_type_template_id_a25f8b70_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analysis.vue?vue&type=template&id=a25f8b70&scoped=true& */ 151);
/* harmony import */ var _analysis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./analysis.vue?vue&type=script&lang=js& */ 153);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _analysis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _analysis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _analysis_vue_vue_type_style_index_0_id_a25f8b70_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./analysis.vue?vue&type=style&index=0&id=a25f8b70&lang=less&scoped=true& */ 155);
/* harmony import */ var _HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../HX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);

var renderjs





/* normalize component */

var component = Object(_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _analysis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _analysis_vue_vue_type_template_id_a25f8b70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _analysis_vue_vue_type_template_id_a25f8b70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a25f8b70",
  null,
  false,
  _analysis_vue_vue_type_template_id_a25f8b70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

/* hot reload */
if (false) { var api; }
component.options.__file = "GPer/GPer/pages/itembank/analysis/analysis.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 151:
/*!****************************************************************************************************!*\
  !*** E:/GPer/GPer/pages/itembank/analysis/analysis.vue?vue&type=template&id=a25f8b70&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_analysis_vue_vue_type_template_id_a25f8b70_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../HX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./analysis.vue?vue&type=template&id=a25f8b70&scoped=true& */ 152);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_analysis_vue_vue_type_template_id_a25f8b70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_analysis_vue_vue_type_template_id_a25f8b70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_analysis_vue_vue_type_template_id_a25f8b70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_analysis_vue_vue_type_template_id_a25f8b70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 152:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/GPer/GPer/pages/itembank/analysis/analysis.vue?vue&type=template&id=a25f8b70&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  var g0 = _vm.paper[_vm.nowAnswerNum - 1].content.includes("A")
  var g1 = _vm.paper[_vm.nowAnswerNum - 1].daAn.includes("A")
  var g2 = _vm.paper[_vm.nowAnswerNum - 1].daAn.includes("A")
  var m0 = decodeURIComponent(_vm.paper[_vm.nowAnswerNum - 1].optionA)
  var g3 = _vm.paper[_vm.nowAnswerNum - 1].content.includes("A")
  var g4 = _vm.paper[_vm.nowAnswerNum - 1].daAn.includes("A")
  var g5 = _vm.paper[_vm.nowAnswerNum - 1].daAn.includes("A")
  var g6 = _vm.paper[_vm.nowAnswerNum - 1].content.includes("B")
  var g7 = _vm.paper[_vm.nowAnswerNum - 1].daAn.includes("B")
  var g8 = _vm.paper[_vm.nowAnswerNum - 1].daAn.includes("B")
  var m1 = decodeURIComponent(_vm.paper[_vm.nowAnswerNum - 1].optionB)
  var g9 = _vm.paper[_vm.nowAnswerNum - 1].content.includes("B")
  var g10 = _vm.paper[_vm.nowAnswerNum - 1].daAn.includes("B")
  var g11 = _vm.paper[_vm.nowAnswerNum - 1].daAn.includes("B")
  var g12 = _vm.paper[_vm.nowAnswerNum - 1].content.includes("C")
  var g13 = _vm.paper[_vm.nowAnswerNum - 1].daAn.includes("C")
  var g14 = _vm.paper[_vm.nowAnswerNum - 1].daAn.includes("C")
  var m2 = decodeURIComponent(_vm.paper[_vm.nowAnswerNum - 1].optionC)
  var g15 = _vm.paper[_vm.nowAnswerNum - 1].content.includes("C")
  var g16 = _vm.paper[_vm.nowAnswerNum - 1].daAn.includes("C")
  var g17 = _vm.paper[_vm.nowAnswerNum - 1].daAn.includes("C")
  var g18 = _vm.paper[_vm.nowAnswerNum - 1].content.includes("D")
  var g19 = _vm.paper[_vm.nowAnswerNum - 1].daAn.includes("D")
  var g20 = _vm.paper[_vm.nowAnswerNum - 1].daAn.includes("D")
  var m3 = decodeURIComponent(_vm.paper[_vm.nowAnswerNum - 1].optionD)
  var g21 = _vm.paper[_vm.nowAnswerNum - 1].content.includes("D")
  var g22 = _vm.paper[_vm.nowAnswerNum - 1].daAn.includes("D")
  var g23 = _vm.paper[_vm.nowAnswerNum - 1].daAn.includes("D")

  var f0 = _vm._f("ellipsis")(_vm.analysisContent, 65)

  var f1 = _vm._f("ellipsis")(
    "那也就是说 这种写法是根据jdk的建议来写的，还有就是super.clone()方法是na哈哈哈哈哈",
    45
  )

  var f2 = _vm._f("ellipsis")("说得很不错，点赞！", 50)

  if (!_vm._isMounted) {
    _vm.e0 = function($event) {
      _vm.isNew = true
    }

    _vm.e1 = function($event) {
      _vm.isNew = false
    }

    _vm.e2 = function($event) {
      _vm.paper[_vm.nowAnswerNum - 1].isInterView = true
    }

    _vm.e3 = function($event) {
      _vm.paper[_vm.nowAnswerNum - 1].isInterView = false
    }

    _vm.e4 = function($event) {
      _vm.paper[_vm.nowAnswerNum - 1].isCollection = true
    }

    _vm.e5 = function($event) {
      _vm.paper[_vm.nowAnswerNum - 1].isCollection = false
    }
  }

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        g1: g1,
        g2: g2,
        m0: m0,
        g3: g3,
        g4: g4,
        g5: g5,
        g6: g6,
        g7: g7,
        g8: g8,
        m1: m1,
        g9: g9,
        g10: g10,
        g11: g11,
        g12: g12,
        g13: g13,
        g14: g14,
        m2: m2,
        g15: g15,
        g16: g16,
        g17: g17,
        g18: g18,
        g19: g19,
        g20: g20,
        m3: m3,
        g21: g21,
        g22: g22,
        g23: g23,
        f0: f0,
        f1: f1,
        f2: f2
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 153:
/*!**********************************************************************************!*\
  !*** E:/GPer/GPer/pages/itembank/analysis/analysis.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_analysis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../HX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./analysis.vue?vue&type=script&lang=js& */ 154);
/* harmony import */ var _HX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_analysis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_analysis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_analysis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_analysis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_analysis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 154:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/GPer/GPer/pages/itembank/analysis/analysis.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 19));







































































































































































































var _api = __webpack_require__(/*! @api */ 31);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var
getAnswerList = _api.itembank.getAnswerList,getAnswerById = _api.itembank.getAnswerById;var _default =
{
  data: function data() {
    return {
      isAnCard: false, // 答题卡显示状态
      isMore: false, // 更多显示状态
      nowAnswerNum: 1, // 当前题号,
      isNew: false, // 默认/最新解析
      isInfo: true, // 有无解析
      // 所有题
      paper: [],
      // 滑动距离
      startData: { clientX: 0 },
      analysisContent: 'HGHHH' };

  },
  onLoad: function () {var _onLoad = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(e) {var _this = this;var everyList;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
              // 获取当前试卷所有题的id
              uni.showLoading({ title: '正在加载解析...', mask: true });_context2.next = 3;return (
                getAnswerList({ signboard: e.signboard }));case 3:everyList = _context2.sent;
              console.info(everyList);

              this.paper = [];
              everyList.forEach( /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(item, index) {var data2;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
                            getAnswerById({ id: item.id }));case 2:data2 = _context.sent;
                          data2.isSign = false;
                          data2.isCollection = false;
                          data2.isInterView = false;
                          data2.biaoTi = decodeURIComponent(data2.biaoTi);
                          data2.neiRong = decodeURIComponent(data2.neiRong);
                          data2.content = decodeURIComponent(data2.content);
                          _this.paper.push(data2);
                          if (index == everyList.length - 1) uni.hideLoading();case 11:case "end":return _context.stop();}}}, _callee, this);}));return function (_x2, _x3) {return _ref.apply(this, arguments);};}());

              console.info(this.paper);
              // 修改当前页面标题 NavigationBarTitle
              uni.setNavigationBarTitle({
                title: "".concat(this.nowAnswerNum, "/").concat(everyList.length) });case 9:case "end":return _context2.stop();}}}, _callee2, this);}));function onLoad(_x) {return _onLoad.apply(this, arguments);}return onLoad;}(),


  methods: {
    // 滑动切换考题
    start: function start(e) {
      this.startData.clientX = e.changedTouches[0].clientX;
    },
    end: function end(e) {
      var subX = e.changedTouches[0].clientX - this.startData.clientX;
      if (subX > 100 && this.nowAnswerNum > 1) {
        // 右滑
        this.nowAnswerNum--;
        uni.setNavigationBarTitle({
          title: "".concat(this.nowAnswerNum, "/").concat(this.paper.length) });

      } else if (subX < -100 && this.nowAnswerNum < this.paper.length) {
        // 左滑
        this.nowAnswerNum++;
        uni.setNavigationBarTitle({
          title: "".concat(this.nowAnswerNum, "/").concat(this.paper.length) });

      }
    },

    // 打开答题卡
    openAnCard: function openAnCard() {
      this.isAnCard = !this.isAnCard;
      this.isMore = false;
    },

    // 打开更多
    openMore: function openMore() {
      this.isMore = !this.isMore;
      this.isAnCard = false;
    },

    // 答题卡：点击切换题目
    tabExamination: function tabExamination(index) {
      this.nowAnswerNum = index + 1;
    },

    // 标记/取消标记
    tabSign: function tabSign() {
      this.paper[this.nowAnswerNum - 1].isSign = !this.paper[this.nowAnswerNum - 1].isSign;
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 155:
/*!*******************************************************************************************************************!*\
  !*** E:/GPer/GPer/pages/itembank/analysis/analysis.vue?vue&type=style&index=0&id=a25f8b70&lang=less&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_HX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HX_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_analysis_vue_vue_type_style_index_0_id_a25f8b70_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HX/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!../../../../../HX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-1!../../../../../HX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--10-oneOf-1-2!../../../../../HX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-1-3!../../../../../HX/HBuilderX/plugins/uniapp-cli/node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!../../../../../HX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!../../../../../HX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./analysis.vue?vue&type=style&index=0&id=a25f8b70&lang=less&scoped=true& */ 156);
/* harmony import */ var _HX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_HX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HX_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_analysis_vue_vue_type_style_index_0_id_a25f8b70_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_HX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HX_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_analysis_vue_vue_type_style_index_0_id_a25f8b70_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_HX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HX_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_analysis_vue_vue_type_style_index_0_id_a25f8b70_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_HX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HX_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_analysis_vue_vue_type_style_index_0_id_a25f8b70_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_HX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HX_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_analysis_vue_vue_type_style_index_0_id_a25f8b70_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 156:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-1!./node_modules/css-loader??ref--10-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/GPer/GPer/pages/itembank/analysis/analysis.vue?vue&type=style&index=0&id=a25f8b70&lang=less&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[149,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/itembank/analysis/analysis.js.map