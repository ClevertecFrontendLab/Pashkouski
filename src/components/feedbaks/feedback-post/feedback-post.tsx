import s from "./feedback-post.module.css";
import Avatar from "antd/lib/avatar/avatar";
import {UserOutlined} from "@ant-design/icons";
import {Rate, Typography} from "antd";
import {FeedbackCommetnType} from "@components/feedbaks/feedbacks-commetns/feedbacks-commetns.tsx";
import Card from "antd/es/card/Card";
import {CustomStar} from "@components/feedbaks/feedback-post/custom-star.tsx";

type FeedbackFeedbackPost = {
    post: FeedbackCommetnType
}

export const FeedbackPost = (props: FeedbackFeedbackPost) => {
    const {post} = props
    const time = new Date(post.createdAt).toLocaleDateString();
    const users = post.fullName
        ? post.fullName.split(' ').map((el, index) => <div
            key={index}><b>{el}</b></div>)
        : <b>«Пользователь»</b>
    const avatar = post.imageSrc
        ?
        <img className={s.imgAuth} src={post.imageSrc} alt=""/>
        :
        <Avatar size={42} icon={<UserOutlined/>}/>

    return (
        <div className={s.container} key={post.id}>
            <div className={s.profileWrapper}>
                <Card bordered={false}>
                    <div className={s.img}>
                        {avatar}
                    </div>
                    <Typography.Title level={5}>
                        <div className={s.fullName}>
                            {users}
                        </div>
                    </Typography.Title>
                </Card>
            </div>
            <div>
                <div className={s.inner}>
                    <Rate
                        defaultValue={post.rating}
                        value={post.rating}
                        className={s.rate}
                        count={5}
                        character={({index, value}) => <CustomStar index={index} value={value}/>}
                        style={{fontSize: "20px"}}
                    />
                    <span> {time} </span>
                </div>
                <Typography.Text className={s.message}>
                    {post.message || ''}
                </Typography.Text>
            </div>
        </div>
    );
};


