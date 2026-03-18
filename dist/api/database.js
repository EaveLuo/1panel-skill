import { BaseAPI } from './base.js';
/**
 * Database Management API
 */
export class DatabaseAPI extends BaseAPI {
    /** List databases by type */
    async list(type) {
        return this.post(`/api/v2/databases/${type}/search`, { page: 1, pageSize: 100 });
    }
    /** Create database */
    async create(type, params) {
        return this.post(`/api/v2/databases/${type}`, params);
    }
    /** Delete database */
    async remove(type, id) {
        return this.post(`/api/v2/databases/${type}/del`, { id });
    }
}
/**
 * MySQL Database API
 */
export class DatabaseMysqlAPI extends BaseAPI {
    /** List MySQL databases */
    async list() {
        return this.post('/api/v2/databases/search', { page: 1, pageSize: 100 });
    }
    /** Create MySQL database */
    async create(params) {
        return this.post('/api/v2/databases', params);
    }
    /** Delete MySQL database */
    async remove(id) {
        return this.post('/api/v2/databases/del', { id });
    }
    /** Bind user */
    async bindUser(params) {
        return this.post('/api/v2/databases/bind', params);
    }
    /** Change password */
    async changePassword(params) {
        return this.post('/api/v2/databases/change/password', params);
    }
    /** Get status */
    async getStatus() {
        return this.get('/api/v2/databases/status');
    }
}
/**
 * Redis Database API
 */
export class DatabaseRedisAPI extends BaseAPI {
    /** Get Redis config */
    async getConf(id) {
        return this.post('/api/v2/databases/redis/conf', { id });
    }
    /** Update Redis config */
    async updateConf(id, content) {
        return this.post('/api/v2/databases/redis/conf/update', { id, content });
    }
    /** Change password */
    async changePassword(id, password) {
        return this.post('/api/v2/databases/redis/password', { id, value: password });
    }
}
//# sourceMappingURL=database.js.map