import { BaseAPI } from "./base.js";
export class SystemAPI extends BaseAPI {
    async getInfo() {
        return this.post("/api/v2/toolbox/device/base", {});
    }
    async getMonitor() {
        return this.post("/api/v2/toolbox/device/monitor", {});
    }
}
//# sourceMappingURL=system.js.map