import { BaseAPI } from './base.js';
/**
 * Container Management API
 */
export declare class ContainerAPI extends BaseAPI {
    /** List containers */
    list(): Promise<any>;
    /** Get container info */
    getInfo(id: string): Promise<any>;
    /** Create container */
    create(params: any): Promise<any>;
    /** Start container */
    start(id: string): Promise<any>;
    /** Stop container */
    stop(id: string): Promise<any>;
    /** Restart container */
    restart(id: string): Promise<any>;
    /** Remove container */
    remove(id: string): Promise<any>;
    /** Get container logs */
    getLogs(id: string, tail?: number): Promise<any>;
}
//# sourceMappingURL=container.d.ts.map