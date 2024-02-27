export const validatePassword = (_, value: any) => {
    return new Promise((resolve, reject) => {
        if (!value || value.length < 8 || !/[A-ZА-Я]/.test(value) || !/\d/.test(value)) {
            reject('Пароль не менее 8 символов, с заглавной буквой и цифрой');
        } else {
            resolve();
        }
    });
};


