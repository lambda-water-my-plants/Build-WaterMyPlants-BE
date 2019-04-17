const bcrypt = require('bcryptjs');
const pw = bcrypt.hashSync('pass');
const seeds = [
  {
    username: 'mdmd',
    email: 'kki@gmail',
    password: pw,
    phone: '347412334'
  },
];
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  //return knex('users')
    //.then(function () {
      // Inserts seed entries
      return knex('users').insert([...seeds]);
    //});
};
