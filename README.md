## Track and Tracing
System that allows users to track and trace supply chain items.

- Frontend: https://supply-chain-zrljofgitq-uc.a.run.app/
- Backend: https://supply-chain-api-zrljofgitq-uc.a.run.app/

### Running the app
#### 1. Docker
1. At the root dir Run `make dev_up`
2. Access Backend with `http://localhost:4000/`
3. Access Frontend with `http://localhost:3000/`

#### 2. Locally
1. cd into client folder and run `npm i`
2. Once done run `npm run dev` and access Frontend with `http://localhost:3000/` 
3. cd into server folder and run `npm i`
4. ensure you have a Postgres server running locally
5. migrate the db with `npm run prisma:migrate && npm run prisma:seed`
6. run server `npm run dev` and access Backend with `http://localhost:4000/`

### Tech
1. Frontend
  - ReactJs
  - Tailwindcss
2. Backend
  - NodeJS Express
3. Database
  - Postgres
  - ORM: Prisma
4. Deployment/Hosting
  - Docker
  - GCP: Cloud run
