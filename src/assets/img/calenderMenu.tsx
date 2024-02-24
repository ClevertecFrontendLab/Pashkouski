import Icon, {CustomIconComponentProps} from "@ant-design/icons/es/components/Icon";

 const CalendarOutlined = () => (
    <svg width="14.000000" height="14.000000" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <desc>
            Created with Pixso.
        </desc>
        <defs>
            <clipPath id="clip3_26227">
                <rect id="Property 1=calendar" width="14.000000" height="14.000000" transform="translate(0.000000 0.000122)" fill="white" fillOpacity="0"/>
            </clipPath>
            <clipPath id="clip3_26225">
                <rect id="wrapper" width="14.000000" height="14.000000" fill="white" fillOpacity="0"/>
            </clipPath>
        </defs>
        <g clipPath="url(#clip3_26225)">
            <path id="Union" d="M9.73438 2.51575L12.0312 2.51575C12.2734 2.51575 12.4688 2.71126 12.4688 2.95325L12.4688 12.0314C12.4688 12.2734 12.2734 12.4689 12.0312 12.4689L1.96875 12.4689C1.72656 12.4689 1.53125 12.2734 1.53125 12.0314L1.53125 2.95325C1.53125 2.71126 1.72656 2.51575 1.96875 2.51575L4.26562 2.51575L4.26562 1.64075C4.26562 1.58059 4.31494 1.53137 4.375 1.53137L5.14062 1.53137C5.20068 1.53137 5.25 1.58059 5.25 1.64075L5.25 2.51575L8.75 2.51575L8.75 1.64075C8.75 1.58059 8.79932 1.53137 8.85938 1.53137L9.625 1.53137C9.68506 1.53137 9.73438 1.58059 9.73438 1.64075L9.73438 2.51575ZM2.51562 11.4845L11.4844 11.4845L11.4844 6.28918L2.51562 6.28918L2.51562 11.4845Z" clipRule="evenodd" fill="#2F54EB" fillOpacity="1.000000" fillRule="evenodd"/>
        </g>
    </svg>
)

export const CalendarMenu = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={CalendarOutlined} {...props}/>
);
