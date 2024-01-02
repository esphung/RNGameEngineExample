import * as React from 'react';
import Matter, { Engine } from 'matter-js';
import { View } from 'react-native';

const BirdRenderer = (props: { body: Matter.Body, color: string, size: { width: number, height: number } }) => {
    const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
    const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;

    const xBody = props.body.position.x - widthBody / 2;
    const yBody = props.body.position.y - heightBody / 2;

    return <View
        style={{
            borderWidth: 1,
            borderColor: props.color,
            borderStyle: 'solid',
            position: 'absolute',
            left: xBody, // how far from left
            top: yBody, // how far from top
            width: widthBody,
            height: heightBody,
        }}
    />
}

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
            // density: 0.04,
            // friction: 1,
            // frictionAir: 0.00001,
            // restitution: 0.8,
            // render: {
            //     fillStyle: color,
            // },
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