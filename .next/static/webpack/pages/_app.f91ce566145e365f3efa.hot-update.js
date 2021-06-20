self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Buttons/BackToTop/index.tsx":
/*!****************************************************!*\
  !*** ./src/components/Buttons/BackToTop/index.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackToTopButton": function() { return /* binding */ BackToTopButton; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/bi */ "./node_modules/react-icons/bi/index.esm.js");
/* harmony import */ var _backtotop_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backtotop.module.scss */ "./src/components/Buttons/BackToTop/backtotop.module.scss");
/* harmony import */ var _backtotop_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_backtotop_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\code_projects\\base_e-commerce\\src\\components\\Buttons\\BackToTop\\index.tsx",
    _s = $RefreshSig$();





function BackToTopButton() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      isVisible = _useState[0],
      setIsVisible = _useState[1];

  function toggleVisility() {
    var scrolledPage = document.documentElement.scrollTop;

    if (scrolledPage > 280) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    window.addEventListener('scroll', toggleVisility);
  }, []);
  return isVisible ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    className: (_backtotop_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button),
    onClick: function onClick() {
      return scrollToTop();
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_3__.BiArrowToTop, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 7
  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);
}

_s(BackToTopButton, "J3yJOyGdBT4L7hs1p1XQYVGMdrY=");

_c = BackToTopButton;

var _c;

$RefreshReg$(_c, "BackToTopButton");

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9ucy9CYWNrVG9Ub3AvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkJhY2tUb1RvcEJ1dHRvbiIsInVzZVN0YXRlIiwiaXNWaXNpYmxlIiwic2V0SXNWaXNpYmxlIiwidG9nZ2xlVmlzaWxpdHkiLCJzY3JvbGxlZFBhZ2UiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsInNjcm9sbFRvVG9wIiwid2luZG93Iiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sU0FBU0EsZUFBVCxHQUEyQjtBQUFBOztBQUFBLGtCQUNFQywrQ0FBUSxDQUFDLEtBQUQsQ0FEVjtBQUFBLE1BQ3pCQyxTQUR5QjtBQUFBLE1BQ2RDLFlBRGM7O0FBR2hDLFdBQVNDLGNBQVQsR0FBMEI7QUFDeEIsUUFBTUMsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFNBQTlDOztBQUVBLFFBQUdILFlBQVksR0FBRyxHQUFsQixFQUF1QjtBQUNyQkYsa0JBQVksQ0FBQyxJQUFELENBQVo7QUFDRCxLQUZELE1BRU07QUFDSkEsa0JBQVksQ0FBQyxLQUFELENBQVo7QUFDRDtBQUNGOztBQUVELFdBQVNNLFdBQVQsR0FBdUI7QUFDckJDLFVBQU0sQ0FBQ0MsUUFBUCxDQUFnQjtBQUNkQyxTQUFHLEVBQUUsQ0FEUztBQUVkQyxjQUFRLEVBQUU7QUFGSSxLQUFoQjtBQUlEOztBQUVEQyxrREFBUyxDQUFDLFlBQUk7QUFDWkosVUFBTSxDQUFDSyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ1gsY0FBbEM7QUFDRCxHQUZRLEVBRVAsRUFGTyxDQUFUO0FBS0EsU0FDRUYsU0FBUyxnQkFDUDtBQUFRLGFBQVMsRUFBRWMsc0VBQW5CO0FBQWtDLFdBQU8sRUFBRTtBQUFBLGFBQU1QLFdBQVcsRUFBakI7QUFBQSxLQUEzQztBQUFBLDJCQUNFLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRE8sZ0JBS1AsNklBTko7QUFTRDs7R0FsQ2VULGU7O0tBQUFBLGUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5mOTFjZTU2NjE0NWUzNjVmM2VmYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQmlBcnJvd1RvVG9wIH0gZnJvbSAncmVhY3QtaWNvbnMvYmknO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYmFja3RvdG9wLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQmFja1RvVG9wQnV0dG9uKCkge1xyXG4gIGNvbnN0IFtpc1Zpc2libGUsIHNldElzVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgZnVuY3Rpb24gdG9nZ2xlVmlzaWxpdHkoKSB7XHJcbiAgICBjb25zdCBzY3JvbGxlZFBhZ2UgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXHJcbiAgICBcclxuICAgIGlmKHNjcm9sbGVkUGFnZSA+IDI4MCkge1xyXG4gICAgICBzZXRJc1Zpc2libGUodHJ1ZSlcclxuICAgIH0gZWxzZXtcclxuICAgICAgc2V0SXNWaXNpYmxlKGZhbHNlKVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBzY3JvbGxUb1RvcCgpIHtcclxuICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdG9nZ2xlVmlzaWxpdHkpXHJcbiAgfSxbXSlcclxuICBcclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgaXNWaXNpYmxlID8gKFxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17KCkgPT4gc2Nyb2xsVG9Ub3AoKX0+XHJcbiAgICAgICAgPEJpQXJyb3dUb1RvcCAvPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICkgOiAoXHJcbiAgICAgIDw+PC8+XHJcbiAgICApXHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=