import React, {useState} from 'react';
import 'antd/dist/antd.css';
import s from './App.module.css';
import {
    CalendarOutlined, HeartFilled, IdcardOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined, TrophyFilled,
} from '@ant-design/icons';
import {Layout, Menu} from 'antd';
import logo from '../assets/logo.svg'
import miniLogo from '../assets/miniLogo.svg'
import {Footer} from "antd/es/layout/layout";

import {Headers} from "../components/header/headers.tsx";

const {Sider, Content} = Layout;

const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout>
            <section className={s.container}>
                <Sider className={s.sider} trigger={null} collapsible collapsed={collapsed}>

                    <div className={s.trigger}>

                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            onClick: () => setCollapsed(!collapsed),
                        })}

                    </div>
                    {!collapsed ?
                        <div className={s.logo}>
                            <img src={logo} alt="logo"/>
                        </div>
                        :
                        <div className={s.logo} style={{
                            width: '100%',
                            display: "flex",
                            justifyContent: 'center',
                            backgroundColor: '#ffff'
                        }}>
                            <img src={miniLogo} alt="logo"/>
                        </div>
                    }
                    <div className={s.innerMenu}>
                        <Menu
                            theme="light"
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            items={[
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
                            ]}
                        />
                        <Menu
                            theme="light"
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            items={[
                                {
                                    key: '1',
                                    icon: <CalendarOutlined/>,
                                    label: 'Выход',
                                }
                            ]}
                        />
                    </div>

                </Sider>
                <Layout className={s.siteLayout}>

                    <Headers/>

                    <div>
                        <Content
                            style={{
                                margin: '24px 16px',
                                padding: 24,
                                backgroundColor: 'red',
                                display: "block"
                            }}
                        >
                            Content
                        </Content>
                    </div>
                    <Footer
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 80,
                        }}
                    >Footer</Footer>
                </Layout>
            </section>
        </Layout>
    );
};

export default App;
