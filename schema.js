const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Task {
    id: ID!
    content: String!
    completed: Boolean!
  }

  type Query {
    tasks: [Task]
  }

  type Mutation {
    createTask(content: String!): Task
    updateTask(id: ID!, content: String, completed: Boolean): Task
    deleteTask(id: ID!): String
  }
`;

module.exports = typeDefs;
