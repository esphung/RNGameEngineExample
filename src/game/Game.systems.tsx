import { Entity, Touch } from '../types';

interface MoveFingerTouches {
  touches: Touch[];
};

function MoveFinger(entities: Entity[], { touches }: MoveFingerTouches) {
  //-- I'm choosing to update the game state (entities) directly for the sake of brevity and simplicity.
  //-- There's nothing stopping you from treating the game state as immutable and returning a copy..
  //-- Example: return { ...entities, t.id: { UPDATED COMPONENTS }};
  //-- That said, it's probably worth considering performance implications in either case.

  touches.filter((t: Touch) => t.type === "move").forEach((t: Touch) => {
    let finger = entities[t.id] as Entity;
    if (finger && finger.position) {
      finger.position = [
        finger.position[0] + t.delta.pageX,
        finger.position[1] + t.delta.pageY
      ];
    }
  });

  return entities;
}

export { MoveFinger };
