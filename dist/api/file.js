import { BaseAPI } from "./base.js";
export class FileAPI extends BaseAPI {
    /**
     * 列出目录内容
     */
    async list(path, page = 1, pageSize = 100) {
        return this.post("/api/v2/files/search", { path, page, pageSize });
    }
    /**
     * 搜索文件
     */
    async search(params) {
        return this.post("/api/v2/files/search", {
            page: 1,
            pageSize: 100,
            ...params,
        });
    }
    /**
     * 获取文件内容
     */
    async getContent(path) {
        return this.post("/api/v2/files/content", { path });
    }
    /**
     * 保存文件内容
     */
    async save(path, content) {
        return this.post("/api/v2/files", { path, content });
    }
    /**
     * 删除文件或目录
     */
    async delete(path, forceDelete = false) {
        return this.post("/api/v2/files/del", { path, forceDelete });
    }
    /**
     * 创建目录
     */
    async createDir(path) {
        return this.post("/api/v2/files/dir", { path });
    }
    /**
     * 创建文件
     */
    async createFile(path) {
        return this.post("/api/v2/files", { path, content: "" });
    }
    /**
     * 压缩文件/目录
     */
    async compress(params) {
        return this.post("/api/v2/files/compress", params);
    }
    /**
     * 解压文件
     */
    async decompress(params) {
        return this.post("/api/v2/files/decompress", params);
    }
    /**
     * 移动文件/目录
     */
    async move(params) {
        return this.post("/api/v2/files/move", params);
    }
    /**
     * 重命名文件/目录
     */
    async rename(params) {
        return this.post("/api/v2/files/rename", params);
    }
    /**
     * 修改文件权限 (chmod)
     */
    async chmod(params) {
        return this.post("/api/v2/files/mode", params);
    }
    /**
     * 修改文件所有者 (chown)
     */
    async chown(params) {
        return this.post("/api/v2/files/owner", params);
    }
    /**
     * 检查文件是否存在
     */
    async check(path) {
        return this.post("/api/v2/files/check", { path });
    }
    /**
     * 获取文件大小
     */
    async getSize(path) {
        return this.post("/api/v2/files/size", { path });
    }
    /**
     * 获取目录树
     */
    async getTree(path) {
        return this.post("/api/v2/files/tree", { path });
    }
    /**
     * 下载文件 (返回下载链接)
     */
    async download(path) {
        return this.post("/api/v2/files/download", { path });
    }
    /**
     * 上传文件
     */
    async upload(params) {
        return this.post("/api/v2/files/upload", params);
    }
    /**
     * 通过 URL 下载文件到服务器
     */
    async wget(url, path, ignoreCertificate = false) {
        return this.post("/api/v2/files/wget", { url, path, ignoreCertificate });
    }
}
//# sourceMappingURL=file.js.map