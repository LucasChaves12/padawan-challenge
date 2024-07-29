let tasks = [{ id: 66, content: 'Execute order', completed: false }];
let idCounter = tasks.length + 1;

const resolvers = {
  Query: {
    tasks: () => tasks,
  },
  Mutation: {
    createTask: (_, { content }) => {
      const newTask = {
        id: idCounter++,
        content: content,
        completed: false,
      };
      tasks.push(newTask);
      return newTask;
    },
    updateTask: (_, { id, content, completed }) => {
      const task = tasks.find(task => task.id === parseInt(id));
      if (!task) {
        throw new Error('Task not found');
      }
      if (content !== undefined) {
        task.content = content;
      }
      if (completed !== undefined) {
        task.completed = completed;
      }
      return task;
    },
    deleteTask: (_, { id }) => {
      const taskIndex = tasks.findIndex(task => task.id === parseInt(id));
      if (taskIndex === -1) {
        throw new Error('Task not found');
      }
      tasks.splice(taskIndex, 1);
      return `Task with id ${id} deleted successfully`;
    },
  },
};

module.exports = resolvers;
