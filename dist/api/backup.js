import { BaseAPI } from './base.js';
/**
 * Backup Management API
 */
export class BackupAPI extends BaseAPI {
    /** List backups */
    async list() {
        return this.post('/api/v2/settings/backup/search', { page: 1, pageSize: 100 });
    }
    /** Create backup */
    async create(backup) {
        return this.post('/api/v2/settings/backup', backup);
    }
    /** Restore backup */
    async restore(id) {
        return this.post('/api/v2/settings/backup/restore', { id });
    }
    /** Delete backup */
    async remove(id) {
        return this.post('/api/v2/settings/backup/del', { id });
    }
}
/**
 * Backup Account API
 */
export class BackupAccountAPI extends BaseAPI {
    /** List backup accounts */
    async list() {
        return this.post('/api/v2/core/backups/search', { page: 1, pageSize: 100 });
    }
    /** Create backup account */
    async create(params) {
        return this.post('/api/v2/core/backups', params);
    }
    /** Delete backup account */
    async remove(type) {
        return this.post('/api/v2/core/backups/del', { type });
    }
}
//# sourceMappingURL=backup.js.map