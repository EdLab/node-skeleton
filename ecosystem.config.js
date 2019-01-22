module.exports = {
  apps: [{
    name: 'proj-dev',
    script: 'server/index.js',
    watch: true,
    ignore_watch: ['server/views', 'public', 'client', 'node_modules', '.git', 'tmp'],
    watch_options: {
      followSymlinks: false,
      useFsEvents: false,
    },
    env: {
      DEBUG: 'Client*',//DB*
      NODE_ENV: 'development',
      BLUEBIRD_WARNINGS: 0,
    },
  }, {
    name: 'pk-int',
    node_args: '--max-old-space-size=2048',
    script: 'dist/index.js',
    env: {
      NODE_ENV: 'integration',
    },
  }, {
    name: 'pk-prod',
    node_args: '--max-old-space-size=2048',
    source_map_support: false,
    max_memory_restart: '4G',
    script: 'dist/index.js',
    vizion: false,
    env: {
      NODE_ENV: 'production',
      BLUEBIRD_WARNINGS: 0,
      PORT: 3000,
    },
    exec_mode: 'cluster',
    instances: 'max',
  }],
}
