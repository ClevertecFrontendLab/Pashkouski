import { SVGProps, Ref, forwardRef, memo } from "react"
const SvgComponent = (
    props: SVGProps<SVGSVGElement>,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={81}
        height={80}
        fill="none"
        ref={ref}
        {...props}
    >
        <path
            fill="#FAAD14"
            d="m75.164 66.875-32.5-56.25a2.471 2.471 0 0 0-2.164-1.25c-.844 0-1.688.414-2.164 1.25l-32.5 56.25c-.961 1.672.242 3.75 2.164 3.75h65c1.921 0 3.125-2.078 2.164-3.75ZM38 32.5c0-.344.28-.625.625-.625h3.75c.343 0 .625.281.625.625v14.375a.627.627 0 0 1-.625.625h-3.75a.627.627 0 0 1-.625-.625V32.5ZM40.5 60a3.75 3.75 0 0 1 0-7.5 3.75 3.75 0 0 1 0 7.5Z"
        />
    </svg>
)
const ForwardRef = forwardRef(SvgComponent)
export const Warning = memo(ForwardRef)
