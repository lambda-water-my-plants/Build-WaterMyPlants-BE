exports.seed = async function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('watering')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('watering').insert([
        { plant_id: 1, watering_time: '2019-04-17 8:00' },
        { plant_id: 2, watering_time: '2019-04-17 14:00' },
      ]);
    });
};
