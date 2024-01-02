import * as React from "react";
import { Button, SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import FlappyBird from "./src/FlappyBird/FlappyBird.screen";
import GameScreen from "./src/Game/Game.component";

enum GameEnum {
  FlappyBird = "FlappyBird",
  GameScreen = "GameScreen",
}

export default function App() {
  const [currentGame, setCurrentGame] = React.useState<string>("");
  const [shouldGameBeRunning, setShouldGameBeRunning] = React.useState(false);

  const getGameSelect = (game: string) =>
    React.useMemo(() => {
      switch (game) {
        case GameEnum.GameScreen:
          return (
            <GameScreen
              style={styles.container}
              running={shouldGameBeRunning}
            />
          );
        case GameEnum.FlappyBird:
          return (
            <FlappyBird
              style={styles.container}
              running={shouldGameBeRunning}
            />
          );
        default:
          return <View style={{
            flex: 1,
            backgroundColor: "#fff",
          }} />;
      }
    }, [game, shouldGameBeRunning, setShouldGameBeRunning]);

  
  const onPressStartBtn = React.useCallback(() => {
    if (!shouldGameBeRunning) {
      setShouldGameBeRunning(true);
    }
  }, [shouldGameBeRunning, setShouldGameBeRunning]);

  const pauseBtn = React.useMemo(() => {
    if (currentGame) {
      return (
        <Button
          key={"0"}
          title="Pause"
          onPress={() => {
            if (!!shouldGameBeRunning) {
              setShouldGameBeRunning(false);
              return;
            }
            setShouldGameBeRunning(true);
          }}
        />
      );
    }
    return null;
  }, [currentGame, shouldGameBeRunning, setShouldGameBeRunning]);

  let resetBtn = React.useMemo(() => (
    <Button
      key={"1"}
      title="Reset"
      onPress={() => {
        setShouldGameBeRunning(false);
        setCurrentGame("");
      }}
    />
  ), [setShouldGameBeRunning, setCurrentGame]);

  const startBtn = React.useMemo(() => (
    <Button
      key={"2"}
      title="Start"
      onPress={() => {
        setCurrentGame(GameEnum.FlappyBird);
        onPressStartBtn();
      }}
    />
  ), [setCurrentGame, onPressStartBtn]);

  const groupBtns = React.useMemo(() => {
    let listBtns = [resetBtn, pauseBtn, startBtn];
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
        }}>
        {[...listBtns]}
      </View>
    );
  }, [
    currentGame,
    shouldGameBeRunning,
    setShouldGameBeRunning,
    onPressStartBtn,
    pauseBtn,
    resetBtn,
    startBtn,
  ]);

  return (
    <SafeAreaView
      style={styles.container}>
      {getGameSelect(currentGame)}
      {groupBtns}
      <StatusBar hidden />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
  },
});
