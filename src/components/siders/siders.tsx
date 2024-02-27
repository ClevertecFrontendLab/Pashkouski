import s from "./siders.module.css";
import {
    HeartFilled, IdcardOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined, TrophyFilled
} from "@ant-design/icons";
import logo from "@assets/logo.svg";
import miniLogo from "@assets/miniLogo.svg";
import Sider from "antd/es/layout/Sider";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";
import {Button, Menu} from "antd";
import {FC} from "react";
import Icon, {CustomIconComponentProps} from "@ant-design/icons/es/components/Icon";
import {Logout} from '@assets/img/logOut.tsx'
import {Calendar} from '@assets/img/calender.tsx'
import {push} from "redux-first-history";
import {useAppDispatch} from "@hooks/typed-react-redux-hooks.ts";
import {paths} from "@constants/paths.ts";
import {SidersType} from "@components/siders/siders-type.ts";



export const Siders: FC<SidersType> = ({open, setOpen, collapsedWidth, dataTestId}) => {
    const breakpoints = useBreakpoint();
    const LogOut = (props: Partial<CustomIconComponentProps>) => (
        <Icon component={Logout} {...props} />
    );
    const CalendarOutlined = (props: Partial<CustomIconComponentProps>) => (
        <Icon component={Calendar} {...props} />
    );
    const dispatch = useAppDispatch();

    const logoutHandler = () => {
                localStorage.removeItem('token');
                sessionStorage.removeItem('token');
                dispatch(push(paths.LOGIN));
    };

    const items = [
        {
            key: '1',
            icon: <CalendarOutlined/>,
            label: 'Календарь',
        },
        {
            key: '2',
            icon: <HeartFilled/>,
            label: 'Тренировки',
        },
        {
            key: '3',
            icon: <TrophyFilled/>,
            label: 'Достижения',
        },
        {
            key: '4',
            icon: <IdcardOutlined/>,
            label: 'Профиль',
        },
    ]
    const itemsCollapsed = [
        {
            key: '1',
            icon: <LogOut/>,
            label: 'Выход',
        }
    ]
    const itemsMobile = [
        {
            key: '1',
            label: 'Календарь',
        },
        {
            key: '2',
            label: 'Тренировки',
        },
        {
            key: '3',
            label: 'Достижения',
        },
        {
            key: '4',
            label: 'Профиль',
        },
    ]
    const itemsMobileСollapsed = [
        {
            key: '1',
            label: 'Выход',

        }
    ]


    return (
        <Sider className={s.sider} trigger={null}
               collapsible collapsed={open} collapsedWidth={collapsedWidth}
        >
            <Button className={s.trigger}
                    data-test-id={dataTestId}
                    onClick={() => (setOpen(!open))}
                    icon={open ? <MenuUnfoldOutlined/> :
                        <MenuFoldOutlined/>}
            />

            {
                !open ?
                    <div className={s.logo}>
                        <img src={logo} alt="logo"/>
                    </div>
                    :
                    <div className={s.logoMini}>
                        <img src={miniLogo} alt="logo"/>
                    </div>
            }
            <div>
                {breakpoints.md ?
                    <div className={s.innerMenu}>
                        <Menu
                            theme="light"
                            mode="inline"
                            items={items}
                        />
                        <div onClick={logoutHandler}>
                            <Menu
                                className={s.menuСollapsed}
                                theme="light"
                                mode="inline"
                                items={itemsCollapsed}
                            />
                        </div>
                    </div>
                    :
                    <div className={s.innerMenu}>
                        <Menu
                            theme="light"
                            mode="inline"
                            items={itemsMobile}
                        />
                        <div onClick={logoutHandler}>
                            <Menu
                                id={s.mobileСollapsed}
                                theme="light"
                                mode="inline"
                                items={itemsMobileСollapsed}
                            />
                        </div>
                    </div>
                }
            </div>

        </Sider>
    );
};

