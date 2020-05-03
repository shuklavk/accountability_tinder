const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const mongoose = require('mongoose');
const User = require('../../models/user')
const UserType = require('./user_type');

const mutation = new GraphQLObjectType({
  name:'Mutation',
  fields:{
    addUser: {
      type: UserType,
      args:{
        username: {type: GraphQLString},
        password: {type: GraphQLString},
        description: {type: GraphQLString},
        time_zone: {type: GraphQLString},
        email: {type: GraphQLString}
      },
      resolve(parentValue, {username, password, description, time_zone, email}){
        return new User({username, password, description, time_zone, email, likedProfiles:[]}).save();
      }
    }
  }
})

module.exports = mutation;