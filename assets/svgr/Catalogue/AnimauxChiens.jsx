import * as React from "react";
import { h, w } from "../../../utils/Size";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

function AnimauxChiens(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      width={w(20)}
      height={h(10)}
      {...props}
    >
      <Path
        d="M496.65 86.25a17.4 17.4 0 00-12.45-7.06l-38.08-3.55-4.29-11.44A16 16 0 00431 54.39l-49.6-13.23a15.89 15.89 0 00-10 .64l-.4.2-49.84 21.31a8 8 0 00-2 13.48l11.68 9.79-10.35 25a90.1 90.1 0 01-80.21 55.49l-127.83 4.11L100 160.44a30 30 0 01-8.58-33.14l3.5-9.45A19.81 19.81 0 0058.3 102.7l-2.11 4.61a87.9 87.9 0 006.36 84.89c-10 8.21-18.32 19.4-20.75 34.46-4.65 28.83-6.56 83.6-7.29 113.68a15.52 15.52 0 01-9.1 13.71 31.4 31.4 0 00-18.12 23.5L.35 419.18a25.94 25.94 0 0025.59 30.2H50.6a15 15 0 0014.92-16.67 30.62 30.62 0 00-18.45-24.79 54 54 0 0127.12-23.64 79 79 0 0042.15-39.56l21.15-44.46c6.79-3.16 29.92-11.83 63.54-2.22 13.62 3.89 26.52 8.23 39 12.44 23.3 7.84 42.57 14.31 57.27 14.71 2.19 37.37 3.7 80.31.51 93-2.33 9.32-1.29 17.68 3.07 24.86 7.34 12.09 21.25 15.7 22.81 16.07a7.76 7.76 0 001.86.22H344a14.71 14.71 0 0014.09-18.94 39 39 0 00-20.33-23.94l26.14-92a103.75 103.75 0 0026.62-50l25-115.46c10.38-2.56 24.95-5.32 42.61-8.06a46.8 46.8 0 0038.28-36l3.21-14.65a17.38 17.38 0 00-2.97-14.04zM365.46 61.73l-1.71 27.43a2 2 0 01-3.25 1.4l-21.08-17.67zM70.73 114l2.12-4.61a3.81 3.81 0 015.33-1.73 3.79 3.79 0 011.7 4.65l-3.51 9.44a46.09 46.09 0 0013.17 50.86l3.53 3a115.71 115.71 0 00-17.24 7.66 71.93 71.93 0 01-5.1-69.27zM484 96.82l-3.21 14.65a30.71 30.71 0 01-25.11 23.62c-21.38 3.32-37.88 6.57-49.07 9.66a26.4 26.4 0 01-19.73-2.43c-10.58-5.87-17.17-9.82-17.24-9.86a8 8 0 00-8.23 13.71c.28.17 6.87 4.12 17.7 10.13a42.25 42.25 0 0019.47 5.36L374.89 271a87.83 87.83 0 01-23.78 43.61 8 8 0 00-2 3.47l-28.75 101.15a8 8 0 005.5 9.87l1.08.31a23.08 23.08 0 0115.26 14h-15.52a26.65 26.65 0 01-8.73-4.71c-4.92-4.17-6.39-9.43-4.6-16.55 6.37-25.52-2.51-135-3.54-147.4a8 8 0 00-8.88-7.28 8.2 8.2 0 00-7 8.93c.68 8.17 1.55 19.72 2.41 32.79-12.34-.81-31.34-7.19-51.2-13.87-12.06-4.07-25.74-8.67-39.71-12.66-24.7-7.06-44.84-5.46-58.48-2.3l5.94-12.49a8.22 8.22 0 00-3.42-10.87 8 8 0 00-10.88 3.68l-36.69 77.17a63.11 63.11 0 01-33.65 31.58 70 70 0 00-38.59 37.66l-.95 2.23a8.33 8.33 0 00-.71 4.05 8 8 0 005.59 6.94l5.87 1.84a14.59 14.59 0 0110 11.24H26.23a10.35 10.35 0 01-6.4-2.1 9.94 9.94 0 01-3.69-9.48l6.93-41.62A15.43 15.43 0 0132 368.64a31.61 31.61 0 0018.54-27.91c.58-23.89 2.42-82.59 7.09-111.52 5-30.74 47.69-40.85 53-42L240.81 183a106.13 106.13 0 0094.47-65.36l8.42-20.33 6.53 5.47a18 18 0 0029.48-12.66l2-32.36 45.12 12 2.28 6.07-7.68.51a8.22 8.22 0 00-7.78 8.09 8 8 0 008 7.91h.54a227.13 227.13 0 0136.14.48l24.39 2.26a1.4 1.4 0 011 .58 1.42 1.42 0 01.28 1.16z"
        fill="#4d4d4d"
        data-name="Layer 11"
      />
    </Svg>
  );
}

export default AnimauxChiens;
