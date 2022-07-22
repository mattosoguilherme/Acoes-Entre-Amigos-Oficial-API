FROM node AS development

WORKDIR /aea
COPY package*.json prisma ./
RUN npm install && npx prisma generate
COPY . .
RUN npm run build

FROM node AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /aea
COPY package*.json ./
RUN npm ci --omit=dev --ignore-scripts
COPY . .

FROM production AS final

COPY --from=development /app/dist ./dist
CMD ["node", "dist/main"]