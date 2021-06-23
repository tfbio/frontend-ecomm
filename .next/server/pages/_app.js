(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/Buttons/BackToTop/index.tsx":
/*!****************************************************!*\
  !*** ./src/components/Buttons/BackToTop/index.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackToTopButton": function() { return /* binding */ BackToTopButton; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/bi */ "./node_modules/react-icons/bi/index.esm.js");
/* harmony import */ var _backtotop_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backtotop.module.scss */ "./src/components/Buttons/BackToTop/backtotop.module.scss");
/* harmony import */ var _backtotop_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_backtotop_module_scss__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\code_projects\\base_e-commerce\\src\\components\\Buttons\\BackToTop\\index.tsx";




function BackToTopButton() {
  const {
    0: isVisible,
    1: setIsVisible
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  function toggleVisility() {
    const scrolledPage = document.documentElement.scrollTop;

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

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    window.addEventListener('scroll', toggleVisility);
  }, []);
  return isVisible ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    className: (_backtotop_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button),
    onClick: () => scrollToTop(),
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

/***/ }),

/***/ "./src/components/Footer/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Footer/index.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Footer": function() { return /* binding */ Footer; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _footer_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.module.scss */ "./src/components/Footer/footer.module.scss");
/* harmony import */ var _footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footer_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");

var _jsxFileName = "C:\\code_projects\\base_e-commerce\\src\\components\\Footer\\index.tsx";


function Footer() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
    className: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default().footerContainer),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      className: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default().generalInfo),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        className: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default().logo),
        src: "/images/logo.png",
        alt: "logo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["500, 4th Local st. Northen Chicago", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 45
        }, this), "IN 47893, US", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 23
        }, this), "Phone: 0800-1234-000000", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 34
        }, this), "Email: someemail@gmail.com"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "Copyright 2021 \xA9 E-Commerce. All rights reserved."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      className: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default().categories),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "Popular Categories"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "",
        children: "Category 1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "",
        children: "Category 2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "",
        children: "Category 3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "",
        children: "Category 4"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "",
        children: "Category 5"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "",
        children: "Category 6"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      className: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default().categories),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "About Us"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "",
        children: "Contact Us"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "",
        children: "Delivery Information"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "",
        children: "Privacy Policy"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "",
        children: "Terms & Conditions"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "",
        children: "FAQs"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "",
        children: "Product Support"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      className: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default().followUs),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "Follow Us"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiFillFacebook, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }, this), "Facebook"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineInstagram, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }, this), "Instagram"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiFillTwitterSquare, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }, this), "Twitter"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Header/Icons/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/Header/Icons/index.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartIcon": function() { return /* binding */ CartIcon; },
/* harmony export */   "FavoritesIcon": function() { return /* binding */ FavoritesIcon; },
/* harmony export */   "LoginIcon": function() { return /* binding */ LoginIcon; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon.module.scss */ "./src/components/Header/Icons/icon.module.scss");
/* harmony import */ var _icon_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_icon_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\code_projects\\base_e-commerce\\src\\components\\Header\\Icons\\index.tsx";



function CartIcon() {
  const {
    0: cartItems,
    1: setCartItems
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  return cartItems > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
    className: (_icon_module_scss__WEBPACK_IMPORTED_MODULE_2___default().iconBody),
    href: "",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: cartItems
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineShoppingCart, {
      className: (_icon_module_scss__WEBPACK_IMPORTED_MODULE_2___default().icon)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 7
  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
    className: (_icon_module_scss__WEBPACK_IMPORTED_MODULE_2___default().iconBody),
    href: "",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineShoppingCart, {
      className: (_icon_module_scss__WEBPACK_IMPORTED_MODULE_2___default().icon)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 7
  }, this);
}
function FavoritesIcon() {
  const {
    0: favoriteItems,
    1: setFavoriteItems
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
    className: (_icon_module_scss__WEBPACK_IMPORTED_MODULE_2___default().iconBody),
    href: "",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineHeart, {
      className: (_icon_module_scss__WEBPACK_IMPORTED_MODULE_2___default().icon)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, this);
}
function LoginIcon() {
  const {
    0: userLogged,
    1: setUserLogged
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  return userLogged === true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
    className: (_icon_module_scss__WEBPACK_IMPORTED_MODULE_2___default().iconBody),
    href: "",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineUserAdd, {
      className: (_icon_module_scss__WEBPACK_IMPORTED_MODULE_2___default().icon)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }, this), "Login"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 7
  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
    className: (_icon_module_scss__WEBPACK_IMPORTED_MODULE_2___default().cartIcon),
    href: "",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineUserAdd, {
      className: (_icon_module_scss__WEBPACK_IMPORTED_MODULE_2___default().icon)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 7
  }, this);
}

/***/ }),

