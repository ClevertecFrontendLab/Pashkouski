import {AuthForm} from "@shared/auth-form/auth-form.tsx";
import {useAppDispatch} from "@hooks/typed-react-redux-hooks.ts";
import {push} from "redux-first-history";
import {paths} from "@constants/paths.ts";
import {Navigate, useLocation} from "react-router-dom";
import {ErrorIcon} from "@assets/img/error.tsx";

export const ErrorChangePassword = () => {
    const dispatch = useAppDispatch();
    const { state } = useLocation();
    const location = useLocation()


    const onClickHandler = () => {
        dispatch(push(paths.CHANGE_PASSWORD, {state: {from: location}}))
    }

    if (!state) {
        return <Navigate to={paths.LOGIN} />;
    }

    return (
        <AuthForm
            icon={<ErrorIcon />}
            title={'Данные не сохранились'}
            text={'Что то пошло не такю Попробуйте ещё раз'}
            onClick={onClickHandler}
            buttonText={'Повторить'}
            dataId={'change-retry-button'}
            buttonStyle={{width: '100%'}}
        />
    );
};


