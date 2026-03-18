import { ContainerAPI, WebsiteAPI, WebsiteDomainAPI, WebsiteSSLAPI, DatabaseAPI, DatabaseMysqlAPI, DatabaseRedisAPI, FileAPI, SystemAPI, SystemSettingAPI, DashboardAPI, BackupAPI, BackupAccountAPI } from './api/index.js';
/**
 * 1Panel Skill - Main Client
 * Unified interface for managing 1Panel servers
 */
export class OnePanelClient {
    config;
    // API Modules
    container;
    website;
    websiteDomain;
    websiteSSL;
    database;
    databaseMysql;
    databaseRedis;
    file;
    system;
    systemSetting;
    dashboard;
    backup;
    backupAccount;
    constructor(config) {
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
export * from './api/index.js';
//# sourceMappingURL=client.js.map