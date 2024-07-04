import {userMutations, userQueries} from './users';
import { restaurantQueris, restaurantMutations, restaurantFields } from './restaurant';

const resolvers = {
  Query: {
    ...userQueries,
    ...restaurantQueris,
  },
  Mutation: {
    ...userMutations,
    ...restaurantMutations,
  },
  ...restaurantFields,
};

export default resolvers;