import { BaseAPI } from './base.js';

/**
 * Database Management API
 */
export class DatabaseAPI extends BaseAPI {
  /** List databases by type */
  async list(type: string): Promise<any> {
    return this.post(`/api/v2/databases/${type}/search`, { page: 1, pageSize: 100 });
  }

  /** Create database */
  async create(type: string, params: any): Promise<any> {
    return this.post(`/api/v2/databases/${type}`, params);
  }

  /** Delete database */
  async remove(type: string, id: number): Promise<any> {
    return this.post(`/api/v2/databases/${type}/del`, { id });
  }
}

/**
 * MySQL Database API
 */
export class DatabaseMysqlAPI extends BaseAPI {
  /** List MySQL databases */
  async list(): Promise<any> {
    return this.post('/api/v2/databases/search', { page: 1, pageSize: 100 });
  }

  /** Create MySQL database */
  async create(params: any): Promise<any> {
    return this.post('/api/v2/databases', params);
  }

  /** Delete MySQL database */
  async remove(id: number): Promise<any> {
    return this.post('/api/v2/databases/del', { id });
  }

  /** Bind user */
  async bindUser(params: any): Promise<any> {
    return this.post('/api/v2/databases/bind', params);
  }

  /** Change password */
  async changePassword(params: any): Promise<any> {
    return this.post('/api/v2/databases/change/password', params);
  }

  /** Get status */
  async getStatus(): Promise<any> {
    return this.get('/api/v2/databases/status');
  }
}

/**
 * Redis Database API
 */
export class DatabaseRedisAPI extends BaseAPI {
  /** Get Redis config */
  async getConf(id: number): Promise<any> {
    return this.post('/api/v2/databases/redis/conf', { id });
  }

  /** Update Redis config */
  async updateConf(id: number, content: string): Promise<any> {
    return this.post('/api/v2/databases/redis/conf/update', { id, content });
  }

  /** Change password */
  async changePassword(id: number, password: string): Promise<any> {
    return this.post('/api/v2/databases/redis/password', { id, value: password });
  }
}
