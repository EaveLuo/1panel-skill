import { BaseAPI } from './base.js';
/**
 * Database Management API
 */
export declare class DatabaseAPI extends BaseAPI {
    /** List databases by type */
    list(type: string): Promise<any>;
    /** Create database */
    create(type: string, params: any): Promise<any>;
    /** Delete database */
    remove(type: string, id: number): Promise<any>;
}
/**
 * MySQL Database API
 */
export declare class DatabaseMysqlAPI extends BaseAPI {
    /** List MySQL databases */
    list(): Promise<any>;
    /** Create MySQL database */
    create(params: any): Promise<any>;
    /** Delete MySQL database */
    remove(id: number): Promise<any>;
    /** Bind user */
    bindUser(params: any): Promise<any>;
    /** Change password */
    changePassword(params: any): Promise<any>;
    /** Get status */
    getStatus(): Promise<any>;
}
/**
 * Redis Database API
 */
export declare class DatabaseRedisAPI extends BaseAPI {
    /** Get Redis config */
    getConf(id: number): Promise<any>;
    /** Update Redis config */
    updateConf(id: number, content: string): Promise<any>;
    /** Change password */
    changePassword(id: number, password: string): Promise<any>;
}
//# sourceMappingURL=database.d.ts.map