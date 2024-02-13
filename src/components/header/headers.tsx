import s from "./headers.module.css";
import {Button, PageHeader} from "antd";
import {SettingOutlined} from "@ant-design/icons";

import useBreakpoint from "antd/es/grid/hooks/useBreakpoint"
import Card from "antd/es/card/Card";
import Title from "antd/es/typography/Title";
import Typography from "antd/es/typography/Typography";


export const Headers = () => {
    const breakpoints = useBreakpoint();
    return (
        <div className={s.headerWrapper}>
            <PageHeader title="Главная">
                    <Card bordered={false} className={s.header}>
                        <Typography>
                            <Title >
                                Приветствуем тебя в CleverFit — приложении, которое
                                поможет тебе добиться своей
                                мечты!
                            </Title>
                        </Typography>
                        {
                            breakpoints.lg ? (
                                <Button children={'Настройки'}
                                        icon={<SettingOutlined/>} style={{display: "block"}}/>
                            ) : breakpoints.sm ? (
                                <Button children={'Настройки'}
                                />
                            ) : <SettingOutlined id={s.mobileIconSettings}/>
                        }
                    </Card>
            </PageHeader>
        </div>
    );
};

