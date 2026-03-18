import { BaseAPI } from './base.js';
/**
 * Website Management API
 */
export declare class WebsiteAPI extends BaseAPI {
    /** List websites */
    list(): Promise<any>;
    /** Create website */
    create(params: any): Promise<any>;
    /** Get website by id */
    getById(id: number): Promise<any>;
    /** Delete website */
    remove(id: number): Promise<any>;
    /** Get nginx config */
    getNginxConfig(id: number): Promise<any>;
    /** Update nginx config */
    updateNginxConfig(id: number, content: string): Promise<any>;
}
/**
 * Website Domain API
 */
export declare class WebsiteDomainAPI extends BaseAPI {
    /** List domains by website */
    list(websiteId: number): Promise<any>;
    /** Create domain */
    create(params: any): Promise<any>;
    /** Delete domain */
    remove(id: number): Promise<any>;
}
/**
 * Website SSL API
 */
export declare class WebsiteSSLAPI extends BaseAPI {
    /** List SSL certificates */
    list(): Promise<any>;
    /** Create SSL certificate */
    create(params: any): Promise<any>;
    /** Delete SSL certificate */
    remove(id: number): Promise<any>;
    /** Obtain SSL (Let's Encrypt) */
    obtain(params: any): Promise<any>;
    /** Renew SSL */
    renew(id: number): Promise<any>;
}
//# sourceMappingURL=website.d.ts.map