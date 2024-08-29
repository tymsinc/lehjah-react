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
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? '100%' : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? '100%' : _ref$height;
  var baseUrl = environment === 'sandbox' ? 'https://sandbox-widget.lehjah.com' : 'https://widget.lehjah.com';
  var iframeSrc = "".concat(baseUrl, "/v1/app/").concat(public_key, "?business_id=").concat(business_id, "&token=").concat(token);
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
  width: _propTypes["default"].string,
  height: _propTypes["default"].string
};
var _default = exports["default"] = Lehjah;