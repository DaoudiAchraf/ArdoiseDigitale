import * as React from "react";
import { h, w } from "../../utils/Size";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

function InscriptionMarchandProduitSuppressionAttribut(props) {
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
        d="M250 441.41a14.65 14.65 0 0014.65-14.65V190.43a14.65 14.65 0 10-29.3 0v236.33A14.65 14.65 0 00250 441.41zm87.89 0a14.65 14.65 0 0014.65-14.65V190.43a14.65 14.65 0 00-29.3 0v236.33a14.65 14.65 0 0014.65 14.65zm-175.78 0a14.65 14.65 0 0014.65-14.65V190.43a14.65 14.65 0 10-29.3 0v236.33a14.65 14.65 0 0014.65 14.65zM44.92 146.48h44v338.87a14.65 14.65 0 0014.6 14.65h293a14.65 14.65 0 0014.65-14.65V146.48h43.95a14.65 14.65 0 100-29.29h-14.69V73.24a14.65 14.65 0 00-14.65-14.65H323.24V14.65A14.65 14.65 0 00308.59 0H191.41a14.65 14.65 0 00-14.65 14.65v43.94H74.22a14.65 14.65 0 00-14.65 14.65v44H44.92a14.65 14.65 0 100 29.29zM381.84 470.7H118.16V146.48h263.68zM206.05 29.3H294v29.29h-87.9zM88.87 87.89h322.26v29.3H88.87z"
        fill="#4d4d4d"
      />
    </Svg>
  );
}

export default InscriptionMarchandProduitSuppressionAttribut;
