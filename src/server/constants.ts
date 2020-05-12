export const isTest = process.env.NODE_ENV === 'test';
export const REDIS_SESSION_PREFIX = isTest ? 'test-sess' : 'sess';
export const REDIS_USER_SESSION_PREFIX = isTest ? 'test-user-session' : 'user-session';
export const REDIS_FORGOT_PASSWORD_PREFIX = isTest ? 'test-forgot-pass' : 'forgot-pass';
export const REDIS_VERIFY_USER = isTest ? 'test-verify' : 'verify';
export const REDIS_SLOW_DOWN = isTest ? 'test-slow' : 'slow';
export const REDIS_RATE_LIMIT = isTest ? 'test-rate' : 'rate';

export const REDIS_URL = process.env.MESSAGE_BROKER || 'redis://localhost:6379/0';
export const ALLOWED_HOST = [
    'http://localhost:4000',
    'http://localhost:4001',
    (process.env.CLIENT as string) || 'http://localhost:8000',
];
