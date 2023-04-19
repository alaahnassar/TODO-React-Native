import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
export function todoDetails({ route }) {
  // console.log(todo);
  return (
    <View style={{ padding: 30 }}>
      <Card>
        <Card.Content>
          <Title>{route.params.title}</Title>
          <Paragraph>{route.params.des}</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
}
