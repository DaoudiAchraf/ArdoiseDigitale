import * as React from "react";
import { h, w } from "../../../utils/Size";
import Svg, { G, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

function MinifiedLogoWhite(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 250 214.03"
      width={w(20)}
      height={h(10)}
      {...props}
    >
      <G data-name="Layer 2">
        <Path
          d="M186.37 88.47a413.43 413.43 0 00-61.87-4.8 408.2 408.2 0 00-63.63 4.8 6.44 6.44 0 00-4.59 3 6.61 6.61 0 00-.7 5.43l22 61.07a6.61 6.61 0 006.3 4.6h79.39a6.61 6.61 0 006.3-4.6v-.17l22-60.9a6.6 6.6 0 00-.7-5.43 6.44 6.44 0 00-4.5-3zm-15.62 25.93c-2.45 24.47-20.4 40-47.14 40s-44.68-15.49-47.13-40a7.53 7.53 0 1110-.48c2.1 19.14 15.62 30.39 37.09 30.39s35-11.25 37.1-30.39a7.58 7.58 0 1110 .48zm-10.16-39.13c-2.35-18.72-15.8-29.73-37-29.73s-34.63 11-37 29.74c12.63-1.11 25.31-1.67 37.9-1.66 12.04.03 24.1.59 36.1 1.65zM229.88 71c-4.33-7.81-28.63-49.89-78-65.17C99.32-10.5 31.1 7.63 8 59.66c-17 38.16-1.7 76.52-.2 80.12 22.65 54.44 84.17 67.16 100 70.44 40.32 8.34 113.27 6.47 135.79-42.06 18.29-39.48-7.67-86.32-13.71-97.16zm-28.69 29.13l-.06.17-22 60.92a16.59 16.59 0 01-15.83 11.48H83.92a16.59 16.59 0 01-15.83-11.48L46 100.08a16.65 16.65 0 0113.3-21.54q8.49-1.31 17.06-2.26c2.14-24.93 20.23-40.79 47.21-40.79s45.08 15.86 47.21 40.79q8.58 1 17.07 2.26a16.65 16.65 0 0113.3 21.54z"
          fill="#fff"
          data-name="Layer 7"
        />
      </G>
    </Svg>
  );
}

export default MinifiedLogoWhite;