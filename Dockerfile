# syntax=docker/dockerfile:1
FROM mcr.microsoft.com/playwright:v1.56.1-noble

# create app dir and test results dir
WORKDIR /app
RUN mkdir -p /app/test-results

# copy package files first to leverage layer caching
COPY package*.json ./

# install dependencies (dev deps included so tests can run)
RUN npm ci

# copy source & tests
COPY . .

# Optional: if you changed Playwright version or added browsers, uncomment:
# RUN npx playwright install --with-deps

# Use non-root user if available (safer). Many Playwright base images provide 'pwuser'.
# If 'pwuser' does not exist in the image, this step will fail; remove it in that case.
USER pwuser  || true

# Default command — write reports into /app/test-results
CMD ["npx", "playwright", "test", "--reporter=html,line", "--output=/app/test-results"]
