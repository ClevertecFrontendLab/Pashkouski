export const validateEmail = (_, value: string) => {
    return new Promise((resolve, reject) => {
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            reject('Некорректный формат адреса электронной почты');
        } else {
            resolve(undefined);
        }
    });
};
