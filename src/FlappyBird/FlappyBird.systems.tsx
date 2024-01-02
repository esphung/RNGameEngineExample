import Matter, { Engine } from "matter-js";
// import { getPipeSizePosPair } from "./utils/random";

import { Dimensions } from 'react-native'
import { PhysicsEntities } from "../types";

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const Physics = (entities: PhysicsEntities, { touches, time, dispatch }: {
    touches: TouchEvent[],
    time: { delta: number },
    dispatch: (action: { type: string }) => void,
}) => {
    let engine = entities.physics?.engine

    touches.filter(t => t.type === 'press')
        .forEach(t => {
            Matter.Body.setVelocity(entities.Bird.body, {
                x: 0,
                y: -8
            })
        })

    Matter.Engine.update(engine as Engine, time.delta)

    return entities;
}
export default Physics