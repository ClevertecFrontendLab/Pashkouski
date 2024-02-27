export type ChangePasswordType = {
    password: string
    confirmPassword: string
}

export type RegisterBodyType = {
    email: string
    password: string
}

export type CheckEmailBodyType = {
    email: string
}
export type ConfirmEmailType = {
    email: string
    code: string
}

export type LoginBodyType = {
    email: string;
    password: string;
    rememberMe?: boolean;
}
