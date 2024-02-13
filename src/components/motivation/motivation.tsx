import s from './motivation.module.css'
import Typography from "antd/es/typography/Typography";
import Title from "antd/es/typography/Title";

export const Motivation = () => {
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

