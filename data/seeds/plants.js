exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('plants')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('plants').insert([...seeds]);
    });
};
// const plantNames = [
//   'Amaryllis',
  // 'Aster',
  // 'Anemone',
  // 'Azalea',
  // 'Begonia',
  // 'Bluebell',
  // 'Babys Breath',
  // 'Chrysanthemum',
  // 'Clover',
  // 'Crocus',
  // 'Freesia',
  // 'Gladiola',
  // 'Lily',
  // 'Daisy',
  // 'Bee Balm',
  // 'Bergamot',
  // 'Bell Flower',
  // 'Bird of Paradise',
  // 'Bottlebrush',
  // 'Calla Lily',
  // 'Columbine',
  // 'Orchid',
  // 'Daffodil',
  // 'Primrose',
  // 'Forget-Me-Not',
  // 'Foxglove',
  // 'Iris',
  // 'Lilac',
  // 'Marjoram',
  // 'Orange Blossom',
  // 'Peach Blossom',
  // 'Petunia',
  // 'Rosemary',
  // 'Sage',
  // 'Thyme',
  // 'Thistle',
  // 'Hyacinth',
  // "Lady's Slipper",
  // 'Amaranthus',
  // 'Marigold',
  // 'Mimosa',
  // 'Peony',
  // 'Rose',
  // 'Holly',
  // 'Lavender',
  // 'Snapdragon',
  // 'Carnation',
  // 'Sunflower',
  // 'Tansy',
  // 'Tulip',
  // 'Buttercup',
  // 'Zinnia'
// ];

// const randomPlants = () => {
//   return plantNames[Math.floor(Math.random() * plantNames.length)];
// };

const seeds = [{name: "Rose", user_id: 1} ];


