import * as React from "react";
import { h, w } from "../../../utils/Size";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

function BoissonsGazeuses(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      width={w(20)}
      height={h(10)}
      {...props}
    >
      <Path
        d="M47.23 385a28.39 28.39 0 1028.39-28.39A28.42 28.42 0 0047.23 385zm42.13 0a13.74 13.74 0 11-13.74-13.75A13.76 13.76 0 0189.36 385zm22.35-39.14a22.35 22.35 0 10-22.35-22.35 22.38 22.38 0 0022.35 22.31zm0-30.05a7.7 7.7 0 11-7.7 7.7 7.71 7.71 0 017.7-7.74zm78 121.71a22.36 22.36 0 10-22.36 22.35 22.38 22.38 0 0022.31-22.39zm-30.06 0a7.71 7.71 0 117.7 7.71 7.72 7.72 0 01-7.75-7.75zm324.71-123.61A31.25 31.25 0 00453.54 287h-5.19l5-13a7.33 7.33 0 00-13.68-5.26l-7 18.26h-30.5c-1-.49-2.07-1-3.14-1.36-7.61-2.83-11.47-7.25-11.47-13.13 0-5.48 9.26-9.92 13.25-11.58A37.81 37.81 0 00423.49 233c4.92-26.09 7.15-54 8.05-68.31a37.54 37.54 0 00-4.87-21.05c-19.12-33.24-53.76-55.88-65.34-62.81V57.4h.38a7.33 7.33 0 007.29-7.33V23.74A23.77 23.77 0 00345.29 0h-58a23.77 23.77 0 00-23.74 23.74v26.33a7.33 7.33 0 007.33 7.33h.38v23.42a222.34 222.34 0 00-40.87 31.68v-5.14a26.67 26.67 0 00-12.65-50.15H102a26.67 26.67 0 00-12.64 50.15v22.41a241.86 241.86 0 00-61.26 52.06 35.81 35.81 0 00-7.94 18.22c-1.19 9.06-3 23.85-4.72 42.86a7.33 7.33 0 006.63 8h.67a7.33 7.33 0 007.26-6.67c1.72-18.77 3.48-33.35 4.65-42.28a21.49 21.49 0 012.83-8.13h166c1.29 12.18 3.1 25.91 5.59 39.15a37.77 37.77 0 0022.7 28c4 1.65 13.23 6.1 13.23 11.58 0 5.88-3.86 10.3-11.47 13.14A38 38 0 00209 317.72c-2.88 33.18-5 97.37 13.05 154.56a39.48 39.48 0 006.95 12.93c-1.41.09-2.82.14-4.23.14H95a68.16 68.16 0 01-67.77-62.86c-3.35-45.53-3.19-95.74.48-149.22a7.33 7.33 0 00-14.62-1c-3.71 54.18-3.87 105.09-.47 151.31A82.55 82.55 0 0095 500h129.74a83.16 83.16 0 0020.87-2.66A40.19 40.19 0 00260 500h193.54a31.25 31.25 0 0030.82-26.91 584.41 584.41 0 000-159.18zm-9.88 107.27a37.22 37.22 0 11-.48-63.84 571.28 571.28 0 01.48 63.84zm-57.56-257.41c-.7 11.19-2.24 30.88-5.27 51.28H220.94c-3-20.38-4.57-40.08-5.28-51.27a22.85 22.85 0 013-12.85q1.35-2.33 2.8-4.58h189.71c1 1.5 1.91 3 2.8 4.58a22.84 22.84 0 012.95 12.84zM104 110.56h111.74v16.18H104zm174.2-86.82a9.1 9.1 0 019.09-9.09h58a9.1 9.1 0 019.09 9.09v19H278.2zm68.48 33.66v20.33h-60.77V57.4zm-66.17 35h71.56c6.18 3.61 29.42 17.94 48 39.32H232.49c18.6-21.41 41.85-35.72 48.02-39.34zM102 71.86h115.74a12 12 0 010 24H102a12 12 0 010-24zM50.23 179.18a229.56 229.56 0 0148.35-37.79h108.67c-.45.74-.89 1.48-1.33 2.23a37.49 37.49 0 00-4.92 21.07c.25 3.92.6 8.85 1.07 14.49zm403.31 306.17h-86.1a16.56 16.56 0 01-16.22-14.26c-1.15-8.39-2.12-16.84-2.88-25.11a7.33 7.33 0 00-14.59 1.34c.78 8.49 1.78 17.15 3 25.77a31 31 0 004.47 12.26H260a25 25 0 01-24-17.48c-17.29-54.78-15.19-116.79-12.4-148.87a23.27 23.27 0 0115.07-19.62c13.34-5 21-14.77 21-26.86 0-7.23-3.86-17.45-22.25-25.1a23.17 23.17 0 01-13.93-17.14c0-.19-.07-.38-.11-.58h185.83c0 .19-.07.39-.11.58a23.2 23.2 0 01-13.93 17.13c-18.4 7.66-22.26 17.88-22.26 25.11a25.71 25.71 0 004.34 14.48h-9.71a31.26 31.26 0 00-30.83 26.91 584.71 584.71 0 00-4.94 104 7.33 7.33 0 0014.64-.62 569.48 569.48 0 014.81-101.35 16.55 16.55 0 0116.32-14.26h86a16.55 16.55 0 0116.31 14.26q1.69 12.31 2.83 24.68a51.87 51.87 0 10.72 97.38q-1.29 16.6-3.55 33.14a16.55 16.55 0 01-16.31 14.26z"
        fill="#4d4d4d"
        data-name="Layer 10"
      />
    </Svg>
  );
}

export default BoissonsGazeuses;