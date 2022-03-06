require('dotenv').config();

module.exports = {
    development: {
        client: 'mysql2',
        connection: process.env.DB_URL
    },
    staging: {
        client: 'mysql2',
        connection: process.env.DB_URL,
    },
    production: {
        client: 'mysql2',
        connection: process.env.DB_URL
    }
  };