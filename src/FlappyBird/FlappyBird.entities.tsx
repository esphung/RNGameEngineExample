import Matter from 'matter-js';
import Bird from './components/Bird';

/**
 * 
 * @returns First object is the physics engine, second is the bird
 */
export default function initialEntities() {
    let engine = Matter.Engine.create({ enableSleeping: false });
    engine.gravity.y = 0.5;
    return {
        physics: {
            engine: engine,
            world: engine.world,
        },
        Bird: Bird(engine.world, 'green', { x: 50, y: 300 }, { width: 50, height: 50 }),
    }
}
