# STEP 1 - Build do frontend
FROM node:16.14.2-slim AS builder

COPY package.json .
RUN npm install
COPY . .
ENV REACT_APP_BACKEND_URL=http://192.168.0.123:8080
RUN npm run build

# STEP 2 - RUN do frontend
FROM nginx AS server
COPY --from=builder build /usr/share/nginx/html