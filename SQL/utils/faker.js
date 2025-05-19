const { faker } = require('@faker-js/faker')

function generateRandomData() {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  }
}

module.exports = generateRandomData