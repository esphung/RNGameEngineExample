import React from "react";
import { StatusBar, StyleSheet, Text, View, ViewStyle } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { Entity, GameProps, GameState } from '../types';
import { Finger } from "./Game.renderers";
import { MoveFinger } from "./Game.systems";

function Game(props: GameProps, state: GameState) {
  const entities: { [key: number]: Entity } = {
    1: { position: [40, 200], renderer: <Finger position={[40, 200]} /> },
    2: {
      position: [100, 200],
      renderer: <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'blue',
          borderRadius: 50,
        }}
      />
    },
  };

  return (
    <GameEngine
      style={styles.container}
      systems={[MoveFinger]}
      entities={entities}
      onEvent={props.onEvent}
    >
      <Text>Hello</Text>
      <StatusBar hidden={true} />
    </GameEngine>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  } as ViewStyle,
});

export default Game;