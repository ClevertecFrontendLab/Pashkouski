import {Content} from "antd/es/layout/layout";
import {Motivation} from "../motivation/motivation.tsx";
import {Possibilities} from "../possibilities/possibilities.tsx";
import {BtnMenu} from "@components/btn-menu/btn-menu.tsx";
import s from './contents.module.css'

export const Contents = () => {
    return (
            <Content className={s.content}>
                <Possibilities/>
                <Motivation/>
                <BtnMenu/>
            </Content>
    );
};

