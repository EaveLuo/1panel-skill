import { BaseAPI } from "./base.js";
export interface DomainCreateRequest {
    websiteId: number;
    domain: string;
    port?: number;
}
export interface DomainDeleteRequest {
    id: number;
}
export interface DomainUpdateRequest {
    id: number;
    websiteId: number;
    domain?: string;
    port?: number;
}
export interface SSLObtainRequest {
    ID: number;
    domains: string[];
    keyType: string;
    time?: number;
    unit?: string;
    autoRenew?: boolean;
}
export interface SSLRenewRequest {
    ID: number;
}
export interface SSLApplyRequest {
    websiteId: number;
    websiteSSLId?: number;
    type: "existed" | "auto" | "manual";
    enable: boolean;
    httpConfig?: "HTTPSOnly" | "HTTPAlso" | "HTTPToHTTPS";
    privateKey?: string;
    certificate?: string;
    algorithm?: string;
    hsts?: boolean;
    hstsIncludeSubDomains?: boolean;
    http3?: boolean;
    httpsPorts?: number[];
}
export interface NginxUpdateRequest {
    id: number;
    content: string;
}
export declare class WebsiteAPI extends BaseAPI {
    /** List websites */
    list(): Promise<any>;
    /** List all websites */
    listAll(): Promise<any>;
    /** Search websites with pagination */
    search(params: any): Promise<any>;
    /** Get website by ID */
    getById(id: number): Promise<any>;
    /** Get website detail */
    getDetail(id: number): Promise<any>;
    /** Create website */
    create(site: any): Promise<any>;
    /** Update website */
    update(site: any): Promise<any>;
    /** Delete website */
    remove(id: number): Promise<any>;
    /** Check before create website */
    check(params: any): Promise<any>;
    /** Operate website */
    operate(params: any): Promise<any>;
    /** Get website config */
    getConfig(id: number, type: string): Promise<any>;
    /** Update website config */
    updateConfig(params: any): Promise<any>;
    /** Get website resource */
    getResource(id: number): Promise<any>;
    /** Get website dir */
    getDir(params: any): Promise<any>;
    /** Update website dir */
    updateDir(params: any): Promise<any>;
    /** Update site dir permission */
    updateDirPermission(params: any): Promise<any>;
    /** List website names */
    listOptions(): Promise<any>;
    /** Operate website log */
    operateLog(params: any): Promise<any>;
    /** Batch set website group */
    batchSetGroup(params: any): Promise<any>;
    /** Batch set HTTPS for websites */
    batchSetHTTPS(params: any): Promise<any>;
    /** Batch operate websites */
    batchOperate(params: any): Promise<any>;
    listDomains(websiteId: number): Promise<any>;
    createDomain(params: DomainCreateRequest): Promise<any>;
    deleteDomain(params: DomainDeleteRequest): Promise<any>;
    updateDomain(params: DomainUpdateRequest): Promise<any>;
    listCertificates(): Promise<any>;
    getCertificate(id: number): Promise<any>;
    createCertificate(cert: any): Promise<any>;
    deleteCertificate(id: number): Promise<any>;
    obtainSSL(params: SSLObtainRequest): Promise<any>;
    renewSSL(params: SSLRenewRequest): Promise<any>;
    resolveSSL(params: {
        websiteSSLId: number;
    }): Promise<any>;
    uploadSSL(params: any): Promise<any>;
    uploadSSLFile(params: any): Promise<any>;
    downloadSSL(params: any): Promise<any>;
    getWebsiteSSL(websiteId: number): Promise<any>;
    listSSL(): Promise<any>;
    updateSSL(params: any): Promise<any>;
    getHTTPS(id: number): Promise<any>;
    updateHTTPS(params: SSLApplyRequest): Promise<any>;
    applySSL(params: SSLApplyRequest): Promise<any>;
    getNginxConf(id: number): Promise<any>;
    updateNginxConf(params: NginxUpdateRequest): Promise<any>;
    getCORS(id: number): Promise<any>;
    updateCORS(params: any): Promise<any>;
    getAuths(): Promise<any>;
    getAuthsByPath(params: any): Promise<any>;
    updateAuths(params: any): Promise<any>;
    updateAuthsByPath(params: any): Promise<any>;
    getDatabases(): Promise<any>;
    changeDatabase(params: any): Promise<any>;
    getPHPConfig(id: number): Promise<any>;
    updatePHPConfig(id: number, params: any): Promise<any>;
    updatePHPVersion(params: any): Promise<any>;
    getDefaultHtml(type: string): Promise<any>;
    updateDefaultHtml(params: any): Promise<any>;
    changeDefaultServer(params: any): Promise<any>;
    getLoadBalance(): Promise<any>;
    createLoadBalance(params: any): Promise<any>;
    deleteLoadBalance(params: any): Promise<any>;
    updateLoadBalance(params: any): Promise<any>;
    updateLoadBalanceFile(params: any): Promise<any>;
    getProxies(params: any): Promise<any>;
    updateProxy(params: any): Promise<any>;
    deleteProxy(params: any): Promise<any>;
    updateProxyStatus(params: any): Promise<any>;
    updateProxyFile(params: any): Promise<any>;
    getProxyCacheConfig(id: number): Promise<any>;
    updateProxyCacheConfig(params: any): Promise<any>;
    clearProxyCache(params: any): Promise<any>;
    getRealIPConfig(id: number): Promise<any>;
    setRealIP(params: any): Promise<any>;
    getRedirect(params: any): Promise<any>;
    updateRedirect(params: any): Promise<any>;
    updateRedirectFile(params: any): Promise<any>;
    getRewrite(params: any): Promise<any>;
    getRewriteCustom(): Promise<any>;
    operateRewriteCustom(params: any): Promise<any>;
    updateRewrite(params: any): Promise<any>;
    getAcmeAccounts(): Promise<any>;
    searchAcmeAccounts(params: any): Promise<any>;
    createAcmeAccount(params: any): Promise<any>;
    updateAcmeAccount(params: any): Promise<any>;
    deleteAcmeAccount(params: any): Promise<any>;
    getCAList(): Promise<any>;
    getCA(id: number): Promise<any>;
    searchCA(params: any): Promise<any>;
    createCA(params: any): Promise<any>;
    deleteCA(params: any): Promise<any>;
    obtainCASSL(params: any): Promise<any>;
    renewCASSL(params: any): Promise<any>;
    downloadCA(params: any): Promise<any>;
    getDNSConfig(): Promise<any>;
    searchDNS(params: any): Promise<any>;
    createDNS(params: any): Promise<any>;
    updateDNSConfig(params: any): Promise<any>;
    deleteDNS(params: any): Promise<any>;
    getDNSResolve(): Promise<any>;
    operateCrossSite(params: any): Promise<any>;
    updateStreamConfig(params: any): Promise<any>;
    getAntiLeechConf(websiteId: number): Promise<any>;
    updateAntiLeech(params: any): Promise<any>;
}
//# sourceMappingURL=website.d.ts.map