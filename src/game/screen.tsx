import React, { PureComponent } from "react";
import { AppRegistry, StyleSheet, StatusBar, ViewStyle } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { Finger } from "./renderers";
import { MoveFinger } from "./systems";

interface Entity {
  position: number[];
  renderer: React.ReactNode;
}

interface BestGameEverState {}

class BestGameEver extends PureComponent<{}, BestGameEverState> {
  constructor(props: {}) {
    super(props);
  }

  render() {
    const entities: { [key: number]: Entity } = {
      1: { position: [40, 200], renderer: <Finger position={[40, 200]} /> },
      2: { position: [100, 200], renderer: <Finger position={[100, 200]} /> },
      3: { position: [160, 200], renderer: <Finger position={[160, 200]} /> },
      4: { position: [220, 200], renderer: <Finger position={[220, 200]} /> },
      5: { position: [280, 200], renderer: <Finger position={[280, 200]} /> },
    };

    return (
      <GameEngine
        style={styles.container}
        systems={[MoveFinger]}
        entities={entities}
      >
        <StatusBar hidden={true} />
      </GameEngine>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  } as ViewStyle,
});

export default BestGameEver;