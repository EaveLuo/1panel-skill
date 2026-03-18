/**
 * 1Panel API Base Client
 */
export interface OnePanelConfig {
    host: string;
    port: number;
    apiKey: string;
    protocol: 'http' | 'https';
}
export declare class BaseAPI {
    protected config: OnePanelConfig;
    protected baseUrl: string;
    constructor(config: OnePanelConfig);
    protected request(path: string, options?: any): Promise<any>;
    protected get(path: string): Promise<any>;
    protected post(path: string, body?: any): Promise<any>;
}
//# sourceMappingURL=base.d.ts.map