import {useState} from 'react';
import s from "./confirm-email.module.css";
import {Typography} from "antd";
import VerificationInput from "react-verification-input";
import {useConfirmEmailMutation} from "@redux/api/auth-api.ts";
import {ErrorIcon} from "@assets/img/error.tsx";
import {Execute} from "@assets/img/execute.tsx";
import {Navigate, useLocation} from "react-router-dom";
import {paths} from "@constants/paths.ts";
import {push} from "redux-first-history";
import {useAppDispatch} from "@hooks/typed-react-redux-hooks.ts";



export const ConfirmEmail = () => {
        const [confirmEmail] = useConfirmEmailMutation()
        const [variant, setVariant] = useState<'isSuccess' | 'isError'>('isSuccess')
        const [verificationInputValue, setVerificationInputValue] = useState('')
        const {state} = useLocation();
        const location = useLocation();
        const emailData = sessionStorage.getItem('email')
        const dispatch = useAppDispatch()

        const items = {
            'isSuccess':
                {
                    icon: <Execute/>,
                    title: ( <span>Неверный код <br/> для восстановления аккаунта</span>),
                    text: (
                        <span>
                            Мы отправили вам на e-mail<b>&ensp;{`${emailData}`}&ensp;</b>шестизначный код. Введите его в поле ниже.
                        </span>
                    ),
                    email: 'Не пришло письмо? Проверьте папку Спам.'
                },
            'isError':
                {
                    icon: <ErrorIcon/>,
                    title: ( <span>Неверный код. Введите код <br className={s.brTitle}/> для восстановления аккаунта</span>),
                    text: (
                        <span>
                            Мы отправили вам на e-mail<b>&ensp;{`${emailData}`}&ensp;</b>шестизначный код. Введите его в поле ниже.
                        </span>
                    ),
                    email: 'Не пришло письмо? Проверьте папку Спам..'
                }
        } as const

        const VerificationInputOnCompleteHeandler = async (value: string) => {
            if (emailData !== null && value) {
                const result = await confirmEmail({email: emailData, code: value})
                if (!result?.error) {
                    dispatch(push(paths.CHANGE_PASSWORD, {state: {form: location}}))
                } else {
                    setVariant('isError')
                    setVerificationInputValue('')
                }
            }
        }


        if (!state) {
            return <Navigate to={paths.AUTH}/>;
        }

        return (
            <div className={s.wrapper}>
                <div className={s.container}>
                    <div className={s.icon}>{items[variant].icon}</div>
                    <div className={s.inner}>
                        <div>
                            <Typography.Title level={3}>
                                {items[variant].title}
                            </Typography.Title>
                            <Typography.Text>
                                {items[variant].text}
                            </Typography.Text>
                        </div>
                        <div className={s.verificationInput}>
                            <VerificationInput
                                key={'VerificationInput'}
                                placeholder={''}
                                onComplete={VerificationInputOnCompleteHeandler}
                                onChange={(value) => setVerificationInputValue(value)}
                                value={verificationInputValue}
                                inputProps={{
                                    "data-test-id": "verification-input"
                                }}
                                classNames={{
                                    characterInactive: s.characterInactive,
                                    container: s.containerVerification,
                                    character: `${variant == 'isSuccess' ? s.verification : s.verificationError}`
                            }}
                            />
                        </div>
                        <Typography.Text className={s.text}>
                            {items[variant].email}
                        </Typography.Text>
                    </div>
                </div>
            </div>
        );
    }
;

