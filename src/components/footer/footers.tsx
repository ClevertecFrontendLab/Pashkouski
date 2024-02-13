import s from './footers.module.css';
import {Button} from "antd";
import {AndroidFilled, AppleFilled} from "@ant-design/icons";


export const Footers = () => {
    return (
            <section className={s.footer}>
                <div className={s.reviews}>
                    Оставить отзыв
                </div>
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

    );
};
