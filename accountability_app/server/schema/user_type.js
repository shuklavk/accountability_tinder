const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLList,
  GraphQLString,
  GraphQLID,
  GraphQLObjectType
} = graphql;

const User = require('../../models/user');

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: () => ({
    id:{type: GraphQLID},
    username: {type:GraphQLString},
    password: {type: GraphQLString},
    description: {type:GraphQLString},
    time_zone: {type:GraphQLString},
    email: {type:GraphQLString},
    goal: {type:GraphQLString},
    name: {type:GraphQLString},
    likedProfiles: {type:GraphQLList(UserType)}
  })
})

module.exports = UserType;