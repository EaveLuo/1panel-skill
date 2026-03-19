import { BaseAPI } from "./base.js";
export class BackupAPI extends BaseAPI {
    async list() {
        return this.post("/api/v2/settings/backup/search", { page: 1, pageSize: 100 });
    }
    async create(backup) {
        return this.post("/api/v2/settings/backup", backup);
    }
    async restore(id) {
        return this.post("/api/v2/settings/backup/restore", { id });
    }
    async remove(id) {
        return this.post("/api/v2/settings/backup/del", { id });
    }
}
//# sourceMappingURL=backup.js.map