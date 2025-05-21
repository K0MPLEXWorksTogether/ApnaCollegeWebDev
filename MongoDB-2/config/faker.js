const { faker } = require('@faker-js/faker')

function generatePlaceholder() {
  return {
    from: faker.internet.username(),
    to: faker.internet.username(),
    msg: faker.git.commitMessage(),
  }
}

module.exports = generatePlaceholder