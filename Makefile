

#help: @ List available tasks on this project
help:
	@grep -E '#[a-zA-Z\.\-]+:.*?@ .*$$' $(MAKEFILE_LIST)| tr -d '#' | awk 'BEGIN {FS = "@"}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2 }'

.PHONY: help check test pre-build build verify-build install
.PHONY: enable-scripts publish deploy
.PHONY: db_start db_stop db_clean openapi_start openapi_stop celery_start



build:
	docker build . -t angular-pwa-test:latest

run:
	docker run  -p 4200:4200 angular-pwa-test:latest

