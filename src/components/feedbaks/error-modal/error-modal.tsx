import s from '@components/feedbaks/error-modal/error-modal.module.css'
import {Button, Typography} from "antd";
import {ErrorIcon} from "@assets/img/error.tsx";

type ErrorModalType = {
    onClick: () => void
    onClickCancel: () => void
}

export const ErrorModal = ({onClick, onClickCancel}: ErrorModalType) => {
    return (
        <div className={s.containerErrorModal}>
            <div className={s.wrapper}>
                <div className={s.container}>
                    <div className={s.icon}>{<ErrorIcon/>}</div>
                    <div className={s.inner}>
                        <div>
                            <Typography.Title level={1}>
                                Данные не сохранились
                            </Typography.Title>
                            <Typography.Text>
                                Что-то пошло не так. Попробуйте ещё раз.
                            </Typography.Text>
                        </div>
                        <div className={s.innerBtn}>
                            <Button
                                className={s.button}
                                type='primary'
                                onClick={onClick}
                                data-test-id='write-review-not-saved-modal'
                            >
                                Написать отзыв
                            </Button>
                            <Button
                                className={s.buttonClose}
                                type='link'
                                onClick={onClickCancel}
                            >
                                Закрыть
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

