import { BaseAPI } from "./base.js";
export interface FileInfo {
    name: string;
    path: string;
    size: number;
    isDir: boolean;
    isSymlink: boolean;
    mode: string;
    user: string;
    group: string;
    modTime: string;
}
export interface CompressRequest {
    /** 目标目录路径 */
    dst: string;
    /** 要压缩的文件路径列表 */
    files: string[];
    /** 压缩包名称 */
    name: string;
    /** 是否替换已存在的文件 */
    replace?: boolean;
    /** 压缩密码 (可选) */
    secret?: string;
    /** 压缩类型: zip, tar, tar.gz */
    type: "zip" | "tar" | "tar.gz";
}
export interface DecompressRequest {
    /** 解压目标目录 */
    dst: string;
    /** 压缩包路径 */
    path: string;
    /** 解压密码 (可选) */
    secret?: string;
    /** 压缩类型: zip, tar, tar.gz */
    type: "zip" | "tar" | "tar.gz";
}
export interface MoveRequest {
    /** 源文件/目录路径 */
    from: string;
    /** 目标路径 */
    to: string;
    /** 是否覆盖 */
    overwrite?: boolean;
}
export interface RenameRequest {
    /** 原文件路径 */
    path: string;
    /** 新名称 */
    name: string;
}
export interface ChmodRequest {
    /** 权限模式 (如: 755, 644) */
    mode: string;
    /** 文件/目录路径 */
    path: string;
    /** 是否递归修改子目录 */
    sub?: boolean;
}
export interface ChownRequest {
    /** 所属组 */
    group: string;
    /** 文件/目录路径 */
    path: string;
    /** 是否递归修改子目录 */
    sub?: boolean;
    /** 所属用户 */
    user: string;
}
export interface UploadRequest {
    /** 目标路径 */
    path: string;
    /** 文件名 */
    filename: string;
    /** 文件内容 (base64) */
    content: string;
}
export interface DownloadRequest {
    /** 文件路径 */
    path: string;
}
export interface FileSearchRequest {
    /** 搜索路径 */
    path: string;
    /** 页码 */
    page?: number;
    /** 每页数量 */
    pageSize?: number;
    /** 搜索关键词 */
    search?: string;
    /** 排序方式 */
    sort?: string;
}
export declare class FileAPI extends BaseAPI {
    /**
     * 列出目录内容
     */
    list(path: string, page?: number, pageSize?: number): Promise<any>;
    /**
     * 搜索文件
     */
    search(params: FileSearchRequest): Promise<any>;
    /**
     * 获取文件内容
     */
    getContent(path: string): Promise<any>;
    /**
     * 保存文件内容
     */
    save(path: string, content: string): Promise<any>;
    /**
     * 删除文件或目录
     */
    delete(path: string, forceDelete?: boolean): Promise<any>;
    /**
     * 创建目录
     */
    createDir(path: string): Promise<any>;
    /**
     * 创建文件
     */
    createFile(path: string): Promise<any>;
    /**
     * 压缩文件/目录
     */
    compress(params: CompressRequest): Promise<any>;
    /**
     * 解压文件
     */
    decompress(params: DecompressRequest): Promise<any>;
    /**
     * 移动文件/目录
     */
    move(params: MoveRequest): Promise<any>;
    /**
     * 重命名文件/目录
     */
    rename(params: RenameRequest): Promise<any>;
    /**
     * 修改文件权限 (chmod)
     */
    chmod(params: ChmodRequest): Promise<any>;
    /**
     * 修改文件所有者 (chown)
     */
    chown(params: ChownRequest): Promise<any>;
    /**
     * 检查文件是否存在
     */
    check(path: string): Promise<any>;
    /**
     * 获取文件大小
     */
    getSize(path: string): Promise<any>;
    /**
     * 获取目录树
     */
    getTree(path: string): Promise<any>;
    /**
     * 下载文件 (返回下载链接)
     */
    download(path: string): Promise<any>;
    /**
     * 上传文件
     */
    upload(params: UploadRequest): Promise<any>;
    /**
     * 通过 URL 下载文件到服务器
     */
    wget(url: string, path: string, ignoreCertificate?: boolean): Promise<any>;
}
//# sourceMappingURL=file.d.ts.map