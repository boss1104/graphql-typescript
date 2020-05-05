import { Exception } from 'utils/exceptionGenerator';

export const PASSWORD_GUESSABLE_EXCEPTION = 'PasswordGuessableException';
export const PasswordGuessableException = Exception.generator({
    code: PASSWORD_GUESSABLE_EXCEPTION,
    message: 'Password can be easily guessed, try another password',
    path: 'password',
});

export const OLD_PASSWORD_USED_EXCEPTION = 'OldPasswordUsedException';
export const OldPasswordUsedException = Exception.generator({
    code: OLD_PASSWORD_USED_EXCEPTION,
    message: 'The password was changed recently. Try resetting the password',
    path: 'password',
});

export const INVALID_CREDENTIALS_EXCEPTION = 'InvalidCredentialsException';
export const InvalidCredentialsException = Exception.generator({
    code: INVALID_CREDENTIALS_EXCEPTION,
    message: 'Either email or password is incorrect',
});
