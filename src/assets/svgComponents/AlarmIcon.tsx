import * as React from 'react'
import type { SVGProps } from 'react'
const SvgAlarmIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 32 33" {...props}>
    <mask
      id="alarm-icon_svg__a"
      width={32}
      height={33}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path fill="#D9D9D9" d="M0 .342h32v32H0z" />
    </mask>
    <g mask="url(#alarm-icon_svg__a)">
      <path
        fill="#1E1E1E"
        d="M6.838 25.521a.8.8 0 0 1-.597-.242.82.82 0 0 1-.241-.6q0-.357.241-.595a.82.82 0 0 1 .597-.238H8.41V13.51q0-2.702 1.65-4.806t4.273-2.635v-.727q0-.694.486-1.18a1.6 1.6 0 0 1 1.18-.487q.694 0 1.18.486.488.487.488 1.181v.732q2.624.527 4.274 2.63t1.649 4.806v10.336h1.572q.357 0 .597.242.24.243.241.6 0 .359-.241.596a.82.82 0 0 1-.597.237zm9.16 3.744q-.995 0-1.702-.708a2.32 2.32 0 0 1-.706-1.702h4.82q0 .997-.708 1.704-.709.705-1.704.706m-5.913-5.419h11.83V13.51q0-2.456-1.73-4.186T16 7.595t-4.185 1.73-1.73 4.185z"
      />
    </g>
  </svg>
)
export default SvgAlarmIcon
