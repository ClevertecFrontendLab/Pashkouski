import {useLoginMutation} from "@redux/api/auth-api.ts";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import {paths} from "@constants/paths.ts";
import {LoginBodyType} from "@redux/api/auth-type.ts";
import {useAppDispatch} from "@hooks/typed-react-redux-hooks.ts";
import {push} from "redux-first-history";


type UserLoginType = {
    email: string
    password: string
}

type ReturnUseLoginHooksType = {
    usersLogin: (data: UserLoginType) => void
}

export const useLogin = (): ReturnUseLoginHooksType => {
    const [login, {data, isError}] = useLoginMutation({})
    const {accessToken} = data || {};
    const location = useLocation()
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (accessToken !== undefined) {
            localStorage.setItem('token', accessToken)
            dispatch(push(paths.MAIN_PAGE, {state: {from: location}}));
        }
        if (isError) {
            localStorage.removeItem('token')
            dispatch(push(paths.ERROR_LOGIN, {state: {from: location}}));
        }
    }, [isError, accessToken, location, dispatch])

    const usersLogin = async (value: LoginBodyType) => {
        const {email, password} = value;
        await login({email, password})
    };

    return {usersLogin}
}

