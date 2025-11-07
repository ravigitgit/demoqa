# syntax=docker/dockerfile:1

# Playwright base image matching NPM version
FROM mcr.microsoft.com/playwright:v1.56.1-noble

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy all tests & config
COPY . .

# Ensure browsers available (base already has them)
RUN npx playwright install --with-deps

# Default command - run tests & generate HTML report
CMD ["npx", "playwright", "test", "--reporter=html,line"]
