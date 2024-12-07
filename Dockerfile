# Last current node version with alpine linux base (smaller than regular debian)
FROM node:23-alpine

WORKDIR /usr/src/app

# Download dependencies as a separate step to take advantage of Docker's caching
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --ignore-scripts --omit=dev

COPY . .

RUN npm run compile

# Run the application as a non-root user.
USER node

CMD node built/index.js