/***/ "./src/components/Header/SearchBar/index.tsx":
/*!***************************************************!*\
  !*** ./src/components/Header/SearchBar/index.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchBar": function() { return /* binding */ SearchBar; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _search_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.module.scss */ "./src/components/Header/SearchBar/search.module.scss");
/* harmony import */ var _search_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_search_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/bi */ "./node_modules/react-icons/bi/index.esm.js");

var _jsxFileName = "C:\\code_projects\\base_e-commerce\\src\\components\\Header\\SearchBar\\index.tsx";


function SearchBar() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_search_module_scss__WEBPACK_IMPORTED_MODULE_1___default().searchContainer),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_2__.BiSearchAlt, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      type: "text",
      placeholder: "Search here"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.module.scss */ "./src/components/Header/header.module.scss");
/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_header_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchBar */ "./src/components/Header/SearchBar/index.tsx");
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icons */ "./src/components/Header/Icons/index.tsx");

var _jsxFileName = "C:\\code_projects\\base_e-commerce\\src\\components\\Header\\index.tsx";



function Header() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
    className: (_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default().headerContainer),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default().headerContent),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        className: (_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default().logo),
        src: "/images/logo.png",
        alt: "logo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default().headerManager),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchBar__WEBPACK_IMPORTED_MODULE_1__.SearchBar, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.CartIcon, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.FavoritesIcon, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.LoginIcon, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/SubHeader/index.tsx":
/*!********************************************!*\
  !*** ./src/components/SubHeader/index.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubHeader": function() { return /* binding */ SubHeader; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _subheader_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subheader.module.scss */ "./src/components/SubHeader/subheader.module.scss");
/* harmony import */ var _subheader_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_subheader_module_scss__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\code_projects\\base_e-commerce\\src\\components\\SubHeader\\index.tsx";

function SubHeader() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_subheader_module_scss__WEBPACK_IMPORTED_MODULE_1___default().subheaderContainer),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Category 1"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Category 2"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Category 3"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Category 4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Category 5"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Category 6"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ "./src/components/Header/index.tsx");
/* harmony import */ var _components_SubHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SubHeader */ "./src/components/SubHeader/index.tsx");
/* harmony import */ var _components_Buttons_BackToTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Buttons/BackToTop */ "./src/components/Buttons/BackToTop/index.tsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ "./src/components/Footer/index.tsx");
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/global.scss */ "./src/styles/global.scss");
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\code_projects\\base_e-commerce\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__.Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SubHeader__WEBPACK_IMPORTED_MODULE_2__.SubHeader, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Buttons_BackToTop__WEBPACK_IMPORTED_MODULE_3__.BackToTopButton, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_4__.Footer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./src/components/Buttons/BackToTop/backtotop.module.scss":
/*!****************************************************************!*\
  !*** ./src/components/Buttons/BackToTop/backtotop.module.scss ***!
  \****************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"button": "backtotop_button__24e9k"
};


/***/ }),

/***/ "./src/components/Footer/footer.module.scss":
/*!**************************************************!*\
  !*** ./src/components/Footer/footer.module.scss ***!
  \**************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"footerContainer": "footer_footerContainer__2s7YS",
	"logo": "footer_logo__Uim74",
	"generalInfo": "footer_generalInfo__Zow-e",
	"categories": "footer_categories__3y-Hw",
	"followUs": "footer_followUs__28ZHq"
};


/***/ }),

