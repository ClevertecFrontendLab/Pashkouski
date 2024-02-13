import s from "./cards.module.css";
import {Button} from "antd";
import {FC, ReactElement} from "react";
import Card from "antd/es/card/Card";


type CardsType = {
    titleBlock: string
    bntName: string
    Icon: ReactElement
}

export const Cards: FC<CardsType> = ({titleBlock, bntName, Icon}) => {
      return (
         <Card className={s.cards} title={titleBlock}>
             <Button children={bntName} icon={Icon} />
         </Card>
    );
};

