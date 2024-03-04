import {FeedbackPost} from "@components/feedbaks/feedback-post/feedback-post.tsx";
import s from '@components/feedbaks/feedbacks-commetns/feedbacks-commetns.module.css'
import {FeedbackNoPosts} from "@components/feedbaks/feedback-no-posts/feedback-no-posts.tsx";

type FeedbacksCommetnsType = {
    isOpen: boolean
    data: [FeedbackCommetnType] | []
}
export type FeedbackCommetnType = {
    id: string;
    fullName?: string | null;
    imageSrc?: string | null;
    message?: string | null;
    rating: number;
    createdAt: string;
}


export const FeedbacksCommetns = ({isOpen, data}: FeedbacksCommetnsType) => {

    const sortedComments = [...data].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

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
