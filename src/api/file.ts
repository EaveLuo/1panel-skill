import { BaseAPI } from './base.js';

/**
 * File Management API
 */
export class FileAPI extends BaseAPI {
  /** List files in directory */
  async list(path: string): Promise<any> {
    return this.post('/api/v2/files/search', { path, page: 1, pageSize: 100 });
  }

  /** Get file content */
  async getContent(path: string): Promise<any> {
    return this.post('/api/v2/files/content', { path });
  }

  /** Save file content */
  async save(path: string, content: string): Promise<any> {
    return this.post('/api/v2/files', { path, content });
  }

  /** Delete file or directory */
  async remove(path: string): Promise<any> {
    return this.post('/api/v2/files/del', { path });
  }

  /** Create directory */
  async createDir(path: string): Promise<any> {
    return this.post('/api/v2/files/dir', { path });
  }

  /** Compress files */
  async compress(params: any): Promise<any> {
    return this.post('/api/v2/files/compress', params);
  }

  /** Decompress file */
  async decompress(params: any): Promise<any> {
    return this.post('/api/v2/files/decompress', params);
  }

  /** Move file */
  async move(from: string, to: string): Promise<any> {
    return this.post('/api/v2/files/move', { from, to });
  }
}
