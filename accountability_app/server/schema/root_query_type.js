const mongoose = require('mongoose');
const User = require('../../models/user')
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const UserType = require('./user_type');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () =>({
    users: {
      type: new GraphQLList(UserType),
      resolve(){
        return User.find({});
      }
    },
    user:{
      type: UserType,
      args: {id: {type: new GraphQLNonNull(GraphQLID)}},
      resolve(parentVal, { id }){
        return User.findById(id);
      }
    }
  })
})

module.exports = RootQuery;