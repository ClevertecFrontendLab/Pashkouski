import {AuthForm} from "@shared/auth-form/auth-form.tsx";
import {Successful} from "@assets/img/successful.tsx";
import {useAppDispatch} from "@hooks/typed-react-redux-hooks.ts";
import {push} from "redux-first-history";
import {paths} from "@constants/paths.ts";
import {Navigate, useLocation} from "react-router-dom";


export const RegistrationSuccessful = () => {
    const dispatch = useAppDispatch();
    const { state } = useLocation();


    const onClickHandler = () => {
        dispatch(push(paths.MAIN_PAGE))
    }

    if (!state) {
        return <Navigate to={paths.MAIN_PAGE} />;
    }

    return (
        <AuthForm
            icon={<Successful />}
            title={'Регистрация успешна'}
            text={'Регистрация прошла успешно. Зайдите в приложение, используя свои e-mail и пароль.'}
            onClick={onClickHandler}
            buttonText={'Войти'}
            dataId={'registration-enter-button'}
            buttonStyle={{width: '100%'}}
        />
    );
};


