FROM mcr.microsoft.com/playwright:v1.41.1-jammy

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm run install:all

COPY . .

RUN cp .env.example .env
EXPOSE 9323

CMD ["npm", "run", "test"]