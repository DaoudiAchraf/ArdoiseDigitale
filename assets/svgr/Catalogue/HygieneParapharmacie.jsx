import * as React from "react";
import { h, w } from "../../../utils/Size";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

function HygieneParapharmacie(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      width={w(20)}
      height={h(10)}
      {...props}
    >
      <Path
        d="M337.55 235.15h-42v-42a15.33 15.33 0 00-15.23-15.43h-60.6a15.33 15.33 0 00-15.33 15.33v42h-41.84a15.33 15.33 0 00-15.43 15.23v60.59a15.33 15.33 0 0015.33 15.33h42v41.88a15.34 15.34 0 0015.23 15.43h60.49a15.33 15.33 0 0015.33-15.33v-42h42A15.33 15.33 0 00352.88 311v-60.5a15.33 15.33 0 00-15.33-15.35zm-5.25 70.48h-47a10.29 10.29 0 00-10.3 10.29v47h-50v-47a10.29 10.29 0 00-10.29-10.29h-47v-49.9h47A10.29 10.29 0 00225 245.44v-47.12h49.9v47a10.29 10.29 0 0010.29 10.29h47.11zM429 100.79h-84.76V64.58a29.94 29.94 0 00-29-30.89h-128a29.94 29.94 0 00-31.45 28.34c0 .84-.06 1.69 0 2.53v36H71c-32.72 0-71 18.62-71 71v223.78c0 52.37 38.27 71 71 71h358c32.72 0 71-18.62 71-71V171.78c0-52.37-38.17-70.99-71-70.99zM176.34 64.58c0-3 0-11 11-11h125.42c11 0 11 7.92 11 11v36H176.34zm303.08 330.76c0 45.47-35.18 50.41-50.41 50.41H71c-15.13 0-50.41-4.94-50.41-50.41V171.78c0-45.47 35.18-50.41 50.41-50.41h358c15.13 0 50.41 4.94 50.41 50.41v223.56z"
        fill="#4d4d4d"
        data-name="Layer 9"
      />
    </Svg>
  );
}

export default HygieneParapharmacie;
