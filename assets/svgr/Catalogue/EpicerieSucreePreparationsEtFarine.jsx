import * as React from "react";
import { h, w } from "../../../utils/Size";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

function EpicerieSucreePreparationsEtFarine(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      width={w(20)}
      height={h(10)}
      {...props}
    >
      <Path
        d="M500 121a8 8 0 00-1.21-4.28l-39.11-62.58V8.06A8.06 8.06 0 00451.61 0H274.19a8.06 8.06 0 00-8.06 8.06v45.36l-54.45 62.24a7.92 7.92 0 00-1.92 5.31h-.08v57.7A112.44 112.44 0 0099.07 228l-10.41 15.6C54.06 250.67 0 266.77 0 298.39a169.19 169.19 0 0072.58 138.78v6.38c0 32.18 52 56.45 121 56.45h217.71a7.8 7.8 0 004.08-1.27l.07.12 36.17-21.7 36.17 21.7a8.16 8.16 0 004.16 1.15 8.07 8.07 0 008.06-8.06V121zm-22.59-8.07h-51.57l25.77-41.23zm-33.86 350.25l-24.2 14.51V129h24.2zm-161.29-447h161.29v32.21H282.26zM112.49 236.93a97.42 97.42 0 01162.11 0l59.7 89.54c-30.53 11.39-78.93 20.3-140.75 20.3s-110.23-8.91-140.75-20.3zm236.8 82.95l-37.84-56.77C352.4 273.65 371 287.89 371 298.39c0 6.72-7.67 14.33-21.71 21.49zM371 271.16c-18.74-14.36-49.91-22.94-72.53-27.56L288 228a113.41 113.41 0 00-30-30.42v-4h113zm-295.32-8l-37.87 56.72c-14-7.16-21.68-14.77-21.68-21.49 0-10.51 18.59-24.74 59.52-35.27zM19 327.48c33.34 23.17 105.53 35.42 174.57 35.42s141.22-12.25 174.56-35.42c-13.63 70.62-75.84 124.13-150.37 124.13h-48.41c-74.53 0-136.73-53.52-150.35-124.13zm70.4 120.13a168.15 168.15 0 0079.95 20.13h48.39a168.19 168.19 0 0080-20.13c-5.54 17.91-46.72 36.26-104.15 36.26S94.94 465.52 89.4 447.61zm313.83 36.26H279.82c21.66-10.09 34.7-24.22 34.7-40.32v-6.38c43.8-30.65 72.58-81.38 72.58-138.78V185.48a8.06 8.06 0 00-8.07-8.06H250a8.06 8.06 0 00-8.06 8.06v3a112.65 112.65 0 00-16.13-6.17V129h177.42zm-167.71-371l42.33-48.38h159.21l-30.24 48.41zm224.16 350.31V129h24.19v348.69zM217.74 225.81h16.13v16.13h-16.13zM137.1 250h16.13v16.13H137.1zm48.38 48.39h16.13v16.13h-16.13zm72.58-16.13h16.13v16.13h-16.13zM96.77 298.39h16.13v16.13H96.77z"
        fill="#4d4d4d"
        data-name="Layer 3"
      />
    </Svg>
  );
}

export default EpicerieSucreePreparationsEtFarine;
