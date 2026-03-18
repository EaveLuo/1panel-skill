/**
 * 1Panel API Base Client
 */

export interface OnePanelConfig {
  host: string;
  port: number;
  apiKey: string;
  protocol: 'http' | 'https';
}

export class BaseAPI {
  protected config: OnePanelConfig;
  protected baseUrl: string;

  constructor(config: OnePanelConfig) {
    this.config = config;
    this.baseUrl = `${config.protocol}://${config.host}:${config.port}`;
  }

  protected async request(path: string, options: any = {}): Promise<any> {
    const url = `${this.baseUrl}${path}`;
    const headers: any = {
      'Content-Type': 'application/json',
      'Authorization': this.config.apiKey,
      ...options.headers
    };

    const response = await fetch(url, { ...options, headers });
    
    if (!response.ok) {
      const error = await response.text();
      throw new Error(`HTTP ${response.status}: ${error}`);
    }

    const result = await response.json();
    
    if (result.code !== 200) {
      throw new Error(`API Error ${result.code}: ${result.message}`);
    }

    return result.data;
  }

  protected async get(path: string): Promise<any> {
    return this.request(path, { method: 'GET' });
  }

  protected async post(path: string, body?: any): Promise<any> {
    const options: any = { method: 'POST' };
    if (body !== undefined) {
      options.body = JSON.stringify(body);
    }
    return this.request(path, options);
  }
}