/***/ "./src/components/Header/Icons/icon.module.scss":
/*!******************************************************!*\
  !*** ./src/components/Header/Icons/icon.module.scss ***!
  \******************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"iconBody": "icon_iconBody__11Gtp",
	"icon": "icon_icon__TJR_8"
};


/***/ }),

/***/ "./src/components/Header/SearchBar/search.module.scss":
/*!************************************************************!*\
  !*** ./src/components/Header/SearchBar/search.module.scss ***!
  \************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"searchContainer": "search_searchContainer__ja6VC"
};


/***/ }),

/***/ "./src/components/Header/header.module.scss":
/*!**************************************************!*\
  !*** ./src/components/Header/header.module.scss ***!
  \**************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"headerContainer": "header_headerContainer__bMyzv",
	"headerContent": "header_headerContent__1Kcj7",
	"logo": "header_logo__2Bivf",
	"headerManager": "header_headerManager__11If-"
};


/***/ }),

/***/ "./src/components/SubHeader/subheader.module.scss":
/*!********************************************************!*\
  !*** ./src/components/SubHeader/subheader.module.scss ***!
  \********************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"subheaderContainer": "subheader_subheaderContainer__3tH0U"
};


/***/ }),

/***/ "./src/styles/global.scss":
/*!********************************!*\
  !*** ./src/styles/global.scss ***!
  \********************************/
