import axios from "axios";
const URL = "https://jsonplaceholder.typicode.com/todos/1";

interface Todos {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(URL).then((response) => {
  const todos = response.data as Todos;
  const title = todos.title;
  const Id = todos.id;
  const Completed = todos.completed;
  logTodos(title, Id, Completed);
});

const logTodos = (title: string, Id: number, Completed: boolean) => {
  console.log(`
    the title of todos is ${title} 
    and the it has ${Id} id
    is finished : ${Completed}
    `);
};
