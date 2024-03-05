import {ErrorCheckEmailIcon} from "@assets/img/errorCheckEmail.tsx";
import s from "@components/feedbaks/error-modal-review/error-modal-review.module.css";
import {Button, Typography} from "antd";

type ErrorModalReviewType = {
    onClickCancel: () => void
}

export const ErrorModalReview = ({onClickCancel}: ErrorModalReviewType) => {
    return (
        <div className={s.containerErrorModalReview}>
            <div className={s.wrapper}>
                <div className={s.container}>
                    <div>{<ErrorCheckEmailIcon/>}</div>
                    <div className={s.inner}>
                        <div>
                            <Typography.Title level={1}>
                                Что-то пошло не так
                            </Typography.Title>
                            <Typography.Text>
                                Произошла ошибка, попробуйте отправить форму ещё раз.
                            </Typography.Text>
                        </div>

                        <Button
                            className={s.button}
                            type='primary'
                            onClick={onClickCancel}
                        >
                            Назад
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
