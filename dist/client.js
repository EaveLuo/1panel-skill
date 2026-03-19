import { ContainerAPI, ImageAPI, NetworkAPI, VolumeAPI, ComposeAPI, AppAPI, WebsiteAPI, FileAPI, DatabaseAPI, SystemAPI, CronjobAPI, FirewallAPI, ProcessAPI, SSHAPI, TerminalAPI, BackupAPI, BackupAccountAPI, SettingsAPI, LogsAPI, RuntimeAPI, Fail2BanAPI, DiskAPI, DashboardAPI, MonitorAPI, DeviceAPI, FTPAPI, ClamAPI, PHPAPI, HostAPI, RecycleBinAPI, SnapshotAPI, TaskAPI, OpenRestyAPI, GPUAPI, NodeAPI, AIAPI, OllamaAPI, } from "./api/index.js";
export class OnePanelClient {
    config;
    // API modules
    containers;
    images;
    networks;
    volumes;
    composes;
    apps;
    websites;
    files;
    databases;
    system;
    cronjobs;
    firewall;
    process;
    ssh;
    terminal;
    backup;
    backupAccount;
    settings;
    logs;
    runtime;
    fail2ban;
    disk;
    dashboard;
    monitor;
    device;
    ftp;
    clam;
    php;
    host;
    recycleBin;
    snapshot;
    task;
    openresty;
    gpu;
    node;
    ai;
    ollama;
    constructor(config) {
        this.config = { protocol: "http", ...config };
        // Initialize API modules
        this.containers = new ContainerAPI(this.config);
        this.images = new ImageAPI(this.config);
        this.networks = new NetworkAPI(this.config);
        this.volumes = new VolumeAPI(this.config);
        this.composes = new ComposeAPI(this.config);
        this.apps = new AppAPI(this.config);
        this.websites = new WebsiteAPI(this.config);
        this.files = new FileAPI(this.config);
        this.databases = new DatabaseAPI(this.config);
        this.system = new SystemAPI(this.config);
        this.cronjobs = new CronjobAPI(this.config);
        this.firewall = new FirewallAPI(this.config);
        this.process = new ProcessAPI(this.config);
        this.ssh = new SSHAPI(this.config);
        this.terminal = new TerminalAPI(this.config);
        this.backup = new BackupAPI(this.config);
        this.backupAccount = new BackupAccountAPI(this.config);
        this.settings = new SettingsAPI(this.config);
        this.logs = new LogsAPI(this.config);
        this.runtime = new RuntimeAPI(this.config);
        this.fail2ban = new Fail2BanAPI(this.config);
        this.disk = new DiskAPI(this.config);
        this.dashboard = new DashboardAPI(this.config);
        this.monitor = new MonitorAPI(this.config);
        this.device = new DeviceAPI(this.config);
        this.ftp = new FTPAPI(this.config);
        this.clam = new ClamAPI(this.config);
        this.php = new PHPAPI(this.config);
        this.host = new HostAPI(this.config);
        this.recycleBin = new RecycleBinAPI(this.config);
        this.snapshot = new SnapshotAPI(this.config);
        this.task = new TaskAPI(this.config);
        this.openresty = new OpenRestyAPI(this.config);
        this.gpu = new GPUAPI(this.config);
        this.node = new NodeAPI(this.config);
        this.ai = new AIAPI(this.config);
        this.ollama = new OllamaAPI(this.config);
    }
    // Backward compatibility - delegate to modules
    // Containers
    listContainers = () => this.containers.list();
    listContainersSimple = () => this.containers.listSimple();
    getContainer = (id) => this.containers.get(id);
    inspectContainer = (id) => this.containers.inspect(id);
    startContainer = (id) => this.containers.start(id);
    stopContainer = (id) => this.containers.stop(id);
    restartContainer = (id) => this.containers.restart(id);
    pauseContainer = (id) => this.containers.pause(id);
    unpauseContainer = (id) => this.containers.unpause(id);
    killContainer = (id) => this.containers.kill(id);
    removeContainer = (id) => this.containers.remove(id);
    createContainer = (config) => this.containers.create(config);
    updateContainer = (id, config) => this.containers.update(id, config);
    renameContainer = (id, name) => this.containers.rename(id, name);
    upgradeContainer = (id, image) => this.containers.upgrade(id, image);
    getContainerLogs = (id, tail) => this.containers.getLogs(id, tail);
    getContainerStats = (id) => this.containers.getStats(id);
    getContainerStatus = () => this.containers.getStatus();
    pruneContainers = () => this.containers.prune();
    cleanContainerLog = (id) => this.containers.cleanLog(id);
    getContainerUsers = (name) => this.containers.getUsers(name);
    listContainersByImage = (image) => this.containers.listByImage(image);
    commitContainer = (id, repo, tag) => this.containers.commit(id, repo, tag);
    // Images
    listImages = () => this.images.list();
    listAllImages = () => this.images.listAll();
    searchImages = () => this.images.search();
    pullImage = (name) => this.images.pull(name);
    pushImage = (name) => this.images.push(name);
    removeImage = (id) => this.images.remove(id);
    buildImage = (dockerfile, name, path) => this.images.build(dockerfile, name, path);
    tagImage = (id, repo, tag) => this.images.tag(id, repo, tag);
    saveImage = (names) => this.images.save(names);
    loadImage = (path) => this.images.load(path);
    // Networks
    listNetworks = () => this.networks.list();
    createNetwork = (name, driver) => this.networks.create(name, driver);
    removeNetwork = (id) => this.networks.remove(id);
    // Volumes
    listVolumes = () => this.volumes.list();
    createVolume = (name) => this.volumes.create(name);
    removeVolume = (id) => this.volumes.remove(id);
    // Compose
    listComposes = () => this.composes.list();
    createCompose = (name, content, path) => this.composes.create(name, content, path);
    removeCompose = (id) => this.composes.remove(id);
    startCompose = (id) => this.composes.start(id);
    stopCompose = (id) => this.composes.stop(id);
    restartCompose = (id) => this.composes.restart(id);
    updateCompose = (id, content) => this.composes.update(id, content);
    testCompose = (content) => this.composes.test(content);
    getComposeEnv = (id) => this.composes.getEnv(id);
    cleanComposeLog = (id) => this.composes.cleanLog(id);
    // Apps - use apps API directly
    // Websites
    listWebsites = () => this.websites.list();
    createWebsite = (site) => this.websites.create(site);
    getWebsite = (id) => this.websites.getDetail(id);
    updateWebsite = (site) => this.websites.update(site);
    deleteWebsite = (id) => this.websites.remove(id);
    // Website Domains
    listWebsiteDomains = (websiteId) => this.websites.listDomains(websiteId);
    createWebsiteDomain = (params) => this.websites.createDomain(params);
    deleteWebsiteDomain = (params) => this.websites.deleteDomain(params);
    updateWebsiteDomain = (params) => this.websites.updateDomain(params);
    // SSL Certificates
    listCertificates = () => this.websites.listCertificates();
    getCertificate = (id) => this.websites.getCertificate(id);
    createCertificate = (cert) => this.websites.createCertificate(cert);
    deleteCertificate = (id) => this.websites.deleteCertificate(id);
    obtainSSL = (params) => this.websites.obtainSSL(params);
    renewSSL = (params) => this.websites.renewSSL(params);
    resolveSSL = (params) => this.websites.resolveSSL(params);
    uploadSSL = (params) => this.websites.uploadSSL(params);
    getWebsiteSSL = (websiteId) => this.websites.getWebsiteSSL(websiteId);
    // HTTPS
    getHTTPS = (id) => this.websites.getHTTPS(id);
    updateHTTPS = (params) => this.websites.updateHTTPS(params);
    applySSL = (params) => this.websites.applySSL(params);
    // Nginx
    getNginxConf = (id) => this.websites.getNginxConf(id);
    updateNginxConf = (params) => this.websites.updateNginxConf(params);
    // Files
    listFiles = (path, page, pageSize) => this.files.list(path, page, pageSize);
    searchFiles = (params) => this.files.search(params);
    getFileContent = (path) => this.files.getContent(path);
    saveFile = (path, content) => this.files.save(path, content);
    deleteFile = (path, forceDelete) => this.files.delete(path, forceDelete);
    createDir = (path) => this.files.createDir(path);
    createFile = (path) => this.files.createFile(path);
    compressFiles = (params) => this.files.compress(params);
    decompressFile = (params) => this.files.decompress(params);
    moveFile = (params) => this.files.move(params);
    renameFile = (params) => this.files.rename(params);
    chmodFile = (params) => this.files.chmod(params);
    chownFile = (params) => this.files.chown(params);
    checkFile = (path) => this.files.check(path);
    getFileSize = (path) => this.files.getSize(path);
    getFileTree = (path) => this.files.getTree(path);
    downloadFile = (path) => this.files.download(path);
    uploadFile = (params) => this.files.upload(params);
    wgetFile = (url, path, ignoreCertificate) => this.files.wget(url, path, ignoreCertificate);
    // Databases - use databases API directly
    // System
    getSystemInfo = () => this.system.getInfo();
    getSystemMonitor = () => this.system.getMonitor();
    // Cronjobs
    listCronjobs = () => this.cronjobs.list();
    createCronjob = (job) => this.cronjobs.create(job);
    deleteCronjob = (id) => this.cronjobs.remove(id);
    // Firewall - use firewall API directly
    // Process
    listProcesses = () => this.process.list();
    killProcess = (pid) => this.process.kill(pid);
    // SSH
    getSSHConfig = () => this.ssh.getConfig();
    updateSSHConfig = (config) => this.ssh.updateConfig(config);
    // Terminal
    execCommand = (command, cwd) => this.terminal.execCommand(command, cwd);
    // Backup
    listBackups = () => this.backup.list();
    createBackup = (backup) => this.backup.create(backup);
    restoreBackup = (id) => this.backup.restore(id);
    deleteBackup = (id) => this.backup.remove(id);
    // Backup Account
    listBackupAccounts = () => this.backupAccount.list();
    // Backup Account - use backupAccount API directly
    // Settings
    getSettings = () => this.settings.getAll();
    updateSettings = (settings) => this.settings.update(settings);
    // Logs - use logs API directly
    // Runtime - use runtime API directly
    // Fail2ban
    getFail2BanBaseInfo = () => this.fail2ban.getBaseInfo();
    getFail2BanConf = () => this.fail2ban.getConf();
    operateFail2Ban = (params) => this.fail2ban.operate(params);
    operateFail2BanSSH = (params) => this.fail2ban.operateSSH(params);
    searchFail2BanBannedIPs = (params) => this.fail2ban.searchBannedIPs(params);
    updateFail2BanConf = (params) => this.fail2ban.updateConf(params);
    updateFail2BanConfByFile = (content) => this.fail2ban.updateConfByFile(content);
    // Disk - use disk API directly
    // Dashboard
    getDashboardBaseInfo = () => this.dashboard.getBaseInfo();
    getDashboardCurrentInfo = () => this.dashboard.getCurrentInfo();
    getDashboardMemo = () => this.dashboard.getMemo();
    updateDashboardMemo = (content) => this.dashboard.updateMemo(content);
    // Monitor
    getMonitorData = (params) => this.monitor.getData(params);
    getMonitorSetting = () => this.monitor.getSetting();
    updateMonitorSetting = (setting) => this.monitor.updateSetting(setting);
    cleanMonitorData = () => this.monitor.cleanData();
    // Device - use device API directly
    // FTP
    listFTPUsers = () => this.ftp.list();
    getFTPBaseInfo = () => this.ftp.getBaseInfo();
    createFTPUser = (params) => this.ftp.create(params);
    updateFTPUser = (params) => this.ftp.update(params);
    deleteFTPUser = (id) => this.ftp.remove(id);
    operateFTP = (operation) => this.ftp.operate(operation);
    syncFTPUsers = () => this.ftp.sync();
    getFTPLogs = () => this.ftp.getLogs();
    // ClamAV
    listClamConfigs = () => this.clam.list();
    // Clam - use clam API directly
    // PHP
    listPHPRuntimes = () => this.php.list();
    getPHPConf = (id) => this.php.getConf(id);
    updatePHPConf = (id, content) => this.php.updateConf(id, content);
    listPHPExtensions = (id) => this.php.listExtensions(id);
    installPHPExtension = (id, extension) => this.php.installExtension(id, extension);
    uninstallPHPExtension = (id, extension) => this.php.uninstallExtension(id, extension);
    getPHPConfFile = (id, type) => this.php.getConfFile(id, type);
    updatePHPConfFile = (id, type, content) => this.php.updateConfFile(id, type, content);
    updatePHPVersion = (id, version) => this.php.updateVersion(id, version);
    // Host
    listHosts = () => this.host.list();
    getHost = (id) => this.host.getHost(id);
    createHost = (params) => this.host.create(params);
    updateHost = (params) => this.host.update(params);
    // Host - use host API directly
    getHostSSHLogs = () => this.host.getSSHLogs();
    // RecycleBin
    getRecycleBinStatus = () => this.recycleBin.getStatus();
    listRecycleBin = () => this.recycleBin.list();
    clearRecycleBin = () => this.recycleBin.clear();
    reduceRecycleBin = (name) => this.recycleBin.reduce(name);
    // Snapshot
    listSnapshots = () => this.snapshot.list();
    createSnapshot = (params) => this.snapshot.create(params);
    deleteSnapshot = (ids) => this.snapshot.remove(ids);
    updateSnapshotDescription = (id, description) => this.snapshot.updateDescription(id, description);
    importSnapshot = (params) => this.snapshot.import(params);
    loadSnapshot = (id) => this.snapshot.load(id);
    recoverSnapshot = (id, isNewSnapshot) => this.snapshot.recover(id, isNewSnapshot);
    recreateSnapshot = (id) => this.snapshot.recreate(id);
    // Task
    getExecutingTaskCount = () => this.task.getExecutingCount();
    getTaskLogs = () => this.task.getLogs();
    // OpenResty (XPack)
    getOpenRestyConf = () => this.openresty.getConf();
    buildOpenResty = (params) => this.openresty.build(params);
    updateOpenRestyByFile = (content) => this.openresty.updateByFile(content);
    getOpenRestyModules = () => this.openresty.getModules();
    updateOpenRestyModule = (params) => this.openresty.updateModule(params);
    getOpenRestyPartialConf = () => this.openresty.getPartialConf();
    getOpenRestyStatus = () => this.openresty.getStatus();
    updateOpenRestyConf = (params) => this.openresty.updateConf(params);
    // GPU (XPack)
    getGPUInfo = () => this.gpu.getInfo();
    getGPUMonitorData = (params) => this.gpu.getMonitorData(params);
    // Node (XPack)
    getNodeModules = (id) => this.node.getModules(id);
    operateNodeModule = (id, params) => this.node.operateModule(id, params);
    getNodePackageScripts = (id, params) => this.node.getPackageScripts(id, params);
    // AI Agent (XPack) - use ai API directly
    // MCP Server (XPack) - use ai API directly
    // Ollama (XPack) - use ollama API directly
    closeOllamaModel = (name) => this.ollama.close(name);
    // AntiLeech (XPack)
    getAntiLeechConf = (websiteId) => this.websites.getAntiLeechConf(websiteId);
    updateAntiLeech = (params) => this.websites.updateAntiLeech(params);
}
//# sourceMappingURL=client.js.map