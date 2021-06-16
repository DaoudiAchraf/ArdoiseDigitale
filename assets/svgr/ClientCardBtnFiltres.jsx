import * as React from "react";
import { h, w } from "../../utils/Size";
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

function ClientCardBtnFiltres(props) {
  return (
    <Svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      width={w(20)}
      height={h(10)}
      {...props}
    >
      <Defs>
        <ClipPath id="prefix__a">
          <Path fill="none" d="M-520 0h500v500h-500z" />
        </ClipPath>
      </Defs>
      <Path
        d="M471.33 49.31H195.78a77.05 77.05 0 00-143.08 0h-24a28.67 28.67 0 000 57.34h24a77 77 0 00143.08 0h275.55a28.67 28.67 0 100-57.34zm-347.09 60.53A31.86 31.86 0 11156.1 78a31.86 31.86 0 01-31.86 31.84zm347.09 111.49H321.54a77 77 0 00-143.08 0H28.67a28.67 28.67 0 000 57.34h149.79a77 77 0 00143.08 0h149.79a28.67 28.67 0 100-57.34zM250 281.86A31.86 31.86 0 11281.86 250 31.85 31.85 0 01250 281.86zm221.33 111.49h-24a77 77 0 00-143.08 0H28.67a28.67 28.67 0 000 57.34h275.55a77.05 77.05 0 00143.08 0h24a28.67 28.67 0 100-57.34zm-95.57 60.53A31.86 31.86 0 11407.63 422a31.87 31.87 0 01-31.87 31.88z"
        fill="#fff"
      />
      <G clipPath="url(#prefix__a)">
        <Path
          d="M13.68-.95A31.31 31.31 0 00-17.6-32.22h-29.6v-77.69a31.29 31.29 0 00-31.28-31.27h-359.31a31.31 31.31 0 00-31.28 31.27v356.8a31.31 31.31 0 0031.27 31.28h29.61v77.68a31.31 31.31 0 0031.27 31.28H-17.6a31.31 31.31 0 0031.28-31.28zm-20.86 356.8a10.43 10.43 0 01-10.42 10.42h-359.31a10.43 10.43 0 01-10.43-10.42V-.95a10.49 10.49 0 0110.43-10.42H-17.6A10.44 10.44 0 01-7.17-.95zm-98.92-476.18l-278.12 89a31.2 31.2 0 00-24 30.4v258.24h-29.6a10.43 10.43 0 01-10.43-10.42v-356.8a10.44 10.44 0 0110.43-10.42zm-207 88.11l245-78.38v78.38zM-229.3 196H-338a20.18 20.18 0 00-20.16 20.16v100.76A20.18 20.18 0 00-338 337.08h108.7a20.19 20.19 0 0020.16-20.16V216.18A20.18 20.18 0 00-229.3 196zm-.7 120.2h-107.29v-99.33H-230zm20.86-275.28a20.19 20.19 0 00-20.16-20.14H-338a20.18 20.18 0 00-20.16 20.16v100.75A20.18 20.18 0 00-338 161.85h108.7a20.19 20.19 0 0020.16-20.16zM-230 141h-107.29V41.64H-230zm183.2-79.82h-128.85a10.43 10.43 0 00-10.43 10.43A10.43 10.43 0 00-175.65 82H-46.8a10.43 10.43 0 0010.43-10.39A10.43 10.43 0 00-46.8 61.18zm-128.85 60.27h48.2A10.43 10.43 0 00-117 111a10.43 10.43 0 00-10.42-10.43h-48.2A10.43 10.43 0 00-186.08 111a10.43 10.43 0 0010.43 10.45zm139.28 125.39a10.43 10.43 0 00-10.43-10.43h-128.85a10.43 10.43 0 00-10.43 10.43 10.43 10.43 0 0010.43 10.43H-46.8a10.43 10.43 0 0010.43-10.43zm-139.28 29a10.43 10.43 0 00-10.43 10.43 10.43 10.43 0 0010.43 10.43h48.2A10.43 10.43 0 00-117 286.25a10.43 10.43 0 00-10.42-10.43z"
          opacity={0.1}
        />
      </G>
    </Svg>
  );
}

export default ClientCardBtnFiltres;
