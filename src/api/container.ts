import { BaseAPI } from './base.js';

/**
 * Container Management API
 */
export class ContainerAPI extends BaseAPI {
  /** List containers */
  async list(): Promise<any> {
    return this.post('/api/v2/containers/search', { page: 1, pageSize: 100 });
  }

  /** Get container info */
  async getInfo(id: string): Promise<any> {
    return this.post('/api/v2/containers/info', { id });
  }

  /** Create container */
  async create(params: any): Promise<any> {
    return this.post('/api/v2/containers', params);
  }

  /** Start container */
  async start(id: string): Promise<any> {
    return this.post('/api/v2/containers/start', { id });
  }

  /** Stop container */
  async stop(id: string): Promise<any> {
    return this.post('/api/v2/containers/stop', { id });
  }

  /** Restart container */
  async restart(id: string): Promise<any> {
    return this.post('/api/v2/containers/restart', { id });
  }

  /** Remove container */
  async remove(id: string): Promise<any> {
    return this.post('/api/v2/containers/del', { id });
  }

  /** Get container logs */
  async getLogs(id: string, tail: number = 100): Promise<any> {
    return this.post('/api/v2/containers/log', { id, tail });
  }
}
