import React from "react";
import { StatusBar, StyleSheet, ViewStyle } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { Finger } from "./Game.renderers";
import { MoveFinger } from "./Game.systems";

export interface Entity {
  position: number[];
  renderer: React.ReactNode;
}

export interface Touch {
  type: string;
  id: number;
  delta: { pageX: number; pageY: number; };
}

interface GameState { }

function Game(props: any, state: GameState) {
  const entities: { [key: number]: Entity } = {
    1: { position: [40, 200], renderer: <Finger position={[40, 200]} /> },
  };

  return (
    <GameEngine
      style={styles.container}
      systems={[MoveFinger]}
      entities={entities}
      onEvent={props.onEvent}
    >
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