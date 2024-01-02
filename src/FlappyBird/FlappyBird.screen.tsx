import React from 'react';
import { StyleSheet, View } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import initialEntities from './FlappyBird.entities';
import Physics from './FlappyBird.systems';
import { GameProps, PhysicsEntities } from '../types';

export interface FlappyBirdProps extends GameProps {
    entities?: PhysicsEntities;
    running?: boolean;
}

export default function FlappyBird(props: FlappyBirdProps) {
    return <View style={styles.container}>
        <GameEngine
            style={styles.container}
            systems={[Physics]}
            entities={initialEntities()}
            running={props.running}
            onEvent={(e: any) => {
                console.log({e});
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
