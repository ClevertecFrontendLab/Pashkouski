import s from "./possibilities.module.css";
import {List} from "antd";


export const Possibilities = () => {

    const data = [
        {
            message: 'С CleverFit ты сможешь:',
        },
        {
            message: '- планировать свои тренировки накалендаре, выбирая тип иуровень\n' +
                '                            нагрузки;',
        },
        {
            message: '- отслеживать свои достижения в разделе статистики, сравнивая свои результаты\n' +
                '                            с нормами и рекордами;',
        },
        {
            message: '- создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы о\n' +
                '                            тренировках;',
        },
        {
            message: '- выполнять расписанные тренировки для разных частей тела, следуя подробным\n' +
                '                            инструкциям и советам профессиональных тренеров.',
        },
    ];
    return (
        <div className={s.list}>
            {data.map((item, index) => {
                return (
                    <List key={index}>
                        {item.message}
                    </List>)
            })}
        </div>
    );
};


