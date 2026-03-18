import { OnePanelConfig } from './api/base.js';
import {
  ContainerAPI,
  WebsiteAPI,
  WebsiteDomainAPI,
  WebsiteSSLAPI,
  DatabaseAPI,
  DatabaseMysqlAPI,
  DatabaseRedisAPI,
  FileAPI,
  SystemAPI,
  SystemSettingAPI,
  DashboardAPI,
  BackupAPI,
  BackupAccountAPI
} from './api/index.js';

/**
 * 1Panel Skill - Main Client
 * Unified interface for managing 1Panel servers
 */
export class OnePanelClient {
  config: OnePanelConfig;

  // API Modules
  container: ContainerAPI;
  website: WebsiteAPI;
  websiteDomain: WebsiteDomainAPI;
  websiteSSL: WebsiteSSLAPI;
  database: DatabaseAPI;
  databaseMysql: DatabaseMysqlAPI;
  databaseRedis: DatabaseRedisAPI;
  file: FileAPI;
  system: SystemAPI;
  systemSetting: SystemSettingAPI;
  dashboard: DashboardAPI;
  backup: BackupAPI;
  backupAccount: BackupAccountAPI;

  constructor(config: OnePanelConfig) {
    this.config = config;
    this.container = new ContainerAPI(config);
    this.website = new WebsiteAPI(config);
    this.websiteDomain = new WebsiteDomainAPI(config);
    this.websiteSSL = new WebsiteSSLAPI(config);
    this.database = new DatabaseAPI(config);
    this.databaseMysql = new DatabaseMysqlAPI(config);
    this.databaseRedis = new DatabaseRedisAPI(config);
    this.file = new FileAPI(config);
    this.system = new SystemAPI(config);
    this.systemSetting = new SystemSettingAPI(config);
    this.dashboard = new DashboardAPI(config);
    this.backup = new BackupAPI(config);
    this.backupAccount = new BackupAccountAPI(config);
  }
}

export { OnePanelConfig } from './api/base.js';
export * from './api/index.js';
