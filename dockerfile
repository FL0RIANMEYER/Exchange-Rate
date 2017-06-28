#
# Node.js Dockerfile
#
#

# Pull base image.
FROM mhart/alpine-node:latest

RUN apk add --update python  && rm -rf /var/cache/apk/*
RUN apk add --update make  && rm -rf /var/cache/apk/*
RUN apk add --update g++  && rm -rf /var/cache/apk/*
RUN apk add --update git  && rm -rf /var/cache/apk/*

WORKDIR /home/service

EXPOSE 80
EXPOSE 443

ADD . .

CMD ["npm", "start"]
