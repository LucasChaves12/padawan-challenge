const { ApolloServer } = require('apollo-server-express');
const { createTestClient } = require('apollo-server-testing');
const typeDefs = require('../schema');
const resolvers = require('../tasks');

const { query, mutate } = createTestClient(
  new ApolloServer({ typeDefs, resolvers })
);

describe('GraphQL API', () => {
  it('should create a new task', async () => {
    const CREATE_TASK = `
      mutation {
        createTask(content: "Become a jedi") {
          id
          content
          completed
        }
      }
    `;
    const res = await mutate({ mutation: CREATE_TASK });
    expect(res.data.createTask.content).toBe("Become a jedi");
    expect(res.data.createTask.completed).toBe(false);
  });

  it('should get the list of tasks', async () => {
    const GET_TASKS = `
      query {
        tasks {
          id
          content
          completed
        }
      }
    `;
    const res = await query({ query: GET_TASKS });
    console.log(res.data.tasks)
    expect(res.data.tasks.length).toBeGreaterThan(0);
  });

  it('should update an existing task', async () => {
    const UPDATE_TASK = `
      mutation {
        updateTask(id: 66, content: "Execute order", completed: true) {
          id
          content
          completed
        }
      }
    `;
    const res = await mutate({ mutation: UPDATE_TASK });
    expect(res.data.updateTask.content).toBe("Execute order");
    expect(res.data.updateTask.completed).toBe(true);
  });

  it('should delete a task', async () => {
    const DELETE_TASK = `
      mutation {
        deleteTask(id: 2)
      }
    `;
    const res = await mutate({ mutation: DELETE_TASK });
    expect(res.data.deleteTask).toBe("Task with id 2 deleted successfully");
  });
});
