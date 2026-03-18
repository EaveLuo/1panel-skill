/**
 * 1Panel API Base Client
 */
export class BaseAPI {
    config;
    baseUrl;
    constructor(config) {
        this.config = config;
        this.baseUrl = `${config.protocol}://${config.host}:${config.port}`;
    }
    async request(path, options = {}) {
        const url = `${this.baseUrl}${path}`;
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': this.config.apiKey,
            ...options.headers
        };
        const response = await fetch(url, { ...options, headers });
        if (!response.ok) {
            const error = await response.text();
            throw new Error(`HTTP ${response.status}: ${error}`);
        }
        const result = await response.json();
        if (result.code !== 200) {
            throw new Error(`API Error ${result.code}: ${result.message}`);
        }
        return result.data;
    }
    async get(path) {
        return this.request(path, { method: 'GET' });
    }
    async post(path, body) {
        const options = { method: 'POST' };
        if (body !== undefined) {
            options.body = JSON.stringify(body);
        }
        return this.request(path, options);
    }
}
//# sourceMappingURL=base.js.map