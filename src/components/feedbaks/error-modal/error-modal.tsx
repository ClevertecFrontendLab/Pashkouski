import s from '@components/feedbaks/error-modal/error-modal.module.css'
import {Button, Modal, Typography} from "antd";
import {ErrorIcon} from "@assets/img/error.tsx";

type ErrorModalType = {
    onClick: () => void
    onClickCancel: () => void
    isOpen: boolean
}

export const ErrorModal = ({onClick, onClickCancel, isOpen}: ErrorModalType) => {
    return (
        <Modal
            open={isOpen}
            onCancel={onClickCancel}
            footer={
                <div>
                    <Button className={s.button} type='primary' onClick={onClick}
                            data-test-id='write-review-not-saved-modal'>
                        Написать отзыв
                    </Button>
                    <Button className={s.buttonClose} type='link' onClick={onClickCancel}>
                        Закрыть
                    </Button>
                </div>}
            centered
            className={s.modal}
        >
            <div className={s.container}>
                <div className={s.icon}><ErrorIcon/></div>
                <div className={s.inner}>
                    <Typography.Title level={1}>Данные не сохранились</Typography.Title>
                    <Typography.Text>Что-то пошло не так. Попробуйте ещё раз.</Typography.Text>
                </div>
            </div>
        </Modal>
    );
};
