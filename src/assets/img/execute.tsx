import { SVGProps, Ref, forwardRef, memo } from "react"
const SvgComponent = (
    props: SVGProps<SVGSVGElement>,
    ref: Ref<SVGSVGElement>
) => (
    <svg  xmlns="http://www.w3.org/2000/svg"
          width={81}
          height={80}
          fill="none"
          ref={ref}
          {...props}>
        <path d="M40.5 5C21.1719 5 5.5 20.6719 5.5 40C5.5 59.3281 21.1719 75 40.5 75C59.8281 75 75.5 59.3281 75.5 40C75.5 20.6719 59.8281 5 40.5 5ZM38 23.125C38 22.7812 38.2812 22.5 38.625 22.5H42.375C42.7188 22.5 43 22.7812 43 23.125V44.375C43 44.7188 42.7188 45 42.375 45H38.625C38.2812 45 38 44.7188 38 44.375V23.125ZM40.5 57.5C39.5187 57.48 38.5843 57.0761 37.8974 56.375C37.2105 55.6739 36.8258 54.7315 36.8258 53.75C36.8258 52.7685 37.2105 51.8261 37.8974 51.125C38.5843 50.4239 39.5187 50.02 40.5 50C41.4813 50.02 42.4157 50.4239 43.1026 51.125C43.7895 51.8261 44.1742 52.7685 44.1742 53.75C44.1742 54.7315 43.7895 55.6739 43.1026 56.375C42.4157 57.0761 41.4813 57.48 40.5 57.5Z" fill="#2F54EB"/>
    </svg>

)
const ForwardRef = forwardRef(SvgComponent)
export const Execute = memo(ForwardRef)


