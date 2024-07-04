import User from "../models/user.js";
import Restaurant from "../models/restaurant.js";
import { restaurantsWords } from "./seedData.js";
import sequelize from "./index.js";


const seedRestaurants = async () => {
    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
            User.sync({force: true}).then(() => {
                // Table created
                User.create({
                  name: 'John',
                  email: 'john123@example.com',
                });
                Restaurant.sync({force: true}).then(async () => {
                    for(let i=0; i <=100; i++) {
                        Restaurant.create({
                            name: `${restaurantsWords[Math.floor(Math.random() * 81)]} ${restaurantsWords[Math.floor(Math.random() * 81)]}`,
                            address: `${restaurantsWords[Math.floor(Math.random() * 81)]} ${restaurantsWords[Math.floor(Math.random() * 81)]}`,
                            email: `${restaurantsWords[Math.floor(Math.random() * 81)]}@gmail.com`
                        })
                    }
                })
              });

        }).catch((error) => {
            console.error('Unable to connect to the database: ', error);
        });
}

seedRestaurants();