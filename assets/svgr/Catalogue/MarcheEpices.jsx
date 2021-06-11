import * as React from "react";
import { h, w } from "../../../utils/Size";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

function MarcheEpices(props) {
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
        d="M364.42 350.06a7.33 7.33 0 100-14.65H52.71a7.33 7.33 0 00-7.33 7.32v71a7.33 7.33 0 007.33 7.32h394.58a7.33 7.33 0 007.33-7.32v-71a7.33 7.33 0 00-7.33-7.32H398.6a7.33 7.33 0 000 14.65H440v56.38H60v-56.38zm121.3-213.66L438 98a42.05 42.05 0 00-18.88-8.57V64.54a17.21 17.21 0 00-14.28-16.92L357.1 9.23a41.83 41.83 0 00-52.42 0L257 47.62a17 17 0 00-7 2.87 17 17 0 00-7-2.87L195.31 9.23a41.81 41.81 0 00-52.41 0L95.17 47.62a17.21 17.21 0 00-14.28 16.92v24.9A42 42 0 0062 98l-47.72 38.4A17.19 17.19 0 000 153.32v130.22A26.86 26.86 0 003.59 297 7.31 7.31 0 000 303.27v149.94a7.33 7.33 0 007.32 7.33h34.11v32.14a7.33 7.33 0 007.33 7.32h39.46a7.32 7.32 0 007.32-7.32v-32.14h20.18a7.33 7.33 0 100-14.65H14.65V310.6h470.7v135.29H149.9a7.33 7.33 0 000 14.65h254.56v32.14a7.32 7.32 0 007.32 7.32h39.46a7.33 7.33 0 007.33-7.32v-32.14h34.11a7.33 7.33 0 007.32-7.33V303.27a7.31 7.31 0 00-3.59-6.29 26.86 26.86 0 003.59-13.44V153.32a17.2 17.2 0 00-14.28-16.92zm-404.83 349H56.08v-24.86h24.81v24.81zm363 0h-24.78v-24.86h24.81zM31.67 192.22a7.33 7.33 0 000-14.65h-17v-24.25a2.54 2.54 0 012.54-2.54h142.05a2.54 2.54 0 012.52 2.52v24.27H65.85a7.33 7.33 0 000 14.65h95.93v91.32a12.42 12.42 0 01-12.4 12.46H27.05a12.42 12.42 0 01-12.4-12.41v-91.37zM240.12 62a2.54 2.54 0 012.54 2.54v24.24H95.54V64.54A2.54 2.54 0 0198.08 62zm161.79 0a2.54 2.54 0 012.54 2.54v24.24H257.32V64.54a2.55 2.55 0 012.55-2.54zm80.89 88.78a2.54 2.54 0 012.54 2.54v24.25H338.22v-24.25a2.54 2.54 0 012.54-2.54zM250 103.43a27.26 27.26 0 0117 6l33.2 26.71H199.77L233 109.43a27.26 27.26 0 0117-6zm73.57 49.89v24.25H176.44V153.3a2.55 2.55 0 012.54-2.52H321a2.54 2.54 0 012.54 2.54zm-147.14 38.9h147.14v91.32A12.43 12.43 0 01311.16 296H188.84a12.43 12.43 0 01-12.41-12.41v-91.37zm161.42-55.82a17 17 0 00-7 2.87 17.05 17.05 0 00-6.95-2.87l-41-33h95.9zm-120.79-33l-41 33a17.05 17.05 0 00-6.95 2.87 16.9 16.9 0 00-7-2.87l-41-33zM473 296H350.62a12.42 12.42 0 01-12.4-12.41v-91.37h147.13v91.32A12.42 12.42 0 01473 296zm-11-159.87H361.55l33.21-26.7a27.15 27.15 0 0134.05 0zM313.87 20.65a27.15 27.15 0 0134.05 0l33.21 26.7H280.66zm-161.79 0a27.15 27.15 0 0134 0l33.21 26.7H118.87zm-80.89 88.78a27.15 27.15 0 0134.05 0l33.21 26.7H38z"
        fill="#4d4d4d"
      />
    </Svg>
  );
}

export default MarcheEpices;
