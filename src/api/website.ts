import { BaseAPI } from './base.js';

/**
 * Website Management API
 */
export class WebsiteAPI extends BaseAPI {
  /** List websites */
  async list(): Promise<any> {
    return this.get('/api/v2/websites/list');
  }

  /** Create website */
  async create(params: any): Promise<any> {
    return this.post('/api/v2/websites', params);
  }

  /** Get website by id */
  async getById(id: number): Promise<any> {
    return this.get(`/api/v2/websites/${id}`);
  }

  /** Delete website */
  async remove(id: number): Promise<any> {
    return this.post('/api/v2/websites/del', { id });
  }

  /** Get nginx config */
  async getNginxConfig(id: number): Promise<any> {
    return this.get(`/api/v2/websites/nginx/${id}`);
  }

  /** Update nginx config */
  async updateNginxConfig(id: number, content: string): Promise<any> {
    return this.post('/api/v2/websites/nginx/update', { id, content });
  }
}

/**
 * Website Domain API
 */
export class WebsiteDomainAPI extends BaseAPI {
  /** List domains by website */
  async list(websiteId: number): Promise<any> {
    return this.get(`/api/v2/websites/domains/${websiteId}`);
  }

  /** Create domain */
  async create(params: any): Promise<any> {
    return this.post('/api/v2/websites/domains', params);
  }

  /** Delete domain */
  async remove(id: number): Promise<any> {
    return this.post('/api/v2/websites/domains/del', { id });
  }
}

/**
 * Website SSL API
 */
export class WebsiteSSLAPI extends BaseAPI {
  /** List SSL certificates */
  async list(): Promise<any> {
    return this.post('/api/v2/websites/ssl/search', { page: 1, pageSize: 100 });
  }

  /** Create SSL certificate */
  async create(params: any): Promise<any> {
    return this.post('/api/v2/websites/ssl', params);
  }

  /** Delete SSL certificate */
  async remove(id: number): Promise<any> {
    return this.post('/api/v2/websites/ssl/del', { id });
  }

  /** Obtain SSL (Let's Encrypt) */
  async obtain(params: any): Promise<any> {
    return this.post('/api/v2/websites/ssl/obtain', params);
  }

  /** Renew SSL */
  async renew(id: number): Promise<any> {
    return this.post('/api/v2/websites/ssl/renew', { ID: id });
  }
}
