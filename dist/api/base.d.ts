import { OnePanelConfig } from "../types/config.js";
export declare class BaseAPI {
    protected config: OnePanelConfig;
    constructor(config: OnePanelConfig);
    protected request(path: string, options?: RequestInit): Promise<any>;
    protected post(path: string, body: any): Promise<any>;
    protected get(path: string): Promise<any>;
}
//# sourceMappingURL=base.d.ts.map