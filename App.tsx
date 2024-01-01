import { SafeAreaView, StyleSheet } from 'react-native';
import GameScreen from "./src/game/Game.component.tsx";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <GameScreen
        onEvent={(e: any) => {
          console.debug({ e });
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

// Path: src/screens/GameScreen/GameScreen.tsx
