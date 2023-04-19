import React from "react";
import { View, Text } from "react-native";
import Todo from "./todo";

function todos({ todos, navigation, filter, handleTodoSelect, saveTodo }) {
  const [todoList, setTodoList] = React.useState(todos);
  console.log(todoList);
  let filtredTodo = todos;
  console.log(filtredTodo);
  console.log(filter);
  if (filter == "active") {
    filtredTodo = todos.filter((todo) => todo.status == false);
    console.log("active todos: " + filtredTodo);
  }
  if (filter == "done") {
    filtredTodo = todos.filter((todo) => todo.status == true);
    console.log("done todos: " + filtredTodo);
  }

  return (
    <View>
      {filtredTodo.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          navigation={navigation}
          setTodoList={setTodoList}
          todos={todos}
          saveTodo={saveTodo}
          handleTodoSelect={handleTodoSelect}
        />
      ))}
    </View>
  );
}

export default todos;
