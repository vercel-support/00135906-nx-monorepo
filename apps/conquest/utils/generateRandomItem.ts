const getRandomElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};
const itemRarities = ['common', 'uncommon', 'rare', 'very rare', 'legendary']; //magical items - use score to evaluate rarity
const itemConditions = ['new', 'good', 'used', 'damaged', 'broken']; //mostly descriptive
const quadrantOptions = [0, 1, 2, 3]; //0 back, 1 right, 2 front, 3 left
const sizeOptions = ['small', 'medium', 'large']; // structures mostly, species based
const interactableOptions = [true, false]; // speciality required (magical items, religion)
const lootOptions = ['gold', 'silver', 'copper', 'gems', 'lint', 'leaves']; //mostly containers: need locked, trapped, full, contents, size restrictions, empty, challenge rating

const generateRandomItem = (name, type, value) => {
  const rarity = getRandomElement(itemRarities);
  const condition = getRandomElement(itemConditions);
  const quadrant = getRandomElement(quadrantOptions);
  const size = getRandomElement(sizeOptions);
  const interactable = getRandomElement(interactableOptions);
  const loot = getRandomElement(lootOptions);

  let rarityMultiplier;
  switch (rarity) {
    case 'common':
      rarityMultiplier = 1;
      break;
    case 'uncommon':
      rarityMultiplier = 1.5;
      break;
    case 'rare':
      rarityMultiplier = 2;
      break;
    case 'very rare':
      rarityMultiplier = 2.5;
      break;
    case 'legendary':
      rarityMultiplier = 3;
      break;
    default:
      rarityMultiplier = 1;
  }

  let conditionMultiplier;
  switch (condition) {
    case 'new':
      conditionMultiplier = 4;
      break;
    case 'good':
      conditionMultiplier = 3;
      break;
    case 'used':
      conditionMultiplier = 2;
      break;
    case 'damaged':
      conditionMultiplier = 0.7;
      break;
    case 'broken':
      conditionMultiplier = 0.5;
      break;
    default:
      conditionMultiplier = 1;
  }

  const calculatedValue = Math.floor(
    value * rarityMultiplier * conditionMultiplier
  );

  const description = `This ${type} ${condition} ${name} is a ${rarity} item.`;

  return {
    type: type,
    name,
    description,
    location: quadrant,
    size,
    interactable,
    loot: loot,
    rarity,
    condition,
    value: calculatedValue,
  };
};

export default generateRandomItem;