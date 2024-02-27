import {AuthForm} from "@shared/auth-form/auth-form.tsx";
import {useAppDispatch} from "@hooks/typed-react-redux-hooks.ts";
import {push} from "redux-first-history";
import {paths} from "@constants/paths.ts";
import {Navigate, useLocation} from "react-router-dom";
import {ErrorIcon} from "@assets/img/error.tsx";



export const ErrorUserExist = () => {

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
            text={'Такой e-mail уже записан в системе. Попробуйте зарегистрироваться по другому e-mail'}
            onClick={onClickHandler}
            buttonText={"Назад к регистрации"}
            dataId={'registration-back-button'}
            buttonStyle={{width: '100%'}}
        />
    );
};


