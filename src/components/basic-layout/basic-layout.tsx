import React, {useEffect, useState} from 'react';
import 'antd/dist/antd.css';
import s from '@components/basic-layout/basic-layout.module.css';
import {Layout} from 'antd';
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";
import {Siders} from "@components/siders/siders.tsx";
import {Navigate, Outlet} from "react-router-dom";
import {useAppDispatch} from "@hooks/typed-react-redux-hooks.ts";
import {push} from "redux-first-history";
import {paths} from "@constants/paths.ts";


export const BasicLayout: React.FC = () => {
    const [open, setOpen] = useState(true);
    const breakpoints = useBreakpoint();
    const localToken = localStorage.getItem('token');
    const sessionToken = sessionStorage.getItem('token');
    const isLogin = localToken || sessionToken !== null;
    const dispatch = useAppDispatch()

    useEffect(() => {
        const handleBeforeUnload = () => {
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('rememberMe');
            dispatch(push(paths.AUTH))
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [dispatch]);


    return (
        isLogin
            ?
            <>
                <Layout className={s.layout}>
                    {breakpoints.md ?
                        <Siders open={open} setOpen={setOpen} collapsedWidth={80}
                                dataTestId={'sider-switch'}/>
                        :
                        <Siders open={open} setOpen={setOpen} collapsedWidth={0}
                                dataTestId={'sider-switch-mobile'}/>
                    }
                   <Outlet/>
                </Layout>

            </>
            :
            <Navigate to="/auth/login" replace/>
    );
};
