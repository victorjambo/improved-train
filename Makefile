prod_up: 
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml up
prod_down:
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml down

dev_up:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
dev_down:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml down
