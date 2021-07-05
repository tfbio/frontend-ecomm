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
/* harmony import */ var _icon_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon.module.scss */ "./src/components/Header/Icons/icon.module.scss");
/* harmony import */ var _icon_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_icon_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var _contexts_cartContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../contexts/cartContext */ "./src/contexts/cartContext.tsx");

var _jsxFileName = "C:\\code_projects\\base_e-commerce\\src\\components\\Header\\Icons\\index.tsx";




function CartIcon() {
  const {
    cart
  } = (0,_contexts_cartContext__WEBPACK_IMPORTED_MODULE_2__.useCart)();
  const cartItems = cart.length;
  return cartItems > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
    className: (_icon_module_scss__WEBPACK_IMPORTED_MODULE_3___default().iconBody),
    href: "",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      "data-testid": "cart-items",
      children: cartItems
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineShoppingCart, {
      className: (_icon_module_scss__WEBPACK_IMPORTED_MODULE_3___default().icon)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 7
  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
    className: (_icon_module_scss__WEBPACK_IMPORTED_MODULE_3___default().iconBody),
    href: "",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineShoppingCart, {
      className: (_icon_module_scss__WEBPACK_IMPORTED_MODULE_3___default().icon)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 7
  }, this);
}
function FavoritesIcon() {
  const {
    0: favoriteItems,
    1: setFavoriteItems
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
    className: (_icon_module_scss__WEBPACK_IMPORTED_MODULE_3___default().iconBody),
    href: "",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineHeart, {
      className: (_icon_module_scss__WEBPACK_IMPORTED_MODULE_3___default().icon)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, this);
}
function LoginIcon() {
  const {
    0: userLogged,
    1: setUserLogged
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  return userLogged === true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
    className: (_icon_module_scss__WEBPACK_IMPORTED_MODULE_3___default().iconBody),
    href: "",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineUserAdd, {
      className: (_icon_module_scss__WEBPACK_IMPORTED_MODULE_3___default().icon)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }, this), "Login"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 7
  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
    className: (_icon_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cartIcon),
    href: "",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineUserAdd, {
      className: (_icon_module_scss__WEBPACK_IMPORTED_MODULE_3___default().icon)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 51,
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
/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header.module.scss */ "./src/components/Header/header.module.scss");
/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_header_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchBar */ "./src/components/Header/SearchBar/index.tsx");
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icons */ "./src/components/Header/Icons/index.tsx");

var _jsxFileName = "C:\\code_projects\\base_e-commerce\\src\\components\\Header\\index.tsx";




function Header() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
    className: (_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().headerContainer),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().headerContent),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            className: (_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().logo),
            src: "/images/logo.png",
            alt: "logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().headerManager),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchBar__WEBPACK_IMPORTED_MODULE_2__.SearchBar, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_3__.CartIcon, {
          "data-testid": "cart-icon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_3__.FavoritesIcon, {
          "data-testid": "fav"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_3__.LoginIcon, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
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
/* harmony import */ var _subheader_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subheader.module.scss */ "./src/components/SubHeader/subheader.module.scss");
/* harmony import */ var _subheader_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_subheader_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\code_projects\\base_e-commerce\\src\\components\\SubHeader\\index.tsx";


function SubHeader() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_subheader_module_scss__WEBPACK_IMPORTED_MODULE_2___default().subheaderContainer),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "products/sports",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        children: "Sports"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "products/electronics",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        children: "Electronics"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "products/accessories",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        children: "Accessories"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "products/smartphones-tablets",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        children: "Smartphones & Tablets"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "products/computers",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        children: "Computers"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "products/instruments",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        children: "Musical Instruments"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/contexts/cartContext.tsx":
/*!**************************************!*\
  !*** ./src/contexts/cartContext.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartProvider": function() { return /* binding */ CartProvider; },
