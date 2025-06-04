import * as React from 'react'
import type { SVGProps } from 'react'
const SvgSearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 25 25" {...props}>
    <mask
      id="search-icon_svg__a"
      width={25}
      height={25}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path fill="#D9D9D9" d="M.5.342h24v24H.5z" />
    </mask>
    <g mask="url(#search-icon_svg__a)">
      <path
        fill="#5551F5"
        d="m20.1 21.342-6.3-6.3q-.75.6-1.725.95t-2.075.35q-2.725 0-4.612-1.888T3.5 9.842t1.888-4.613T10 3.342t4.613 1.887T16.5 9.842a6.1 6.1 0 0 1-1.3 3.8l6.3 6.3zm-10.1-7q1.875 0 3.188-1.313Q14.5 11.717 14.5 9.842t-1.312-3.188T10 5.342 6.813 6.654 5.5 9.842t1.313 3.187T10 14.342"
      />
    </g>
  </svg>
)
export default SvgSearchIcon
