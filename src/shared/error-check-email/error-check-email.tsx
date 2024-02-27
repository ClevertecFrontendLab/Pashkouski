import {AuthForm} from "@shared/auth-form/auth-form.tsx";
import {useAppDispatch} from "@hooks/typed-react-redux-hooks.ts";
import {push} from "redux-first-history";
import {paths} from "@constants/paths.ts";
import {Navigate, useLocation} from "react-router-dom";
import {ErrorCheckEmailIcon} from "@assets/img/errorCheckEmail.tsx";





export const ErrorCheckEmail = () => {
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
            icon={<ErrorCheckEmailIcon style={{
                maxWidth: '250px', maxHeight: '290px'
            }}/>}
            title={'Что-то пошло не так'}
            text={'Произошла ошибка, попробуйте отправить форму ещё раз.'}
            onClick={onClickHandler}
            buttonText={'Назад'}
            dataId={'check-back-button'}

        />


    );
};


