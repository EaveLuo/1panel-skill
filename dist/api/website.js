import { BaseAPI } from "./base.js";
export class WebsiteAPI extends BaseAPI {
    // ==================== Website Core ====================
    /** List websites */
    async list() {
        return this.request("/api/v2/websites/list", { method: "GET" });
    }
    /** List all websites */
    async listAll() {
        return this.request("/api/v2/websites/list", { method: "GET" });
    }
    /** Search websites with pagination */
    async search(params) {
        return this.post("/api/v2/websites/search", params);
    }
    /** Get website by ID */
    async getById(id) {
        return this.request(`/api/v2/websites/${id}`, { method: "GET" });
    }
    /** Get website detail */
    async getDetail(id) {
        return this.request(`/api/v2/websites/${id}`, { method: "GET" });
    }
    /** Create website */
    async create(site) {
        return this.post("/api/v2/websites", site);
    }
    /** Update website */
    async update(site) {
        return this.post("/api/v2/websites/update", site);
    }
    /** Delete website */
    async remove(id) {
        return this.post("/api/v2/websites/del", { id });
    }
    /** Check before create website */
    async check(params) {
        return this.post("/api/v2/websites/check", params);
    }
    /** Operate website */
    async operate(params) {
        return this.post("/api/v2/websites/operate", params);
    }
    /** Get website config */
    async getConfig(id, type) {
        return this.request(`/api/v2/websites/${id}/config/${type}`, { method: "GET" });
    }
    /** Update website config */
    async updateConfig(params) {
        return this.post("/api/v2/websites/config/update", params);
    }
    /** Get website resource */
    async getResource(id) {
        return this.request(`/api/v2/websites/resource/${id}`, { method: "GET" });
    }
    /** Get website dir */
    async getDir(params) {
        return this.post("/api/v2/websites/dir", params);
    }
    /** Update website dir */
    async updateDir(params) {
        return this.post("/api/v2/websites/dir/update", params);
    }
    /** Update site dir permission */
    async updateDirPermission(params) {
        return this.post("/api/v2/websites/dir/permission", params);
    }
    /** List website names */
    async listOptions() {
        return this.post("/api/v2/websites/options", {});
    }
    /** Operate website log */
    async operateLog(params) {
        return this.post("/api/v2/websites/log", params);
    }
    // ==================== Batch Operations ====================
    /** Batch set website group */
    async batchSetGroup(params) {
        return this.post("/api/v2/websites/batch/group", params);
    }
    /** Batch set HTTPS for websites */
    async batchSetHTTPS(params) {
        return this.post("/api/v2/websites/batch/https", params);
    }
    /** Batch operate websites */
    async batchOperate(params) {
        return this.post("/api/v2/websites/batch/operate", params);
    }
    // ==================== Domain ====================
    async listDomains(websiteId) {
        return this.request(`/api/v2/websites/domains/${websiteId}`, { method: "GET" });
    }
    async createDomain(params) {
        return this.post("/api/v2/websites/domains", params);
    }
    async deleteDomain(params) {
        return this.post("/api/v2/websites/domains/del", params);
    }
    async updateDomain(params) {
        return this.post("/api/v2/websites/domains/update", params);
    }
    // ==================== SSL ====================
    async listCertificates() {
        return this.post("/api/v2/websites/ssl/search", { page: 1, pageSize: 100 });
    }
    async getCertificate(id) {
        return this.request(`/api/v2/websites/ssl/${id}`, { method: "GET" });
    }
    async createCertificate(cert) {
        return this.post("/api/v2/websites/ssl", cert);
    }
    async deleteCertificate(id) {
        return this.post("/api/v2/websites/ssl/del", { id });
    }
    async obtainSSL(params) {
        return this.post("/api/v2/websites/ssl/obtain", params);
    }
    async renewSSL(params) {
        return this.post("/api/v2/websites/ssl/renew", params);
    }
    async resolveSSL(params) {
        return this.post("/api/v2/websites/ssl/resolve", params);
    }
    async uploadSSL(params) {
        return this.post("/api/v2/websites/ssl/upload", params);
    }
    async uploadSSLFile(params) {
        return this.post("/api/v2/websites/ssl/upload/file", params);
    }
    async downloadSSL(params) {
        return this.post("/api/v2/websites/ssl/download", params);
    }
    async getWebsiteSSL(websiteId) {
        return this.request(`/api/v2/websites/ssl/website/${websiteId}`, { method: "GET" });
    }
    async listSSL() {
        return this.post("/api/v2/websites/ssl/list", {});
    }
    async updateSSL(params) {
        return this.post("/api/v2/websites/ssl/update", params);
    }
    // ==================== HTTPS ====================
    async getHTTPS(id) {
        return this.request(`/api/v2/websites/${id}/https`, { method: "GET" });
    }
    async updateHTTPS(params) {
        return this.post(`/api/v2/websites/${params.websiteId}/https`, params);
    }
    async applySSL(params) {
        return this.post("/api/v2/websites/ssl/apply", params);
    }
    // ==================== Nginx ====================
    async getNginxConf(id) {
        return this.request(`/api/v2/websites/nginx/${id}`, { method: "GET" });
    }
    async updateNginxConf(params) {
        return this.post("/api/v2/websites/nginx/update", params);
    }
    // ==================== CORS ====================
    async getCORS(id) {
        return this.request(`/api/v2/websites/cors/${id}`, { method: "GET" });
    }
    async updateCORS(params) {
        return this.post("/api/v2/websites/cors/update", params);
    }
    // ==================== Auth ====================
    async getAuths() {
        return this.post("/api/v2/websites/auths", {});
    }
    async getAuthsByPath(params) {
        return this.post("/api/v2/websites/auths/path", params);
    }
    async updateAuths(params) {
        return this.post("/api/v2/websites/auths/update", params);
    }
    async updateAuthsByPath(params) {
        return this.post("/api/v2/websites/auths/path/update", params);
    }
    // ==================== Database ====================
    async getDatabases() {
        return this.request("/api/v2/websites/databases", { method: "GET" });
    }
    async changeDatabase(params) {
        return this.post("/api/v2/websites/databases", params);
    }
    // ==================== PHP ====================
    async getPHPConfig(id) {
        return this.request(`/api/v2/websites/php/config/${id}`, { method: "GET" });
    }
    async updatePHPConfig(id, params) {
        return this.post(`/api/v2/websites/php/config/${id}`, params);
    }
    async updatePHPVersion(params) {
        return this.post("/api/v2/websites/php/version", params);
    }
    // ==================== Default HTML ====================
    async getDefaultHtml(type) {
        return this.request(`/api/v2/websites/default/html/${type}`, { method: "GET" });
    }
    async updateDefaultHtml(params) {
        return this.post("/api/v2/websites/default/html/update", params);
    }
    async changeDefaultServer(params) {
        return this.post("/api/v2/websites/default/server", params);
    }
    // ==================== Load Balance ====================
    async getLoadBalance() {
        return this.request("/api/v2/websites/lbs", { method: "GET" });
    }
    async createLoadBalance(params) {
        return this.post("/api/v2/websites/lbs/create", params);
    }
    async deleteLoadBalance(params) {
        return this.post("/api/v2/websites/lbs/del", params);
    }
    async updateLoadBalance(params) {
        return this.post("/api/v2/websites/lbs/update", params);
    }
    async updateLoadBalanceFile(params) {
        return this.post("/api/v2/websites/lbs/file", params);
    }
    // ==================== Proxy ====================
    async getProxies(params) {
        return this.post("/api/v2/websites/proxies", params);
    }
    async updateProxy(params) {
        return this.post("/api/v2/websites/proxies/update", params);
    }
    async deleteProxy(params) {
        return this.post("/api/v2/websites/proxies/delete", params);
    }
    async updateProxyStatus(params) {
        return this.post("/api/v2/websites/proxies/status", params);
    }
    async updateProxyFile(params) {
        return this.post("/api/v2/websites/proxies/file", params);
    }
    async getProxyCacheConfig(id) {
        return this.request(`/api/v2/websites/proxy/config/${id}`, { method: "GET" });
    }
    async updateProxyCacheConfig(params) {
        return this.post("/api/v2/websites/proxy/config", params);
    }
    async clearProxyCache(params) {
        return this.post("/api/v2/websites/proxy/clear", params);
    }
    // ==================== Real IP ====================
    async getRealIPConfig(id) {
        return this.request(`/api/v2/websites/realip/config/${id}`, { method: "GET" });
    }
    async setRealIP(params) {
        return this.post("/api/v2/websites/realip/config", params);
    }
    // ==================== Redirect ====================
    async getRedirect(params) {
        return this.post("/api/v2/websites/redirect", params);
    }
    async updateRedirect(params) {
        return this.post("/api/v2/websites/redirect/update", params);
    }
    async updateRedirectFile(params) {
        return this.post("/api/v2/websites/redirect/file", params);
    }
    // ==================== Rewrite ====================
    async getRewrite(params) {
        return this.post("/api/v2/websites/rewrite", params);
    }
    async getRewriteCustom() {
        return this.request("/api/v2/websites/rewrite/custom", { method: "GET" });
    }
    async operateRewriteCustom(params) {
        return this.post("/api/v2/websites/rewrite/custom", params);
    }
    async updateRewrite(params) {
        return this.post("/api/v2/websites/rewrite/update", params);
    }
    // ==================== ACME ====================
    async getAcmeAccounts() {
        return this.post("/api/v2/websites/acme", {});
    }
    async searchAcmeAccounts(params) {
        return this.post("/api/v2/websites/acme/search", params);
    }
    async createAcmeAccount(params) {
        return this.post("/api/v2/websites/acme", params);
    }
    async updateAcmeAccount(params) {
        return this.post("/api/v2/websites/acme/update", params);
    }
    async deleteAcmeAccount(params) {
        return this.post("/api/v2/websites/acme/del", params);
    }
    // ==================== CA ====================
    async getCAList() {
        return this.request("/api/v2/websites/ca", { method: "GET" });
    }
    async getCA(id) {
        return this.request(`/api/v2/websites/ca/${id}`, { method: "GET" });
    }
    async searchCA(params) {
        return this.post("/api/v2/websites/ca/search", params);
    }
    async createCA(params) {
        return this.post("/api/v2/websites/ca", params);
    }
    async deleteCA(params) {
        return this.post("/api/v2/websites/ca/del", params);
    }
    async obtainCASSL(params) {
        return this.post("/api/v2/websites/ca/obtain", params);
    }
    async renewCASSL(params) {
        return this.post("/api/v2/websites/ca/renew", params);
    }
    async downloadCA(params) {
        return this.post("/api/v2/websites/ca/download", params);
    }
    // ==================== DNS ====================
    async getDNSConfig() {
        return this.request("/api/v2/websites/dns", { method: "GET" });
    }
    async searchDNS(params) {
        return this.post("/api/v2/websites/dns/search", params);
    }
    async createDNS(params) {
        return this.post("/api/v2/websites/dns", params);
    }
    async updateDNSConfig(params) {
        return this.post("/api/v2/websites/dns", params);
    }
    async deleteDNS(params) {
        return this.post("/api/v2/websites/dns/del", params);
    }
    async getDNSResolve() {
        return this.request("/api/v2/websites/dns/resolve", { method: "GET" });
    }
    // ==================== Cross Site ====================
    async operateCrossSite(params) {
        return this.post("/api/v2/websites/crosssite", params);
    }
    // ==================== Stream ====================
    async updateStreamConfig(params) {
        return this.post("/api/v2/websites/stream/update", params);
    }
    // ==================== AntiLeech (XPack) ====================
    async getAntiLeechConf(websiteId) {
        return this.request(`/api/v2/websites/leech/${websiteId}`, { method: "GET" });
    }
    async updateAntiLeech(params) {
        return this.post("/api/v2/websites/leech/update", params);
    }
}
//# sourceMappingURL=website.js.map