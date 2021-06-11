import * as React from "react";
import { h, w } from "../../utils/Size";
import Svg, { Defs, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style, title */

function ClientFondBtnCarte(props) {
  return (
    <Svg
      id="prefix__Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      width={w(20)}
      height={h(10)}
      {...props}
    >
      <Defs></Defs>
      <Path
        className="prefix__cls-1"
        d="M-210.22 223.75a93.4 93.4 0 0093.3-93.29 93.4 93.4 0 00-93.3-93.3 93.4 93.4 0 00-93.29 93.3 93.4 93.4 0 0093.29 93.29zm0-154.42a61.2 61.2 0 0161.13 61.13 61.19 61.19 0 01-61.13 61.12 61.19 61.19 0 01-61.12-61.12 61.19 61.19 0 0161.12-61.13zm188.73 154.42a59 59 0 0059-59 59 59 0 00-59-59 59 59 0 00-59 59 59 59 0 0059 59zm0-85.79a26.84 26.84 0 0126.81 26.81 26.84 26.84 0 01-26.81 26.81 26.84 26.84 0 01-26.8-26.81A26.84 26.84 0 01-21.49 138zm13 122.25h-24.9a72.9 72.9 0 00-66.15 42.2 129.48 129.48 0 00-95.69-42.2h-30a129.47 129.47 0 00-95.68 42.2 72.92 72.92 0 00-66.09-42.2h-24.88c-40.15 0-72.81 32.46-72.81 72.37v117.11a31.52 31.52 0 0031.54 31.42h98.36a37.6 37.6 0 0037.4 34.31H-103a37.6 37.6 0 0037.4-34.31h97.24a32.64 32.64 0 0032.66-32.54v-116c0-39.91-32.66-72.37-72.81-72.37zm-444 72.37c0-22.17 18.23-40.2 40.64-40.2H-387c22.41 0 40.64 18 40.64 40.2v11c-10.82 28.17-8.58 45-8.58 105.35h-97.58zm354.87 145.29a5.39 5.39 0 01-5.39 5.38h-214.42a5.38 5.38 0 01-5.38-5.38V390a97.71 97.71 0 0197.6-97.6h30A97.72 97.72 0 01-97.62 390zm129.75-29.3c0 .56 6 .37-97.58.37 0-60.75 2.22-77.23-8.58-105.35v-11c0-22.17 18.23-40.2 40.64-40.2h24.88c22.41 0 40.64 18 40.64 40.2zm-431.08-224.82a59 59 0 0059-59 59 59 0 00-59-59 59 59 0 00-59 59 59 59 0 0059 59zm0-85.79a26.84 26.84 0 0126.81 26.81 26.84 26.84 0 01-26.81 26.81 26.84 26.84 0 01-26.8-26.81 26.84 26.84 0 0126.8-26.77z"
      />
      <Path
        className="prefix__cls-1"
        d="M35.27 258.6v187.57a15.72 15.72 0 009.78 14.53l156 62.4.28.13a15.51 15.51 0 0011.6 0l.28-.13 150.3-60.1L514 523.19a15.69 15.69 0 005.82 1.13 15.65 15.65 0 0015.63-15.63V227.34a15.65 15.65 0 00-9.82-14.51l-156-62.43-.28-.09a15.51 15.51 0 00-11.6 0l-.25.09-93.57 37.45a15.64 15.64 0 0011.6 29.05l72.43-29v247.67l-125 50V321.12a15.64 15.64 0 00-31.27 0v164.5l-125-50v-177a15.63 15.63 0 00-31.26 0zm343.87-70.71l125.05 50v247.7l-125-50zM97.79 133.55a46.89 46.89 0 1046.89-46.89 47 47 0 00-46.89 46.89zm31.26 0a15.63 15.63 0 1115.63 15.63 15.64 15.64 0 01-15.63-15.63zm-93.78 0c0 56.15 87.78 155.59 97.78 166.75a15.63 15.63 0 0023.26 0c10-11.16 97.79-110.6 97.79-166.75a109.42 109.42 0 00-218.83 0zm31.26 0a78.16 78.16 0 01156.31 0c0 29.83-44 92-78.16 132.46-34.13-40.49-78.15-102.66-78.15-132.46z"
      />
    </Svg>
  );
}

export default ClientFondBtnCarte;
