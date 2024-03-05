import {Modal, Button, Input, Rate, Form} from 'antd';
import s from '@components/feedbaks/feedbacks-footer/feedbacks-footer.module.css'
import {useEffect, useState} from "react";
import {useLazyGetFeedbackQuery, useSendFeedbackMutation} from "@redux/api/feedbacks-api.ts";
import {SuccessModal} from "@components/feedbaks/success-modal/success-modal.tsx";
import {ErrorModal} from "@components/feedbaks/error-modal/error-modal.tsx";
import {CustomStar} from "@components/feedbaks/feedback-post/custom-star.tsx";


type FeedbacksFooterType = {
    isOpen: boolean
    collapsed: () => void
    noPostsBtn: boolean
}

export const FeedbacksFooter = (props: FeedbacksFooterType) => {
    const [sendFeedback, {isError, isSuccess}] = useSendFeedbackMutation()
    const [getFeedbacks] = useLazyGetFeedbackQuery()
    const {isOpen, collapsed, noPostsBtn} = props

    const [visible, setVisible] = useState(false);
    const [isSuccessModal, setIsSuccessModal] = useState(false)
    const [isErrorModal, setIsErrorModal] = useState(false)

    const [form] = Form.useForm()
    const rating = Form.useWatch('rating', form);
    const message = Form.useWatch('message', form);

    const handleOk = async () => {
        if (rating !== null) {
           await sendFeedback({message, rating})
        }
    };

    const handleCancel = () => {
        setVisible(false);
        form.resetFields()
    };

    const feedbacks = () => {
        getFeedbacks({})
    }
    const handleSuccessModal = () => {
        setIsSuccessModal(false)
    }

    const handleErrorModal = () => {
        setIsErrorModal(false)
        setVisible(true)
    }

    const handleCancelErrorModal = () => {
        setIsErrorModal(false)
        handleCancel()
    }

    useEffect(() => {
        if (isSuccess) {
            setIsSuccessModal(true)
            setVisible(false);
            feedbacks()
            form.resetFields()
        }
        if (isError) {
            setIsErrorModal(true)
            setVisible(false)
        }
    }, [isSuccess, isError])

    return (

        <div className={s.containerFeedbacksFooter}>
            {isSuccessModal && (
                <div className={s.successModal}>
                    <SuccessModal siOpen={isSuccessModal } onCancel={handleSuccessModal}/>
                </div>
            )}
            {isErrorModal && (
                <div className={s.errorModal}>
                    <ErrorModal onClick={handleErrorModal}
                                onClickCancel={handleCancelErrorModal}
                                isOpen={isErrorModal}
                    />
                </div>
            )}


            <section className={noPostsBtn ? s.feedbacksFooterNoPost : s.feedbacksFooter}>
                <div>
                    {noPostsBtn ?
                        <Button
                            type="primary"
                            onClick={() => setVisible(true)}
                            data-test-id='write-review'
                            className={s.btnNoPost}
                        >
                            Написать отзыв
                        </Button>
                        :
                        <div className={s.btnWrapper}>
                            <Button
                                type="primary"
                                style={{backgroundColor: "var(--primary-light-6)"}}
                                onClick={() => setVisible(true)}
                                data-test-id='write-review'
                            >
                                Написать отзыв
                            </Button>
                            <Button
                                type="link"
                                onClick={collapsed}
                                data-test-id='all-reviews-button'
                            >
                                {isOpen ? "Свернуть все отзывы" : "Развернуть все отзывы"}
                            </Button>
                        </div>
                    }
                    {visible &&
                        <Modal
                            title="Ваш отзыв"
                            visible={visible}
                            onCancel={handleCancel}
                            footer={[
                                <Button
                                    key="submit"
                                    type="primary"
                                    onClick={handleOk}
                                    data-test-id='new-review-submit-button'
                                >
                                    Опубликовать
                                </Button>,
                            ]}
                        >
                            <Form
                                form={form}
                                onFinish={handleOk}>
                                <Form.Item
                                    name="rating"
                                    rules={[{
                                        required: true,
                                        message: 'Пожалуйста, установите рейтинг.'
                                    }]}

                                >
                                    <Rate
                                        character={({ index, value }) => <CustomStar index={index} value={value}/>}
                                        defaultValue={-1}
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="message"
                                    rules={[{
                                        required: true,
                                        message: 'Пожалуйста, введите ваш отзыв.'
                                    }]}

                                >
                                    <Input.TextArea
                                        placeholder="Расскажите, почему Вам понравилось наше приложение."
                                        autoSize
                                    />
                                </Form.Item>
                            </Form>
                        </Modal>
                    }
                </div>
            </section>

        </div>
    );
};
