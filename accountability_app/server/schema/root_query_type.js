const mongoose = require('mongoose');
// const User = mongoose.model('user');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const UserType = require('./user_type');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () =>({
    users: {
      type: new GraphQLList(UserType),
      resolve(){
        // return User.find({});
        return [{id:1},{id:2},{id:3}];
      }
    }
  })
})

module.exports = RootQuery;