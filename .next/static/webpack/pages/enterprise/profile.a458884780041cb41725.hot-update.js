webpackHotUpdate_N_E("pages/enterprise/profile",{

/***/ "./pages/enterprise/profile.js":
/*!*************************************!*\
  !*** ./pages/enterprise/profile.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var variables_variable_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! variables/variable.js */ "./variables/variable.js");
/* harmony import */ var variables_variable_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(variables_variable_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var layouts_Enterprise_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! layouts/Enterprise.js */ "./layouts/Enterprise.js");
/* harmony import */ var components_Headers_EnterpriseHeader_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Headers/EnterpriseHeader.js */ "./components/Headers/EnterpriseHeader.js");







var _jsxFileName = "C:\\Users\\Saad\\Desktop\\WebPortal\\WEB-Portal-VIT-Help\\pages\\enterprise\\profile.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






 // reactstrap components

 // layout for this page

 // core components



var Profile = function Profile(_ref) {
  _s();

  var sam = _ref.sam;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(false),
      _React$useState2 = Object(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_React$useState, 2),
      modalDefaultOpen = _React$useState2[0],
      setModalDefaultOpen = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(undefined),
      _React$useState4 = Object(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_React$useState3, 2),
      orgData = _React$useState4[0],
      setOrgData = _React$useState4[1];

  var loadOrgData = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
      return C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setTimeout(function () {
                setOrgData(JSON.parse(localStorage.getItem("vh-org")));
              }, 5000);

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function loadOrgData() {
      return _ref2.apply(this, arguments);
    };
  }();

  react__WEBPACK_IMPORTED_MODULE_5___default.a.useEffect(loadOrgData, []);

  var updateOrg = /*#__PURE__*/function () {
    var _ref3 = Object(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(event) {
      var postData, postResponse;
      return C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              event.preventDefault();
              console.log(event);
              postData = _objectSpread(_objectSpread({}, event.target[0].value && {
                NameofOrg: event.target[0].value
              }), event.target[2].value && {
                Email: event.target[2].value
              });
              _context2.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.patch("http://localhost:3001/data/enterprise/".concat(orgData.NameofOrg), postData);

            case 5:
              postResponse = _context2.sent;
              console.log(postResponse.data);

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function updateOrg(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Headers_EnterpriseHeader_js__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Form"], {
      role: "form",
      onSubmit: updateOrg,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        form: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
          md: 6,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
              children: "Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
              type: "text",
              name: "name",
              id: "nameOfOrganization",
              placeholder: orgData ? orgData.NameofOrg : "NameofOrg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
          md: 6,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
              children: "Type"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
              type: "text",
              name: "type",
              id: "typeOfOrganization",
              placeholder: "Type Of Organization"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
          md: 6,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
              "for": "exampleAddress",
              children: "Address"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
              type: "text",
              name: "address",
              id: "addressOfOrganization",
              placeholder: orgData ? orgData.Email : "address"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        color: "warning",
        type: "submit" //onClick={updateOrg}
        ,
        children: "Update Details"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Profile, "J0vYQUi4AeqMvKXQlyo0wT8y4+Y=");

_c = Profile;
Profile.layout = layouts_Enterprise_js__WEBPACK_IMPORTED_MODULE_10__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Profile);

var _c;

$RefreshReg$(_c, "Profile");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW50ZXJwcmlzZS9wcm9maWxlLmpzIl0sIm5hbWVzIjpbIlByb2ZpbGUiLCJzYW0iLCJSZWFjdCIsInVzZVN0YXRlIiwibW9kYWxEZWZhdWx0T3BlbiIsInNldE1vZGFsRGVmYXVsdE9wZW4iLCJ1bmRlZmluZWQiLCJvcmdEYXRhIiwic2V0T3JnRGF0YSIsImxvYWRPcmdEYXRhIiwic2V0VGltZW91dCIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VFZmZlY3QiLCJ1cGRhdGVPcmciLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInBvc3REYXRhIiwidGFyZ2V0IiwidmFsdWUiLCJOYW1lb2ZPcmciLCJFbWFpbCIsImF4aW9zIiwicGF0Y2giLCJwb3N0UmVzcG9uc2UiLCJkYXRhIiwibGF5b3V0IiwiRW50ZXJwcmlzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0NBeUJBOztDQUVBOztBQUNBOztBQUdBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQVc7QUFBQTs7QUFBQSxNQUFUQyxHQUFTLFFBQVRBLEdBQVM7O0FBQUEsd0JBQ3VCQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUR2QjtBQUFBO0FBQUEsTUFDbEJDLGdCQURrQjtBQUFBLE1BQ0FDLG1CQURBOztBQUFBLHlCQUdLSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWVHLFNBQWYsQ0FITDtBQUFBO0FBQUEsTUFHbEJDLE9BSGtCO0FBQUEsTUFHVEMsVUFIUzs7QUFJekIsTUFBTUMsV0FBVztBQUFBLCtUQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbEJDLHdCQUFVLENBQUMsWUFBTTtBQUNmRiwwQkFBVSxDQUFDRyxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsWUFBWSxD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Z0JBQUUsRUFBQyx1QkFBckM7QUFBNkQseUJBQVcsRUFBRWpCLE9BQU8sR0FBR0EsT0FBTyxDQUFDa0IsS0FBWCxHQUFpQjtBQUFsRztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFxQkkscUVBQUMsaURBQUQ7QUFDRSxhQUFLLEVBQUMsU0FEUjtBQUVFLFlBQUksRUFBQyxRQUZQLENBR0U7QUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXJCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBLGtCQURGO0FBb0NELENBM0REOztHQUFNekIsTzs7S0FBQUEsTztBQTZETkEsT0FBTyxDQUFDOEIsTUFBUixHQUFpQkMsOERBQWpCO0FBRWUvQixzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lbnRlcnByaXNlL3Byb2ZpbGUuYTQ1ODg4NDc4MDA0MWNiNDE3MjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29sLCBGb3JtLCBGb3JtR3JvdXAsIExhYmVsLCBGb3JtVGV4dCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBEYXRhIGZyb20gXCJ2YXJpYWJsZXMvdmFyaWFibGUuanNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuLy8gcmVhY3RzdHJhcCBjb21wb25lbnRzXHJcbmltcG9ydCB7XHJcbiAgQmFkZ2UsXHJcbiAgQ2FyZCxcclxuICBDYXJkSGVhZGVyLFxyXG4gIENhcmRGb290ZXIsXHJcbiAgRHJvcGRvd25NZW51LFxyXG4gIERyb3Bkb3duSXRlbSxcclxuICBVbmNvbnRyb2xsZWREcm9wZG93bixcclxuICBEcm9wZG93blRvZ2dsZSxcclxuICBNZWRpYSxcclxuICBQYWdpbmF0aW9uLFxyXG4gIFBhZ2luYXRpb25JdGVtLFxyXG4gIFBhZ2luYXRpb25MaW5rLFxyXG4gIFByb2dyZXNzLFxyXG4gIFRhYmxlLFxyXG4gIElucHV0LFxyXG4gIElucHV0R3JvdXBBZGRvbixcclxuICBJbnB1dEdyb3VwVGV4dCxcclxuICBJbnB1dEdyb3VwLFxyXG4gIENvbnRhaW5lcixcclxuICBSb3csXHJcbiAgTW9kYWwsXHJcbiAgVW5jb250cm9sbGVkVG9vbHRpcCxcclxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG4vLyBsYXlvdXQgZm9yIHRoaXMgcGFnZVxyXG5pbXBvcnQgRW50ZXJwcmlzZSBmcm9tIFwibGF5b3V0cy9FbnRlcnByaXNlLmpzXCI7XHJcbi8vIGNvcmUgY29tcG9uZW50c1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCJjb21wb25lbnRzL0hlYWRlcnMvRW50ZXJwcmlzZUhlYWRlci5qc1wiO1xyXG5cclxuXHJcbmNvbnN0IFByb2ZpbGUgPSAoe3NhbX0pID0+IHtcclxuICBjb25zdCBbbW9kYWxEZWZhdWx0T3Blbiwgc2V0TW9kYWxEZWZhdWx0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFtvcmdEYXRhLCBzZXRPcmdEYXRhXSA9IFJlYWN0LnVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgY29uc3QgbG9hZE9yZ0RhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0T3JnRGF0YShKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidmgtb3JnXCIpKSk7XHJcbiAgICB9LCA1MDAwKTtcclxuICB9XHJcbiAgUmVhY3QudXNlRWZmZWN0KGxvYWRPcmdEYXRhLCBbXSk7XHJcblxyXG4gIGNvbnN0IHVwZGF0ZU9yZyA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgIGNvbnN0IHBvc3REYXRhID0ge1xyXG4gICAgICAuLi4oZXZlbnQudGFyZ2V0WzBdLnZhbHVlKSAmJiB7TmFtZW9mT3JnOiBldmVudC50YXJnZXRbMF0udmFsdWV9LFxyXG4gICAgICAvLy4uLihldmVudC50YXJnZXRbMV0udmFsdWUpICYmIHtwaG9uZU51bWJlcjogZXZlbnQudGFyZ2V0WzFdLnZhbHVlfSxcclxuICAgICAgLi4uKGV2ZW50LnRhcmdldFsyXS52YWx1ZSkgJiYge0VtYWlsOiBldmVudC50YXJnZXRbMl0udmFsdWV9LFxyXG4gICAgfVxyXG4gICAgY29uc3QgcG9zdFJlc3BvbnNlID0gYXdhaXQgYXhpb3MucGF0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9kYXRhL2VudGVycHJpc2UvJHtvcmdEYXRhLk5hbWVvZk9yZ31gLCBwb3N0RGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZyhwb3N0UmVzcG9uc2UuZGF0YSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICB7LyogUGFnZSBjb250ZW50ICovfVxyXG5cclxuICAgICAgPEZvcm0gcm9sZT1cImZvcm1cIiBvblN1Ym1pdD17dXBkYXRlT3JnfT5cclxuICAgICAgICAgIDxSb3cgZm9ybT5cclxuICAgICAgICAgICAgPENvbCBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCA+TmFtZTwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIGlkPVwibmFtZU9mT3JnYW5pemF0aW9uXCIgcGxhY2Vob2xkZXI9e29yZ0RhdGEgPyBvcmdEYXRhLk5hbWVvZk9yZzpcIk5hbWVvZk9yZ1wifS8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIG1kPXs2fT5cclxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsID5UeXBlPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0eXBlXCIgaWQ9XCJ0eXBlT2ZPcmdhbml6YXRpb25cIiBwbGFjZWhvbGRlcj1cIlR5cGUgT2YgT3JnYW5pemF0aW9uXCIgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sIG1kPXs2fT5cclxuICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJleGFtcGxlQWRkcmVzc1wiPkFkZHJlc3M8L0xhYmVsPlxyXG4gICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYWRkcmVzc1wiIGlkPVwiYWRkcmVzc09mT3JnYW5pemF0aW9uXCIgcGxhY2Vob2xkZXI9e29yZ0RhdGEgPyBvcmdEYXRhLkVtYWlsOlwiYWRkcmVzc1wifS8+XHJcbiAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNvbG9yPVwid2FybmluZ1wiXHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAvL29uQ2xpY2s9e3VwZGF0ZU9yZ31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgVXBkYXRlIERldGFpbHNcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcblByb2ZpbGUubGF5b3V0ID0gRW50ZXJwcmlzZTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=