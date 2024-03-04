import s from "@components/feedbaks/feedback-post/feedback-post.module.css";
import Avatar from "antd/lib/avatar/avatar";
import {StarFilled, StarOutlined, UserOutlined} from "@ant-design/icons";
import {Rate, Typography} from "antd";
import {FeedbackCommetnType} from "@components/feedbaks/feedbacks-commetns/feedbacks-commetns.tsx";
import Card from "antd/es/card/Card";

type FeedbackFeedbackPost = {
    post: FeedbackCommetnType
}
export const CustomStar = ({index,  value}) => {
    return index > value ? <StarOutlined style={{color: '#FAAD14'}}/> : <StarFilled style={{color: '#FAAD14'}}/>
};

export const FeedbackPost = (props: FeedbackFeedbackPost) => {


    const {post} = props
    const time = new Date(post.createdAt).toLocaleDateString();



    return (
        <div className={s.container} key={post.id}>
            <div className={s.profileWrapper}>
                <Card className={s.profile}
                      bordered={null}
                >
                    <div className={s.img}>{post.imageSrc ?
                        <img className={s.imgAuth} src={post.imageSrc} alt=""/> :
                        <Avatar size={42} icon={<UserOutlined/>}/>}</div>
                    <Typography.Title level={5}
                                      className={s.name}

                    >
                        <div className={s.fullName}>
                            {post.fullName
                                ? post.fullName.split(' ').map((el, index) => <div
                                    key={index}><b>{el}</b></div>)
                                : <b>«Пользователь»</b>
                            }
                        </div>

                    </Typography.Title>
                </Card>
            </div>
            <div className={s.postWrapper}>
                <div className={s.inner}>
                    <Rate
                        defaultValue={post.rating}
                        value={post.rating}
                        className={s.rate}
                        count={5}
                        character={CustomStar}
                        style={{fontSize: "20px"}}
                    />
                    {/*character={<StarOutlined />}*/}
                    <span>{time}</span>
                </div>
                <Typography.Text className={s.message}>
                    {post.message ?? ''}
                </Typography.Text>
            </div>
        </div>
    );
};


