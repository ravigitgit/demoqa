# syntax=docker/dockerfile:1

# Playwright base image (includes browsers + drivers)
ARG NODE_VERSION=20
FROM mcr.microsoft.com/playwright:v${NODE_VERSION}-jammy

WORKDIR /app

# Install dependencies first (cache layer)
COPY package*.json ./
RUN npm ci

# Copy test suite
COPY . .

# Ensure browsers installed (safe even if base has them)
RUN npx playwright install --with-deps

# Default command runs tests
CMD ["npx", "playwright", "test", "--reporter=html,line"]
