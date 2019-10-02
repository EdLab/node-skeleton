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
npm version patch
npm version minor
npm version major
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

## Clone the repository

```
git clone https://github.com/EdLab/node-skeleton.git new-project
```

## Go inside the directory

cd new-project

## Install all dependencies

npm i

## Start development server

npm run dev

## Test your code

npm run test

## Build for production

npm run build

## Start production server

npm start

### References

- https://semaphoreci.com/community/tutorials/dockerizing-a-node-js-web-application
- https://hackernoon.com/full-stack-web-application-using-react-node-js-express-and-webpack-97dbd5b9d708
- https://medium.com/@binyamin/creating-a-node-express-webpack-app-with-dev-and-prod-builds-a4962ce51334
