import s from "./headers.module.css";
import {Button, PageHeader} from "antd";
import {SettingOutlined} from "@ant-design/icons";
import {Content} from "antd/es/layout/layout";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint"


export const Headers = () => {
    const breakpoints = useBreakpoint();
    return (
        <div className={s.headerWrapper}>
            <PageHeader style={{padding: '24px 16px'}}>
                <Content>
                    {
                        <div className={s.header}>
                            <div className={s.titless}> Главная </div>
                            <section className={s.headerInner}>
                                <h1>
                                    Приветствуем тебя в CleverFit — приложении, которое
                                    поможет тебе добиться своей
                                    мечты!
                                </h1>
                                <div className={s.button}>
                                    {
                                        breakpoints.lg ? (
                                            <Button children={'Настройки'}
                                                    icon={<SettingOutlined/>}/>
                                        ) : breakpoints.sm ? (
                                            <Button children={'Настройки'}
                                            />
                                        ) : <SettingOutlined/>
                                    }
                                </div>
                            </section>
                        </div>
                    }
                </Content>
            </PageHeader>
        </div>
    );
};

