import { BaseAPI } from './base.js';

export class SystemAPI extends BaseAPI {
  async getInfo() {
    return this.get('/api/v2/host/tool/device');
  }

  async getMonitor() {
    return this.post('/api/v2/hosts/monitor/search', {});
  }
}

export class SystemSettingAPI extends BaseAPI {
  async getSettings() {
    return this.get('/api/v2/settings/search');
  }

  async updateSettings(settings: any) {
    return this.post('/api/v2/settings/update', settings);
  }
}

export class DashboardAPI extends BaseAPI {
  async getBaseInfo() {
    return this.get('/api/v2/dashboard/base');
  }

  async getCurrentInfo() {
    return this.get('/api/v2/dashboard/current');
  }

  async getMemo() {
    return this.get('/api/v2/dashboard/memo');
  }

  async updateMemo(content: string) {
    return this.post('/api/v2/dashboard/memo', { content });
  }
}
