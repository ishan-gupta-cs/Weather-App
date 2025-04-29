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

# Copy backend and frontend build
COPY --from=backend /app/server ./server
COPY --from=frontend /app/client/build ./client/build

# Install required packages for both client and server
# Start both the frontend and backend servers in parallel
WORKDIR /app/server

# Expose port for backend and frontend
EXPOSE 3522
EXPOSE 3000

# Start backend and frontend concurrently
CMD ["sh", "-c", "npm start & npm start & wait"]
