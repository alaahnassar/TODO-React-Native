import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  // AsyncStorage,
} from "react-native";
import Divider from "./Divider";
import ToDos from "./todos";
import Filter from "./Filter";
import AsyncStorage from "@react-native-async-storage/async-storage";
export function home(navigation) {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [todos, saveTodo] = useState([]);
  const save = () => {
    const newTodo = { title, des, status: false };
    saveTodo([...todos, newTodo]);
    setTitle("");
    setDes("");
  };
  const handleTodoSelect = (index, isSelected) => {
    const updatedItem = [...todos];
    updatedItem[index].status = isSelected;
    saveTodo(updatedItem);
    setFilter(updatedItem);
  };
  const [filter, setFilter] = useState("");
  const handelFilter = (value) => {
    setFilter(value);
  };
  useEffect(() => {
    AsyncStorage.getItem("todos").then((tasks) => {
      if (tasks) {
        saveTodo(JSON.parse(tasks));
      }
    });
  }, []);
  useEffect(() => {
    AsyncStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={setTitle}
        value={title}
        placeholder="Title"
      />
      <TextInput
        style={styles.input}
        onChangeText={setDes}
        value={des}
        placeholder="Description"
      />

      <TouchableOpacity style={styles.button} onPress={save}>
        <Text>Add</Text>
      </TouchableOpacity>
      <Divider />
      <Filter filterValue={handelFilter} />
      <View>
        <ToDos
          todos={todos}
          filter={filter}
          navigation={navigation}
          saveTodo={saveTodo}
          handleTodoSelect={handleTodoSelect}
        ></ToDos>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 30,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    margin: 12,
    padding: 10,
  },
});
