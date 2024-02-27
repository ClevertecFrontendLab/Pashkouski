import {AuthForm} from "@shared/auth-form/auth-form.tsx";
import {Warning} from "@assets/img/warning.tsx";
import {useAppDispatch} from "@hooks/typed-react-redux-hooks.ts";
import {push} from "redux-first-history";
import {paths} from "@constants/paths.ts";
import {Navigate, useLocation} from "react-router-dom";



export const ErrorLogin = () => {

    const dispatch = useAppDispatch();
    const { state } = useLocation();

    const onClickHandler = () => {
        dispatch(push(paths.LOGIN))
    }


    if (!state) {
        return <Navigate to={paths.LOGIN} />
    }

    return (
        <AuthForm
            icon={<Warning />}
            title={'Вход не выполнен'}
            text={'Что-то пошло не так. Попробуйте еще раз'}
            onClick={onClickHandler}
            buttonText={"Повторить"}
            dataId={'login-retry-button'}
            buttonStyle={{width: '100%'}}
        />
    );
};


