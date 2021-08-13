import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512.032 512.032"
      {...props}
    >
      <Path fill="#344e41" d="M496.016 224c-8.832 0-16 7.168-16 16v181.184l-128 51.2V304c0-8.832-7.168-16-16-16s-16 7.168-16 16v168.352l-128-51.2V167.648l74.144 29.664c8.096 3.264 17.504-.704 20.8-8.928 3.296-8.192-.704-17.504-8.928-20.8l-95.776-38.336h-.032l-.256-.096a15.87 15.87 0 00-11.872 0l-.288.096h-.032L10.064 193.152A16.005 16.005 0 00.016 208v288c0 5.312 2.656 10.272 7.04 13.248a15.892 15.892 0 008.96 2.752c2.016 0 4.032-.384 5.952-1.152l154.048-61.6 153.76 61.504h.032l.288.128a15.87 15.87 0 0011.872 0l.288-.128h.032L502 446.88c6.016-2.464 10.016-8.32 10.016-14.88V240c0-8.832-7.168-16-16-16zm-336 197.152l-128 51.2V218.816l128-51.2v253.536zM400.016 64c-26.464 0-48 21.536-48 48s21.536 48 48 48 48-21.536 48-48-21.536-48-48-48zm0 64c-8.832 0-16-7.168-16-16s7.168-16 16-16 16 7.168 16 16-7.168 16-16 16z" />
      <Path fill="#344e41" d="M400.016 0c-61.76 0-112 50.24-112 112 0 57.472 89.856 159.264 100.096 170.688 3.04 3.36 7.36 5.312 11.904 5.312s8.864-1.952 11.904-5.312C422.16 271.264 512.016 169.472 512.016 112c0-61.76-50.24-112-112-112zm0 247.584c-34.944-41.44-80-105.056-80-135.584 0-44.096 35.904-80 80-80s80 35.904 80 80c0 30.496-45.056 94.144-80 135.584z" />
    </Svg>
  )
}

export default SvgComponent