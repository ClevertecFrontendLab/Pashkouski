import {Breadcrumb} from "antd";
import s from "@components/feedbaks/feedbacks-header/feedbacks-header.module.css";
import {getToken} from "@redux/api/base-api.ts";
import {push} from "redux-first-history";
import {paths} from "@constants/paths.ts";
import {useAppDispatch} from "@hooks/typed-react-redux-hooks.ts";
import {useLocation} from "react-router-dom";

export const FeedbacksHeader = () => {
    const dispatch = useAppDispatch()
    const location = useLocation()

    const onClickHeandeler = async () => {
        const token = getToken()
        if(token) {
            dispatch(push(paths.MAIN_PAGE, {state: {from: location}}));
        }
    };

    return (
        <Breadcrumb className={s.feedbacksHeader}>
            <Breadcrumb.Item onClick={onClickHeandeler} >
                <span style={{cursor: "pointer"}}> Главная </span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                Отзывы пользователей
            </Breadcrumb.Item>
        </Breadcrumb>
    );
};

