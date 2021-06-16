import * as React from "react";
import { h, w } from "../../utils/Size";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

function InscriptionBtnClient(props) {
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
        d="M159.5 388.91a52.2 52.2 0 1052.2 52.2 52.2 52.2 0 00-52.2-52.2zm0 81.2a29 29 0 1129-29 29 29 0 01-29 29zm220.4-81.2a52.2 52.2 0 1052.19 52.2 52.2 52.2 0 00-52.19-52.2zm0 81.2a29 29 0 1129-29 29 29 0 01-29 29zm117.73-385.7a14.48 14.48 0 00-9.28-4.64l-377.57-5.22-10.44-31.9a53.37 53.37 0 00-49.88-36H11.6a11.6 11.6 0 000 23.2h38.86A30.17 30.17 0 0178.3 50.19L152 272.33l-5.8 13.34a55.66 55.66 0 005.22 50.46 53.92 53.92 0 0043.5 24.36H420.5a11.6 11.6 0 100-23.2H194.88a29.57 29.57 0 01-24.36-13.92 31.86 31.86 0 01-2.9-27.84l4.64-10.44 244.18-25.52a63.8 63.8 0 0055.1-48.72l27.84-116.58a9.88 9.88 0 00-1.75-9.86zm-48.71 121.22a39.45 39.45 0 01-35.38 30.74l-241.28 24.94-53.94-163.56L473.86 103z"
        fill="#fff"
      />
    </Svg>
  );
}

export default InscriptionBtnClient;
