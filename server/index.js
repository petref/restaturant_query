import app from './app.js';
import { port } from "./config/environment/index.js";
const start = async () => {
  try {
    app.listen(port);
    console.log(`server running at port: ${port}`);
  } catch {
    console.log('Not able to run server');
  }
};

start();