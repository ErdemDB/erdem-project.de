FROM node:21.7.1-slim AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM node:21.7.1-slim
WORKDIR /app
COPY --from=build /app/build /app
CMD ["npm", "start"]
