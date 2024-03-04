import s from './feedbacks.module.css'
import {FeedbacksHeader} from "@components/feedbaks/feedbacks-header/feedbacks-header.tsx";
import {FeedbacksCommetns} from "@components/feedbaks/feedbacks-commetns/feedbacks-commetns.tsx";
import {FeedbacksFooter} from "@components/feedbaks/feedbacks-footer/feedbacks-footer.tsx";
import {useState} from "react";
import {useGetFeedbackQuery} from "@redux/api/feedbacks-api.ts";
import {ErrorModalReview} from "@components/feedbaks/error-modal-review/error-modal-review.tsx";
import {useAppDispatch} from "@hooks/typed-react-redux-hooks.ts";
import {push} from "redux-first-history";
import {paths} from "@constants/paths.ts";

export const Feedbacks = () => {
    const {data = []} = useGetFeedbackQuery({});
    const [isOpen, setIsOpen] = useState(false);
    const isErrorModal = localStorage.getItem('setIsErrorModal')
    const noPosts = data.length === 0
    const dispatch = useAppDispatch()

    const collapsed = () => {
        setIsOpen((isOpen) => !isOpen)
    }

    const onClickCancel = () => {
        localStorage.removeItem('setIsErrorModal')
        dispatch(push(paths.MAIN))
    }

    return (
        <>
            <div>
                {isErrorModal &&
                    <div className={s.errorModal}>
                        <ErrorModalReview onClickCancel={onClickCancel}/>
                    </div>
                }
            </div>

            <div className={s.container}>
                <FeedbacksHeader/>
                <div className={noPosts ? s.wrapperNoPosts : s.wrapper}>
                    <FeedbacksCommetns isOpen={isOpen} data={data}/>
                    <FeedbacksFooter
                        collapsed={collapsed}
                        isOpen={isOpen}
                        noPostsBtn={noPosts}
                    />
                </div>
            </div>
        </>
    );
};

