# syntax=docker/dockerfile:1
ARG NODE_VERSION=20
FROM mcr.microsoft.com/playwright:v${NODE_VERSION}-jammy

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npx playwright install --with-deps
CMD ["npx", "playwright", "test", "--reporter=html,line"]
