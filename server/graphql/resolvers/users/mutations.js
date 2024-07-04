import { User } from '../../../db/models';

const userMutations = {
  createUser: async (_, { user }) => {

    return User.create({
    ...user
    });
  },
  updateUser: async (_, { id, user }) => {
    const updateUser = await User.findByPk(id);

    return updateUser;
  },
};

export default userMutations;