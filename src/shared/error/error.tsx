import {AuthForm} from "@shared/auth-form/auth-form.tsx";
import {useAppDispatch} from "@hooks/typed-react-redux-hooks.ts";
import {push} from "redux-first-history";
import {paths} from "@constants/paths.ts";
import {Navigate, useLocation} from "react-router-dom";
import {ErrorIcon} from "@assets/img/error.tsx";



export const Error = () => {
    const dispatch = useAppDispatch();
    const { state } = useLocation();


    const onClickHandler = () => {
        dispatch(push(paths.REGISTRATION))
    }

    if (!state) {
        return <Navigate to={paths.REGISTRATION} />;
    }

    return (
        <AuthForm
            icon={<ErrorIcon />}
            title={'Данные не сохранились'}
            text={'Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз.'}
            onClick={onClickHandler}
            buttonText={'Повторить'}
            dataId={'registration-retry-button'}
            buttonStyle={{width: '100%'}}
        />
    );
};


