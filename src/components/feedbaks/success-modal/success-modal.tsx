import {Successful} from "@assets/img/successful.tsx";
import s from '@components/feedbaks/success-modal/success-modal.module.css'
import {Button, Typography} from "antd";

type SuccessModalType = {
    onClick: () => void
}

export const SuccessModal = ({onClick}: SuccessModalType) => {


    return (
        <div className={s.containerSuccessModal}>
            <div className={s.wrapper}>
                <div className={s.container}>
                    <div className={s.icon}>{<Successful/>}</div>
                    <div className={s.inner}>
                        <div>
                            <Typography.Title level={1}>
                                Отзыв успешно опубликован
                            </Typography.Title>
                        </div>
                            <Button
                                className={s.button}
                                type='primary'
                                onClick={onClick}

                            >
                                Отлично
                            </Button>

                    </div>
                </div>
            </div>
        </div>
    );
};

