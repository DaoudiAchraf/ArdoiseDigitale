import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      height={512}
      viewBox="0 0 512 512"
      width={512}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      
    >
      <Path fill="#344e41" d="M504.399 185.065c-6.761-8.482-16.904-13.348-27.83-13.348h-98.604L324.496 49.284c-3.315-7.591-12.157-11.06-19.749-7.743-7.592 3.315-11.059 12.158-7.743 19.75l48.225 110.427H166.771l48.225-110.427c3.315-7.592-.151-16.434-7.743-19.75-7.591-3.317-16.434.15-19.749 7.743l-53.469 122.434H35.431c-10.926 0-21.069 4.865-27.83 13.348C.964 193.394-1.485 204.1.882 214.442l52.657 230c3.677 16.06 17.884 27.276 34.549 27.276h335.824c16.665 0 30.872-11.216 34.549-27.276l52.657-230.001c2.367-10.342-.082-21.048-6.719-29.376zm-80.487 256.652H88.088c-2.547 0-4.778-1.67-5.305-3.972L30.126 207.747c-.413-1.805.28-3.163.936-3.984.608-.764 1.985-2.045 4.369-2.045h85.503l-3.929 8.997c-3.315 7.592.151 16.434 7.743 19.75a14.935 14.935 0 005.995 1.258c5.782 0 11.292-3.363 13.754-9l9.173-21.003h204.662l9.173 21.003c2.462 5.638 7.972 9 13.754 9 2.004 0 4.041-.404 5.995-1.258 7.592-3.315 11.059-12.158 7.743-19.75l-3.929-8.997h85.503c2.384 0 3.761 1.281 4.369 2.045.655.822 1.349 2.18.936 3.983l-52.657 230c-.528 2.301-2.76 3.971-5.307 3.971z" />
      <Path fill="#344e41" d="M166 266.717c-8.284 0-15 6.716-15 15v110c0 8.284 6.716 15 15 15s15-6.716 15-15v-110c0-8.284-6.715-15-15-15zM256 266.717c-8.284 0-15 6.716-15 15v110c0 8.284 6.716 15 15 15s15-6.716 15-15v-110c0-8.284-6.716-15-15-15zM346 266.717c-8.284 0-15 6.716-15 15v110c0 8.284 6.716 15 15 15s15-6.716 15-15v-110c-.001-8.284-6.716-15-15-15z" />
    </Svg>
  )
}

export default SvgComponent