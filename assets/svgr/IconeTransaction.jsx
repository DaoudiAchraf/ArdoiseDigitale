import * as React from "react";
import { h, w } from "../../utils/Size";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

function IconeTransaction(props) {
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
        d="M295.45 95V56C295.45-18.68 0-18.68 0 56v227.71c0 29.38 46 47.69 101.3 54.2-20.23 9.09-33.12 21.33-33.12 36.87v68.3c0 37.37 74.32 56.92 147.73 56.92s147.73-19.55 147.73-56.92v-34.34C433.15 406.83 500 387.45 500 352V147.11C500 99.94 382.28 82.58 295.45 95zM147.73 22.73c80.87 0 125 22.51 125 34.09s-44.13 34.09-125 34.09-125-22.52-125-34.09 44.12-34.09 125-34.09zm-125 65.71c27.57 16.6 76.41 25.2 125 25.2s97.42-8.6 125-25.2v11.29c-39.49 8.76-68.18 24.76-68.18 48v6.72a360.19 360.19 0 01-56.82 4.64c-80.88 0-125-22.51-125-34.09V88.44zm0 68.18c27.57 16.6 76.41 25.2 125 25.2a385.47 385.47 0 0056.81-4.46V234a361.26 361.26 0 01-56.81 4.64c-80.88 0-125-22.52-125-34.09v-47.93zm0 127.47v-47.92c27.57 16.59 76.41 25.19 125 25.19a385.5 385.5 0 0056.81-4.45v56.63a360.06 360.06 0 01-56.81 4.64c-80.88 0-125-22.51-125-34.09zm318.18 159.09c0 11.58-44.12 34.09-125 34.09s-125-22.51-125-34.09v-36.56c27.57 16.6 76.42 25.2 125 25.2 46.5 0 93.31-7.86 121.42-23.09 1.18 0 2.39 0 3.58.09v34.36zm-125-34.09c-80.88 0-125-22.51-125-34.09s44.12-34.09 125-34.09 125 22.52 125 34.09-44.12 34.09-125 34.09zm261.36-56.82c0 11-40.26 31.65-113.63 33.7V375c0-14.2-10.75-25.67-28.08-34.47 5.56.23 11.13.38 16.71.38 48.58 0 97.43-8.6 125-25.2v36.56zm0-68.18c0 11.58-44.12 34.09-125 34.09s-125-22.51-125-34.09v-36.56c27.58 16.6 76.42 25.2 125 25.2s97.43-8.6 125-25.2zm0-68.18c0 11.57-44.12 34.09-125 34.09s-125-22.52-125-34.09v-36.56c27.58 16.6 76.42 25.2 125 25.2s97.43-8.6 125-25.2zm-125-34.09c-80.87 0-125-22.52-125-34.09s44.13-34.09 125-34.09 125 22.51 125 34.09-44.12 34.09-125 34.09z"
        fill="#344e41"
      />
    </Svg>
  );
}

export default IconeTransaction;