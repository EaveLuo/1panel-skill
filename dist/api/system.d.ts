import { BaseAPI } from './base.js';
export declare class SystemAPI extends BaseAPI {
    getInfo(): Promise<any>;
    getMonitor(): Promise<any>;
}
export declare class SystemSettingAPI extends BaseAPI {
    getSettings(): Promise<any>;
    updateSettings(settings: any): Promise<any>;
}
export declare class DashboardAPI extends BaseAPI {
    getBaseInfo(): Promise<any>;
    getCurrentInfo(): Promise<any>;
    getMemo(): Promise<any>;
    updateMemo(content: string): Promise<any>;
}
//# sourceMappingURL=system.d.ts.map