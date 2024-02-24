import {Button, Form, Input} from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import {GooglePlusOutlined} from "@ant-design/icons";
import useForm from "antd/lib/form/hooks/useForm";
import s from './login.module.css'
import {useCheckEmailMutation} from "@redux/api/auth-api.ts";
import {useLocation, useNavigate} from "react-router-dom";
import {validateEmail} from "@utils/validateEmail.ts";
import Link from "antd/lib/typography/Link";
import {Suspense, useEffect, useState} from "react";
import {useLogin} from "@hooks/useLogin.ts";
import {useAppDispatch} from "@hooks/typed-react-redux-hooks.ts";
import {push} from "redux-first-history";
import {paths} from "@constants/paths.ts";


export type ErrorType = {
    status: number
    data: {
        statusCode: number
        error: string
        message: string
    };
}

export const Login = () => {
    const [checkEmail, {data: checkEmailData, isError: isErrorCheckEmail, error: errorCheckEmail,
        isSuccess: isSuccessCheckEmail
    }] = useCheckEmailMutation({})
    const [form] = useForm();
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
    const [emailValue, setEmailValue] = useState()
    const email = Form.useWatch('email', form);
    const password = Form.useWatch('password', form);
    const redirect = sessionStorage.getItem('redirect')
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const location = useLocation();
    const {usersLogin} = useLogin()

    const isDisabledEmail = !emailValue && password
    const handleValidate = async () => {
        try {
           await form.validateFields();
            setIsButtonDisabled(false); // Если поля валидны, разрешить наж кнопку
        } catch (error) {
            const emailErrors = form.getFieldError('email');
            setIsButtonDisabled(!!emailErrors.length); // состояние кнопки в зависимости от наличия ошибок
        }
    };

    const handleClickForgetPassword = () => {
        const email = form.getFieldValue(('email'))
        if (!email) {
            setIsButtonDisabled(true);
        } else {
            resetPasswordHeandler({email});
        }
    }

    const handleFieldsChange = async (changedFields: any) => {
        const res = await changedFields[0].errors.length
        setEmailValue(res) //email valid
    };

    const resetPasswordHeandler = async (email: {email: string })  => {
        await checkEmail(email)
    };


    useEffect(() => {
        if (isSuccessCheckEmail) {
            dispatch(push(paths.CONFIRM_EMAIL, {state: {from: location}}));
            sessionStorage.setItem('email', email)
        }
        if (isErrorCheckEmail) {
            if (errorCheckEmail?.status === 404 && errorCheckEmail?.data?.message === 'Email не найден') {
                dispatch(push(paths.ERROR_CHECK_EMAIL_NO_EXIST, {state: {from: location}}));
            } else {
                dispatch(push(paths.ERROR_CHECK_EMAIL, {state: {from: location}}))
                sessionStorage.setItem('redirect', 'true')
                !redirect && sessionStorage.setItem('email', email)
            }
        }
    }, [checkEmailData, isErrorCheckEmail, errorCheckEmail, isSuccessCheckEmail, location, navigate, dispatch])

    useEffect(() => {
        if (redirect) {
            const email = sessionStorage.getItem('email');
            form.setFieldsValue({email: email})
            sessionStorage.removeItem('redirect')
            handleClickForgetPassword()
        }
    }, [])


    return (
        <>
            <Suspense>
                <Form
                    form={form}
                    name='login'
                    className={s.loginForm}
                    initialValues={{remember: true}}
                    onFinish={usersLogin}
                    onFieldsChange={handleFieldsChange}
                    onValuesChange={handleValidate}
                >
                    <Form.Item
                        name='email'
                        rules={[{required: true, message: ''},
                            {validator: validateEmail}
                        ]}

                    >
                        <Input
                            addonBefore={<div>e-mail:</div>}
                            required
                            data-test-id='login-email'
                        />
                    </Form.Item>

                    <Form.Item
                        name='password'
                        rules={[
                            {
                                required: true,
                                message: 'Ведите пароль',
                                validateTrigger: 'onBlur',
                                min: 8
                            },
                            // {validator: validatePassword}
                        ]}
                    >
                        <Input.Password
                            autoComplete='on'
                            placeholder='Пароль'
                            data-test-id='login-password'
                        />
                    </Form.Item>


                    <Form.Item className={s.innerCheckboxButton}>
                        <Form.Item
                            name='rememberMe'
                            valuePropName={'checked'}
                            className={s.innerCheckbox}
                            initialValue={!email}
                        >
                            <Checkbox children={'Запомнить меня'}
                                      defaultChecked={false}
                                      data-test-id='login-remember'
                            />
                        </Form.Item>
                        <Link
                            data-test-id='login-forgot-button'
                            disabled={isButtonDisabled}
                            onClick={handleClickForgetPassword}
                        >
                            Забыли пароль?
                        </Link>
                    </Form.Item>


                    <Form.Item className={s.innerButtonBlock}

                    >
                        <Button
                            type='primary'
                            htmlType='submit'
                            disabled={!isDisabledEmail}
                            data-test-id='login-submit-button'
                        >
                            Войти
                        </Button>
                        <Button type='default' htmlType='submit'>
                            <GooglePlusOutlined/>
                            Войти через Google
                        </Button>
                    </Form.Item>
                </Form>
            </Suspense>
        </>
    )
}
