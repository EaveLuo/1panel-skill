# 1Panel Skill

[![npm version](https://img.shields.io/npm/v/1panel-skill.svg)](https://www.npmjs.com/package/1panel-skill)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A comprehensive TypeScript skill for managing 1Panel servers through AI agents.

## Features

- **TypeScript** - Type-safe implementation
- **Modular Design** - Organized by functional area
- **Promise-based** - Modern async/await API
- **Full API Coverage** - Core 1Panel API endpoints

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
const containers = await client.container.list();

// Create website
const website = await client.website.create({
  primaryDomain: 'example.com',
  type: 'deployment'
});
```

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

## API Modules

### Container Management

```typescript
// List containers
const containers = await client.container.list();

// Create container
const container = await client.container.create({
  name: 'my-app',
  image: 'nginx:latest'
});

// Start/Stop/Restart
await client.container.start(container.id);
await client.container.stop(container.id);
await client.container.restart(container.id);

// Get logs
const logs = await client.container.getLogs(container.id, 100);
```

### Website Management

```typescript
// List websites
const websites = await client.website.list();

// Create website
const website = await client.website.create({
  primaryDomain: 'example.com',
  type: 'deployment'
});

// Manage domains
await client.websiteDomain.create({
  websiteId: website.id,
  domain: 'www.example.com'
});

// SSL certificates
await client.websiteSSL.create({
  websiteId: website.id,
  type: 'auto'
});
```

### Database Management

```typescript
// MySQL
const databases = await client.databaseMysql.list();
await client.databaseMysql.create({
  name: 'mydb',
  username: 'dbuser',
  password: 'secure-password'
});

// Redis
const conf = await client.databaseRedis.getConf(redisId);
await client.databaseRedis.changePassword(redisId, 'new-password');
```

### File Operations

```typescript
// List files
const files = await client.file.list('/opt');

// Upload file
await client.file.save('/opt/config.json', fileContent);

// Compress
await client.file.compress({
  files: ['/opt/app1', '/opt/app2'],
  dst: '/opt/backups',
  name: 'backup.tar.gz',
  type: 'tar.gz'
});
```

### System Management

```typescript
// System info
const info = await client.system.getInfo();

// Dashboard
const baseInfo = await client.dashboard.getBaseInfo();

// Settings
const settings = await client.systemSetting.get();
await client.systemSetting.update(newSettings);
```

## Available Modules

- `client.container` - Docker container management
- `client.website` - Website management
- `client.websiteDomain` - Domain management
- `client.websiteSSL` - SSL certificate management
- `client.database` - Generic database operations
- `client.databaseMysql` - MySQL specific
- `client.databaseRedis` - Redis specific
- `client.file` - File system operations
- `client.system` - System information
- `client.systemSetting` - System settings
- `client.dashboard` - Dashboard data
- `client.backup` - Backup operations
- `client.backupAccount` - Backup account management

## Error Handling

```typescript
try {
  await client.container.create(config);
} catch (error) {
  if (error.message.includes('UNAUTHORIZED')) {
    console.error('Invalid API key');
  } else {
    console.error('API Error:', error.message);
  }
}
```

## License

MIT

## Links

- [npm](https://www.npmjs.com/package/1panel-skill)
- [GitHub](https://github.com/EaveLuo/1panel-skill)
- [1Panel](https://1panel.cn/)
