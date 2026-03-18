import { BaseAPI } from './base.js';
/**
 * File Management API
 */
export declare class FileAPI extends BaseAPI {
    /** List files in directory */
    list(path: string): Promise<any>;
    /** Get file content */
    getContent(path: string): Promise<any>;
    /** Save file content */
    save(path: string, content: string): Promise<any>;
    /** Delete file or directory */
    remove(path: string): Promise<any>;
    /** Create directory */
    createDir(path: string): Promise<any>;
    /** Compress files */
    compress(params: any): Promise<any>;
    /** Decompress file */
    decompress(params: any): Promise<any>;
    /** Move file */
    move(from: string, to: string): Promise<any>;
}
//# sourceMappingURL=file.d.ts.map