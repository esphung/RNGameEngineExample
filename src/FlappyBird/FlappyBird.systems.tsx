import { PhysicsEntities, PhysicsProps, Touch } from '../types';
import Matter from 'matter-js';

const Physics = (entities: PhysicsEntities, { touches, time, dispatch }: {
    touches: Touch[];
    time: {
        delta: number;
        previousDelta: number;
        current: number;
    }
    dispatch: (event: any) => void,
}) => {
    let engine = entities?.physics?.engine;
    let world = engine?.world;
    if (engine === undefined || world === undefined) {
        return entities;
    }

    Matter.Engine.update(engine, time.previousDelta);

    if (world === undefined) {
        return entities;
    }

    return entities;
}

export default Physics;
