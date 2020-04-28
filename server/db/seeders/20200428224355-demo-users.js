'use strict';
const { createPasswordHashSync } = require('../../services/helpers/user-model-helpers')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      login: 'user1',
      password: createPasswordHashSync('user1password'),
      email: 'user1@mail.ru',
      profile: `{
        "facebook": "facebook1",
        "vk": "vk1",
        "github": "github1",
        "linkedIn": "linkedIn1",
        "aboutMe": "aboutMe1"
      }`
    }, {
      login: 'user2',
      password: createPasswordHashSync('user2password'),
      email: 'user2@mail.ru',
      profile: `{
        "facebook": "facebook2",
        "vk": "vk2",
        "github": "github2",
        "linkedIn": "linkedIn2",
        "aboutMe": "aboutMe2"
      }`
    }, {
      login: 'user3',
      password: createPasswordHashSync('user3password'),
      email: 'user3@mail.ru',
      profile: `{
        "facebook": "facebook3",
        "vk": "vk3",
        "github": "github3",
        "linkedIn": "linkedIn3",
        "aboutMe": "aboutMe3"
      }`
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
