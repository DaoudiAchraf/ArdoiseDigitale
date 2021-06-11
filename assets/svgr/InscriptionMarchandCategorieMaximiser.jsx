import * as React from "react";
import { h, w } from "../../utils/Size";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

function InscriptionMarchandCategorieMaximiser(props) {
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
        d="M470 220H280V30a30 30 0 10-60 0v190H30a30 30 0 100 60h190v190a30 30 0 1060 0V280h190a30 30 0 000-60z"
        fill="#4d4d4d"
      />
    </Svg>
  );
}

export default InscriptionMarchandCategorieMaximiser;
