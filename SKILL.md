# 1Panel Skill

A comprehensive skill for managing 1Panel servers through AI agents.

## Overview

This skill provides complete access to the 1Panel API (580+ endpoints), enabling AI agents to manage Linux servers, containers, databases, websites, and more through the Model Context Protocol (MCP).

## Features

- **580+ API Endpoints** - Full coverage of 1Panel's REST API
- **51 API Modules** - Organized by functional area
- **TypeScript** - Type-safe implementation
- **Modular Design** - Easy to extend and maintain

## Installation

```bash
npm install 1panel-skill
```

## Quick Start

```typescript
import { OnePanelClient } from '1panel-skill';

const client = new OnePanelClient({
  host: 'localhost',
  port: 8080,
  apiKey: 'your-api-key',
  protocol: 'http'
});

// List containers
const containers = await client.containers.list();

// Create a website
const website = await client.websites.create({
  primaryDomain: 'example.com',
  type: 'deployment'
});
```

## API Modules

### Core Infrastructure
- **Container** - Docker container lifecycle management
- **Image** - Docker image operations
- **Network** - Docker network management
- **Volume** - Docker volume operations
- **Compose** - Docker Compose management

### Applications
- **App** - App store and installed applications
- **Runtime** - PHP, Node.js, Python, Java, Go runtimes
- **PHP Extensions** - PHP extension management

### Data Management
- **Database** - MySQL, PostgreSQL, Redis
- **Backup Account** - Backup storage configuration
- **File** - File system operations
- **Recycle Bin** - File recovery

### Web Services
- **Website** - Website management
- **Domain** - Domain configuration
- **SSL** - SSL certificate management
- **HTTPS** - HTTPS configuration
- **Nginx** - Nginx configuration
- **OpenResty** - OpenResty management (XPack)

### System & Security
- **System Setting** - System configuration
- **Device** - System device management
- **Disk** - Disk management
- **Firewall** - Firewall rules
- **Fail2ban** - Intrusion prevention
- **SSH** - SSH management
- **Clam** - Antivirus scanning
- **FTP** - FTP server management

### Monitoring & Logs
- **Dashboard** - System dashboard
- **Monitor** - Performance monitoring
- **Logs** - System and operation logs
- **TaskLog** - Task execution logs
- **Process** - Process management

### AI & Advanced (XPack)
- **AI** - AI Agent management
- **McpServer** - MCP Server management
- **Ollama** - Ollama model management
- **GPU** - GPU monitoring

### Host Management
- **Host** - Remote host management
- **Host Tool** - Host tool management
- **System Group** - User group management

### Automation
- **Cronjob** - Scheduled tasks
- **Command** - Command management
- **ScriptLibrary** - Script management

## Configuration

### Environment Variables

```bash
ONEPANEL_HOST=localhost      # 1Panel host
ONEPANEL_PORT=8080           # 1Panel port
ONEPANEL_API_KEY=xxx         # API key (required)
ONEPANEL_PROTOCOL=http       # http or https
```

### Getting API Key

1. Login to 1Panel web interface
2. Go to Profile → API
3. Generate or copy your API key

## Usage Examples

### Container Management

```typescript
// List all containers
const containers = await client.containers.list();

// Create a container
const container = await client.containers.create({
  name: 'my-app',
  image: 'nginx:latest',
  ports: [{ host: '80', container: '80' }]
});

// Start/Stop/Restart
await client.containers.start(container.id);
await client.containers.stop(container.id);
await client.containers.restart(container.id);
```

### Website Management

```typescript
// Create a website
const website = await client.websites.create({
  primaryDomain: 'example.com',
  type: 'deployment',
  alias: 'www.example.com'
});

// Add SSL certificate
await client.websites.ssl.create({
  websiteId: website.id,
  type: 'auto',
  autoRenew: true
});

// Configure HTTPS
await client.websites.https.update(website.id, {
  enable: true,
  httpConfig: 'HTTPToHTTPS'
});
```

### Database Management

```typescript
// Create MySQL database
const db = await client.databases.mysql.create({
  name: 'mydb',
  username: 'dbuser',
  password: 'secure-password'
});

// Bind user
await client.databases.mysql.bindUser({
  database: 'mydb',
  username: 'newuser',
  password: 'password',
  permission: '%'
});
```

### File Operations

```typescript
// List files
const files = await client.files.list('/opt');

// Upload file
await client.files.upload({
  path: '/opt/config.json',
  content: fileContent
});

// Compress files
await client.files.compress({
  files: ['/opt/app1', '/opt/app2'],
  dst: '/opt/backups',
  name: 'backup.tar.gz',
  type: 'tar.gz'
});
```

## Error Handling

```typescript
try {
  await client.containers.create(config);
} catch (error) {
  if (error.code === 'UNAUTHORIZED') {
    console.error('Invalid API key');
  } else if (error.code === 'NOT_FOUND') {
    console.error('Resource not found');
  } else {
    console.error('API Error:', error.message);
  }
}
```

## License

MIT

## Links

- [GitHub](https://github.com/EaveLuo/1panel-skill)
- [npm](https://www.npmjs.com/package/1panel-skill)
- [1Panel](https://1panel.cn/)
