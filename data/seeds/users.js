const bcrypt = require('bcryptjs');
const pw = bcrypt.hashSync('pass');
const seeds = [
  {
    username: 'md1',
    email: 'kkingbd@gmail',
    password: pw,
    phone: '34712334'
  },
  {
    username: 'md2',
    email: '11@gmail',
    password: pw,
    phone: '34712311'
  },
];
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([...seeds]);
    });
};
