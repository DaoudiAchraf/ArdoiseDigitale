import * as React from "react";
import { h, w } from "../../utils/Size";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

function ClientCardBtnCacher(props) {
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
        d="M296.61 250l193.6-189.57a32.61 32.61 0 00-45.64-46.6L250 204.36 55.43 13.83a32.61 32.61 0 00-45.64 46.6L203.39 250 9.79 439.57a32.61 32.61 0 0045.64 46.6L250 295.64l194.57 190.53a32.61 32.61 0 0045.64-46.6z"
        fill="#344e41"
      />
    </Svg>
  );
}

export default ClientCardBtnCacher;
