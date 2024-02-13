import s from './btnMenu.module.css'
import {HeartFilled, IdcardOutlined} from "@ant-design/icons";

import {Cards} from "@components/cards/cards.tsx";


export const BtnMenu = () => {
    const items = [
        {
            titleBlock: 'Расписать тренировки',
            bntName: 'Тренировки',
            icon: <HeartFilled style={{color: `var(--primary-light-6)`}}/>
        },
        {
            titleBlock: 'Назначить календарь',
            bntName: 'Календарь',
            icon: <IdcardOutlined style={{color: `var(--primary-light-6)`}}/>
        },
        {
            titleBlock: 'Заполнить профиль',
            bntName: 'Профиль',
            icon: <IdcardOutlined style={{color: `var(--primary-light-6)`}}/>
        }
    ]

    return (
        <nav className={s.myMenu}>
            {items.map(el =>
                <Cards bntName={el.bntName} Icon={el.icon} titleBlock={el.titleBlock}
                />
            )}
        </nav>
    );
};

