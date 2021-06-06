import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function FondBtnCommandes(props) {
  return (
    <Svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      width="60em"
      height="60em"
      {...props}
    >
      <Path
        d="M524.6 203.42h-51l-70.92-134a14.81 14.81 0 10-26.17 13.86l63.58 120.1H161.31l63.58-120.1a14.81 14.81 0 10-26.17-13.86l-70.93 134H76.93a28.32 28.32 0 00-28.29 28.29v32.9A28.32 28.32 0 0075 292.82l49.68 206.56a14.8 14.8 0 0014.4 11.35h323.29a14.82 14.82 0 0014.4-11.34l49.79-206.57a28.33 28.33 0 0026.33-28.21v-32.9a28.32 28.32 0 00-28.29-28.29zM78.26 233h445v30.24h-445zM477 372.14h-64.87l9.9-79.25h74.05zm-161.38 109v-79.38h63l-9.91 79.35zm-82.71 0L223 401.76h63v79.35zM105.46 292.89h74.05l9.91 79.25h-64.9zm103.9 0H286v79.25h-66.74zm106.23 79.25v-79.25h76.59l-9.9 79.25zm-183.95 29.62h61.48l9.88 79.35h-52.3zm319.06 79.35h-52.17l9.9-79.35h61.4z"
        opacity={0.1}
        fill="black"
      />
    </Svg>
  );
}

export default FondBtnCommandes;
