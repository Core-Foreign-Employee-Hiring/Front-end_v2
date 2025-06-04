import * as React from 'react'
import type { SVGProps } from 'react'
const SvgLocationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 21" {...props}>
    <mask
      id="location-icon_svg__a"
      width={20}
      height={21}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path fill="#D9D9D9" d="M0 .88h20v20H0z" />
    </mask>
    <g mask="url(#location-icon_svg__a)">
      <path
        fill="#6F717C"
        d="M10 18.4q-.27 0-.51-.093a1.8 1.8 0 0 1-.47-.281 35 35 0 0 1-1.801-1.709 19.4 19.4 0 0 1-1.802-2.104 12.4 12.4 0 0 1-1.375-2.343Q3.5 10.65 3.5 9.442q0-2.79 1.854-4.677Q7.208 2.88 10 2.88q2.77 0 4.635 1.885T16.5 9.442q0 1.209-.552 2.438a13 13 0 0 1-1.375 2.354 18 18 0 0 1-1.792 2.094 38 38 0 0 1-1.802 1.698q-.23.187-.469.281-.24.094-.51.094m0-7.52q.624 0 1.063-.438.437-.436.437-1.062 0-.625-.437-1.063A1.45 1.45 0 0 0 10 7.88q-.625 0-1.062.437A1.45 1.45 0 0 0 8.5 9.38q0 .625.438 1.062.436.438 1.062.438"
      />
    </g>
  </svg>
)
export default SvgLocationIcon
