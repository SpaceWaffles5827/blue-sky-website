# --- Builder Stage ---

FROM node:20-alpine AS builder

WORKDIR /app

# Copy manifests
COPY package.json package-lock.json ./

# Install dependencies (lockfile ensures reproducibility)
RUN npm ci

# Copy rest of app
COPY . .

# Build Next.js
RUN npm run build

# --- Runner Stage ---
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
ENV PORT 3000

# Copy only the built artifacts + node_modules from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

CMD ["npm", "run", "start"]
