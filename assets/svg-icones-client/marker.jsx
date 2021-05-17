import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function MarkerSvg(props) {
  return (
    <Svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      width="25em"
      height="25em"
      {...props}
    >
      <Path
        d="M437.87 187.87C437.87 362.63 250 500 250 500S62.13 362.63 62.13 187.87C62.13 84.11 146.24 0 250 0s187.87 84.11 187.87 187.87zM250 97.77a90.11 90.11 0 1090.1 90.1 90.1 90.1 0 00-90.1-90.1z"
        fill="#344e41"
      />
    </Svg>
  );
}

export default MarkerSvg;
