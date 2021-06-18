import * as React from "react";
import { h, w } from "../../utils/Size";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

function InscriptionMarchandCategorieMinimiser(props) {
  return (
    <Svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      width={w(20)}
      height={h(10)}
      {...props}
    >
      <Path d="M470 280H30a30 30 0 110-60h440a30 30 0 010 60z" fill="#4d4d4d" />
    </Svg>
  );
}

export default InscriptionMarchandCategorieMinimiser;