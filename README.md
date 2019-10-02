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

### Test

```
npm run test
npm run test:report
npm run test:coverage
```

### Bump version

```
npm version patch
npm version minor
npm version major
```

## Deployment

### Build

```
npm run build
```

### Start server

```
npm start
```

### Start server with Docker

```
npm run start:docker
```

## Start new project

```
git clone https://github.com/EdLab/node-skeleton.git NEW_PROJECT && cd NEW_PROJECT && npm i
```

### References

- https://github.com/goldbergyoni/nodebestpractices
- https://semaphoreci.com/community/tutorials/dockerizing-a-node-js-web-application
- https://hackernoon.com/full-stack-web-application-using-react-node-js-express-and-webpack-97dbd5b9d708
- https://medium.com/@binyamin/creating-a-node-express-webpack-app-with-dev-and-prod-builds-a4962ce51334