/***/ (function() {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_react-icons_ai_index_esm_js","vendors-node_modules_react-icons_bi_index_esm_js"], function() { return __webpack_exec__("./src/pages/_app.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXNlLWVjb21tZXJjZS8uL3NyYy9jb21wb25lbnRzL0J1dHRvbnMvQmFja1RvVG9wL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9iYXNlLWVjb21tZXJjZS8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vYmFzZS1lY29tbWVyY2UvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSWNvbnMvaW5kZXgudHN4Iiwid2VicGFjazovL2Jhc2UtZWNvbW1lcmNlLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL1NlYXJjaEJhci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vYmFzZS1lY29tbWVyY2UvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4Iiwid2VicGFjazovL2Jhc2UtZWNvbW1lcmNlLy4vc3JjL2NvbXBvbmVudHMvU3ViSGVhZGVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9iYXNlLWVjb21tZXJjZS8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly9iYXNlLWVjb21tZXJjZS8uL3NyYy9jb21wb25lbnRzL0J1dHRvbnMvQmFja1RvVG9wL2JhY2t0b3RvcC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9iYXNlLWVjb21tZXJjZS8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9mb290ZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYmFzZS1lY29tbWVyY2UvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSWNvbnMvaWNvbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9iYXNlLWVjb21tZXJjZS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9TZWFyY2hCYXIvc2VhcmNoLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Jhc2UtZWNvbW1lcmNlLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2hlYWRlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9iYXNlLWVjb21tZXJjZS8uL3NyYy9jb21wb25lbnRzL1N1YkhlYWRlci9zdWJoZWFkZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYmFzZS1lY29tbWVyY2UvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Jhc2UtZWNvbW1lcmNlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQmFja1RvVG9wQnV0dG9uIiwiaXNWaXNpYmxlIiwic2V0SXNWaXNpYmxlIiwidXNlU3RhdGUiLCJ0b2dnbGVWaXNpbGl0eSIsInNjcm9sbGVkUGFnZSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwic2Nyb2xsVG9Ub3AiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0eWxlcyIsIkZvb3RlciIsIkNhcnRJY29uIiwiY2FydEl0ZW1zIiwic2V0Q2FydEl0ZW1zIiwiaWNvbiIsIkZhdm9yaXRlc0ljb24iLCJmYXZvcml0ZUl0ZW1zIiwic2V0RmF2b3JpdGVJdGVtcyIsIkxvZ2luSWNvbiIsInVzZXJMb2dnZWQiLCJzZXRVc2VyTG9nZ2VkIiwiU2VhcmNoQmFyIiwiSGVhZGVyIiwiU3ViSGVhZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sU0FBU0EsZUFBVCxHQUEyQjtBQUNoQyxRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJDLCtDQUFRLENBQUMsS0FBRCxDQUExQzs7QUFFQSxXQUFTQyxjQUFULEdBQTBCO0FBQ3hCLFVBQU1DLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxlQUFULENBQXlCQyxTQUE5Qzs7QUFFQSxRQUFHSCxZQUFZLEdBQUcsR0FBbEIsRUFBdUI7QUFDckJILGtCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0QsS0FGRCxNQUVNO0FBQ0pBLGtCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0Q7QUFDRjs7QUFFRCxXQUFTTyxXQUFULEdBQXVCO0FBQ3JCQyxVQUFNLENBQUNDLFFBQVAsQ0FBZ0I7QUFDZEMsU0FBRyxFQUFFLENBRFM7QUFFZEMsY0FBUSxFQUFFO0FBRkksS0FBaEI7QUFJRDs7QUFFREMsa0RBQVMsQ0FBQyxNQUFJO0FBQ1pKLFVBQU0sQ0FBQ0ssZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NYLGNBQWxDO0FBQ0QsR0FGUSxFQUVQLEVBRk8sQ0FBVDtBQUtBLFNBQ0VILFNBQVMsZ0JBQ1A7QUFBUSxhQUFTLEVBQUVlLHNFQUFuQjtBQUFrQyxXQUFPLEVBQUUsTUFBTVAsV0FBVyxFQUE1RDtBQUFBLDJCQUNFLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRE8sZ0JBS1AsNklBTko7QUFTRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNEO0FBQ0E7QUFFTyxTQUFTUSxNQUFULEdBQWtCO0FBQ3ZCLHNCQUNFO0FBQVEsYUFBUyxFQUFFRCw0RUFBbkI7QUFBQSw0QkFDRTtBQUFTLGVBQVMsRUFBRUEsd0VBQXBCO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFFQSxpRUFBaEI7QUFBNkIsV0FBRyxFQUFDLGtCQUFqQztBQUFvRCxXQUFHLEVBQUM7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSxzRUFDb0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEcEMsK0JBRWM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGZCwwQ0FHeUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBV0U7QUFBUyxlQUFTLEVBQUVBLHVFQUFwQjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFHLFlBQUksRUFBQyxFQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFHLFlBQUksRUFBQyxFQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFJRTtBQUFHLFlBQUksRUFBQyxFQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUFLRTtBQUFHLFlBQUksRUFBQyxFQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFNRTtBQUFHLFlBQUksRUFBQyxFQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkYsZUFPRTtBQUFHLFlBQUksRUFBQyxFQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEYsZUFvQkU7QUFBUyxlQUFTLEVBQUVBLHVFQUFwQjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFHLFlBQUksRUFBQyxFQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFHLFlBQUksRUFBQyxFQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFJRTtBQUFHLFlBQUksRUFBQyxFQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUFLRTtBQUFHLFlBQUksRUFBQyxFQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFNRTtBQUFHLFlBQUksRUFBQyxFQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkYsZUFPRTtBQUFHLFlBQUksRUFBQyxFQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcEJGLGVBNkJFO0FBQVMsZUFBUyxFQUFFQSxxRUFBcEI7QUFBQSw4QkFDRTtBQUFBO0FB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TEYsZUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBVUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkQ7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTZSxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBa0Q7QUFDaEQsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSw4REFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRSw4REFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixlQUlFLDhEQUFDLDBFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQUtFLDhEQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBLGtCQURGO0FBU0Q7O0FBRUQsK0RBQWVGLEtBQWYsRTs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQmlBcnJvd1RvVG9wIH0gZnJvbSAncmVhY3QtaWNvbnMvYmknO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYmFja3RvdG9wLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQmFja1RvVG9wQnV0dG9uKCkge1xyXG4gIGNvbnN0IFtpc1Zpc2libGUsIHNldElzVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgZnVuY3Rpb24gdG9nZ2xlVmlzaWxpdHkoKSB7XHJcbiAgICBjb25zdCBzY3JvbGxlZFBhZ2UgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXHJcbiAgICBcclxuICAgIGlmKHNjcm9sbGVkUGFnZSA+IDI4MCkge1xyXG4gICAgICBzZXRJc1Zpc2libGUodHJ1ZSlcclxuICAgIH0gZWxzZXtcclxuICAgICAgc2V0SXNWaXNpYmxlKGZhbHNlKVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBzY3JvbGxUb1RvcCgpIHtcclxuICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdG9nZ2xlVmlzaWxpdHkpXHJcbiAgfSxbXSlcclxuICBcclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgaXNWaXNpYmxlID8gKFxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17KCkgPT4gc2Nyb2xsVG9Ub3AoKX0+XHJcbiAgICAgICAgPEJpQXJyb3dUb1RvcCAvPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICkgOiAoXHJcbiAgICAgIDw+PC8+XHJcbiAgICApXHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9mb290ZXIubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQge0FpRmlsbEZhY2Vib29rLCBBaUZpbGxUd2l0dGVyU3F1YXJlLCBBaU91dGxpbmVJbnN0YWdyYW19IGZyb20gJ3JlYWN0LWljb25zL2FpJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBGb290ZXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyQ29udGFpbmVyfT5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuZ2VuZXJhbEluZm99PlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gc3JjPVwiL2ltYWdlcy9sb2dvLnBuZ1wiIGFsdD1cImxvZ29cIiAvPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgNTAwLCA0dGggTG9jYWwgc3QuIE5vcnRoZW4gQ2hpY2Fnbzxici8+XHJcbiAgICAgICAgICBJTiA0Nzg5MywgVVM8YnIvPlxyXG4gICAgICAgICAgUGhvbmU6IDA4MDAtMTIzNC0wMDAwMDA8YnIvPlxyXG4gICAgICAgICAgRW1haWw6IHNvbWVlbWFpbEBnbWFpbC5jb21cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHA+Q29weXJpZ2h0IDIwMjEgwqkgRS1Db21tZXJjZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC48L3A+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc30+XHJcbiAgICAgICAgPGgyPlBvcHVsYXIgQ2F0ZWdvcmllczwvaDI+XHJcbiAgICAgICAgPGEgaHJlZj1cIlwiPkNhdGVnb3J5IDE8L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cIlwiPkNhdGVnb3J5IDI8L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cIlwiPkNhdGVnb3J5IDM8L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cIlwiPkNhdGVnb3J5IDQ8L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cIlwiPkNhdGVnb3J5IDU8L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cIlwiPkNhdGVnb3J5IDY8L2E+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc30+XHJcbiAgICAgICAgPGgyPkFib3V0IFVzPC9oMj5cclxuICAgICAgICA8YSBocmVmPVwiXCI+Q29udGFjdCBVczwvYT5cclxuICAgICAgICA8YSBocmVmPVwiXCI+RGVsaXZlcnkgSW5mb3JtYXRpb248L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cIlwiPlByaXZhY3kgUG9saWN5PC9hPlxyXG4gICAgICAgIDxhIGhyZWY9XCJcIj5UZXJtcyAmYW1wOyBDb25kaXRpb25zPC9hPlxyXG4gICAgICAgIDxhIGhyZWY9XCJcIj5GQVFzPC9hPlxyXG4gICAgICAgIDxhIGhyZWY9XCJcIj5Qcm9kdWN0IFN1cHBvcnQ8L2E+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuZm9sbG93VXN9PlxyXG4gICAgICAgIDxoMj5Gb2xsb3cgVXM8L2gyPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIlwiPlxyXG4gICAgICAgICAgICA8QWlGaWxsRmFjZWJvb2sgLz5cclxuICAgICAgICAgICAgRmFjZWJvb2tcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxhIGhyZWY9XCJcIj5cclxuICAgICAgICAgICAgPEFpT3V0bGluZUluc3RhZ3JhbSAvPlxyXG4gICAgICAgICAgICBJbnN0YWdyYW1cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxhIGhyZWY9XCJcIj5cclxuICAgICAgICAgICAgPEFpRmlsbFR3aXR0ZXJTcXVhcmUgLz5cclxuICAgICAgICAgICAgVHdpdHRlclxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L2Zvb3Rlcj5cclxuICApO1xyXG59IiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL2ljb24ubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBBaU91dGxpbmVTaG9wcGluZ0NhcnQsIEFpT3V0bGluZUhlYXJ0LCBBaU91dGxpbmVVc2VyQWRkIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2FydEljb24oKSB7XHJcbiAgY29uc3QgW2NhcnRJdGVtcywgc2V0Q2FydEl0ZW1zXSA9IHVzZVN0YXRlKDApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICBjYXJ0SXRlbXMgPiAwID8gXHJcbiAgICAoXHJcbiAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmljb25Cb2R5fSBocmVmPVwiXCI+XHJcbiAgICAgIDxwPntjYXJ0SXRlbXN9PC9wPlxyXG4gICAgICA8QWlPdXRsaW5lU2hvcHBpbmdDYXJ0IGNsYXNzTmFtZT17c3R5bGVzLmljb259IC8+XHJcbiAgICAgIDwvYT5cclxuICAgICkgOiBcclxuICAgIChcclxuICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbkJvZHl9IGhyZWY9XCJcIj5cclxuICAgICAgICA8QWlPdXRsaW5lU2hvcHBpbmdDYXJ0IGNsYXNzTmFtZT17c3R5bGVzLmljb259IC8+XHJcbiAgICAgIDwvYT4gXHJcbiAgICApXHJcbiAgKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBGYXZvcml0ZXNJY29uKCkge1xyXG4gIGNvbnN0IFtmYXZvcml0ZUl0ZW1zLCBzZXRGYXZvcml0ZUl0ZW1zXSA9IHVzZVN0YXRlKDEpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5pY29uQm9keX0gaHJlZj1cIlwiPlxyXG4gICAgICA8QWlPdXRsaW5lSGVhcnQgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gLz5cclxuICAgIDwvYT4gXHJcbiAgKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2dpbkljb24oKSB7XHJcbiAgY29uc3QgW3VzZXJMb2dnZWQsIHNldFVzZXJMb2dnZWRdID0gdXNlU3RhdGUodHJ1ZSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIHVzZXJMb2dnZWQgPT09IHRydWUgPyBcclxuICAgIChcclxuICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbkJvZHl9IGhyZWY9XCJcIj5cclxuICAgICAgICA8QWlPdXRsaW5lVXNlckFkZCBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSAvPlxyXG4gICAgICAgIExvZ2luXHJcbiAgICAgIDwvYT4gIFxyXG4gICAgKSA6IFxyXG4gICAgKFxyXG4gICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5jYXJ0SWNvbn0gaHJlZj1cIlwiPlxyXG4gICAgICAgIDxBaU91dGxpbmVVc2VyQWRkIGNsYXNzTmFtZT17c3R5bGVzLmljb259IC8+XHJcbiAgICAgIDwvYT4gXHJcbiAgICApXHJcbiAgKTtcclxufSIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zZWFyY2gubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBCaVNlYXJjaEFsdCB9IGZyb20gJ3JlYWN0LWljb25zL2JpJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTZWFyY2hCYXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoQ29udGFpbmVyfT5cclxuICAgICAgPEJpU2VhcmNoQWx0IC8+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGhlcmVcIi8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59IiwiaW1wb3J0IHsgQWlPdXRsaW5lVXNlckFkZCwgQWlPdXRsaW5lU2hvcHBpbmdDYXJ0IH0gZnJvbSAncmVhY3QtaWNvbnMvYWknO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaGVhZGVyLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSAnLi9TZWFyY2hCYXInO1xyXG5pbXBvcnQgeyBDYXJ0SWNvbiwgRmF2b3JpdGVzSWNvbiwgTG9naW5JY29uIH0gZnJvbSAnLi9JY29ucyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyQ29udGVudH0+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSBzcmM9XCIvaW1hZ2VzL2xvZ28ucG5nXCIgYWx0PVwibG9nb1wiIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJNYW5hZ2VyfT5cclxuICAgICAgICAgIDxTZWFyY2hCYXIgLz5cclxuICAgICAgICAgIDxDYXJ0SWNvbiAvPlxyXG4gICAgICAgICAgPEZhdm9yaXRlc0ljb24gLz5cclxuICAgICAgICAgIDxMb2dpbkljb24gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59XHJcblxyXG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3ViaGVhZGVyLm1vZHVsZS5zY3NzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTdWJIZWFkZXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3ViaGVhZGVyQ29udGFpbmVyfT5cclxuICAgICAgPHA+Q2F0ZWdvcnkgMTwvcD5cclxuICAgICAgPHA+Q2F0ZWdvcnkgMjwvcD5cclxuICAgICAgPHA+Q2F0ZWdvcnkgMzwvcD5cclxuICAgICAgPHA+Q2F0ZWdvcnkgNDwvcD5cclxuICAgICAgPHA+Q2F0ZWdvcnkgNTwvcD5cclxuICAgICAgPHA+Q2F0ZWdvcnkgNjwvcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iLCJpbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xyXG5pbXBvcnQgeyBTdWJIZWFkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL1N1YkhlYWRlcic7XHJcbmltcG9ydCB7IEJhY2tUb1RvcEJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9ucy9CYWNrVG9Ub3AnO1xyXG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XHJcblxyXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWwuc2Nzcyc7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzfTogQXBwUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8U3ViSGVhZGVyIC8+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPEJhY2tUb1RvcEJ1dHRvbiAvPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYnV0dG9uXCI6IFwiYmFja3RvdG9wX2J1dHRvbl9fMjRlOWtcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZvb3RlckNvbnRhaW5lclwiOiBcImZvb3Rlcl9mb290ZXJDb250YWluZXJfXzJzN1lTXCIsXG5cdFwibG9nb1wiOiBcImZvb3Rlcl9sb2dvX19VaW03NFwiLFxuXHRcImdlbmVyYWxJbmZvXCI6IFwiZm9vdGVyX2dlbmVyYWxJbmZvX19ab3ctZVwiLFxuXHRcImNhdGVnb3JpZXNcIjogXCJmb290ZXJfY2F0ZWdvcmllc19fM3ktSHdcIixcblx0XCJmb2xsb3dVc1wiOiBcImZvb3Rlcl9mb2xsb3dVc19fMjhaSHFcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImljb25Cb2R5XCI6IFwiaWNvbl9pY29uQm9keV9fMTFHdHBcIixcblx0XCJpY29uXCI6IFwiaWNvbl9pY29uX19USlJfOFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic2VhcmNoQ29udGFpbmVyXCI6IFwic2VhcmNoX3NlYXJjaENvbnRhaW5lcl9famE2VkNcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhlYWRlckNvbnRhaW5lclwiOiBcImhlYWRlcl9oZWFkZXJDb250YWluZXJfX2JNeXp2XCIsXG5cdFwiaGVhZGVyQ29udGVudFwiOiBcImhlYWRlcl9oZWFkZXJDb250ZW50X18xS2NqN1wiLFxuXHRcImxvZ29cIjogXCJoZWFkZXJfbG9nb19fMkJpdmZcIixcblx0XCJoZWFkZXJNYW5hZ2VyXCI6IFwiaGVhZGVyX2hlYWRlck1hbmFnZXJfXzExSWYtXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzdWJoZWFkZXJDb250YWluZXJcIjogXCJzdWJoZWFkZXJfc3ViaGVhZGVyQ29udGFpbmVyX18zdEgwVVwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==