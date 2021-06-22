self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/ProductCard/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/ProductCard/index.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductCard": function() { return /* binding */ ProductCard; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _productCard_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productCard.module.scss */ "./src/components/ProductCard/productCard.module.scss");
/* harmony import */ var _productCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_productCard_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\code_projects\\base_e-commerce\\src\\components\\ProductCard\\index.tsx";

 // vai precisar receber parâmetros

function ProductCard() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
    className: (_productCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default().productCard),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_productCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default().name),
      children: "Product Name"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      className: (_productCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default().cardImg),
      src: "/images/product-placeholder.png",
      alt: "product image"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: (_productCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default().price),
        children: "$1191.90"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: (_productCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default().descountPrice),
        children: "$990.90"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: "",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiMoreHorizontal, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
_c = ProductCard;

var _c;

$RefreshReg$(_c, "ProductCard");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./src/components/ProductCard/productCard.module.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./src/components/ProductCard/productCard.module.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".productCard_productCard__35wH6 {\n  position: relative;\n  -webkit-box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2), 3px 3px 6px 0 rgba(0, 0, 0, 0.19);\n          box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2), 3px 3px 6px 0 rgba(0, 0, 0, 0.19);\n  width: 14rem;\n  height: 16rem;\n}\n.productCard_productCard__35wH6 .productCard_name__lbRiN {\n  position: absolute;\n  top: 0.4rem;\n  left: 0.8rem;\n  font-size: 1.2rem;\n  font-weight: 700;\n}\n.productCard_productCard__35wH6 .productCard_price__2ILsn {\n  position: absolute;\n  left: 0.8rem;\n  bottom: 0.8rem;\n  text-decoration: line-through;\n  font-size: 0.8rem;\n}\n.productCard_productCard__35wH6 .productCard_descountPrice__3zi8e {\n  color: var(--red);\n  font-size: 1.2rem;\n  font-weight: 700;\n  position: absolute;\n  left: 4.4rem;\n  bottom: 0.8rem;\n}\n.productCard_productCard__35wH6 .productCard_cardImg__2gRl4 {\n  width: 14rem;\n  height: 16rem;\n  align-self: center;\n}\n.productCard_productCard__35wH6 svg {\n  position: absolute;\n  right: 0.8rem;\n  bottom: 0.8rem;\n  width: 1.4rem;\n  height: 1.4rem;\n  color: var(--gray);\n  -webkit-transition: color 0.2s;\n  transition: color 0.2s;\n}\n.productCard_productCard__35wH6 svg:hover {\n  color: var(--almost-black-gray);\n}", "",{"version":3,"sources":["webpack://productCard.module.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;EACA,qFAAA;UAAA,6EAAA;EACA,YAAA;EACA,aAAA;AACF;AACE;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EAEA,iBAAA;EACA,gBAAA;AAAJ;AAGE;EACE,kBAAA;EACA,YAAA;EACA,cAAA;EACA,6BAAA;EACA,iBAAA;AADJ;AAIE;EACE,iBAAA;EACA,iBAAA;EACA,gBAAA;EACA,kBAAA;EACA,YAAA;EACA,cAAA;AAFJ;AAKE;EACE,YAAA;EACA,aAAA;EACA,kBAAA;AAHJ;AAME;EACE,kBAAA;EACA,aAAA;EACA,cAAA;EACA,aAAA;EACA,cAAA;EAEA,kBAAA;EAEA,8BAAA;EAAA,sBAAA;AANJ;AAOI;EACE,+BAAA;AALN","sourcesContent":[".productCard {\r\n  position: relative;\r\n  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2), 3px 3px 6px 0 rgba(0, 0, 0, 0.19);\r\n  width: 14rem;\r\n  height: 16rem;\r\n\r\n  .name {\r\n    position: absolute;\r\n    top: 0.4rem;\r\n    left: 0.8rem;\r\n\r\n    font-size: 1.2rem;\r\n    font-weight: 700;\r\n  }\r\n\r\n  .price {\r\n    position: absolute;\r\n    left: 0.8rem;\r\n    bottom: 0.8rem;\r\n    text-decoration: line-through;\r\n    font-size: 0.8rem;\r\n  }\r\n\r\n  .descountPrice {\r\n    color: var(--red);\r\n    font-size: 1.2rem;\r\n    font-weight: 700;\r\n    position: absolute;\r\n    left: 4.4rem;\r\n    bottom: 0.8rem;\r\n  }\r\n\r\n  .cardImg {\r\n    width: 14rem;\r\n    height: 16rem;\r\n    align-self: center;\r\n  }\r\n\r\n  svg {\r\n    position: absolute;\r\n    right: 0.8rem;\r\n    bottom: 0.8rem;\r\n    width: 1.4rem;\r\n    height: 1.4rem;\r\n\r\n    color: var(--gray);\r\n\r\n    transition: color 0.2s;\r\n    &:hover {\r\n      color: var(--almost-black-gray)\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"productCard": "productCard_productCard__35wH6",
	"name": "productCard_name__lbRiN",
	"price": "productCard_price__2ILsn",
	"descountPrice": "productCard_descountPrice__3zi8e",
	"cardImg": "productCard_cardImg__2gRl4"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdENhcmQvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0Q2FyZC9wcm9kdWN0Q2FyZC5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6WyJQcm9kdWN0Q2FyZCIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7QUFDTyxTQUFTQSxXQUFULEdBQXVCO0FBQzVCLHNCQUNFO0FBQUksYUFBUyxFQUFFQyw2RUFBZjtBQUFBLDRCQUNFO0FBQUcsZUFBUyxFQUFFQSxzRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBSyxlQUFTLEVBQUVBLHlFQUFoQjtBQUFnQyxTQUFHLEVBQUMsaUNBQXBDO0FBQXNFLFNBQUcsRUFBQztBQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRTtBQUFBLDhCQUNFO0FBQUcsaUJBQVMsRUFBRUEsdUVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUcsaUJBQVMsRUFBRUEsK0VBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixlQU9FO0FBQUcsVUFBSSxFQUFDLEVBQVI7QUFBQSw2QkFDRSw4REFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBYUQ7S0FkZUQsVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0poQjtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHVIQUE0RDtBQUN0RztBQUNBO0FBQ0EsMkVBQTJFLHVCQUF1QiwwRkFBMEYsMEZBQTBGLGlCQUFpQixrQkFBa0IsR0FBRyw0REFBNEQsdUJBQXVCLGdCQUFnQixpQkFBaUIsc0JBQXNCLHFCQUFxQixHQUFHLDZEQUE2RCx1QkFBdUIsaUJBQWlCLG1CQUFtQixrQ0FBa0Msc0JBQXNCLEdBQUcscUVBQXFFLHNCQUFzQixzQkFBc0IscUJBQXFCLHVCQUF1QixpQkFBaUIsbUJBQW1CLEdBQUcsK0RBQStELGlCQUFpQixrQkFBa0IsdUJBQXVCLEdBQUcsdUNBQXVDLHVCQUF1QixrQkFBa0IsbUJBQW1CLGtCQUFrQixtQkFBbUIsdUJBQXVCLG1DQUFtQywyQkFBMkIsR0FBRyw2Q0FBNkMsb0NBQW9DLEdBQUcsT0FBTyx3RkFBd0YsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsdUNBQXVDLHlCQUF5QixvRkFBb0YsbUJBQW1CLG9CQUFvQixpQkFBaUIsMkJBQTJCLG9CQUFvQixxQkFBcUIsOEJBQThCLHlCQUF5QixPQUFPLGtCQUFrQiwyQkFBMkIscUJBQXFCLHVCQUF1QixzQ0FBc0MsMEJBQTBCLE9BQU8sMEJBQTBCLDBCQUEwQiwwQkFBMEIseUJBQXlCLDJCQUEyQixxQkFBcUIsdUJBQXVCLE9BQU8sb0JBQW9CLHFCQUFxQixzQkFBc0IsMkJBQTJCLE9BQU8sZUFBZSwyQkFBMkIsc0JBQXNCLHVCQUF1QixzQkFBc0IsdUJBQXVCLCtCQUErQixtQ0FBbUMsaUJBQWlCLGtEQUFrRCxPQUFPLEtBQUssdUJBQXVCO0FBQzd5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmUyNzFlMGIyZTQ5ODcyMjE1ZjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9wcm9kdWN0Q2FyZC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IEZpTW9yZUhvcml6b250YWwgfSBmcm9tICdyZWFjdC1pY29ucy9maSc7XHJcblxyXG4vLyB2YWkgcHJlY2lzYXIgcmVjZWJlciBwYXLDom1ldHJvc1xyXG5leHBvcnQgZnVuY3Rpb24gUHJvZHVjdENhcmQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0Q2FyZH0+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9PlByb2R1Y3QgTmFtZTwvcD5cclxuICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5jYXJkSW1nfSBzcmM9XCIvaW1hZ2VzL3Byb2R1Y3QtcGxhY2Vob2xkZXIucG5nXCIgYWx0PVwicHJvZHVjdCBpbWFnZVwiIC8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucHJpY2V9PiQxMTkxLjkwPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NvdW50UHJpY2V9PiQ5OTAuOTA8L3A+ICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxhIGhyZWY9XCJcIj5cclxuICAgICAgICA8RmlNb3JlSG9yaXpvbnRhbCAvPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L2xpPlxyXG4gIClcclxufSIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5wcm9kdWN0Q2FyZF9wcm9kdWN0Q2FyZF9fMzV3SDYge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDRweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDNweCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAzcHggM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxuICB3aWR0aDogMTRyZW07XFxuICBoZWlnaHQ6IDE2cmVtO1xcbn1cXG4ucHJvZHVjdENhcmRfcHJvZHVjdENhcmRfXzM1d0g2IC5wcm9kdWN0Q2FyZF9uYW1lX19sYlJpTiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDAuNHJlbTtcXG4gIGxlZnQ6IDAuOHJlbTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLnByb2R1Y3RDYXJkX3Byb2R1Y3RDYXJkX18zNXdINiAucHJvZHVjdENhcmRfcHJpY2VfXzJJTHNuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDAuOHJlbTtcXG4gIGJvdHRvbTogMC44cmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuLnByb2R1Y3RDYXJkX3Byb2R1Y3RDYXJkX18zNXdINiAucHJvZHVjdENhcmRfZGVzY291bnRQcmljZV9fM3ppOGUge1xcbiAgY29sb3I6IHZhcigtLXJlZCk7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA0LjRyZW07XFxuICBib3R0b206IDAuOHJlbTtcXG59XFxuLnByb2R1Y3RDYXJkX3Byb2R1Y3RDYXJkX18zNXdINiAucHJvZHVjdENhcmRfY2FyZEltZ19fMmdSbDQge1xcbiAgd2lkdGg6IDE0cmVtO1xcbiAgaGVpZ2h0OiAxNnJlbTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuLnByb2R1Y3RDYXJkX3Byb2R1Y3RDYXJkX18zNXdINiBzdmcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDAuOHJlbTtcXG4gIGJvdHRvbTogMC44cmVtO1xcbiAgd2lkdGg6IDEuNHJlbTtcXG4gIGhlaWdodDogMS40cmVtO1xcbiAgY29sb3I6IHZhcigtLWdyYXkpO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycztcXG59XFxuLnByb2R1Y3RDYXJkX3Byb2R1Y3RDYXJkX18zNXdINiBzdmc6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWFsbW9zdC1ibGFjay1ncmF5KTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3Byb2R1Y3RDYXJkLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxxRkFBQTtVQUFBLDZFQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUdFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7QUFESjtBQUlFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUZKO0FBS0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBSEo7QUFNRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUVBLGtCQUFBO0VBRUEsOEJBQUE7RUFBQSxzQkFBQTtBQU5KO0FBT0k7RUFDRSwrQkFBQTtBQUxOXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5wcm9kdWN0Q2FyZCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3gtc2hhZG93OiAwIDRweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDNweCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcXHJcXG4gIHdpZHRoOiAxNHJlbTtcXHJcXG4gIGhlaWdodDogMTZyZW07XFxyXFxuXFxyXFxuICAubmFtZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwLjRyZW07XFxyXFxuICAgIGxlZnQ6IDAuOHJlbTtcXHJcXG5cXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucHJpY2Uge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDAuOHJlbTtcXHJcXG4gICAgYm90dG9tOiAwLjhyZW07XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5kZXNjb3VudFByaWNlIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXJlZCk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDQuNHJlbTtcXHJcXG4gICAgYm90dG9tOiAwLjhyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2FyZEltZyB7XFxyXFxuICAgIHdpZHRoOiAxNHJlbTtcXHJcXG4gICAgaGVpZ2h0OiAxNnJlbTtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgc3ZnIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogMC44cmVtO1xcclxcbiAgICBib3R0b206IDAuOHJlbTtcXHJcXG4gICAgd2lkdGg6IDEuNHJlbTtcXHJcXG4gICAgaGVpZ2h0OiAxLjRyZW07XFxyXFxuXFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcXHJcXG5cXHJcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycztcXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgY29sb3I6IHZhcigtLWFsbW9zdC1ibGFjay1ncmF5KVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInByb2R1Y3RDYXJkXCI6IFwicHJvZHVjdENhcmRfcHJvZHVjdENhcmRfXzM1d0g2XCIsXG5cdFwibmFtZVwiOiBcInByb2R1Y3RDYXJkX25hbWVfX2xiUmlOXCIsXG5cdFwicHJpY2VcIjogXCJwcm9kdWN0Q2FyZF9wcmljZV9fMklMc25cIixcblx0XCJkZXNjb3VudFByaWNlXCI6IFwicHJvZHVjdENhcmRfZGVzY291bnRQcmljZV9fM3ppOGVcIixcblx0XCJjYXJkSW1nXCI6IFwicHJvZHVjdENhcmRfY2FyZEltZ19fMmdSbDRcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9