import * as React from 'react';
import { GameEngine } from 'react-native-game-engine';

export interface GameState { }

export interface GameProps extends React.ComponentProps<typeof GameEngine> {
  /**
   * @param e any event from the game engine
   * @returns 
   */
  onEvent?: (e: any) => void;
}

export interface Entity {
  position?: [number, number];
  renderer?: JSX.Element;
}

export interface Touch {
  type: string;
  id: number;
  delta: { pageX: number; pageY: number; };
}

export interface BirdProps {
  body: Matter.Body;
  size: {
    width: number;
    height: number;
  };
  color: string;
}

export interface PhysicsProps {
  engine: Matter.Engine;
  world: Matter.World;
  body: Matter.Body;
}

/**
 * @param {BirdProps} bird - Bird properties for flappy bird
 * @param {PhysicsProps} physics - Physics properties for flappy bird
 * @param {any} [key] - Any other properties will be passed to the renderer
 */
export interface PhysicsEntities extends Entity {
  bird?: BirdProps;
  physics?: PhysicsProps;
  [key: string]: any;
}

export interface PhysicsDispatch {
  type: string;
  payload: any;
}

export interface PhysicsProps {
  touches: TouchEvent[],
  time: {
    type: string;
    id: number;
    delta: { pageX: number; pageY: number; };
  };
  dispatch: PhysicsDispatch;
}

export interface TouchEvent {
  touches: Touch[];
}
