const db = require('./dbConfig.js');

module.exports = {
  find,
  findBy,
  addPlant,
  findById,
  deletePlantById,
  updatePlant,
};

function find() {
  return db('plants').select('name', 'description');
}
function findBy(filter) {
  return db('plants').where(filter);
}

async function addPlant(user_id, plant) {
  const [id] = await db('plants').insert({user_id}, ...plant, "id")
  .returning("id");
  return findById(id);
}

function findById(id) {
  return db('plants')
    .where({ id })
    .first();
}

function deletePlantById(id) {
  return db('plants')
    .where({ id })
    .delete();
}
function updatePlant(id, changes){
  db('users')
  .where({id})
  .update(changes)
}