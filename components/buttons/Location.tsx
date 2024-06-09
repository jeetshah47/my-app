import React, { useEffect } from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import * as TaskManager from "expo-task-manager";
import * as Location from "expo-location";

const LOCATION_TASK_NAME = "background-location-task";
const requestPermissions = async () => {
  const { status: foregroundStatus } =
    await Location.requestForegroundPermissionsAsync();
  if (foregroundStatus === "granted") {
    const { status: backgroundStatus } =
      await Location.requestBackgroundPermissionsAsync();
    if (backgroundStatus === "granted") {
      const location = await Location.getCurrentPositionAsync({});
      console.log(location);

      await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
        accuracy: Location.Accuracy.Balanced,
      });
    }
  }
};

const PermissionsButton = () => {
    useEffect(() => {
            requestPermissions();
    },[])
  return (
    <View style={styles.container}>
      <Button onPress={requestPermissions} title="Enable background location" />
    </View>
  );
};

TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
  if (error) {
    console.log(error);

    // Error occurred - check `error.message` for more details.
    return;
  }
  if (data) {
    // const { locations } = data;
    console.log(":pa", data);
    // locate = locations;
    // do something with the locations captured in the background
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PermissionsButton;
