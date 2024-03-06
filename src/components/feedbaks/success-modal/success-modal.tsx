import {Successful} from "@assets/img/successful.tsx";
import s from '@components/feedbaks/success-modal/success-modal.module.css'
import {Button, Modal, Typography} from "antd";

type SuccessModalType = {
    onCancel: () => void
    siOpen: boolean
}

export const SuccessModal = ({onCancel, siOpen}: SuccessModalType) => {
    return (
        <Modal
            open={siOpen}
            onCancel={onCancel}
            className={s.modal}
            footer={[
                <Button key="ok"
                        type="primary"
                        onClick={onCancel}
                        className={s.button}
                >
                    Отлично
                </Button>
            ]}
        >
            <div className={s.container}>
                <div className={s.icon}><Successful/></div>
                <div className={s.inner}>
                    <Typography.Title level={1}>Отзыв успешно опубликован</Typography.Title>
                </div>
            </div>
        </Modal>
    );
};


