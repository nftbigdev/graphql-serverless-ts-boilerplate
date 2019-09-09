const users = [
  {
    id: '1',
    name: 'Ada Lovelace',
    birthDate: '1815-12-10',
    username: '@ada',
  },
  {
    id: '2',
    name: 'Alan Turing',
    birthDate: '1912-06-23',
    username: '@complete',
  },
];

const resolvers = {
  Query: {
    me() {
      return users[0];
    },
  },
  User: {
    // eslint-disable-next-line no-underscore-dangle
    __resolveReference(object: any) {
      return users.find(user => user.id === object.id);
    },
  },
};

export default resolvers;
