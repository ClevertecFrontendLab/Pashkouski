import {Navigate, Route, Routes} from "react-router-dom";
import {BasicLayout} from "@components/basic-layout/basic-layout.tsx";
import {AuthLayout} from "@components/auth-layout/auth-layout.tsx";
import {Auth} from "@pages/auth/auth/auth.tsx";
import {paths} from "@constants/paths.ts";
import {ErrorLogin} from "@shared/error-login/error-login.tsx";
import {RegistrationSuccessful} from "@shared/registration-successful/registration-successful.tsx";
import {ErrorCheckEmail} from "@shared/error-check-email/error-check-email.tsx";
import {ErrorUserExist} from "@shared/error-user-exist/error-user-exist.tsx";
import {Error} from "@shared/error/error.tsx";
import {ConfirmEmail} from "@pages/auth/confirm-email/confirm-email.tsx";
import {ChangePassword} from "@pages/auth/change-password/change-password.tsx";
import {ErrorCheckEmailNoExist} from "@shared/error-check-email-no-exist/error-check-email-no-exist.tsx";
import {ErrorChangePassword} from "@shared/error-change-password/error-change-password.tsx";
import {SuccessChangePassword} from "@shared/success-change-password/success-change-password.tsx";
import {MainPage} from "@pages/main-page/main-page.tsx";
import {Feedbacks} from "@pages/feedbacks/feedbacks.tsx";


export const routes = [
    {
        element: <BasicLayout/>,
        children: [
            {
                path: paths.MAIN,
                element: <Navigate to={paths.MAIN_PAGE}/>,
            },
            {
                path: paths.MAIN_PAGE,
                element: <MainPage />,
            },
            {
                path: paths.FEEDBACKS,
                element: <Feedbacks />,
            },
        ]
    },
    {
        element: <AuthLayout/>,
        children: [
            {
                path: paths.REGISTRATION,
                element: <Auth/>,
            },
            {
                path: paths.AUTH,
                element: <Auth/>,
            },
            {
                path: paths.ERROR_LOGIN,
                element: <ErrorLogin/>,
            },
            {
                path: paths.SUCCESS,
                element: <RegistrationSuccessful/>,
            },
            {
                path: paths.ERROR_CHECK_EMAIL,
                element: <ErrorCheckEmail/>,
            },
            {
                path: paths.ERROR_CHECK_EMAIL_NO_EXIST,
                element: <ErrorCheckEmailNoExist/>,
            },
            {
                path: paths.ERROR_USER_EXIST,
                element: <ErrorUserExist/>,
            },
            {
                path: paths.ERROR,
                element: <Error/>,
            },
            {
                path: '/auth/confirm-email',
                element: <ConfirmEmail/>,
            },
            {
                path: paths.CHANGE_PASSWORD,
                element: <ChangePassword/>,
            },
            {
                path: paths.ERROR_CHANGE_PASSWORD,
                element: <ErrorChangePassword/>,
            },
            {
                path: paths.SUCCESS_CHANGE_PASSWORD,
                element: <SuccessChangePassword/>,
            },

        ]
    },
    {
        path: '*',
        element: <Navigate to={paths.AUTH}/>,
    },
]

export const Routers = () => {
    return (
        <>
            <Routes>
                {routes.map((el, index) => (
                    <Route
                        element={el.element}
                        key={index}
                        path={el?.path}
                    >
                        {el.children && el.children.map((child, indexChild) => (
                            <Route key={indexChild}
                                   path={child?.path}
                                   element={child.element}
                            />
                        ))}
                    </Route>)
                )}
            </Routes>
        </>
    )
};





