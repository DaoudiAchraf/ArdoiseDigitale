import * as React from "react";
import { h, w } from "../../utils/Size";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

function InscriptionOk(props) {
  return (
    <Svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      width={w(20)}
      height={h(10)}
      {...props}
    >
      <Path
        d="M168 494.7a23.53 23.53 0 01-19.31-10.09L4.22 277a23.54 23.54 0 0138.65-26.9L168 430 457.15 15.36a23.54 23.54 0 0138.62 26.94L187.28 484.63A23.54 23.54 0 01168 494.7z"
        fill="#324b3e"
      />
    </Svg>
  );
}

export default InscriptionOk;
