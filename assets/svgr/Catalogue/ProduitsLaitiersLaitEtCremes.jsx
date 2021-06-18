import * as React from "react";
import { h, w } from "../../../utils/Size";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

function ProduitsLaitiersLaitEtCremes(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      width={w(20)}
      height={h(10)}
      {...props}
    >
      <Path
        d="M476 283.07H308.4a8.35 8.35 0 00-8.38 8.32v.72l15.42 185a25.17 25.17 0 0025 23h102.81a25.17 25.17 0 0024.94-23l15.44-185a8.34 8.34 0 00-7.63-9.04zm-24.44 192.59a8.4 8.4 0 01-8.35 7.65H340.44a8.39 8.39 0 01-8.34-7.65L321.64 349.8h140.41zm11.88-142.55H320.25l-2.78-33.38h148.75zM208.26 87.41V65.57A33.31 33.31 0 00199.92 0H99.78a33.31 33.31 0 00-8.34 65.57v21.84a232.29 232.29 0 00-75.1 171v183.18A58.47 58.47 0 0074.75 500H225a58.47 58.47 0 0058.41-58.41V258.36a232.29 232.29 0 00-75.15-170.95zm-125.17-54a16.69 16.69 0 0116.69-16.72h100.14a16.69 16.69 0 012.22 33.15 8.42 8.42 0 00-2.22-.45H99.78a8.51 8.51 0 00-2.22.45 16.69 16.69 0 01-14.47-16.46zm22.24 64a8.38 8.38 0 002.8-6.25v-24.4h83.44v24.35a8.38 8.38 0 002.8 6.25 215.4 215.4 0 0158.73 86 117.23 117.23 0 01-99.44-7.82A133.25 133.25 0 0056 161.61a215.11 215.11 0 0149.33-64.25zm161.34 344.18A41.77 41.77 0 01225 483.31H74.75A41.77 41.77 0 0133 441.59V258.36a215.11 215.11 0 0114.18-76.71 116.69 116.69 0 0198.21 8.35 133.32 133.32 0 00112.94 9.22 214.78 214.78 0 018.34 59.15zM241.64 283a8.34 8.34 0 00-8.34 8.35v8.34a8.35 8.35 0 0016.69 0v-8.34a8.35 8.35 0 00-8.35-8.35zm0 41.72a8.34 8.34 0 00-8.34 8.35v58.41a8.35 8.35 0 0016.69 0v-58.37a8.35 8.35 0 00-8.35-8.35z"
        fill="#4d4d4d"
        data-name="Layer 2"
      />
    </Svg>
  );
}

export default ProduitsLaitiersLaitEtCremes;