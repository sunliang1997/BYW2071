const controller = require('../controller/users')

module.exports = (router) => {
  router.get('/user', controller.init)
}
