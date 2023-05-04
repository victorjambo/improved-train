prod_up: 
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml up
prod_up_build: 
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build
prod_down:
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml down

dev_up:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
dev_up_build: 
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build
dev_down:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml down

tag:
	docker tag supply-chain-client-prod-i gcr.io/jambo-188515/supply-chain:latest
tag_api:
	docker tag supply-chain-server-prod-i gcr.io/jambo-188515/supply-chain-api:latest

push:
	docker push gcr.io/jambo-188515/supply-chain:latest
push_api:
	docker push gcr.io/jambo-188515/supply-chain-api:latest

pg:
	docker run --name postgres-0 -e POSTGRES_PASSWORD=password -d -p 5432:5432 postgres:latest

ps_shell:
	docker exec -it postgres-0 bash
