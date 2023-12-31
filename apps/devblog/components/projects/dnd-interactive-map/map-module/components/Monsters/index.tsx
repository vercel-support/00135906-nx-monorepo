import { generateMonsters } from '../../utils';

import Monster from './Monster';

interface MonstersProps {
  dragBoundFunc: any;
}

const Monsters = ({ dragBoundFunc }: MonstersProps) => {
  const monsters = generateMonsters();

  return monsters.map((monster) => (
    <Monster
      key={`monster-${monster.id}`}
      id={monster.id}
      name={monster.className}
      x={monster.x}
      y={monster.y}
      className={monster.className}
      draggable
      dragBoundFunc={dragBoundFunc}
    />
  ));
};

export default Monsters;
