import {Button, Form, Input} from "antd";
import s from './registration.module.css'
import {GooglePlusOutlined} from "@ant-design/icons";
import useForm from 'antd/lib/form/hooks/useForm';
import {useRegistrationMutation} from "@redux/api/auth-api.ts";
import {useAppDispatch} from "@hooks/typed-react-redux-hooks.ts";
import {validatePassword} from "@utils/validatePassword.ts";
import {validateEmail} from "@utils/validateEmail.ts";
import {paths} from "@constants/paths.ts";
import {useEffect, useState} from "react";
import {push} from "redux-first-history";
import {RegisterBodyType} from "@redux/api/auth-type.ts";
import {useLocation} from "react-router-dom";


export const Registration = () => {
    const [registration, {isError, isSuccess, error}] = useRegistrationMutation()
    const [form] = useForm();
    const [emailValue, setEmailValue] = useState()
    // const email = Form.useWatch('email', form);
    const password = Form.useWatch('password', form);
    const repeatPassword = Form.useWatch('repeatPassword', form);
    const disabledBtn = !emailValue && password && password === repeatPassword;
    const dispatch = useAppDispatch();
    const location = useLocation()

    const handleOnFinish = (value: RegisterBodyType) => {
        const {email, password} = value
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('password', password);
        registration({email, password})
    };

    useEffect(() => {
        if (isSuccess) {
            sessionStorage.removeItem('email');
            sessionStorage.removeItem('password');
            dispatch(push(paths.SUCCESS, {state: {from: location}}));
        }
        if (isError) {
            if (error?.status === 409) {
                dispatch(push(paths.ERROR_USER_EXIST, {state: {from: location}}));
            } else {
                sessionStorage.setItem('redirect', 'true')
                dispatch(push(paths.ERROR, {state: {from: location}}));
            }
        }
    }, [isError, isSuccess, dispatch, location, error])


    const handleFieldsChange = (changedFields: any) => {
        setEmailValue(changedFields[0].errors.length) //email
    };

    useEffect(() => {
        const redirect = sessionStorage.getItem('redirect');
        if (redirect) {
            const email = sessionStorage.getItem('email');
            const password = sessionStorage.getItem('password');
            if (email && password) {
                handleOnFinish({email, password})
                sessionStorage.removeItem('redirect')
            }
        }
    }, [])

    return (
        <Form
            form={form}
            name='register'
            className={s.registerForm}
            initialValues={{remember: true}}
            onFinish={handleOnFinish}
            onFieldsChange={handleFieldsChange}>
            <Form.Item
                name='email'
                rules={[{required: true, message: ''},
                    {validator: validateEmail}]}>
                <Input
                    data-test-id='registration-email'
                    addonBefore={<div>e-mail:</div>}
                    required/>
            </Form.Item>

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
                    data-test-id='registration-password'
                    required
                    placeholder='Пароль'/>
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
                    }]}>
                <Input.Password
                    data-test-id='registration-confirm-password'
                    required
                    placeholder='Повторите пароль'/>
            </Form.Item>

            <Form.Item className={s.innerButtonBlock}>
                <Button
                    type='primary'
                    htmlType='submit'
                    disabled={!disabledBtn}
                    data-test-id='registration-submit-button'>
                    Войти
                </Button>
                <Button type='default' htmlType='submit' className={s.googleBtn}>
                    <GooglePlusOutlined/>
                    Регистрация через Google
                </Button>
            </Form.Item>
        </Form>
    )
}
