import {Sequelize} from 'sequelize';

// Connect to SQLite database
const sequelize = new Sequelize({
  dialect: 'sqlite',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  
  storage: 'database.sqlite',
});

// Export the Sequelize instance
export default sequelize;
