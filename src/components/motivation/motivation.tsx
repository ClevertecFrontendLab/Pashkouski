import s from './motivation.module.css'
import Typography from "antd/es/typography/Typography";


export const Motivation = () => {
    const {Title} = Typography;
    return (
        <>
            <Typography className={s.motivation}>
                <Title>
                    CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса. Не
                    откладывай на завтра
                    — начни тренироваться уже сегодня!
                </Title>
            </Typography>
        </>
    );
};

