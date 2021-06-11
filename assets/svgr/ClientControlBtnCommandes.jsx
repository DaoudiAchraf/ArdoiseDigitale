import * as React from "react";
import { h, w } from "../../utils/Size";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

function ClientControlBtnCommandes(props) {
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
        d="M472 168h-50.57L351.1 35.13a14.68 14.68 0 00-26 13.75l63 119.08H111.72l63.05-119.08a14.69 14.69 0 00-26-13.75L78.49 168H28.05A28.09 28.09 0 000 196v32.62a28.08 28.08 0 0026.12 28l49.26 204.81a14.69 14.69 0 0014.28 11.25h320.59a14.69 14.69 0 0014.27-11.24l49.38-204.83a28.08 28.08 0 0026.1-28V196a28.09 28.09 0 00-28-28zM29.37 197.33h441.26v30H29.37zm395.36 137.94h-64.3l9.81-78.58h73.43zm-160 108v-78.63h62.47l-9.82 78.67zm-82 0l-9.83-78.67h62.48v78.67zM56.34 256.69h73.43l9.82 78.58H75.24zm103 0h76v78.58h-66.15zm105.36 78.58v-78.58h75.95l-9.81 78.58zM82.31 364.64h60.95l9.83 78.67h-51.86zm316.37 78.67h-51.74l9.83-78.67h60.88z"
        fill="#344e41"
      />
    </Svg>
  );
}

export default ClientControlBtnCommandes;
