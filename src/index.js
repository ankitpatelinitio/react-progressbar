import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  first50barover50: {
    position: "absolute",
    clip: "rect(0, 5em, 5em, 2.5em)",
    "background-color": props => props.progressSelectedColor,
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
    "border-color": props => props.progressSelectedColor,
    "box-sizing": "border-box"
  },
  progressSpan: {
    position: "absolute",
    "line-height": "5em",
    width: "5em",
    "text-align": "center",
    display: "block",
    color: props => props.progressTextColor,
    "z-index": "2"
  },
  progresscircle: {
    "font-size": props => props.progressTextSize,
    margin: "20px",
    position: "relative",
    padding: "0",
    width: "5em",
    height: "5em",
    "background-color": props => props.progessDeSelectedColor,
    "border-radius": "50%",
    "line-height": "5em",
    "&::after": {
      content: `''`,
      border: " none",
      position: " absolute",
      top: " 0.35em",
      left: " 0.35em",
      "text-align": " center",
      display: " block",
      "border-radius": " 50%",
      width: " 4.3em",
      height: " 4.3em",
      "background-color": props => props.progressBgColor
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

export default function ProgressBar(props) {
  const {
    first50bar,
    first50barover50,
    valuebar,
    progressSpan,
    progresscircle,
    lefthalfclipper,
    lefthalfclipperover50
  } = useStyles(props);

  let first50barsclass = "";
  let lefthalfclipperclass = "";
  let progresscircleperclass = "";

  let progress_per = props.percentage ? props.percentage : 0;

  if (progress_per > 50) {
    first50barsclass = first50barover50;
    lefthalfclipperclass = lefthalfclipperover50;
  } else {
    first50barsclass = first50bar;
    lefthalfclipperclass = lefthalfclipper;
  }

  let p_c_bar = Math.round((progress_per * 360) / 100);

  if (progress_per >= 1 && progress_per <= 100) {
    progresscircleperclass = "rotate(" + p_c_bar + "deg)";
  }

  return (
    <div className={`${progresscircle}`}>
      <span className={`${progressSpan}`}>{progress_per}%</span>
      <div className={lefthalfclipperclass}>
        <div className={first50barsclass}></div>
        <div
          className={`${valuebar}`}
          style={{
            transform: `${progresscircleperclass}`
          }}
        ></div>
      </div>
    </div>
  );
}

//module.exports = ProgressBar;
