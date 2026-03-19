import { BaseAPI } from "./base.js";
export declare class ContainerAPI extends BaseAPI {
    list(): Promise<any>;
    listSimple(): Promise<any>;
    listByImage(image: string): Promise<any>;
    get(id: string): Promise<any>;
    inspect(id: string): Promise<any>;
    getStats(id: string): Promise<any>;
    getStatus(): Promise<any>;
    getUsers(name: string): Promise<any>;
    start(id: string): Promise<any>;
    stop(id: string): Promise<any>;
    restart(id: string): Promise<any>;
    pause(id: string): Promise<any>;
    unpause(id: string): Promise<any>;
    kill(id: string): Promise<any>;
    create(config: any): Promise<any>;
    update(id: string, config: any): Promise<any>;
    rename(id: string, name: string): Promise<any>;
    upgrade(id: string, image: string): Promise<any>;
    remove(id: string): Promise<any>;
    prune(): Promise<any>;
    getLogs(id: string, tail?: number): Promise<any>;
    cleanLog(id: string): Promise<any>;
    commit(id: string, repo: string, tag: string): Promise<any>;
}
//# sourceMappingURL=container.d.ts.map