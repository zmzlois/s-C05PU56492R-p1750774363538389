import { jwtVerify, importJWK, decodeJwt } from 'jose';
export declare function auth_check(request: Request): Promise<{
    valid: boolean;
    error: string;
    payload?: undefined;
} | {
    valid: boolean;
    payload: import("jose").JWTPayload;
    error?: undefined;
}>;
export { jwtVerify, importJWK, decodeJwt };
