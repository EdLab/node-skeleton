# EdLab Node.js Skeleton

File Structure
```
.
├── Dockerfile
├── LICENSE
├── README.md
├── config
│   ├── app_config.js
│   ├── app_config_private.js
│   ├── constants.js
│   └── index.js
├── ecosystem.config.js
├── gulpfile.js
├── jenkins.json
├── package-lock.json
├── package.json
├── server
│   ├── app.js
│   ├── index.js
│   ├── lib
│   │   ├── Logger.js
│   │   └── Response.js
│   └── routes
│       └── error.js
└── test
    └── basic.test.js
```

## Development
### Start development server
```
npm i
npm run dev
```

### Testing
```
npm run test
npm run test:report
npm run test:coverage
```

### Bump version
```
npm run bump
npm run bump:minor
npm run bump:major
```

## Deployment
### Build
```
npm run build
```

### Start server under docker
```
npm run start:docker
```

