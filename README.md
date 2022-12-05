## Installation

```bash
$ npm install
```

## Running the app

```bash
# production
$ npm run start

# development
$ npm run start:dev


## Test

```bash
# unit tests
$ npm run test

# docker
  docker run --name mysql-housekeeping -e MYSQL_USER=admin -e MYSQL_PASSWORD=test -e MYSQL_DATABASE=housekeeping -e MYSQL_RANDOM_ROOT_PASSWORD=yes -p 3306:3306 -d mysql
