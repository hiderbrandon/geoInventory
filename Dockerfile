FROM node:19-alpine3.16 AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:19-alpine3.16 
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/dist /usr/src/app/dist
COPY --from=build /usr/src/app/.env /usr/src/app/.env
COPY --from=build /usr/src/app/node_modules /usr/src/app/node_modules


EXPOSE 3001
# Start the server using the production build
CMD [ "node", "dist/main.js" ]