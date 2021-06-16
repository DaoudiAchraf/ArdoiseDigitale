import * as React from "react";
import { h, w } from "../../../utils/Size";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

function Animaux(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      width={w(20)}
      height={h(10)}
      {...props}
    >
      <Path
        d="M158.34 225c0-18.7-11-33.34-25-33.34s-25 14.64-25 33.34 11 33.33 25 33.33 25-14.63 25-33.33zM125 225c0-10.18 4.93-16.67 8.33-16.67s8.33 6.49 8.33 16.67-4.93 16.66-8.33 16.66S125 235.18 125 225zm-63.87 57.17c3.48 9.06 9.85 15.35 17.46 17.25a19.5 19.5 0 004.81.6 20.85 20.85 0 0013.72-5.4c10.58-9.15 14.27-28.24 8.43-43.43-3.49-9.07-9.86-15.36-17.46-17.26-6.51-1.62-13.09.08-18.55 4.8C59 247.88 55.27 267 61.13 282.17zm19.33-30.84a4.38 4.38 0 012.88-1.33 2.82 2.82 0 01.71.09c1.72.43 4.19 2.52 5.94 7.08 3.67 9.53 1 20.75-3.78 24.85-1.9 1.65-3.17 1.33-3.58 1.23-1.73-.43-4.2-2.52-5.95-7.07-3.68-9.54-.95-20.75 3.78-24.85zm133.33-54.28c-5.45-4.72-12-6.42-18.54-4.79-7.6 1.9-14 8.19-17.46 17.25-5.85 15.21-2.15 34.28 8.42 43.44a20.85 20.85 0 0013.72 5.4 19.58 19.58 0 004.82-.6c7.6-1.9 14-8.19 17.46-17.25 5.85-15.21 2.16-34.29-8.42-43.45zm-7.13 37.46c-1.75 4.55-4.22 6.64-5.95 7.07-.41.1-1.68.42-3.58-1.23-4.74-4.1-7.46-15.31-3.78-24.85 1.75-4.56 4.22-6.64 5.94-7.07a2.44 2.44 0 01.71-.1 4.52 4.52 0 012.88 1.32c4.73 4.1 7.45 15.32 3.78 24.86zm274 216.15l-21.12-47.2c-5.38-12-19.81-20.13-35.9-20.13h-90.31V141.67a8.5 8.5 0 00-.35-2.4l-24.65-82.16V8.33A8.33 8.33 0 00300 0H33.33A8.33 8.33 0 0025 8.33v48.78L.35 139.27a8.5 8.5 0 00-.35 2.4v350A8.33 8.33 0 008.33 500h483.34a8.33 8.33 0 008.33-8.33V475a25 25 0 00-19.3-24.34zm-36.33-40.4L462.14 450H204.52l17.78-39.74C225 404.22 233.51 400 243 400h180.68c9.48 0 17.99 4.22 20.69 10.26zM291.67 16.67V50h-250V16.67zm-252.14 50H293.8l20 66.66h-30.47a8.34 8.34 0 000 16.67h33.34v233.33H243c-16.09 0-30.52 8.09-35.9 20.13L186.27 450H16.67V150h41.66a8.34 8.34 0 100-16.67h-38.8zm-22.86 400H168.1a24.85 24.85 0 00-1.43 8.33v8.33h-150zm466.66 16.66h-300V475a8.35 8.35 0 018.34-8.33H475a8.33 8.33 0 018.33 8.33zM91.67 150H250a8.34 8.34 0 000-16.67H91.67a8.34 8.34 0 100 16.67zm120.84 150a43.08 43.08 0 00-4.4.23c-2.2-18.84-19.94-33.56-41.44-33.56s-39.24 14.72-41.44 33.56a42.88 42.88 0 00-4.39-.23c-20.68 0-37.5 14.95-37.5 33.33s16.82 33.34 37.5 33.34c17.82 0 32.77-11.1 36.57-25.94a46.62 46.62 0 0018.53 0c3.79 14.83 18.75 25.94 36.57 25.94 20.67 0 37.5-15 37.5-33.34S233.18 300 212.51 300zm0 50c-11.49 0-20.84-7.48-20.84-16.67a13.56 13.56 0 01.25-2.53 8.33 8.33 0 00-12-9 29.13 29.13 0 01-26.41 0 8.34 8.34 0 00-12.05 9 12.77 12.77 0 01.25 2.53c0 9.19-9.34 16.67-20.83 16.67S100 342.53 100 333.34s9.34-16.66 20.83-16.66a24.77 24.77 0 0110.07 2.1 8.33 8.33 0 0011.42-9.87 17.59 17.59 0 01-.66-4.73c0-11.49 11.22-20.84 25-20.84s25 9.35 25 20.84a17.33 17.33 0 01-.66 4.74 8.34 8.34 0 0011.43 9.86 24.74 24.74 0 0110.07-2.1c11.48 0 20.83 7.47 20.83 16.66S224 350 212.51 350zm32.74-116.08c-7.6 1.9-14 8.19-17.46 17.25-5.85 15.2-2.15 34.29 8.42 43.44a20.9 20.9 0 0013.73 5.4 20 20 0 004.81-.6c7.61-1.9 14-8.19 17.46-17.25 5.86-15.21 2.16-34.29-8.42-43.45-5.45-4.71-12-6.42-18.54-4.79zm11.41 42.25c-1.75 4.56-4.22 6.64-6 7.07-.41.11-1.68.42-3.59-1.23-4.73-4.09-7.45-15.31-3.77-24.85 1.75-4.56 4.22-6.64 5.94-7.07a2.83 2.83 0 01.71-.1 4.42 4.42 0 012.88 1.32c4.74 4.11 7.45 15.32 3.78 24.86zm-148.33 140.5H75a8.33 8.33 0 000 16.66h33.33a8.33 8.33 0 100-16.66zm-66.66 0a8.33 8.33 0 11-8.34 8.33 8.33 8.33 0 018.34-8.33z"
        fill="#4d4d4d"
        data-name="Layer 11"
      />
    </Svg>
  );
}

export default Animaux;
