import React, {useState} from 'react';
import 'antd/dist/antd.css';
import s from './App.module.css';
import {Layout} from 'antd';
import {Headers} from "../components/header/headers.tsx";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";
import {Contents} from "./content/contents.tsx";
import {Footers} from "@components/footer/footers.tsx";
import {Siders} from "@components/siders/siders.tsx";


export const App: React.FC = () => {
    const [open, setOpen] = useState(true);
    const breakpoints = useBreakpoint();

    return (
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
    );
};
