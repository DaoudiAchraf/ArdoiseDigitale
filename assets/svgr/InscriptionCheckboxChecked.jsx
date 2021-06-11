import * as React from "react";
import { h, w } from "../../utils/Size";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

function InscriptionCheckboxChecked(props) {
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
        d="M322.83 250L484.92 87.91a51.5 51.5 0 00-72.83-72.83L250 177.17 87.91 15.08a51.5 51.5 0 00-72.83 72.83L177.17 250 15.08 412.09a51.5 51.5 0 0072.83 72.83L250 322.83l162.09 162.09a51.5 51.5 0 0072.83-72.83z"
        fill="gray"
      />
    </Svg>
  );
}

export default InscriptionCheckboxChecked;
