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
/* harmony import */ var _hooks_useCart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useCart */ "./src/hooks/useCart.tsx");

var _jsxFileName = "C:\\code_projects\\base_e-commerce\\src\\components\\Header\\Icons\\index.tsx";




function CartIcon() {
  const {
    cart
  } = (0,_hooks_useCart__WEBPACK_IMPORTED_MODULE_2__.useCart)();
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
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          className: (_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().logo),
          src: "/images/logo.png",
          alt: "logo"
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
          lineNumber: 14,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_3__.CartIcon, {
          "data-testid": "cart-icon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_3__.FavoritesIcon, {
          "data-testid": "fav"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_3__.LoginIcon, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
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
      href: "/categories/produtos",
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Electronics"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Category 3"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Category 4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Category 5"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Category 6"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/hooks/useCart.tsx":
/*!*******************************!*\
  !*** ./src/hooks/useCart.tsx ***!
  \*******************************/
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

var _jsxFileName = "C:\\code_projects\\base_e-commerce\\src\\hooks\\useCart.tsx";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXNlLWVjb21tZXJjZS8uL3NyYy9jb21wb25lbnRzL0J1dHRvbnMvQmFja1RvVG9wL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9iYXNlLWVjb21tZXJjZS8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vYmFzZS1lY29tbWVyY2UvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSWNvbnMvaW5kZXgudHN4Iiwid2VicGFjazovL2Jhc2UtZWNvbW1lcmNlLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL1NlYXJjaEJhci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vYmFzZS1lY29tbWVyY2UvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4Iiwid2VicGFjazovL2Jhc2UtZWNvbW1lcmNlLy4vc3JjL2NvbXBvbmVudHMvU3ViSGVhZGVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9iYXNlLWVjb21tZXJjZS8uL3NyYy9ob29rcy91c2VDYXJ0LnRzeCIsIndlYnBhY2s6Ly9iYXNlLWVjb21tZXJjZS8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly9iYXNlLWVjb21tZXJjZS8uL3NyYy9jb21wb25lbnRzL0J1dHRvbnMvQmFja1RvVG9wL2JhY2t0b3RvcC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9iYXNlLWVjb21tZXJjZS8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9mb290ZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYmFzZS1lY29tbWVyY2UvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSWNvbnMvaWNvbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9iYXNlLWVjb21tZXJjZS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9TZWFyY2hCYXIvc2VhcmNoLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Jhc2UtZWNvbW1lcmNlLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2hlYWRlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9iYXNlLWVjb21tZXJjZS8uL3NyYy9jb21wb25lbnRzL1N1YkhlYWRlci9zdWJoZWFkZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYmFzZS1lY29tbWVyY2UvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vYmFzZS1lY29tbWVyY2UvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vYmFzZS1lY29tbWVyY2UvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Jhc2UtZWNvbW1lcmNlL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9iYXNlLWVjb21tZXJjZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2Jhc2UtZWNvbW1lcmNlL2lnbm9yZWR8QzpcXGNvZGVfcHJvamVjdHNcXGJhc2VfZS1jb21tZXJjZVxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkJhY2tUb1RvcEJ1dHRvbiIsImlzVmlzaWJsZSIsInNldElzVmlzaWJsZSIsInVzZVN0YXRlIiwidG9nZ2xlVmlzaWxpdHkiLCJzY3JvbGxlZFBhZ2UiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsInNjcm9sbFRvVG9wIiwid2luZG93Iiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdHlsZXMiLCJGb290ZXIiLCJDYXJ0SWNvbiIsImNhcnQiLCJ1c2VDYXJ0IiwiY2FydEl0ZW1zIiwibGVuZ3RoIiwiaWNvbiIsIkZhdm9yaXRlc0ljb24iLCJmYXZvcml0ZUl0ZW1zIiwic2V0RmF2b3JpdGVJdGVtcyIsIkxvZ2luSWNvbiIsInVzZXJMb2dnZWQiLCJzZXRVc2VyTG9nZ2VkIiwiU2VhcmNoQmFyIiwiSGVhZGVyIiwiU3ViSGVhZGVyIiwiQ2FydENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQ2FydFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzZXRDYXJ0IiwiaWQiLCJuYW1lIiwidW5mb3JtYXR0ZWRQcmljZSIsImFtb3VudCIsImltYWdlVXJsIiwiYWRkUHJvZHVjdFRvQ2FydCIsInByb2R1Y3QiLCJ1cGRhdGVkQ2FydCIsInB1c2giLCJyZW1vdmVQcm9kdWN0IiwicHJvZHVjdElkIiwiZmlsdGVyIiwidXBkYXRlUHJvZHVjdEFtb3VudCIsIm5ld0Ftb3VudCIsInRhcmdldFByb2R1Y3QiLCJmaW5kIiwicCIsImNsZWFyQ2FydCIsImNvbnRleHRWYWx1ZXMiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLGVBQVQsR0FBMkI7QUFDaEMsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCQywrQ0FBUSxDQUFDLEtBQUQsQ0FBMUM7O0FBRUEsV0FBU0MsY0FBVCxHQUEwQjtBQUN4QixVQUFNQyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkMsU0FBOUM7O0FBRUEsUUFBR0gsWUFBWSxHQUFHLEdBQWxCLEVBQXVCO0FBQ3JCSCxrQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNELEtBRkQsTUFFTTtBQUNKQSxrQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNEO0FBQ0Y7O0FBRUQsV0FBU08sV0FBVCxHQUF1QjtBQUNyQkMsVUFBTSxDQUFDQyxRQUFQLENBQWdCO0FBQ2RDLFNBQUcsRUFBRSxDQURTO0FBRWRDLGNBQVEsRUFBRTtBQUZJLEtBQWhCO0FBSUQ7O0FBRURDLGtEQUFTLENB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LFlBRkYsZUFHRSw4REFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixlQUlFLDhEQUFDLDBFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQUtFLDhEQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBLGtCQURGO0FBU0Q7O0FBRUQsK0RBQWVGLEtBQWYsRTs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJpQXJyb3dUb1RvcCB9IGZyb20gJ3JlYWN0LWljb25zL2JpJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2JhY2t0b3RvcC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEJhY2tUb1RvcEJ1dHRvbigpIHtcclxuICBjb25zdCBbaXNWaXNpYmxlLCBzZXRJc1Zpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGZ1bmN0aW9uIHRvZ2dsZVZpc2lsaXR5KCkge1xyXG4gICAgY29uc3Qgc2Nyb2xsZWRQYWdlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxyXG4gICAgXHJcbiAgICBpZihzY3JvbGxlZFBhZ2UgPiAyODApIHtcclxuICAgICAgc2V0SXNWaXNpYmxlKHRydWUpXHJcbiAgICB9IGVsc2V7XHJcbiAgICAgIHNldElzVmlzaWJsZShmYWxzZSlcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgZnVuY3Rpb24gc2Nyb2xsVG9Ub3AoKSB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRvZ2dsZVZpc2lsaXR5KVxyXG4gIH0sW10pXHJcbiAgXHJcblxyXG4gIHJldHVybihcclxuICAgIGlzVmlzaWJsZSA/IChcclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9eygpID0+IHNjcm9sbFRvVG9wKCl9PlxyXG4gICAgICAgIDxCaUFycm93VG9Ub3AgLz5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICApIDogKFxyXG4gICAgICA8PjwvPlxyXG4gICAgKVxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vZm9vdGVyLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHtBaUZpbGxGYWNlYm9vaywgQWlGaWxsVHdpdHRlclNxdWFyZSwgQWlPdXRsaW5lSW5zdGFncmFtfSBmcm9tICdyZWFjdC1pY29ucy9haSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3RlckNvbnRhaW5lcn0+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmdlbmVyYWxJbmZvfT5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IHNyYz1cIi9pbWFnZXMvbG9nby5wbmdcIiBhbHQ9XCJsb2dvXCIgLz5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIDUwMCwgNHRoIExvY2FsIHN0LiBOb3J0aGVuIENoaWNhZ288YnIvPlxyXG4gICAgICAgICAgSU4gNDc4OTMsIFVTPGJyLz5cclxuICAgICAgICAgIFBob25lOiAwODAwLTEyMzQtMDAwMDAwPGJyLz5cclxuICAgICAgICAgIEVtYWlsOiBzb21lZW1haWxAZ21haWwuY29tXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwPkNvcHlyaWdodCAyMDIxIMKpIEUtQ29tbWVyY2UuIEFsbCByaWdodHMgcmVzZXJ2ZWQuPC9wPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXN9PlxyXG4gICAgICAgIDxoMj5Qb3B1bGFyIENhdGVnb3JpZXM8L2gyPlxyXG4gICAgICAgIDxhIGhyZWY9XCJcIj5DYXRlZ29yeSAxPC9hPlxyXG4gICAgICAgIDxhIGhyZWY9XCJcIj5DYXRlZ29yeSAyPC9hPlxyXG4gICAgICAgIDxhIGhyZWY9XCJcIj5DYXRlZ29yeSAzPC9hPlxyXG4gICAgICAgIDxhIGhyZWY9XCJcIj5DYXRlZ29yeSA0PC9hPlxyXG4gICAgICAgIDxhIGhyZWY9XCJcIj5DYXRlZ29yeSA1PC9hPlxyXG4gICAgICAgIDxhIGhyZWY9XCJcIj5DYXRlZ29yeSA2PC9hPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXN9PlxyXG4gICAgICAgIDxoMj5BYm91dCBVczwvaDI+XHJcbiAgICAgICAgPGEgaHJlZj1cIlwiPkNvbnRhY3QgVXM8L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cIlwiPkRlbGl2ZXJ5IEluZm9ybWF0aW9uPC9hPlxyXG4gICAgICAgIDxhIGhyZWY9XCJcIj5Qcml2YWN5IFBvbGljeTwvYT5cclxuICAgICAgICA8YSBocmVmPVwiXCI+VGVybXMgJmFtcDsgQ29uZGl0aW9uczwvYT5cclxuICAgICAgICA8YSBocmVmPVwiXCI+RkFRczwvYT5cclxuICAgICAgICA8YSBocmVmPVwiXCI+UHJvZHVjdCBTdXBwb3J0PC9hPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmZvbGxvd1VzfT5cclxuICAgICAgICA8aDI+Rm9sbG93IFVzPC9oMj5cclxuICAgICAgICAgIDxhIGhyZWY9XCJcIj5cclxuICAgICAgICAgICAgPEFpRmlsbEZhY2Vib29rIC8+XHJcbiAgICAgICAgICAgIEZhY2Vib29rXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8YSBocmVmPVwiXCI+XHJcbiAgICAgICAgICAgIDxBaU91dGxpbmVJbnN0YWdyYW0gLz5cclxuICAgICAgICAgICAgSW5zdGFncmFtXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8YSBocmVmPVwiXCI+XHJcbiAgICAgICAgICAgIDxBaUZpbGxUd2l0dGVyU3F1YXJlIC8+XHJcbiAgICAgICAgICAgIFR3aXR0ZXJcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9mb290ZXI+XHJcbiAgKTtcclxufSIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9pY29uLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEFpT3V0bGluZVNob3BwaW5nQ2FydCwgQWlPdXRsaW5lSGVhcnQsIEFpT3V0bGluZVVzZXJBZGQgfSBmcm9tICdyZWFjdC1pY29ucy9haSc7XHJcbmltcG9ydCB7IHVzZUNhcnQgfSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VDYXJ0JztcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2FydEljb24oKSB7XHJcbiAgY29uc3QgeyBjYXJ0IH0gPSB1c2VDYXJ0KClcclxuICBjb25zdCBjYXJ0SXRlbXMgPSBjYXJ0Lmxlbmd0aFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgY2FydEl0ZW1zID4gMCA/IFxyXG4gICAgKFxyXG4gICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5pY29uQm9keX0gaHJlZj1cIlwiPlxyXG4gICAgICA8cCBkYXRhLXRlc3RpZD1cImNhcnQtaXRlbXNcIj57Y2FydEl0ZW1zfTwvcD5cclxuICAgICAgPEFpT3V0bGluZVNob3BwaW5nQ2FydCBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSAvPlxyXG4gICAgICA8L2E+XHJcbiAgICApIDogXHJcbiAgICAoXHJcbiAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmljb25Cb2R5fSBocmVmPVwiXCI+XHJcbiAgICAgICAgPEFpT3V0bGluZVNob3BwaW5nQ2FydCBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSAvPlxyXG4gICAgICA8L2E+IFxyXG4gICAgKVxyXG4gICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRmF2b3JpdGVzSWNvbigpIHtcclxuICBjb25zdCBbZmF2b3JpdGVJdGVtcywgc2V0RmF2b3JpdGVJdGVtc10gPSB1c2VTdGF0ZSgxKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbkJvZHl9IGhyZWY9XCJcIj5cclxuICAgICAgPEFpT3V0bGluZUhlYXJ0IGNsYXNzTmFtZT17c3R5bGVzLmljb259IC8+XHJcbiAgICA8L2E+IFxyXG4gICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTG9naW5JY29uKCkge1xyXG4gIGNvbnN0IFt1c2VyTG9nZ2VkLCBzZXRVc2VyTG9nZ2VkXSA9IHVzZVN0YXRlKHRydWUpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICB1c2VyTG9nZ2VkID09PSB0cnVlID8gXHJcbiAgICAoXHJcbiAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmljb25Cb2R5fSBocmVmPVwiXCI+XHJcbiAgICAgICAgPEFpT3V0bGluZVVzZXJBZGQgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gLz5cclxuICAgICAgICBMb2dpblxyXG4gICAgICA8L2E+ICBcclxuICAgICkgOiBcclxuICAgIChcclxuICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuY2FydEljb259IGhyZWY9XCJcIj5cclxuICAgICAgICA8QWlPdXRsaW5lVXNlckFkZCBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSAvPlxyXG4gICAgICA8L2E+IFxyXG4gICAgKVxyXG4gICk7XHJcbn0iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc2VhcmNoLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgQmlTZWFyY2hBbHQgfSBmcm9tICdyZWFjdC1pY29ucy9iaSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2VhcmNoQmFyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaENvbnRhaW5lcn0+XHJcbiAgICAgIDxCaVNlYXJjaEFsdCAvPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBoZXJlXCIvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9oZWFkZXIubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSAnLi9TZWFyY2hCYXInXHJcbmltcG9ydCB7IENhcnRJY29uLCBGYXZvcml0ZXNJY29uLCBMb2dpbkljb24gfSBmcm9tICcuL0ljb25zJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJDb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckNvbnRlbnR9PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IHNyYz1cIi9pbWFnZXMvbG9nby5wbmdcIiBhbHQ9XCJsb2dvXCIgLz5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJNYW5hZ2VyfT5cclxuICAgICAgICAgIDxTZWFyY2hCYXIgLz5cclxuICAgICAgICAgIDxDYXJ0SWNvbiBkYXRhLXRlc3RpZD1cImNhcnQtaWNvblwiLz5cclxuICAgICAgICAgIDxGYXZvcml0ZXNJY29uIGRhdGEtdGVzdGlkPVwiZmF2XCIvPlxyXG4gICAgICAgICAgPExvZ2luSWNvbiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdWJoZWFkZXIubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFN1YkhlYWRlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdWJoZWFkZXJDb250YWluZXJ9PlxyXG4gICAgICA8TGluayBocmVmPVwiL2NhdGVnb3JpZXMvcHJvZHV0b3NcIj5cclxuICAgICAgICA8YT5cclxuICAgICAgICAgIFNwb3J0c1xyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8cD5FbGVjdHJvbmljczwvcD5cclxuICAgICAgPHA+Q2F0ZWdvcnkgMzwvcD5cclxuICAgICAgPHA+Q2F0ZWdvcnkgNDwvcD5cclxuICAgICAgPHA+Q2F0ZWdvcnkgNTwvcD5cclxuICAgICAgPHA+Q2F0ZWdvcnkgNjwvcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5cclxuaW50ZXJmYWNlIENhcnRQcm92aWRlclByb3BzIHtcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2FydENvbnRleHREYXRhIHtcclxuICBjYXJ0OiBQcm9kdWN0W107XHJcbiAgYWRkUHJvZHVjdFRvQ2FydDogKHByb2R1Y3Q6IFByb2R1Y3QpID0+IFByb21pc2U8dm9pZD47XHJcbiAgcmVtb3ZlUHJvZHVjdDogKHByb2R1Y3RJZDogbnVtYmVyKSA9PiB2b2lkO1xyXG4gIHVwZGF0ZVByb2R1Y3RBbW91bnQ6ICh7IHByb2R1Y3QsIG5ld0Ftb3VudCB9OiBVcGRhdGVQcm9kdWN0QW1vdW50KSA9PiB2b2lkO1xyXG4gIGNsZWFyQ2FydDogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuaW50ZXJmYWNlIFVwZGF0ZVByb2R1Y3RBbW91bnQge1xyXG4gIHByb2R1Y3Q6IFByb2R1Y3Q7XHJcbiAgbmV3QW1vdW50OiBudW1iZXI7XHJcbn1cclxuXHJcblxyXG5jb25zdCBDYXJ0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ2FydENvbnRleHREYXRhKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDYXJ0UHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBDYXJ0UHJvdmlkZXJQcm9wcykge1xyXG5cclxuICAvLyBDb2RpZ28gUGxhY2Vob2xkZXJcclxuICBjb25zdCBbY2FydCwgc2V0Q2FydF0gPSB1c2VTdGF0ZTxQcm9kdWN0W10+KFtcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIG5hbWU6ICdwcm9kdXRpbTEnLFxyXG4gICAgICB1bmZvcm1hdHRlZFByaWNlOiAxMC45MCxcclxuICAgICAgYW1vdW50OiAyLFxyXG4gICAgICBpbWFnZVVybDogJ2EgaW1hZ2UgdXJsJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIG5hbWU6ICdwcm9kdXRpbTInLFxyXG4gICAgICB1bmZvcm1hdHRlZFByaWNlOiAxMDAuOTAsXHJcbiAgICAgIGFtb3VudDogNSxcclxuICAgICAgaW1hZ2VVcmw6ICdhIGltYWdlIHVybCdcclxuICAgIH0sXHJcbiAgXSlcclxuXHJcbiAgLy8gQ29kaWdvIFBsYWNlaG9sZGVyXHJcbiAgY29uc3QgYWRkUHJvZHVjdFRvQ2FydCA9IGFzeW5jIChwcm9kdWN0OiBQcm9kdWN0KSA9PiB7XHJcbiAgICBjb25zdCB1cGRhdGVkQ2FydCA9IFsuLi5jYXJ0XVxyXG4gICAgdXBkYXRlZENhcnQucHVzaChwcm9kdWN0KVxyXG4gICBcclxuICAgIHNldENhcnQodXBkYXRlZENhcnQpXHJcbiAgfVxyXG5cclxuICAvLyBDb2RpZ28gUGxhY2Vob2xkZXJcclxuICBjb25zdCByZW1vdmVQcm9kdWN0ID0gKHByb2R1Y3RJZDogbnVtYmVyKSA9PiB7XHJcbiAgICBjb25zdCB1cGRhdGVkQ2FydCA9IGNhcnQuZmlsdGVyKHByb2R1Y3QgPT4gcHJvZHVjdC5pZCAhPT0gcHJvZHVjdElkKVxyXG4gICBcclxuICAgIHNldENhcnQodXBkYXRlZENhcnQpXHJcbiAgfVxyXG5cclxuICAvLyBDb2RpZ28gUGxhY2Vob2xkZXJcclxuICBjb25zdCB1cGRhdGVQcm9kdWN0QW1vdW50ID0gYXN5bmMgKHsgcHJvZHVjdCwgbmV3QW1vdW50IH06IFVwZGF0ZVByb2R1Y3RBbW91bnQpID0+IHtcclxuICAgIGNvbnN0IHVwZGF0ZWRDYXJ0ID0gWy4uLmNhcnRdXHJcbiAgICBjb25zdCB0YXJnZXRQcm9kdWN0ID0gdXBkYXRlZENhcnQuZmluZChwID0+IHAuaWQgPT09IHByb2R1Y3QuaWQpXHJcbiAgICB0YXJnZXRQcm9kdWN0LmFtb3VudCA9IG5ld0Ftb3VudFxyXG5cclxuICAgIHNldENhcnQodXBkYXRlZENhcnQpXHJcbiAgfVxyXG5cclxuICAvLyBDb2RpZ28gUGxhY2Vob2xkZXJcclxuICBjb25zdCBjbGVhckNhcnQgPSAoKSA9PiB7fVxyXG5cclxuICBcclxuXHJcbiAgY29uc3QgY29udGV4dFZhbHVlcyA9IHtcclxuICAgIGNhcnQsIGFkZFByb2R1Y3RUb0NhcnQsIHJlbW92ZVByb2R1Y3QsIHVwZGF0ZVByb2R1Y3RBbW91bnQsIGNsZWFyQ2FydFxyXG4gIH1cclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPENhcnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0VmFsdWVzfSA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQ2FydENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2FydCgpOiBDYXJ0Q29udGV4dERhdGEge1xyXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KENhcnRDb250ZXh0KTtcclxuXHJcbiAgcmV0dXJuIGNvbnRleHQ7XHJcbn0iLCJpbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xyXG5pbXBvcnQgeyBTdWJIZWFkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL1N1YkhlYWRlcic7XHJcbmltcG9ydCB7IEJhY2tUb1RvcEJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9ucy9CYWNrVG9Ub3AnO1xyXG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XHJcblxyXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWwuc2Nzcyc7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzfTogQXBwUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8U3ViSGVhZGVyIC8+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPEJhY2tUb1RvcEJ1dHRvbiAvPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYnV0dG9uXCI6IFwiYmFja3RvdG9wX2J1dHRvbl9fMjRlOWtcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZvb3RlckNvbnRhaW5lclwiOiBcImZvb3Rlcl9mb290ZXJDb250YWluZXJfXzJzN1lTXCIsXG5cdFwibG9nb1wiOiBcImZvb3Rlcl9sb2dvX19VaW03NFwiLFxuXHRcImdlbmVyYWxJbmZvXCI6IFwiZm9vdGVyX2dlbmVyYWxJbmZvX19ab3ctZVwiLFxuXHRcImNhdGVnb3JpZXNcIjogXCJmb290ZXJfY2F0ZWdvcmllc19fM3ktSHdcIixcblx0XCJmb2xsb3dVc1wiOiBcImZvb3Rlcl9mb2xsb3dVc19fMjhaSHFcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImljb25Cb2R5XCI6IFwiaWNvbl9pY29uQm9keV9fMTFHdHBcIixcblx0XCJpY29uXCI6IFwiaWNvbl9pY29uX19USlJfOFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic2VhcmNoQ29udGFpbmVyXCI6IFwic2VhcmNoX3NlYXJjaENvbnRhaW5lcl9famE2VkNcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhlYWRlckNvbnRhaW5lclwiOiBcImhlYWRlcl9oZWFkZXJDb250YWluZXJfX2JNeXp2XCIsXG5cdFwiaGVhZGVyQ29udGVudFwiOiBcImhlYWRlcl9oZWFkZXJDb250ZW50X18xS2NqN1wiLFxuXHRcImxvZ29cIjogXCJoZWFkZXJfbG9nb19fMkJpdmZcIixcblx0XCJoZWFkZXJNYW5hZ2VyXCI6IFwiaGVhZGVyX2hlYWRlck1hbmFnZXJfXzExSWYtXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzdWJoZWFkZXJDb250YWluZXJcIjogXCJzdWJoZWFkZXJfc3ViaGVhZGVyQ29udGFpbmVyX18zdEgwVVwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=