"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Lehjah = function Lehjah(_ref) {
  var business_id = _ref.business_id,
    public_key = _ref.public_key,
    token = _ref.token,
    _ref$environment = _ref.environment,
    environment = _ref$environment === void 0 ? 'sandbox' : _ref$environment,
    _ref$variable = _ref.variable1,
    variable1 = _ref$variable === void 0 ? '' : _ref$variable,
    _ref$variable2 = _ref.variable2,
    variable2 = _ref$variable2 === void 0 ? '' : _ref$variable2,
    _ref$variable3 = _ref.variable3,
    variable3 = _ref$variable3 === void 0 ? '' : _ref$variable3,
    _ref$variable4 = _ref.variable4,
    variable4 = _ref$variable4 === void 0 ? '' : _ref$variable4,
    _ref$variable5 = _ref.variable5,
    variable5 = _ref$variable5 === void 0 ? '' : _ref$variable5,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? '100%' : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? '100%' : _ref$height;
  var baseUrl = environment === 'sandbox' ? 'https://sandbox-widget.lehjah.com' : 'https://widget.lehjah.com';
  var iframeSrc = "".concat(baseUrl, "/v1/app/").concat(public_key, "?business_id=").concat(business_id, "&token=").concat(token, "&variable1=").concat(variable1, "&variable2=").concat(variable2, "&variable3=").concat(variable3, "&variable4=").concat(variable4, "&variable5=").concat(variable5);
  return /*#__PURE__*/_react["default"].createElement("iframe", {
    src: iframeSrc,
    width: width,
    height: height,
    style: {
      border: 'none'
    },
    title: "Lehjah"
  });
};
Lehjah.propTypes = {
  business_id: _propTypes["default"].string.isRequired,
  public_key: _propTypes["default"].string.isRequired,
  token: _propTypes["default"].string.isRequired,
  environment: _propTypes["default"].oneOf(['sandbox', 'production']),
  variable1: _propTypes["default"].any,
  variable2: _propTypes["default"].any,
  variable3: _propTypes["default"].any,
  variable4: _propTypes["default"].any,
  variable5: _propTypes["default"].any,
  width: _propTypes["default"].string,
  height: _propTypes["default"].string
};
var _default = exports["default"] = Lehjah;