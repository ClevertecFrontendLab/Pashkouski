import {Login} from "@pages/auth/login/login.tsx";
import {Registration} from "@pages/auth/registration/registration.tsx";
import logo from "@assets/logo.svg";
import {Tabs} from 'antd';
import s from './auth.module.css'
import {useAppDispatch} from "@hooks/typed-react-redux-hooks.ts";
import {push} from "redux-first-history";
import {paths} from "@constants/paths.ts";


export const Auth = () => {
    const dispatch = useAppDispatch();

    const handleClickTab = (key: string) => {
        if (key === paths.AUTH) {
            dispatch(push(paths.AUTH));
        } else if (key === paths.REGISTRATION) {
            dispatch(push(paths.REGISTRATION));
        }
    };

    let activeKey = '';
    if (location.pathname === paths.AUTH) {
        activeKey = paths.AUTH;
    } else if (location.pathname === paths.REGISTRATION) {
        activeKey = paths.REGISTRATION;
    }

    const items = [
        {
            label: 'Вход',
            key: paths.AUTH,
            children: <Login/>
        },
        {
            label: 'Регистрация',
            key: paths.REGISTRATION,
            children: <Registration/>
        },
    ];

    return (
        <div className={s.authWrapper}>
            <div className={s.container}>
                <img src={logo} className={s.img}/>
                <Tabs items={items}
                      className={s.tabs}
                      onChange={(key) => handleClickTab(key)}
                      activeKey={activeKey}
                />
            </div>
        </div>
    )
}
