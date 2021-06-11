import * as React from "react";
import { h, w } from "../../../utils/Size";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

function ProduitsLaitiersYaourts(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      width={w(20)}
      height={h(10)}
      {...props}
    >
      <Path
        d="M452.85 128.11h-105V36.48a36.47 36.47 0 10-72.94 0v91.63H47.15a8.9 8.9 0 000 17.8h44.26l12.94 294.51a30.62 30.62 0 0029.16 29.29l.06 1.68A29.53 29.53 0 00163.19 500h173.63a29.53 29.53 0 0029.62-28.61l.05-1.68a30.61 30.61 0 0029.16-29.29l12.94-294.51h44.26a8.9 8.9 0 000-17.8zM292.71 36.48a18.68 18.68 0 1137.36 0v91.63h-37.36zm55.94 434.29a11.79 11.79 0 01-11.83 11.43H163.19a11.8 11.8 0 01-11.84-11.43v-1h197.34zm29.22-31.13A12.86 12.86 0 01365 452H135a12.86 12.86 0 01-12.87-12.32l-4.06-92.36a234.61 234.61 0 00253.64 6.59c3.46-2.1 6.86-4.32 10.22-6.61zm5.06-115.09a216.8 216.8 0 01-265.85 0L114.15 258h271.7zm3.7-84.34H113.37l-4.14-94.3h281.55z"
        fill="#4d4d4d"
        data-name="Layer 2"
      />
    </Svg>
  );
}

export default ProduitsLaitiersYaourts;
