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
