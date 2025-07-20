// Example database helper using query builder
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

module.exports = {
  getRestaurants: () => {
    return new Promise((resolve, reject) => {
      db.all('SELECT * FROM restaurants', (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
  },
  getFoodsByRestaurant: (restaurantId) => {
    return new Promise((resolve, reject) => {
      db.all('SELECT * FROM foods WHERE restaurant_id = ?', [restaurantId], (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
  },
};
