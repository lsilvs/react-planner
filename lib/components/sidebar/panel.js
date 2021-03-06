"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Panel;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STYLE = { borderTop: "1px solid #222222", borderBottom: "1px solid #48494E" };
var STYLE_TITLE = {
  fontSize: "11px",
  color: "#EBEBEB",
  padding: "5px 0 8px 15px",
  backgroundColor: "#2E2F33",
  textShadow: "-1px -1px 2px rgba(0, 0, 0, 1)",
  boxShadow: "inset 0px -3px 19px 0px rgba(0,0,0,0.5)",
  margin: "0px"
};
var STYLE_CONTENT = {
  fontSize: "11px",
  color: "#EBEBEB",
  border: "1px solid #222222",
  padding: "0px",
  backgroundColor: "#2E2F33",
  textShadow: "-1px -1px 2px rgba(0, 0, 0, 1)"
};

function Panel(_ref) {
  var name = _ref.name,
      children = _ref.children;

  return _react2.default.createElement(
    "div",
    { style: STYLE },
    _react2.default.createElement(
      "h3",
      { style: STYLE_TITLE },
      name
    ),
    _react2.default.createElement(
      "div",
      { style: STYLE_CONTENT },
      children
    )
  );
}