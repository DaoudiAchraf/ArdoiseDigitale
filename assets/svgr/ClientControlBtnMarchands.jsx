import * as React from "react";
import { h, w } from "../../utils/Size";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

function ClientControlBtnMarchands(props) {
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
        d="M250 202.15a85 85 0 10-85-85 85.05 85.05 0 0085 85zm0-140.63a55.67 55.67 0 11-55.66 55.67A55.73 55.73 0 01250 61.52zm171.87 140.63a53.71 53.71 0 10-53.71-53.71 53.77 53.77 0 0053.71 53.71zm0-78.13a24.42 24.42 0 11-24.41 24.42A24.45 24.45 0 01421.87 124zm11.82 111.33H411a66.41 66.41 0 00-60.24 38.43 117.91 117.91 0 00-87.14-38.43h-27.3a117.91 117.91 0 00-87.14 38.43A66.4 66.4 0 0089 235.35H66.31C29.75 235.35 0 264.92 0 301.26v106.65a28.69 28.69 0 0028.72 28.61h89.58a34.24 34.24 0 0034.06 31.25h195.28a34.24 34.24 0 0034.06-31.25h88.55A29.72 29.72 0 00500 406.89V301.26c0-36.34-29.75-65.91-66.31-65.91zM29.3 301.26a36.85 36.85 0 0137-36.61H89a36.86 36.86 0 0137 36.61v10c-9.85 25.65-7.82 41-7.82 95.94H29.3zm323.24 132.31a4.91 4.91 0 01-4.9 4.91H152.36a4.91 4.91 0 01-4.9-4.91v-80a89 89 0 0188.89-88.89h27.3a89 89 0 0188.89 88.89zm118.16-26.68c0 .51 5.46.34-88.86.34 0-55.33 2-70.33-7.82-95.94v-10a36.86 36.86 0 0137-36.61h22.66a36.85 36.85 0 0137 36.61zM78.12 202.15a53.71 53.71 0 10-53.71-53.71 53.78 53.78 0 0053.71 53.71zm0-78.13a24.42 24.42 0 11-24.41 24.42A24.45 24.45 0 0178.12 124z"
        fill="#344e41"
      />
    </Svg>
  );
}

export default ClientControlBtnMarchands;