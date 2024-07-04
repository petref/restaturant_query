import { User } from "../../../db/models";

const userQueries = {
  users: async (_, args) => {
    const users = await User.find();

    return users;
  },
  user: async (_, { id }) => {
    const user = await User.findOne({where: {id:id}});

    return user;
  },
};

export default userQueries;