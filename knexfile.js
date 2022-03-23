require('dotenv').config();

module.exports = {
    development: {
        client: 'mssql',
        connection: {
            user: 'sa',
            password: '8h48t984hT',
            server: 'docker.for.win.localhost',
            database: 'Demo',
            options: {
                port: 1433 
            }
        }
    },
    staging: {
        client: 'mssql',
        connection: process.env.DB_URL,
    },
    production: {
        client: 'mssql',
        connection: process.env.DB_URL
    }
  };