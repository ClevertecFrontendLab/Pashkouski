import s from "./siders.module.css";
import {
    CalendarOutlined,
    HeartFilled, IdcardOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined, TrophyFilled
} from "@ant-design/icons";
import logo from "../../assets/logo.svg";
import miniLogo from "../../assets/miniLogo.svg";
import {Navbar} from "../../shared/navbar.tsx";
import Sider from "antd/es/layout/Sider";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";
import {Button} from "antd";
import {FC} from "react";

type SidersType = {
    open: boolean
    setOpen: (open: boolean) => void
    collapsedWidth: number | string
    dataTestId: string
}

export const Siders: FC<SidersType> = ({open, setOpen, collapsedWidth, dataTestId}) => {
    const breakpoints = useBreakpoint();
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
            icon: <CalendarOutlined/>,
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
                    <div className={s.logo}>
                        <img src={miniLogo} alt="logo"/>
                    </div>
            }
            <div className={s.innerMenu}>
                {breakpoints.md ?
                    <>
                        <Navbar
                            items={items}
                            defaultSelectedKeys={'1'}/>
                        <Navbar
                            defaultSelectedKeys={'1'}
                            items={itemsCollapsed}/>
                    </>
                    :
                    <>
                        <Navbar
                            defaultSelectedKeys={'1'}
                            items={itemsMobile}
                        />
                        <Navbar
                            defaultSelectedKeys={'1'}
                            items={itemsMobileСollapsed}
                        />
                    </>
                }
            </div>

        </Sider>
    );
};
