import s from './footers.module.css';
import {Button} from "antd";
import {AndroidFilled, AppleFilled} from "@ant-design/icons";
import {useLazyGetFeedbackQuery} from "@redux/api/feedbacks-api.ts";
import {useEffect} from "react";
import {push} from "redux-first-history";
import {paths} from "@constants/paths.ts";
import {useAppDispatch} from "@hooks/typed-react-redux-hooks.ts";
import {useLocation} from "react-router-dom";
import {getToken} from "@redux/api/base-api.ts";


export const Footers = () => {
    const [getFeedbacks, {
        isSuccess: isSuccessGetFeedbacks,
        isError: isErrorGetFeedbacks, error: errorGetFeedbacks,
    }] = useLazyGetFeedbackQuery()
    const dispatch = useAppDispatch()
    const location = useLocation()


    const feedbacksHeandler = () => {
        const token = getToken()
        if (token) {
            getFeedbacks({})
        }
    };


    useEffect(() => {
        if (isSuccessGetFeedbacks) {
            dispatch(push(paths.FEEDBACKS, {state: {from: location}}));
        }
        if (isErrorGetFeedbacks) {
            if (errorGetFeedbacks?.status === 403) {
                dispatch(push(paths.AUTH));
                sessionStorage.removeItem('token')
                localStorage.removeItem('token')
            } else {
                const accessLocalToken = localStorage.getItem('token');
                const accessSessionToken = sessionStorage.getItem('token');
                if (accessLocalToken || accessSessionToken) {
                    localStorage.setItem('setIsErrorModal', 'true');
                    dispatch(push(paths.FEEDBACKS))
                }
            }
        }
    }, [dispatch, isErrorGetFeedbacks, isSuccessGetFeedbacks, location, errorGetFeedbacks])

    return (
        <>
            <section className={s.footer}>
                <Button className={s.reviews}
                        onClick={feedbacksHeandler}
                        type="link"
                        data-test-id='see-reviews'
                >
                    Смотреть отзывы
                </Button>
                <div className={s.innerBlock}>
                    <div className={s.innerBlockInfo}>
                        <span className={s.firstSpan}> Скачать на телефон </span>
                        <span className={s.secondSpan}> Доступно в PRO-тарифе </span>
                    </div>
                    <div className={s.innerBlockLink}>
                        <Button type="link" block icon={<AndroidFilled/>}
                                children={'Android OS'}/>
                        <Button type="link" block icon={<AppleFilled/>}
                                children={'Apple IOS'}/>
                    </div>
                </div>
            </section>
        </>

    );
};
