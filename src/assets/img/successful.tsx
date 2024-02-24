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
            fill="#52C41A"
            d="M40.5 5c-19.328 0-35 15.672-35 35s15.672 35 35 35 35-15.672 35-35-15.672-35-35-35Zm15.117 23.57L39.164 51.383a2.484 2.484 0 0 1-4.039 0l-9.742-13.5a.627.627 0 0 1 .508-.992h3.664c.797 0 1.554.382 2.023 1.039l5.563 7.718 12.28-17.03a2.498 2.498 0 0 1 2.024-1.04h3.664c.508 0 .805.578.508.992Z"
        />
    </svg>
)
const ForwardRef = forwardRef(SvgComponent)
export const Successful = memo(ForwardRef)

