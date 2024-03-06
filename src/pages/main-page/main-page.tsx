import {Headers} from "@components/header/headers.tsx";
import {Contents} from "@components/content/contents.tsx";
import {Footers} from "@components/footer/footers.tsx";
import s from './main-page.module.css'

export const MainPage = () => {
    return (
        <section className={s.siteLayout}>
            <Headers/>
            <Contents/>
            <Footers/>
        </section>
    );
};

