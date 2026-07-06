# Build stage

FROM node:20-alpine AS build


WORKDIR /app


COPY package*.json ./


RUN npm install


COPY . .

ARG REACT_APP_SERVER_URL
ENV REACT_APP_SERVER_URL=$REACT_APP_SERVER_URL

RUN npm run build



# Production stage

FROM nginx:alpine


COPY --from=build /app/build /usr/share/nginx/html


EXPOSE 80


CMD ["nginx","-g","daemon off;"]