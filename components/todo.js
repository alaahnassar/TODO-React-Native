import * as React from "react";
import { TouchableRipple } from "react-native-paper";

import {
  View,
  StyleSheet,
  CheckBox,
  TouchableOpacity,
  Text,
  Modal,
  Dimensions,
} from "react-native";
import { Icon, Button } from "react-native-elements";
import todos from "./todos";
function todo({
  todo,
  navigation,
  setTodoList,
  todos,
  index,
  saveTodo,
  handleTodoSelect,
}) {
  const [isSelected] = React.useState(todo.status);
  const [showModal, setShowModal] = React.useState(false);
  const [indexToDelete, setIndexToDelete] = React.useState(null);

  const handleDeleteTodo = () => {
    const newTodoList = [...todos];
    newTodoList.splice(indexToDelete, 1);
    setTodoList(newTodoList);
    setShowModal(false);
    setIndexToDelete(null);
    saveTodo(newsetSelectionTodoList);
  };
  const handleShowModal = (index) => {
    setShowModal(true);
    setIndexToDelete(index);
  };
  const handelSelectChange = (value) => {
    handleTodoSelect(index, value);
  };
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  console.log(windowHeight, windowWidth);

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <CheckBox
          onValueChange={handelSelectChange}
          value={todo.status}
          style={styles.checkbox}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableRipple
          onPress={() => navigation.navigation.navigate("todoDetails", todo)}
        >
          <View>
            <Text style={styles.item}>{todo.title}</Text>
          </View>
        </TouchableRipple>
        <TouchableOpacity
          onPress={() => {
            handleShowModal(index);
          }}
        >
          <Icon name="delete" color="#FF0000" />
        </TouchableOpacity>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <Text style={styles.modalText}>
              Are you sure you want to delete this item?
            </Text>
            <View style={styles.modalButtons}>
              <Button title="Cancel" onPress={() => setShowModal(false)} />
              <Button
                title="Delete"
                onPress={handleDeleteTodo}
                buttonStyle={styles.deleteButton}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
  {
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#dddddd",
    paddingHorizontal: 30,
    margin: 10,
  },
  item: {
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    fontSize: 20,
  },
  modalContainer: {
    // flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width,
  },
  modal: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  deleteButton: {
    backgroundColor: "#FF0000",
  },
});

export default todo;
