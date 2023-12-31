import { SafeAreaView, StyleSheet } from 'react-native';
import GameScreen from "./src/game/screen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <GameScreen />
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
