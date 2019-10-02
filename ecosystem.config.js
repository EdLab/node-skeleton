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
  }, {
    name: 'app-prod',
    node_args: '--optimize_for_size --max_old_space_size=500',
    script: 'dist/index.js',
    source_map_support: false,
    watch: false,
    vizion: false,
    env: {
      NODE_ENV: 'production',
    },
  }],
}