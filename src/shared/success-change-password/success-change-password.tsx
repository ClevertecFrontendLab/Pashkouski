import {AuthForm} from "@shared/auth-form/auth-form.tsx";
import {paths} from "@constants/paths.ts";
import {Navigate, useLocation, useNavigate} from "react-router-dom";
import {Successful} from "@assets/img/successful.tsx";

export const SuccessChangePassword = () => {
    const navigate = useNavigate()
    const { state } = useLocation();
    const location = useLocation();

    const onClickHandler = () => {
        navigate(paths.LOGIN, {state: {from: location}})
    }

    if (!state) {
        return <Navigate to={paths.LOGIN} />;
    }

    return (
        <AuthForm
            icon={<Successful />}
            title={'Пароль успешно изменён'}
            text={'Теперь можно войти в аккаунт используя новый логин и пароль'}
            onClick={onClickHandler}
            buttonText={'Вход'}
            dataId={'change-entry-button'}
            buttonStyle={{width: '100%'}}
        />
    );
};


