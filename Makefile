prod_up: 
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml up
prod_up_build: 
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build
prod_down:
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml down

dev_up:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
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