import s from "./possibilities.module.css";
import {List} from "antd";


export const Possibilities = () => {
    const data = [
        {
            title: 'С CleverFit ты сможешь:',
        },
        {
            title: '- планировать свои тренировки накалендаре, выбирая тип иуровень\n' +
                '                            нагрузки;',
        },
        {
            title: '- отслеживать свои достижения в разделе статистики, сравнивая свои результаты\n' +
                '                            с нормами и рекордами;',
        },
        {
            title: '- создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы о\n' +
                '                            тренировках;',
        },
        {
            title: '- выполнять расписанные тренировки для разных частей тела, следуя подробным\n' +
                '                            инструкциям и советам профессиональных тренеров.',
        },
    ];
    return (
        <div className={s.list}>
            <List
                itemLayout="horizontal"
                dataSource={data}
                size={'small'}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            title={item.title}
                        />
                    </List.Item>
                )}
            />
        </div>
    );
};


