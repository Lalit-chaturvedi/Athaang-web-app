# Stage 1: Build Vite App
FROM node:18 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve with unprivileged Nginx
FROM nginxinc/nginx-unprivileged:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
