module.exports = {
  apps: [{
    name: 'app-dev',
    script: 'server/index.js',
    watch: true,
    ignore_watch: ['server/views', 'public', 'client', 'node_modules', '.git', 'tmp'],
    watch_options: {
      followSymlinks: false,
      useFsEvents: false,
    },
    env: {
      NODE_ENV: 'development',
    },
  }],
}
