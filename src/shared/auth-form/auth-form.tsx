import {CSSProperties, ReactNode} from 'react';
import s from '@shared/auth-form/auth-form.module.css'
import {Button, Typography} from 'antd';

type AuthErrorType = {
    icon: ReactNode
    title: string
    text: string
    onClick: () => void
    buttonText: string
    dataId: string
    iconStyle?: CSSProperties
    containerStyle?: CSSProperties
    innerStyle?: CSSProperties
    titleStyle?: CSSProperties
    textStyle?: CSSProperties
    buttonStyle?: CSSProperties
}


export const AuthForm = (value: AuthErrorType) => {
    const {icon, title, text, onClick, buttonText, dataId, ...res} = value
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.icon} style={res.iconStyle}>{icon}</div>
                <div className={s.inner}>
                    <div>
                        <Typography.Title level={1}>
                            {title}
                        </Typography.Title>
                        <Typography.Text >
                            {text}
                        </Typography.Text>
                    </div>
                    <Button
                        className={s.button}
                        type='primary'
                        onClick={onClick}
                        data-test-id={dataId}
                        style={res.buttonStyle}
                    >
                        {buttonText}
                    </Button>
                </div>
            </div>
        </div>
    );
};
