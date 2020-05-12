import { Exception } from 'utils/exceptionGenerator';

export const USER_EXISTS_EXCEPTION = 'UserExistsException';
export const UserExistsException = Exception.generator({
    code: USER_EXISTS_EXCEPTION,
    message: 'User you are trying to create exists. Try with another email.',
});

export const USER_DOES_NOT_EXIST = 'UserDoesNotExistException';
export const UserDoesNotExistException = Exception.generator({
    code: USER_DOES_NOT_EXIST,
    message: 'User does not exists. Try registering user',
});

export const RECAPTCHA_NOT_VALID_EXCEPTION = 'RecaptchaNotValidException';
export const RecaptchaNotValidException = Exception.generator({
    code: RECAPTCHA_NOT_VALID_EXCEPTION,
    message: 'Recaptcha not valid or not provided',
});

export const ACCOUNT_LOCKED_EXCEPTION = 'AccountLockedException';
export const AccountLockedException = Exception.generator({
    code: ACCOUNT_LOCKED_EXCEPTION,
    message: 'Your account is locked',
});
