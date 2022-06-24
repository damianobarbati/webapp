FROM alpine:3.16

RUN apk add --upgrade nodejs yarn && \
    rm -rf /var/cache/*

COPY ./ /opt
WORKDIR /opt

RUN yarn install --production=false && \
    yarn build && \
    yarn install --production=true && \
    yarn cache clean && \
    rm -rf /root/cache # playwright cache

CMD yarn start