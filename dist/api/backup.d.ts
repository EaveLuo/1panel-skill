import { BaseAPI } from './base.js';
/**
 * Backup Management API
 */
export declare class BackupAPI extends BaseAPI {
    /** List backups */
    list(): Promise<any>;
    /** Create backup */
    create(backup: any): Promise<any>;
    /** Restore backup */
    restore(id: number): Promise<any>;
    /** Delete backup */
    remove(id: number): Promise<any>;
}
/**
 * Backup Account API
 */
export declare class BackupAccountAPI extends BaseAPI {
    /** List backup accounts */
    list(): Promise<any>;
    /** Create backup account */
    create(params: any): Promise<any>;
    /** Delete backup account */
    remove(type: string): Promise<any>;
}
//# sourceMappingURL=backup.d.ts.map