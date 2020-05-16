import { Request as ExpressRequest, Express } from 'express';
import { Server as HttpServer } from 'http';
import { Server as HttpsServer } from 'https';

export type Server = HttpServer | HttpsServer;

export type Session = Express.Session;

export interface Request extends ExpressRequest {
    session: Session;
}
export interface ContextProvider {
    request: Request;
}

export interface IException {
    code: string;
    message?: string | null;
    path?: string | null;
    data?: {
        [key: string]: any;
    };
}
export interface IExceptions {
    __typename: string;
    exceptions: IException[];
}

export interface IDone {
    done: boolean;
}
