import * as React from "react";
import { Button, SafeAreaView, StyleSheet, Text } from 'react-native';
import GameScreen from "./src/Game/Game.component";
import FlappyBird from "./src/FlappyBird/FlappyBird.screen";

enum GameEnum {
  FlappyBird = "FlappyBird",
}

export default function App() {
  const [currentGame, setCurrentGame] = React.useState<string>("");
  const [flappyBirdState, setFlappyBirdState] = React.useState({});
  const [flappybirdRunning, setFlappyBirdRunning] = React.useState(false);

  const getGameSelect = (game: string) => React.useMemo(() => {
    switch (game) {
      case GameEnum.FlappyBird:
        return <FlappyBird style={styles.container} />
      default:
        return <GameScreen style={styles.container} data={flappyBirdState} running={flappybirdRunning} />
    }
  }, [game]);

  const startBtn = React.useMemo(() => {
    if (currentGame) {
      return <Button
        title="Back"
        onPress={() => {
          setCurrentGame("");
        }}
      />
    } else {
      return <Button
        title="Flappy Bird"
        onPress={() => {
          setCurrentGame(GameEnum.FlappyBird);
        }}
      />
    }
  }, [currentGame]);

  return (
    <SafeAreaView style={styles.container}>
      {getGameSelect(currentGame)}
      {startBtn}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
  },
});
