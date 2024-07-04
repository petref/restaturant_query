import app from './app.js';
import { port } from "./config/environment/index.js";
import sequelize from './db/index.js';



const start = async () => {
  try {
    sequelize.authenticate().then(() => {
        console.log('Connection has been established successfully.');
     }).catch((error) => {
        console.error('Unable to connect to the database: ', error);
     });
    app.listen(port);
    console.log(`server running at port: ${port}`);
  } catch {
    console.log("Not able to run server");
  }
};

start();