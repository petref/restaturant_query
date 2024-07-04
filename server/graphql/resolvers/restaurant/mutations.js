import { Restaurant } from '../../../db/models';

const restaurantMutations = {
  createRestaurant: async (_, { restaurant }) => {
    const newAuthor = new Restaurant(restaurant);

    return newAuthor.save();
  },
  updateRestaurant: async (_, { id, restaurant }) => {
    const updateRestaurant = await Restaurant.update(
        {name: restaurant.name, address: restaurant.address, email: restaurant.email },
      {
        where: {
            id: id,
        }
      },
    );

    return updateRestaurant;
  },
};

export default restaurantMutations;