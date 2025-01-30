import { HashingProvider } from './hashing.provider';
export declare class BcryptProvider implements HashingProvider {
    hashPassword(password: string): Promise<string>;
    comparePassword(password: string, hashedPassword: string): Promise<boolean>;
}
