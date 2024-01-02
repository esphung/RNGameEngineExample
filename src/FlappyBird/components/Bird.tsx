import Matter, { Engine } from 'matter-js';
import { BirdRenderer } from '../FlappyBird.renderers';

export default function Bird(world: Engine["world"], color: string, pos: { x: number, y: number }, size: {
    width: number,
    height: number,
}) {
    const initialBird = Matter.Bodies.rectangle(
        pos.x,
        pos.y,
        size.width,
        size.height,
        {
            label: 'Bird',
        },
    );

    Matter.World.add(world, initialBird);

    return {
        body: initialBird,
        color,
        pos,
        size,
        renderer: <BirdRenderer body={initialBird} color={color} size={size} />,
    }
}