/* harmony export */   "useCart": function() { return /* binding */ useCart; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\code_projects\\base_e-commerce\\src\\contexts\\cartContext.tsx";

const CartContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
function CartProvider({
  children
}) {
  // Codigo Placeholder
  const {
    0: cart,
    1: setCart
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([{
    id: 1,
    name: 'produtim1',
    unformattedPrice: 10.90,
    amount: 2,
    imageUrl: 'a image url'
  }, {
    id: 2,
    name: 'produtim2',
    unformattedPrice: 100.90,
    amount: 5,
    imageUrl: 'a image url'
  }]); // Codigo Placeholder

  const addProductToCart = async product => {
    const updatedCart = [...cart];
    updatedCart.push(product);
    setCart(updatedCart);
  }; // Codigo Placeholder


  const removeProduct = productId => {
    const updatedCart = cart.filter(product => product.id !== productId);
    setCart(updatedCart);
  }; // Codigo Placeholder


  const updateProductAmount = async ({
    product,
    newAmount
  }) => {
    const updatedCart = [...cart];
    const targetProduct = updatedCart.find(p => p.id === product.id);
    targetProduct.amount = newAmount;
    setCart(updatedCart);
  }; // Codigo Placeholder


  const clearCart = () => {};

  const contextValues = {
    cart,
    addProductToCart,
    removeProduct,
    updateProductAmount,
    clearCart
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {
    value: contextValues,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 5
  }, this);
}
function useCart() {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartContext);
  return context;
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
/* harmony import */ var _contexts_cartContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/cartContext */ "./src/contexts/cartContext.tsx");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./src/components/Header/index.tsx");
/* harmony import */ var _components_SubHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SubHeader */ "./src/components/SubHeader/index.tsx");
/* harmony import */ var _components_Buttons_BackToTop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Buttons/BackToTop */ "./src/components/Buttons/BackToTop/index.tsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ "./src/components/Footer/index.tsx");
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/global.scss */ "./src/styles/global.scss");
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\code_projects\\base_e-commerce\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_cartContext__WEBPACK_IMPORTED_MODULE_1__.CartProvider, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SubHeader__WEBPACK_IMPORTED_MODULE_3__.SubHeader, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Buttons_BackToTop__WEBPACK_IMPORTED_MODULE_4__.BackToTopButton, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_5__.Footer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
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

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_react-icons_ai_index_esm_js","vendors-node_modules_next_link_js-node_modules_react-icons_bi_index_esm_js"], function() { return __webpack_exec__("./src/pages/_app.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXNlLWVjb21tZXJjZS8uL3NyYy9jb21wb25lbnRzL0J1dHRvbnMvQmFja1RvVG9wL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9iYXNlLWVjb21tZXJjZS8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vYmFzZS1lY29tbWVyY2UvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSWNvbnMvaW5kZXgudHN4Iiwid2VicGFjazovL2Jhc2UtZWNvbW1lcmNlLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL1NlYXJjaEJhci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vYmFzZS1lY29tbWVyY2UvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4Iiwid2VicGFjazovL2Jhc2UtZWNvbW1lcmNlLy4vc3JjL2NvbXBvbmVudHMvU3ViSGVhZGVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9iYXNlLWVjb21tZXJjZS8uL3NyYy9jb250ZXh0cy9jYXJ0Q29udGV4dC50c3giLCJ3ZWJwYWNrOi8vYmFzZS1lY29tbWVyY2UvLi9zcmMvcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vYmFzZS1lY29tbWVyY2UvLi9zcmMvY29tcG9uZW50cy9CdXR0b25zL0JhY2tUb1RvcC9iYWNrdG90b3AubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYmFzZS1lY29tbWVyY2UvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvZm9vdGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Jhc2UtZWNvbW1lcmNlLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0ljb25zL2ljb24ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYmFzZS1lY29tbWVyY2UvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvU2VhcmNoQmFyL3NlYXJjaC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9iYXNlLWVjb21tZXJjZS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9oZWFkZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYmFzZS1lY29tbWVyY2UvLi9zcmMvY29tcG9uZW50cy9TdWJIZWFkZXIvc3ViaGVhZGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Jhc2UtZWNvbW1lcmNlL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2Jhc2UtZWNvbW1lcmNlL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL2Jhc2UtZWNvbW1lcmNlL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9iYXNlLWVjb21tZXJjZS9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vYmFzZS1lY29tbWVyY2UvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9iYXNlLWVjb21tZXJjZS9pZ25vcmVkfEM6XFxjb2RlX3Byb2plY3RzXFxiYXNlX2UtY29tbWVyY2VcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJCYWNrVG9Ub3BCdXR0b24iLCJpc1Zpc2libGUiLCJzZXRJc1Zpc2libGUiLCJ1c2VTdGF0ZSIsInRvZ2dsZVZpc2lsaXR5Iiwic2Nyb2xsZWRQYWdlIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJzY3JvbGxUb1RvcCIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGVzIiwiRm9vdGVyIiwiQ2FydEljb24iLCJjYXJ0IiwidXNlQ2FydCIsImNhcnRJdGVtcyIsImxlbmd0aCIsImljb24iLCJGYXZvcml0ZXNJY29uIiwiZmF2b3JpdGVJdGVtcyIsInNldEZhdm9yaXRlSXRlbXMiLCJMb2dpbkljb24iLCJ1c2VyTG9nZ2VkIiwic2V0VXNlckxvZ2dlZCIsIlNlYXJjaEJhciIsIkhlYWRlciIsIlN1YkhlYWRlciIsIkNhcnRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNhcnRQcm92aWRlciIsImNoaWxkcmVuIiwic2V0Q2FydCIsImlkIiwibmFtZSIsInVuZm9ybWF0dGVkUHJpY2UiLCJhbW91bnQiLCJpbWFnZVVybCIsImFkZFByb2R1Y3RUb0NhcnQiLCJwcm9kdWN0IiwidXBkYXRlZENhcnQiLCJwdXNoIiwicmVtb3ZlUHJvZHVjdCIsInByb2R1Y3RJZCIsImZpbHRlciIsInVwZGF0ZVByb2R1Y3RBbW91bnQiLCJuZXdBbW91bnQiLCJ0YXJnZXRQcm9kdWN0IiwiZmluZCIsInAiLCJjbGVhckNhcnQiLCJjb250ZXh0VmFsdWVzIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxTQUFTQSxlQUFULEdBQTJCO0FBQ2hDLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QkMsK0NBQVEsQ0FBQyxLQUFELENBQTFDOztBQUVBLFdBQVNDLGNBQVQsR0FBMEI7QUFDeEIsVUFBTUMsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFNBQTlDOztBQUVBLFFBQUdILFlBQVksR0FBRyxHQUFsQixFQUF1QjtBQUNyQkgsa0JBQVksQ0FBQyxJQUFELENBQVo7QUFDRCxLQUZELE1BRU07QUFDSkEsa0JBQVksQ0FBQyxLQUFELENBQVo7QUFDRDtBQUNGOztBQUVELFdBQVNPLFdBQVQsR0FBdUI7QUFDckJDLFVBQU0sQ0FBQ0MsUUFBUCxDQUFnQjtBQUNkQyxTQUFHLEVBQUUsQ0FEUztBQUVkQyxjQUFRLEVBQUU7QUFGSSxLQUFoQjtBQUlEOztBQUVEQyxr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Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJpQXJyb3dUb1RvcCB9IGZyb20gJ3JlYWN0LWljb25zL2JpJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2JhY2t0b3RvcC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEJhY2tUb1RvcEJ1dHRvbigpIHtcclxuICBjb25zdCBbaXNWaXNpYmxlLCBzZXRJc1Zpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGZ1bmN0aW9uIHRvZ2dsZVZpc2lsaXR5KCkge1xyXG4gICAgY29uc3Qgc2Nyb2xsZWRQYWdlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxyXG4gICAgXHJcbiAgICBpZihzY3JvbGxlZFBhZ2UgPiAyODApIHtcclxuICAgICAgc2V0SXNWaXNpYmxlKHRydWUpXHJcbiAgICB9IGVsc2V7XHJcbiAgICAgIHNldElzVmlzaWJsZShmYWxzZSlcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgZnVuY3Rpb24gc2Nyb2xsVG9Ub3AoKSB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRvZ2dsZVZpc2lsaXR5KVxyXG4gIH0sW10pXHJcbiAgXHJcblxyXG4gIHJldHVybihcclxuICAgIGlzVmlzaWJsZSA/IChcclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9eygpID0+IHNjcm9sbFRvVG9wKCl9PlxyXG4gICAgICAgIDxCaUFycm93VG9Ub3AgLz5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICApIDogKFxyXG4gICAgICA8PjwvPlxyXG4gICAgKVxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vZm9vdGVyLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHtBaUZpbGxGYWNlYm9vaywgQWlGaWxsVHdpdHRlclNxdWFyZSwgQWlPdXRsaW5lSW5zdGFncmFtfSBmcm9tICdyZWFjdC1pY29ucy9haSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3RlckNvbnRhaW5lcn0+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmdlbmVyYWxJbmZvfT5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IHNyYz1cIi9pbWFnZXMvbG9nby5wbmdcIiBhbHQ9XCJsb2dvXCIgLz5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIDUwMCwgNHRoIExvY2FsIHN0LiBOb3J0aGVuIENoaWNhZ288YnIvPlxyXG4gICAgICAgICAgSU4gNDc4OTMsIFVTPGJyLz5cclxuICAgICAgICAgIFBob25lOiAwODAwLTEyMzQtMDAwMDAwPGJyLz5cclxuICAgICAgICAgIEVtYWlsOiBzb21lZW1haWxAZ21haWwuY29tXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwPkNvcHlyaWdodCAyMDIxIMKpIEUtQ29tbWVyY2UuIEFsbCByaWdodHMgcmVzZXJ2ZWQuPC9wPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXN9PlxyXG4gICAgICAgIDxoMj5Qb3B1bGFyIENhdGVnb3JpZXM8L2gyPlxyXG4gICAgICAgIDxhIGhyZWY9XCJcIj5DYXRlZ29yeSAxPC9hPlxyXG4gICAgICAgIDxhIGhyZWY9XCJcIj5DYXRlZ29yeSAyPC9hPlxyXG4gICAgICAgIDxhIGhyZWY9XCJcIj5DYXRlZ29yeSAzPC9hPlxyXG4gICAgICAgIDxhIGhyZWY9XCJcIj5DYXRlZ29yeSA0PC9hPlxyXG4gICAgICAgIDxhIGhyZWY9XCJcIj5DYXRlZ29yeSA1PC9hPlxyXG4gICAgICAgIDxhIGhyZWY9XCJcIj5DYXRlZ29yeSA2PC9hPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXN9PlxyXG4gICAgICAgIDxoMj5BYm91dCBVczwvaDI+XHJcbiAgICAgICAgPGEgaHJlZj1cIlwiPkNvbnRhY3QgVXM8L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cIlwiPkRlbGl2ZXJ5IEluZm9ybWF0aW9uPC9hPlxyXG4gICAgICAgIDxhIGhyZWY9XCJcIj5Qcml2YWN5IFBvbGljeTwvYT5cclxuICAgICAgICA8YSBocmVmPVwiXCI+VGVybXMgJmFtcDsgQ29uZGl0aW9uczwvYT5cclxuICAgICAgICA8YSBocmVmPVwiXCI+RkFRczwvYT5cclxuICAgICAgICA8YSBocmVmPVwiXCI+UHJvZHVjdCBTdXBwb3J0PC9hPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmZvbGxvd1VzfT5cclxuICAgICAgICA8aDI+Rm9sbG93IFVzPC9oMj5cclxuICAgICAgICAgIDxhIGhyZWY9XCJcIj5cclxuICAgICAgICAgICAgPEFpRmlsbEZhY2Vib29rIC8+XHJcbiAgICAgICAgICAgIEZhY2Vib29rXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8YSBocmVmPVwiXCI+XHJcbiAgICAgICAgICAgIDxBaU91dGxpbmVJbnN0YWdyYW0gLz5cclxuICAgICAgICAgICAgSW5zdGFncmFtXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8YSBocmVmPVwiXCI+XHJcbiAgICAgICAgICAgIDxBaUZpbGxUd2l0dGVyU3F1YXJlIC8+XHJcbiAgICAgICAgICAgIFR3aXR0ZXJcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9mb290ZXI+XHJcbiAgKTtcclxufSIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9pY29uLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEFpT3V0bGluZVNob3BwaW5nQ2FydCwgQWlPdXRsaW5lSGVhcnQsIEFpT3V0bGluZVVzZXJBZGQgfSBmcm9tICdyZWFjdC1pY29ucy9haSc7XHJcbmltcG9ydCB7IHVzZUNhcnQgfSBmcm9tICcuLi8uLi8uLi9jb250ZXh0cy9jYXJ0Q29udGV4dCc7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENhcnRJY29uKCkge1xyXG4gIGNvbnN0IHsgY2FydCB9ID0gdXNlQ2FydCgpICAgIFxyXG4gIGNvbnN0IGNhcnRJdGVtcyA9IGNhcnQubGVuZ3RoXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICBjYXJ0SXRlbXMgPiAwID8gXHJcbiAgICAoXHJcbiAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmljb25Cb2R5fSBocmVmPVwiXCI+XHJcbiAgICAgIDxwIGRhdGEtdGVzdGlkPVwiY2FydC1pdGVtc1wiPntjYXJ0SXRlbXN9PC9wPlxyXG4gICAgICA8QWlPdXRsaW5lU2hvcHBpbmdDYXJ0IGNsYXNzTmFtZT17c3R5bGVzLmljb259IC8+XHJcbiAgICAgIDwvYT5cclxuICAgICkgOiBcclxuICAgIChcclxuICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbkJvZHl9IGhyZWY9XCJcIj5cclxuICAgICAgICA8QWlPdXRsaW5lU2hvcHBpbmdDYXJ0IGNsYXNzTmFtZT17c3R5bGVzLmljb259IC8+XHJcbiAgICAgIDwvYT4gXHJcbiAgICApXHJcbiAgKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBGYXZvcml0ZXNJY29uKCkge1xyXG4gIGNvbnN0IFtmYXZvcml0ZUl0ZW1zLCBzZXRGYXZvcml0ZUl0ZW1zXSA9IHVzZVN0YXRlKDEpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5pY29uQm9keX0gaHJlZj1cIlwiPlxyXG4gICAgICA8QWlPdXRsaW5lSGVhcnQgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gLz5cclxuICAgIDwvYT4gXHJcbiAgKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2dpbkljb24oKSB7XHJcbiAgY29uc3QgW3VzZXJMb2dnZWQsIHNldFVzZXJMb2dnZWRdID0gdXNlU3RhdGUodHJ1ZSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIHVzZXJMb2dnZWQgPT09IHRydWUgPyBcclxuICAgIChcclxuICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbkJvZHl9IGhyZWY9XCJcIj5cclxuICAgICAgICA8QWlPdXRsaW5lVXNlckFkZCBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSAvPlxyXG4gICAgICAgIExvZ2luXHJcbiAgICAgIDwvYT4gIFxyXG4gICAgKSA6IFxyXG4gICAgKFxyXG4gICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5jYXJ0SWNvbn0gaHJlZj1cIlwiPlxyXG4gICAgICAgIDxBaU91dGxpbmVVc2VyQWRkIGNsYXNzTmFtZT17c3R5bGVzLmljb259IC8+XHJcbiAgICAgIDwvYT4gXHJcbiAgICApXHJcbiAgKTtcclxufSIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zZWFyY2gubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBCaVNlYXJjaEFsdCB9IGZyb20gJ3JlYWN0LWljb25zL2JpJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTZWFyY2hCYXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoQ29udGFpbmVyfT5cclxuICAgICAgPEJpU2VhcmNoQWx0IC8+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGhlcmVcIi8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59IiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL2hlYWRlci5tb2R1bGUuc2NzcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tICcuL1NlYXJjaEJhcidcclxuaW1wb3J0IHsgQ2FydEljb24sIEZhdm9yaXRlc0ljb24sIExvZ2luSWNvbiB9IGZyb20gJy4vSWNvbnMnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyQ29udGVudH0+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IHNyYz1cIi9pbWFnZXMvbG9nby5wbmdcIiBhbHQ9XCJsb2dvXCIgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJNYW5hZ2VyfT5cclxuICAgICAgICAgIDxTZWFyY2hCYXIgLz5cclxuICAgICAgICAgIDxDYXJ0SWNvbiBkYXRhLXRlc3RpZD1cImNhcnQtaWNvblwiLz5cclxuICAgICAgICAgIDxGYXZvcml0ZXNJY29uIGRhdGEtdGVzdGlkPVwiZmF2XCIvPlxyXG4gICAgICAgICAgPExvZ2luSWNvbiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdWJoZWFkZXIubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFN1YkhlYWRlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdWJoZWFkZXJDb250YWluZXJ9PlxyXG4gICAgICA8TGluayBocmVmPVwicHJvZHVjdHMvc3BvcnRzXCI+XHJcbiAgICAgICAgPGE+XHJcbiAgICAgICAgICBTcG9ydHNcclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPExpbmsgaHJlZj1cInByb2R1Y3RzL2VsZWN0cm9uaWNzXCI+XHJcbiAgICAgICAgPGE+XHJcbiAgICAgICAgICBFbGVjdHJvbmljc1xyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8TGluayBocmVmPVwicHJvZHVjdHMvYWNjZXNzb3JpZXNcIj5cclxuICAgICAgICA8YT5cclxuICAgICAgICAgIEFjY2Vzc29yaWVzXHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCJwcm9kdWN0cy9zbWFydHBob25lcy10YWJsZXRzXCI+XHJcbiAgICAgICAgPGE+XHJcbiAgICAgICAgICBTbWFydHBob25lcyAmYW1wOyBUYWJsZXRzXHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCJwcm9kdWN0cy9jb21wdXRlcnNcIj5cclxuICAgICAgICA8YT5cclxuICAgICAgICAgIENvbXB1dGVyc1xyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8TGluayBocmVmPVwicHJvZHVjdHMvaW5zdHJ1bWVudHNcIj5cclxuICAgICAgICA8YT5cclxuICAgICAgICAgIE11c2ljYWwgSW5zdHJ1bWVudHNcclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5cclxuaW50ZXJmYWNlIENhcnRQcm92aWRlclByb3BzIHtcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2FydENvbnRleHREYXRhIHtcclxuICBjYXJ0OiBQcm9kdWN0W107XHJcbiAgYWRkUHJvZHVjdFRvQ2FydDogKHByb2R1Y3Q6IFByb2R1Y3QpID0+IFByb21pc2U8dm9pZD47XHJcbiAgcmVtb3ZlUHJvZHVjdDogKHByb2R1Y3RJZDogbnVtYmVyKSA9PiB2b2lkO1xyXG4gIHVwZGF0ZVByb2R1Y3RBbW91bnQ6ICh7IHByb2R1Y3QsIG5ld0Ftb3VudCB9OiBVcGRhdGVQcm9kdWN0QW1vdW50KSA9PiB2b2lkO1xyXG4gIGNsZWFyQ2FydDogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuaW50ZXJmYWNlIFVwZGF0ZVByb2R1Y3RBbW91bnQge1xyXG4gIHByb2R1Y3Q6IFByb2R1Y3Q7XHJcbiAgbmV3QW1vdW50OiBudW1iZXI7XHJcbn1cclxuXHJcblxyXG5jb25zdCBDYXJ0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ2FydENvbnRleHREYXRhKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDYXJ0UHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBDYXJ0UHJvdmlkZXJQcm9wcykge1xyXG5cclxuICAvLyBDb2RpZ28gUGxhY2Vob2xkZXJcclxuICBjb25zdCBbY2FydCwgc2V0Q2FydF0gPSB1c2VTdGF0ZTxQcm9kdWN0W10+KFtcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIG5hbWU6ICdwcm9kdXRpbTEnLFxyXG4gICAgICB1bmZvcm1hdHRlZFByaWNlOiAxMC45MCxcclxuICAgICAgYW1vdW50OiAyLFxyXG4gICAgICBpbWFnZVVybDogJ2EgaW1hZ2UgdXJsJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIG5hbWU6ICdwcm9kdXRpbTInLFxyXG4gICAgICB1bmZvcm1hdHRlZFByaWNlOiAxMDAuOTAsXHJcbiAgICAgIGFtb3VudDogNSxcclxuICAgICAgaW1hZ2VVcmw6ICdhIGltYWdlIHVybCdcclxuICAgIH0sXHJcbiAgXSlcclxuXHJcbiAgLy8gQ29kaWdvIFBsYWNlaG9sZGVyXHJcbiAgY29uc3QgYWRkUHJvZHVjdFRvQ2FydCA9IGFzeW5jIChwcm9kdWN0OiBQcm9kdWN0KSA9PiB7XHJcbiAgICBjb25zdCB1cGRhdGVkQ2FydCA9IFsuLi5jYXJ0XVxyXG4gICAgdXBkYXRlZENhcnQucHVzaChwcm9kdWN0KVxyXG4gICBcclxuICAgIHNldENhcnQodXBkYXRlZENhcnQpXHJcbiAgfVxyXG5cclxuICAvLyBDb2RpZ28gUGxhY2Vob2xkZXJcclxuICBjb25zdCByZW1vdmVQcm9kdWN0ID0gKHByb2R1Y3RJZDogbnVtYmVyKSA9PiB7XHJcbiAgICBjb25zdCB1cGRhdGVkQ2FydCA9IGNhcnQuZmlsdGVyKHByb2R1Y3QgPT4gcHJvZHVjdC5pZCAhPT0gcHJvZHVjdElkKVxyXG4gICBcclxuICAgIHNldENhcnQodXBkYXRlZENhcnQpXHJcbiAgfVxyXG5cclxuICAvLyBDb2RpZ28gUGxhY2Vob2xkZXJcclxuICBjb25zdCB1cGRhdGVQcm9kdWN0QW1vdW50ID0gYXN5bmMgKHsgcHJvZHVjdCwgbmV3QW1vdW50IH06IFVwZGF0ZVByb2R1Y3RBbW91bnQpID0+IHtcclxuICAgIGNvbnN0IHVwZGF0ZWRDYXJ0ID0gWy4uLmNhcnRdXHJcbiAgICBjb25zdCB0YXJnZXRQcm9kdWN0ID0gdXBkYXRlZENhcnQuZmluZChwID0+IHAuaWQgPT09IHByb2R1Y3QuaWQpXHJcbiAgICB0YXJnZXRQcm9kdWN0LmFtb3VudCA9IG5ld0Ftb3VudFxyXG5cclxuICAgIHNldENhcnQodXBkYXRlZENhcnQpXHJcbiAgfVxyXG5cclxuICAvLyBDb2RpZ28gUGxhY2Vob2xkZXJcclxuICBjb25zdCBjbGVhckNhcnQgPSAoKSA9PiB7fVxyXG5cclxuICBcclxuXHJcbiAgY29uc3QgY29udGV4dFZhbHVlcyA9IHtcclxuICAgIGNhcnQsIGFkZFByb2R1Y3RUb0NhcnQsIHJlbW92ZVByb2R1Y3QsIHVwZGF0ZVByb2R1Y3RBbW91bnQsIGNsZWFyQ2FydFxyXG4gIH1cclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPENhcnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0VmFsdWVzfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9DYXJ0Q29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcblxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VDYXJ0KCk6IENhcnRDb250ZXh0RGF0YSB7XHJcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQ2FydENvbnRleHQpO1xyXG5cclxuICByZXR1cm4gY29udGV4dDtcclxufSIsImltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgeyBDYXJ0UHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0cy9jYXJ0Q29udGV4dCc7XHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcclxuaW1wb3J0IHsgU3ViSGVhZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9TdWJIZWFkZXInO1xyXG5pbXBvcnQgeyBCYWNrVG9Ub3BCdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL0J1dHRvbnMvQmFja1RvVG9wJztcclxuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInO1xyXG5cclxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFsLnNjc3MnO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wc306IEFwcFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJ0UHJvdmlkZXI+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPFN1YkhlYWRlciAvPlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDxCYWNrVG9Ub3BCdXR0b24gLz5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC9DYXJ0UHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcCIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJ1dHRvblwiOiBcImJhY2t0b3RvcF9idXR0b25fXzI0ZTlrXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmb290ZXJDb250YWluZXJcIjogXCJmb290ZXJfZm9vdGVyQ29udGFpbmVyX18yczdZU1wiLFxuXHRcImxvZ29cIjogXCJmb290ZXJfbG9nb19fVWltNzRcIixcblx0XCJnZW5lcmFsSW5mb1wiOiBcImZvb3Rlcl9nZW5lcmFsSW5mb19fWm93LWVcIixcblx0XCJjYXRlZ29yaWVzXCI6IFwiZm9vdGVyX2NhdGVnb3JpZXNfXzN5LUh3XCIsXG5cdFwiZm9sbG93VXNcIjogXCJmb290ZXJfZm9sbG93VXNfXzI4WkhxXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJpY29uQm9keVwiOiBcImljb25faWNvbkJvZHlfXzExR3RwXCIsXG5cdFwiaWNvblwiOiBcImljb25faWNvbl9fVEpSXzhcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInNlYXJjaENvbnRhaW5lclwiOiBcInNlYXJjaF9zZWFyY2hDb250YWluZXJfX2phNlZDXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWFkZXJDb250YWluZXJcIjogXCJoZWFkZXJfaGVhZGVyQ29udGFpbmVyX19iTXl6dlwiLFxuXHRcImhlYWRlckNvbnRlbnRcIjogXCJoZWFkZXJfaGVhZGVyQ29udGVudF9fMUtjajdcIixcblx0XCJsb2dvXCI6IFwiaGVhZGVyX2xvZ29fXzJCaXZmXCIsXG5cdFwiaGVhZGVyTWFuYWdlclwiOiBcImhlYWRlcl9oZWFkZXJNYW5hZ2VyX18xMUlmLVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic3ViaGVhZGVyQ29udGFpbmVyXCI6IFwic3ViaGVhZGVyX3N1YmhlYWRlckNvbnRhaW5lcl9fM3RIMFVcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9