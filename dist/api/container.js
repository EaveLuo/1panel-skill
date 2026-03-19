import { BaseAPI } from "./base.js";
export class ContainerAPI extends BaseAPI {
    // List operations
    async list() {
        return this.post("/api/v2/containers/search", { page: 1, pageSize: 100, state: "all", orderBy: "name", order: "ascending" });
    }
    async listSimple() {
        return this.post("/api/v2/containers/list", {});
    }
    async listByImage(image) {
        return this.post("/api/v2/containers/list/byimage", { name: image });
    }
    // Info operations
    async get(id) {
        return this.post("/api/v2/containers/info", { id });
    }
    async inspect(id) {
        return this.post("/api/v2/containers/inspect", { id });
    }
    async getStats(id) {
        return this.get(`/api/v2/containers/stats/${id}`);
    }
    async getStatus() {
        return this.get("/api/v2/containers/status");
    }
    async getUsers(name) {
        return this.post("/api/v2/containers/users", { name });
    }
    // Lifecycle operations
    async start(id) {
        return this.post("/api/v2/containers/operate", { id, operation: "start" });
    }
    async stop(id) {
        return this.post("/api/v2/containers/operate", { id, operation: "stop" });
    }
    async restart(id) {
        return this.post("/api/v2/containers/operate", { id, operation: "restart" });
    }
    async pause(id) {
        return this.post("/api/v2/containers/operate", { id, operation: "pause" });
    }
    async unpause(id) {
        return this.post("/api/v2/containers/operate", { id, operation: "unpause" });
    }
    async kill(id) {
        return this.post("/api/v2/containers/operate", { id, operation: "kill" });
    }
    // Management operations
    async create(config) {
        return this.post("/api/v2/containers", config);
    }
    async update(id, config) {
        return this.post("/api/v2/containers/update", { id, ...config });
    }
    async rename(id, name) {
        return this.post("/api/v2/containers/rename", { id, name });
    }
    async upgrade(id, image) {
        return this.post("/api/v2/containers/upgrade", { id, image });
    }
    async remove(id) {
        return this.post("/api/v2/containers/del", { id });
    }
    async prune() {
        return this.post("/api/v2/containers/prune", {});
    }
    // Logs
    async getLogs(id, tail = 100) {
        return this.post("/api/v2/containers/log", { id, tail });
    }
    async cleanLog(id) {
        return this.post("/api/v2/containers/clean/log", { id });
    }
    // Commit
    async commit(id, repo, tag) {
        return this.post("/api/v2/containers/commit", { id, repo, tag });
    }
}
//# sourceMappingURL=container.js.map