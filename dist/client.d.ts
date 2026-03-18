import { OnePanelConfig } from './api/base.js';
import { ContainerAPI, WebsiteAPI, WebsiteDomainAPI, WebsiteSSLAPI, DatabaseAPI, DatabaseMysqlAPI, DatabaseRedisAPI, FileAPI, SystemAPI, SystemSettingAPI, DashboardAPI, BackupAPI, BackupAccountAPI } from './api/index.js';
/**
 * 1Panel Skill - Main Client
 * Unified interface for managing 1Panel servers
 */
export declare class OnePanelClient {
    config: OnePanelConfig;
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
    constructor(config: OnePanelConfig);
}
export { OnePanelConfig } from './api/base.js';
export * from './api/index.js';
//# sourceMappingURL=client.d.ts.map