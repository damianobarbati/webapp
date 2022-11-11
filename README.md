# webapp

This is a [Next.js](https://nextjs.org/docs) project:
- files in `/pages` directory are mapped to `/*` and treated as [React pages](https://nextjs.org/docs/basic-features/pages)
- files in `/pages/api` directory are mapped to `/api/*` and are treated as [API endpoints](https://nextjs.org/docs/api-routes/introduction)

## Development

Start development environment:
```sh
nvm install
yarn install
yarn dev
```

Run unit tests:
```sh
yarn test
```

Run E2E tests:
```sh
yarn build
yarn test:e2e --headed
```

Run performance audit:
```sh
yarn build
yarn start
yarn lighthouse
```

Open <http://localhost>.

## Deployment

```sh
yarn build
yarn start
```

GitHub actions coming soon! ⚠️