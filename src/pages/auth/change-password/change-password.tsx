import {Button, Form, Input, Typography} from "antd";
import {validatePassword} from "@utils/validatePassword.ts";
import useForm from "antd/lib/form/hooks/useForm";
import {Navigate, useLocation} from "react-router-dom";
import {paths} from "@constants/paths.ts";
import {useChangePasswordMutation} from "@redux/api/auth-api.ts";
import {useAppDispatch} from "@hooks/typed-react-redux-hooks.ts";
import {useEffect} from "react";
import s from "@pages/auth/change-password/change-password.module.css";
import {push} from "redux-first-history";

type hHandleOnFinishType = {
    password:string
    repeatPassword: string
}

export const ChangePassword = () => {
    const [changePassword] = useChangePasswordMutation({})
    const [form] = useForm();
    const {state} = useLocation();
    const password = Form.useWatch('password', form);
    const repeatPassword = Form.useWatch('repeatPassword', form);
    const location = useLocation();
    const dispatch = useAppDispatch();


    const handleOnFinish = async (value: hHandleOnFinishType) => {
        const {password, repeatPassword} = value;
        const result = await changePassword({password: password, confirmPassword: repeatPassword})
        if (!result?.error) {
            dispatch(push(paths.SUCCESS_CHANGE_PASSWORD, {state: {from: location}}))
        } else {
            sessionStorage.setItem('password', password)
            sessionStorage.setItem('redirect', 'true')
            dispatch(push(paths.ERROR_CHANGE_PASSWORD, {state: {from: location}}))
        }
    };

    useEffect(() => {
        const redirect = sessionStorage.getItem('redirect');
        if (redirect) {
            const password = sessionStorage.getItem('password');
            if (password !== null) {
                handleOnFinish({password: password, repeatPassword: password})
                sessionStorage.removeItem('redirect')
            }
        }
    }, [])

    if (!state) {
        return <Navigate to={paths.AUTH}/>;
    }

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <Typography.Title level={3}>
                    Восстановление аккаунта
                </Typography.Title>
                <Form
                    form={form}
                    name='register'
                    initialValues={{remember: true}}
                    onFinish={handleOnFinish}
                >
                    <Form.Item
                        name='password'
                        dependencies={['repeatPassword']}
                        rules={[
                            {
                                required: true,
                                message: '',
                            },
                            {validator: validatePassword},
                        ]}
                        help='Пароль не менее 8 символов, с заглавной буквой и цифрой'
                    >
                        <Input.Password
                            required
                            placeholder='Пароль'
                            data-test-id='change-password'
                        />
                    </Form.Item>


                    <Form.Item
                        name='repeatPassword'
                        dependencies={['password']}
                        rules={[
                            {
                                required: true,
                                message: '',
                            },
                            {
                                validator: (_, value) => {
                                    return new Promise((resolve, reject) => {
                                        if (value !== password) {
                                            reject('Пароли не совпадают');
                                        } else {
                                            resolve(value)
                                        }
                                    },);
                                },
                            }
                        ]}
                    >
                        <Input.Password
                            required
                            placeholder='Повторите пароль'
                            data-test-id='change-confirm-password'
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            className={s.button}
                            type='primary'
                            htmlType='submit'
                            disabled={!(password === repeatPassword)}
                            data-test-id='change-submit-button'
                        >
                            Сохранить
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

