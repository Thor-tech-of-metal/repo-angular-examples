FROM node:alpine AS builder

WORKDIR /app

COPY . .

RUN npm install && \
    npm run build

FROM nginx:alpine

COPY --from=builder /app/dist/* /usr/share/nginx/html/
COPY --from=builder /app/dist/assets/i18n/*  /usr/share/nginx/html/assets/i18n/
COPY --from=builder /app/dist/assets/images/*  /usr/share/nginx/html/assets/images/
COPY --from=builder /app/dist/assets/images/companies/*  /usr/share/nginx/html/assets/images/companies/
COPY --from=builder /app/dist/assets/images/languages/*  /usr/share/nginx/html/assets/images/languages/


