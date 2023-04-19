import React, { useState } from "react";
import { View, Text } from "react-native";
import { SegmentedButtons } from "react-native-paper";

const Filter = (props) => {
  const [value, setValue] = useState("");
  props.filterValue(value);
  return (
    <View style={{ margin: 10 }}>
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: "all",
            label: "All",
          },
          {
            value: "active",
            label: "Active",
          },
          {
            value: "done",
            label: "Done",
          },
        ]}
        onPress={(value) => setValue(value)}
      />
    </View>
  );
};

export default Filter;
