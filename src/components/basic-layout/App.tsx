import React, {useState} from 'react';
import 'antd/dist/antd.css';
import s from '@components/basic-layout/App.module.css';
import {Layout} from 'antd';
import {Headers} from "@components/header/headers.tsx";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";
import {Contents} from "@components/content/contents.tsx";
import {Footers} from "@components/footer/footers.tsx";
import {Siders} from "@components/siders/siders.tsx";
import {Navigate} from "react-router-dom";


export const App: React.FC = () => {
    const [open, setOpen] = useState(true);
    const breakpoints = useBreakpoint();


    const localToken = localStorage.getItem('token');
    const sessionToken = sessionStorage.getItem('token');

    const isLogin = localToken || sessionToken !== null;

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
                    <section className={s.siteLayout}>
                        <Headers/>
                        <Contents/>
                        <Footers/>
                    </section>
                </Layout>

            </>
            :
            <Navigate to="/auth/login" replace/>
    );
};
