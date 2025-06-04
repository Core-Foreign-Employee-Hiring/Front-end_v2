import * as React from 'react'
import type { SVGProps } from 'react'
const SvgClockIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 21" {...props}>
    <mask
      id="clock-icon_svg__a"
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
    <g mask="url(#clock-icon_svg__a)">
      <path
        fill="#6F717C"
        d="M10.703 10.294V6.896q0-.3-.2-.501a.67.67 0 0 0-.499-.203.69.69 0 0 0-.502.203.68.68 0 0 0-.205.5v3.692q0 .156.058.283.06.127.157.225l2.614 2.614a.66.66 0 0 0 .501.208.72.72 0 0 0 .498-.225.684.684 0 0 0-.007-1zM10 18.38a7.3 7.3 0 0 1-2.914-.586 7.6 7.6 0 0 1-2.389-1.611 7.6 7.6 0 0 1-1.611-2.392 7.3 7.3 0 0 1-.586-2.92q0-1.554.586-2.92a7.4 7.4 0 0 1 1.611-2.384A7.7 7.7 0 0 1 7.09 3.966a7.3 7.3 0 0 1 2.92-.586q1.554 0 2.92.59a7.6 7.6 0 0 1 2.38 1.604 7.6 7.6 0 0 1 1.601 2.38 7.3 7.3 0 0 1 .59 2.926 7.3 7.3 0 0 1-.586 2.914 7.7 7.7 0 0 1-1.602 2.389A7.44 7.44 0 0 1 10 18.38"
      />
    </g>
  </svg>
)
export default SvgClockIcon
