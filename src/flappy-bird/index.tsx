import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import { Entity } from '../game/Game.component';
import initialEntities from './entities';

export interface FlappyBirdProps { }

const entities = initialEntities();

export default function FlappyBird(props: FlappyBirdProps) {
    return <View style={styles.container}>
        <GameEngine
            style={styles.container}
            systems={[]}
            entities={entities}
        />
    </View>

    return (
        <View style={styles.container}>
            <Text>FlappyBird</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
