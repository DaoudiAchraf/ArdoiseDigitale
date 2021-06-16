import * as React from "react";
import { h, w } from "../../utils/Size";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

function InscriptionMarchandProduitModification(props) {
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
        d="M359.38 500H57.29A57.34 57.34 0 010 442.69V140.6a57.34 57.34 0 0157.29-57.29h177.08a15.63 15.63 0 110 31.25H57.29a26.08 26.08 0 00-26 26v302.13a26.08 26.08 0 0026 26h302.09a26.08 26.08 0 0026-26V265.6a15.63 15.63 0 0131.25 0v177.09A57.34 57.34 0 01359.38 500zM500 57.27a57.28 57.28 0 00-97.79-40.5L373 46l-.2.18-.18.2-186.18 186.14a15.55 15.55 0 00-4.27 8l-14.73 73.67a15.62 15.62 0 0015.31 18.68 15.33 15.33 0 003.08-.31l73.65-14.73a15.48 15.48 0 008-4.27l186-186c.12-.1.24-.2.35-.31s.22-.25.33-.37l29.11-29.11A56.83 56.83 0 00500 57.27zM248.71 288.1l-46 9.21 9.19-46L383.79 79.36l36.83 36.84zM461.12 75.69l-18.4 18.4-36.83-36.84 18.4-18.39a26 26 0 1136.83 36.83z"
        fill="#fff"
      />
    </Svg>
  );
}

export default InscriptionMarchandProduitModification;
