import { generateToken } from "../utils/auth.js";
export class BaseAPI {
    config;
    constructor(config) {
        this.config = { protocol: "http", ...config };
    }
    async request(path, options = {}) {
        const { token, timestamp } = generateToken(this.config.apiKey);
        const url = `${this.config.protocol}://${this.config.host}:${this.config.port}${path}`;
        const response = await fetch(url, {
            ...options,
            headers: {
                "1Panel-Token": token,
                "1Panel-Timestamp": timestamp,
                "Content-Type": "application/json",
                ...options.headers,
            },
        });
        if (!response.ok) {
            throw new Error(`1Panel API error: ${response.status} ${response.statusText}`);
        }
        return response.json();
    }
    post(path, body) {
        return this.request(path, { method: "POST", body: JSON.stringify(body) });
    }
    get(path) {
        return this.request(path, { method: "GET" });
    }
}
//# sourceMappingURL=base.js.map