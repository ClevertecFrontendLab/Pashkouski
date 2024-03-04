import Lottie from 'react-lottie';
import animation from '../../assets/loader/loader.json';
import {useEffect, useState} from "react";
import {useAppSelector} from "@hooks/typed-react-redux-hooks.ts";
import {selectIsLoading} from "@redux/slices/app.selectors.ts";
import ReactDOM from 'react-dom';
import s from './loader.module.css'

export const Loader = () => {
    const [isLoading, setIsLoading] = useState(false);
    const isLoadingSelector = useAppSelector(selectIsLoading)
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };


    // useEffect(() => {
    //     setIsLoading(isLoadingSelector)
    // }, [isLoadingSelector]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(isLoadingSelector);
        }, 1000);
        return () => clearTimeout(timer);
    }, [isLoadingSelector]);

    if (!isLoading) return null;

    return ReactDOM.createPortal(
        <div
            data-test-id='loader'
            className={s.loader}
        >
            <Lottie options={defaultOptions} height={150} width={150}/>
        </div>,
        document.body
    );
}
