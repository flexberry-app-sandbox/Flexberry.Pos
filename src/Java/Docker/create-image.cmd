docker build --no-cache -f SQL\Dockerfile.PostgreSql -t pos-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t pos-java/app ../../..
