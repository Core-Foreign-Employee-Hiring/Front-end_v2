import * as React from 'react'
import type { SVGProps } from 'react'
const SvgGraySearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 25" {...props}>
    <mask
      id="gray_search_icon_svg__a"
      width={24}
      height={25}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path fill="#D9D9D9" d="M0 .344h24v24H0z" />
    </mask>
    <g mask="url(#gray_search_icon_svg__a)">
      <path
        fill="#999BA5"
        d="m19.6 21.344-6.3-6.3q-.75.6-1.725.95t-2.075.35q-2.725 0-4.612-1.888T3 9.844 4.888 5.23 9.5 3.344t4.613 1.887T16 9.844a6.1 6.1 0 0 1-1.3 3.8l6.3 6.3zm-10.1-7q1.875 0 3.188-1.313Q14 11.72 14 9.844t-1.312-3.188T9.5 5.344 6.313 6.656 5 9.844t1.313 3.187T9.5 14.344"
      />
    </g>
  </svg>
)
export default SvgGraySearchIcon
