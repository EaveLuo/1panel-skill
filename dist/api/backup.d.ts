import { BaseAPI } from "./base.js";
export declare class BackupAPI extends BaseAPI {
    list(): Promise<any>;
    create(backup: any): Promise<any>;
    restore(id: number): Promise<any>;
    remove(id: number): Promise<any>;
}
//# sourceMappingURL=backup.d.ts.map