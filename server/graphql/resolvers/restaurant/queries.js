import Restaurant from "../../../db/models";

const restaurantQueries = {
  restaurants: async (_, args) => {
    const restaurants = await Restaurant.find();

    return restaurants;
  },
  restaurant: async (_, { id }) => {
    const restaurant = await Restaurant.findById(id);

    return restaurant;
  },
};

export default restaurantQueries;