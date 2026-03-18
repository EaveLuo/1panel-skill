/**
 * 1Panel Skill
 * Comprehensive API client for 1Panel server management
 *
 * @example
 * ```typescript
 * import { OnePanelClient } from '1panel-skill';
 *
 * const client = new OnePanelClient({
 *   host: 'localhost',
 *   port: 8080,
 *   apiKey: 'your-api-key',
 *   protocol: 'http'
 * });
 *
 * // List containers
 * const containers = await client.container.list();
 *
 * // Create website
 * const website = await client.website.create({
 *   primaryDomain: 'example.com'
 * });
 * ```
 */
export { OnePanelClient } from './client.js';
export * from './api/index.js';
// Version
export const VERSION = '1.0.0';
//# sourceMappingURL=index.js.map