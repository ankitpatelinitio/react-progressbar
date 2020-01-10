"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProgressBar;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _core.makeStyles)({
  first50barover50: {
    position: "absolute",
    clip: "rect(0, 5em, 5em, 2.5em)",
    "background-color": function backgroundColor(props) {
      return props.progressSelectedColor;
    },
    "border-radius": "50%",
    width: "5em",
    height: "5em"
  },
  valuebar: {
    position: "absolute",
    clip: "rect(0, 2.5em, 5em, 0)",
    width: "5em",
    height: "5em",
    "border-radius": "50%",
    border: "0.45em solid",
    "border-color": function borderColor(props) {
      return props.progressSelectedColor;
    },
    "box-sizing": "border-box"
  },
  progressSpan: {
    position: "absolute",
    "line-height": "5em",
    width: "5em",
    "text-align": "center",
    display: "block",
    color: function color(props) {
      return props.progressTextColor;
    },
    "z-index": "2"
  },
  progresscircle: {
    "font-size": function fontSize(props) {
      return props.progressTextSize;
    },
    margin: "20px",
    position: "relative",
    padding: "0",
    width: "5em",
    height: "5em",
    "background-color": function backgroundColor(props) {
      return props.progessDeSelectedColor;
    },
    "border-radius": "50%",
    "line-height": "5em",
    "&::after": {
      content: "''",
      border: " none",
      position: " absolute",
      top: " 0.35em",
      left: " 0.35em",
      "text-align": " center",
      display: " block",
      "border-radius": " 50%",
      width: " 4.3em",
      height: " 4.3em",
      "background-color": function backgroundColor(props) {
        return props.progressBgColor;
      }
    }
  },
  lefthalfclipper: {
    "border-radius": "50%",
    width: "5em",
    height: "5em",
    position: "absolute",
    clip: "rect(0, 5em, 5em, 2.5em)"
  },
  lefthalfclipperover50: {
    clip: "rect(auto,auto,auto,auto)"
  },
  first50bar: {
    display: "none"
  }
});

function ProgressBar(props) {
  var _useStyles = useStyles(props),
      first50bar = _useStyles.first50bar,
      first50barover50 = _useStyles.first50barover50,
      valuebar = _useStyles.valuebar,
      progressSpan = _useStyles.progressSpan,
      progresscircle = _useStyles.progresscircle,
      lefthalfclipper = _useStyles.lefthalfclipper,
      lefthalfclipperover50 = _useStyles.lefthalfclipperover50;

  var first50barsclass = "";
  var lefthalfclipperclass = "";
  var progresscircleperclass = "";

  var progress_per = props.percentage ? props.percentage : 0;

  if (progress_per > 50) {
    first50barsclass = first50barover50;
    lefthalfclipperclass = lefthalfclipperover50;
  } else {
    first50barsclass = first50bar;
    lefthalfclipperclass = lefthalfclipper;
  }

  var p_c_bar = Math.round(progress_per * 360 / 100);

  if (progress_per >= 1 && progress_per <= 100) {
    progresscircleperclass = "rotate(" + p_c_bar + "deg)";
  }

  return _react2.default.createElement(
    "div",
    { className: "" + progresscircle },
    _react2.default.createElement(
      "span",
      { className: "" + progressSpan },
      progress_per,
      "%"
    ),
    _react2.default.createElement(
      "div",
      { className: lefthalfclipperclass },
      _react2.default.createElement("div", { className: first50barsclass }),
      _react2.default.createElement("div", {
        className: "" + valuebar,
        style: {
          transform: "" + progresscircleperclass
        }
      })
    )
  );
}

//module.exports = ProgressBar;