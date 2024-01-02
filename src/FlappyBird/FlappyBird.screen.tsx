import React from 'react';
import { StyleSheet, View } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import initialEntities from './FlappyBird.entities';
import Physics from './FlappyBird.systems';
import { GameProps, PhysicsEntities } from '../types';

const entities = initialEntities();

export interface FlappyBirdProps extends GameProps {
    entities?: PhysicsEntities;
}

export default function FlappyBird(props: FlappyBirdProps) {
    return <View style={styles.container}>
        <GameEngine
            style={styles.container}
            systems={[Physics]}
            entities={entities}
            running={props.running}
            {...props}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
