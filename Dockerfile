# ---------- Build React Frontend ----------
FROM node:18 AS frontend
WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
COPY client/ .
RUN npm run build

# ---------- Build Backend ----------
FROM node:18 AS backend
WORKDIR /app/server
COPY server/package*.json ./
RUN npm install
COPY server/ .

# ---------- Final Image ----------
FROM node:18-alpine
WORKDIR /app
COPY --from=backend /app/server ./
COPY --from=frontend /app/client/build ./client/build

EXPOSE 3522
CMD ["node", "server.js"]
