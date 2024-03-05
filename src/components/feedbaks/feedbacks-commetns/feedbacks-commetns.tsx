import {FeedbackPost} from "@components/feedbaks/feedback-post/feedback-post.tsx";
import s from '@components/feedbaks/feedbacks-commetns/feedbacks-commetns.module.css'
import {FeedbackNoPosts} from "@components/feedbaks/feedback-no-posts/feedback-no-posts.tsx";
import {useMemo} from "react";

type FeedbacksCommetnsType = {
    isOpen: boolean
    data: Array<FeedbackCommetnType> | []
}
export type FeedbackCommetnType = {
    id: string;
    rating: number;
    createdAt: string;
    fullName?: string | null;
    imageSrc?: string | null;
    message?: string | null;
}

export const FeedbacksCommetns = ({isOpen, data}: FeedbacksCommetnsType) => {
    const sortedComments = useMemo(() => {
        return [...data].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }, [data]);

    return (
        <div className={s.container} >
            {
                data?.length === 0
                    ?
                    <FeedbackNoPosts/>
                    :
                    isOpen
                        ?
                        sortedComments.map((data: FeedbackCommetnType) => {
                            return <FeedbackPost key={data.id} post={data}/>
                        })
                        :
                        sortedComments.slice(0, 4).map((data: FeedbackCommetnType) => {
                            return <FeedbackPost key={data.id} post={data}/>
                        })
            }
        </div>
    );
};
