import s from "./cards.module.css";
import {Button} from "antd";
import {FC, ReactElement} from "react";

type CardsType = {
    titleBlock: string
    bntName: string
    Icon: ReactElement
}

export const Cards: FC<CardsType> = ({titleBlock, bntName, Icon}) => {
     return (
        <div className={s.cards}>
            <div className={s.title}>
                {titleBlock}
            </div>
            <Button children={bntName} icon={Icon} />
        </div>
    );
};

