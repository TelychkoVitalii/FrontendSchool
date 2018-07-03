export const emailValidation = (value) => {
    const emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    return !emailValid && 'Use valid email format';
};