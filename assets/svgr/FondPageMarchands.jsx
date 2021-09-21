import * as React from "react";
import { h, w } from "../../utils/Size";
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style, title */

function FondPageMarchands(props) {
  return (
    <Svg
      id="prefix__Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="50 0 500 500"
      width={w(40)}
      height={h(20)}
      {...props}
    >
      <Defs>
        <ClipPath id="prefix__clip-path">
          <Path className="prefix__cls-1" d="M-520 0h500v500h-500z" />
        </ClipPath>
        <ClipPath id="prefix__clip-path-2">
          <Path className="prefix__cls-1" d="M0 0h500v500H0z" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#prefix__clip-path)">
        <Path
          className="prefix__cls-3"
          d="M3.32 128.22h-50.85l-70.79-133.7a14.78 14.78 0 00-20-6.15 14.78 14.78 0 00-6.15 20L-81 128.22h-278.3l63.49-119.87a14.8 14.8 0 00-6.15-20 14.78 14.78 0 00-20 6.15l-70.79 133.7h-50.75a28.27 28.27 0 00-28.24 28.24v32.86a28.28 28.28 0 0026.29 28.16l49.59 206.17A14.78 14.78 0 00-381.49 435h322.7a14.78 14.78 0 0014.37-11.32L5.29 217.45a28.26 28.26 0 0026.27-28.15v-32.84a28.27 28.27 0 00-28.24-28.24zm-445.49 29.57H2V188h-444.17zm398 138.84h-64.72l9.88-79.1h73.91zm-161.12 108.76v-79.2h62.88l-9.89 79.2zm-82.55 0l-9.9-79.2h62.89v79.2zM-415 217.53h73.91l9.89 79.1H-396zm103.7 0h76.47v79.1h-66.58zm106 79.1v-79.1h76.45l-9.88 79.1zm-183.6 29.56h61.36l9.9 79.2h-52.21zm318.46 79.2h-52.08l9.89-79.2h61.28z"
          opacity={0.1}
          fill="black"
        />
      </G>
      <G clipPath="url(#prefix__clip-path-2)">
        <Path
          className="prefix__cls-3"
          d="M300.35 166.08a85.49 85.49 0 10-85.49-85.48 85.58 85.58 0 0085.49 85.48zm0-141.49a56 56 0 11-56 56 56.07 56.07 0 0156-56zm172.94 141.49a54 54 0 10-54-54 54.1 54.1 0 0054 54zm0-78.61A24.57 24.57 0 11448.72 112a24.6 24.6 0 0124.57-24.53zm11.89 112h-22.8a66.82 66.82 0 00-60.62 38.67 118.61 118.61 0 00-87.67-38.67h-27.48a118.61 118.61 0 00-87.67 38.67 66.82 66.82 0 00-60.62-38.67h-22.8c-36.79 0-66.72 29.75-66.72 66.32v107.33a28.87 28.87 0 0028.9 28.79h90.13a34.46 34.46 0 0034.28 31.45h196.48a34.47 34.47 0 0034.28-31.45H522a29.9 29.9 0 0029.9-29.81V265.81c0-36.57-29.93-66.32-66.72-66.32zm-406.9 66.34A37.08 37.08 0 01115.52 229h22.8a37.09 37.09 0 0137.24 36.84v10.06c-9.91 25.81-7.86 41.28-7.86 96.53H78.28zm325.24 133.13a4.94 4.94 0 01-4.93 4.94H202.11a5 5 0 01-4.94-4.94v-80.53A89.54 89.54 0 01286.61 229h27.47a89.54 89.54 0 0189.44 89.44zm118.9-26.84c0 .51 5.5.33-89.42.33 0-55.66 2-70.76-7.86-96.53v-10.09A37.09 37.09 0 01462.38 229h22.8a37.09 37.09 0 0137.24 36.84zm-395-206a54 54 0 10-54-54 54.1 54.1 0 0053.99 53.98zm0-78.61A24.57 24.57 0 11102.84 112a24.59 24.59 0 0124.57-24.53z"
          opacity={0.1}
          fill="black"
        />
      </G>
      <Path
        className="prefix__cls-3"
        d="M334.43-366.33v-37.45c0-71.91-284.3-71.91-284.3 0v219.07c0 28.27 44.25 45.89 97.48 52.15-19.47 8.73-31.87 20.53-31.87 35.48v65.72c0 36 71.51 54.77 142.15 54.77S400 4.59 400-31.36v-33c66.93-1.88 131.25-20.53 131.25-54.64v-197.15c0-45.4-113.25-62.1-196.82-50.18zm-142.15-69.51c77.83 0 120.28 21.66 120.28 32.8s-42.46 32.81-120.28 32.81S72-391.9 72-403s42.46-32.84 120.28-32.84zM72-372.61c26.53 16 73.53 24.25 120.28 24.25s93.75-8.28 120.28-24.25v10.87c-38 8.42-65.61 23.81-65.61 46.18v6.47a346.64 346.64 0 01-54.67 4.46c-77.82 0-120.28-21.66-120.28-32.8v-35.18zM72-307c26.53 16 73.53 24.24 120.28 24.24A370.75 370.75 0 00247-287v54.5a346.64 346.64 0 01-54.67 4.46C114.46-228.09 72-249.75 72-260.89V-307zm0 122.65v-46.11c26.53 16 73.53 24.24 120.28 24.24a370.75 370.75 0 0054.72-4.29V-156a346.62 346.62 0 01-54.67 4.47C114.46-151.54 72-173.21 72-184.35zM378.17-31.26c0 11.13-42.46 32.8-120.28 32.8s-120.28-21.67-120.28-32.8v-35.18c26.53 16 73.53 24.24 120.28 24.24 44.75 0 89.78-7.56 116.83-22.21 1.14 0 2.31 0 3.45.08v33.07zM257.89-64.07c-77.82 0-120.28-21.66-120.28-32.8s42.46-32.81 120.28-32.81S378.17-108 378.17-96.87s-42.46 32.8-120.28 32.8zm251.49-54.67c0 10.58-38.74 30.45-109.34 32.42v-10.55c0-13.66-10.34-24.71-27-33.17 5.35.22 10.71.36 16.08.36 46.75 0 93.75-8.27 120.28-24.24v35.18zm0-65.61c0 11.14-42.45 32.81-120.28 32.81s-120.28-21.67-120.28-32.81v-35.18c26.54 16 73.53 24.25 120.28 24.25s93.75-8.28 120.28-24.25zm0-65.6c0 11.13-42.45 32.8-120.28 32.8s-120.28-21.67-120.28-32.8v-35.18c26.54 16 73.53 24.24 120.28 24.24s93.75-8.27 120.28-24.24zM389.1-282.76c-77.82 0-120.28-21.66-120.28-32.8s42.46-32.8 120.28-32.8 120.28 21.66 120.28 32.8-42.45 32.8-120.28 32.8z"
        opacity={0.1}
        fill="black"
      />
    </Svg>
  );
}

export default FondPageMarchands;
