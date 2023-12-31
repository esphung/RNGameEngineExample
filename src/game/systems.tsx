import { Engine } from "react-native-game-engine";
import { Entity } from "react-native-game-engine";

interface EngineExtended extends Engine {
  entities: Engine['entities'];
  touches: any;
};

function MoveFinger(entities: Engine['entities'], { touches }: { touches: EngineExtended['touches'] }): Engine['entities'] {

  //-- I'm choosing to update the game state (entities) directly for the sake of brevity and simplicity.
  //-- There's nothing stopping you from treating the game state as immutable and returning a copy..
  //-- Example: return { ...entities, t.id: { UPDATED COMPONENTS }};
  //-- That said, it's probably worth considering performance implications in either case.

  touches.filter((t: { type: string; }) => t.type === "move").forEach((t: {
    id: any;
    delta: { pageX: any; pageY: any; };
  }) => {
    let finger = entities[t.id] as Entity | undefined;
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
