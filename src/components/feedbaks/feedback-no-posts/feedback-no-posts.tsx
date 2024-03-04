import s from "@components/feedbaks/feedback-no-posts/feedback-no-posts.module.css";

import {Typography} from "antd";

export const FeedbackNoPosts = () => {
    return (
        <div className={s.container}>
            <div className={s.wrapper}>

                <Typography.Title>
                    <b>Оставьте свой отзыв первым</b>
                </Typography.Title>

                <Typography.Text>
                    Вы можете быть первым, кто оставит отзыв об этом фитнесс приложении.
                    Поделитесь своим мнением и опытом с другими пользователями,
                    и помогите им сделать правильный выбор.
                </Typography.Text>

            </div>
        </div>
    )
}
