const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphql;

const UserType = require('./types/user_type');

const AuthService = require('../services/auth');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parentValue, { email, password }, req) {
        return AuthService.signup({ email, password, req });
      },
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parentValue, { email, password }, req) {
        return AuthService.login({ email, password, req });
      },
    },
    logout: {
      type: UserType,
      resolve(parenValue, args, req) {
        const { user } = req;
        req.logout();
        return user;
      },
    },
  },
});

module.exports = mutation;
