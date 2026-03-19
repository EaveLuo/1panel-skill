import { BaseAPI } from "./base.js";
/**
 * Database Management API
 * Supports MySQL, PostgreSQL, Redis
 */
export class DatabaseAPI extends BaseAPI {
    // ==================== MySQL ====================
    /** Create MySQL database */
    async createMysql(params) {
        return this.post("/api/v2/databases", params);
    }
    /** Delete MySQL database */
    async deleteMysql(params) {
        return this.post("/api/v2/databases/del", params);
    }
    /** Check before delete MySQL database */
    async checkDeleteMysql(params) {
        return this.post("/api/v2/databases/del/check", params);
    }
    /** Search MySQL databases with pagination */
    async searchMysql(params) {
        return this.post("/api/v2/databases/search", params);
    }
    /** Bind user to MySQL database */
    async bindMysqlUser(params) {
        return this.post("/api/v2/databases/bind", params);
    }
    /** Change MySQL access */
    async changeMysqlAccess(params) {
        return this.post("/api/v2/databases/change/access", params);
    }
    /** Change MySQL password */
    async changeMysqlPassword(params) {
        return this.post("/api/v2/databases/change/password", params);
    }
    /** Update MySQL database description */
    async updateMysqlDescription(params) {
        return this.post("/api/v2/databases/description/update", params);
    }
    /** Load MySQL database from remote */
    async loadMysqlFromRemote(params) {
        return this.post("/api/v2/databases/load", params);
    }
    /** List MySQL database format collation options */
    async listMysqlFormatOptions() {
        return this.post("/api/v2/databases/format/options", {});
    }
    /** Load MySQL remote access */
    async loadMysqlRemoteAccess(params) {
        return this.post("/api/v2/databases/remote", params);
    }
    /** Load MySQL status info */
    async getMysqlStatus() {
        return this.post("/api/v2/databases/status", {});
    }
    /** Load MySQL variables info */
    async getMysqlVariables() {
        return this.post("/api/v2/databases/variables", {});
    }
    /** Update MySQL variables */
    async updateMysqlVariables(params) {
        return this.post("/api/v2/databases/variables/update", params);
    }
    // ==================== Generic Database ====================
    /** Create database */
    async create(params) {
        return this.post("/api/v2/databases/db", params);
    }
    /** Get databases by name */
    async getByName(name) {
        return this.request(`/api/v2/databases/db/${name}`, { method: "GET" });
    }
    /** Check database */
    async check(params) {
        return this.post("/api/v2/databases/db/check", params);
    }
    /** Delete database */
    async remove(params) {
        return this.post("/api/v2/databases/db/del", params);
    }
    /** Check before delete remote database */
    async checkDeleteRemote(params) {
        return this.post("/api/v2/databases/db/del/check", params);
    }
    /** List databases by type */
    async listByType(type) {
        return this.request(`/api/v2/databases/db/item/${type}`, { method: "GET" });
    }
    /** List databases */
    async listAll(type) {
        return this.request(`/api/v2/databases/db/list/${type}`, { method: "GET" });
    }
    /** Search databases with pagination */
    async search(params) {
        return this.post("/api/v2/databases/db/search", params);
    }
    /** Update database */
    async update(params) {
        return this.post("/api/v2/databases/db/update", params);
    }
    // ==================== Common Database ====================
    /** Load base info */
    async getCommonInfo() {
        return this.post("/api/v2/databases/common/info", {});
    }
    /** Load Database conf */
    async loadConfigFile() {
        return this.post("/api/v2/databases/common/load/file", {});
    }
    /** Update conf by upload file */
    async updateConfigByFile(params) {
        return this.post("/api/v2/databases/common/update/conf", params);
    }
    // ==================== PostgreSQL ====================
    /** Create PostgreSQL database */
    async createPostgresql(params) {
        return this.post("/api/v2/databases/pg", params);
    }
    /** Load PostgreSQL database from remote */
    async loadPostgresqlFromRemote(database, params) {
        return this.post(`/api/v2/databases/pg/${database}/load`, params);
    }
    /** Bind PostgreSQL user */
    async bindPostgresqlUser(params) {
        return this.post("/api/v2/databases/pg/bind", params);
    }
    /** Delete PostgreSQL database */
    async deletePostgresql(params) {
        return this.post("/api/v2/databases/pg/del", params);
    }
    /** Check before delete PostgreSQL database */
    async checkDeletePostgresql(params) {
        return this.post("/api/v2/databases/pg/del/check", params);
    }
    /** Update PostgreSQL database description */
    async updatePostgresqlDescription(params) {
        return this.post("/api/v2/databases/pg/description", params);
    }
    /** Change PostgreSQL password */
    async changePostgresqlPassword(params) {
        return this.post("/api/v2/databases/pg/password", params);
    }
    /** Change PostgreSQL privileges */
    async changePostgresqlPrivileges(params) {
        return this.post("/api/v2/databases/pg/privileges", params);
    }
    /** Search PostgreSQL databases with pagination */
    async searchPostgresql(params) {
        return this.post("/api/v2/databases/pg/search", params);
    }
    // ==================== Redis ====================
    /** Load Redis conf */
    async getRedisConf(params) {
        return this.post("/api/v2/databases/redis/conf", params);
    }
    /** Update Redis conf */
    async updateRedisConf(params) {
        return this.post("/api/v2/databases/redis/conf/update", params);
    }
    /** Install redis-cli */
    async installRedisCli() {
        return this.post("/api/v2/databases/redis/install/cli", {});
    }
    /** Change Redis password */
    async changeRedisPassword(params) {
        return this.post("/api/v2/databases/redis/password", params);
    }
    /** Load Redis persistence conf */
    async getRedisPersistenceConf() {
        return this.post("/api/v2/databases/redis/persistence/conf", {});
    }
    /** Update Redis persistence conf */
    async updateRedisPersistenceConf(params) {
        return this.post("/api/v2/databases/redis/persistence/update", params);
    }
    /** Load Redis status info */
    async getRedisStatus() {
        return this.post("/api/v2/databases/redis/status", {});
    }
}
//# sourceMappingURL=database.js.map