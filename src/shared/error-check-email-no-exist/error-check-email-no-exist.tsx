import {AuthForm} from "@shared/auth-form/auth-form.tsx";
import {useAppDispatch} from "@hooks/typed-react-redux-hooks.ts";
import {push} from "redux-first-history";
import {paths} from "@constants/paths.ts";
import {Navigate, useLocation} from "react-router-dom";
import {ErrorIcon} from "@assets/img/error.tsx";




export const ErrorCheckEmailNoExist = () => {
    const dispatch = useAppDispatch();
    const { state } = useLocation();


    const onClickHandler = () => {
        dispatch(push(paths.LOGIN))
    }

    if (!state) {
        return <Navigate to={paths.LOGIN} />;
    }

    return (
        <AuthForm
            icon={<ErrorIcon />}
            title={'Такой e-mail не зарегистрирован'}
            text={'Мы не нашли в базе вашего e-mail. Попробуйте войти с другим e-mail'}
            onClick={onClickHandler}
            buttonText={'Попробовать снова'}
            dataId={'check-retry-button'}
        />
    );
};


