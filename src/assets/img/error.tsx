import { SVGProps, Ref, forwardRef, memo } from "react"
const SvgComponent = (
    props: SVGProps<SVGSVGElement>,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={71}
        height={71}
        fill="none"
        ref={ref}
        {...props}
    >
        <path
            fill="#FF4D4F"
            d="M35.944.444c-19.328 0-35 15.672-35 35s15.672 35 35 35 35-15.672 35-35-15.672-35-35-35Zm12.922 48.297-5.156-.023-7.766-9.258-7.758 9.25-5.163.023a.622.622 0 0 1-.625-.625.65.65 0 0 1 .148-.406l10.164-12.11-10.164-12.1a.627.627 0 0 1 .477-1.031l5.163.022 7.758 9.258 7.758-9.25 5.156-.023c.344 0 .625.273.625.625a.65.65 0 0 1-.148.406L39.187 35.601 49.343 47.71a.627.627 0 0 1-.477 1.031Z"
        />
    </svg>
)
const ForwardRef = forwardRef(SvgComponent)
export const ErrorIcon = memo(ForwardRef)

