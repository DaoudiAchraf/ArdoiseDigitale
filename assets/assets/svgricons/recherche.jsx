import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function Recherche(props) {
  return (
    <Svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      width="20em"
      height="20em"
      {...props}
    >
      <Path
        d="M489.35 451.44L383.41 341C447 257.79 441 138.1 365 62.09c-82.77-82.79-217.47-82.79-300.24 0s-82.78 217.46 0 300.24a212.08 212.08 0 00278 19.09l105.17 109.74a28.69 28.69 0 1041.42-39.72zm-384-129.69c-60.4-60.4-60.4-158.68 0-219.08a155.09 155.09 0 01219.08 0c60.4 60.4 60.4 158.68 0 219.08s-158.7 60.41-219.1 0z"
        fill="#344e41"
      />
    </Svg>
  );
}

export default Recherche;
