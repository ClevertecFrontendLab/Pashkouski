import {Navigate, Outlet} from "react-router-dom";
import s from './auth-layout.module.css'
import {Layout} from "antd";

export const AuthLayout = () => {

    const localToken = localStorage.getItem('token');
    const sessionToken = sessionStorage.getItem('token');

    const isLogin = localToken || sessionToken !== null;

    return (
        !isLogin
            ?
            <div>
                <Layout.Content className={s.authLayout}>
                    <div className={s.wrapperLayout}>
                        <Outlet/>
                    </div>
                </Layout.Content>
            </div>
            :
            <Navigate to={'/main'}/>
    );
};

