exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('plants')
    //.del()
    .then(function() {
      return knex('plants').insert([...seeds]);
    });
};

const seeds = [{name: "Rose", user_id: 1} ];


