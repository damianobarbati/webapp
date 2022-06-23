FROM mcr.microsoft.com/playwright:focal

COPY ./ /opt
WORKDIR /opt

RUN yarn install --production=false && \
    yarn lint . && \
    yarn test:ci && \
    # yarn test:e2e && \
    yarn build && \
    yarn cache clean && \
    yarn install --production=true

CMD yarn start