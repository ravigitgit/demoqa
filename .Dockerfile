# syntax=docker/dockerfile:1
ARG NODE_VERSION=20
FROM mcr.microsoft.com/playwright:v${NODE_VERSION}-jammy

# Create app dir
WORKDIR /app

# Install dependencies separately for better caching
COPY package*.json ./
RUN npm ci

# Copy the rest (tests, config)
COPY . .

# Ensure browsers are present (base image already has them; this is safe)
RUN npx playwright install --with-deps

# Default command runs tests; override with docker run ... if needed
CMD ["npx", "playwright", "test", "--reporter=html,line"]
