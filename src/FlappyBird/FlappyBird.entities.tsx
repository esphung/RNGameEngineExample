import Matter from 'matter-js';
import Bird from './components/Bird';
import { useWindowDimensions } from 'react-native';
/**
 * 
 * @returns First object is the physics engine, second is the bird
 */
export default function initialEntities() {
    const { width, height } = useWindowDimensions();
    let engine = Matter.Engine.create({ enableSleeping: false });
    engine.gravity.y = 0.4;
    return {
        physics: {
            engine: engine,
            world: engine.world,
        },
        Bird: Bird(engine.world, 'green', { x: width * 0.5, y: 300 }, { width: 50, height: 50 }),
    }
}
