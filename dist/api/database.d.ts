import { BaseAPI } from "./base.js";
/**
 * Database Management API
 * Supports MySQL, PostgreSQL, Redis
 */
export declare class DatabaseAPI extends BaseAPI {
    /** Create MySQL database */
    createMysql(params: any): Promise<any>;
    /** Delete MySQL database */
    deleteMysql(params: any): Promise<any>;
    /** Check before delete MySQL database */
    checkDeleteMysql(params: any): Promise<any>;
    /** Search MySQL databases with pagination */
    searchMysql(params: any): Promise<any>;
    /** Bind user to MySQL database */
    bindMysqlUser(params: any): Promise<any>;
    /** Change MySQL access */
    changeMysqlAccess(params: any): Promise<any>;
    /** Change MySQL password */
    changeMysqlPassword(params: any): Promise<any>;
    /** Update MySQL database description */
    updateMysqlDescription(params: any): Promise<any>;
    /** Load MySQL database from remote */
    loadMysqlFromRemote(params: any): Promise<any>;
    /** List MySQL database format collation options */
    listMysqlFormatOptions(): Promise<any>;
    /** Load MySQL remote access */
    loadMysqlRemoteAccess(params: any): Promise<any>;
    /** Load MySQL status info */
    getMysqlStatus(): Promise<any>;
    /** Load MySQL variables info */
    getMysqlVariables(): Promise<any>;
    /** Update MySQL variables */
    updateMysqlVariables(params: any): Promise<any>;
    /** Create database */
    create(params: any): Promise<any>;
    /** Get databases by name */
    getByName(name: string): Promise<any>;
    /** Check database */
    check(params: any): Promise<any>;
    /** Delete database */
    remove(params: any): Promise<any>;
    /** Check before delete remote database */
    checkDeleteRemote(params: any): Promise<any>;
    /** List databases by type */
    listByType(type: string): Promise<any>;
    /** List databases */
    listAll(type: string): Promise<any>;
    /** Search databases with pagination */
    search(params: any): Promise<any>;
    /** Update database */
    update(params: any): Promise<any>;
    /** Load base info */
    getCommonInfo(): Promise<any>;
    /** Load Database conf */
    loadConfigFile(): Promise<any>;
    /** Update conf by upload file */
    updateConfigByFile(params: any): Promise<any>;
    /** Create PostgreSQL database */
    createPostgresql(params: any): Promise<any>;
    /** Load PostgreSQL database from remote */
    loadPostgresqlFromRemote(database: string, params: any): Promise<any>;
    /** Bind PostgreSQL user */
    bindPostgresqlUser(params: any): Promise<any>;
    /** Delete PostgreSQL database */
    deletePostgresql(params: any): Promise<any>;
    /** Check before delete PostgreSQL database */
    checkDeletePostgresql(params: any): Promise<any>;
    /** Update PostgreSQL database description */
    updatePostgresqlDescription(params: any): Promise<any>;
    /** Change PostgreSQL password */
    changePostgresqlPassword(params: any): Promise<any>;
    /** Change PostgreSQL privileges */
    changePostgresqlPrivileges(params: any): Promise<any>;
    /** Search PostgreSQL databases with pagination */
    searchPostgresql(params: any): Promise<any>;
    /** Load Redis conf */
    getRedisConf(params: any): Promise<any>;
    /** Update Redis conf */
    updateRedisConf(params: any): Promise<any>;
    /** Install redis-cli */
    installRedisCli(): Promise<any>;
    /** Change Redis password */
    changeRedisPassword(params: any): Promise<any>;
    /** Load Redis persistence conf */
    getRedisPersistenceConf(): Promise<any>;
    /** Update Redis persistence conf */
    updateRedisPersistenceConf(params: any): Promise<any>;
    /** Load Redis status info */
    getRedisStatus(): Promise<any>;
}
//# sourceMappingURL=database.d.ts.map