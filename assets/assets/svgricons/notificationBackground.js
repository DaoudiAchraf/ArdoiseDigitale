import * as React from "react";
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

function notificationBackground(props) {
  return (
    <Svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      width="1em"
      height="1em"
      {...props}
    >
      <Defs>
        <ClipPath id="prefix__a">
          <Path fill="none" d="M0 0h500v500H0z" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#prefix__a)">
        <Path
          d="M514.4 187.78a14.58 14.58 0 01-29.16 0A207.63 207.63 0 00424 40a14.59 14.59 0 0120.63-20.63 236.68 236.68 0 0169.77 168.41zm-398.53 0A207.52 207.52 0 01177.09 40a14.59 14.59 0 00-20.63-20.63 236.58 236.58 0 00-69.75 168.41 14.58 14.58 0 1029.16 0zM495 367.61a34.06 34.06 0 01-34 34h-89a72.91 72.91 0 01-142.87 0h-88.95a34 34 0 01-22.13-59.88A130.26 130.26 0 00164.47 242v-54.22c0-70.11 53.3-128 121.51-135.29V8a14.58 14.58 0 0129.16 0v44.49c68.2 7.29 121.5 65.18 121.5 135.29V242a130.24 130.24 0 0046.23 99.63A34 34 0 01495 367.61zm-153.17 34h-82.51a43.74 43.74 0 0082.47 0zm124-34a4.83 4.83 0 00-1.71-3.7A159.34 159.34 0 01407.48 242v-54.22a106.93 106.93 0 00-213.85 0V242a159.32 159.32 0 01-56.57 121.89 4.84 4.84 0 00-1.75 3.73 4.92 4.92 0 004.87 4.86h320.76a4.92 4.92 0 004.86-4.87z"
          opacity={0.1}
        />
      </G>
    </Svg>
  );
}

export default notificationBackground;
